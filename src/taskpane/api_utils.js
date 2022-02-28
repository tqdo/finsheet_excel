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
        },
        "Get Recent Spreads": {
            url: '/public/Spread',
            params: {
                pair:{required: true},
                since: {}
            },
            go_down_1_level: true,
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
        },
        "Get Trade Histories": {
            url: '/api/v1/market/histories',
            params: {
                symbol: {required: true}
            },
            go_down_1_level: true,
        },
        "Get Candles": {
            url: '/api/v1/market/candles',
            params: {
                symbol: {required: true},
                type: {required: true},
                startAt:{},
                endAt: {}
            },
            go_down_1_level: true,
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


        "Get Market Price": {
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
        "Candles": {
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

    okex: {
        "base_url": "https://www.okx.com",
        "Trading Pairs": {
            url: '/api/spot/v3/instruments',
        },
        "Order Book": {
            url: '/api/spot/v3/instruments/:instrument_id/book',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                size: {},
                depth: {},
            }
        },
        "Ticker Information": {
            url: '/api/spot/v3/instruments/ticker',
        },
        "Trading Pair Information": {
            url: '/api/spot/v3/instruments/:instrument_id/ticker',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Filled Orders": {
            url: '/api/spot/v3/instruments/:instrument_id/trades',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                limit: {}
            }
        },
        "Market Data": {
            url: '/api/spot/v3/instruments/:instrument_id/candles',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
                granularity: {}
            }
        },
        "Historical Market Data": {
            url: '/api/spot/v3/instruments/:instrument_id:/history/candles',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
                granularity: {},
                limit: {}
            }
        },
        "Margin Mark Price": {
            url: '/api/margin/v3/instruments/:instrument_id/mark_price',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },



        "Futures Order Book": {
            url: '/api/futures/v3/instruments/:instrument_id/book',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                size: {},
                depth: {},
            }
        },
        "Futures Ticker": {
            url: '/api/futures/v3/instruments/ticker',
        },
        "Futures Token Information": {
            url: '/api/futures/v3/instruments/:instrument_id/ticker',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Futures Filled Orders": {
            url: '/api/futures/v3/instruments/:instrument_id/trades',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                limit: {}
            }
        },
        "Futures Market Data": {
            url: '/api/futures/v3/instruments/:instrument_id/candles',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
                granularity: {}
            }
        },
        "Future Indices": {
            url: '/api/futures/v3/instruments/:instrument_id/index',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Futures Exchange Rates": {
            url: '/api/futures/v3/rate',
        },
        "Futures Estimated Delivery Price": {
            url: '/api/futures/v3/instruments/estimated_price',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Futures Open Interests": {
            url: '/api/futures/v3/instruments/:instrument_id/open_interest',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Futures Price Limit": {
            url: '/api/futures/v3/instruments/:instrument_id/price_limit',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },


        "Futures Mark Price": {
            url: '/api/futures/v3/instruments/estimated_price',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Futures Liquidated Orders": {
            url: '/api/futures/v3/instruments/<instrument_id>/liquidation',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                status:{required: true},
                limit: {},
                from: {},
                to: {}
            }
        },





        "Swap Order Book": {
            url: '/api/swap/v3/instruments/:instrument_id/book',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                size: {},
                depth: {},
            }
        },
        "Swap Ticker": {
            url: '/api/swap/v3/instruments/ticker',
        },
        "Swap Token Information": {
            url: '/api/swap/v3/instruments/:instrument_id/ticker',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Swap Filled Orders": {
            url: '/api/swap/v3/instruments/:instrument_id/trades',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                limit: {}
            }
        },
        "Swap Market Data": {
            url: '/api/swap/v3/instruments/:instrument_id/candles',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
                start: {},
                end: {},
                granularity: {}
            }
        },
        "Swap Indices": {
            url: '/api/swap/v3/instruments/:instrument_id/index',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Swap Exchange Rates": {
            url: '/api/swap/v3/rate',
        },
        "Swap Current Price Limits": {
            url: '/api/swap/v3/instruments/<instrument_id>/price_limit',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Swap Open Interests": {
            url: '/api/swap/v3/instruments/:instrument_id/open_interest',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },
        "Swap Liquidated Orders": {
            url: '/api/swap/v3/instruments/<instrument_id>/liquidation',
            params: {
                instrument_id: {
                    required: true,
                    replace_2dots: true
                },
            }
        },


    },
}