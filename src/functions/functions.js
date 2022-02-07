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
  const url = link + "/excel/standard?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);
  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  return handle_receive_AR_EQUITY(json, is_full_statement, id);
}

/**
 * @customfunction FS_EQUITYMETRICS FS_EquityMetrics
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
 * @customfunction FS_EQUITYFULLFINANCIALS FS_EquityFullFinancials
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

  var current_time = Date.parse(new Date()) / 1000
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
    to = current_time
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
  var prepare = { ticker: symbol, resolution: resolution, from: from, to: to, api_key: api_key, properties: JSON.stringify(properties) , which: which, }


  //// Now get data
  const url = link + "/excel/candles?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  var data_to_return = [['Period', 'Close', 'Open', 'High', 'Low', 'Volume']]
  if (!data.c) { return [['No data']] }
  if(data.c.constructor === Array){
    for(var i=0;i<data.c.length;i++){
      data_to_return.push([
        data.t && data.t[i] ? new Date(data.t[i] * 1000) : '',
        data.c[i] ? data.c[i] : '',
        data.o && data.o[i] ? data.o[i] : '',
        data.h && data.h[i] ? data.h[i] : '',
        data.l && data.l[i] ? data.l[i] : '',
        data.v && data.v[i] ? data.v[i] : '',
      ])
    }
  } else { // This result is from Quote (get the latest)
    data_to_return.push([
      data.t ?  new Date(data.t  * 1000) : '',
      data.c ? data.c : '' ,
      data.o ? data.o : '' ,
      data.h ? data.h : '' ,
      data.l ? data.l : '' ,
      data.v  ? data.v : ''
    ])
  }
  if (data_to_return.length < 2) { return [['No data']] }
  console.log(data_to_return)
  return data_to_return
}

/**
 * @customfunction FS_EQUITYCANDLES FS_EquityCandles
 * @param symbol {string} Stock Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From (optional).
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityCandles(symbol, resolution, from= undefined, to = undefined, ){
  return candlesHelper(symbol, resolution, from, to , "stock" )
}

/**
 * @customfunction FS_FOREXCANDLES FS_ForexCandles
 * @param symbol {string} Forex Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From (optional).
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ForexCandles(symbol, resolution, from= undefined, to = undefined, ){
  return candlesHelper(symbol, resolution, from, to , "forex" )
}

/**
 * @customfunction FS_CRYPTOCANDLES FS_CryptoCandles
 * @param symbol {string} Crypto Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From (optional).
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_CryptoCandles(symbol, resolution, from= undefined, to = undefined, ){
  return candlesHelper(symbol, resolution, from, to , "crypto" )
}

/**
 * @customfunction FS_ETFCANDLES FS_EtfCandles
 * @param symbol {string} Etf Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From (optional).
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EtfCandles(symbol, resolution, from= undefined, to = undefined, ){
  return candlesHelper(symbol, resolution, from, to , "etf" )
}

/**
 * @customfunction FS_MUTUALFUNDCANDLES FS_MutualFundCandles
 * @param symbol {string} Mutual Fund Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From (optional).
 * @param [to] {string} To (optional).
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_MutualFundCandles(symbol, resolution, from= undefined, to = undefined, ){
  return candlesHelper(symbol, resolution, from, to , "mutual_fund" )
}

/**
 * @customfunction FS_FOREXALLRATES FS_ForexAllRates
 * @param base_currency {string} base_currency.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ForexAllRates(base_currency="USD", ){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }

  //// Now get data
  var prepare = {base_currency: base_currency, api_key: api_key}
  const url = link + "/excel/forex_all_rates?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data
  var data_to_return = []
  for(var key of Object.keys(data)){
    data_to_return.push([key, data[key]])
  }
  console.log(data_to_return)
  return data_to_return
}

var map_name_crypto_profile = {
  "name": "Name",
  "longName": "Full Name",
  "description": "Description",
  "marketCap": "Market Capitalization",
  "totalSupply": "Total Supply",
  "maxSupply": "Max Supply",
  "circulatingSupply": "Circulating Supply",
  "launchDate": "Launch Date",
  "website": "Website",
  "proofType": "Proof Type"
}

/**
 * @customfunction FS_CRYPTOPROFILE FS_CryptoProfile
 * @param symbol {string} Crypto symbol such as BTC or ETH.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_CryptoProfile(symbol, ){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  if(symbol.includes(':')){return [['Invalid symbol, make sure it does not include exchange name']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, which: "crypto_profile"}
  const url = link + "/excel/asset_profile?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data
  var data_to_return = []
  for(var key of Object.keys(map_name_crypto_profile)){
    if(data[key]){
      data_to_return.push([map_name_crypto_profile[key], data[key]])
    }
  }
  console.log(data_to_return)
  return data_to_return
}


var map_name_etf_profile = {
  "assetClass": "Asset Class",
  "aum": "AUM",
  "avgVolume": "Avg Volume",
  "cusip": "CUSIP",
  "description": "Description",
  "domicile": "Domicile",
  "etfCompany": "ETF Issuer",
  "expenseRatio": "Expense Ratio",
  "inceptionDate": "Inception Date",
  "investmentSegment": "Investment Segment",
  "isin": "ISIN",
  "name": "Name",
  "nav": "NAV",
  "navCurrency": "NAV Currency",
  "priceToBook": "P/B",
  "priceToEarnings": "P/E",
  "trackingIndex": "Tracking Index",
  "website": "Website"
}
/**
 * @customfunction FS_ETFPROFILE FS_EtfProfile
 * @param symbol {string} ETF symbol.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EtfProfile(symbol, ){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, which: "etf_profile"}
  const url = link + "/excel/asset_profile?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  // console.log(json)
  if('message' in json){return [[json.message]]}
  var data = json.data.profile
  var data_to_return = []
  if(json.data.symbol){data_to_return = [['Symbol', json.data.symbol]]}
  for(var key of Object.keys(map_name_etf_profile)){
    if(data[key]){
      data_to_return.push([map_name_etf_profile[key], data[key]])
    }
  }
  console.log(data_to_return)
  return data_to_return
}

var map_name_mutual_fund_profile = {
  "benchmark": "Benchmark",
  "beta": 'Beta',
  "category": "Category",

  "description": 'Description',
  "expenseRatio": 'Expense Ratio',

  "fundFamily": "Fund Family",
  "inceptionDate": "Inception Date",
  "investmentSegment": "Investment Segment",

  "name": "Full Name",

  "totalNav": "Total NAV",
  "turnover": "Turnover"
}

/**
 * @customfunction FS_MUTUALFUNDPROFILE FS_MutualFundProfile
 * @param symbol {string} Mutual Fund symbol.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_MutualFundProfile(symbol, ){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, which: "mutual_fund_profile"}
  const url = link + "/excel/asset_profile?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  // console.log(json)
  if('message' in json){return [[json.message]]}
  var data = json.data.profile
  var data_to_return = []
  if(json.data.symbol){data_to_return = [['Symbol', json.data.symbol]]}
  for(var key of Object.keys(map_name_mutual_fund_profile)){
    if(data[key]){
      data_to_return.push([map_name_mutual_fund_profile[key], data[key]])
    }
  }
  console.log(data_to_return)
  return data_to_return
}


/**
 * @customfunction FS_LATEST FS_Latest
 * @param symbol {string} Symbol.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_Latest(symbol, ){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {ticker: symbol, api_key: api_key, }
  const url = link + "/excel/latest?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}

  return [[json.data]]
}

////// Websocket


function connect(first_symbol) {
  window.socket = new WebSocket('wss://' + link.slice(8,) + '/ws')

  window.socket.onopen = function() {
    console.log('Socket open')
    if(first_symbol){
      window.socket.send(JSON.stringify({symbol: first_symbol, "type": "subscribe",}))
    }
  };

  window.socket.onmessage = function(e) {
    if(window.Should_Update_Streaming){   // Whether user chooses to pause or not pause streaming
      var data = JSON.parse(e.data)
      var symbol = data.data[0].s
      window.OldBigSymbolPriceMap[symbol] = window.BigSymbolPriceMap[symbol]
      window.BigSymbolPriceMap[symbol] = data.data[0].p
    }
  };

  window.socket.onclose = function(e) {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
    setTimeout(function() {
      window.have_not_reconnect_websocket = false
      connect();
    }, 1000);
  };

  window.socket.onerror = function(err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    window.socket.close();
  };
}

window.OldBigSymbolPriceMap = {}
window.BigSymbolPriceMap = {}
// window.OldEachCellStreamingValue = {}
window.EachCellStreamingValue = {}

window.Should_Update_Streaming = true
window.have_not_reconnect_websocket = true
window.have_not_add_on_calculated_trigger = true
window.have_not_set_interval_change_color = true

connect()

/**
 * Stream Real-time price for Stocks, Cryptos, Forex, ETFs and Mutual Funds.
 * @customfunction FS_STREAMING FS_Streaming
 * @param symbol {string}  Symbol.
 * @param {CustomFunctions.StreamingInvocation<string>} invocation * ...
 */
async function FS_Streaming(symbol, invocation ){
  Excel.run(async (context) => {
    if(window.have_not_set_interval_change_color){
      window.have_not_set_interval_change_color = false
      setInterval(async () => {
        if(!window.Should_Update_Streaming){return}
        var active_sheet = context.workbook.worksheets.getActiveWorksheet();
        var range = active_sheet.getUsedRange(true);
        range.load("formulas");
        range.load("address");
        range.load("values");

        await context.sync()
            .then(async function () {
              var sheet_id = active_sheet.id

              var address_portion = range.address.split('!')[1].split(':')[0]
              var starting_row = 0, starting_col = 0
              for(var i=0; i<address_portion.length; i++){
                if(!isNaN(address_portion[i])){
                  starting_col = colnameToNumber(address_portion.slice(0,i)) - 1
                  starting_row = parseInt(address_portion.slice(i,)) -1
                  break
                }
              }




              var green_cell = []
              var red_cell = []
              var formulas = range.formulas
              var values = range.values
              for(var i=0;i<formulas.length; i++){
                for(var j=0;j<formulas[0].length; j++ ){
                  var current_formula = formulas[i][j]
                  if(current_formula.toLowerCase().startsWith('=fs_streaming(')){
                    var arr = current_formula.split('"')
                    // This one handle when formula is direct like FS_Streaming("AAPL")
                    if(arr.length === 3){
                      var symbol = arr[1]
                      if(window.BigSymbolPriceMap[symbol] && window.OldBigSymbolPriceMap[symbol]){
                        if(window.BigSymbolPriceMap[symbol] > window.OldBigSymbolPriceMap[symbol]){
                          green_cell.push([starting_row + i, starting_col + j])
                        } else if(window.BigSymbolPriceMap[symbol] < window.OldBigSymbolPriceMap[symbol]){
                          red_cell.push([starting_row + i, starting_col + j])
                        }
                        // // After updating color once, set they equal each other so that no more color change while waiting for new websocket message
                        // window.OldBigSymbolPriceMap[symbol] = window.BigSymbolPriceMap[symbol]
                      }
                    }

                    // This one handle when formula refers to another cell (save data to global dict, compare before and after
                    else {
                      var used_key = sheet_id + '@@' + (starting_row + i) + '@@' + (starting_col + j)
                      if(window.EachCellStreamingValue[used_key] && values[i][j]){
                        if(values[i][j] > window.EachCellStreamingValue[used_key] ){
                          green_cell.push([starting_row + i, starting_col + j])
                        } else if(values[i][j] < window.EachCellStreamingValue[used_key] ){
                          red_cell.push([starting_row + i, starting_col + j])
                        }
                      }
                      window.EachCellStreamingValue[used_key] = values[i][j]
                    }
                  }
                }
              }

              // Now change background color
              var temp_arr = [[green_cell, '#2cbd54'], [red_cell, '#ff6669']]
              for(var sub_arr of temp_arr){
                var cell_text = ''
                for(var arr of sub_arr[0]){
                  var col_name = getExcelColName(arr[1])
                  cell_text += col_name.toUpperCase() + (arr[0] + 1) + ':' + col_name.toUpperCase() + (arr[0] + 1) + ', '
                }
                if(cell_text !== ''){cell_text = cell_text.slice(0, cell_text.length - 2)}
                const  green_area = active_sheet.getRanges(cell_text);
                if(cell_text){
                  // console.log(cell_text, window.OldBigSymbolPriceMap, window.BigSymbolPriceMap)
                  green_area.format.font.color = sub_arr[1];

                  await context.sync().then(async function(){
                    // setTimeout(async function() {
                    //   const green_area = active_sheet.getRanges(cell_text);
                    //   green_area.format.font.color = "black";
                    //   await context.sync()
                    // }, 500);

                  });
                }
              }


            });

      }, 500);


    }

  });


  console.log('crypto')
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return "Please login using the sidebar" }
  if (!symbol) { return "Symbol cannot be empty" }
  if (typeof symbol !== 'string') { return 'Symbol has to be a string' }

  symbol = symbol.toUpperCase()
  // The first if is to use the first time when user open the file, since websocket is delayed, we connect to websocket here
  if((!window.socket || window.socket.readyState !== window.socket.OPEN) && window.have_not_reconnect_websocket){
    // console.log(window.socket.readyState, window.socket.OPEN)
    connect(symbol)
  } else if(!(symbol in window.BigSymbolPriceMap)){
    // console.log(0)
    let msg = {symbol: symbol,   type: "subscribe"}
    window.socket.send(JSON.stringify(msg))
    // console.log(3)
  }

  const timer = setInterval(() => {
    const result = window.BigSymbolPriceMap[symbol];
    // console.log(invocation)
    invocation.setResult(result);
  }, 500);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

