function checkValidProviderEndpoint(provider, endpoint_name){
    var first_dic = big_api_map[provider.toLowerCase()]
    if(!first_dic){return [{}, "", "Invalid provider"]}
    var second_dic = first_dic[endpoint_name]
    if(!second_dic){return [{}, "", "Invalid endpoint"]}
    return [second_dic, first_dic.base_url, ""]
}



var big_api_map = {
    coinbase: {
        "base_url": "https://api.coinbase.com/v2",
        "Get currencies": {
            url: "/currencies",
        },
        "Get exchange rates": {
            url:    "/exchange-rates",
            params: {
                currency: {}
            },
        },
        "Get buy price": {
            url: "/prices/:currency_pair/buy",
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true
                }
            },
        },
        "Get sell price": {
            url: "/prices/:currency_pair/sell",
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true
                }
            },
        },
        "Get spot price": {
            url: "/prices/:currency_pair/spot",
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true
                }
            },
        },
        "Get current time": {
            url: "/time",
        },
    },

    binance: {
        "base_url": "https://api.binance.com",
        "Check Server Time": {
            url: '/api/v3/time'
        },
        "Exchange Information": {
            url: "/api/v3/exchangeInfo",
            params: {
                symbols: {
                    transformInput: function (symbols){
                        return JSON.stringify(symbols.split(","))
                    }
                }
            },
        },
        "Order Book":{
            url: '/api/v3/depth',
            params: {
                symbol : {required: true},
                limit :{}
            },
            transformOutput: (matrix) => {
                matrix[0][0] = 'askPrice'; matrix[0][1] = 'askQuantity';matrix[0][2] = 'bidsPrice';matrix[0][3] = 'bidsQuantity';
                return matrix
            }
        },
        "Recent Trades List":{
            url: '/api/v3/trades',
            params: {
                symbol : {required: true},
                limit :{}
            }
        },
        "Aggregate Trades List":{
            url: '/api/v3/aggTrades',
            params: {
                symbol : {required: true},
                startTime:{},
                endTime: {},
                limit :{}
            },
            transformOutput: (matrix) => {
                matrix[0][0] = 'isBestMatch'; matrix[0][1] = 'timestamp';matrix[0][2] = 'aggregateTradeId';
                matrix[0][3] = 'firstTradeId';matrix[0][4] = 'lastTradeId';matrix[0][5] = 'isBuyerMaker';
                matrix[0][6] = 'price';matrix[0][7] = 'quantity';
                return matrix
            }
        },
        "Candlestick Data": {
            url: '/api/v3/klines',
            params: {
                symbol : {required: true},
                interval : {required: true},
                startTime:{},
                endTime: {},
                limit :{}
            },
            transformOutput: (matrix) => {
                matrix[0][0] = 'openTime'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';matrix[0][5] = 'volume';
                matrix[0][6] = 'closeTime';matrix[0][7] = 'quoteAssetVolume';matrix[0][8] = 'numberOfTrades';
                matrix[0][9] = 'baseAssetVolume'; matrix[0][10] = 'quoteAssetVolume';matrix[0][11] = 'ignore';
                return matrix
            }
        },
        "Current Average Price":{
            url: '/api/v3/avgPrice',
            params: {
                symbol : {required: true},
            }
        },
        "24hr Ticker Price Change Statistics":{
            url: '/api/v3/ticker/24hr',
            params: {
                symbol : {required: true},
            }
        },
        "Symbol Price Ticker":{
            url: '/api/v3/ticker/price',
            params: {
                symbol : {},
            }
        },
        "Symbol Order Book Ticker":{
            url: '/api/v3/ticker/bookTicker',
            params: {
                symbol : {},
            }
        },
    }
}