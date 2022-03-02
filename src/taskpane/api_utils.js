function checkValidProviderEndpoint(provider, endpoint_name){
    var first_dic = big_api_map[provider.toLowerCase()]
    if(!first_dic){return [{}, "", "Invalid provider"]}
    var second_dic = first_dic[endpoint_name]
    if(!second_dic){return [{}, "", "Invalid endpoint"]}
    return [second_dic, first_dic.base_url, ""]
}

var providers_need_server = {
    kraken: 1, kucoin:1, okex: 1, hitbtc: 1, bitfinex: 1, bittrex: 1, bitmex: 1,

    oanda: 1,
}


var big_api_map = {
    coinbase: {
        "doc_url":  'https://developers.coinbase.com/api/v2',
        'provider_description': 'Coinbase Global, Inc., branded Coinbase, is an American company that operates a cryptocurrency exchange platform. Coinbase operates remote-first, and lacks an official physical headquarters',
        "base_url": "https://api.coinbase.com/v2",
        "Get currencies": {
            url: "/currencies",
            doc_url: 'https://developers.coinbase.com/api/v2#get-currencies',
            description:'List known currencies. Currency codes will conform to the ISO 4217 standard where possible. Currencies which have or had no representation in ISO 4217 may use a custom code (e.g. BTC).',
            sample_response: '{\n' +
                '  "data": [\n' +
                '    {\n' +
                '      "id": "AED",\n' +
                '      "name": "United Arab Emirates Dirham",\n' +
                '      "min_size": "0.01000000"\n' +
                '    },\n' +
                '    {\n' +
                '      "id": "AFN",\n' +
                '      "name": "Afghan Afghani",\n' +
                '      "min_size": "0.01000000"\n' +
                '    },\n' +
                '    {\n' +
                '      "id": "ALL",\n' +
                '      "name": "Albanian Lek",\n' +
                '      "min_size": "0.01000000"\n' +
                '    },\n' +
                '    {\n' +
                '      "id": "AMD",\n' +
                '      "name": "Armenian Dram",\n' +
                '      "min_size": "0.01000000"\n' +
                '    },\n' +
                '    ...\n' +
                '  }\n' +
                '}'
        },
        "Get exchange rates": {
            url:    "/exchange-rates",
            doc_url: 'https://developers.coinbase.com/api/v2#get-exchange-rates',
            params: {
                currency: {default: 'USD', type: 'string', description: 'Base currency'}
            },
            go_down_1_level: true,
            description: 'Get current exchange rates. Default base currency is USD but it can be defined as any supported currency. Returned rates will define the exchange rate for one unit of the base currency.',
            sample_response: '{\n' +
                '  "data": {\n' +
                '    "currency": "BTC",\n' +
                '    "rates": {\n' +
                '      "AED": "36.73",\n' +
                '      "AFN": "589.50",\n' +
                '      "ALL": "1258.82",\n' +
                '      "AMD": "4769.49",\n' +
                '      "ANG": "17.88",\n' +
                '      "AOA": "1102.76",\n' +
                '      "ARS": "90.37",\n' +
                '      "AUD": "12.93",\n' +
                '      "AWG": "17.93",\n' +
                '      "AZN": "10.48",\n' +
                '      "BAM": "17.38",\n' +
                '      ...\n' +
                '    }\n' +
                '  }\n' +
                '}'

        },
        "Get buy price": {
            url: "/prices/:currency_pair/buy",
            doc_url: 'https://developers.coinbase.com/api/v2#get-buy-price',
            description: 'Get the total price to buy one cryptocurrency.',
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true,
                    type: 'string'
                }
            },
            go_down_1_level: true,
            sample_response: '{\n' +
                '  "data": {\n' +
                '    "amount": "1020.25",\n' +
                '    "currency": "USD"\n' +
                '  }\n' +
                '}'
        },
        "Get sell price": {
            url: "/prices/:currency_pair/sell",
            doc_url:'https://developers.coinbase.com/api/v2#get-sell-price',
            description: 'Get the total price to sell one cryptocurrency.',
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true,
                    type: 'string'
                }
            },
            go_down_1_level: true,
            sample_response: '{\n' +
                '  "data": {\n' +
                '    "amount": "1010.25",\n' +
                '    "currency": "USD"\n' +
                '  }\n' +
                '}'
        },
        "Get spot price": {
            url: "/prices/:currency_pair/spot",
            doc_url:'https://developers.coinbase.com/api/v2#get-spot-price',
            description: 'Get the current market price for a cryptocurrency. This is usually somewhere in between the buy and sell price.',
            params: {
                currency_pair: {
                    required: true,
                    replace_2dots: true,
                    type: 'string'
                },
                date: {
                    type: 'string'
,                   description: 'Specify date for historic spot price in format YYYY-MM-DD (UTC)'
                }
            },
            go_down_1_level: true,
            sample_response: '{\n' +
                '  "data": {\n' +
                '    "amount": "1010.25",\n' +
                '    "currency": "USD"\n' +
                '  }\n' +
                '}'
        },
        "Get current time": {
            url: "/time",
            doc_url: 'https://developers.coinbase.com/api/v2#get-current-time',
            description: 'Get the API server time.',
            go_down_1_level: true,
            sample_response: '{\n' +
                '  "data": {\n' +
                '    "iso": "2015-06-23T18:02:51Z",\n' +
                '    "epoch": 1435082571\n' +
                '  }\n' +
                '}'
        },
    },

    binance: {
        "base_url": "https://api.binance.com",
        "provider_description": 'Binance is a cryptocurrency exchange which is the largest exchange in the world in terms of daily trading volume of cryptocurrencies',
        "doc_url": 'https://binance-docs.github.io/apidocs/spot/en/',
        "Check Server Time": {
            url: '/api/v3/time',
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#check-server-time',
            description: 'Test connectivity to the Rest API and get the current server time.',
            sample_response: '{\n' +
                '  "serverTime": 1499827319559\n' +
                '}'
        },
        "Exchange Information": {
            url: "/api/v3/exchangeInfo",
            params: {
                symbols: {
                    transformInput: function (symbols){
                        return JSON.stringify(symbols.split(","))
                    },
                    type: 'string'
                }
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#exchange-information',
            description: 'Current exchange trading rules and symbol information',
            sample_response: '{\n' +
                '  "timezone": "UTC",\n' +
                '  "serverTime": 1565246363776,\n' +
                '  "rateLimits": [\n' +
                '    {\n' +
                '      ...' +
                '    }\n' +
                '  ],\n' +
                '  "exchangeFilters": [\n' +
                '    ...' +
                '  ],\n' +
                '  "symbols": [\n' +
                '    {\n' +
                '      "symbol": "ETHBTC",\n' +
                '      "status": "TRADING",\n' +
                '      "baseAsset": "ETH",\n' +
                '      "baseAssetPrecision": 8,\n' +
                '      "quoteAsset": "BTC",\n' +
                '      "quotePrecision": 8,\n' +
                '      "quoteAssetPrecision": 8,\n' +
                '      "orderTypes": [\n' +
                '        "LIMIT",\n' +
                '        "LIMIT_MAKER",\n' +
                '        "MARKET",\n' +
                '        "STOP_LOSS",\n' +
                '        "STOP_LOSS_LIMIT",\n' +
                '        "TAKE_PROFIT",\n' +
                '        "TAKE_PROFIT_LIMIT"\n' +
                '      ],\n' +
                '      "icebergAllowed": true,\n' +
                '      "ocoAllowed": true,\n' +
                '      "quoteOrderQtyMarketAllowed": true,\n' +
                '      "allowTrailingStop": false,\n' +
                '      "isSpotTradingAllowed": true,\n' +
                '      "isMarginTradingAllowed": true,\n' +
                '      "filters": [\n' +
                '        //These are defined in the Filters section.\n' +
                '        //All filters are optional\n' +
                '      ],\n' +
                '      "permissions": [\n' +
                '         "SPOT",\n' +
                '         "MARGIN"\n' +
                '      ]\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Order Book":{
            url: '/api/v3/depth',
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#order-book',
            description: 'Get order book.',
            sample_response: '{\n' +
                '  "lastUpdateId": 1027024,\n' +
                '  "bids": [\n' +
                '    [\n' +
                '      "4.00000000",     // PRICE\n' +
                '      "431.00000000"    // QTY\n' +
                '    ]\n' +
                '  ],\n' +
                '  "asks": [\n' +
                '    [\n' +
                '      "4.00000200",\n' +
                '      "12.00000000"\n' +
                '    ]\n' +
                '  ]\n' +
                '}',
            params: {
                symbol : {required: true, type: 'string'},
                limit :{type: 'number', default: 100, description: 'Default 100; max 5000. If limit > 5000, then the response will truncate to 5000.'}
            },
            transformOutput: (matrix) => {
                matrix[0][0] = 'askPrice'; matrix[0][1] = 'askQuantity';matrix[0][2] = 'bidsPrice';matrix[0][3] = 'bidsQuantity';
                return matrix
            }
        },
        "Recent Trades List":{
            url: '/api/v3/trades',
            params: {
                symbol : {required: true, type: 'string'},
                limit :{type: 'number', description: 'Default 500; max 1000.', default: 500}
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#recent-trades-list',
            description: 'Get recent trades.',
            sample_response: '[\n' +
                '  {\n' +
                '    "id": 28457,\n' +
                '    "price": "4.00000100",\n' +
                '    "qty": "12.00000000",\n' +
                '    "quoteQty": "48.000012",\n' +
                '    "time": 1499865549590,\n' +
                '    "isBuyerMaker": true,\n' +
                '    "isBestMatch": true\n' +
                '  }\n' +
                ']',
        },
        "Aggregate Trades List":{
            url: '/api/v3/aggTrades',
            params: {
                symbol : {required: true, type: 'string'},
                fromId: {type: 'number', description: 'id to get aggregate trades from INCLUSIVE.'},
                startTime:{type: 'number', description: 'Timestamp in ms to get aggregate trades from INCLUSIVE.'},
                endTime: {type: 'number', description: 'Timestamp in ms to get aggregate trades until INCLUSIVE.'},
                limit :{type: 'number', description: 'Default 500; max 1000.', default: 500}
            },
            transformOutput: (matrix) => {
                matrix[0][0] = 'isBestMatch'; matrix[0][1] = 'timestamp';matrix[0][2] = 'aggregateTradeId';
                matrix[0][3] = 'firstTradeId';matrix[0][4] = 'lastTradeId';matrix[0][5] = 'isBuyerMaker';
                matrix[0][6] = 'price';matrix[0][7] = 'quantity';
                return matrix
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#compressed-aggregate-trades-list',
            description: 'Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated. \n' +
            '\n If startTime and endTime are sent, time between startTime and endTime must be less than 1 hour. \n If fromId, startTime, and endTime are not sent, the most recent aggregate trades will be returned.',
            sample_response: '[\n' +
                '  {\n' +
                '    "a": 26129,         // Aggregate tradeId\n' +
                '    "p": "0.01633102",  // Price\n' +
                '    "q": "4.70443515",  // Quantity\n' +
                '    "f": 27781,         // First tradeId\n' +
                '    "l": 27781,         // Last tradeId\n' +
                '    "T": 1498793709153, // Timestamp\n' +
                '    "m": true,          // Was the buyer the maker?\n' +
                '    "M": true           // Was the trade the best price match?\n' +
                '  }\n' +
                ']',
        },
        "Candlestick Data": {
            url: '/api/v3/klines',
            params: {
                symbol : {required: true, type: 'string'},
                interval : {required: true, type: 'enum', possible: ['1h', '30m', '15m', '5m', '1m', '1d', '1w', '1m']},
                startTime:{type: 'number'},
                endTime: {type: 'number'},
                limit :{type: 'number', description: 'Default 500; max 1000.', default: 500}
            },
            transformOutput: (matrix) => {
                matrix[0][0] = 'openTime'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';matrix[0][5] = 'volume';
                matrix[0][6] = 'closeTime';matrix[0][7] = 'quoteAssetVolume';matrix[0][8] = 'numberOfTrades';
                matrix[0][9] = 'baseAssetVolume'; matrix[0][10] = 'quoteAssetVolume';matrix[0][11] = 'ignore';
                return matrix
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data',
            description: 'Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time. \n' +
                'If startTime and endTime are not sent, the most recent klines are returned.',
            sample_response: '[\n' +
                '  [\n' +
                '    1499040000000,      // Open time\n' +
                '    "0.01634790",       // Open\n' +
                '    "0.80000000",       // High\n' +
                '    "0.01575800",       // Low\n' +
                '    "0.01577100",       // Close\n' +
                '    "148976.11427815",  // Volume\n' +
                '    1499644799999,      // Close time\n' +
                '    "2434.19055334",    // Quote asset volume\n' +
                '    308,                // Number of trades\n' +
                '    "1756.87402397",    // Taker buy base asset volume\n' +
                '    "28.46694368",      // Taker buy quote asset volume\n' +
                '    "17928899.62484339" // Ignore.\n' +
                '  ]\n' +
                ']',
        },
        "Current Average Price":{
            url: '/api/v3/avgPrice',
            params: {
                symbol : {required: true, type: 'string'},
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#current-average-price',
            description: 'Current average price for a symbol.',
            sample_response: '{\n' +
                '  "mins": 5,\n' +
                '  "price": "9.35751834"\n' +
                '}',
        },
        "24hr Ticker Price Change Statistics":{
            url: '/api/v3/ticker/24hr',
            params: {
                symbol : {required: true, type: 'string'},
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics',
            description: '24 hour rolling window price change statistics.',
            sample_response: '{\n' +
                '  "symbol": "BNBBTC",\n' +
                '  "priceChange": "-94.99999800",\n' +
                '  "priceChangePercent": "-95.960",\n' +
                '  "weightedAvgPrice": "0.29628482",\n' +
                '  "prevClosePrice": "0.10002000",\n' +
                '  "lastPrice": "4.00000200",\n' +
                '  "lastQty": "200.00000000",\n' +
                '  "bidPrice": "4.00000000",\n' +
                '  "bidQty": "100.00000000",\n' +
                '  "askPrice": "4.00000200",\n' +
                '  "askQty": "100.00000000",\n' +
                '  "openPrice": "99.00000000",\n' +
                '  "highPrice": "100.00000000",\n' +
                '  "lowPrice": "0.10000000",\n' +
                '  "volume": "8913.30000000",\n' +
                '  "quoteVolume": "15.30000000",\n' +
                '  "openTime": 1499783499040,\n' +
                '  "closeTime": 1499869899040,\n' +
                '  "firstId": 28385,   // First tradeId\n' +
                '  "lastId": 28460,    // Last tradeId\n' +
                '  "count": 76         // Trade count\n' +
                '}',
        },
        "Symbol Price Ticker":{
            url: '/api/v3/ticker/price',
            params: {
                symbol : {type: 'string'},
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#symbol-price-ticker',
            description: 'Latest price for a symbol. If the symbol is not sent, prices for all symbols will be returned in an array',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "LTCBTC",\n' +
                '    "price": "4.00000200"\n' +
                '  },\n' +
                '  {\n' +
                '    "symbol": "ETHBTC",\n' +
                '    "price": "0.07946600"\n' +
                '  }\n' +
                ' ...' +
                ']',
        },
        "Symbol Order Book Ticker":{
            url: '/api/v3/ticker/bookTicker',
            params: {
                symbol : {type: 'string'},
            },
            doc_url: 'https://binance-docs.github.io/apidocs/spot/en/#symbol-order-book-ticker',
            description: 'Best price/qty on the order book for a symbol. f the symbol is not sent, bookTickers for all symbols will be returned in an array.',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "LTCBTC",\n' +
                '    "bidPrice": "4.00000000",\n' +
                '    "bidQty": "431.00000000",\n' +
                '    "askPrice": "4.00000200",\n' +
                '    "askQty": "9.00000000"\n' +
                '  },\n' +
                '  {\n' +
                '    "symbol": "ETHBTC",\n' +
                '    "bidPrice": "0.07946700",\n' +
                '    "bidQty": "9.00000000",\n' +
                '    "askPrice": "100000.00000000",\n' +
                '    "askQty": "1000.00000000"\n' +
                '  }\n' +
                '  ...' +
                ']',
        },
    },

    kraken: {
        "base_url": "https://api.kraken.com/0",
        "provider_description": 'Kraken is a United States-based cryptocurrency exchange and bank, founded in 2011. The exchange provides trading between cryptocurrency and fiat currencies, and provides price information to Bloomberg Terminal.',
        "doc_url": 'https://docs.kraken.com/rest/',

        "Get Server Time": {
            url: '/public/Time',
            doc_url: 'https://docs.kraken.com/rest/#operation/getServerTime',
            description: 'Get the server\'s time.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "unixtime": 1616336594,\n' +
                '    "rfc1123": "Sun, 21 Mar 21 14:23:14 +0000"\n' +
                '  }\n' +
                '}'
        },
        "Get System Status": {
            url: '/public/SystemStatus',
            doc_url: 'https://docs.kraken.com/rest/#operation/getSystemStatus',
            description: 'Get the current system status or trading mode.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "status": "online",\n' +
                '    "timestamp": "2021-03-21T15:33:02Z"\n' +
                '  }\n' +
                '}'
        },
        "Get Asset Info": {
            url: '/public/Assets',
            params: {
                asset:{type: 'string', description: 'Comma delimited list of assets to get info on (ex: asset=XBT,ETH).'}
            },
            doc_url: 'https://docs.kraken.com/rest/#operation/getAssetInfo',
            description: 'Get information about the assets that are available for deposit, withdrawal, trading and staking.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XXBT": {\n' +
                '      "aclass": "currency",\n' +
                '      "altname": "XBT",\n' +
                '      "decimals": 10,\n' +
                '      "display_decimals": 5\n' +
                '    },\n' +
                '    "ZEUR": {\n' +
                '      "aclass": "currency",\n' +
                '      "altname": "EUR",\n' +
                '      "decimals": 4,\n' +
                '      "display_decimals": 2\n' +
                '    },\n' +
                '    "ZUSD": {\n' +
                '      "aclass": "currency",\n' +
                '      "altname": "USD",\n' +
                '      "decimals": 4,\n' +
                '      "display_decimals": 2\n' +
                '    }\n' +
                '  }\n' +
                '}'
        },
        "Get Tradable Asset Pairs": {
            url: '/public/AssetPairs',
            params: {
                pair:{type: 'string', description: 'Asset pairs to get data for (ex: pair=XXBTCZUSD,XETHXXBT)'},
                info: {type: 'enum', possible: ['info', 'leverage', 'fees', 'margin'], description: 'Info to retrieve'}
            },
            doc_url: 'https://docs.kraken.com/rest/#operation/getTradableAssetPairs',
            description: 'Get tradable asset pairs.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XETHXXBT": {\n' +
                '      "altname": "ETHXBT",\n' +
                '      "wsname": "ETH/XBT",\n' +
                '      "aclass_base": "currency",\n' +
                '      "base": "XETH",\n' +
                '      "aclass_quote": "currency",\n' +
                '      "quote": "XXBT",\n' +
                '      "lot": "unit",\n' +
                '      "pair_decimals": 5,\n' +
                '      "lot_decimals": 8,\n' +
                '      "lot_multiplier": 1,\n' +
                '      "leverage_buy": [\n' +
                '        2,\n' +
                '        3,\n' +
                '      ],\n' +
                '      "leverage_sell": [\n' +
                '        2,\n' +
                '        3,\n' +
                '      ],\n' +
                '      "fees": [\n' +
                '        [\n' +
                '          0,\n' +
                '          0.26\n' +
                '        ],\n' +
                '        [\n' +
                '          50000,\n' +
                '          0.24\n' +
                '        ],\n' +
                '        [\n' +
                '          100000,\n' +
                '          0.22\n' +
                '        ],\n' +
                '        [\n' +
                '          250000,\n' +
                '          0.2\n' +
                '        ],\n' +
                '      ],\n' +
                '      "fees_maker": [\n' +
                '        [\n' +
                '          0,\n' +
                '          0.16\n' +
                '        ],\n' +
                '        [\n' +
                '          50000,\n' +
                '          0.14\n' +
                '        ],\n' +
                '        [\n' +
                '          100000,\n' +
                '          0.12\n' +
                '        ],\n' +
                '        [\n' +
                '          250000,\n' +
                '          0.1\n' +
                '        ],\n' +
                '      ],\n' +
                '      "fee_volume_currency": "ZUSD",\n' +
                '      "margin_call": 80,\n' +
                '      "margin_stop": 40,\n' +
                '      "ordermin": "0.005"\n' +
                '    },\n' +
                '    "XXBTZUSD": {\n' +
                '      "altname": "XBTUSD",\n' +
                '      "wsname": "XBT/USD",\n' +
                '      "aclass_base": "currency",\n' +
                '      "base": "XXBT",\n' +
                '      "aclass_quote": "currency",\n' +
                '      "quote": "ZUSD",\n' +
                '      "lot": "unit",\n' +
                '      "pair_decimals": 1,\n' +
                '      "lot_decimals": 8,\n' +
                '      "lot_multiplier": 1,\n' +
                '      "leverage_buy": [\n' +
                '        2,\n' +
                '        3,\n' +
                '      ],\n' +
                '      "leverage_sell": [\n' +
                '        2,\n' +
                '        3,\n' +
                '      ],\n' +
                '      "fees": [\n' +
                '        [\n' +
                '          0,\n' +
                '          0.26\n' +
                '        ],\n' +
                '        [\n' +
                '          50000,\n' +
                '          0.24\n' +
                '        ],\n' +
                '        [\n' +
                '          100000,\n' +
                '          0.22\n' +
                '        ],\n' +
                '        [\n' +
                '          250000,\n' +
                '          0.2\n' +
                '        ],\n' +
                '      ],\n' +
                '      "fees_maker": [\n' +
                '        [\n' +
                '          0,\n' +
                '          0.16\n' +
                '        ],\n' +
                '        [\n' +
                '          50000,\n' +
                '          0.14\n' +
                '        ],\n' +
                '        [\n' +
                '          100000,\n' +
                '          0.12\n' +
                '        ],\n' +
                '        [\n' +
                '          250000,\n' +
                '          0.1\n' +
                '        ],\n' +
                '      ],\n' +
                '      "fee_volume_currency": "ZUSD",\n' +
                '      "margin_call": 80,\n' +
                '      "margin_stop": 40,\n' +
                '      "ordermin": "0.0002"\n' +
                '    }\n' +
                '  }\n' +
                '}'
        },
        "Get Ticker Information": {
            url: '/public/Ticker',
            params: {
                pair:{required: true, description: 'Asset pair to get data for (ex: pair=XBTUSD)', type: 'string'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kraken.com/rest/#operation/getTickerInformation',
            description: 'Get ticker information.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XXBTZUSD": {\n' +
                '      "a": [\n' +
                '        "52609.60000",\n' +
                '        "1",\n' +
                '        "1.000"\n' +
                '      ],\n' +
                '      "b": [\n' +
                '        "52609.50000",\n' +
                '        "1",\n' +
                '        "1.000"\n' +
                '      ],\n' +
                '      "c": [\n' +
                '        "52641.10000",\n' +
                '        "0.00080000"\n' +
                '      ],\n' +
                '      "v": [\n' +
                '        "1920.83610601",\n' +
                '        "7954.00219674"\n' +
                '      ],\n' +
                '      "p": [\n' +
                '        "52389.94668",\n' +
                '        "54022.90683"\n' +
                '      ],\n' +
                '      "t": [\n' +
                '        23329,\n' +
                '        80463\n' +
                '      ],\n' +
                '      "l": [\n' +
                '        "51513.90000",\n' +
                '        "51513.90000"\n' +
                '      ],\n' +
                '      "h": [\n' +
                '        "53219.90000",\n' +
                '        "57200.00000"\n' +
                '      ],\n' +
                '      "o": "52280.40000"\n' +
                '    }\n' +
                '  }\n' +
                '}'
        },
        "Get OHLC Data": {
            url: '/public/OHLC',
            params: {
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (ex: pair=XBTUSD)'},
                interval: {type: 'enum', description: 'Time frame interval in minutes', possible: [1, 5, 15, 30, 60, 240, 1440, 10080, 21600] },
                since: {type: 'number', description: 'Return committed OHLC data since given ID (ex: since=1548111600)'}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['time', 'open', 'high', 'low', 'close', 'vwap', 'volume', 'count']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] = matrix[0][i].split('[')[0] + '_' + arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.kraken.com/rest/#operation/getOHLCData',
            description: 'Get OHLC data. Note: the last entry in the OHLC array is for the current, not-yet-committed frame and will always be present, regardless of the value of since.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XXBTZUSD": [\n' +
                '      [\n' +
                '        1616662740,\n' +
                '        "52591.9",\n' +
                '        "52599.9",\n' +
                '        "52591.8",\n' +
                '        "52599.9",\n' +
                '        "52599.1",\n' +
                '        "0.11091626",\n' +
                '        5\n' +
                '      ],\n' +
                '      [\n' +
                '        1616662800,\n' +
                '        "52600.0",\n' +
                '        "52674.9",\n' +
                '        "52599.9",\n' +
                '        "52665.2",\n' +
                '        "52643.3",\n' +
                '        "2.49035996",\n' +
                '        30\n' +
                '      ],\n' +
                '      [\n' +
                '        1616662860,\n' +
                '        "52677.7",\n' +
                '        "52686.4",\n' +
                '        "52602.1",\n' +
                '        "52609.5",\n' +
                '        "52634.5",\n' +
                '        "1.25810675",\n' +
                '        20\n' +
                '      ],\n' +
                '      [\n' +
                '        1616662920,\n' +
                '        "52603.9",\n' +
                '        "52627.5",\n' +
                '        "52601.2",\n' +
                '        "52616.4",\n' +
                '        "52614.0",\n' +
                '        "3.42391799",\n' +
                '        23\n' +
                '      ],\n' +
                '      [\n' +
                '        1616662980,\n' +
                '        "52601.2",\n' +
                '        "52601.2",\n' +
                '        "52599.9",\n' +
                '        "52599.9",\n' +
                '        "52599.9",\n' +
                '        "0.43748934",\n' +
                '        7\n' +
                '      ]\n' +
                '    ],\n' +
                '    "last": 1616662920\n' +
                '  }\n' +
                '}'
        },
        "Get Order Book": {
            url: '/public/Depth',
            params: {
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (ex: pair=XBTUSD)'},
                count: {type: 'number', description: 'maximum number of asks/bids. Can take value between 1 and 500', default: 100}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kraken.com/rest/#operation/getOrderBook',
            description: 'Get order book.',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XXBTZUSD": {\n' +
                '      "asks": [\n' +
                '        [\n' +
                '          "52523.00000",\n' +
                '          "1.199",\n' +
                '          1616663113\n' +
                '        ],\n' +
                '        [\n' +
                '          "52536.00000",\n' +
                '          "0.300",\n' +
                '          1616663112\n' +
                '        ]\n' +
                '      ],\n' +
                '      "bids": [\n' +
                '        [\n' +
                '          "52522.90000",\n' +
                '          "0.753",\n' +
                '          1616663112\n' +
                '        ],\n' +
                '        [\n' +
                '          "52522.80000",\n' +
                '          "0.006",\n' +
                '          1616663109\n' +
                '        ]\n' +
                '      ]\n' +
                '    }\n' +
                '  }\n' +
                '}'
        },
        "Get Recent Trades": {
            url: '/public/Trades',
            params: {
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (ex: pair=XBTUSD)'},
                since: {type: 'number', description: 'Return trade data since given timestamp (ex: since=1548111600)'}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['price', 'volume', 'time', 'buy/sell','limit', 'miscellaneous']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] = matrix[0][i].split('[')[0] + '_' + arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.kraken.com/rest/#operation/getRecentTrades',
            description: 'Returns the last 1000 trades by default\n' +
                '\n',
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XXBTZUSD": [\n' +
                '      [\n' +
                '        "52478.90000",\n' +
                '        "0.00640000",\n' +
                '        1616663618.0362,\n' +
                '        "b",\n' +
                '        "m",\n' +
                '        ""\n' +
                '      ],\n' +
                '      [\n' +
                '        "52490.50000",\n' +
                '        "0.01169993",\n' +
                '        1616663618.0377,\n' +
                '        "b",\n' +
                '        "m",\n' +
                '        ""\n' +
                '      ],\n' +
                '      [\n' +
                '        "52478.80000",\n' +
                '        "0.04107375",\n' +
                '        1616663622.1366,\n' +
                '        "b",\n' +
                '        "m",\n' +
                '        ""\n' +
                '      ]\n' +
                '    ],\n' +
                '    "last": "1616663622136576459"\n' +
                '  }\n' +
                '}'
        },
        "Get Recent Spreads": {
            url: '/public/Spread',
            params: {
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (ex: pair=XBTUSD)'},
                since: {type: 'number', description: 'Return spread data since given timestamp (ex: since=1548122302)'}

            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['time', 'bid', 'ask']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] = matrix[0][i].split('[')[0] + '_' + arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.kraken.com/rest/#operation/getRecentSpreads',
            description: 'Ger recent spread' ,
            sample_response: '{\n' +
                '  "error": [],\n' +
                '  "result": {\n' +
                '    "XXBTZUSD": [\n' +
                '      [\n' +
                '        1548120550,\n' +
                '        "3538.70000",\n' +
                '        "3541.50000"\n' +
                '      ],\n' +
                '      [\n' +
                '        1548120551,\n' +
                '        "3538.80000",\n' +
                '        "3541.50000"\n' +
                '      ],\n' +
                '      [\n' +
                '        1548120554,\n' +
                '        "3538.80000",\n' +
                '        "3541.40000"\n' +
                '      ]\n' +
                '    ],\n' +
                '    "last": 1548122302\n' +
                '  }\n' +
                '}'
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





    oanda: {
        "base_url": "https://api-fxtrade.oanda.com",
        "Get Candlesticks": {
            url: '/v3/instruments/:instrument/candles',
            params: {
                instrument: {required: true, replace_2dots: true},
                price: {default: 'B'},
                dailyAlignment: {default: 17},
                from: {required: true},
                to: {required: true},
                granularity: {default: 'D'},
                count: {default: 500}
            }
        },
        "Get Position Book": {
            url: '/v3/instruments/:instrument/positionBook',
            params: {
                instrument: {required: true, replace_2dots: true},
                time: {}
            }
        },
        "Get Order Book": {
            url: '/v3/instruments/:instrument/orderBook',
            params: {
                instrument: {required: true, replace_2dots: true},
                time: {}
            }
        },
    },
}