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
            go_down_1_level: true,
        },
        "Get buy price": {
            url: "/prices/:currency_pair/buy",
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true
                }
            },
            go_down_1_level: true,
        },
        "Get sell price": {
            url: "/prices/:currency_pair/sell",
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true
                }
            },
            go_down_1_level: true,
        },
        "Get spot price": {
            url: "/prices/:currency_pair/spot",
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true
                }
            },
            go_down_1_level: true,
        },
        "Get current time": {
            url: "/time",
            go_down_1_level: true,
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
    },

    kraken: {
        "base_url": "https://api.kraken.com/0",
        "Get Server Time": {
            url: '/public/Time'
        },
        "Get System Status": {
            url: '/public/SystemStatus'
        },
        "Get Asset Info": {
            url: '/public/Assets',
            params: {
                asset:{}
            }
        },
        "Get Tradable Asset Pairs": {
            url: '/public/AssetPairs',
            params: {
                pair:{}
            }
        },
        "Get Ticker Information": {
            url: '/public/Ticker',
            params: {
                pair:{required: true}
            },
            go_down_1_level: true,
        },
        "Get OHLC Data": {
            url: '/public/OHLC',
            params: {
                pair:{required: true},
                interval: {default: 1440},
                since: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['time', 'open', 'high', 'low', 'close', 'vwap', 'volume', 'count']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] = matrix[0][i].split('[')[0] + '_' + arr[i]
                }
                return matrix
            }
        },
        "Get Order Book": {
            url: '/public/Depth',
            params: {
                pair:{required: true},
                count: {}
            },
            go_down_1_level: true,
        },
        "Get Recent Trades": {
            url: '/public/Trades',
            params: {
                pair:{required: true},
                since: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['price', 'volume', 'time', 'buy/sell','limit', 'miscellaneous']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] = matrix[0][i].split('[')[0] + '_' + arr[i]
                }
                return matrix
            }
        },
        "Get Recent Spreads": {
            url: '/public/Spread',
            params: {
                pair:{required: true},
                since: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['time', 'bid', 'ask']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] = matrix[0][i].split('[')[0] + '_' + arr[i]
                }
                return matrix
            }
        },
    },

    poloniex: {
        "base_url": "https://poloniex.com/public",
        "Return Ticker": {
            url: '',
            go_up_1_level: true,
            params:{
                command: {default: 'returnTicker'}
            }
        },
        "Return 24h Volume": {
            url: '',
            params:{
                command: {default: 'return24hVolume'}
            },
            specialHandleFunction: (data) => {
                var res = [['', "First currency's volume", "Second currency's volume"]]
                for(var key of Object.keys(data)){
                    if(!key.includes('total')){
                        var arr = [key]
                        for(var key2 of Object.keys(data[key])){
                            arr.push(data[key][key2])
                        }
                        res.push(arr)
                    } else {
                        res.push([key, data[key], ''])
                    }
                }
                return res
            },
        },

        "Return Order Book": {
            url: '',
            params: {
                currencyPair: {default: "all"},
                depth: {},
                command: {default: 'returnOrderBook'}
            }
        },
        "Return Trade History": {
            url: '',
            params: {
                currencyPair: {required: true},
                start: {},
                end: {},
                command: {default: 'returnTradeHistory'}
            }
        },
        "Return Chart Data": {
            url: '',
            params: {
                currencyPair: {required: true},
                start: {required: true},
                end: {required: true},
                period: {required: true},
                command: {default: 'returnChartData'}

            }
        },
        "Return Currencies": {
            url: '',
            params: {
                includeMultiChainCurrencies: {},
                command: {default: 'returnCurrencies'}
            },
            go_up_1_level: true,
        },
        "Return Loan Order": {
            url: '',
            params: {
                currency: {required: true},
                command: {default: 'returnLoanOrders'}
            }
        },
    },

    kucoin: {
        "base_url": "https://api.kucoin.com",
        "Get Symbols List": {
            url: '/api/v1/symbols',
            params: {
                market: {}
            },
            go_down_1_level: true,
        },
        "Get Ticker": {
            url: '/api/v1/market/orderbook/level1',
            params: {
                symbol: {required: true}
            },
            go_down_1_level: true,
        },
        "Get All Tickers": {
            url: '/api/v1/market/allTickers',
            go_down_1_level: true,
        },
        "Get 24hr Stats": {
            url: '/api/v1/market/stats',
            params: {
                symbol: {required: true}
            },
            go_down_1_level: true,
        },
        "Get Market List": {
            url: '/api/v1/markets',
            go_down_1_level: true,
        },
        "Get Aggregated Order Book": {
            url: '/api/v1/market/orderbook/level2_100',
            params: {
                symbol: {required: true}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'askPrice';matrix[0][1] = 'askSize';matrix[0][2] = 'bidsPrice';matrix[0][3] = 'bidsSize';
                return matrix
            }
        },
        "Get Trade Histories": {
            url: '/api/v1/market/histories',
            params: {
                symbol: {required: true}
            },
            go_down_1_level: true,
        },
        "Get Candlesticks": {
            url: '/api/v1/market/candles',
            params: {
                symbol: {required: true},
                type: {required: true},
                startAt:{},
                endAt: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['time', 'open','close', 'high', 'low',  'volume', 'amount']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] =  arr[i]
                }
                return matrix
            }
        },
        "Get Currencies": {
            url: '/api/v1/currencies',
            go_down_1_level: true,
        },
        "Get Currency Detail": {
            url: '/api/v2/currencies/:currency',
            params: {
                currency: {
                    required: true,
                    replace_2dots: true
                },
            },
            go_down_1_level: true,
        },
        "Get Fiat Price": {
            url: '/api/v1/prices',
            params: {
                base: {},
                currencies: {}
            },
            go_down_1_level: true,
            go_up_1_level: true
        },


        "Get Mark Price": {
            url: '/api/v1/mark-price/:symbol/current',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true
                },
            },
            go_down_1_level: true,
        },

    },

    gemini: {
        "base_url": "https://api.gemini.com",
        "Symbols": {
            url: '/v1/symbols',
        },
        "Symbol Details": {
            url: '/v1/symbols/details/:symbol',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Ticker": {
            url: '/v1/pubticker/:symbol',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Ticker V2": {
            url: '/v2/ticker/:symbol',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Candlesticks": {
            url: '/v2/candles/:symbol/:time_frame',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                },
                time_frame:{
                    required: true,
                    replace_2dots: true
                }
            },
            transformOutput: (matrix) => {
                var arr = ['time', 'open', 'high', 'low', 'close', 'volume',]
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] =  arr[i]
                }
                return matrix
            }
        },
        "Current Order Book": {
            url: '/v1/book/:symbol',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Trade History": {
            url: '/v1/trades/:symbol',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                },
                timestamp: {},
                limit_trades: {},
                include_breaks: {}
            }
        },
        "Current Auction": {
            url: '/v1/auction/:symbol',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                }
            }
        },


        "Auction History": {
            url: '/v1/auction/:symbol/history',
            params:{
                symbol:{
                    required: true,
                    replace_2dots: true
                },
                since: {},
                limit_auction_results: {},
                include_indicative: {}
            }
        },
        "Price Feed": {
            url: '/v1/pricefeed',
        },
    },

    okex:{
        "base_url": "https://www.okx.com",
        "Get Tickers":{
            url: '/api/v5/market/tickers',
            params:{
                instType: {required: true},
                uly: {}
            },
            go_down_1_level: true
        },
        "Get Ticker":{
            url: '/api/v5/market/ticker',
            params:{
                instId: {required: true},
            },
            go_down_1_level: true
        },
        "Get Index Tickers":{
            url: '/api/v5/market/index-tickers',
            params:{
                instId: {required: true}
            },
            go_down_1_level: true
        },
        "Get Order Book":{
            url: '/api/v5/market/books',
            params:{
                instId: {required: true},
                sz: {default: 1}
            },
            go_down_1_level: true,
        },
        "Get Candlesticks":{
            url: '/api/v5/market/history-candles',
            params:{
                instId: {required: true},
                bar: {},
                after:{},
                before:{},
                limit:{}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';matrix[0][5] = 'volume';matrix[0][6] = 'volumeCcy';
                return matrix
            }

        },
        "Get Index Candlesticks":{
            url: '/api/v5/market/index-candles',
            params:{
                instId: {required: true},
                bar: {},
                after:{},
                before:{},
                limit:{}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';
                return matrix
            }
        },
        "Get Mark Price Candlesticks":{
            url: '/api/v5/market/mark-price-candles',
            params:{
                instId: {required: true},
                bar: {},
                after:{},
                before:{},
                limit:{}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';
                return matrix
            }
        },
        "Get Trades":{
            url: '/api/v5/market/trades',
            params:{
                instId: {required: true},
                limit: {}
            },
            go_down_1_level: true
        },
        "Get 24h Volume":{
            url: '/api/v5/market/platform-24-volume',
            go_down_1_level: true
        },
        "Get Oracle":{
            url: '/api/v5/market/open-oracle',
            go_down_1_level: true
        },
        "Get Exchange Rate":{
            url: '/api/v5/market/exchange-rate',
            go_down_1_level: true
        },
        "Get Index Components":{
            url: '/api/v5/market/index-components',
            params:{
                index: {required: true},
            },
            go_down_1_level: true
        },
        "Get Instruments":{
            url: '/api/v5/public/instruments',
            params:{
                instType: {required: true},
                uly: {},
                instId:{},
            },
            go_down_1_level: true
        },
        "Get Delivery History":{
            url: '/api/v5/public/delivery-exercise-history',
            params:{
                instType: {required: true},
                uly: {required: true},
                after:{},
                before:{},
                limit:{}
            },
            go_down_1_level: true
        },
        "Get Open Interest":{
            url: '/api/v5/public/open-interest',
            params:{
                instType: {required: true},
                uly: {},
                instId:{},
            },
            go_down_1_level: true
        },
        "Get Funding Rate":{
            url: '/api/v5/public/funding-rate',
            params:{
                instId: {required: true},
            },
            go_down_1_level: true
        },
        "Get Funding Rate History":{
            url: '/api/v5/public/funding-rate-history',
            params:{
                instId: {required: true},
                after:{},
                before:{},
                limit:{}
            },
            go_down_1_level: true
        },
        "Get Limit Price":{
            url: '/api/v5/public/price-limit',
            params:{
                instId: {required: true},
            },
            go_down_1_level: true
        },
        "Get Option Market Data":{
            url: '/api/v5/public/opt-summary',
            params:{
                uly: {required: true},
                expTime:{},
            },
            go_down_1_level: true
        },
        "Get Estimated Delivery Price":{
            url: '/api/v5/public/estimated-price',
            params:{
                instId: {required: true},
            },
            go_down_1_level: true
        },
        "Get Discount Rate & Interest-free Quota":{
            url: '/api/v5/public/discount-rate-interest-free-quota',
            params:{
                discountLv:{},
                ccy:{}
            },
            go_down_1_level: true
        },
        "Get System Time":{
            url: '/api/v5/public/time',
            go_down_1_level: true
        },
        "Get Liquidation Orders":{
            url: '/api/v5/public/liquidation-orders',
            params:{
                instType: {required: true},
                mgnMode:{},
                instId:{},
                ccy:{},
                uly:{},
                alias:{},
                state:{},
                before:{},
                after:{},
                limit:{},
            },
            go_down_1_level: true
        },
        "Get Mark Price":{
            url: '/api/v5/public/mark-price',
            params:{
                instId: {},
                instType: {required: true},
                uly: {}
            },
            go_down_1_level: true
        },
        "Get Position Tiers":{
            url: '/api/v5/public/position-tiers',
            params:{
                instType: {required: true},
                tdMode: {default: 'cross', },
                instId:{},
                uly:{required: true},
                tier: {}
            },
            go_down_1_level: true
        },
        "Get Interest Rate & Loan Quota":{
            url: '/api/v5/public/interest-rate-loan-quota',
            go_down_1_level: true
        },
        "Get Underlying":{
            url: '/api/v5/public/underlying',
            params:{
                instType: {required: true},
            },
            go_down_1_level: true
        },
        "Get Support Coins":{
            url: '/api/v5/rubik/stat/trading-data/support-coin',
            go_down_1_level: true
        },
        "Get Taker Volume":{
            url: '/api/v5/rubik/stat/taker-volume',
            params:{
                instType: {required: true},
                ccy: {required: true},
                begin:{},
                end:{},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'sellVol';matrix[0][2] = 'buyVol';
                return matrix
            }
        },
        "Get Margin Lending Ratio":{
            url: '/api/v5/rubik/stat/margin/loan-ratio',
            params:{
                ccy: {required: true},
                begin:{},
                end:{},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'ratio';
                return matrix
            }
        },
        "Get Long/Short Ratio":{
            url: '/api/v5/rubik/stat/contracts/long-short-account-ratio',
            params:{
                ccy: {required: true},
                begin:{},
                end:{},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'ratio';
                return matrix
            }
        },
        "Get Contracts Open Interest & Volume":{
            url: '/api/v5/rubik/stat/contracts/open-interest-volume',
            go_down_1_level: true,
            params: {
                ccy: {required: true},
                begin:{},
                end:{},
                period: {}
            },
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'openInterest';matrix[0][2] = 'vol';
                return matrix
            }
        },
        "Get Options Open Interest & Volume":{
            url: '/api/v5/rubik/stat/option/open-interest-volume',
            params:{
                ccy: {required: true},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'openInterest';matrix[0][2] = 'vol';
                return matrix
            }
        },
        "Get Put/Call Ratio":{
            url: '/api/v5/rubik/stat/option/open-interest-volume-ratio',
            params:{
                ccy: {required: true},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'openInterestRatio';matrix[0][2] = 'volRatio';
                return matrix
            }
        },
        "Get Open Interest & Volume (Expiry)":{
            url: '/api/v5/rubik/stat/option/open-interest-volume-expiry',
            params:{
                ccy: {required: true},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'expiryDate';matrix[0][2] = 'callOpenInterest';
                matrix[0][3] = 'putOpenInterest'; matrix[0][4] = 'callVol';matrix[0][5] = 'putVolume';

                return matrix
            }
        },
        "Get Open Interest & Volume (Strike)":{
            url: '/api/v5/rubik/stat/option/open-interest-volume-strike',
            go_down_1_level: true,
            params: {
                ccy: {required: true},
                expTime:{required: true},
                period: {}
            },
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'strike';matrix[0][2] = 'callOpenInterest';
                matrix[0][3] = 'putOpenInterest'; matrix[0][4] = 'callVol';matrix[0][5] = 'putVolume';

                return matrix
            }
        },
        "Get Taker Flow":{
            url: '/api/v5/rubik/stat/option/taker-block-volume',
            params:{
                ccy: {required: true},
                period: {}
            },
            go_down_1_level: true,
            transformOutput : (data) => {
                const matrix = Array.from({ length: 7 }, () =>
                    Array.from({ length: 2 }, () => '')
                );
                data = data.slice(1, data.length)
                matrix[0][0] = 'timestamp'; matrix[0][1] = data[0][0];
                matrix[1][0] = 'callBuyVol'; matrix[1][1] = data[1][0];
                matrix[2][0] = 'callSellVol';matrix[2][1] = data[2][0];
                matrix[3][0] = 'putBuyVol'; matrix[3][1] = data[3][0];
                matrix[4][0] = 'putSellVol';matrix[4][1] = data[4][0];
                matrix[5][0] = 'callBlockVol';matrix[5][1] = data[5][0];
                matrix[6][0] = 'putBlockVol';matrix[6][1] = data[6][0];

                return matrix
            }
        },

    },

    hitbtc: {
        "base_url": "https://api.hitbtc.com",
        "Get Currencies": {
            url: '/api/3/public/currency',
            go_up_1_level: true
        },
        "Get Symbols": {
            url: '/api/3/public/symbol',
            params: {
                symbols: {}
            },
            go_up_1_level: true
        },
        "Get Tickers": {
            url: '/api/3/public/ticker',
            params: {
                symbols: {}
            },
            go_up_1_level: true
        },
        "Get Prices": {
            url: '/api/3/public/price/rate',
            params: {
                from: {required: true},
                to: {required: true},
            },
            go_up_1_level: true
        },
        "Get Trades": {
            url: '/api/3/public/trades',
            params: {
                symbols: {},
                by: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
            go_up_1_level: true
        },
        "Get Order Books": {
            url: '/api/3/public/orderbook',
            params: {
                symbols: {},
                depth: {},
            },
            go_up_1_level: true,
            transformOutput: (matrix) =>{
                if(matrix.length<1){return matrix}
                for(var i=0;i < matrix[0].length; i++){
                    if(matrix[0][i].length > 3){
                        if(matrix[0][i].slice(matrix[0][i].length - 3, matrix[0][i].length) === '[0]'){
                            matrix[0][i] = matrix[0][i].slice(0, matrix[0][i].length - 3) + 'Price'
                        } else if(matrix[0][i].slice(matrix[0][i].length - 3, matrix[0][i].length) === '[1]'){
                            matrix[0][i] = matrix[0][i].slice(0, matrix[0][i].length - 3) + 'Amount'
                        }
                    }
                }
                return matrix
            }
        },
        "Get Candlesticks": {
            url: '/api/3/public/candles',
            params: {
                symbols: {required: true},
                period: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
        },
        "Get Futures Information": {
            url: '/api/3/public/futures/info',
            go_up_1_level: true
        },
        "Get Funding History": {
            url: '/api/3/public/futures/history/funding',
            params: {
                symbols: {},
                offset: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
            go_up_1_level: true
        },

        "Get Futures Index Price Candlesticks": {
            url: '/api/3/public/futures/candles/index_price',
            params: {
                symbols: {required: true},
                period: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
        },


        "Get Futures Mark Price Candlesticks": {
            url: '/api/3/public/futures/candles/mark_price',
            params: {
                symbols: {required: true},
                period: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
        },
        "Get Futures Premium Index Candlesticks": {
            url: '/api/3/public/futures/candles/premium_index',
            params: {
                symbols: {required: true},
                period: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
        },
        "Get Futures Open Interest Candlesticks": {
            url: '/api/3/public/futures/candles/open_interest',
            params: {
                symbols: {required: true},
                period: {},
                sort: {},
                from: {},
                till: {},
                limit: {},
            },
        },
    },

    bitfinex: {
        "base_url": "https://api-pub.bitfinex.com",
        "Get Tickers": {
            url: '/v2/tickers',
            params: {
                symbols: {required: true}
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr
                if(matrix[0].length === 11){
                    arr = ['SYMBOL',
                        'BID',
                        'BID_SIZE',
                        'ASK',
                        'ASK_SIZE',
                        'DAILY_CHANGE',
                        'DAILY_CHANGE_RELATIVE',
                        'LAST_PRICE',
                        'VOLUME',
                        'HIGH',
                        'LOW']
                } else {
                    arr = [
                        'SYMBOL',
                        'FRR',
                        'BID',
                        'BID_PERIOD',
                        'BID_SIZE',
                        'ASK',
                        'ASK_PERIOD',
                        'ASK_SIZE',
                        'DAILY_CHANGE',
                        'DAILY_CHANGE_RELATIVE',
                        'LAST_PRICE',
                        'VOLUME',
                        'HIGH',
                        'LOW',
                        '_PLACEHOLDER',
                        '_PLACEHOLDER',
                        'FRR_AMOUNT_AVAILABLE'
                    ]
                }
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Tickers History": {
            url: '/v2/tickers/hist',
            params: {
                symbols: {required: true}
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = [
                    'SYMBOL',
                    'BID',
                    'PLACEHOLDER',
                    'ASK',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'TIMESTAMP'
                ]
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Trades": {
            url: '/v2/trades/:symbol/hist',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true
                }
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr
                if(matrix[0].length === 4){
                    arr = ['ID',
                        'TIMESTAMP',
                        'AMOUNT',
                        'PRICE']
                } else {
                    arr = [
                        'ID',
                        'TIMESTAMP',
                        'AMOUNT',
                        'RATE',
                        'PERIOD'
                    ]
                }
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Order Book": {
            url: '/v2/book/:symbol/:precision',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true
                },
                precision: {
                    required: true,
                    replace_2dots: true
                },
                len: {default: 100}
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr
                if(matrix[0].length === 3){
                    arr = [
                        'ORDER_ID',
                        'PRICE',
                        'AMOUNT'
                    ]
                } else {
                    arr = [
                        'ORDER_ID',
                        'PERIOD',
                        'RATE',
                        'AMOUNT'
                    ]
                }
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Stats": {
            url: '/v2/stats1/:key::size::symbol::side/:section',
            params: {
                key: {
                    required: true,
                    replace_2dots: true
                },
                size: {
                    required: true,
                    replace_2dots: true
                },

                symbol: {
                    required: true,
                    replace_2dots: true
                },
                side: {
                    required: true,
                    replace_2dots: true
                },
                section: {
                    required: true,
                    replace_2dots: true
                },
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = ['TIMESTAMP', 'VALUE']
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Candlesticks": {
            url: '/v2/candles/trade::timeframe::symbol/:section',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true
                },
                timeframe: {
                    required: true,
                    replace_2dots: true
                },
                section: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = ['TIMESTAMP', 'OPEN', 'CLOSE', 'HIGH', 'LOW', 'VOLUME']
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Derivatives Status": {
            url: '/v2/status/deriv',
            params: {
                keys: {
                    required: true,
                }
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = [
                    'KEY',
                    'TIMESTAMP',
                    'PLACEHOLDER',
                    'DERIV_PRICE',
                    'SPOT_PRICE',
                    'PLACEHOLDER',
                    'INSURANCE_FUND_BALANCE',
                    'PLACEHOLDER',
                    'NEXT_FUNDING_EVT_TIMESTAMP_MS',
                    'NEXT_FUNDING_ACCRUED',
                    'NEXT_FUNDING_STEP',
                    'PLACEHOLDER',
                    'CURRENT_FUNDING',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'MARK_PRICE',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'OPEN_INTEREST',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'CLAMP_MIN',
                    'CLAMP_MAX'
                ]
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Derivatives Status History": {
            url: '/v2/status/deriv/:symbol/hist',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = [
                    'KEY',
                    'TIMESTAMP',
                    'PLACEHOLDER',
                    'DERIV_PRICE',
                    'SPOT_PRICE',
                    'PLACEHOLDER',
                    'INSURANCE_FUND_BALANCE',
                    'PLACEHOLDER',
                    'NEXT_FUNDING_EVT_TIMESTAMP_MS',
                    'NEXT_FUNDING_ACCRUED',
                    'NEXT_FUNDING_STEP',
                    'PLACEHOLDER',
                    'CURRENT_FUNDING',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'MARK_PRICE',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'OPEN_INTEREST',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'CLAMP_MIN',
                    'CLAMP_MAX'
                ]
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Liquidations": {
            url: '/v2/liquidations/hist',
            params: {
                start: {},
                end: {}
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = [
                    'pos',
                    'POS_ID',
                    'TIMESTAMP',
                    'PLACEHOLDER',
                    'SYMBOL',
                    'AMOUNT',
                    'BASE_PRICE',
                    'PLACEHOLDER',
                    'IS_MATCH',
                    'IS_MARKET_SOLD',
                    'PLACEHOLDER',
                    'PRICE_ACQUIRED'
                ]
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Leaderboards": {
            url: '/v2/rankings/:key::timeframe::symbol/hist',
            params: {
                key: {
                    required: true,
                    replace_2dots: true
                },
                timeframe: {
                    required: true,
                    replace_2dots: true
                },
                symbol: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = [
                    'TIMESTAMP',
                    'PLACEHOLDER',
                    'USERNAME',
                    'RANKING',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'VALUE',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'TWITTER_HANDLE',
                ]
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
        "Get Pulse History": {
            url: '/v2/pulse/hist',
            params: {
                end: {},
            },
        },
        "Get Pulse Profile Details": {
            url: '/v2/pulse/profile/:name',
            params: {
                name: {required: true, replace_2dots: true},
            },
        },

        "Get Funding Stats": {
            url: '/v2/funding/stats/:symbol/hist',
            params: {
                symbol: {required: true, replace_2dots: true},
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = [
                    'TIMESTAMP',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'FRR',
                    'AVG_PERIOD',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'FUNDING_AMOUNT',
                    'FUNDING_AMOUNT_USED',
                    'PLACEHOLDER',
                    'PLACEHOLDER',
                    'FUNDING_BELOW_THRESHOLD'
                ]
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            }
        },
    },

    bittrex: {
        "base_url": "https://api.bittrex.com/v3",
        "Get Currencies": {
            url: '/currencies',
        },
        "Get List of Markets": {
            url: '/markets',
        },
        "Get Markets' 24h Summary": {
            url: '/markets/summaries',
        },
        "Get All Tickers": {
            url: '/markets/tickers',
        },
        "Get Ticker": {
            url: '/markets/:marketSymbol/ticker',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Get Tickers of a Market": {
            url: '/markets/:marketSymbol',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Get a Market's 24h Summary": {
            url: '/markets/:marketSymbol/summary',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Get Order Book": {
            url: '/markets/:marketSymbol/orderbook',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true
                },
                depth: {}
            }
        },

        "Get Trades": {
            url: '/markets/:marketSymbol/trades',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true
                }
            }
        },
        "Get Candlesticks": {
            url: '/markets/:marketSymbol/candles/trade/:candleInterval/recent',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true
                },
                candleInterval: {
                    required: true,
                    replace_2dots: true
                }
            }
        },
    },

    huobi: {
        "base_url": "https://api.huobi.pro",
        "Get Market Status": {
            url: '/v2/market-status',
            go_down_1_level: true
        },
        "Get All Symbols": {
            url: '/v2/settings/common/symbols',
            params: {
                ts: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var dic = {
                    status: 'status',
                    data: 'data',
                    sc: 'symbol_code',
                    dn: 'display_name',
                    bc: 'base_currency',
                    bcdn: 'base_currency_display_name',
                    qc: 'quote_currency',
                    qcdn: 'quote_currency_display_name',
                    state: 'state',
                    whe: 'white_enabled',
                    cd: 'country_disabled',
                    te: 'trade_enabled',
                    toa: 'trade_open_at',
                    sp: 'symbol_partition',
                    w: 'weight',
                    ttp: 'trade_total_precision',
                    tap: 'trade_amount_precision',
                    tpp: 'trade_price_precision',
                    fp: 'fee_precision',
                    suspend_desc: 'suspend_desc',
                    transfer_board_desc: 'transfer_board_desc',
                    tags: 'tags',
                    lr: 'leverage_ratio',
                    smlr: 'super_margin_leverage_ratio',
                    flr: 'funding_leverage_ratio',
                    wr: 'withdraw_risk',
                    d: 'direction',
                    elr: 'etp_leverage_ratio',
                    p: 'partitions',
                    castate: 'ca state',
                    ca1oa: 'ca1 open at',
                    ca2oa: 'ca2 open at',
                }
                if(matrix.length<1){return matrix}
                for(var i=0;i<matrix[0].length; i++){
                    if(dic[matrix[0][i]]){
                        matrix[0][i] = dic[matrix[0][i]]
                    }
                }
                return matrix
            }
        },
        "Get All Currencies": {
            url: '/v2/settings/common/currencies',
            go_down_1_level: true,
            params: {
                ts: {}
            },
            transformOutput: (matrix) => {
                var dic = {
                    status: 'status',
                    data: 'data',
                    cc: 'currency_code',
                    dn: 'display_name',
                    fn: 'full-name',
                    at: 'asset_type',
                    wp: 'withdraw_precision',
                    ft: 'fee_type',
                    dma: 'deposit_min_amount',
                    wma: 'withdraw_min_amount',
                    sp: 'show_precision',
                    w: 'weight',
                    qc: 'quote_currency',
                    state: 'state',
                    v: 'visible',
                    whe: 'white_enabled',
                    cd: 'country_disabled',
                    de: 'deposit_enabled',
                    wed: 'withdraw_enabled',
                    cawt: 'currency_addr_with_tag',
                    fc: 'fast_confirms',
                    sc: 'safe_confirms',
                    swd: 'suspend_withdraw_desc',
                    wd: 'withdraw_desc',
                    sdd: 'suspend_deposit_desc',
                    dd: 'deposit_desc',
                    svd: 'suspend_visible_desc',
                    tags: 'tags',

                    ts: 'ts',
                    full: 'full',
                    err_code: 'err_code',
                    err_msg: 'err_msg',
                }
                if(matrix.length<1){return matrix}
                for(var i=0;i<matrix[0].length; i++){
                    if(dic[matrix[0][i]]){
                        matrix[0][i] = dic[matrix[0][i]]
                    }
                }
                return matrix
            }
        },
        "Get Currencies Settings": {
            url: '/v1/settings/common/currencys',
            params: {
                ts: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var dic = {
                    status: 'status',
                    data: 'data',
                    name: 'name',
                    dn: 'display-name',
                    vat: 'visible-assets-timestamp',
                    det: 'deposit-enable-timestamp',
                    wet: 'withdraw-enable-timestamp',
                    wp: 'withdraw-precision',
                    ct: 'currency-type',
                    cp: 'currency-partition',
                    ss: 'support-sites',
                    oe: 'otc-enable',
                    dma: 'deposit-min-amount',
                    wma: 'withdraw-min-amount',
                    sp: 'show-precision',
                    w: 'weight',
                    qc: 'quote-currency',
                    state: 'state',
                    v: 'visible',
                    whe: 'white-enabled',
                    cd: 'country-disabled',
                    de: 'deposit-enabled',
                    we: 'withdraw-enabled',
                    cawt: 'currency-addr-with-tag',
                    cao: 'currency-addr-oneoff',
                    fc: 'fast-confirms',
                    sc: 'safe-confirms',
                    swd: 'suspend-withdraw-desc',
                    wd: 'withdraw-desc',
                    sdd: 'suspend-deposit-desc',
                    dd: 'deposit-desc',
                    svd: 'suspend-visible-desc',
                    tags: 'tags',
                    fn: 'full-name',
                    bc: 'block-chains',
                    iqc: 'is-quote-currency',

                    ts: 'ts',
                    full: 'full',
                    'err-code': 'err-code',
                    'err-msg': 'err-msg',
                }
                if(matrix.length<1){return matrix}
                for(var i=0;i<matrix[0].length; i++){
                    if(dic[matrix[0][i]]){
                        matrix[0][i] = dic[matrix[0][i]]
                    }
                }
                return matrix
            }
        },
        "Get Symbols Settings": {
            url: '/v1/settings/common/symbols',
            params: {
                ts: {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var dic = {
                    status: 'status',
                    data: 'data',
                    symbol: 'symbol',
                    sn: 'symbol-name',
                    bc: 'base-currency',
                    qc: 'quote-currency',
                    state: 'state',
                    ve: 'visible-enabled',
                    we: 'white-enabled',
                    dl: 'delist',
                    cd: 'country-disabled',
                    te: 'trade-enabled',
                    ce: 'cancel-enabled',
                    tet: 'trade-enable-timestamp',
                    toa: 'trade-open-at',
                    tca: 'trade-close-at',
                    voa: 'visible-open-at',
                    vca: 'visible-close-at',
                    sp: 'symbol-partition',
                    tm: 'trade-market',
                    w: 'weight',
                    ttp: 'trade-total-precision',
                    tap: 'trade-amount-precision',
                    tpp: 'trade-price-precision',
                    fp: 'fee-precision',
                    tags: 'tags',
                    d: 'direction',
                    bcdn: 'base_currency_display_name',
                    qcdn: 'quote_currency_display_name',
                    elr: 'etp_leverage_ratio',
                    castate: 'ca state',
                    ca1oa: 'ca1 open at',
                    ca1ca: 'ca1 close at',
                    ca2oa: 'ca2 open at',
                    ca2ca: 'ca2 close at',

                    ts: 'ts',
                    full: 'full',
                    'err-code': 'err-code',
                    'err-msg': 'err-msg',
                }
                if(matrix.length<1){return matrix}
                for(var i=0;i<matrix[0].length; i++){
                    if(dic[matrix[0][i]]){
                        matrix[0][i] = dic[matrix[0][i]]
                    }
                }
                return matrix
            }
        },
        "Get Market Symbols Settings": {
            url: '/v1/settings/common/market-symbols',
            go_down_1_level: true,
            params: {
                ts: {},
                symbols: {}
            },
            transformOutput: (matrix) => {
                var dic = {
                    status: 'status',
                    data: 'data',
                    symbol: 'symbol',
                    bc: 'base-currency',
                    qc: 'quote-currency',
                    state: 'state',
                    sp: 'symbol-partition',
                    tags: 'tags',
                    lr: 'leverage_ratio',
                    smlr: 'super_margin_leverage_ratio',
                    pp: 'price-precision',
                    ap: 'amount-precision',
                    vp: 'value-precision',
                    minoa: 'min-order-amt',
                    maxoa: 'max-order-amt',
                    minov: 'min-order-value',
                    lominoa: 'limit-order-min-order-amt',
                    lomaxoa: 'limit-order-max-order-amt',
                    lomaxba: 'limit-order-max-buy-amt',
                    lomaxsa: 'limit-order-max-sell-amt',
                    smminoa: 'sell-market-min-order-amt',
                    smmaxoa: 'sell-market-max-order-amt',
                    bmmaxov: 'buy-market-max-order-value',
                    at: 'api-trading',
                    u: 'underlying',
                    mfr: 'mgmt-fee-rate',
                    ct: 'charge-time',
                    rt: 'rebal-time',
                    rthr: 'rebal-threshold',
                    in: 'init-nav',
                    maxov: 'max-order-value',
                    flr: 'funding-leverage-ratio',
                    castate: 'ca state',
                    'err-code': 'err-code',
                    'err-msg': 'err-msg',
                }
                if(matrix.length<1){return matrix}
                for(var i=0;i<matrix[0].length; i++){
                    if(dic[matrix[0][i]]){
                        matrix[0][i] = dic[matrix[0][i]]
                    }
                }
                return matrix
            }
        },
        "Get Chain Information": {
            url: '/v1/settings/common/chains',
            params: {
                ts: {},
                currency: {},
                'show-desc': {}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var dic = {
                    'status': 'status',
                    'data': 'data',
                    'adt': 'addr-deposit-tag',
                    'ac': 'address-chain',
                    'ao': 'addr-oneoff',
                    'awt': 'addr-with-tag',
                    'chain': 'chain',
                    'ct': 'chain-type',
                    'code': 'code',
                    'currency': 'currency',
                    'deposit-desc': 'deposit-desc',
                    'de': 'deposit-enable',
                    'dma': 'deposit-min-amount',
                    'deposit-tips-desc': 'deposit-tips-desc',
                    'dn': 'display-name',
                    'fc': 'fast-confirms',
                    'ft': 'fee-type',
                    'default': 'is-default',
                    'replace-chain-info-desc': 'replace-chain-info-desc',
                    'replace-chain-notification-desc': 'replace-chain-notification-desc',
                    'replace-chain-popup-desc': 'replace-chain-popup-desc',
                    'sc': 'safe-confirms',
                    'sda': 'suspend-deposit-announcement',
                    'suspend-deposit-desc': 'suspend-deposit-desc',
                    'swa': 'suspend-withdraw-announcement',
                    'suspend-withdraw-desc': 'suspend-withdraw-desc',
                    'v': 'visible',
                    'withdraw-desc': 'withdraw-desc',
                    'we': 'withdraw-enable',
                    'wma': 'withdraw-min-amount',
                    'wp': 'withdraw-precision',
                    'fn': 'full-name',
                    'withdraw-tips-desc': 'withdraw-tips-desc',
                    'suspend-visible-desc': 'suspend-visible-desc',
                    '': '',
                    'ts': 'ts',
                    'full': 'full',
                    'err-code': 'err-code',
                    'err-msg': 'err-msg',
                }
                if(matrix.length<1){return matrix}
                for(var i=0;i<matrix[0].length; i++){
                    if(dic[matrix[0][i]]){
                        matrix[0][i] = dic[matrix[0][i]]
                    }
                }
                return matrix
            }
        },
        "Get Currency and Chains": {
            url: '/v2/reference/currencies',
            params: {
                currency: {},
                authorizedUser: {}
            },
            go_down_1_level: true,
        },
        "Get Candlesticks": {
            url: '/market/history/kline',
            go_down_1_level: true,
            params: {
                period: {required: true},
                symbol: {required: true},
                size: {}
            },
        },
        "Get Latest Aggregated Ticker": {
            url: '/market/detail/merged',
            params: {
                symbol: {required: true},
            },
            go_down_1_level: true
        },
        "Get Latest Tickers for All Pairs": {
            url: '/market/tickers',
            go_down_1_level: true
        },
        "Get Market Depth": {
            url: '/market/depth',
            go_down_1_level: true,
            params: {
                depth: {},
                symbol: {required: true},
                type: {default: 'step0'}
            },
            specialHandleFunction: (data) => {
                var ask = data.tick.asks
                var bids = data.tick.bids
                var res = [['ask_price', 'ask_size', 'bids_price', 'bids_size']]
                for(var i=0;i<Math.min(ask.length, bids.length); i++){
                    res.push([ask[i][0], ask[i][1], bids[i][0], bids[i][1]])
                }
                return res
            }
        },
        "Get Last Trade": {
            url: '/market/trade',
            params: {
                symbol: {required: true},
            },
            go_down_1_level: true
        },
        "Get Recent Trades": {
            url: '/market/history/trade',
            go_down_1_level: true,
            params: {
                symbol: {required: true},
                size: {}
            },
        },
        "Get Last 24h Market Summary": {
            url: '/market/detail/',
            go_down_1_level: true,
            params: {
                symbol: {required: true},
            },
        },
    },

    bitmex: {
        "base_url": "https://www.bitmex.com/api/v1",
        "Swap Funding History": {
            url: '/funding',
            params: {
                reverse: {default: 'true'}
            }
        },
        "All Instruments": {
            url: '/instrument',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Active or Expired <24h Instruments": {
            url: '/instrument/active',
            params: {
                reverse: {default: 'true'}
            }
        },
        "All Active Contract Series & Interval Pairs": {
            url: '/instrument/activeIntervals',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Composite Index": {
            url: '/instrument/compositeIndex',
            params: {
                reverse: {default: 'true'},
                symbol: {required: true}
            }
        },
        "All Price Indices": {
            url: '/instrument/indices',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Summary of Exchange Statistics in USD": {
            url: '/instrument/usdVolume',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Insurance Fund Data": {
            url: '/insurance',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Active Liquidations": {
            url: '/liquidation',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Book Order": {
            url: '/orderBook/L2',
            params: {
                reverse: {default: 'true'},
                symbol: {required: true}
            }
        },
        "Quotes": {
            url: '/quote',
            params: {
                reverse: {default: 'true'},
                symbol: {required: true}
            }
        },
        "Previous Quotes in Time Buckets": {
            url: '/quote/bucketed',
            params: {
                reverse: {default: 'true'},
                symbol: {required: true},
                binSize: {required: true}
            }
        },
        "Historical Settlement Data": {
            url: '/settlement',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Exchange Statistics": {
            url: '/stats',
            params: {
                reverse: {default: 'true'}
            }
        },
        "Historical Exchange Statistics": {
            url: '/stats/history',
            params: {
                reverse: {default: 'true'}
            }
        },
        "All Trades": {
            url: '/trade',
            params: {
                reverse: {default: 'true'},
            }
        },
        // "Previous Trades in Time Bucket": {
        //     url: '/trade/bucketed',
        //     params: {
        //         reverse: {default: 'true'},
        //     }
        // },
    },

    bitmex: {
        "base_url": "https://www.bitmex.com/api/v1",
        "Swap Funding History": {
            url: '/funding',
            params: {
                reverse: {default: 'true'}
            }
        },

    },
}