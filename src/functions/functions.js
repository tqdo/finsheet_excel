function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
async function equityHelper(symbol, metric, period = undefined, limit = undefined, options = undefined) {
  // return [["Please login using the sidebar"]];
  // console.log(123)
  var sub_options = options
  if(!sub_options){sub_options=""}

  if (period == null) { period = undefined}
  if (limit == null) { limit = undefined }
  var api_key = readCookie("finsheet_api_key");
  // console.log(api_key)
  var freq = period;
  var ticker = symbol;

  if (!api_key) {
    return [["Please login using the sidebar"]];
  }

  // Check if just 1 cell 1 ticker convert the array to string
  // console.log('ticker', ticker)
  if(Array.isArray(ticker)){
    if(!Array.isArray(ticker[0])  ){
      ticker = ticker[0]
    } else if(ticker.length === 1 && ticker[0].length === 1){
      ticker = ticker[0][0]
    }
  }

  var unique_tickers = {}
  // console.log('ticker', ticker)
  if(!Array.isArray(ticker)){  // Do these checks if ticker is just one value (from FS_EquityFullFinancials)
    if (!ticker) {
      return [["Symbol cannot be empty"]];
    }
    if (typeof ticker !== "string") {
      return [["Symbol has to be a string"]];
    }
    if(ticker.includes(",") || ticker.includes(";")){return ["Invalid symbol"]}
    ticker = ticker.toUpperCase();
  } else {      // This is from FS_EquityMetrics
    if(limit !== undefined && limit !== 1 && limit !== ""  ){
      return [['To get data for multiple stocks, limit has to be 1 or empty.']]
    }

    for(let sub_arr of ticker){
      for(let tick of sub_arr){
        if(tick){
          unique_tickers[tick] = 1
        }
      }
    }
    if(Object.keys(unique_tickers).length < 1){return [['Symbols cannot be empty']]}
    if(Object.keys(unique_tickers).length > 100){return [['Too many symbols, maximum is 100 each time.']]}
  }


  if (!metric) {
    return [["Metric cannot be empty"]];
  }
  metric = metric.toLowerCase();

  if (!(metric in map_excel_name_to_id) && !["bs", "cf", "ic"].includes(metric)) {
    return [["Unsupported metric"]];
  }

  if(metric === 'price_latest' && Array.isArray(ticker)  ){return [['This metric does not support multiple symbols at the same time.']]}

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
    return [["Limit has to be a positive integer"]];
  }
  if (typeof limit !== "undefined" && limit <= 0) {
    return [["Limit has to be a positive integer"]];
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
    // console.log(id, map_metrics[id].default_freq)
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

  var is_nh = limit < 2 || limit == undefined || freq.includes('.')  || freq.includes('-') || freq.includes('+') || sub_options.toLowerCase().indexOf('nh') !== -1
  if(sub_options.toLowerCase().includes('h') && sub_options.toLowerCase().indexOf('nh') === -1){
    is_nh = false
  }
  if(Array.isArray(ticker) && !is_nh){
    return [["can't display header when there are multiple tickers as input"]]
  }
  var only_get_latest_when_limit_larger_1 = false
  if(!Array.isArray(ticker) && !is_nh && (limit < 2 || limit == undefined)){ // only 1 stock and needs header
    if(["TTM", "FY", "Q", "YTD"].includes(freq)){ // if default, since can't call time series to get the exact date, set limit to 2 so that it calls time series automatically
      only_get_latest_when_limit_larger_1 = true
      limit = 2
    }
  }

  ///// Combine limit with freq to become series freq if applicable
  if (!is_full_statement && ["TTM", "FY", "Q", "YTD"].includes(freq) && limit && limit > 1) {
    freq += "@" + limit;
  }
  /// If not applicable, set limit = undefined (avoid getting useless output from Go and make it convenient to process data later)
  else if (!is_full_statement) {
    limit = 'undefined';
  }

  // console.log(13, freq, limit)
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
        Array.isArray(ticker) ? Object.keys(unique_tickers) : [ticker]
    );
  }
  prepare = { ...prepare, ...{ ticker: (Array.isArray(ticker)  ? '[' + Object.keys(unique_tickers).length.toString() : ticker), metric: id,
      freq: freq, api_key: api_key, limit: limit ? limit.toString() : 'undefined' , is_full_statement: is_full_statement ? "y" : "n" , is_share: id == '37' ? 'y' :'n', is_nh: is_nh ? 'y' : 'n'} };
  if (id == 206) {
    prepare["is_latest_price"] = "1";
  }
  // console.log('ticker', prepare)
  //// Now get data
  var urlParams = {api_key: api_key, limit: limit, is_full_statement: is_full_statement ? "y" : "n", freq: freq, is_share: id == '37' ? 'y' :'n', function_name: 'FS_EquityMetrics',  is_nh: is_nh ? 'y' : 'n'}
  const url = link + "/qweiop/standard?" + new URLSearchParams(urlParams).toString()
  const response = await fetch(url, {method: 'POST', body: JSON.stringify(prepare)});

  if (!response.ok) {
    var error = await response.text()
    // console.log("err", error)
    try{return [[JSON.parse(error).error]]}
    catch (e) {return [['Rate limit reached. Please try again later.']]}
  }
  var json = await response.json()
  // console.log( json)
  if('message' in json){return [[json.message]]}
  return handle_receive_AR_EQUITY(json, is_full_statement, id, ticker, unique_tickers, is_nh, only_get_latest_when_limit_larger_1);
}
// async function equityHelper(symbol, metric, period = undefined, limit = undefined) {
//   // return [["Please login using the sidebar"]];
//   // console.log(123)
//
//   if (period == null) { period = undefined}
//   if (limit == null) { limit = undefined }
//   var api_key = readCookie("finsheet_api_key");
//   // console.log(api_key)
//   var freq = period;
//   var ticker = symbol;
//
//   if (!api_key) {
//     return [["Please login using the sidebar"]];
//   }
//
//   if (!ticker) {
//     return [["Symbol cannot be empty"]];
//   }
//   if (typeof ticker !== "string") {
//     return [["Symbol has to be a string"]];
//   }
//   if(ticker.includes(",") || ticker.includes(";")){return ["Invalid symbol"]}
//   ticker = ticker.toUpperCase();
//
//
//
//   if (!metric) {
//     return [["Metric cannot be empty"]];
//   }
//   metric = metric.toLowerCase();
//
//   if (!(metric in map_excel_name_to_id) && !["bs", "cf", "ic"].includes(metric)) {
//     return [["Unsupported metric"]];
//   }
//   if (freq === "") {
//     freq = undefined;
//   }
//
//   if (typeof freq !== "string" && typeof freq !== "undefined") {
//     return [["Period has to be a string"]];
//   }
//   if (limit === "") {
//     limit = undefined;
//   }
//   if (typeof limit !== "number" && typeof limit !== "undefined") {
//     return [["Limit has to be a positive integer"]];
//   }
//   if (typeof limit !== "undefined" && limit <= 0) {
//     return [["Limit has to be a positive integer"]];
//   }
//   ////// Check if frequency is valid
//   var id = metric in map_excel_name_to_id ? map_excel_name_to_id[metric] : metric;
//   var is_full_statement = ["bs", "cf", "ic"].includes(id);
//
//   // First if the freq is undefined and this metric has default freq, set to default
//   if (freq === undefined && (is_full_statement || map_metrics[id].default_freq)) {
//     if ([ "cf", "ic"].includes(id)) {
//       freq = "TTM";
//     } else if(id === 'bs'){
//       freq = "Q"
//     } else {
//       freq = map_metrics[id].default_freq;
//     }
//   }
//   // Next if user submit a freq but this metric has no freq (like price, share count...), then report error
//   else if (!is_full_statement && !map_metrics[id].default_freq && freq !== undefined) {
//     return [["This metric does not support periods"]];
//   }
//
//   // Now check whether the freq users enter is valid or not
//   else if (freq !== undefined) {
//     freq = freq.toUpperCase();
//
//     if (["bs", "ic"].includes(id) && freq.includes("YTD")) {
//       return [["Period YTD is only available for cf"]];
//     }
//     if (id === "bs" && freq.includes("TTM")) {
//       return [["Period TTM is only available for ic and cf"]];
//     }
//
//     if (is_full_statement) {
//       var supported_freq = id === "cf" ? ["FY", "TTM", "Q", "YTD"] : id === "bs" ? ["FY", "Q"] : ["FY", "TTM", "Q"];
//       freq = isValidFreq_returnCleanString(freq, supported_freq, "TTM", id);
//     } else if (map_metrics[id].default_freq) {
//       freq = isValidFreq_returnCleanString(freq, map_metrics[id].supported_freq, map_metrics[id].default_freq, id);
//     } else {
//       freq = false;
//     }
//     if (freq === false) {
//       return [["Invalid period"]];
//     }
//   }
//   ///// Combine limit with freq to become series freq if applicable
//   if (!is_full_statement && ["TTM", "FY", "Q", "YTD"].includes(freq) && limit && limit > 1) {
//     freq += "@" + limit;
//   }
//   /// If not applicable, set limit = undefined (avoid getting useless output from Go and make it convenient to process data later)
//   else if (!is_full_statement) {
//     limit = undefined;
//   }
//   //// Prepare stuff to send to Go
//   var prepare = {};
//   if (!is_full_statement) {
//     var metric_full_info = { field_code: id };
//     if (freq !== "-1" && freq !== "" && freq !== undefined) {
//       metric_full_info["period"] = freq;
//     }
//     prepare = generate_query(
//         1,
//         "watchlist",
//         [],
//         [metric_full_info],
//         [],
//         ["", ""],
//         ticker,
//         [metric_full_info],
//         [ticker]
//     );
//   }
//   prepare = { ...prepare, ...{ ticker: ticker, metric: id, freq: freq, api_key: api_key, limit: limit , is_full_statement: is_full_statement ? "y" : "n" } };
//   if (id == 206) {
//     prepare["is_latest_price"] = "1";
//   }
//   //// Now get data
//   const url = link + "/qweiop/standard?" + new URLSearchParams(prepare).toString()
//   const response = await fetch(url);
//
//   if (!response.ok) {
//     var error = await response.text()
//     // console.log("err", error)
//     try{return [[JSON.parse(error).error]]}
//     catch (e) {return [['Rate limit reached. Please try again later.']]}
//   }
//   var json = await response.json()
//   // console.log(response, json)
//   if('message' in json){return [[json.message]]}
//   return handle_receive_AR_EQUITY(json, is_full_statement, id);
// }

/**
 * @customfunction FS_TEST FS_Test
 * @param symbol {string[][]} Stock Symbol.
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_Test(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [[""]]}
  var ticker = symbol


  if(Array.isArray(ticker)){
    if(!Array.isArray(ticker[0])  ){
      ticker = ticker[0]
    } else if(ticker.length === 1 && ticker[0].length === 1){
      ticker = ticker[0][0]
    }
  }

  if(!Array.isArray(ticker)){
    ticker = [[ticker]]
  } else {// todo: for now only allow 1 ticker, in the future when find a way to get latest price efficiently for multi stocks then
          //       allow multi stocks
    return [['Multiple tickers are not allowed.']]
  }

  var unique_tickers = {}
  for(let sub_arr of ticker){
    for(let tick of sub_arr){
      if(tick){
        unique_tickers[tick] = 1
      }
    }
  }

  if(Object.keys(unique_tickers).length < 1){return [['Symbols cannot be empty']]}
  if(Object.keys(unique_tickers).length > 100){return [['Too many symbols, maximum is 100 each time.']]}


  //// Now get data
  var prepare = {ticker: Object.keys(unique_tickers), api_key: api_key,   }

  var urlParams = {  api_key: api_key, }
  const url = link + "/qweiop/latest?" + new URLSearchParams(urlParams).toString()
  const response = await fetch(url, {method: 'POST', body: JSON.stringify(prepare)});

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}

  return [[json.data]]
}


/**
 * @customfunction FS_EQUITYMETRICS FS_EquityMetrics
 * @param symbol {string[][]} Stock Symbol.
 * @param metric {string} Metric.
 * @param [period] {string} Period (optional).
 * @param [limit] {number} Limit (optional, default to 1).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityMetrics(symbol, metric, period = undefined, limit = undefined, options = undefined, invocation){
  if(!metric){return [["Metric cannot be empty"]]}
  metric = metric.toLowerCase()
  if(!(metric in map_excel_name_to_id) ){return [["Unsupported metric"]]}
  if(!symbol){return [['']]}
  const  to_return = equityHelper(symbol, metric, period , limit , options)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

/**
 * @customfunction FS_EQUITYFULLFINANCIALS FS_EquityFullFinancials
 * @param symbol {string} Stock Symbol.
 * @param statement {string} Statement (bs, ic or cf).
 * @param [period] {string} Period (optional).
 * @param [limit] {number} Limit (optional, default to 1).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityFullFinancials(symbol, statement, period = undefined, limit = undefined, invocation){
  var metric = statement
  if(!metric){return [["Metric cannot be empty"]]}
  metric = metric.toLowerCase()
  if(!['bs', 'cf', 'ic'].includes(metric) ){return [["Unsupported metric"]]}
  const  to_return = equityHelper(symbol, metric, period , limit )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}


var valid_resolution = {
  '1':1, '5':1, '15':1, '30':1, '60':1,
  'D': 1, 'W': 1, 'M': 1, 'd': 1, 'w': 1, 'm': 1
}
var lower_res = { 'd': 1, 'w': 1, 'm': 1 }
var properties = ["close", "open", "high", "low", "volume"]



async function candlesHelper(symbol, resolution, from, to = undefined,metrics= undefined, options= undefined, which="stock" ) {
  if (to == null) { to = undefined }
  // console.log(from, to)
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!symbol) { return [["Symbol cannot be empty"]] }
  if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }
  if(symbol.includes(",") || symbol.includes(";")){return ["Invalid symbol"]}
  symbol = symbol.toUpperCase()

  if (!(resolution in valid_resolution)) { return [['Invalid resolution']] }
  if (resolution in lower_res) { resolution = resolution.toUpperCase() }

  var current_time = Date.parse(new Date()) / 1000
  //// Check from
  if(!from){return [["'from' cannot be empty"]]}

  // Handle unix time
  if(typeof from == 'number' || !isNaN(from)){
    if(from < 73000){
      from = (from -25569)*86400
    }
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
    if(to < 73000){
      to = (to -25569)*86400
    }
    to = Math.round(to)
  }
  // Now convert string/Date object or whatever input user gives.
  else{
    to = Date.parse(to) / 1000
    if(isNaN(to) || to < 0) return [["Invalid 'to'"]]
  }
  if(to <from){return [["'to' has to be after or equal to 'from'"]]}
  var to_equal_from = 0
  if(to == from){
    to = from + resolution_map_to_seconds[resolution]
    to_equal_from = 1
  }

  var function_name = 'FS_EquityCandles'
  if(which == 'future'){
    function_name = 'FS_FuturesCandles'
  } else if(which == 'etf'){
    function_name = 'FS_EtfCandles'
  } if(which == 'mutual_fund'){
    function_name = 'FS_MutualFundCandles'
  } if(which == 'crypto'){
    function_name = 'FS_CryptoCandles'
  } if(which == 'forex'){
    function_name = 'FS_ForexCandles'
  }

  //// Send and get data
  var prepare = { ticker: symbol, resolution: resolution, from: from, to: to, api_key: api_key, properties: JSON.stringify(properties) , which: which, function_name: function_name }


  //// Now get data
  const url = link + "/qweiop/candles?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  // Handle options
  if(!options){options = ''}
  var is_nh = options.toLowerCase().includes('nh')
  var is_desc = options.toLowerCase().includes('-')
  var is_ct = options.toLowerCase().includes('ct')

  // Handle metrics / columns
  var headers = []
  var map_col_name = {'Period': 't',  'Open': 'o', 'High': 'h', 'Low': 'l','Close': 'c', 'Volume': 'v'}
  if(!metrics || metrics == "all" || metrics == "All" || metrics == 'ALL'){headers = ['Period',  'Open', 'High', 'Low','Close', 'Volume']}
  else {
    var arr_metrics = metrics.split('&')
    for(var elem of arr_metrics){
      var reformat = capFirst(elem.toLowerCase())
      if(reformat in map_col_name){
        headers.push(reformat)
      }
    }
  }

  var data_to_return = []
  if(!data.c ){return [['No data']]}
  if(data.c.constructor === Array){
    for(var i=0;i<data.c.length;i++){
      // var pre_time = new Date(data.t[i] * 1000);
      // var correct_time = new Date(pre_time.getTime() + pre_time.getTimezoneOffset() * 60000);
      // if(i<1){Logger.log([data.t[i], new Date(data.t[i] * 1000).toISOString()] )}
      // data_to_return.push([new Date(data.t[i] * 1000), data.c[i], data.o[i], data.h[i], data.l[i], data.v[i]])

      var one_row = []
      for(var elem of headers){
        if(elem == 'Period'){
          one_row.push(data.t && data.t[i] ? (is_ct ? new Date(data.t[i] * 1000) : data.t[i]): '')
        } else {
          one_row.push(data[map_col_name[elem]] && data[map_col_name[elem]][i] ? data[map_col_name[elem]][i] : '')
        }
      }
      data_to_return.push(one_row)
      if(to_equal_from){break}

    }
  } else { // This result is from Quote (get the latest)
    data_to_return.push([
      data.t ?  new Date(data.t  * 1000) : '',
      data.o ? data.o : '' ,
      data.h ? data.h : '' ,
      data.l ? data.l : '' ,
      data.c ? data.c : '' ,
      data.v  ? data.v : ''
    ])
  }

  if(data_to_return.length < 1){return [['No data']]}

  if(is_desc){
    data_to_return.reverse()
  }

  if(!is_nh){
    data_to_return = [headers].concat(data_to_return)
  }
  return data_to_return
}

/**
 * @customfunction FS_EQUITYCANDLES FS_EquityCandles
 * @param symbol {string} Stock Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [metrics] {string} Metrics (optional).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityCandles(symbol, resolution, from= undefined, to = undefined, metrics=undefined, options=undefined , invocation){
  const  to_return = candlesHelper(symbol, resolution, from, to , metrics, options,"stock" )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

/**
 * @customfunction FS_FOREXCANDLES FS_ForexCandles
 * @param symbol {string} Forex Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [metrics] {string} Metrics (optional).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ForexCandles(symbol, resolution, from= undefined, to = undefined, metrics=undefined, options=undefined, invocation){
  const  to_return = candlesHelper(symbol, resolution, from, to , metrics, options,"forex" )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

/**
 * @customfunction FS_CRYPTOCANDLES FS_CryptoCandles
 * @param symbol {string} Crypto Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [metrics] {string} Metrics (optional).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_CryptoCandles(symbol, resolution, from= undefined, to = undefined, metrics=undefined, options=undefined, invocation){
  const  to_return = candlesHelper(symbol, resolution, from, to , metrics, options,"crypto" )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return

}

/**
 * @customfunction FS_ETFCANDLES FS_EtfCandles
 * @param symbol {string} Etf Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [metrics] {string} Metrics (optional).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EtfCandles(symbol, resolution, from= undefined, to = undefined, metrics=undefined, options=undefined, invocation){
  const  to_return = candlesHelper(symbol, resolution, from, to , metrics, options,"etf" )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

/**
 * @customfunction FS_MUTUALFUNDCANDLES FS_MutualFundCandles
 * @param symbol {string} Mutual Fund Symbol.
 * @param resolution {string} Resolution.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [metrics] {string} Metrics (optional).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_MutualFundCandles(symbol, resolution, from= undefined, to = undefined, metrics=undefined, options=undefined , invocation){
   const  to_return = candlesHelper(symbol, resolution, from, to , metrics, options,"mutual_fund" )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperAllRate(base_currency){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }

  //// Now get data
  var prepare = {base_currency: base_currency, api_key: api_key, function_name: 'FS_ForexAllRates'}
  const url = link + "/qweiop/forex_all_rates?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data
  var data_to_return = []
  for(var key of Object.keys(data)){
    data_to_return.push([key, data[key]])
  }
  return data_to_return.length > 0 ? data_to_return : [['No data']]
}
/**
 * @customfunction FS_FOREXALLRATES FS_ForexAllRates
 * @param base_currency {string} base_currency.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ForexAllRates(base_currency="USD", invocation ){
  const  to_return = helperAllRate(base_currency)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
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

async function helperCryptoProfile(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  if(symbol.includes(':')){return [['Invalid symbol, make sure it does not include exchange name']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, which: "crypto_profile", function_name: 'FS_CryptoProfile'}
  const url = link + "/qweiop/asset_profile?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
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
  return data_to_return
}
/**
 * @customfunction FS_CRYPTOPROFILE FS_CryptoProfile
 * @param symbol {string} Crypto symbol such as BTC or ETH.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_CryptoProfile(symbol, invocation ){
  const  to_return = helperCryptoProfile(symbol)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
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
async function helperEtfProfile(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, which: "etf_profile", function_name: 'FS_EtfProfile'}
  const url = link + "/qweiop/asset_profile?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
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
  return data_to_return.length > 0 ? data_to_return : [['No data']]
}

/**
 * @customfunction FS_ETFPROFILE FS_EtfProfile
 * @param symbol {string} ETF symbol.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EtfProfile(symbol, invocation){
  const  to_return = helperEtfProfile(symbol)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
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

async function helperMutualFundProfile(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, which: "mutual_fund_profile", function_name: 'FS_MutualFundProfile'}
  const url = link + "/qweiop/asset_profile?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
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
  return data_to_return.length > 0 ? data_to_return : [['No data']]
}

/**
 * @customfunction FS_MUTUALFUNDPROFILE FS_MutualFundProfile
 * @param symbol {string} Mutual Fund symbol.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_MutualFundProfile(symbol, invocation ){
  const  to_return = helperMutualFundProfile(symbol)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function holdingsHelper(symbol, skip, which){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  if(skip == undefined || skip === ''){skip = 0}
  if(typeof skip !== 'number' && typeof skip !== 'undefined' ){return 'skip has to be an integer'}

  var function_name = 'FS_EtfHoldings'
  if(which == 'mutual_fund_holdings'){
    function_name = 'FS_MutualFundsHoldings'
  }

  var prepare = {symbol: symbol, skip: skip.toString(), api_key: api_key, which: which, function_name: function_name}
  const url = link + "/qweiop/asset_holdings?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }

  var json = await response.json()
  // console.log(json)
  if('message' in json){return json.message}

  try {
    var data_to_return = [['Date', json.data.atDate, '','','','', ''], ['Symbol', 'CUSIP', 'ISIN', 'Name', 'Percent', 'Share', 'Value']]
    var data= json.data.holdings
    for(var dic of data){
      var arr = []
      for(var key of Object.keys(map_name_holdings)){
        if(dic[key] !== null && dic[key] !== undefined){arr.push(dic[key])}else{arr.push('')}
      }
      data_to_return.push(arr)
    }
    return data_to_return.length > 2 ? data_to_return : [['No data']]
  } catch(e){
    return [['No data']]
  }
}
var map_name_holdings = {
  "symbol": "Symbol",
  "cusip": 'CUSIP',
  "isin": "ISIN",
  "name": 'Name',
  "percent": 'Percent',
  "share": "Share",
  "value": "Value",
}
/**
 * @customfunction FS_ETFHOLDINGS FS_EtfHoldings
 * @param symbol {string} ETF symbol.
 * @param [skip] {number} Skip first n results.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EtfHoldings(symbol, skip, invocation){
  const  to_return = holdingsHelper(symbol, skip, 'etf_holdings')
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}
/**
 * @customfunction FS_MUTUALFUNDHOLDINGS FS_MutualFundHoldings
 * @param symbol {string} Mutual Fund symbol.
 * @param [skip] {number} Skip first n results.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_MutualFundHoldings(symbol, skip, invocation){
  const  to_return = holdingsHelper(symbol, skip, 'mutual_fund_holdings')
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperLatest(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [[""]]}
  var ticker = symbol


  if(Array.isArray(ticker)){
    if(!Array.isArray(ticker[0])  ){
      ticker = ticker[0]
    } else if(ticker.length === 1 && ticker[0].length === 1){
      ticker = ticker[0][0]
    }
  }

  if(!Array.isArray(ticker)){
    ticker = [[ticker]]
  } else {// todo: for now only allow 1 ticker, in the future when find a way to get latest price efficiently for multi stocks then
    //       allow multi stocks
    return [['Multiple tickers are not allowed.']]
  }

  var unique_tickers = {}
  for(let sub_arr of ticker){
    for(let tick of sub_arr){
      if(tick){
        unique_tickers[tick] = 1
      }
    }
  }

  if(Object.keys(unique_tickers).length < 1){return [['Symbols cannot be empty']]}
  if(Object.keys(unique_tickers).length > 100){return [['Too many symbols, maximum is 100 each time.']]}


  //// Now get data
  var prepare = {ticker: Object.keys(unique_tickers), api_key: api_key,   }

  var urlParams = {  api_key: api_key, }
  const url = link + "/qweiop/latest?" + new URLSearchParams(urlParams).toString()
  const response = await fetch(url, {method: 'POST', body: JSON.stringify(prepare)});

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}

  return [[json.data]]
}
/**
 * @customfunction FS_LATEST FS_Latest
 * @param symbol {string[][]} Symbol.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_Latest(symbol, invocation){
  const  to_return = helperLatest(symbol)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

////// Websocket


function connect(first_symbol) {
  var api_key = readCookie("finsheet_api_key");
  window.socket = new WebSocket('wss://' + link.slice(8,) + '/ws?api_key=' + api_key)

  window.socket.onopen = function() {
    console.log('Socket open')
    if(first_symbol){
      window.socket.send(JSON.stringify({symbol: first_symbol, "type": "subscribe",}))
      window.can_call_streaming = true
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
    console.log(12, e)
    setTimeout(function() {
      if(e.code === 1000){
        window.have_not_reconnect_websocket = false
        connect();
      } else {
        window.can_call_streaming = false
      }

    }, 1000);
  };

  window.socket.onerror = function(err) {
    console.log(err)
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

window.can_call_streaming = true

connect()

window.Cells_to_refresh = {}
window.Sheet_to_refresh = {}
window.have_not_start_refresh_limit_reach = 1

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
    window.can_call_streaming = true
    // console.log(3)
  }

  const timer = setInterval(() => {
    if(window.can_call_streaming){
      const result = window.BigSymbolPriceMap[symbol];
      // console.log(invocation)
      invocation.setResult(result);
    } else {
      invocation.setResult('You need a Plus or Pro membership to stream real-time price.');
    }

  }, 500);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}


async function helperPR(symbol, resolution){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!symbol) { return [["Symbol cannot be empty"]] }
  if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }
  if(symbol.includes(",") || symbol.includes(";")){return ["Invalid symbol"]}
  symbol = symbol.toUpperCase()

  if (!(resolution in valid_resolution)) { return [['Invalid resolution']] }
  if (resolution in lower_res) { resolution = resolution.toUpperCase() }

  var prepare = {api_key : api_key, symbol: symbol, resolution: resolution, which: 'pattern_recognition', function_name: 'FS_PatternRecognition'}
  // console.log(0, prepare)
  const url = link + "/qweiop/technical?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    var error = await response.text()
    try{return [[JSON.parse(error).error]]}
    catch (e) {return [["No data"]]}
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  try {
    var data = json.data
    var data_to_return = []
    var max_len = 1
    for(var dic of data){
      if(!dic.patternname || !dic.symbol){continue}
      var one_result = [['Pattern Name',dic.patternname ]]
      for(var key of Object.keys(dic)){
        if(key !== 'patternname' && key !== 'symbol'){
          one_result.push([capFirst(key), dic[key]])
        }
      }

      if(one_result.length > max_len){
        max_len = one_result.length
      }
      data_to_return.push(one_result)
    }
    for(var i=0;i<data_to_return.length; i++){
      const number_to_add = max_len - data_to_return[i].length
      for(var j=0; j< number_to_add; j++){
        data_to_return[i].push(['',''])
        // console.log(data_to_return[i].length)
      }
    }
    if (data_to_return.length < 1 ){return  [['No data']]}
    var final = []
    for(var i=0;i<data_to_return[0].length; i++){
      var arr = []
      for(var temp of data_to_return){
        arr = arr.concat(temp[i])
      }
      final.push(arr)
    }
    // console.log(final)
    return final
  } catch (e) {
    return [['No data']]
  }
}

/**
 * @customfunction FS_PATTERNRECOGNITION FS_PatternRecognition
 * @param symbol {string} Symbol.
 * @param resolution {string} Resolution.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_PatternRecognition(symbol, resolution, invocation){
  const  to_return = helperPR(symbol, resolution)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return

}

async function helperSR(symbol, resolution){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) {
    return [["Please login using the sidebar"]]
  }
  if (!symbol) {
    return [["Symbol cannot be empty"]]
  }
  if (typeof symbol !== 'string') {
    return [['Symbol has to be a string']]
  }
  if (symbol.includes(",") || symbol.includes(";")) {
    return ["Invalid symbol"]
  }
  symbol = symbol.toUpperCase()

  if (!(resolution in valid_resolution)) {
    return [['Invalid resolution']]
  }
  if (resolution in lower_res) {
    resolution = resolution.toUpperCase()
  }

  var prepare = {api_key: api_key, symbol: symbol, resolution: resolution, which: 'support_resistance', function_name: 'FS_SupportResistance'}

  const url = link + "/qweiop/technical?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);


  //Expect that status code is in 200-299 range
  if (!response.ok) {
    var error = await response.text()
    try {
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [["No data"]]
    }
  }
  var json = await response.json()
  if ('message' in json) {
    return [[json.message]]
  }
  var data = json.data
  // var data_to_return = []
  // for(var i of data){
  //   data_to_return.push([i])
  // }
  try {
    return data.length < 1 ? [['No data']] : [data]
  } catch (e) {
    return [['No data']]
  }
}

/**
 * @customfunction FS_SUPPORTRESISTANCE FS_SupportResistance
 * @param symbol {string} Symbol.
 * @param resolution {string} Resolution.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_SupportResistance(symbol, resolution, invocation) {
  const  to_return = helperSR(symbol, resolution)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperAI(symbol, resolution){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) {
    return [["Please login using the sidebar"]]
  }
  if (!symbol) {
    return [["Symbol cannot be empty"]]
  }
  if (typeof symbol !== 'string') {
    return [['Symbol has to be a string']]
  }
  if (symbol.includes(",") || symbol.includes(";")) {
    return ["Invalid symbol"]
  }
  symbol = symbol.toUpperCase()

  if (!(resolution in valid_resolution)) {
    return [['Invalid resolution']]
  }
  if (resolution in lower_res) {
    resolution = resolution.toUpperCase()
  }

  var prepare = {api_key: api_key, symbol: symbol, resolution: resolution, which: 'aggregate_indicators', function_name: 'FS_AggregateIndicators'}

  const url = link + "/qweiop/technical?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    var error = await response.text()
    try {
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [["No data"]]
    }
  }
  var json = await response.json()
  if ('message' in json) {
    return [[json.message]]
  }
  var data = json.data
  try{

    return [
      ['Buy', data.technicalAnalysis.count.buy],
      ['Neutral', data.technicalAnalysis.count.neutral],
      ['Sell', data.technicalAnalysis.count.sell],
      ['Aggregate signal', data.technicalAnalysis.signal],
      ['ADX reading', data.trend.adx],
      ['Trending', data.trend.trending.toString()],
    ]
  } catch (e) {
    return [['No data']]
  }
}

/**
 * @customfunction FS_AGGREGATEINDICATORS FS_AggregateIndicators
 * @param symbol {string} Symbol.
 * @param resolution {string} Resolution.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_AggregateIndicators(symbol, resolution, invocation) {
  const  to_return = helperAI(symbol, resolution)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}


async function helperTI(symbol, resolution, indicator, from, to , parameters){
  var indicator_fields = parameters
  if(!indicator_fields){indicator_fields = []}
  if (to == null) { to = undefined }
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!symbol) { return [["Symbol cannot be empty"]] }
  if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }
  if(symbol.includes(",") || symbol.includes(";")){return ["Invalid symbol"]}
  symbol = symbol.toUpperCase()

  if (!(resolution in valid_resolution)) { return [['Invalid resolution']] }
  if (resolution in lower_res) { resolution = resolution.toUpperCase() }

  if (typeof indicator !== 'string') { return [['Indicator has to be a string']] }
  indicator = indicator.toLowerCase()

  var current_time = Date.parse(new Date()) / 1000
  //// Check from
  if(!from){return [["'from' cannot be empty"]]}

  // Handle unix time
  if(typeof from == 'number' || !isNaN(from)){
    if(from < 73000){
      from = (from -25569)*86400
    }
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
    if(to < 73000){
      to = (to -25569)*86400
    }
    to = Math.round(to)
  }
  // Now convert string/Date object or whatever input user gives.
  else{
    to = Date.parse(to) / 1000
    if(isNaN(to) || to < 0) return [["Invalid 'to'"]]
  }
  if(to <=from){return [["'to' has to be after 'from'"]]}

  var prepare = {}
  try{
    var indicator_fields_dic = {}
    for(let arr of indicator_fields){
      indicator_fields_dic[arr[0].toString()] = arr[1].toString()
    }
    prepare = { symbol: symbol, resolution: resolution, from: from, to: to, api_key: api_key, indicator: indicator,
      indicator_fields: JSON.stringify(indicator_fields_dic), which: 'technical_indicators' , function_name: 'FS_TechnicalIndicators'}
  } catch (e) {
    return [["Invalid parameters"]]
  }

  // console.log('prepare', prepare)
  //// Now send get data
  const url = link + "/qweiop/technical?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    var error = await response.text()
    try {
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [["No data"]]
    }
  }

  var json = await response.json()
  // console.log(json)
  if('message' in json){return [[json.message]]}
  try {
    var data = json.data


    if (!data.c) { return [['No data']] }
    var standard_columns = {t:1, c:1, o:1, h:1, l:1, v:1, s:1}
    var new_columns = []
    var data_to_return = [['Period',  'Open', 'High', 'Low','Close', 'Volume']]
    for(var key of Object.keys(data)){
      if(!standard_columns[key]){
        new_columns.push(key)
        data_to_return[0].push(capFirst(key))
      }
    }

    for(var i=0;i<data.c.length;i++){
      var arr = [
        // data.t && data.t[i] ? new Date(data.t[i] * 1000) : '',
        data.t && data.t[i] ?  data.t[i]   : '',
        data.o && data.o[i] ? data.o[i] : '',
        data.h && data.h[i] ? data.h[i] : '',
        data.l && data.l[i] ? data.l[i] : '',
        data.c[i] ? data.c[i] : '',
        data.v && data.v[i] ? data.v[i] : '',
      ]
      for(key of new_columns){
        arr.push(data[key] && data[key][i] !== null && data[key][i] !== undefined ? data[key][i] : '')
      }
      data_to_return.push(arr)
    }
    if (data_to_return.length < 2) { return [['No data']] }
    // console.log(data_to_return)
    return data_to_return
  } catch (e) {
    return [['No data']]
  }
}

/**
 * @customfunction FS_TECHNICALINDICATORS FS_TechnicalIndicators
 * @param symbol {string} Symbol.
 * @param resolution {string} Resolution.
 * @param indicator {string} Indicator name.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [parameters] {any[][]} Indicator fields (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_TechnicalIndicators(symbol, resolution, indicator, from, to=undefined, parameters=[], invocation) {
  const  to_return = helperTI(symbol, resolution, indicator, from, to , parameters)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return

}


//// Alternative data
var esg_map = {
  'womenManagementPercentage': 'Women Management Percentage',
  'adultContent': 'Adult Content',
  'alcoholic': 'Alcoholic',
  'animalTesting': 'Animal Testing',
  'antitrust': 'Antitrust',
  'asianEmployeePercentage': 'Asian Employee Percentage',
  'asianManagementPercentage': 'Asian Management Percentage',
  'blackEmployeePercentage': 'Black Employee Percentage',
  'blackManagementPercentage': 'Black Management Percentage',
  'carbonReductionPolicy': 'Carbon Reduction Policy',
  'catholic': 'Catholic',
  'climateStrategy': 'Climate Strategy',
  'co2EmissionScope1': 'Co2 Emission Scope1',
  'co2EmissionScope2': 'Co2 Emission Scope2',
  'co2EmissionScope3': 'Co2 Emission Scope3',
  'co2EmissionTotal': 'Co2 Emission Total',
  'coalEnergy': 'Coal Energy',
  'ecofriendlyPackaging': 'Eco-friendly Packaging',
  'environmentalReporting': 'Environmental Reporting',
  'firearms': 'Firearms',
  'fuelEfficiencyConsumption': 'Fuel Efficiency Consumption',
  'furLeather': 'Fur Leather',
  'gambling': 'Gambling',
  'gmo': 'Gmo',
  'hazardousSubstances': 'Hazardous Substances',
  'hispanicLatinoEmployeePercentage': 'Hispanic Latino Employee Percentage',
  'hispanicLatinoManagementPercentage': 'Hispanic Latino Management Percentage',
  'humanRightsPolicy': 'Human Rights Policy',
  'militaryContract': 'Military Contract',
  'nuclear': 'Nuclear',
  'palmOil': 'Palm Oil',
  'pesticides': 'Pesticides',
  'privacyPolicy': 'Privacy Policy',
  'recallPolicySafety': 'Recall Policy Safety',
  'recyclingPolicy': 'Recycling Policy',
  'stakeholderEngagement': 'Stakeholder Engagement',
  'sustainableForestryPolicy': 'Sustainable Forestry Policy',
  'tobacco': 'Tobacco',
  'totalWomenPercentage': 'Total Women Percentage',
  'waterEfficiencyConsumption': 'Water Efficiency Consumption',
  'weapons': 'Weapons',
  'whiteEmployeePercentage': 'White Employee Percentage',
  'whiteManagementPercentage': 'White Management Percentage',
  'workplaceHealthSafety': 'Workplace Health Safety',
  'environmentScore': 'Environment Score',
  'governanceScore': 'Governance Score',
  'socialScore': 'Social Score',
  'totalESGScore': 'Total ESG Score'
}

async function helperESG(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, function_name: 'FS_ESG'}
  const url = link + "/qweiop/alternative/esg?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data
  var data_to_return = []
  for(var key of Object.keys(data)){
    if(key === 'data'){
      try {
        for(var key2 of Object.keys(data[key])){
          data_to_return.push([capFirst(key2.split(/(?=[A-Z])/).join(' ')), data[key][key2]])
        }
      } catch (e) {}
    } else{
      if(key === 'symbol'){continue}
      var name = key === 'totalESGScore' ? 'Total ESG Score' : capFirst(key.split(/(?=[A-Z])/).join(' '))
      data_to_return.push([name, data[key]])
    }
  }
  return data_to_return.length > 0 ? data_to_return : [['No data']]
}

/**
 * @customfunction FS_ESG FS_ESG
 * @param symbol {string} Stock symbol.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ESG(symbol, invocation ){
  const  to_return = helperESG(symbol )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperEQ(symbol, freq, limit){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  if(typeof freq !== 'string' || !['annual', 'quarterly'].includes(freq.toLowerCase())){return [['Invalid frequency']]}

  if(!limit){limit = 100}
  if(typeof  limit !== "number"){return [['Limit has to be a number']]}

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, freq : freq, function_name: 'FS_EarningsQuality'}
  const url = link + "/qweiop/alternative/earnings_quality?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data.data
  var no_used_name = {period: 1, score: 1, letterScore: 1}
  var names = {}
  var store_data = {}
  var c = 0
  for(var dic of data){
    if(!dic.period){continue}
    c += 1
    for(var key of Object.keys(dic)){
      if(!(key in no_used_name)){
        names[key] = 1
      }
      if(key in store_data ){
        store_data[key].push(dic[key])
      } else if (!(key in store_data)){
        store_data[key] = [dic[key]]
      }
    }
    if(c=== limit){break }
  }
  if(Object.keys(store_data).length < 1){return [['No data']]}
  names = ['period'].concat(Object.keys(names)).concat(['score', 'letterScore'])
  var data_to_return = []
  for(var name of names){
    data_to_return.push([capFirst(name.split(/(?=[A-Z])/).join(' '))].concat([].concat(store_data[name]).reverse()))
  }
  data_to_return[0][0] = ''
  return data_to_return.length > 0 ? data_to_return : [['No data']]
}

/**
 * @customfunction FS_EARNINGSQUALITY FS_EarningsQuality
 * @param symbol {string} Stock symbol.
 * @param freq {string} Frequency (annual or quarterly).
 * @param [limit] {number} Limit.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EarningsQuality(symbol, freq, limit, invocation){
  const  to_return = helperEQ(symbol, freq, limit)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperApi(provider, endpoint, parameters){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!provider) { return [["Provider name cannot be empty"]] }
  if (typeof provider !== 'string') { return [['Provider name to be a string']] }
  // provider = provider.toLowerCase()

  if (!endpoint) { return [["Endpoint name cannot be empty"]] }
  if (typeof endpoint !== 'string') { return [['Endpoint name to be a string']] }

  if(!parameters){parameters = []}
  var input_parameters_dic = {}
  try{
    for(let arr of parameters){
      input_parameters_dic[arr[0].toString()] = arr[1].toString()
    }
  } catch (e) {return [['Invalid parameters']]}

  var check_values = checkValidProviderEndpoint(provider, endpoint)
  if(check_values[2] !== ""){return [[check_values[2]]]}

  var base_url = check_values[1], endpoint_dic = check_values[0]
  var endpoint_url = endpoint_dic.url
  var return_structure = endpoint_dic.return_is_list ? 'list' : 'dic'

  var params = endpoint_dic.params ? endpoint_dic.params : {}
  var final_params = {}
  for(var param of Object.keys(params)){
    if(params[param].required && !(param in input_parameters_dic)){
      return [['Missing parameter "' + param + '"']]
    }
    if(params[param].replace_2dots){ // Handle cases like /prices/:currency_pair/buy
      endpoint_url = endpoint_url.replace(':' + param, input_parameters_dic[param])
    } else if(param in input_parameters_dic){
      var transformInputFunction = params[param].transformInput
      final_params[param] = transformInputFunction ? transformInputFunction(input_parameters_dic[param]) : input_parameters_dic[param]
    } else if(params[param].default){
      final_params[param] = params[param].default.toString()
    }
  }
  // console.log(12, final_params)
  var prepare = {api_key: api_key, base_url: base_url, endpoint_url: endpoint_url, params: JSON.stringify(final_params), return_structure: return_structure}
  //// Now send get data
  const url = link + "/qweiop/api?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    var error = await response.text()
    try {
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [["No data"]]
    }
  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  if (typeof data === 'string' || data instanceof String){return [[data]]}

  try{
    for(var word of ['err', 'error', 'errors']){
      if(data[word] && !(typeof data[word] === 'object' && Object.keys(data[word]).length < 1)){
        return [[JSON.stringify(data[word])]]
      }
    }
  } catch(e){}

  delete data.err; delete data.error; delete data.errors
  if('data' in data && endpoint_dic.go_down_1_level){data = data.data}
  else if('result' in data && endpoint_dic.go_down_1_level){data = data.result}
  if(!data){return [['No data']]}

  // Go up so that the code to treat dic as array work
  if(endpoint_dic.go_up_1_level){
    data = {data: data}
  }
  // Handle special function
  if(endpoint_dic.specialHandleFunction){
    return endpoint_dic.specialHandleFunction(data)
  }

  var final = [['No data']]
  // Handle case big returned data is an object
  if(typeof data === 'object' && data.constructor !== Array){
    var blocks_of_data = []
    var max_height = 0
    for(var key of Object.keys(data)){
      var used_data = data[key]
      var res = []
      // console.log(key)

      if(!used_data){
        res = [[key], ['']]
      }

      // Expand row (if is an array or a dic with >15 keys)
      else if((typeof used_data === 'object' && Object.keys(used_data).length > 15) || used_data.constructor === Array) {
        // used_data = used_data.slice(0,1)
        // used_data = {'1CR': used_data['1CR']}

        // If a dict, transform to array to keep things consistent
        if (used_data.constructor !== Array) {
          used_data = convertDicToArray(used_data, key)
        }
        let pre_store = []
        for (let key2 of Object.keys(used_data)) {
          var prefix
          if(endpoint_dic.go_up_1_level){
            if(used_data.constructor !== Array){
              prefix = key2
            } else {
              prefix = ''
            }
          } else {
            if(used_data.constructor !== Array){
              prefix = key + '_' + key2
            } else {
              prefix = key
            }
          }
          pre_store.push(handleApiDataExpandColumn(used_data[key2], prefix))
        }

        // pre_store = flattenArray(pre_store)

        if (used_data.constructor === Array && used_data.length < 1) {
          pre_store = [[[key, '']]]
        }

        res = rotateDataAfterExpandRow(pre_store)
        // console.log(key, data, used_data, pre_store, res)

      }
      // Expand column
      else {
        // If just a value (text or string)
        if(typeof used_data !== 'object'){
          res = [[key], [used_data]]
        }else if( Object.keys(used_data).length < 1 || typeof used_data !== 'object' ){
          res = [[key], ['']]
        }

        // Common object
        else {
          // // If a dict, transform to array to keep things consistent
          // if (used_data.constructor !== Array) {
          //   console.log(234)
          //   used_data = convertDicToArray(used_data, key)
          // }
          var pre_store = [handleApiDataExpandColumn(used_data, key)]
          res = rotateDataAfterExpandRow(pre_store)
        }
        // console.log(key, data[key], used_data, pre_store, res)
      }

      max_height = Math.max(max_height, res.length)
      blocks_of_data.push(res)
    }

    // Fill in missing blocks so that they all have the same height and concat them horizontally
    var blown_up = []
    for(var re of blocks_of_data){
      blown_up.push(blowUpDimension(re, max_height))
    }
    final = concatHorizontally(blown_up)
  }

  // Handle case returned data is an array
  else if (data.constructor === Array){
    let pre_store = []
    for(let key2 of Object.keys(data)){
      let prefix = ''
      pre_store.push(handleApiDataExpandColumn(data[key2],prefix))
    }

    // pre_store = flattenArray(pre_store)

    if(data.length < 1){
      return [['No data']]
    }

    final = rotateDataAfterExpandRow(pre_store)
    // console.log(data, pre_store, final)
  }

  //If returned data is just text return it
  else {
    return [[JSON.stringify(data)]]
  }

  if(endpoint_dic.transformOutput){try{final = endpoint_dic.transformOutput(final)} catch (e) {}}

  return final
}

/**
 * @customfunction FS_API FS_Api
 * @param provider {string} Provider name.
 * @param endpoint {string} Endpoint name.
 * @param [parameters] {any[][]} Parameters.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_Api(provider, endpoint, parameters=[], invocation) {
  const  to_return = helperApi(provider, endpoint, parameters)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperBondCandles(isin,   from , to , options){
  if (to == null) { to = undefined }
  var symbol = isin
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!symbol) { return [["ISIN cannot be empty"]] }
  if (typeof symbol !== 'string') { return [['ISIN has to be a string']] }
  symbol = symbol.toUpperCase()

  //// Check from
  if(!from){return [["'from' cannot be empty"]]}

  // Handle unix time
  if(typeof from == 'number' || !isNaN(from)){
    if(from < 73000){
      from = (from -25569)*86400
    }
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
    if(to < 73000){
      to = (to -25569)*86400
    }
    to = Math.round(to)
  }
  // Now convert string/Date object or whatever input user gives.
  else{
    to = Date.parse(to) / 1000
    if(isNaN(to) || to < 0) return [["Invalid 'to'"]]
  }
  if(to <=from){return [["'to' has to be after 'from'"]]}
  // console.log(from ,to)
  //// Send and get data
  var prepare = { ticker: symbol,  from: from, to: to, api_key: api_key, function_name: 'FS_BondCandles'   }


  //// Now get data
  const url = link + "/qweiop/bond_candles?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  // Handle options
  if(!options){options = ''}
  var is_nh = options.toLowerCase().includes('nh')
  var is_desc = options.toLowerCase().includes('-')
  var is_ct = options.toLowerCase().includes('ct')

  var data_to_return = []
  if (!data.c) { return [['No data']] }
  if(data.c.constructor === Array){
    for(var i=0;i<data.c.length;i++){
      data_to_return.push([
        data.t && data.t[i] ? ( is_ct ? new Date(data.t[i] * 1000) : data.t[i]): '',
        data.c[i] ? data.c[i] : '',
      ])
    }
  }
  if(data_to_return.length <1){return [['No data']]}

  if(is_desc){
    data_to_return.reverse()
  }

  if(!is_nh){
    data_to_return = [['Period',  'Close',  ]].concat(data_to_return)
  }
  return data_to_return
}

/**
 * @customfunction FS_BONDCANDLES FS_BondCandles
 * @param isin {string} ISIN of bind.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [options] {string} options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_BondCandles(isin,   from= undefined, to = undefined, options = undefined, invocation){
  const  to_return = helperBondCandles(isin,   from , to , options)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperBondTick(isin,   date , limit  , options){
  var symbol = isin, from = date
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!symbol) { return [["ISIN cannot be empty"]] }
  if (typeof symbol !== 'string') { return [['ISIN has to be a string']] }
  symbol = symbol.toUpperCase()


  //// Check from
  if(!from){return [["'date' cannot be empty"]]}

  // Handle unix time
  if(typeof from == 'number' || !isNaN(from)){
    if(from < 73000){
      from = (from -25569)*86400
    }
    from = Math.round(from)
  }
  // Now convert string/Date object or whatever input user gives.
  else{
    from = Date.parse(from) / 1000
    if(isNaN(from) || from < 0) return [["Invalid 'date'"]]
  }
   // Convert timestamp to date format to use with Finnhub
  from = new Date(from * 1000)
  const offset = from.getTimezoneOffset()
  from = new Date(from.getTime() - (offset*60*1000))
  from =  from.toISOString().split('T')[0]

   //// Send and get data
  if(!limit){limit = 25000}
  var prepare = { ticker: symbol,   from: from, limit: limit.toString(), api_key: api_key, function_name: 'FS_BondTick'   }

  //// Now get data
  const url = link + "/qweiop/bond_tick?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  // Handle options
  if(!options){options = ''}
  var is_nh = options.toLowerCase().includes('nh')
  var is_desc = options.toLowerCase().includes('-')
  var is_ct = options.toLowerCase().includes('ct')

  var data_to_return = [ ]
  if (!data.p) { return [['No data']] }
  if(data.p.constructor === Array){
    for(var i=0;i<data.p.length;i++){
      data_to_return.push([
        data.t && data.t[i] ? (is_ct ? new Date(data.t[i] ) : parseInt(data.t[i] / 1000)): '',
        data.p[i] ? data.p[i] : '',
        data.v && (data.v[i] || data.v[i] == 0) ? data.v[i] : '',
        data.si && data.si[i] ? (data.si[i].toString() === '1' ? 'Buy' : 'Sell') : '',
      ])
    }
  }
  if(data_to_return.length <1){return [['No data']]}

  if(is_desc){
    data_to_return.reverse()
  }

  if(!is_nh){
    data_to_return = [['Period',  'Price', 'Volume', 'Side'  ]].concat(data_to_return)
  }
  return data_to_return
}

/**
 * @customfunction FS_BONDTICK FS_BondTick
 * @param isin {string} ISIN of bond.
 * @param date {string} date.
 * @param [limit] {string} limit (optional).
 * @param [options] {string} options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_BondTick(isin,   date= undefined, limit = undefined, options = undefined, invocation){
  const  to_return = helperBondTick(isin,   date , limit  , options)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

/**
 * @customfunction FS_FUTURESCANDLES FS_FuturesCandles
 * @param symbol {string} Futures Contract Symbol.
 * @param from {string} From.
 * @param [to] {string} To (optional).
 * @param [metrics] {string} Metrics (optional).
 * @param [options] {string} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_FuturesCandles(symbol,   from= undefined, to = undefined, metrics=undefined, options=undefined, invocation){
  const  to_return = candlesHelper(symbol, "D", from, to , metrics, options, "future" )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperOXD(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return "Symbol cannot be empty"}
  if(typeof symbol !== 'string'){return 'Symbol has to be a string'}
  symbol = symbol.toUpperCase()

  //// Send and get data
  var prepare =  {ticker: symbol,   api_key: api_key, function_name: 'FS_OptionExpirationDates'}

  const url = link + "/qweiop/option?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);


  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}

  var data = json.data
  // console.log(data)
  var data_to_return = [ ]
  if(data.constructor === Array){
    for(var i=0;i<data.length;i++){
      var dic = data[i]
      data_to_return.push([
        dic.expirationDate
      ])
    }
  }

  if(data_to_return.length <1){return [['No data']]}
  return data_to_return
}

/**
 * @customfunction FS_OPTIONEXPIRATIONDATES FS_OptionExpirationDates
 * @param symbol {string} Stock symbol.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_OptionExpirationDates(symbol, invocation ){
  const  to_return = helperOXD(symbol)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperOC(symbol, type, expirationDate, options){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }

  if(!symbol){return "Symbol cannot be empty"}
  if(typeof symbol !== 'string'){return 'Symbol has to be a string'}
  symbol = symbol.toUpperCase()

  if(typeof type !== 'string'){return '"type" has to be a string'}
  type = type.toLowerCase()
  if(type != "call" && type != "put"){return [['"type" has to be call or put']]}
  if(!expirationDate){return [['"expirationDate" cannot be empty']]}
  if(typeof expirationDate !== 'string'){return [['"expirationDate" has to be a string']]}
  if(!dateIsValid(expirationDate)){return [['Invalid "expirationDate"']]}
  if(!options){options = []}

  // console.log(1, options)
  var indicator_fields_dic = {}
  try{
    for(let arr of options){
      indicator_fields_dic[arr[0].toString()] = arr[1].toString()
    }
  } catch (e) {
    return [['Invalid "options"']]
  }
  var metrics = {}
  var has_header = true
  if(indicator_fields_dic.header == 'false'){has_header = false}
  if(indicator_fields_dic.metrics){
    let temp = indicator_fields_dic.metrics.split('&')
    if(!temp.includes('all')){
      for(var metric of temp){
        if(option_cols.includes(metric)){metrics[metric] = 1}
      }
    } else {
      for(var metric of option_cols){
        metrics[metric] = 1
      }
    }
  } else {
    for(var metric of option_cols){
      metrics[metric] = 1
    }
  }

  //// Send and get data
  var prepare =  {ticker: symbol,   api_key: api_key,   function_name: 'FS_OptionChain' }

  const url = link + "/qweiop/option?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);


  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}

  var data = json.data
  // console.log(data)
  var data_to_return = [ ]
  if(data.constructor === Array){
    for(var i=0;i<data.length;i++){
      var temp_dic = data[i]
      if(temp_dic.expirationDate != expirationDate){continue}
      var list = temp_dic.options[type.toUpperCase()]
      for(var dic of list){
        var arr = []
        for(var col of option_cols){
          if(col in metrics){
            arr.push(dic[col] || dic[col] == 0 ? dic[col] : '')
          }
        }
        data_to_return.push(arr)
      }
    }
  }

  if(data_to_return.length <1){return [['No data']]}
  if(has_header){
    var arr = []
    for(var col of option_cols){
      if(col in metrics){
        arr.push(col)
      }
    }
    data_to_return = [arr].concat(data_to_return)
  }
  return data_to_return
}


/**
 * @customfunction FS_OPTIONCHAIN FS_OptionChain
 * @param symbol {string} Stock symbol.
 * @param type {string} Type.
 * @param expirationDate {string} Expiration date.
 * @param [options] {any[][]} Options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_OptionChain(symbol, type, expirationDate, options=[], invocation ){
  const  to_return = helperOC(symbol, type, expirationDate, options)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperSI(symbol){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!symbol){return [["Symbol cannot be empty"]]}
  if(typeof symbol !== 'string'){return [['Symbol has to be a string']]}
  symbol = symbol.toUpperCase()

  //// Now get data
  var prepare = {symbol: symbol, api_key: api_key, function_name: 'FS_ShortInterest'}
  const url = link + "/qweiop/short-interest?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }
  }
  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data.data
  if(data.status === 'No data'){return [['No data']]}
  var data_to_return = [['Settlement Date', 'Short Interest', 'Short Ratio', 'Short % of Shares Outstanding']]
  for(var dic of data){
    data_to_return.push([dic.settlementDate, dic.shortInterest, dic.shortRatio, dic.shortPercentOutstanding])
  }
  return data_to_return
}

/**
 * @customfunction FS_SHORTINTEREST FS_ShortInterest
 * @param symbol {string} Stock symbol.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_ShortInterest(symbol, invocation ){
  const  to_return = helperSI(symbol)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperET(symbol,   date , limit, skip  , options){
  var   from = date
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if (!symbol) { return [["Symbol cannot be empty"]] }
  if (typeof symbol !== 'string') { return [['Symbol has to be a string']] }
  symbol = symbol.toUpperCase()
  if(symbol.includes('.') && !(symbol in {'BRK.A': 1, 'BRK.B': 1})){
    return [["We only support US stocks for this function currently."]]
  }

  if (!limit) { return [["Limit cannot be empty"]] }

  if(!skip){
    skip = "0"
  } else {
    skip = skip.toString()
  }

  //// Check from
  if(!from){return [["'date' cannot be empty"]]}

  // Handle unix time
  if(typeof from == 'number' || !isNaN(from)){
    if(from < 73000){
      from = (from -25569)*86400
    }
    from = Math.round(from)
  }
  // Now convert string/Date object or whatever input user gives.
  else{
    from = Date.parse(from) / 1000
    if(isNaN(from) || from < 0) return [["Invalid 'date'"]]
  }

  // Limit to last 10 years
  if(from * 1000 < Date.now() - 3600 * 24 * 366 * 10 * 1000){
    return [["'date' cannot be more that 10 years ago"]]
  }

  // Convert timestamp to date format to use with Finnhub
  from = new Date(from * 1000)
  const offset = from.getTimezoneOffset()
  from = new Date(from.getTime() - (offset*60*1000))
  from =  from.toISOString().split('T')[0]

  //// Send and get data
  var prepare = { ticker: symbol,   from: from, limit: limit.toString(), skip: skip.toString(), api_key: api_key,  function_name: 'FS_EquityTick' }


  //// Now get data
  const url = link + "/qweiop/equity_tick?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  // Handle options
  if(!options){options = ''}
  var is_ct = options.toLowerCase().includes('ct')

  try {
    var data_to_return = [
      ['Count',  data.count ? data.count : '', 'Total',  data.total ? data.total : '', ''  ],
      ["Venue/Exchange"	, "Timestamp", "Price"	,"Volume",	"Trade conditions"]
    ]
    if(!data.p ){return 'No data'}
    if(data.p.constructor === Array){
      for(var i=0;i<data.p.length;i++){
        data_to_return.push([
          data.x && data.x[i] ? (data.x[i] in map_exchange_tick ? map_exchange_tick[data.x[i]] : data.x[i])  : '',
          data.t[i] ? ( is_ct ? new Date(data.t[i]) : parseInt(data.t[i]/1000) ): '',
          data.p && data.p[i] ? data.p[i]  : '',
          data.v && (data.v[i] || data.v[i] == 0) ? data.v[i] : '',
          data.c && data.c[i] ? data.c[i].join() : '',
        ])
      }
    }

    if(data_to_return.length <3){return 'No data'}
    return data_to_return
  } catch(e){
    return [['No data']]
  }
}

/**
 * @customfunction FS_EQUITYTICK FS_EquityTick
 * @param symbol {string} Stock symbol.
 * @param date {string} date.
 * @param limit {string} limit.
 * @param [skip] {string} skip (optional).
 * @param [options] {string} options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EquityTick(symbol,   date , limit, skip = undefined, options = undefined, invocation){
  const  to_return = helperET(symbol,   date , limit, skip  , options)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperEC(from,   to, symbol, international ){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }

  //// Check from
  if(from ){
    // Handle unix time
    if(typeof from == 'number' || !isNaN(from)){
      var from_string = from.toString()
      if(from_string.length >= 12) {      // This is miliseconds, divide by 1000
        from = from / 1000
      }
      from = Math.round(from)
    }
    // Or convert string/Date object or whatever input user gives.
    else{
      from = Date.parse(from) / 1000
      if(isNaN(from) || from < 0) return "Invalid 'date'"
    }

    // Convert timestamp to date format to use with Finnhub
    from = new Date(from * 1000)
    const offset = from.getTimezoneOffset()
    from = new Date(from.getTime() - (offset*60*1000))
    from =  from.toISOString().split('T')[0]
  } else {
    from = ""
  }

  //// Check to
  if(to ){
    // Handle unix time
    if(typeof to == 'number' || !isNaN(to)){
      var from_string = to.toString()
      if(from_string.length >= 12) {      // This is miliseconds, divide by 1000
        to = to / 1000
      }
      to = Math.round(to)
    }
    // Or convert string/Date object or whatever input user gives.
    else{
      to = Date.parse(to) / 1000
      if(isNaN(to) || to < 0) return "Invalid 'date'"
    }

    // Convert timestamp to date format to use with Finnhub
    to = new Date(to * 1000)
    const offset = to.getTimezoneOffset()
    to = new Date(to.getTime() - (offset*60*1000))
    to =  to.toISOString().split('T')[0]
  } else {
    to = ""
  }

  if(!symbol){symbol = ""}

  //// Send and get data
  var   prepare =  {ticker: symbol,  from: from, to: to, api_key: api_key,  international: international,  function_name: 'FS_EarningsCalendar' }



  //// Now get data
  const url = link + "/qweiop/earningscalendar?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  data = data.earningsCalendar
  var data_to_return = [['Date',  'Hour', 'Symbol', 'Revenue Actual' , 'Revenue Estimate', 'EPS Actual', 'EPS Estimate', 'Reporting period' ]]
  var map_hour ={bmo: 'Before Market Open', amc: 'After Market Close', dmh: 'During Market Hour'}
  for(var dic of data){
    data_to_return.push([
      dic.date,
      dic.hour in map_hour ? map_hour[dic.hour] : dic.hour,
      dic.symbol,
      dic.revenueActual ? dic.revenueActual : '',
      dic.revenueEstimate ? dic.revenueEstimate : '',
      dic.epsActual ? dic.epsActual : '',
      dic.epsEstimate ? dic.epsEstimate : '',
      'Q' + dic.quarter + '/' + dic.year

    ])
  }
  if (data_to_return.length < 2) { return [['No data']] }
  return data_to_return
}

/**
 * @customfunction FS_EARNINGSCALENDAR FS_EarningsCalendar
 * @param [from] {string} from date (optional).
 * @param [to] {string} to date (optional).
 * @param [symbol] {string} stock symbol (optional).
 * @param [international] {string} specify "true" to include international markets (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_EarningsCalendar(from,   to, symbol, international , invocation ){
  const  to_return = helperEC(from,   to, symbol, international )
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}



async function helperIP(guru){
  var api_key = readCookie("finsheet_api_key");
  if (!api_key) { return [["Please login using the sidebar"]] }
  if(!guru){return [['Guru name cannot be empty']]}
  if(!(guru.toLowerCase() in reversed_map_url_guru)){return [['This guru/institution is not currently supported']]}

  //// Send and get data
  var prepare =  {guru: guru, is_gs: "y" , api_key: api_key, function_name: 'FS_InstitutionalPortfolios'}

  //// Now get data
  const url = link + "/qweiop/institutional-holding?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  try {
    var data_to_return = []
    for(var dic of data){
      if(dic.ticker && dic.ticker !== '--'){
        data_to_return.push([
          dic.ticker
        ])
      }

    }

    if(data_to_return.length <1){return [['No data']]}
    return data_to_return
  } catch(e){
    return [['No data']]
  }
}


/**
 * @customfunction FS_INSTITUTIONALPORTFOLIOS FS_InstitutionalPortfolios
 * @param guru {string} Guru/institution name.
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_InstitutionalPortfolios(guru , invocation){
  const  to_return = helperIP(guru)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}

async function helperDividends(symbol, from, to ,metrics, options){
  // console.log(13)
  var api_key = readCookie("finsheet_api_key");
  if(!api_key){return [["Please login using the sidebar"]]}

  if(!symbol){return [['symbol cannot be empty']]}
  if(!from){return [['from cannot be empty']]}
  if(!to){return [['to cannot be empty']]}

  // console.log(1)
  //// Check from
  if(from ){
    // Handle unix time
    if(typeof from == 'number' || !isNaN(from)){
      var from_string = from.toString()
      if(from_string.length >= 12) {      // This is miliseconds, divide by 1000
        from = from / 1000
      }
      from = Math.round(from)
    }
    // Or convert string/Date object or whatever input user gives.
    else{
      from = Date.parse(from) / 1000
      if(isNaN(from) || from < 0) return "Invalid 'date'"
    }

    // Convert timestamp to date format to use with Finnhub
    from = new Date(from * 1000)
    const offset = from.getTimezoneOffset()
    from = new Date(from.getTime() - (offset*60*1000))
    from =  from.toISOString().split('T')[0]
  } else {
    from = ""
  }
  // console.log(2)
  //// Check to
  if(to ){
    // Handle unix time
    if(typeof to == 'number' || !isNaN(to)){
      var from_string = to.toString()
      if(from_string.length >= 12) {      // This is miliseconds, divide by 1000
        to = to / 1000
      }
      to = Math.round(to)
    }
    // Or convert string/Date object or whatever input user gives.
    else{
      to = Date.parse(to) / 1000
      if(isNaN(to) || to < 0) return "Invalid 'date'"
    }

    // Convert timestamp to date format to use with Finnhub
    to = new Date(to * 1000)
    const offset = to.getTimezoneOffset()
    to = new Date(to.getTime() - (offset*60*1000))
    to =  to.toISOString().split('T')[0]
  } else {
    to = ""
  }

  //// Send and get data
  var prepare =  {ticker: symbol,  from: from, to: to, api_key: api_key,   function_name: 'FS_Dividends'}
  // console.log(12, prepare)
  //// Now get data
  const url = link + "/qweiop/dividend?" + new URLSearchParams(prepare).toString()
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    try{
      var error = await response.text()
      return [[JSON.parse(error).error]]
    } catch (e) {
      return [['No data']]
    }

  }

  var json = await response.json()
  if('message' in json){return [[json.message]]}
  var data = json.data

  // Handle options
  if(!options){options = ''}
  var is_nh = options.toLowerCase().includes('nh')
  var is_desc = options.toLowerCase().includes('-')

  // Handle metrics / columns
  var headers = []
  var map_col_name = {'declarationDate': 1,  'recordDate': 1, 'payDate': 1,'amount': 1, 'adjustedAmount': 1,'currency': 1}
  if(!metrics || metrics == "all" || metrics == "All" || metrics == 'ALL'){headers = ['declarationDate',  'recordDate', 'payDate','amount', 'adjustedAmount','currency',]}
  else {
    var arr_metrics = metrics.split('&')
    for(var elem of arr_metrics){
      var reformat = elem
      if(reformat in map_col_name){
        headers.push(reformat)
      }
    }
  }

  var data_to_return = []
  for(var i=0;i<data.length;i++){
    var dic = data[i]
    var one_row = []
    for(var elem of headers){
      one_row.push(dic[elem] ? dic[elem] : '')
    }
    data_to_return.push(one_row)

  }

  if(data_to_return.length < 1){return [['No data']]}

  if(is_desc){
    data_to_return.reverse()
  }

  if(!is_nh){
    data_to_return = [headers].concat(data_to_return)
  }
  return data_to_return
}

/**
 * @customfunction FS_DIVIDENDS FS_Dividends
 * @param symbol {string} Stock symbol.
 * @param from {string} from.
 * @param to {string} to.
 * @param [metrics] {string} metrics (optional).
 * @param [options] {string} options (optional).
 * @param {CustomFunctions.Invocation} invocation Invocation object.
 * @requiresAddress
 * @returns {string[][]} Result array.
 * ...
 */
async function FS_Dividends(symbol, from, to ,metrics, options , invocation){
  const  to_return = helperDividends(symbol, from, to ,metrics, options)
  await check_whether_reach_limit(await to_return, invocation.address)
  return to_return
}