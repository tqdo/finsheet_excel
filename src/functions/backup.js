async function equityHelper(symbol, metric, period = undefined, limit = undefined) {
    // return [["Please login using the sidebar"]];
    // console.log(123)
    if (period == null) { period = undefined}
    if (limit == null) { limit = undefined }
    var api_key = readCookie("finsheet_api_key");
    // console.log(api_key)
    var freq = period;
    var ticker = symbol;

    if (!api_key) {
        return [["Please login using the sidebar"]];
    }

    if (!ticker) {
        return [["Symbol cannot be empty"]];
    }
    if (typeof ticker !== "string") {
        return [["Symbol has to be a string"]];
    }
    ticker = ticker.toUpperCase();
    if (!metric) {
        return [["Metric cannot be empty"]];
    }
    metric = metric.toLowerCase();
    if (!(metric in map_excel_name_to_id) && !["bs", "cf", "ic"].includes(metric)) {
        return [["Unsupported metric"]];
    }
    if (freq === "") {
        freq = undefined;
    }

    if (typeof freq !== "string" && typeof freq !== "undefined") {
        return [["Period has to be a string"]];
    }
    if (limit === "") {
        limit = undefined;
    }
    if (typeof limit !== "number" && typeof limit !== "undefined") {
        return [["Limit has to be a positive interger"]];
    }
    if (typeof limit !== "undefined" && limit <= 0) {
        return [["Limit has to be a positive interger"]];
    }
    ////// Check if frequency is valid
    var id = metric in map_excel_name_to_id ? map_excel_name_to_id[metric] : metric;
    var is_full_statement = ["bs", "cf", "ic"].includes(id);

    // First if the freq is undefined and this metric has default freq, set to default
    if (freq === undefined && (is_full_statement || map_metrics[id].default_freq)) {
        if ([ "cf", "ic"].includes(id)) {
            freq = "TTM";
        } else if(id === 'bs'){
            freq = "Q"
        } else {
            freq = map_metrics[id].default_freq;
        }
    }
    // Next if user submit a freq but this metric has no freq (like price, share count...), then report error
    else if (!is_full_statement && !map_metrics[id].default_freq && freq !== undefined) {
        return [["This metric does not support periods"]];
    }

    // Now check whether the freq users enter is valid or not
    else if (freq !== undefined) {
        freq = freq.toUpperCase();

        if (["bs", "ic"].includes(id) && freq.includes("YTD")) {
            return [["Period YTD is only available for cf"]];
        }
        if (id === "bs" && freq.includes("TTM")) {
            return [["Period TTM is only available for ic and cf"]];
        }

        if (is_full_statement) {
            var supported_freq = id === "cf" ? ["FY", "TTM", "Q", "YTD"] : id === "bs" ? ["FY", "Q"] : ["FY", "TTM", "Q"];
            freq = isValidFreq_returnCleanString(freq, supported_freq, "TTM", id);
        } else if (map_metrics[id].default_freq) {
            freq = isValidFreq_returnCleanString(freq, map_metrics[id].supported_freq, map_metrics[id].default_freq, id);
        } else {
            freq = false;
        }
        if (freq === false) {
            return [["Invalid period"]];
        }
    }
    ///// Combine limit with freq to become series freq if applicable
    if (!is_full_statement && ["TTM", "FY", "Q", "YTD"].includes(freq) && limit && limit > 1) {
        freq += "@" + limit;
    }
    /// If not applicable, set limit = undefined (avoid getting useless output from Go and make it convenient to process data later)
    else if (!is_full_statement) {
        limit = undefined;
    }
    //// Prepare stuff to send to Go
    var prepare = {};
    if (!is_full_statement) {
        var metric_full_info = { field_code: id };
        if (freq !== "-1" && freq !== "" && freq !== undefined) {
            metric_full_info["period"] = freq;
        }
        prepare = generate_query(
            1,
            "watchlist",
            [],
            [metric_full_info],
            [],
            ["", ""],
            ticker,
            [metric_full_info],
            [ticker]
        );
    }
    prepare = { ...prepare, ...{ ticker: ticker, metric: id, freq: freq, api_key: api_key, limit: limit } };
    if (id == 206) {
        prepare["is_latest_price"] = "1";
    }
    //// Now get data
    const url = "https://finsheet.io/excel/standard?" + new URLSearchParams(prepare).toString()
    const response = await fetch(url);
    //Expect that status code is in 200-299 range
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    var json = await response.json()
    return handle_receive_AR_EQUITY(json, is_full_statement, id);
}

/**
 * @customfunction FS_EquityMetrics
 * @param symbol {string} Stock Symbol.
 * @param metric {string} Metric.
 * @param [period] {string} Period (optional).
 * @param [limit] {number} Limit (optional, default to 1).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityMetrics(symbol, metric, period = undefined, limit = undefined){
    if(!metric){return [["Metric cannot be empty"]]}
    metric = metric.toLowerCase()
    if(!(metric in map_excel_name_to_id) ){return [["Unsupported metric"]]}
    return equityHelper(symbol, metric, period , limit )
}

/**
 * @customfunction FS_EquityFullFinancials
 * @param symbol {string} Stock Symbol.
 * @param statement {string} Statement (bs, ic or cf).
 * @param [period] {string} Period (optional).
 * @param [limit] {number} Limit (optional, default to 1).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityFullFinancials(symbol, statement, period = undefined, limit = undefined){
    var metric = statement
    if(!metric){return [["Metric cannot be empty"]]}
    metric = metric.toLowerCase()
    if(!['bs', 'cf', 'ic'].includes(metric) ){return [["Unsupported metric"]]}
    return equityHelper(symbol, metric, period , limit )
}


var valid_resolution = {
    '1':1, '5':1, '15':1, '30':1, '60':1,
    'D': 1, 'W': 1, 'M': 1, 'd': 1, 'w': 1, 'm': 1
}
var lower_res = { 'd': 1, 'w': 1, 'm': 1 }
var properties = ["close", "open", "high", "low", "volume"]



async function candlesHelper(symbol, resolution, from, to = undefined, which="stock" ) {
    if (to == null) { to = undefined }
    var api_key = readCookie("finsheet_api_key");
    if (!api_key) { return [["Please login using the sidebar"]] }
    if (!symbol) { return [["Symbol cannot be empty"]] }
    if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }
    symbol = symbol.toUpperCase()

    if (!(resolution in valid_resolution)) { return [['Invalid resolution']] }
    if (resolution in lower_res) { resolution = resolution.toUpperCase() }

    //// Check from
    if(!from){return [["'from' cannot be empty"]]}
    // Handle unix time
    if(typeof from == 'number' || !isNaN(from)){
        from = Math.round(from)
    }
    // Now convert string/Date object or whatever input user gives.
    else{
        from = Date.parse(from) / 1000
        if(isNaN(from) || from < 0) return [["Invalid 'from'"]]
    }

    //// Check to
    if(to == '' || to === undefined){
        to = Date.parse(new Date()) / 1000
    }
    // Handle unix time
    else if(typeof to == 'number' || !isNaN(to)){
        to = Math.round(to)
    }
    // Now convert string/Date object or whatever input user gives.
    else{
        to = Date.parse(to) / 1000
        if(isNaN(to) || to < 0) return [["Invalid 'to'"]]
    }
    if(to <=from){return [["'to' cannot be before 'from'"]]}

    //// Send and get data
    var prepare = { ticker: symbol, resolution: resolution, from: from, to: to, api_key: api_key, properties: JSON.stringify(properties) , which: which}


    //// Now get data
    const url = "https://finsheet.io/excel/candles?" + new URLSearchParams(prepare).toString()
    const response = await fetch(url);

    //Expect that status code is in 200-299 range
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    var json = await response.json()
    var data = json.data

    var data_to_return = [['Period', 'Close', 'Open', 'High', 'Low', 'Volume']]
    if (!data.c) { return [['No data']] }
    for (var i = 0; i < data.c.length; i++) {
        data_to_return.push([new Date(data.t[i] * 1000), data.c[i], data.o[i], data.h[i], data.l[i], data.v[i]])
    }
    if (data_to_return.length < 2) { return [['No data']] }
    return data_to_return
}

/**
 * @customfunction FS_EquityCandles
 * @param symbol {string} Stock Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityCandles(symbol, resolution, from, to = undefined, ){
    return candlesHelper(symbol, resolution, from, to , "stock" )
}

/**
 * @customfunction FS_ForexCandles
 * @param symbol {string} Forex Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ForexCandles(symbol, resolution, from, to = undefined, ){
    return candlesHelper(symbol, resolution, from, to , "forex" )
}

/**
 * @customfunction FS_CryptoCandles
 * @param symbol {string} Crypto Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_CryptoCandles(symbol, resolution, from, to = undefined, ){
    return candlesHelper(symbol, resolution, from, to , "crypto" )
}

/**
 * @customfunction FS_EtfCandles
 * @param symbol {string} Etf Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EtfCandles(symbol, resolution, from, to = undefined, ){
    return candlesHelper(symbol, resolution, from, to , "etf" )
}




////// Websocket
function uniqid() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function connect() {
    window.socket = new WebSocket('ws://localhost:4000/ws')

    window.socket.onopen = function() {
        // window.socket.send(JSON.stringify({symbol: "BINANCE:BTCUSDT", "type": "subscribe",}))
    };

    window.socket.onmessage = function(e) {
        var data = JSON.parse(e.data)
        console.log(data.data)
        var msgId = data.id
        var f_callback = window.websocketMsgCallback[msgId]
        f_callback(data)
    };

    window.socket.onclose = function(e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function() {
            connect();
        }, 1000);
    };

    window.socket.onerror = function(err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        window.socket.close();
    };
}

window.websocketMsgCallback = {}
connect()


/**
 * @customfunction FS_EquityStreaming
 * @param symbol {string} Stock Symbol.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityStreaming(symbol,  ){
    var api_key = readCookie("finsheet_api_key");
    if (!api_key) { return [["Please login using the sidebar"]] }
    if (!symbol) { return [["Symbol cannot be empty"]] }
    if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }

    let id = uniqid()
    let msg = {symbol: symbol.toUpperCase(), id: id,}
    let f = function (data) {
        console.log(data)
    }

    window.websocketMsgCallback[id] = f
    window.socket.send(JSON.stringify(msg))
}
console.log("13")
/**
 * Stream Crypto Real-time price.
 * @customfunction FS_CRYPTOSTREAMING
 * @param symbol {string} Crypto Symbol.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_CRYPTOSTREAMING(symbol,  ){
    console.log(12)
    return [["a"]]

    var api_key = readCookie("finsheet_api_key");
    if (!api_key) { return [["Please login using the sidebar"]] }
    if (!symbol) { return [["Symbol cannot be empty"]] }
    if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }

    let id = uniqid()
    let msg = {symbol: symbol.toUpperCase(), id: id,}
    let f = function (data) {
        if(data){
            return [[data[0].p]]
        }
        console.log(data)
    }
    // BINANCE:BTCUSDT

    window.websocketMsgCallback[id] = f
    window.socket.send(JSON.stringify(msg))
}



function flattenHelper(arr, save){
    // console.log(arr, getArrayDepth(arr))
    if(getArrayDepth(arr) < 2){
        return arr
    }
    var res = []
    for(let i of arr){
        // console.log(i)
        // console.log(flattenHelper(i))
        res.push(flattenHelper(i, ))
    }
    return res
}