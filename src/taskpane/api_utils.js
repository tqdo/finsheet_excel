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

    }
}