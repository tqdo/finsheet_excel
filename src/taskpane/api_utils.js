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


var string = 'string', number = 'number'
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
                '      ...\n' +
                '    }\n' +
                '  ],\n' +
                '  "exchangeFilters": [\n' +
                '    ...\n' +
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
                ' ...\n' +
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
                '  ...\n' +
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
        "provider_description": 'Launched in January 2014, Poloniex became one of the larger American cryptocurrency trading platforms. After being acquired by Circle in February 2018, Poloniex stopped serving the U.S. market and moved its legal headquarters to Bermuda 18 months later. Shortly thereafter it was acquired by a consortium that included Justin Sun\'s TRON',
        "doc_url": 'https://docs.poloniex.com/',
        "Return Ticker": {
            url: '',
            go_up_1_level: true,
            params:{
                command: {default: 'returnTicker', append_to_url: true}
            },
            doc_url: 'https://docs.poloniex.com/#returnticker',
            description: 'Retrieves summary information for each currency pair listed on the exchange',
            sample_response: '{\n' +
                '  "BTC_BTS": {\n' +
                '    "id": 14,\n' +
                '    "last": "0.00000090",\n' +
                '    "lowestAsk": "0.00000091",\n' +
                '    "highestBid": "0.00000089",\n' +
                '    "percentChange": "-0.02173913",\n' +
                '    "baseVolume": "0.28698296",\n' +
                '    "quoteVolume": "328356.84081156",\n' +
                '    "isFrozen": "0",\n' +
                '    "postOnly": "0",\n' +
                '    "high24hr": "0.00000093",\n' +
                '    "low24hr": "0.00000087"\n' +
                '  },\n' +
                '  ...\n' +
                '  "USDT_BTC": {\n' +
                '    "id": 121,\n' +
                '    "last": "49180.04839060",\n' +
                '    "lowestAsk": "49180.04839060",\n' +
                '    "highestBid": "49180.04839059",\n' +
                '    "percentChange": "0.03239621",\n' +
                '    "baseVolume": "21455272.54522586",\n' +
                '    "quoteVolume": "443.41063575",\n' +
                '    "isFrozen": "0",\n' +
                '    "postOnly": "0",\n' +
                '    "high24hr": "49752.00000000",\n' +
                '    "low24hr": "46906.00000001"\n' +
                '  },\n' +
                '  ...\n' +
                '}'
        },
        "Return 24h Volume": {
            url: '',
            params:{
                command: {default: 'return24hVolume', append_to_url: true}
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
            doc_url: 'https://docs.poloniex.com/#return24hvolume',
            description: 'Returns the 24-hour volume for all markets as well as totals for primary currencies.',
            sample_response: '{\n' +
                '  "BTC_BTS": {\n' +
                '    "BTC": "0.28698296",\n' +
                '    "BTS": "328356.84081156"\n' +
                '  },\n' +
                '  "BTC_DASH": {\n' +
                '    "BTC": "2.76826447",\n' +
                '    "DASH": "772.39249875"\n' +
                '  },\n' +
                '  ...\n' +
                '  "USDT_GALA": {\n' +
                '    "USDT": "159400.83431099",\n' +
                '    "GALA": "1404670.60477026"\n' +
                '  },\n' +
                '  "USDT_LDO": {\n' +
                '    "USDT": "820.43295648",\n' +
                '    "LDO": "176.31494943"\n' +
                '  },\n' +
                '  "totalBNB": "80.61963620",\n' +
                '  "totalBTC": "506.66466525",\n' +
                '  "totalBUSD": "15973.37129908",\n' +
                '  ...\n' +
                '}'
        },

        "Return Order Book": {
            url: '',
            params: {
                currencyPair: {type: 'string', description: 'A string that defines the market, "USDT_BTC" for example. Use "all" for all markets.'},
                depth: {type: 'number', default: 50, description: 'Default depth is 50. Max depth is 100'},
                command: {default: 'returnOrderBook', append_to_url: true}
            },
            doc_url: 'https://docs.poloniex.com/#returnorderbook',
            description: 'Returns the order book for a given market. You may set currencyPair to "all" to get the order books of all markets.',
            sample_response: '{\n' +
                '  "asks": [\n' +
                '    ["0.06888014", 0.1],\n' +
                '    ["0.06888703", 0.3],\n' +
                '    ["0.06890651", 1],\n' +
                '    ["0.06896540", 0.6],\n' +
                '    ["0.06898010", 1.75],\n' +
                '    ...\n' +
                '  ],\n' +
                '  "bids": [\n' +
                '    ["0.06887324", 3.1627875],\n' +
                '    ["0.06886100", 2.8904],\n' +
                '    ["0.06885672", 3],\n' +
                '    ["0.06885041", 1],\n' +
                '    ["0.06884079", 1],\n' +
                '    ...\n' +
                '  ],\n' +
                '  "isFrozen": "0",\n' +
                '  "postOnly": "0",\n' +
                '  "seq": 1262665345\n' +
                '}'
        },
        "Return Trade History": {
            url: '',
            params: {
                currencyPair: {required: true, type: 'string'},
                start: {type: 'number', description: 'UNIX timestamp'},
                end: {type: 'number', description: 'UNIX timestamp'},
                command: {default: 'returnTradeHistory',append_to_url: true}
            },
            doc_url: 'https://docs.poloniex.com/#returntradehistory-public',
            description: 'Returns the past 200 trades for a given market, or up to 1,000 trades between a range specified in UNIX timestamps by the "start" and "end" GET parameters.',
            sample_response: '[\n' +
                '  {\n' +
                '    "globalTradeID": 606194436,\n' +
                '    "tradeID": 52944618,\n' +
                '    "date": "2021-10-05 12:54:30",\n' +
                '    "type": "buy",\n' +
                '    "rate": "0.06915192",\n' +
                '    "amount": "0.00000028",\n' +
                '    "total": "0.00000001",\n' +
                '    "orderNumber": 971265513397\n' +
                '  },\n' +
                '  ...\n' +
                '  {\n' +
                '    "globalTradeID": 606171120,\n' +
                '    "tradeID": 52944420,\n' +
                '    "date": "2021-10-05 11:53:25",\n' +
                '    "type": "buy",\n' +
                '    "rate": "0.06904785",\n' +
                '    "amount": "0.00167444",\n' +
                '    "total": "0.00011561",\n' +
                '    "orderNumber": 971243851081\n' +
                '  }\n' +
                ']'
        },
        "Return Chart Data": {
            url: '',
            params: {
                currencyPair: {required: true, type: 'string', description: 'A string that defines the market, "USDT_BTC" for example'},
                start: {required: true, type: 'number', description: 'UNIX timestamp'},
                end: {required: true, type: 'number', description: 'UNIX timestamp'},
                period: {required: true, type: 'number', description: 'Candlestick period in seconds. Valid values are 300, 900, 1800, 7200, 14400, and 86400.'},
                command: {default: 'returnChartData', append_to_url: true}

            },
            doc_url: 'https://docs.poloniex.com/#returnchartdata',
            description: 'Returns candlestick chart data',
            sample_response: '[\n' +
                '  {\n' +
                '    "date": 1546300800,\n' +
                '    "high": 0.01232199,\n' +
                '    "low": 0.012105,\n' +
                '    "open": 0.01227412,\n' +
                '    "close": 0.01224702,\n' +
                '    "volume": 11.47474031,\n' +
                '    "quoteVolume": 938.52999477,\n' +
                '    "weightedAverage": 0.01222629\n' +
                '  },\n' +
                '  ...\n' +
                '  {\n' +
                '    "date": 1546646400,\n' +
                '    "high": 0.01327921,\n' +
                '    "low": 0.01304031,\n' +
                '    "open": 0.01305003,\n' +
                '    "close": 0.01319001,\n' +
                '    "volume": 16.09959947,\n' +
                '    "quoteVolume": 1221.53356545,\n' +
                '    "weightedAverage": 0.01317982\n' +
                '  }\n' +
                ']'
        },
        "Return Currencies": {
            url: '',
            params: {
                includeMultiChainCurrencies: {default: 'false', type: 'enum', possible: ['true', 'false'], description: 'A boolean that indicates if multi chain currencies are included (default value is false)'},
                command: {default: 'returnCurrencies', append_to_url: true}
            },
            go_up_1_level: true,
            doc_url: 'https://docs.poloniex.com/#returncurrencies',
            description: 'Returns information about currencies.',
            sample_response: '{    \n' +
                '  "1CR": {\n' +
                '        "id": 1,\n' +
                '        "name": "1CRedit",\n' +
                '        "humanType": "BTC Clone",\n' +
                '        "currencyType": "address",\n' +
                '        "txFee": "0.01000000",\n' +
                '        "minConf": 10000,\n' +
                '        "depositAddress": null,\n' +
                '        "disabled": 1,\n' +
                '        "frozen": 0,\n' +
                '        "hexColor": "068485",\n' +
                '        "blockchain": "1CR",\n' +
                '        "delisted": 1,\n' +
                '        "isGeofenced": 0\n' +
                '    },\n' +
                '    "AAVE": {\n' +
                '        "id": 446,\n' +
                '        "name": "Aave",\n' +
                '        "humanType": "Sweep to Main Account",\n' +
                '        "currencyType": "address",\n' +
                '        "txFee": "0.62301334",\n' +
                '        "minConf": 12,\n' +
                '        "depositAddress": null,\n' +
                '        "disabled": 0,\n' +
                '        "frozen": 0,\n' +
                '        "hexColor": "8179a9",\n' +
                '        "blockchain": "ETH",\n' +
                '        "delisted": 0,\n' +
                '        "isGeofenced": 0\n' +
                '    }'+
                '}'
        },
        "Return Loan Order": {
            url: '',
            params: {
                currency: {required: true, type: 'string', description: 'currency (ex: BTC)'},
                command: {default: 'returnLoanOrders', append_to_url: true}
            },
            doc_url: 'https://docs.poloniex.com/#returnloanorders',
            description: 'Returns the list of loan offers and demands for a given currency,',
            sample_response: '{\n' +
                '  "offers": [\n' +
                '    {\n' +
                '      "rate": "0.00001600",\n' +
                '      "amount": "4.29410375",\n' +
                '      "rangeMin": 2,\n' +
                '      "rangeMax": 2\n' +
                '    },\n' +
                '    ...\n' +
                '    {\n' +
                '      "rate": "0.00001800",\n' +
                '      "amount": "40.11028911",\n' +
                '      "rangeMin": 2,\n' +
                '      "rangeMax": 60\n' +
                '    }\n' +
                '  ],\n' +
                '  "demands": [\n' +
                '    {\n' +
                '      "rate": "0.00001000",\n' +
                '      "amount": "40.11028911",\n' +
                '      "rangeMin": 2,\n' +
                '      "rangeMax": 60\n' +
                '    },\n' +
                '    ...\n' +
                '    {\n' +
                '      "rate": "0.00001213",\n' +
                '      "amount": "0.06896614",\n' +
                '      "rangeMin": 2,\n' +
                '      "rangeMax": 2\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
    },

    kucoin: {
        "base_url": "https://api.kucoin.com",
        "provider_description": 'KuCoin is a secure cryptocurrency exchange that makes it easier to buy, sell, and store cryptocurrencies like BTC, ETH, KCS, SHIB, DOGE, Gari etc.',
        "doc_url": 'https://docs.kucoin.com/#general',
        "Get Symbols List": {
            url: '/api/v1/symbols',
            params: {
                market: {type: 'string', description: 'The trading market'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-symbols-list',
            description: 'Request via this endpoint to get a list of available currency pairs for trading',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "XLM-USDT",\n' +
                '    "name": "XLM-USDT",\n' +
                '    "baseCurrency": "XLM",\n' +
                '    "quoteCurrency": "USDT",\n' +
                '    "feeCurrency": "USDT",\n' +
                '    "market": "USDS",\n' +
                '    "baseMinSize": "0.1",\n' +
                '    "quoteMinSize": "0.01",\n' +
                '    "baseMaxSize": "10000000000",\n' +
                '    "quoteMaxSize": "99999999",\n' +
                '    "baseIncrement": "0.0001",\n' +
                '    "quoteIncrement": "0.000001",\n' +
                '    "priceIncrement": "0.000001",\n' +
                '    "priceLimitRate": "0.1",\n' +
                '    "isMarginEnabled": true,\n' +
                '    "enableTrading": true\n' +
                '  },\n' +
                '  {\n' +
                '    "symbol": "VET-USDT",\n' +
                '    "name": "VET-USDT",\n' +
                '    "baseCurrency": "VET",\n' +
                '    "quoteCurrency": "USDT",\n' +
                '    "feeCurrency": "USDT",\n' +
                '    "market": "USDS",\n' +
                '    "baseMinSize": "10",\n' +
                '    "quoteMinSize": "0.01",\n' +
                '    "baseMaxSize": "10000000000",\n' +
                '    "quoteMaxSize": "99999999",\n' +
                '    "baseIncrement": "0.0001",\n' +
                '    "quoteIncrement": "0.000001",\n' +
                '    "priceIncrement": "0.0000001",\n' +
                '    "priceLimitRate": "0.1",\n' +
                '    "isMarginEnabled": true,\n' +
                '    "enableTrading": true\n' +
                '  }\n' +
                ']'
        },
        "Get Ticker": {
            url: '/api/v1/market/orderbook/level1',
            params: {
                symbol: {required: true, type: 'string'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-ticker',
            description: 'Request via this endpoint to get Level 1 Market Data. The returned value includes the best bid price and size, the best ask price and size as well as the last traded price and the last traded size.',
            sample_response: '{\n' +
                '    "sequence": "1550467636704",\n' +
                '    "bestAsk": "0.03715004",\n' +
                '    "size": "0.17",\n' +
                '    "price": "0.03715005",\n' +
                '    "bestBidSize": "3.803",\n' +
                '    "bestBid": "0.03710768",\n' +
                '    "bestAskSize": "1.788",\n' +
                '    "time": 1550653727731\n' +
                '}'
        },
        "Get All Tickers": {
            url: '/api/v1/market/allTickers',
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-all-tickers',
            description: 'Request market tickers for all the trading pairs in the market (including 24h volume).',
            sample_response: '{\n' +
                '    "time":1602832092060,\n' +
                '    "ticker":[\n' +
                '        {\n' +
                '            "symbol": "BTC-USDT",   // symbol\n' +
                '            "symbolName":"BTC-USDT", // Name of trading pairs, it would change after renaming\n' +
                '            "buy": "11328.9",   // bestAsk\n' +
                '            "sell": "11329",    // bestBid\n' +
                '            "changeRate": "-0.0055",    // 24h change rate\n' +
                '            "changePrice": "-63.6", // 24h change price\n' +
                '            "high": "11610",    // 24h highest price\n' +
                '            "low": "11200", // 24h lowest price\n' +
                '            "vol": "2282.70993217", // 24h volume，the aggregated trading volume in BTC\n' +
                '            "volValue": "25984946.157790431",   // 24h total, the trading volume in quote currency of last 24 hours\n' +
                '            "last": "11328.9",  // last price\n' +
                '            "averagePrice": "11360.66065903",   // 24h average transaction price yesterday\n' +
                '            "takerFeeRate": "0.001",    // Basic Taker Fee\n' +
                '            "makerFeeRate": "0.001",    // Basic Maker Fee\n' +
                '            "takerCoefficient": "1",    // Taker Fee Coefficient\n' +
                '            "makerCoefficient": "1" // Maker Fee Coefficient\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get 24hr Stats": {
            url: '/api/v1/market/stats',
            params: {
                symbol: {required: true, type: 'string', description: 'symbol (ex: BTC-USDT)'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-24hr-stats',
            description: 'Request via this endpoint to get the statistics of the specified ticker in the last 24 hours.',
            sample_response: '{\n' +
                '    "time": 1602832092060,  // time\n' +
                '    "symbol": "BTC-USDT",   // symbol\n' +
                '    "buy": "11328.9",   // bestAsk\n' +
                '    "sell": "11329",    // bestBid\n' +
                '    "changeRate": "-0.0055",    // 24h change rate\n' +
                '    "changePrice": "-63.6", // 24h change price\n' +
                '    "high": "11610",    // 24h highest price\n' +
                '    "low": "11200", // 24h lowest price\n' +
                '    "vol": "2282.70993217", // 24h volume，the aggregated trading volume in BTC\n' +
                '    "volValue": "25984946.157790431",   // 24h total, the trading volume in quote currency of last 24 hours\n' +
                '    "last": "11328.9",  // last price\n' +
                '    "averagePrice": "11360.66065903",   // 24h average transaction price yesterday\n' +
                '    "takerFeeRate": "0.001",    // Basic Taker Fee\n' +
                '    "makerFeeRate": "0.001",    // Basic Maker Fee\n' +
                '    "takerCoefficient": "1",    // Taker Fee Coefficient\n' +
                '    "makerCoefficient": "1" // Maker Fee Coefficient\n' +
                '}'
        },
        "Get Market List": {
            url: '/api/v1/markets',
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-market-list',
            description: 'Request via this endpoint to get the transaction currency for the entire trading market.',
            sample_response: '{\n' +
                '    "data":[\n' +
                '\n' +
                '    "BTC",\n' +
                '    "KCS",\n' +
                '    "USDS",  //SC has been changed to USDS\n' +
                '    "ALTS" //ALTS market includes ETH, NEO, TRX\n' +
                '  ]\n' +
                '}'
        },
        "Get Aggregated Order Book": {
            url: '/api/v1/market/orderbook/level2_100',
            params: {
                symbol: {required: true, type: 'string', description: 'symbol (ex: BTC-USDT)'}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'askPrice';matrix[0][1] = 'askSize';matrix[0][2] = 'bidsPrice';matrix[0][3] = 'bidsSize';
                return matrix
            },
            doc_url: 'https://docs.kucoin.com/#get-part-order-book-aggregated',
            description: 'Request via this endpoint to get a list of open orders for a symbol.',
            sample_response: '{\n' +
                '    "sequence": "3262786978",\n' +
                '    "time": 1550653727731,\n' +
                '    "bids": [["6500.12", "0.45054140"],\n' +
                '             ["6500.11", "0.45054140"]],  //[price，size]\n' +
                '    "asks": [["6500.16", "0.57753524"],\n' +
                '             ["6500.15", "0.57753524"]]   \n' +
                '}'
        },
        "Get Trade Histories": {
            url: '/api/v1/market/histories',
            params: {
                symbol: {required: true, type: 'string', description: 'symbol (ex: BTC-USDT)'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-trade-histories',
            description: 'Request via this endpoint to get the trade history of the specified symbol.',
            sample_response: '[\n' +
                '    {\n' +
                '        "sequence": "1545896668571",\n' +
                '        "price": "0.07",                      //Filled price\n' +
                '        "size": "0.004",                      //Filled amount\n' +
                '        "side": "buy",                        //Filled side. The filled side is set to the taker by default.\n' +
                '        "time": 1545904567062140823           //Transaction time\n' +
                '    },\n' +
                '    {\n' +
                '        "sequence": "1545896668578",\n' +
                '        "price": "0.054",\n' +
                '        "size": "0.066",\n' +
                '        "side": "buy",\n' +
                '        "time": 1545904581619888405\n' +
                '    }\n' +
                ']'
        },
        "Get Candlesticks": {
            url: '/api/v1/market/candles',
            params: {
                symbol: {required: true, type: 'string', description: 'symbol (ex: BTC-USDT)'},
                type: {
                    required: true,
                    type: 'enum',
                    possible: ['1min', '3min', '5min', '15min', '30min', '1hour', '2hour', '4hour', '6hour', '8hour', '12hour', '1day', '1week'],
                    description: 'Type of candlesticks'
                },
                startAt: {required: true, type: 'number', description: 'UNIX timestamp'},
                endAt: {required: true, type: 'number', description: 'UNIX timestamp'},
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                var arr = ['time', 'open','close', 'high', 'low',  'volume', 'amount']
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] =  arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.kucoin.com/#get-klines',
            description: 'Request via this endpoint to get the kline of the specified symbol. Data are returned in grouped buckets based on requested type. \n For each query, the system would return at most **1500** pieces of data. To obtain more data, please page the data by time.',
            sample_response: '[\n' +
                '    [\n' +
                '        "1545904980",             //Start time of the candle cycle\n' +
                '        "0.058",                  //opening price\n' +
                '        "0.049",                  //closing price\n' +
                '        "0.058",                  //highest price\n' +
                '        "0.049",                  //lowest price\n' +
                '        "0.018",                  //Transaction volume\n' +
                '        "0.000945"                //Transaction amount\n' +
                '    ],\n' +
                '    [\n' +
                '        "1545904920",\n' +
                '        "0.058",\n' +
                '        "0.072",\n' +
                '        "0.072",\n' +
                '        "0.058",\n' +
                '        "0.103",\n' +
                '        "0.006986"\n' +
                '    ]\n' +
                ']'
        },
        "Get Currencies": {
            url: '/api/v1/currencies',
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-currencies',
            description: 'Request via this endpoint to get the currency list.',
            sample_response: '[\n' +
                '  {\n' +
                '    "currency": "CSP",\n' +
                '    "name": "CSP",\n' +
                '    "fullName": "Caspian",\n' +
                '    "precision": 8,\n' +
                '    "confirms": 12,\n' +
                '    "contractAddress": "0xa6446d655a0c34bc4f05042ee88170d056cbaf45",\n' +
                '    "withdrawalMinSize": "2000",\n' +
                '    "withdrawalMinFee": "1000",\n' +
                '    "isWithdrawEnabled": true,\n' +
                '    "isDepositEnabled": true,\n' +
                '    "isMarginEnabled": false,\n' +
                '    "isDebitEnabled": false\n' +
                '  },\n' +
                '  {\n' +
                '    "currency": "LOKI",\n' +
                '    "name": "OXEN",\n' +
                '    "fullName": "Oxen",\n' +
                '    "precision": 8,\n' +
                '    "confirms": 10,\n' +
                '    "contractAddress": "",\n' +
                '    "withdrawalMinSize": "2",\n' +
                '    "withdrawalMinFee": "2",\n' +
                '    "isWithdrawEnabled": true,\n' +
                '    "isDepositEnabled": true,\n' +
                '    "isMarginEnabled": false,\n' +
                '    "isDebitEnabled": true\n' +
                '  }\n' +
                ']'
        },
        "Get Currency Detail": {
            url: '/api/v2/currencies/:currency',
            params: {
                currency: {
                    required: true,
                    replace_2dots: true,
                    type: 'string',
                    description: 'currency (ex: BTC)'
                },
                chain: {type: 'string', description: 'Support for querying the chain of currency, return the currency details of all chains by default.'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-currency-detail-recommend',
            description: 'Request via this endpoint to get the currency details of a specified currency',
            sample_response: '{\n' +
                '  "currency": "BTC",\n' +
                '  "name": "BTC",\n' +
                '  "fullName": "Bitcoin",\n' +
                '  "precision": 8,\n' +
                '  "confirms": null,\n' +
                '  "contractAddress": null,\n' +
                '  "isMarginEnabled": true,\n' +
                '  "isDebitEnabled": true,\n' +
                '  "chains": [\n' +
                '    {\n' +
                '      "chainName": "BTC",\n' +
                '      "withdrawalMinSize": "0.0008",\n' +
                '      "withdrawalMinFee": "0.0005",\n' +
                '      "isWithdrawEnabled": true,\n' +
                '      "isDepositEnabled": true,\n' +
                '      "confirms": 2,\n' +
                '      "contractAddress": ""\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Fiat Price": {
            url: '/api/v1/prices',
            params: {
                base: {type: 'string', default: 'USD', description: 'Ticker symbol of a base currency,eg.USD,EUR. Default is USD'},
                currencies: {type: 'string', description: 'Comma-separated cryptocurrencies to be converted into fiat, e.g.: BTC,ETH, etc. Default to return the fiat price of all currencies.'}
            },
            go_down_1_level: true,
            go_up_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-fiat-price',
            description: 'Request via this endpoint to get the fiat price of the currencies for the available trading pairs.',
            sample_response: '{\n' +
                '    "code": "200000",\n' +
                '    "data": {\n' +
                '\n' +
                '        "BTC": "3911.28000000",\n' +
                '        "ETH": "144.55492453",\n' +
                '        "LTC": "48.45888179",\n' +
                '        "KCS": "0.45546856"\n' +
                '    }\n' +
                '}'
        },


        "Get Mark Price": {
            url: '/api/v1/mark-price/:symbol/current',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true,
                    type: 'string', description: 'symbol (ex: USDT-BTC)'
                },
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kucoin.com/#get-mark-price',
            description: 'Request via this endpoint to get the index price of the specified symbol.',
            sample_response: '{\n' +
                '    "symbol": "USDT-BTC",\n' +
                '    "granularity": 5000,\n' +
                '    "timePoint": 1568701710000,\n' +
                '    "value": 0.00009807\n' +
                '}'
        },

    },

    gemini: {
        "base_url": "https://api.gemini.com",
        "provider_description": 'Gemini Trust Company, LLC is a cryptocurrency exchange and custodian that allows customers to buy, sell, and store digital assets. It is a New York trust company that is regulated by the New York State Department of Financial Services and was founded in 2014 by Cameron and Tyler Winklevoss',
        "doc_url": 'https://docs.gemini.com/rest-api/',
        "Symbols": {
            url: '/v1/symbols',
            doc_url: 'https://docs.gemini.com/rest-api/#symbols',
            description: 'This endpoint retrieves all available symbols for trading',
            sample_response: '[\'btcusd\',\n' +
                ' \'ethbtc\',\n' +
                ' \'ethusd\',\n' +
                ' \'zecusd\',\n' +
                ' \'zecbtc\',\n' +
                ' \'zeceth\',\n' +
                '... \n' +
                ' \'cvcusd\',\n' +
                ' \'elonusd\',\n' +
                ' \'mimusd\',\n' +
                ' \'spellusd\',\n' +
                ' \'tokeusd\',\n' +
                ' \'ldousd\',\n' +
                ' \'rlyusd\',\n' +
                ' \'solusd\',\n' +
                ' \'rayusd\',\n' +
                ' \'sbrusd\']'
        },
        "Symbol Details": {
            url: '/v1/symbols/details/:symbol',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'}
            },
            doc_url: 'https://docs.gemini.com/rest-api/#symbol-details',
            description: 'This endpoint retrieves extra detail on supported symbols, such as minimum order size, tick size, quote increment and more.',
            sample_response: '{\n' +
                '  "symbol": "BTCUSD",\n' +
                '  "base_currency": "BTC",\n' +
                '  "quote_currency": "USD",\n' +
                '  "tick_size": 2,\n' +
                '  "quote_increment": 8,\n' +
                '  "min_order_size": "0.00001",\n' +
                '  "status": "open",\n' +
                '  "wrap_enabled": False\n' +
                '}'
        },
        "Ticker": {
            url: '/v1/pubticker/:symbol',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'}
            },
            doc_url: 'https://docs.gemini.com/rest-api/#ticker',
            description: 'This endpoint retrieves information about recent trading activity for the symbol.',
            sample_response: '{\n' +
                '    "ask": "977.59",\n' +
                '    "bid": "977.35",\n' +
                '    "last": "977.65",\n' +
                '    "volume": {\n' +
                '        "BTC": "2210.505328803",\n' +
                '        "USD": "2135477.463379586263",\n' +
                '        "timestamp": 1483018200000\n' +
                '    }\n' +
                '}'
        },
        "Ticker V2": {
            url: '/v2/ticker/:symbol',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'}
            },
            doc_url: 'https://docs.gemini.com/rest-api/#ticker-v2',
            description: 'This endpoint retrieves information about recent trading activity for the provided symbol.',
            sample_response: '{\n' +
                '  "symbol": "BTCUSD",\n' +
                '  "open": "9121.76",\n' +
                '  "high": "9440.66",\n' +
                '  "low": "9106.51",\n' +
                '  "close": "9347.66",\n' +
                '  "changes": [\n' +
                '    "9365.1",\n' +
                '    "9386.16",\n' +
                '    "9373.41",\n' +
                '    "9148.01"\n' +
                '  ],\n' +
                '  "bid": "9345.70",\n' +
                '  "ask": "9347.67"\n' +
                '}'
        },
        "Candlesticks": {
            url: '/v2/candles/:symbol/:time_frame',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'},
                time_frame:{required: true, replace_2dots: true, description: 'Time range for each candle', type: 'enum', possible: ['1m', '5m', '15m', '30m', '1hr', '6hr', '1day']}
            },
            transformOutput: (matrix) => {
                var arr = ['time', 'open', 'high', 'low', 'close', 'volume',]
                for(var i=0;i<arr.length;i++){
                    matrix[0][i] =  arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.gemini.com/rest-api/#candles',
            description: 'This endpoint retrieves time-intervaled data for the provided symbol.',
            sample_response: '[\n' +
                '    [\n' +
                '     1559755800000,\n' +
                '     7781.6,\n' +
                '     7820.23,\n' +
                '     7776.56,\n' +
                '     7819.39,\n' +
                '     34.7624802159\n' +
                '    ],\n' +
                '    [1559755800000,\n' +
                '    7781.6,\n' +
                '    7829.46,\n' +
                '    7776.56,\n' +
                '    7817.28,\n' +
                '    43.4228281059],\n' +
                '    ...\n' +
                ']'
        },
        "Current Order Book": {
            url: '/v1/book/:symbol',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'},
                limit_bids: {type: 'number', description: 'Limit the number of bid (offers to buy) price levels returned. Default is 50. May be 0 to return the full order book on this side.', default: 50},
                limit_asks: {type: 'number', description: 'Limit the number of ask (offers to sell) price levels returned. Default is 50. May be 0 to return the full order book on this side.', default: 50}
            },
            doc_url: 'https://docs.gemini.com/rest-api/#current-order-book',
            description: 'This will return the current order book as two arrays (bids / asks).',
            sample_response: '\n' +
                '{\n' +
                '  "bids": [{\n' +
                '            "price": "3607.85",\n' +
                '            "amount": "6.643373",\n' +
                '            "timestamp": "1547147541"\n' +
                '           }\n' +
                '           ...\n' +
                '           ],\n' +
                '  "asks": [{\n' +
                '            "price": "3607.86",\n' +
                '            "amount": "14.68205084",\n' +
                '            "timestamp": "1547147541"\n' +
                '           }\n' +
                '           ...\n' +
                '           ]\n' +
                '}'
        },
        "Trade History": {
            url: '/v1/trades/:symbol',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'},
                timestamp: {type: 'number', description: 'Only return trades after this timestamp. If not present, will show the most recent trades'},
                limit_trades: {type: 'number', default: 50, description: 'The maximum number of trades to return. The default is 50.'},
                include_breaks: {type: 'enum', default: 'false', possible: ['true', 'false'], description: 'Whether to display broken trades'}
            },
            doc_url: 'https://docs.gemini.com/rest-api/#trade-history',
            description: 'This will return the trades that have executed since the specified timestamp. Each request will show at most 500 records. \n If no timestamp is specified, then it will show the most recent trades; otherwise, it will show the most recent trades that occurred after that timestamp.',
            sample_response: '[\n' +
                '  {\n' +
                '    "timestamp": 1547146811,\n' +
                '    "timestampms": 1547146811357,\n' +
                '    "tid": 5335307668,\n' +
                '    "price": "3610.85",\n' +
                '    "amount": "0.27413495",\n' +
                '    "exchange": "gemini",\n' +
                '    "type": "buy"\n' +
                '  },\n' +
                '  ...\n' +
                ']'
        },
        "Current Auction": {
            url: '/v1/auction/:symbol',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'},
            },
            doc_url: 'https://docs.gemini.com/rest-api/#current-auction',
            description: 'Get current auction.',
            sample_response: '{\n' +
                '    "closed_until_ms": 1474567602895,\n' +
                '    "last_auction_price": "629.92",\n' +
                '    "last_auction_quantity": "430.12917506",\n' +
                '    "last_highest_bid_price": "630.10",\n' +
                '    "last_lowest_ask_price": "632.44",\n' +
                '    "last_collar_price": "631.27",\n' +
                '    "next_auction_ms": 1474567782895\n' +
                '}'
        },


        "Auction History": {
            url: '/v1/auction/:symbol/history',
            params:{
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (ex: BTCUSD)'},
                since: {type:'number', description: 'Only returns auction events after the specified UNIX timestamp. If not present or empty, will show the most recent auction events'},
                limit_auction_results: {type:'number', description: 'The maximum number of auction events to return. The default is 50.' , default: 50},
                include_indicative: {type:'enum', possible: ['true', 'false'], description: 'Whether to include publication of indicative prices and quantities. Choose true to explicitly enable, and false to disable.', default: 'true' }
            },
            doc_url: 'https://docs.gemini.com/rest-api/#auction-history',
            description: 'This will return the auction events, optionally including publications of indicative prices, since the specific timestamp.. Each request will show at most 500 records. \n If no timestamp is specified, then it will show the most recent events; otherwise, it will show the most recent events that occurred after that timestamp.',
            sample_response: '[\n' +
                '    {\n' +
                '        "auction_id": 3,\n' +
                '        "auction_price": "628.775",\n' +
                '        "auction_quantity": "66.32225622",\n' +
                '        "eid": 4066,\n' +
                '        "highest_bid_price": "628.82",\n' +
                '        "lowest_ask_price": "629.48",\n' +
                '        "collar_price": "629.15",\n' +
                '        "auction_result": "success",\n' +
                '        "timestamp": 1471902531,\n' +
                '        "timestampms": 1471902531225,\n' +
                '        "event_type": "auction"\n' +
                '    },\n' +
                '    {\n' +
                '        "auction_id": 3,\n' +
                '        "auction_price": "628.865",\n' +
                '        "auction_quantity": "89.22776435",\n' +
                '        "eid": 3920,\n' +
                '        "highest_bid_price": "629.59",\n' +
                '        "lowest_ask_price": "629.77",\n' +
                '        "collar_price": "629.68",\n' +
                '        "auction_result": "success",\n' +
                '        "timestamp": 1471902471,\n' +
                '        "timestampms": 1471902471225,\n' +
                '        "event_type": "indicative"\n' +
                '    },\n' +
                '  ...\n' +
                ']'
        },
        "Price Feed": {
            url: '/v1/pricefeed',
            doc_url: 'https://docs.gemini.com/rest-api/#price-feed',
            description: 'Get price feed',
            sample_response: '[   \n' +
                '    {\n' +
                '        "pair":"BTCUSD",\n' +
                '        "price":"9500.00",\n' +
                '        "percentChange24h": "5.23"\n' +
                '    },\n' +
                '        "pair":"LTCUSD",\n' +
                '        "price":"79.50",\n' +
                '        "percentChange24h": "7.63"\n' +
                '    },\n' +
                '    {\n' +
                '        "pair":"ZECUSD",\n' +
                '        "price":"72.89",\n' +
                '        "percentChange24h": "-1.90"\n' +
                '    }\n' +
                ']'
        },
    },

    okex:{
        "base_url": "https://www.okx.com",
        "provider_description": 'OKX, formerly known as OKEx, is a Seychelles-based cryptocurrency exchange that provides a platform for trading various cryptocurrencies. Some of exchange\'s core features include spot and derivative trading. It was founded in 2017. OKX is owned by Ok Group which also owns crypto exchange Okcoin',
        "doc_url": 'https://www.okx.com/docs-v5/en/#rest-api',
        "Get Tickers":{
            url: '/api/v5/market/tickers',
            params:{
                instType: {required: true, type: 'enum', possible: ['SPOT', 'SWAP', 'FUTURE', 'OPTION'],description: 'Instrument type'},
                uly: {type: 'string', description: 'Underlying (ex: BTC-USD). Only applicable to FUTURES/SWAP/OPTION'}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-tickers',
            description: 'Retrieve the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"LTC-USD-SWAP",\n' +
                '        "last":"9999.99",\n' +
                '        "lastSz":"0.1",\n' +
                '        "askPx":"9999.99",\n' +
                '        "askSz":"11",\n' +
                '        "bidPx":"8888.88",\n' +
                '        "bidSz":"5",\n' +
                '        "open24h":"9000",\n' +
                '        "high24h":"10000",\n' +
                '        "low24h":"8888.88",\n' +
                '        "volCcy24h":"2222",\n' +
                '        "vol24h":"2222",\n' +
                '        "sodUtc0":"0.1",\n' +
                '        "sodUtc8":"0.1",\n' +
                '        "ts":"1597026383085"\n' +
                '     },\n' +
                '    ...\n' +
                '  ]\n' +
                '}'
        },
        "Get Ticker":{
            url: '/api/v5/market/ticker',
            params:{
                instId: {required: true, type: 'string', description: 'Instrument ID, e.g. BTC-USD-SWAP'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-ticker',
            description: 'Retrieve the latest price snapshot, best bid/ask price, and trading volume in the last 24 hours.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"BTC-USD-SWAP",\n' +
                '        "last":"9999.99",\n' +
                '        "lastSz":"0.1",\n' +
                '        "askPx":"9999.99",\n' +
                '        "askSz":"11",\n' +
                '        "bidPx":"8888.88",\n' +
                '        "bidSz":"5",\n' +
                '        "open24h":"9000",\n' +
                '        "high24h":"10000",\n' +
                '        "low24h":"8888.88",\n' +
                '        "volCcy24h":"2222",\n' +
                '        "vol24h":"2222",\n' +
                '        "sodUtc0":"2222",\n' +
                '        "sodUtc8":"2222",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Index Tickers":{
            url: '/api/v5/market/index-tickers',
            params:{
                quoteCcy: {type: 'string', description: 'Quote currency. Currently there is only an index with USD/USDT/BTC as the quote currency.'},
                instId: {type: 'string', description: 'Index, e.g. BTC-USD. Either `quoteCcy` or `instId` is required.'}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-tickers',
            description: 'Retrieve index tickers.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "instId":"BTC-USDT",\n' +
                '        "idxPx":"0.1",\n' +
                '        "high24h":"0.5",\n' +
                '        "low24h":"0.1",\n' +
                '        "open24h":"0.1",\n' +
                '        "sodUtc0":"2222",\n' +
                '        "sodUtc8":"2222",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Order Book":{
            url: '/api/v5/market/books',
            params:{
                instId: {required: true, type: 'string', description: 'Instrument ID, e.g. BTC-USDT'},
                sz: {default: 1, type:'string', description: 'Order book depth per side. Maximum 400, e.g. 400 bids + 400 asks. Default returns to 1 depth data'}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-order-book',
            description: 'Retrieve order book of the instrument.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "msg": "",\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "asks": [\n' +
                '                [\n' +
                '                    "41006.8",\n' +
                '                    "0.60038921",\n' +
                '                    "0",\n' +
                '                    "1"\n' +
                '                ]\n' +
                '            ],\n' +
                '            "bids": [\n' +
                '                [\n' +
                '                    "41006.3",\n' +
                '                    "0.30178218",\n' +
                '                    "0",\n' +
                '                    "2"\n' +
                '                ]\n' +
                '            ],\n' +
                '            "ts": "1629966436396"\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Candlesticks":{
            url: '/api/v5/market/history-candles',
            params:{
                instId: {required: true , type:'string', description: 'Instrument ID, e.g. BTC-USD-200927'},
                bar: {type: 'string', default:'1m', description: 'Bar size, the default is 1m\n' +
                        'e.g. [1m/3m/5m/15m/30m/1H/2H/4H]\n' +
                        'Hong Kong time opening price k-line：[6H/12H/1D/1W/1M/3M/6M/1Y]\n' +
                        'UTC time opening price k-line：[/6Hutc/12Hutc/1Dutc/1Wutc/1Mutc/3Mutc/6Mutc/1Yutc]'},
                after:{type: 'string', description: 'Pagination of data to return records earlier than the requested timestamp'},
                before:{type: 'string', description: 'Pagination of data to return records newer than the requested timestamp'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 300. The default is 100.', default: 100}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';matrix[0][5] = 'volume';matrix[0][6] = 'volumeCcy';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-candlesticks-history',
            description: 'Retrieve the candlestick data.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     [\n' +
                '        "1597026383085",\n' +
                '        "3.721",\n' +
                '        "3.743",\n' +
                '        "3.677",\n' +
                '        "3.708",\n' +
                '        "8422410",\n' +
                '        "22698348.04828491"\n' +
                '    ],\n' +
                '    [\n' +
                '        "1597026383085",\n' +
                '        "3.731",\n' +
                '        "3.799",\n' +
                '        "3.494",\n' +
                '        "3.72",\n' +
                '        "24912403",\n' +
                '        "67632347.24399722"\n' +
                '    ]\n' +
                '    ]\n' +
                '}'

        },
        "Get Index Candlesticks":{
            url: '/api/v5/market/index-candles',
            params:{
                instId: {required: true , type:'string', description: 'Index, e.g. BTC-USD-200927'},
                bar: {type: 'string', default:'1m', description: 'Bar size, the default is 1m\n' +
                        'e.g. [1m/3m/5m/15m/30m/1H/2H/4H]\n' +
                        'Hong Kong time opening price k-line：[6H/12H/1D/1W/1M/3M/6M/1Y]\n' +
                        'UTC time opening price k-line：[/6Hutc/12Hutc/1Dutc/1Wutc/1Mutc/3Mutc/6Mutc/1Yutc]'},
                after:{type: 'string', description: 'Pagination of data to return records earlier than the requested timestamp'},
                before:{type: 'string', description: 'Pagination of data to return records newer than the requested timestamp'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 100. The default is 100.', default: 100}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-candlesticks',
            description: 'Retrieve the candlestick charts of the index. This endpoint can retrieve the latest 1,440 data entries. Charts are returned in groups based on the requested bar.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     [\n' +
                '        "1597026383085",\n' +
                '        "3.721",\n' +
                '        "3.743",\n' +
                '        "3.677",\n' +
                '        "3.708"\n' +
                '    ],\n' +
                '    [\n' +
                '        "1597026383085",\n' +
                '        "3.731",\n' +
                '        "3.799",\n' +
                '        "3.494",\n' +
                '        "3.72"\n' +
                '    ]\n' +
                '    ]\n' +
                '}'
        },
        "Get Mark Price Candlesticks":{
            url: '/api/v5/market/mark-price-candles',
            params:{
                instId: {required: true , type:'string', description: 'Instrument ID, e.g. BTC-USD-SWAP'},
                bar: {type: 'string', default:'1m', description: 'Bar size, the default is 1m\n' +
                        'e.g. [1m/3m/5m/15m/30m/1H/2H/4H]\n' +
                        'Hong Kong time opening price k-line：[6H/12H/1D/1W/1M/3M/6M/1Y]\n' +
                        'UTC time opening price k-line：[/6Hutc/12Hutc/1Dutc/1Wutc/1Mutc/3Mutc/6Mutc/1Yutc]'},
                after:{type: 'string', description: 'Pagination of data to return records earlier than the requested timestamp'},
                before:{type: 'string', description: 'Pagination of data to return records newer than the requested timestamp'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 100. The default is 100.', default: 100}
            },
            go_down_1_level: true,
            transformOutput: (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'open';matrix[0][2] = 'high';
                matrix[0][3] = 'low';matrix[0][4] = 'close';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-mark-price-candlesticks',
            description: 'Retrieve the candlestick charts of mark price. This endpoint can retrieve the latest 1,440 data entries. Charts are returned in groups based on the requested bar.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     [\n' +
                '        "1597026383085",\n' +
                '        "3.721",\n' +
                '        "3.743",\n' +
                '        "3.677",\n' +
                '        "3.708"\n' +
                '    ],\n' +
                '    [\n' +
                '        "1597026383085",\n' +
                '        "3.731",\n' +
                '        "3.799",\n' +
                '        "3.494",\n' +
                '        "3.72"\n' +
                '    ]\n' +
                '    ]\n' +
                '}'
        },
        "Get Trades":{
            url: '/api/v5/market/trades',
            params:{
                instId: {required: true , type:'string', description: 'Instrument ID, e.g. BTC-USDT'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 500. The default is 100.', default: 100}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-trades',
            description: 'Retrieve the recent transactions of an instrument.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     {\n' +
                '        "instId":"BTC-USDT",\n' +
                '        "tradeId":"9",\n' +
                '        "px":"0.016",\n' +
                '        "sz":"50",\n' +
                '        "side":"buy",\n' +
                '        "ts":"1597026383085"\n' +
                '    },\n' +
                '    {\n' +
                '        "instId":"BTC-USDT",\n' +
                '        "tradeId":"9",\n' +
                '        "px":"0.016",\n' +
                '        "sz":"50",\n' +
                '        "side":"buy",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get 24h Volume":{
            url: '/api/v5/market/platform-24-volume',
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-24h-total-volume',
            description: 'The 24-hour trading volume is calculated on a rolling basis, using USD as the pricing unit.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     {\n' +
                '        "volUsd":"2222",\n' +
                '        "volCny":"14220.8",\n' +
                '        "ts": "1597026383085"\n' +
                '     }\n' +
                '  ]\n' +
                '}'
        },
        "Get Oracle":{
            url: '/api/v5/market/open-oracle',
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-oracle',
            description: 'Get the crypto price of signing using Open Oracle smart contract.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "messages":[\n' +
                '                "0x0000....."\n' +
                '            ],\n' +
                '            "prices":{\n' +
                '                "BTC":"62014"\n' +
                '            },\n' +
                '            "signatures":[\n' +
                '                "0xf18330e59eaf42373c..."\n' +
                '            ],\n' +
                '            "timestamp":"1634548500"\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Exchange Rate":{
            url: '/api/v5/market/exchange-rate',
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-exchange-rate',
            description: 'This interface provides the average exchange rate data for 2 weeks.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "msg": "",\n' +
                '    "data": [ {\n' +
                '            "usdCny": "6.44"\n' +
                '}]\n' +
                '}'
        },
        "Get Index Components":{
            url: '/api/v5/market/index-components',
            params:{
                index: {required: true, type: 'string', description: 'index, e.g BTC-USDT'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-market-data-get-index-components',
            description: 'Get the index component information data on the market.',
            sample_response: '{{\n' +
                '    "code": "0",\n' +
                '    "msg": "",\n' +
                '    "data": {\n' +
                '        "components": [\n' +
                '            {\n' +
                '                "symbol": "BTC/USDT",\n' +
                '                "symPx": "52733.2",\n' +
                '                "wgt": "0.250",\n' +
                '                "cnvPx": "52733.2",\n' +
                '                "exch": "OKX"\n' +
                '            }\n' +
                '        ],\n' +
                '        "last": "52735.4123234925",\n' +
                '        "index": "BTC-USDT",\n' +
                '        "ts": "1630985335599"\n' +
                '    }\n' +
                '}'
        },
        "Get Instruments":{
            url: '/api/v5/public/instruments',
            params:{
                instType: {required: true, type: 'enum', possible: ['SPOT', 'SWAP', 'FUTURE', 'OPTION'],description: 'Instrument type'},
                uly: {type: 'string', description: 'Underlying (ex: BTC-USD). Only applicable to FUTURES/SWAP/OPTION'},
                instId:{type: 'string', description: 'Instrument ID'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-instruments',
            description: 'Retrieve a list of instruments with open contracts.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"LTC-USD-SWAP",\n' +
                '        "uly":"LTC-USD",\n' +
                '        "category":"1",\n' +
                '        "listTime":"1597026383085",\n' +
                '        "expTime":"1597026383085",\n' +
                '        "lever":"10",\n' +
                '        "tickSz":"0.01",\n' +
                '        "lotSz":"1",\n' +
                '        "minSz":"1",\n' +
                '        "ctType":"inverse",\n' +
                '        "alias":"this_week",\n' +
                '        "state":"live"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Delivery History":{
            url: '/api/v5/public/delivery-exercise-history',
            params:{
                instType: {required: true, type: 'enum', possible: [  'FUTURE', 'OPTION'],description: 'Instrument type'},
                uly: {type: 'string', description: 'Underlying (ex: BTC-USD). Only applicable to FUTURES/OPTION'},
                after:{type: 'string', description: 'Pagination of data to return records earlier than the requested timestamp'},
                before:{type: 'string', description: 'Pagination of data to return records newer than the requested timestamp'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 100; The default is 100', default: 100}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-delivery-exercise-history',
            description: 'Retrieve the estimated delivery price of the last 3 months, which will only have a return value one hour before the delivery/exercise.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "ts":"1597026383085",\n' +
                '            "details":[\n' +
                '                {\n' +
                '                    "type":"delivery",\n' +
                '                    "instId":"BTC-USD-190927",\n' +
                '                    "px":"0.016"\n' +
                '                }\n' +
                '            ]\n' +
                '        },\n' +
                '        {\n' +
                '            "ts":"1597026383085",\n' +
                '            "details":[\n' +
                '                {\n' +
                '                    "instId":"BTC-USD-200529-6000-C",\n' +
                '                    "type":"exercised",\n' +
                '                    "px":"0.016"\n' +
                '                },\n' +
                '                {\n' +
                '                    "instId":"BTC-USD-200529-8000-C",\n' +
                '                    "type":"exercised",\n' +
                '                    "px":"0.016"\n' +
                '                }\n' +
                '            ]\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Open Interest":{
            url: '/api/v5/public/open-interest',
            params:{
                instType: {required: true, type: 'enum', possible: ['SWAP',  'FUTURE', 'OPTION'],description: 'Instrument type'},
                uly: {type: 'string', description: 'Underlying. Only applicable to FUTURES/OPTION/SWAP. Required for OPTION'},
                instId:{type: 'string', description: 'Instrument ID, e.g. BTC-USD-180216. Only applicable to FUTURES/SWAP/OPTION'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-open-interest',
            description: 'Retrieve the total open interest for contracts on OKX.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"BTC-USDT-SWAP",\n' +
                '        "oi":"5000",\n' +
                '        "oiCcy":"555.55",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Funding Rate":{
            url: '/api/v5/public/funding-rate',
            params:{
                instId:{required:true, type: 'string', description: 'Instrument ID, e.g. BTC-USD-SWAP. Only applicable to SWAP'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-funding-rate',
            description: 'Retrieve funding rate.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "fundingRate": "0.0001515",\n' +
                '            "fundingTime": "1622822400000",\n' +
                '            "instId": "BTC-USD-SWAP",\n' +
                '            "instType": "SWAP",\n' +
                '            "nextFundingRate": "0.00029",\n' +
                '            "nextFundingTime": "1622851200000"\n' +
                '        }\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Funding Rate History":{
            url: '/api/v5/public/funding-rate-history',
            params:{
                instId:{required:true, type: 'string', description: 'Instrument ID, e.g. BTC-USD-SWAP. Only applicable to SWAP'},
                after:{type: 'string', description: 'Pagination of data to return records earlier than the requested fundingTime'},
                before:{type: 'string', description: 'Pagination of data to return records newer than the requested fundingTime'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 100; The default is 100', default: 100}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-funding-rate-history',
            description: 'Retrieve funding rate history. This endpoint can retrieve data from the last 3 months.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"BTC-USDT-SWAP",\n' +
                '        "fundingRate":"0.018",\n' +
                '        "realizedRate":"0.017",\n' +
                '        "fundingTime":"1597026383085"\n' +
                '    },\n' +
                '    {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"BTC-USDT-SWAP",\n' +
                '        "fundingRate":"0.018",\n' +
                '        "realizedRate":"0.017",\n' +
                '        "fundingTime":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Limit Price":{
            url: '/api/v5/public/price-limit',
            params:{
                instId:{required:true, type: 'string', description: 'Instrument ID, e.g. BTC-USD-SWAP. Only applicable to FUTURES/SWAP/OPTION'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-limit-price',
            description: 'Retrieve the highest buy limit and lowest sell limit of the instrument.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"BTC-USDT-SWAP",\n' +
                '        "buyLmt":"200",\n' +
                '        "sellLmt":"300",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}\n'
        },
        "Get Option Market Data":{
            url: '/api/v5/public/opt-summary',
            params:{
                uly: {type: 'string', description: 'Underlying. Only applicable to OPTION', required: true},
                expTime:{type: 'string', description: 'Contract expiry date, the format is "YYMMDD", e.g. "200527"'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-option-market-data',
            description: 'Retrieve option market data.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '      {\n' +
                '        "instType":"OPTION",\n' +
                '        "instId":"BTC-USD-200103-5500-C",\n' +
                '        "uly":"BTC-USD",\n' +
                '        "delta":"0.7494223636",\n' +
                '        "gamma":"-0.6765419039",\n' +
                '        "theta":"-0.0000809873",\n' +
                '        "vega":"0.0000077307",\n' +
                '        "deltaBS":"0.7494223636",\n' +
                '        "gammaBS":"-0.6765419039",\n' +
                '        "thetaBS":"-0.0000809873",\n' +
                '        "vegaBS":"0.0000077307",\n' +
                '        "realVol":"0",\n' +
                '        "bidVol":"",\n' +
                '        "askVol":"1.5625",\n' +
                '        "markVol":"0.9987",\n' +
                '        "lever":"4.0342",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Estimated Delivery Price":{
            url: '/api/v5/public/estimated-price',
            params:{
                instId:{required:true, type: 'string', description: 'Instrument ID, e.g. BTC-USD-200214, only applicable to FUTURES/OPTION'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-estimated-delivery-excercise-price',
            description: 'Retrieve the estimated delivery price which will only have a return value one hour before the delivery/exercise.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "instType":"FUTURES",\n' +
                '        "instId":"BTC-USDT-201227",\n' +
                '        "settlePx":"200",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Discount Rate and Interest-free Quota":{
            url: '/api/v5/public/discount-rate-interest-free-quota',
            params:{
                discountLv:{type: 'enum', possible: [1,2,3,4,5], description: 'Discount level'},
                ccy:{type: 'string', description: 'currency'}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-discount-rate-and-interest-free-quota',
            description: 'Retrieve discount rate level and interest-free quota.',
            sample_response: '{\n' +
                '  "code": "0",\n' +
                '  "msg": "",\n' +
                '  "data": [\n' +
                '    {\n' +
                '            "amt": "1",\n' +
                '            "ccy": "LTC",\n' +
                '            "discountInfo": [\n' +
                '                {\n' +
                '                    "discountRate": "0.95",\n' +
                '                    "maxAmt": "2000000",\n' +
                '                    "minAmt": "0"\n' +
                '                },\n' +
                '            ],\n' +
                '            "discountLv": "2"\n' +
                '        }\n' +
                '  ]\n' +
                '}'
        },
        "Get System Time":{
            url: '/api/v5/public/time',
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-system-time',
            description: 'Retrieve API server time.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Liquidation Orders":{
            url: '/api/v5/public/liquidation-orders',
            params:{
                instType: {required: true, type: 'enum', possible: ['SWAP', 'OPTION', 'FUTURES', 'MARGIN'], description: 'Instrument type'},
                mgnMode:{type: 'enum', possible: [ 'isolated', 'crossed'], description: 'Margin mode'},
                instId:{type: 'string', description: 'Instrument ID, only applicable to MARGIN'},
                ccy:{type: 'string', description: 'Liquidation currency, only applicable to cross MARGIN'},
                uly:{type: 'string', description: 'Underlying, required for FUTURES/SWAP/OPTION'},
                alias:{type: 'enum', possible: ['this_week', 'next_week', 'quarter', 'next_quarter'], description: 'required for FUTURE'},
                state:{type: 'enum', possible: ['filled', 'unfilled'], description: 'required for FUTURE/SWAP', default: 'unfilled'},
                before:{type: 'number', description:'Pagination of data to return records newer than the requested timestamp'},
                after:{type: 'number', description:'Pagination of data to return records earlier than the requested timestamp'},
                limit:{type: 'number', description: 'Number of results per request. The maximum is 100; The default is 100', default: 100},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-liquidation-orders',
            description: 'Retrieve information on liquidation orders in the last day.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "details": [\n' +
                '                {\n' +
                '                    "bkLoss": "0",\n' +
                '                    "bkPx": "",\n' +
                '                    "ccy": "USDT",\n' +
                '                    "posSide": "",\n' +
                '                    "side": "",\n' +
                '                    "sz": "989.9123170781309932",\n' +
                '                    "ts": "1629962347000"\n' +
                '                }\n' +
                '            ],\n' +
                '            "instId": "BTC-USDT",\n' +
                '            "instType": "MARGIN",\n' +
                '            "totalLoss": "0",\n' +
                '            "uly": ""\n' +
                '        }\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Mark Price":{
            url: '/api/v5/public/mark-price',
            params:{
                instId:{type: 'string', description: 'Instrument ID, e.g. BTC-USD-SWAP'},
                instType: {required: true, type: 'enum', possible: ['SWAP', 'OPTION', 'FUTURES', 'MARGIN'], description: 'Instrument type'},
                uly:{type: 'string', description: 'Underlying'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-mark-price',
            description: 'Retrieve mark price. We set the mark price based on the SPOT index and at a reasonable basis to prevent individual users from manipulating the market and causing the contract price to fluctuate',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '        "instType":"SWAP",\n' +
                '        "instId":"BTC-USDT-SWAP",\n' +
                '        "markPx":"200",\n' +
                '        "ts":"1597026383085"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },
        "Get Position Tiers":{
            url: '/api/v5/public/position-tiers',
            params:{
                instType: {required: true, type: 'enum', possible: ['SWAP', 'OPTION', 'FUTURES', 'MARGIN'], description: 'Instrument type'},
                tdMode: {required: true, type: 'enum', description: 'Trade mode', possible: ['cross', 'isolated'] },
                instId:{type: 'string', description: 'Instrument ID, e.g. BTC-USDT, only applicable to MARGIN',},
                uly:{type: 'string', description: 'Underlying', required: true},
                tier: {type: 'string', description: 'Tiers'}
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-position-tiers',
            description: 'Retrieve position tiers information，maximum leverage depends on your borrowings and margin ratio.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '    {\n' +
                '            "baseMaxLoan": "50",\n' +
                '            "imr": "0.1",\n' +
                '            "instId": "BTC-USDT",\n' +
                '            "maxLever": "10",\n' +
                '            "maxSz": "50",\n' +
                '            "minSz": "0",\n' +
                '            "mmr": "0.03",\n' +
                '            "optMgnFactor": "0",\n' +
                '            "quoteMaxLoan": "500000",\n' +
                '            "tier": "1",\n' +
                '            "uly": ""\n' +
                '        }\n' +
                '  ]\n' +
                '}'
        },
        "Get Interest Rate and Loan Quota":{
            url: '/api/v5/public/interest-rate-loan-quota',
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-interest-rate-and-loan-quota',
            description: 'Retrieve interest rate',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "basic": [\n' +
                '                {\n' +
                '                    "ccy": "USDT",\n' +
                '                    "quota": "500000",\n' +
                '                    "rate": "0.00043728"\n' +
                '                }\n' +
                '            ],\n' +
                '            "vip": [\n' +
                '                {\n' +
                '                    "irDiscount": "0.7",\n' +
                '                    "loanQuotaCoef": "6",\n' +
                '                    "level": "VIP1"\n' +
                '                }\n' +
                '            ],\n' +
                '            "regular": [\n' +
                '                {\n' +
                '                    "irDiscount": "1",\n' +
                '                    "loanQuotaCoef": "1",\n' +
                '                    "level": "Lv1"\n' +
                '                }\n' +
                '            ]\n' +
                '        }\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Underlying":{
            url: '/api/v5/public/underlying',
            params:{
                instType: {required: true, type: 'enum', possible: ['SWAP', 'OPTION', 'FUTURES' ], description: 'Instrument type'},
            },
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-public-data-get-underlying',
            description: 'Retrieve underlying',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '        [\n' +
                '            "LTC-USDT",\n' +
                '            "BTC-USDT",\n' +
                '            "ETC-USDT"\n' +
                '        ]\n' +
                '    ]\n' +
                '}'
        },
        "Get Support Coins":{
            url: '/api/v5/rubik/stat/trading-data/support-coin',
            go_down_1_level: true,
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-support-coin',
            description: 'Retrieve the currencies supported by the trading data endpoints.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": {\n' +
                '        "contract": [\n' +
                '            "ADA",\n' +
                '            "BTC",\n' +
                '        ],\n' +
                '        "option": [\n' +
                '            "BTC"\n' +
                '        ],\n' +
                '        "spot": [\n' +
                '            "ADA",\n' +
                '            "BTC",\n' +
                '        ]\n' +
                '    },\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Taker Volume":{
            url: '/api/v5/rubik/stat/taker-volume',
            params:{
                instType: {required: true, type: 'enum', possible: ['SPOT', 'CONTRACTs' ], description: 'Instrument type'},
                ccy: {required: true, description: 'currency', type:'string'},
                begin:{type: 'number', description: 'begin, e.g. 1597026383085'},
                end:{type: 'number', description: 'end, e.g. 1597026383085'},
                period: {type: 'enum', possible: ['5m', '1H', '1D'], default:'5m'}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'sellVol';matrix[0][2] = 'buyVol';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-taker-volume',
            description: 'Retrieve the taker volume for both buyers and sellers.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630425600000",\n' +
                '            "7596.2651",\n' +
                '            "7149.4855"\n' +
                '        ],\n' +
                '        [\n' +
                '            "1630339200000",\n' +
                '            "5312.7876",\n' +
                '            "7002.7541"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Margin Lending Ratio":{
            url: '/api/v5/rubik/stat/margin/loan-ratio',
            params:{
                ccy: {required: true, description:'currency', type:'string'},
                begin:{type: 'number', description: 'begin, e.g. 1597026383085'},
                end:{type: 'number', description: 'end, e.g. 1597026383085'},
                period: {type: 'enum', possible: ['5m', '1H', '1D'], default:'5m'}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'ratio';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-margin-lending-ratio',
            description: 'Retrieve the ratio of cumulative amount between currency margin quote currency and base currency.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630492800000",\n' +
                '            "0.4614"\n' +
                '        ],\n' +
                '        [\n' +
                '            "1630492500000",\n' +
                '            "0.5767"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Long or Short Ratio":{
            url: '/api/v5/rubik/stat/contracts/long-short-account-ratio',
            params:{
                ccy: {required: true, description:'currency', type:'string'},
                begin:{type: 'number', description: 'begin, e.g. 1597026383085'},
                end:{type: 'number', description: 'end, e.g. 1597026383085'},
                period: {type: 'enum', possible: ['5m', '1H', '1D'], default:'5m'}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'ratio';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-long-short-ratio',
            description: 'Retrieve the ratio of users with net long vs net short positions for futures and perpetual swaps.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630502100000",\n' +
                '            "1.25"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Contracts Open Interest and Volume":{
            url: '/api/v5/rubik/stat/contracts/open-interest-volume',
            go_down_1_level: true,
            params: {
                ccy: {required: true, description:'currency', type:'string'},
                begin:{type: 'number', description: 'begin, e.g. 1597026383085'},
                end:{type: 'number', description: 'end, e.g. 1597026383085'},
                period: {type: 'enum', possible: ['5m', '1H', '1D'], default:'5m'}
            },
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'openInterest';matrix[0][2] = 'vol';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-contracts-open-interest-and-volume',
            description: 'Retrieve the open interest and trading volume for futures and perpetual swaps.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630502400000",\n' +
                '            "1713028741.6898",\n' +
                '            "39800873.554"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Options Open Interest and Volume":{
            url: '/api/v5/rubik/stat/option/open-interest-volume',
            params:{
                ccy: {required: true, description:'currency', type:'string'},
                period: {type: 'enum', possible: [  '8H', '1D'], default:'8H', description: 'Each granularity can only query 72 pieces of data at the earliest'}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'openInterest';matrix[0][2] = 'vol';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-options-open-interest-and-volume',
            description: 'Retrieve the open interest and trading volume for options.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630368000000",\n' +
                '            "3458.1000",\n' +
                '            "78.8000"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Put or Call Ratio":{
            url: '/api/v5/rubik/stat/option/open-interest-volume-ratio',
            params:{
                ccy: {required: true, description:'currency', type:'string'},
                period: {type: 'enum', possible: [  '8H', '1D'], default:'8H', description: 'Each granularity can only query 72 pieces of data at the earliest'}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'openInterestRatio';matrix[0][2] = 'volRatio';
                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-put-call-ratio',
            description: 'Retrieve the open interest ration and trading volume ratio of calls vs puts.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630512000000",\n' +
                '            "2.7261",\n' +
                '            "2.3447"\n' +
                '        ],\n' +
                '        [\n' +
                '            "1630425600000",\n' +
                '            "2.8101",\n' +
                '            "2.3438"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Open Interest and Volume (Expiry)":{
            url: '/api/v5/rubik/stat/option/open-interest-volume-expiry',
            params:{
                ccy: {required: true, description:'currency', type:'string'},
                period: {type: 'enum', possible: [  '8H', '1D'], default:'8H', description: 'Each granularity can only query 72 pieces of data at the earliest'}
            },
            go_down_1_level: true,
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'expiryDate';matrix[0][2] = 'callOpenInterest';
                matrix[0][3] = 'putOpenInterest'; matrix[0][4] = 'callVol';matrix[0][5] = 'putVolume';

                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-open-interest-and-volume-expiry',
            description: 'Retrieve the open interest and trading volume of calls and puts for each upcoming expiration.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630540800000",\n' +
                '            "20210902",\n' +
                '            "6.4",\n' +
                '            "18.4",\n' +
                '            "0.7",\n' +
                '            "0.4"\n' +
                '        ],\n' +
                '        [\n' +
                '            "1630540800000",\n' +
                '            "20210903",\n' +
                '            "47",\n' +
                '            "36.6",\n' +
                '            "1",\n' +
                '            "10.7"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Open Interest and Volume (Strike)":{
            url: '/api/v5/rubik/stat/option/open-interest-volume-strike',
            go_down_1_level: true,
            params: {
                ccy: {required: true, description:'currency', type:'string'},
                period: {type: 'enum', possible: [  '8H', '1D'], default:'8H', description: 'Each granularity can only query 72 pieces of data at the earliest'},
                expTime:{required: true, type: 'string', description: 'Contract expiry date, the format is YYYYMMdd, e.g. 20210623'},
            },
            transformOutput : (matrix) => {
                matrix[0][0] = 'timestamp'; matrix[0][1] = 'strike';matrix[0][2] = 'callOpenInterest';
                matrix[0][3] = 'putOpenInterest'; matrix[0][4] = 'callVol';matrix[0][5] = 'putVolume';

                return matrix
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-open-interest-and-volume-strike',
            description: 'Retrieve the taker volume for both buyers and sellers of calls and puts.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        [\n' +
                '            "1630540800000",\n' +
                '            "10000",\n' +
                '            "0",\n' +
                '            "0.5",\n' +
                '            "0",\n' +
                '            "0"\n' +
                '        ],\n' +
                '        [\n' +
                '            "1630540800000",\n' +
                '            "14000",\n' +
                '            "0",\n' +
                '            "5.2",\n' +
                '            "0",\n' +
                '            "0"\n' +
                '        ]\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },
        "Get Taker Flow":{
            url: '/api/v5/rubik/stat/option/taker-block-volume',
            params:{
                ccy: {required: true, description:'currency', type:'string'},
                period: {type: 'enum', possible: [  '8H', '1D'], default:'8H', description: 'Each granularity can only query 72 pieces of data at the earliest'},
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
            },
            doc_url: 'https://www.okx.com/docs-v5/en/#rest-api-trading-data-get-taker-flow',
            description: 'This shows the relative buy/sell volume for calls and puts. It shows whether traders are bullish or bearish on price and volatility.',
            sample_response: '{\n' +
                '    "code": "0",\n' +
                '    "data": [\n' +
                '        "1630512000000",\n' +
                '        "8.55",\n' +
                '        "67.3",\n' +
                '        "16.05",\n' +
                '        "16.3",\n' +
                '        "126.4",\n' +
                '        "40.7"\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },

    },

    hitbtc: {
        "base_url": "https://api.hitbtc.com",
        "provider_description": 'HitBTC is a leading European bitcoin exchange which provides cryptocurrency trading services to institutionals, merchants and individual traders worldwide.',
        "doc_url": 'https://api.hitbtc.com/',
        "Get Currencies": {
            url: '/api/3/public/currency',
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#currencies',
            params:{
                currencies: {type: 'string', description:'comma-separated list of currencies '}
            },
            description: 'Returns the actual list of available currencies, tokens, etc.\n' +
                '\n' +
                'You can optionally use a comma-separated list of currencies. If it is not provided, null or empty, the request returns all currencies.',
            sample_response: '{\n' +
                '    "BTC": {\n' +
                '        "full_name":"Bitcoin",\n' +
                '        "payin_enabled":true,\n' +
                '        "payout_enabled":true,\n' +
                '        "transfer_enabled":true,\n' +
                '        "precision_transfer":"0.00000001",\n' +
                '        "networks": [\n' +
                '          {\n' +
                '            "network":"btc",\n' +
                '            "protocol":"",\n' +
                '            "default":true,\n' +
                '            "payin_enabled":true,\n' +
                '            "payout_enabled":true,\n' +
                '            "precision_payout":"0.00000001",\n' +
                '            "payout_fee":"0.000900000000",\n' +
                '            "payout_is_payment_id":false,\n' +
                '            "payin_payment_id":false,\n' +
                '            "payin_confirmations":1,\n' +
                '            "low_processing_time":"21.709",\n' +
                '            "high_processing_time":"3639.385",\n' +
                '            "avg_processing_time":"421.6391704545454"\n' +
                '          }\n' +
                '        ]\n' +
                '      }\n' +
                '}'
        },
        "Get Symbols": {
            url: '/api/3/public/symbol',
            params: {
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.'}
            },
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#symbols',
            description: 'Returns the actual list of currency symbols (currency pairs) traded on exchange. The first listed currency of a symbol is called the base currency, and the second currency is called the quote currency. The currency pair indicates how much of the quote currency is needed to purchase one unit of the base currency.\n' +
                '\n' +
                'You can optionally use a comma-separated list of symbols. If it is not provided, null or empty, the request returns all symbols.',
            sample_response: '{\n' +
                '    "ETHBTC": {\n' +
                '        "type": "spot",\n' +
                '        "base_currency": "ETH",\n' +
                '        "quote_currency": "BTC",\n' +
                '        "quantity_increment": "0.001",\n' +
                '        "tick_size": "0.000001",\n' +
                '        "take_rate": "0.001",\n' +
                '        "make_rate": "-0.0001",\n' +
                '        "fee_currency": "BTC",\n' +
                '        "margin_trading": true,\n' +
                '        "max_initial_leverage": "10.00"\n' +
                '    }\n' +
                '}'
        },
        "Get Tickers": {
            url: '/api/3/public/ticker',
            params: {
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.'}
            },
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#tickers',
            description: 'Returns ticker information.\n' +
                '\n' +
                'You can optionally use a comma-separated list of symbols. If it is not provided, null or empty, the request returns tickers for all symbols.',
            sample_response: '{\n' +
                '    "ETHBTC": {\n' +
                '        "ask": "0.050043",\n' +
                '        "bid": "0.050042",\n' +
                '        "last": "0.050042",\n' +
                '        "low": "0.047052",\n' +
                '        "high": "0.051679",\n' +
                '        "open": "0.047800",\n' +
                '        "volume": "36456.720",\n' +
                '        "volume_quote": "1782.625000",\n' +
                '        "timestamp": "2021-06-12T14:57:19.999Z"\n' +
                '    }\n' +
                '}'
        },
        "Get Prices": {
            url: '/api/3/public/price/rate',
            params: {
                from: {required: true, type: 'string', description: 'Source currency code.'},
                to: {required: true, type: 'string', description: 'Target currency code.'},
            },
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#prices',
            description: 'Returns currencies quotation prices.',
            sample_response: '{\n' +
                '    "ETH":{\n' +
                '        "currency": "BTC",\n' +
                '        "price": "0.021084",\n' +
                '        "timestamp": "2021-06-02T17:52:36.731Z"\n' +
                '    }\n' +
                '}'
        },
        "Get Prices History": {
            url: '/api/3/public/price/history',
            params: {
                from: {required: true, type: 'string', description: 'Source currency code.'},
                to: {required: true, type: 'string', description: 'Target currency code.'},
                until: { type: 'number', description: 'Interval end value (UNIX timestamp).'},
                since: { type: 'number', description: 'Interval initial value (UNIX timestamp).'},
                limit: { type: 'number', description: 'Default value: 1. Accepted values: 1 – 1000'},
                sort: { type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                period: { type: 'enum', description: 'Default is M30 (30 minutes).', possible :['M1'  , 'M3', 'M5', 'M15', 'M30', 'H1' , 'H4', 'D1' , 'D7', '1M'], default: 'M30'},
            },
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#prices',
            description: 'Returns quotation prices history.',
            sample_response: '{\n' +
                '    "ETH":{\n' +
                '        "currency": "BTC",\n' +
                '        "history":{\n' +
                '            "timestamp": "2021-07-01T20:00:00.000Z",\n' +
                '            "open": "0.063420",\n' +
                '            "close": "0.063767",\n' +
                '            "min": "0.063403",\n' +
                '            "max": "0.063782"\n' +
                '        }\n' +
                '    }\n' +
                '}'
        },
        "Get Trades": {
            url: '/api/3/public/trades',
            params: {
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                by: {type: 'enum', description: 'Filter type.', possible :['id', 'timestamp'], default: 'timestamp'},
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#trades',
            description: 'Returns trades information for all or multiple symbols.\n' +
                '\n' +
                'You can optionally use a comma-separated list of symbols. If it is not provided, null or empty, the request returns trades for all symbols.',
            sample_response: '{\n' +
                '    "BTCUSDT":[\n' +
                '        {\n' +
                '            "id":782135488,\n' +
                '            "price":"9793.94",\n' +
                '            "qty":"0.21469",\n' +
                '            "side":"sell",\n' +
                '            "timestamp":"2021-06-24T12:54:41.972Z"\n' +
                '        }\n' +
                '    ],\n' +
                '    "ETHBTC":[\n' +
                '        {\n' +
                '            "id":782135414,\n' +
                '            "price":"0.027668",\n' +
                '            "qty":"0.069",\n' +
                '            "side":"buy",\n' +
                '            "timestamp":"2021-06-24T12:54:32.843Z"\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Order Books": {
            url: '/api/3/public/orderbook',
            params: {
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes'},
                depth: {type:'number', default: 100, description: 'Order Book depth. Default value: 100. Set to 0 to view the full Order Book'},
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
            },
            doc_url: 'https://api.hitbtc.com/#order-books',
            description: 'An Order Book is a list of buy and sell orders for a specific symbol, structured by price level.\n' +
                '\n' +
                'You can optionally use a comma-separated list of symbols. If it is not provided, null or empty, the request returns an Order Book for all symbols',
            sample_response: '{\n' +
                '    "BTCUSDT": {\n' +
                '        "timestamp": "2021-06-11T11:18:03.857366871Z",\n' +
                '        "ask": [\n' +
                '          [\n' +
                '            "9777.51",                      // Price\n' +
                '            "4.50579"                       // Amount\n' +
                '          ],\n' +
                '          [\n' +
                '            "9777.52",\n' +
                '            "5.79832"\n' +
                '          ]\n' +
                '        ],\n' +
                '        "bid": [\n' +
                '          [\n' +
                '            "9777.5",\n' +
                '            "0.00002"\n' +
                '          ],\n' +
                '          [\n' +
                '            "9776.26",\n' +
                '            "0.0001"\n' +
                '          ]\n' +
                '        ]\n' +
                '      },\n' +
                '      "ETHBTC": {\n' +
                '        "timestamp": "2021-06-11T11:18:03.790858502Z",\n' +
                '        "ask": [\n' +
                '          [\n' +
                '            "0.022626",\n' +
                '            "0.0057"\n' +
                '          ],\n' +
                '          [\n' +
                '            "0.022628",\n' +
                '            "1.4259"\n' +
                '          ]\n' +
                '        ],\n' +
                '        "bid": [\n' +
                '          [\n' +
                '            "0.022624",\n' +
                '            "0.5748"\n' +
                '          ],\n' +
                '          [\n' +
                '            "0.022623",\n' +
                '            "26.5"\n' +
                '          ]\n' +
                '        ]\n' +
                '    }\n' +
                '}'
        },
        "Get Candlesticks": {
            url: '/api/3/public/candles',
            params: {
                period: { type: 'enum', description: 'Default is M30 (30 minutes).', possible :['M1'  , 'M3', 'M5', 'M15', 'M30', 'H1' , 'H4', 'D1' , 'D7', '1M'], default: 'M30'},
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            doc_url: 'https://api.hitbtc.com/#candles',
            description: 'Candles are used for the representation of a specific symbol as an OHLC chart.\n' +
                '\n' +
                'You can optionally use a comma-separated list of symbols. If it is not provided, null or empty, the request returns candles for all symbols.',
            sample_response: '{\n' +
                '    "BTCUSDT":[\n' +
                '      {\n' +
                '        "timestamp": "2021-07-01T20:00:00.000Z",\n' +
                '        "open": "33079.93",\n' +
                '        "close": "33236.53",\n' +
                '        "min": "33079.93",\n' +
                '        "max": "33295.73",\n' +
                '        "volume": "146.86223",\n' +
                '        "volume_quote": "4877838.3025063"\n' +
                '      }\n' +
                '   ],\n' +
                '   "ETHBTC":[\n' +
                '      {\n' +
                '        "timestamp": "2021-07-01T20:00:00.000Z",\n' +
                '        "open": "0.063420",\n' +
                '        "close": "0.063767",\n' +
                '        "min": "0.063403",\n' +
                '        "max": "0.063782",\n' +
                '        "volume": "866.6776",\n' +
                '        "volume_quote": "55.2132903904"\n' +
                '      }\n' +
                '    ]\n' +
                '}'
        },
        "Get Futures Information": {
            url: '/api/3/public/futures/info',
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#futures-info',
            description: 'Returns futures information for all or multiple contracts.',
            sample_response: '{\n' +
                '    "BTCUSDT_PERP": {\n' +
                '        "contract_type": "perpetual",\n' +
                '        "mark_price": "30897.68",\n' +
                '        "index_price": "30895.29",\n' +
                '        "funding_rate": "0.0001",\n' +
                '        "open_interest": "93.7128",\n' +
                '        "next_funding_time": "2021-07-21T16:00:00.000Z",\n' +
                '        "indicative_funding_rate": "0.0001",\n' +
                '        "premium_index": "0.000047541807127312",\n' +
                '        "avg_premium_index": "0.000087063368020112",\n' +
                '        "interest_rate": "0.0001",\n' +
                '        "timestamp": "2021-07-21T09:48:37.235Z"\n' +
                '    },\n' +
                '    "EOSETH_PERP": {\n' +
                '        "contract_type": "perpetual",\n' +
                '        "mark_price":"0.0020600",\n' +
                '        "index_price":"0.0020600",\n' +
                '        "funding_rate":"0.0001",\n' +
                '        "open_interest":"60.6580",\n' +
                '        "next_funding_time":"2021-05-25T16:00:00.000Z",\n' +
                '        "indicative_funding_rate":"0.0001",\n' +
                '        "premium_index":"0.1045547",\n' +
                '        "avg_premium_index":"0.1004467",\n' +
                '        "interest_rate": "0.0001",\n' +
                '        "timestamp":"2021-05-25T14:43:20.079Z"\n' +
                '    }\n' +
                '}'
        },
        "Get Funding History": {
            url: '/api/3/public/futures/history/funding',
            params: {
                offset: {type: 'number', description: 'Default value: 10. Accepted values: 0 – 100000', default: 0},

                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            go_up_1_level: true,
            doc_url: 'https://api.hitbtc.com/#funding-history',
            description: 'Returns funding history for a specified perpetual contract.',
            sample_response: '{\n' +
                '    "BTCUSDT_PERP": [{\n' +
                '        "timestamp": "2021-07-29T16:00:00.271Z",\n' +
                '        "funding_rate": "0.0001",\n' +
                '        "avg_premium_index": "0.000061858585213222",\n' +
                '        "next_funding_time": "2021-07-30T00:00:00.000Z",\n' +
                '        "interest_rate": "0.0001"\n' +
                '    }, {\n' +
                '        "timestamp": "2021-07-29T08:00:00.506Z",\n' +
                '        "funding_rate": "0.0001",\n' +
                '        "avg_premium_index": "0.000064275104721498",\n' +
                '        "next_funding_time": "2021-07-29T16:00:00.000Z",\n' +
                '        "interest_rate": "0.0001"\n' +
                '    }, {\n' +
                '        "timestamp": "2021-07-29T00:00:00.233Z",\n' +
                '        "funding_rate": "0.0001",\n' +
                '        "avg_premium_index": "0.000025719039726718",\n' +
                '        "next_funding_time": "2021-07-29T08:00:00.000Z",\n' +
                '        "interest_rate": "0.0001"\n' +
                '    }]\n' +
                '}'
        },

        "Get Futures Index Price Candlesticks": {
            url: '/api/3/public/futures/candles/index_price',
            params: {
                period: { type: 'enum', description: 'Default is M30 (30 minutes).', possible :['M1'  , 'M3', 'M5', 'M15', 'M30', 'H1' , 'H4', 'D1' , 'D7', '1M'], default: 'M30'},
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            doc_url: 'https://api.hitbtc.com/#futures-index-price-candles',
            description: 'Returns index price candles for all contracts.',
            sample_response: '{\n' +
                '    "BTCUSDT_PERP": [\n' +
                '      {\n' +
                '        "timestamp": "2021-07-08T07:30:00.000Z",\n' +
                '        "open": "32414.58",\n' +
                '        "close": "32414.58",\n' +
                '        "min": "32414.58",\n' +
                '        "max": "32414.58"\n' +
                '      },\n' +
                '      {\n' +
                '        "timestamp": "2021-07-07T18:00:00.000Z",\n' +
                '        "open": "34748.31",\n' +
                '        "close": "34748.31",\n' +
                '        "min": "34748.31",\n' +
                '        "max": "34748.31"\n' +
                '      },\n' +
                '      {\n' +
                '        "timestamp": "2021-07-07T12:30:00.000Z",\n' +
                '        "open": "34777.96",\n' +
                '        "close": "34777.96",\n' +
                '        "min": "34777.96",\n' +
                '        "max": "34777.96"\n' +
                '      }\n' +
                '    ]\n' +
                '}'
        },


        "Get Futures Mark Price Candlesticks": {
            url: '/api/3/public/futures/candles/mark_price',
            params: {
                period: { type: 'enum', description: 'Default is M30 (30 minutes).', possible :['M1'  , 'M3', 'M5', 'M15', 'M30', 'H1' , 'H4', 'D1' , 'D7', '1M'], default: 'M30'},
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            doc_url: 'https://api.hitbtc.com/#futures-mark-price-candles',
            description: 'Returns mark price candles for all contracts.',
            sample_response: '{\n' +
                '    "BTCUSDT_PERP": [\n' +
                '      {\n' +
                '        "timestamp": "2021-07-08T07:30:00.000Z",\n' +
                '        "open": "32414.58",\n' +
                '        "close": "32414.58",\n' +
                '        "min": "32414.58",\n' +
                '        "max": "32414.58"\n' +
                '      },\n' +
                '      {\n' +
                '        "timestamp": "2021-07-07T18:00:00.000Z",\n' +
                '        "open": "34748.31",\n' +
                '        "close": "34748.31",\n' +
                '        "min": "34748.31",\n' +
                '        "max": "34748.31"\n' +
                '      },\n' +
                '      {\n' +
                '        "timestamp": "2021-07-07T12:30:00.000Z",\n' +
                '        "open": "34777.96",\n' +
                '        "close": "34777.96",\n' +
                '        "min": "34777.96",\n' +
                '        "max": "34777.96"\n' +
                '      }\n' +
                '    ]\n' +
                '}'
        },
        "Get Futures Premium Index Candlesticks": {
            url: '/api/3/public/futures/candles/premium_index',
            params: {
                period: { type: 'enum', description: 'Default is M30 (30 minutes).', possible :['M1'  , 'M3', 'M5', 'M15', 'M30', 'H1' , 'H4', 'D1' , 'D7', '1M'], default: 'M30'},
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            doc_url: 'https://api.hitbtc.com/#futures-premium-index-candles',
            description: 'Returns premium index candles for all contracts.',
            sample_response: '{\n' +
                '    "BTCUSDT_PERP": [\n' +
                '      {\n' +
                '        "timestamp": "2021-07-08T23:00:00.000Z",\n' +
                '        "open": "0.0001",\n' +
                '        "close": "-0.000204666639856002",\n' +
                '        "min": "-0.000390287528832163",\n' +
                '        "max": "0.000191382142641392"\n' +
                '      },\n' +
                '      {\n' +
                '        "timestamp": "2021-07-08T22:30:00.000Z",\n' +
                '        "open": "-0.000057633026633848",\n' +
                '        "close": "0.00006436921844495",\n' +
                '        "min": "-0.00060179788527768",\n' +
                '        "max": "0.0001"\n' +
                '      },\n' +
                '      {\n' +
                '        "timestamp": "2021-07-08T22:00:00.000Z",\n' +
                '        "open": "0.0001",\n' +
                '        "close": "-0.000205510656144068",\n' +
                '        "min": "-0.000604732863348008",\n' +
                '        "max": "0.0001"\n' +
                '      }\n' +
                '    ]\n' +
                '}'
        },
        "Get Futures Open Interest Candlesticks": {
            url: '/api/3/public/futures/candles/open_interest',
            params: {
                period: { type: 'enum', description: 'Default is M30 (30 minutes).', possible :['M1'  , 'M3', 'M5', 'M15', 'M30', 'H1' , 'H4', 'D1' , 'D7', '1M'], default: 'M30'},
                symbols: {type: 'string', description: 'Comma-separated list of symbol codes.', },
                sort: {type: 'enum', description: 'Sort direction.', possible :['DESC', 'ASC'], default: 'DESC'},
                from: {type: 'string', description: 'Interval initial value.'},
                till: {type: 'string', description: 'Interval end value.'},
                limit: {type: 'number', description: 'Default value: 10. Accepted values: 1 – 1000', default: 10},
            },
            doc_url: 'https://api.hitbtc.com/#futures-open-interest-candles',
            description: 'Returns open interest candles for all contracts.',
            sample_response: '{\n' +
                '    "BTCUSDT_PERP": [{\n' +
                '        "timestamp": "2021-07-22T16:30:00.000Z",\n' +
                '        "open": "1.06523",\n' +
                '        "close": "1.06523",\n' +
                '        "min": "1.06523",\n' +
                '        "max": "1.06523"\n' +
                '    }, {\n' +
                '        "timestamp": "2021-07-22T16:00:00.000Z",\n' +
                '        "open": "1.06523",\n' +
                '        "close": "1.06523",\n' +
                '        "min": "1.06523",\n' +
                '        "max": "1.06523"\n' +
                '    }, {\n' +
                '        "timestamp": "2021-07-22T15:30:00.000Z",\n' +
                '        "open": "1.06523",\n' +
                '        "close": "1.06523",\n' +
                '        "min": "1.06523",\n' +
                '        "max": "1.06523"\n' +
                '    }]\n' +
                '}'
        },
    },


    bitfinex: {
        "base_url": "https://api-pub.bitfinex.com",
        "provider_description": 'Bitfinex is a cryptocurrency exchange owned and operated by iFinex Inc registered in the British Virgin Islands.',
        "doc_url": 'https://docs.bitfinex.com/docs/introduction',
        "Get Tickers": {
            url: '/v2/tickers',
            params: {
                symbols: {required: true, type: 'string', description: 'comma-separated list of symbols'}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-tickers',
            description: 'The tickers endpoint provides a high level overview of the state of the market. It shows the current best bid and ask, the last traded price, as well as information on the daily volume and price movement over the last day. The endpoint can retrieve multiple tickers with a single query.',
            sample_response: '[\n' +
                '  // on trading pairs (ex. tBTCUSD)\n' +
                '  [\n' +
                '    SYMBOL,\n' +
                '    BID, \n' +
                '    BID_SIZE, \n' +
                '    ASK, \n' +
                '    ASK_SIZE, \n' +
                '    DAILY_CHANGE, \n' +
                '    DAILY_CHANGE_RELATIVE, \n' +
                '    LAST_PRICE, \n' +
                '    VOLUME, \n' +
                '    HIGH, \n' +
                '    LOW\n' +
                '  ],\n' +
                '  // on funding currencies (ex. fUSD)\n' +
                '  [\n' +
                '    SYMBOL,\n' +
                '    FRR, \n' +
                '    BID, \n' +
                '    BID_PERIOD,\n' +
                '    BID_SIZE, \n' +
                '    ASK, \n' +
                '    ASK_PERIOD,\n' +
                '    ASK_SIZE,\n' +
                '    DAILY_CHANGE,\n' +
                '    DAILY_CHANGE_RELATIVE, \n' +
                '    LAST_PRICE,\n' +
                '    VOLUME,\n' +
                '    HIGH, \n' +
                '    LOW,\n' +
                '    _PLACEHOLDER,\n' +
                '    _PLACEHOLDER,\n' +
                '    FRR_AMOUNT_AVAILABLE\n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '\n' +
                '//trading \n' +
                '["tBTCUSD",10654,53.62425959,10655,76.68743116,745.1,0.0752,10655,14420.34271146,10766,9889.1449809]\n' +
                ']\n' +
                '\n' +
                '//funding\n' +
                '["fUSD",0.0003447013698630137,0.000316,30,1682003.0922634401,0.00031783,4,23336.958053110004,0.00000707,0.0209,0.0003446,156123478.78447533,0.000347,0.00009,null,null,146247919.52883354],'
        },
        "Get Tickers History": {
            url: '/v2/tickers/hist',
            params: {
                symbols: {required: true, type: 'string', description: 'comma-separated list of symbols'},
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max 250)', default: 100},
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#tickers-history',
            description: 'History of recent trading tickers. Provides historic data of the best bid and ask at a 10-second interval.\n' +
                '\n' +
                'Historic data goes back 1 year. The oldest results have a 30-minute interval.',
            sample_response: '[\n' +
                '  [\n' +
                '    SYMBOL,\n' +
                '    BID, \n' +
                '    PLACEHOLDER, \n' +
                '    ASK, \n' +
                '    PLACEHOLDER, \n' +
                '    PLACEHOLDER, \n' +
                '    PLACEHOLDER, \n' +
                '    PLACEHOLDER, \n' +
                '    PLACEHOLDER, \n' +
                '    PLACEHOLDER, \n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    MTS\n' +
                '  ]\n' +
                '  ...\n' +
                ']'
        },
        "Get Trades": {
            url: '/v2/trades/:symbol/hist',
            params: {
                symbol: {
                    required: true,
                    replace_2dots: true, type: 'string', description: 'The symbol you want information about. (e.g. tBTCUSD, tETHUSD, fUSD, fBTC)'
                },
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 10000)', default: 120},
                sort : { description: 'if = 1 it sorts results returned with old > new' ,default: -1, possible: [1,-1]}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-trades',
            description: 'History of recent trading tickers. Provides historic data of the best bid and ask at a 10-second interval.\n' +
                '\n' +
                'Historic data goes back 1 year. The oldest results have a 30-minute interval.',
            sample_response: '[\n' +
                '  [\n' +
                '    ID,\n' +
                '    MTS,\n' +
                '    AMOUNT,\n' +
                '    PRICE\n' +
                '  ]\n' +
                ']\n' +
                '\n' +
                '// on funding currencies (ex. fUSD)\n' +
                '[\n' +
                '  [\n' +
                '    ID,\n' +
                '    MTS,\n' +
                '    AMOUNT,\n' +
                '    RATE,\n' +
                '    PERIOD\n' +
                '  ]\n' +
                ']\n' +
                '\n' +
                '//trading\n' +
                '[[388063448,1567526214876,1.918524,10682]]\n' +
                '\n' +
                '//funding\n' +
                '[[124486873,1567526287066,-210.69675707,0.00034369,2]]'
        },
        "Get Order Book": {
            url: '/v2/book/:symbol/:precision',
            params: {
                symbol: {required: true, replace_2dots: true, type: 'string', description: 'The symbol you want information about. (e.g. tBTCUSD, tETHUSD, fUSD, fBTC)'},
                precision: {required: true, replace_2dots: true, type: string, description: 'Level of price aggregation (P0, P1, P2, P3, P4, R0)'},
                len: {default: 100,  description: 'Number of price points ("1", "25", "100")', possible: [1,25,100]}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-book',
            description: 'The Public Books endpoint allows you to keep track of the state of Bitfinex order books on a price aggregated basis with customizable precision. Raw books can be retrieved by using precision R0.',
            sample_response: '[\n' +
                '  [\n' +
                '    PRICE,\n' +
                '    COUNT,\n' +
                '    AMOUNT\n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '\n' +
                '// on funding currencies (ex. fUSD)\n' +
                '[\n' +
                '  [\n' +
                '    RATE,\n' +
                '    PERIOD,\n' +
                '    COUNT,\n' +
                '    AMOUNT\n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '\n' +
                '// on raw books (precision of R0)\n' +
                '// on trading currencies:\n' +
                '[\n' +
                '  [\n' +
                '    ORDER_ID,\n' +
                '    PRICE,\n' +
                '    AMOUNT\n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '\n' +
                '// on funding currencies:\n' +
                '\n' +
                '[\n' +
                '  [\n' +
                '    ORDER_ID,\n' +
                '    PERIOD,\n' +
                '    RATE,\n' +
                '    AMOUNT\n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '\n' +
                '//trading\n' +
                '[[8744.9,2,0.45603413],[8745,8,-3.64426815]]\n' +
                '\n' +
                '//funding\n' +
                '[[0.0003301,30,1,-3862.874],[0.00027999,2,2,1843.05088178]]\n' +
                '\n' +
                '//raw books\n' +
                '\n' +
                '//trading\n' +
                '[[34006738527,8744.9,0.25603413],[34005496171,8745,-0.2]]\n' +
                '\n' +
                '//funding\n' +
                '[[645902785,30,0.0003301,-3862.874],[649139359,2,0.0003168747915,52.36]]'
        },
        "Get Stats": {
            url: '/v2/stats1/:key::size::symbol::side/:section',
            params: {
                key: {
                    required: true,
                    replace_2dots: true, possible: ["funding.size", "credits.size", "credits.size.sym", "pos.size", "vol.1d", "vol.7d", "vol.30d", "vwap"]
                },
                size: {
                    required: true, description: 'Available values: "1m" (for keys: "pos.size", "funding.size", "credits.size", "credits.size.sym"), "30m" (for keys: vol.1d, vol.7d, vol.30d), "1d" (for keys: vwap)',
                    replace_2dots: true, possible: ['1m', '30m', '1d']
                },

                symbol: {
                    required: true, type: string,
                    replace_2dots: true, description : 'The symbol you want information about. (e.g. tBTCUSD, tETHUSD, fUSD, fBTC) (used for keys: "pos.size", "funding.size", "credits.size", "credits.size.sym", "vwap")'
                },
                side: {
                    required: true, possible: ['long', 'short'],
                    replace_2dots: true, description: 'Only used for "pos.size" key. Available values: "long", "short". Only for non-funding queries.'
                },
                section: {
                    required: true, description: 'Available values: "last", "hist"',
                    replace_2dots: true, possible: ["last", "hist"]
                },
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 10000)', default: 125},
                sort : { description: 'if = 1 it sorts results returned with old > new' ,default: -1, possible: [1,-1]}

            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = ['TIMESTAMP', 'VALUE']
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-stats1',
            description: 'The Stats endpoint provides various statistics on a specified trading pair or funding currency. Use the available keys to specify which statistic you wish to retrieve. Please note that the "Side" path param is only required for the pos.size key.',
            sample_response: '[ \n' +
                '  MTS,\n' +
                '  VALUE\n' +
                ']\n' +
                '\n' +
                '// response with Section = "hist"\n' +
                '[\n' +
                '  [\n' +
                '   MTS,\n' +
                '   VALUE \n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '  \n' +
                '//pos size\n' +
                '[[1573554000000,25957.94278561],[1573553940000,25964.29056204]]\n' +
                '\n' +
                '//funding size\n' +
                '[[1573560420000,374049888.4504578],[1573560360000,373962908.58560276]]\n' +
                '\n' +
                '//credits size\n' +
                '[[1573560420000,369005353.5945115],[1573560360000,368918780.2238935]]\n' +
                '\n' +
                '//credits size sym\n' +
                '[[1573560480000,141144084.0479222],[1573560420000,141144084.0479222]]\n' +
                '\n' +
                '//volume 1d\n' +
                '[[1582567200000,162250721.9836825],[1582565400000,161726483.35474735]]\n' +
                '\n' +
                '//vwap\n' +
                '[[1582502400000,9619.71555194]]'
        },
        "Get Candlesticks": {
            url: '/v2/candles/trade::timeframe::symbol/:section',
            params: {
                symbol: {
                    required: true, type: string, description: 'The symbol you want information about. (e.g. tBTCUSD, tETHUSD, fUSD, fBTC)',
                    replace_2dots: true
                },
                timeframe: {
                    required: true, description: "Available values: '1m', '5m', '15m', '30m', '1h', '3h', '6h', '12h', '1D', '1W', '14D', '1M'",
                    replace_2dots: true, possible: ['1m', '5m', '15m', '30m', '1h', '3h', '6h', '12h', '1D', '1W', '14D', '1M']
                },
                section: {
                    required: true, description: 'Available values: "last", "hist"', possible: ["last", "hist"],
                    replace_2dots: true
                },
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 10000)', default: 120},
                sort : { description: 'if = 1 it sorts results returned with old > new' ,default: -1, possible: [1,-1]}
            },
            transformOutput: (matrix) => {
                if(matrix.length<1){return matrix}
                var arr = ['TIMESTAMP', 'OPEN', 'CLOSE', 'HIGH', 'LOW', 'VOLUME']
                for(var i=0; i< matrix[0].length; i++){
                    matrix[0][i] = arr[i]
                }
                return matrix
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-candles',
            description: 'The Candles endpoint provides OCHL (Open, Close, High, Low) and volume data for the specified funding currency or trading pair. The endpoint provides the last 100 candles by default, but a limit and a start and/or end timestamp can be specified.',
            sample_response: '[ \n' +
                '  MTS, \n' +
                '  OPEN, \n' +
                '  CLOSE, \n' +
                '  HIGH, \n' +
                '  LOW, \n' +
                '  VOLUME \n' +
                ']\n' +
                '\n' +
                '// response with Section = "hist"\n' +
                '[\n' +
                '  [\n' +
                '   MTS,\n' +
                '   OPEN,\n' +
                '   CLOSE,\n' +
                '   HIGH,\n' +
                '   LOW,\n' +
                '   VOLUME\n' +
                '  ], \n' +
                '   ...\n' +
                ']\n' +
                '\n' +
                '//last\n' +
                '[1567681680000,10642,10641,10642,10640,3.49421483]\n' +
                '\n' +
                '//hist \n' +
                '[[1573562880000,0.0003,0.0003,0.0003,0.0003,24083.8638948],[1573562820000,0.00030178,0.00033105,0.00033105,0.00030178,1840.0074507599998]]'
        },
        "Get Derivatives Status": {
            url: '/v2/status/deriv',
            params: {
                keys: {required: true, type: string, description: 'The key or keys (Separate by commas) of the pairs to fetch status information. To fetch information for all pairs use the key value \'ALL\''}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-status',
            description: 'Endpoint used to receive different types of platform information - currently supports derivatives pair status only.',
            sample_response: '[\n' +
                '  [\n' +
                '    KEY,\n' +
                '    MTS,\n' +
                '    PLACEHOLDER, \n' +
                '    DERIV_PRICE,\n' +
                '    SPOT_PRICE,\n' +
                '    PLACEHOLDER,\n' +
                '    INSURANCE_FUND_BALANCE,\n' +
                '    PLACEHOLDER,\n' +
                '    NEXT_FUNDING_EVT_TIMESTAMP_MS,\n' +
                '    NEXT_FUNDING_ACCRUED,\n' +
                '    NEXT_FUNDING_STEP,\n' +
                '    PLACEHOLDER,\n' +
                '    CURRENT_FUNDING,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    MARK_PRICE,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    OPEN_INTEREST,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    CLAMP_MIN,\n' +
                '    CLAMP_MAX\n' +
                '  ]\n' +
                ']\n' +
                '\n' +
                '[["tAMPF0:USTF0",1596124822000,null,0.896,0.771995,null,1396531.67460709,null,1596153600000,0.0001056,6,null,-0.01381344,null,null,0.7664,null,null,246502.09001551,null,null,null,null,0.3]]'
        },
        },
        "Get Derivatives Status History": {
            url: '/v2/status/deriv/:symbol/hist',
            params: {
                symbol: {required: true, replace_2dots: true, description: 'The symbol you want information about. (e.g. tBTCF0:USTF0 tETHF0:USTF0, etc.)', type: string},
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 5000)', default: 100},
                sort : { description: 'if = 1 it sorts results returned with old > new' ,default: -1, possible: [1,-1]}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-status-hist',
            description: 'Endpoint used to receive different types of historical platform information - currently supports derivatives pair status only.',
            sample_response: '[\n' +
                '  [\n' +
                '    MTS,\n' +
                '    PLACEHOLDER, \n' +
                '    DERIV_PRICE,\n' +
                '    SPOT_PRICE,\n' +
                '    PLACEHOLDER,\n' +
                '    INSURANCE_FUND_BALANCE,\n' +
                '    PLACEHOLDER,\n' +
                '    NEXT_FUNDING_EVT_TIMESTAMP_MS,\n' +
                '    NEXT_FUNDING_ACCRUED,\n' +
                '    NEXT_FUNDING_STEP,\n' +
                '    PLACEHOLDER,\n' +
                '    CURRENT_FUNDING,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    MARK_PRICE,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    OPEN_INTEREST,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    CLAMP_MIN,\n' +
                '    CLAMP_MAX\n' +
                '  ]\n' +
                ']\n' +
                '\n' +
                '[\n' +
                '[[1573567017000,null,8671.7,8670.15,null,417431.07139387,null,1573574400000,0.00011332,7079,null,0,null,null,8671.47,null,null,140.13300261,null,null,null,null,null],\n' +
                '[...]  \n' +
                ']'
        },
        "Get Liquidations": {
            url: '/v2/liquidations/hist',
            params: {
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 500)', default: 120},
                sort : { description: 'if = 1 it sorts results returned with old > new' ,default: -1, possible: [1,-1]}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-liquidations',
            description: 'Endpoint to retrieve liquidations. By default it will retrieve the most recent liquidations, but time-specific data can be retrieved using timestamps.',
            sample_response: '[\n' +
                ' [\n' +
                '  [\'pos\',\n' +
                '   POS_ID,\n' +
                '   MTS,\n' +
                '   PLACEHOLDER,\n' +
                '   SYMBOL,\n' +
                '   AMOUNT,\n' +
                '   BASE_PRICE,\n' +
                '   PLACEHOLDER,\n' +
                '   IS_MATCH,\n' +
                '   IS_MARKET_SOLD,\n' +
                '   PLACEHOLDER,\n' +
                '   PRICE_ACQUIRED],\n' +
                '  [\'pos\',\n' +
                '   ...,]\n' +
                ' ]\n' +
                ']\n' +
                '\n' +
                '[[["pos",142262770,1573133915960.0999,null,"tETCUSD",-2.0297077,-0.234510800363,null,1,1,null,5.3263]],[["pos",142262770,1573133915958.5,null,"tETCUSD",-18,4.7601,null,1,1,null,5.3233]]]'
        },
        "Get Leaderboards": {
            url: '/v2/rankings/:key::timeframe::symbol/hist',
            params: {
                key: {
                    required: true, description: 'Allowed values: "plu_diff" for unrealized profit (period delta); "plu" for unrealized profit (inception); "vol" for volume; "plr" for realized profit',
                    replace_2dots: true, possible: ['plu_diff','plu', 'vol', 'plr' ]
                },
                timeframe: {
                    required: true, possible: ["3h", "1w", "1M"],
                    replace_2dots: true
                },
                symbol: {
                    required: true,
                    replace_2dots: true, type: string, description: 'The symbol you want information about. (e.g. tBTCUSD, tETHUSD, tGLOBAL:USD) - see table below for available symbols per key'
                },
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 10000)', default: 125},
                sort : { description: 'if = 1 it sorts results returned with old > new' ,default: -1, possible: [1,-1]}
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-rankings',
            description: 'The leaderboards endpoint allows you to retrieve leaderboard standings for unrealized profit (period delta), unrealized profit (inception), volume, and realized profit.',
            sample_response: '[[ \n' +
                '  MTS,\n' +
                '  PLACEHOLDER,\n' +
                '  USERNAME,\n' +
                '  RANKING,\n' +
                '  PLACEHOLDER,\n' +
                '  PLACEHOLDER,\n' +
                '  VALUE,\n' +
                '  PLACEHOLDER\n' +
                '  PLACEHOLDER\n' +
                '  TWITTER_HANDLE\n' +
                '],\n' +
                ' [\n' +
                '  ...\n' +
                ' ]\n' +
                ']\n' +
                '\n' +
                '\n' +
                '//unrealized profit (period delta)\n' +
                '[[1575201600000,null,"USERNAME",1,null,null,15504971.51,null,0,"TWITTER_HANDLE"]\n' +
                '\n' +
                '//unrealized profit (inception)\n' +
                '[[1574640000000,null,"USERNAME",1,null,null,4134739.62,null,0,"TWITTER_HANDLE"]]\n' +
                ' \n' +
                '//realized profit\n' +
                '[[1574640000000,null,"USERNAME",1,null,null,156129.59,null,0,"TWITTER_HANDLE"]]\n' +
                ' \n' +
                '//vol\n' +
                '[[1575190800000,null,"USERNAME",1,null,null,442.03,null,0,"TWITTER_HANDLE"]]'
        },
        "Get Pulse History": {
            url: '/v2/pulse/hist',
            params: {
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 100)', default: 25},
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-pulse-hist',
            description: 'View the latest pulse messages. You can specify an end timestamp to view older messages.',
            sample_response: '[[\n' +
                '  PID,\n' +
                '  MTS,\n' +
                '  _PLACEHOLDER,\n' +
                '  PUID,\n' +
                '  _PLACEHOLDER,\n' +
                '  TITLE,\n' +
                '  CONTENT,\n' +
                '  _PLACEHOLDER,\n' +
                '  _PLACEHOLDER,\n' +
                '  IS_PIN,\n' +
                '  IS_PUBLIC,\n' +
                '  COMMENTS_DISABLED,\n' +
                '  TAGS, //contains an array of tags\n' +
                '  ATTACHMENTS,\n' +
                '  META,//contains an array of objects if charts are included in the pulse\n' +
                '  LIKES,\n' +
                '  _PLACEHOLDER,\n' +
                '  _PLACEHOLDER,\n' +
                '  [\n' +
                '    PUID,\n' +
                '    MTS,\n' +
                '    _PLACEHOLDER,\n' +
                '    NICKNAME,\n' +
                '    PLACEHOLDER,\n' +
                '    PICTURE,\n' +
                '    TEXT,\n' +
                '    _PLACEHOLDER,\n' +
                '    _PLACEHOLDER,\n' +
                '    TWITTER_HANDLE,\n' +
                '    _PLACEHOLDER,\n' +
                '    FOLLOWERS,\n' +
                '    FOLLOWING,\n' +
                '    _PLACEHOLDER,\n' +
                '    _PLACEHOLDER,\n' +
                '    _PLACEHOLDER,\n' +
                '    TIPPING_STATUS\n' +
                '  ]\n' +
                '],\n' +
                'COMMENTS,\n' +
                '_PLACEHOLDER,\n' +
                '_PLACEHOLDER\n' +
                ']\n' +
                '\n' +
                '["d139512a-6558-431a-a6aa-69646fc97d55",1593608548140,null,"bf324e24-5a09-4317-b418-6c37281ab855",null,"Take an active role in the discussion with the Comment feature!","Bitfinex Pulse, the social trading you were waiting for, keeps improving to give you a complete social trading experience. 💬\\n\\nShare your opinion and take an active role in the discussion with the new comment feature💡\\n\\nYou will only need to push the Reply button to share your view with the community!\\n\\n[https://blog.bitfinex.com/bitfinex-pulse/join-the-debate-comments-now-available-on-bitfinex-pulse](https://blog.bitfinex.com/bitfinex-pulse/join-the-debate-comments-now-available-on-bitfinex-pulse)\\n\\n**#BitfinexPulse #PulseFeatures #PulseUpdates**",null,null,1,1,null,["BitfinexPulse","PulseFeatures","PulseUpdates","L_EN","N_Bitfinex"],["image-a55eda4c-4f5a-4609-abf0-7bdfca1a8911-1593608547535-size.jpg"],[],1,null,null,[["bf324e24-5a09-4317-b418-6c37281ab855",1591614631576,null,"Bitfinex",null,"image-33533a4d-a796-4afe-9b8b-690bc7075e05-1587476823358-size.png","Bitfinex is the world’s leading digital asset trading platform. We’ll be coming to you with news and updates through this official Bitfinex Pulse profile",null,null,"bitfinex",null,40,5,null,null,null,0]],1,null,null]'
        },
        "Get Pulse Profile Details": {
            url: '/v2/pulse/profile/:name',
            params: {
                nickname: {required: true, replace_2dots: true, type: string, description: 'Enter pulse user nickname (case sensitive)'},
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-pulse-profile',
            description: 'This endpoint shows details for a specific Pulse profile',
            sample_response: '[ \n' +
                '  PUID,\n' +
                '  MTS,\n' +
                '  _PLACEHOLDER,\n' +
                '  NICKNAME,\n' +
                '  _PLACEHOLDER,\n' +
                '  PICTURE,\n' +
                '  TEXT,\n' +
                '  _PLACEHOLDER,\n' +
                '  _PLACEHOLDER,\n' +
                '  TWITTER_HANDLE,\n' +
                '  _PLACEHOLDER,\n' +
                '  FOLLOWERS,\n' +
                '  FOLLOWING,\n' +
                '  _PLACEHOLDER,\n' +
                '  _PLACEHOLDER,\n' +
                '  _PLACEHOLDER,\n' +
                '  TIPPING_STATUS\n' +
                ']\n' +
                '\n' +
                '["bf324e24-5a09-4317-b418-6c37281ab855",1591614631576,null,"Bitfinex",null,"image-33533a4d-a796-4afe-9b8b-690bc7075e05-1587476823358-size.png","Bitfinex is the world’s leading digital asset trading platform. We’ll be coming to you with news and updates through this official Bitfinex Pulse profile",null,null,"bitfinex",null,40,5,null,null,null,0]'
        },

        "Get Funding Stats": {
            url: '/v2/funding/stats/:symbol/hist',
            params: {
                symbol: {required: true, replace_2dots: true, type: string, description: 'The symbol you want information about. (e.g. fUSD, fBTC, fETH ...)'},
                start: {type: 'number', description: 'Millisecond start time'},
                end: {type: 'number', description: 'Millisecond end time'},
                limit: {type: 'number', description: 'Number of records (Max: 250)', default: 125},
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
            },
            doc_url: 'https://docs.bitfinex.com/reference#rest-public-funding-stats',
            description: 'Get a list of the most recent funding data for the given currency: FRR, average period, total amount provided, total amount used',
            sample_response: '[\n' +
                '  [\n' +
                '    TIMESTAMP,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    FRR,\n' +
                '    AVG_PERIOD,\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    FUNDING_AMOUNT,\n' +
                '    FUNDING_AMOUNT_USED\n' +
                '    PLACEHOLDER,\n' +
                '    PLACEHOLDER,\n' +
                '    FUNDING_BELOW_THRESHOLD\n' +
                '  ],\n' +
                '  ...\n' +
                ']\n' +
                '\n' +
                '[[1624968300000,null,null,4.3e-7,14.08,null,null,2339131673.158108,2033064762.0561268,null,null,526751640.4566161]]'

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