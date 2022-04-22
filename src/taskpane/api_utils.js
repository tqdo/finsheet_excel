function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function checkValidProviderEndpoint(provider, endpoint_name){
    var first_dic = big_api_map[provider]
    if(!first_dic){return [{}, "", "Invalid provider"]}
    var second_dic = first_dic[endpoint_name]
    if(!second_dic){return [{}, "", "Invalid endpoint"]}
    return [second_dic, first_dic.base_url, ""]
}


var string = 'string', number = 'number'
var big_api_map = {
    Coinbase: {
        "doc_url":  'https://developers.coinbase.com/api/v2',
        'provider_description': 'Coinbase Global, Inc., branded Coinbase, is an American company that operates a cryptocurrency exchange platform. Coinbase operates remote-first, and lacks an official physical headquarters',
        "base_url": "https://api.coinbase.com/v2",
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec82b315d2a74cb9e29b39_Coinbase.png",
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
                '  ]\n' +
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

    Binance: {
        "base_url": "https://api.binance.com",
        "provider_description": 'Binance is a cryptocurrency exchange which is the largest exchange in the world in terms of daily trading volume of cryptocurrencies',
        "doc_url": 'https://binance-docs.github.io/apidocs/spot/en/',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec92d6c853cd2c9183e39d_binance-logo.svg",
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
                interval : {required: true, type: 'enum', possible: ['1m','5m', '15m','30m', '1h', '1d', '1w', '1M']},
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

    Kraken: {
        "base_url": "https://api.kraken.com/0",
        "provider_description": 'Kraken is a United States-based cryptocurrency exchange and bank, founded in 2011. The exchange provides trading between cryptocurrency and fiat currencies, and provides price information to Bloomberg Terminal.',
        "doc_url": 'https://docs.kraken.com/rest/',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60f05cc42df82b25089dbaee_Kraken.svg",
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
                asset:{type: 'string', description: 'Comma delimited list of assets to get info on (e.g. asset=XBT,ETH).'}
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
                pair:{type: 'string', description: 'Asset pairs to get data for (e.g. pair=XXBTCZUSD,XETHXXBT)'},
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
                pair:{required: true, description: 'Asset pair to get data for (e.g. pair=XBTUSD)', type: 'string'}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kraken.com/rest/#operation/getTickerInformation',
            description: 'Get ticker information.',
            response_attributes: {
                a: 'Ask [price, whole lot volume, lot volume]',
                b: "Bid [price, whole lot volume, lot volume]",
                c: 'Last trade closed [price, lot volume]',
                v: 'Volume [today, last 24 hours]',
                p: 'Volume weighted average price [today, last 24 hours]',
                t: 'Number of trades [today, last 24 hours]',
                l: 'Low [today, last 24 hours]',
                h: 'High [today, last 24 hours]',
                o: 'Today\'s opening price'
            },
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
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (e.g. pair=XBTUSD)'},
                interval: {type: 'enum', description: 'Time frame interval in minutes', possible: [1, 5, 15, 30, 60, 240, 1440, 10080, 21600] },
                since: {type: 'number', description: 'Return committed OHLC data since given ID (e.g. since=1548111600)'}
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
            response_attributes: {
                last: 'ID to be used as since when polling for new, committed OHLC data',
                'pair*': 'Array of tick data arrays [time, open, high, low, close, vwap, volume, count]'
            },
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
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (e.g. pair=XBTUSD)'},
                count: {type: 'number', description: 'maximum number of asks/bids. Can take value between 1 and 500', default: 100}
            },
            go_down_1_level: true,
            doc_url: 'https://docs.kraken.com/rest/#operation/getOrderBook',
            description: 'Get order book.',
            response_attributes: {
                asks: 'Ask side array of entries [price>, volume, timestamp]',
                bids: 'Bid side array of entries [price, volume, timestamp]'
            },
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
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (e.g. pair=XBTUSD)'},
                since: {type: 'number', description: 'Return trade data since given timestamp (e.g. since=1548111600)'}
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

            response_attributes :{
                last: 'ID to be used as since when polling for new trade data',
                'pair*' : 'Array of trade entries [price, volume time, buy/sell, market/limit, miscellaneous]'
            },
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
                pair:{required: true, type: 'string', description: 'Asset pair to get data for (e.g. pair=XBTUSD)'},
                since: {type: 'number', description: 'Return spread data since given timestamp (e.g. since=1548122302)'}

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
            response_attributes :{
                last: 'ID to be used as since when polling for new spread data',
                'pair*' : 'Array of spread entries [time, bid, ask]'
            },
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

    Poloniex: {
        "base_url": "https://poloniex.com/public",
        "provider_description": 'Launched in January 2014, Poloniex became one of the larger American cryptocurrency trading platforms. After being acquired by Circle in February 2018, Poloniex stopped serving the U.S. market and moved its legal headquarters to Bermuda 18 months later. Shortly thereafter it was acquired by a consortium that included Justin Sun\'s TRON',
        "doc_url": 'https://docs.poloniex.com/',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60f05cd1e1e5dcc798fad5b6_poloniex.svg",

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
                currency: {required: true, type: 'string', description: 'currency (e.g. BTC)'},
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

    Kucoin: {
        "base_url": "https://api.kucoin.com",
        "provider_description": 'KuCoin is a secure cryptocurrency exchange that makes it easier to buy, sell, and store cryptocurrencies like BTC, ETH, KCS, SHIB, DOGE, Gari etc.',
        "doc_url": 'https://docs.kucoin.com/#general',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec93c93c826e5abe059314_KuCoin_Shares_Logo.svg",
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
                symbol: {required: true, type: 'string', description: 'symbol (e.g. BTC-USDT)'}
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
                symbol: {required: true, type: 'string', description: 'symbol (e.g. BTC-USDT)'}
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
                symbol: {required: true, type: 'string', description: 'symbol (e.g. BTC-USDT)'}
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
                symbol: {required: true, type: 'string', description: 'symbol (e.g. BTC-USDT)'},
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
                    description: 'currency (e.g. BTC)'
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
                currencies: {type: 'string', description: 'Comma-separated cryptocurrencies to be converted into fiat, e.g. BTC,ETH, etc. Default to return the fiat price of all currencies.'}
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
                    type: 'string', description: 'symbol (e.g. USDT-BTC)'
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

    Gemini: {
        "base_url": "https://api.gemini.com",
        "provider_description": 'Gemini Trust Company, LLC is a cryptocurrency exchange and custodian that allows customers to buy, sell, and store digital assets. It is a New York trust company that is regulated by the New York State Department of Financial Services and was founded in 2014 by Cameron and Tyler Winklevoss',
        "doc_url": 'https://docs.gemini.com/rest-api/',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec84b4307ad44b41a14457_Gemini.png",

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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'}
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'}
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'}
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'},
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
                '     1559755800000,  // Time in milliseconds\n' +
                '     7781.6, // Open price\n' +
                '     7820.23, // High price\n' +
                '     7776.56, // Low price\n' +
                '     7819.39 // Close price,\n' +
                '     34.7624802159 // Volume\n' +
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'},
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'},
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'},
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
                symbol:{required: true, replace_2dots: true, type: 'string', description: 'Trading pair symbol (e.g. BTCUSD)'},
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

    Okex:{
        "base_url": "https://www.okx.com",
        "provider_description": 'OKX, formerly known as OKEx, is a Seychelles-based cryptocurrency exchange that provides a platform for trading various cryptocurrencies. Some of exchange\'s core features include spot and derivative trading. It was founded in 2017. OKX is owned by Ok Group which also owns crypto exchange Okcoin',
        "doc_url": 'https://www.okx.com/docs-v5/en/#rest-api',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60f05e00d2f8fedef963daa1_OKeX.svg",

        "Get Tickers":{
            url: '/api/v5/market/tickers',
            params:{
                instType: {required: true, type: 'enum', possible: ['SPOT', 'SWAP', 'FUTURE', 'OPTION'],description: 'Instrument type'},
                uly: {type: 'string', description: 'Underlying (e.g. BTC-USD). Only applicable to FUTURES/SWAP/OPTION'}
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
                '                    "41006.8",    // Depth price\n' +
                '                    "0.60038921",    // Number of contracts at the price\n' +
                '                    "0",    // Number of liquidated orders at the price\n' +
                '                    "1",   // Number of orders at the price \n' +
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
            description: 'Retrieve history candlestick charts from recent years.',
            sample_response: '{\n' +
                '    "code":"0",\n' +
                '    "msg":"",\n' +
                '    "data":[\n' +
                '     [\n' +
                '        "1597026383085",  // Time in milliseconds\n' +
                '        "3.721",  // Open price \n' +
                '        "3.743",  // High price \n' +
                '        "3.677",  // Low price \n' +
                '        "3.708",  // Close price \n' +
                '        "8422410",   // Trading volume, with a unit of contact \n' +
                '        "22698348.04828491"    // Trading volume, with a unit of currency \n' +
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
                '        "1597026383085",   // Time in milliseconds\n' +
                '        "3.721",  // Open price\n' +
                '        "3.743",  // High price\n' +
                '        "3.677",  // Low price\n' +
                '        "3.708"  // Close price\n' +
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
                '        "1597026383085", // Time in milliseconds\n' +
                '        "3.721", // Open price\n' +
                '        "3.743",   // High price  \n' +
                '        "3.677",    // Low price \n' +
                '        "3.708"    // Close price \n' +
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
                '            "usdCny": "6.44"  // Exchange rate \n' +
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
                uly: {type: 'string', description: 'Underlying (e.g. BTC-USD). Only applicable to FUTURES/SWAP/OPTION'},
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
                uly: {type: 'string', description: 'Underlying (e.g. BTC-USD). Only applicable to FUTURES/OPTION'},
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
                '            "1630425600000",    // Timestamp\n' +
                '            "7596.2651",    // Sell volume \n' +
                '            "7149.4855"    // Buy volume \n' +
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
                '            "1630492800000",    // Timestamp\n' +
                '            "0.4614"    // Margin lending ratio\n' +
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
                '            "1630502100000",    // Timestamp\n' +
                '            "1.25"    // Long/short ratio\n' +
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
                '            "1630502400000",    // Timestamp\n' +
                '            "1713028741.6898",    // Open interest\n' +
                '            "39800873.554"    // Volume\n' +
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
                '            "1630368000000",    // Timestamp\n' +
                '            "3458.1000",    // Open interest(coin as the unit)\n' +
                '            "78.8000"    // Volume（coin as the unit) \n' +
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
                '            "1630512000000",    // Timestamp \n' +
                '            "2.7261",    // Open interest ratio\n' +
                '            "2.3447"    // Volume ratio\n' +
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
                '            "1630540800000",    // Timestamp\n' +
                '            "20210902",    // Contract expiry date, the format is YYYYMMdd, e.g. 20210623\n' +
                '            "6.4",    // call open interest (coin as the unit)\n' +
                '            "18.4",    // put open interest (coin as the unit)\n' +
                '            "0.7",    // call Volume (coin as the unit)\n' +
                '            "0.4"    // put Volume (coin as the unit)\n' +
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
                '            "1630540800000",    // Timestamp \n' +
                '            "10000",    // Strike\n' +
                '            "0",    // call open interest (coin as the unit)\n' +
                '            "0.5",    // put open interest (coin as the unit)\n' +
                '            "0",    // call Volume (coin as the unit)\n' +
                '            "0"    // put Volume (coin as the unit)\n' +
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
                '        "1630512000000",    // Timestamp \n' +
                '        "8.55",    // call option buy volume, in settlement currency\n' +
                '        "67.3",    // call option sell volume, in settlement currency\n' +
                '        "16.05",    // put option buy volume, in settlement currency\n' +
                '        "16.3",    // put option sell volume, in settlement currency\n' +
                '        "126.4",    // call block volume\n' +
                '        "40.7"    // put block volume\n' +
                '    ],\n' +
                '    "msg": ""\n' +
                '}'
        },

    },

    Hitbtc: {
        "base_url": "https://api.hitbtc.com",
        "provider_description": 'HitBTC is a leading European bitcoin exchange which provides cryptocurrency trading services to institutionals, merchants and individual traders worldwide.',
        "doc_url": 'https://api.hitbtc.com/',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec866725b835245882b35a_hitbtc-seeklogo.com.svg",

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
                '            "9777.5",                      // Price\n' +
                '            "0.00002"                      // Amount\n' +
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


    Bitfinex: {
        "base_url": "https://api-pub.bitfinex.com",
        "provider_description": 'Bitfinex is a cryptocurrency exchange owned and operated by iFinex Inc registered in the British Virgin Islands.',
        "doc_url": 'https://docs.bitfinex.com/docs/introduction',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec872a97bd791b13ed7b61_bfx-leaf.jpg",

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

        "Get Derivatives Status History": {
            url: '/v2/status/deriv/:symbol/hist',
            params: {
                symbol: {required: true, replace_2dots: true, description: 'The symbol you want information about. (e.g. tBTCF0:USTF0, tETHF0:USTF0, etc.)', type: string},
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

    Bittrex: {
        "base_url": "https://api.bittrex.com/v3",
        "provider_description": 'Bittrex is a leading cryptocurrency exchange that provides the widest selection of cryptocurrencies like Bitcoin & Ethereum in the US.',
        "doc_url": 'https://bittrex.github.io/api/v3',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60f05ce275bb9245794bd607_Bittrex.svg",

        "Get Currencies": {
            url: '/currencies',
            doc_url: 'https://bittrex.github.io/api/v3#operation--currencies-get',
            description: 'List currencies',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "name": "string",\n' +
                '    "coinType": "string",\n' +
                '    "status": "string",\n' +
                '    "minConfirmations": "integer (int32)",\n' +
                '    "notice": "string",\n' +
                '    "txFee": "number (double)",\n' +
                '    "logoUrl": "string",\n' +
                '    "prohibitedIn": [\n' +
                '      "string"\n' +
                '    ],\n' +
                '    "baseAddress": "string",\n' +
                '    "associatedTermsOfService": [\n' +
                '      "string"\n' +
                '    ],\n' +
                '    "tags": [\n' +
                '      "string"\n' +
                '    ]\n' +
                '  }\n' +
                ']'
        },
        "Get List of Markets": {
            url: '/markets',
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets-get',
            description: 'List markets',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "baseCurrencySymbol": "string",\n' +
                '    "quoteCurrencySymbol": "string",\n' +
                '    "minTradeSize": "number (double)",\n' +
                '    "precision": "integer (int32)",\n' +
                '    "status": "string",\n' +
                '    "createdAt": "string (date-time)",\n' +
                '    "notice": "string",\n' +
                '    "prohibitedIn": [\n' +
                '      "string"\n' +
                '    ],\n' +
                '    "associatedTermsOfService": [\n' +
                '      "string"\n' +
                '    ],\n' +
                '    "tags": [\n' +
                '      "string"\n' +
                '    ]\n' +
                '  }\n' +
                ']'
        },
        "Get Markets' 24h Summary": {
            url: '/markets/summaries',
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets-summaries-get',
            description: 'List summaries of the last 24 hours of activity for all markets.',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "high": "number (double)",\n' +
                '    "low": "number (double)",\n' +
                '    "volume": "number (double)",\n' +
                '    "quoteVolume": "number (double)",\n' +
                '    "percentChange": "number (double)",\n' +
                '    "updatedAt": "string (date-time)"\n' +
                '  }\n' +
                ']'
        },
        "Get All Tickers": {
            url: '/markets/tickers',
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets-tickers-get',
            description: 'List tickers for all markets.',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "lastTradeRate": "number (double)",\n' +
                '    "bidRate": "number (double)",\n' +
                '    "askRate": "number (double)"\n' +
                '  }\n' +
                ']'
        },
        "Get Ticker": {
            url: '/markets/:marketSymbol/ticker',
            params: {
                marketSymbol: {required: true, replace_2dots: true, type: string, description: 'symbol of market to retrieve ticker for'}
            },
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets--marketSymbol--ticker-get',
            description: 'Retrieve the ticker for a specific market.',
            sample_response: '{\n' +
                '  "symbol": "string",\n' +
                '  "lastTradeRate": "number (double)",\n' +
                '  "bidRate": "number (double)",\n' +
                '  "askRate": "number (double)"\n' +
                '}'
        },
        "Get Tickers of a Market": {
            url: '/markets/:marketSymbol',
            params: {
                marketSymbol: {required: true, replace_2dots: true, type: string, description: 'symbol of market to retrieve'}
            },
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets--marketSymbol--get',
            description: 'Retrieve information for a specific market.',
            sample_response: '{\n' +
                '  "symbol": "string",\n' +
                '  "baseCurrencySymbol": "string",\n' +
                '  "quoteCurrencySymbol": "string",\n' +
                '  "minTradeSize": "number (double)",\n' +
                '  "precision": "integer (int32)",\n' +
                '  "status": "string",\n' +
                '  "createdAt": "string (date-time)",\n' +
                '  "notice": "string",\n' +
                '  "prohibitedIn": [\n' +
                '    "string"\n' +
                '  ],\n' +
                '  "associatedTermsOfService": [\n' +
                '    "string"\n' +
                '  ],\n' +
                '  "tags": [\n' +
                '    "string"\n' +
                '  ]\n' +
                '}'
        },
        "Get a Market's 24h Summary": {
            url: '/markets/:marketSymbol/summary',
            params: {
                marketSymbol: {
                    required: true, type: string, description: 'symbol of market to retrieve summary for',
                    replace_2dots: true
                }
            },
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets--marketSymbol--summary-get',
            description: 'Retrieve summary of the last 24 hours of activity for a specific market.',
            sample_response: '{\n' +
                '  "symbol": "string",\n' +
                '  "high": "number (double)",\n' +
                '  "low": "number (double)",\n' +
                '  "volume": "number (double)",\n' +
                '  "quoteVolume": "number (double)",\n' +
                '  "percentChange": "number (double)",\n' +
                '  "updatedAt": "string (date-time)"\n' +
                '}'
        },
        "Get Order Book": {
            url: '/markets/:marketSymbol/orderbook',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true, type: string, description: 'symbol of market to retrieve order book for'
                },
                depth: {description: 'maximum depth of order book to return', possible: [1, 25, 500], default: 25}
            },
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets--marketSymbol--orderbook-get',
            description: 'Retrieve the order book for a specific market.',
            sample_response: '{\n' +
                '  "bid": [\n' +
                '    {\n' +
                '      "quantity": "number (double)",\n' +
                '      "rate": "number (double)"\n' +
                '    }\n' +
                '  ],\n' +
                '  "ask": [\n' +
                '    {\n' +
                '      "quantity": "number (double)",\n' +
                '      "rate": "number (double)"\n' +
                '    }\n' +
                '  ]\n' +
                '}'
        },

        "Get Trades": {
            url: '/markets/:marketSymbol/trades',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true, type: string, description: 'symbol of market to retrieve recent trades for'
                }
            },
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets--marketSymbol--trades-get',
            description: 'Retrieve the recent trades for a specific market.',
            sample_response: '[\n' +
                '  {\n' +
                '    "id": "string (uuid)",\n' +
                '    "executedAt": "string (date-time)",\n' +
                '    "quantity": "number (double)",\n' +
                '    "rate": "number (double)",\n' +
                '    "takerSide": "string"\n' +
                '  }\n' +
                ']'
        },
        "Get Candlesticks": {
            url: '/markets/:marketSymbol/candles/trade/:candleInterval/recent',
            params: {
                marketSymbol: {
                    required: true,
                    replace_2dots: true, type: string, description:'symbol of market to retrieve candles for'
                },
                candleInterval: {
                    required: true,
                    replace_2dots: true, possible:['MINUTE_1', 'MINUTE_5', 'HOUR_1', 'DAY_1'], description: 'desired time interval between candles'
                }
            },
            doc_url: 'https://bittrex.github.io/api/v3#operation--markets--marketSymbol--candles--candleType---candleInterval--recent-get',
            description: 'Retrieve recent candles for a specific market and candle interval. The maximum age of the returned candles depends on the interval as follows: (MINUTE_1: 1 day, MINUTE_5: 1 day, HOUR_1: 31 days, DAY_1: 366 days). Candles for intervals without any trading activity will match the previous close and volume will be zero.',
            sample_response: '[\n' +
                '  {\n' +
                '    "startsAt": "string (date-time)",\n' +
                '    "open": "number (double)",\n' +
                '    "high": "number (double)",\n' +
                '    "low": "number (double)",\n' +
                '    "close": "number (double)",\n' +
                '    "volume": "number (double)",\n' +
                '    "quoteVolume": "number (double)"\n' +
                '  }\n' +
                ']'
        },
    },

    Huobi: {
        "base_url": "https://api.huobi.pro",
        "provider_description": 'Huobi is a Seychelles-based cryptocurrency exchange. Founded in China, the company now has offices in Hong Kong, South Korea, Japan and the United States. In August 2018 it became a publicly listed Hong Kong company.',
        "doc_url": 'https://huobiapi.github.io/docs/spot/v1/en',
        "logo_url": "https://assets-global.website-files.com/60e4948b205f74054cbc1480/60ec9321ecd3e5250ae595a5_huobi-token-ht-logo.svg",

        "Get Market Status": {
            url: '/v2/market-status',
            go_down_1_level: true,
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-market-status',
            description: 'The endpoint returns current market status\n' +
                'The enum values of market status includes: 1 - normal (order submission & cancellation are allowed)，2 - halted (order submission & cancellation are prohibited)，3 - cancel-only(order submission is prohibited but order cancellation is allowed).\n' +
                'Halt reason includes: 2 - emergency maintenance，3 - schedule maintenance.',
            sample_response: '{\n' +
                '    "code": 200,\n' +
                '    "message": "success",\n' +
                '    "data": {\n' +
                '        "marketStatus": 1\n' +
                '    }\n' +
                '}'
        },
        "Get All Symbols": {
            url: '/v2/settings/common/symbols',
            params: {
                ts: {type: number, description: 'UNIX timestamp to get incremental data'}
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
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-all-supported-trading-symbol-v2',
            description: 'Get all Supported Trading Symbol',
            response_attributes: {
                status: 'status',

                sc: 'symbol(outside)',
                dn: 'display name',
                bc: 'base currency',
                bcdn: 'base currency display name',
                qc: 'quote currency',
                qcdn: 'quote currency display name',
                state: 'symbol status. unknown，not-online，pre-online，online，suspend，offline，transfer-board，fuse',
                whe: 'white enabled',
                cd: 'country disabled',
                te: 'trade enabled',
                toa: 'the time trade open at',
                sp: 'symbol partition',
                w: 'weight sort',
                ttp: 'trade total precision',
                tap: 'trade amount precision',
                tpp: 'trade price precision',
                fp: 'fee precision',
                suspend_desc: 'suspend desc',
                transfer_board_desc: 'transfer board desc',
                tags: 'Tags, multiple tags are separated by commas, such as: st, hadax',
                lr: 'leverage ratio, such as: 3.5, or null if the symbol does not support this leverage ratio',
                smlr: 'super-margin leverage ratio, such as: 3, or null if the symbol does not support super-margin',
                flr: 'C2C leverage ratio, such as:3, or null if the symbol does not support C2C',
                wr: 'withdraw_risk, such as: 3, or null if the symbol does not support super-margin',
                d: 'direction: 1 for long and 2 for short',
                elr: 'etp leverage ratio',

                castate: 'not mandatory. The state of the call auction; it will only be displayed when it is in the 1st and 2nd stage of the call auction. Enumeration values: "ca_1", "ca_2"',
                ca1oa: 'not mandatory. this information is only available for that symbols configured with call auction. The total number of milliseconds since 0:0:0:00,000 on January 1, 1970 UTC to the present.',
                ca2oa: 'not mandatory. this information is only available for that symbols configured with call auction. The total number of milliseconds since 0:0:0:00,000 on January 1, 1970 UTC to the present.',

                ts: 'timestamp of incremental data',
                full: 'full data flag: 0 for no and 1 for yes',
                err_code: 'error code(returned when the interface reports an error)',
                err_msg: 'error msg(returned when the interface reports an error)',
            },
            sample_response: '{\n' +
                '    "status":"ok",\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "tags": "",\n' +
                '            "state": "online",\n' +
                '            "wr": "1.5",\n' +
                '            "sc": "ethusdt",\n' +
                '            "p": [\n' +
                '                {\n' +
                '                    "id": 9,\n' +
                '                    "name": "Grayscale",\n' +
                '                    "weight": 91\n' +
                '                }\n' +
                '            ],\n' +
                '            "bcdn": "ETH",\n' +
                '            "qcdn": "USDT",\n' +
                '            "elr": null,\n' +
                '            "tpp": 2,\n' +
                '            "tap": 4,\n' +
                '            "fp": 8,\n' +
                '            "smlr": null,\n' +
                '            "flr": null,\n' +
                '            "whe": false,\n' +
                '            "cd": false,\n' +
                '            "te": true,\n' +
                '            "sp": "main",\n' +
                '            "d": null,\n' +
                '            "bc": "eth",\n' +
                '            "qc": "usdt",\n' +
                '            "toa": 1514779200000,\n' +
                '            "ttp": 8,\n' +
                '            "w": 999400000,\n' +
                '            "lr": 5,\n' +
                '            "dn": "ETH/USDT"\n' +
                '        }\n' +
                '    ],\n' +
                '    "ts":"1641870869718",\n' +
                '    "full":1\n' +
                '}'
        },
        "Get All Currencies": {
            url: '/v2/settings/common/currencies',
            go_down_1_level: true,
            params: {
                ts: {type: number, description: 'UNIX timestamp to get incremental data'}
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
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-all-supported-currencies-v2',
            description: 'Get all Supported Currencies',
            response_attributes: {
                status: 'status',

                cc: 'currency code',
                dn: 'currency display name',
                fn: 'currency full name',
                at: 'asset type, 1 virtual currency 2 fiat currency',
                wp: 'withdraw precision',
                ft: 'fee type, eth: Fixed fee, btc: Interval fee husd: Fee charged in proportion',
                dma: 'deposit min amount',
                wma: 'withdraw min amount',
                sp: 'show precision',
                w: 'weight',
                qc: 'be quote currency',
                state: 'symbol state. unkown, not-online, online, offline',
                v: 'visible or not -- users who have offline currency but have assets can see it',
                whe: 'white enabled',
                cd: 'country disabled--users who have country disabled currency but have assets can see it',
                de: 'deposit enabled',
                wed: 'withdraw enabled',
                cawt: 'currency addr with tag',
                fc: 'fast confirms',
                sc: 'safe confirms',
                swd: 'suspend withdraw desc',
                wd: 'withdraw desc',
                sdd: 'suspend deposit desc',
                dd: 'deposit desc',
                svd: 'suspend visible desc',
                tags: 'Tags, multiple tags are separated by commas, such as: st, hadax',

                ts: 'timestamp of incremental data',
                full: 'full data flag: 0 for no and 1 for yes',
                err_code: 'error code(returned when the interface reports an error)',
                err_msg: 'error msg(returned when the interface reports an error)',
            },
            sample_response: '{\n' +
                '    "status":"ok",\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "tags":"",\n' +
                '            "cawt":false,\n' +
                '            "fc":12,\n' +
                '            "sc":12,\n' +
                '            "dma":"1",\n' +
                '            "wma":"10",\n' +
                '            "ft":"eth",\n' +
                '            "whe":false,\n' +
                '            "cd":false,\n' +
                '            "qc":true,\n' +
                '            "sp":"8",\n' +
                '            "wp":6,\n' +
                '            "fn":"Tether USDT",\n' +
                '            "at":1,\n' +
                '            "cc":"usdt",\n' +
                '            "v":true,\n' +
                '            "de":true,\n' +
                '            "wed":true,\n' +
                '            "w":10006,\n' +
                '            "state":"online",\n' +
                '            "dn":"USDT",\n' +
                '            "dd":"Please don’t deposit any other digital assets except USDT to the above address. Otherwise, you may lose your assets permanently. !>_<!Depositing to the above address requires confirmations of the entire network. It will arrive after 12 confirmations, and it will be available to withdraw after 12 confirmations. !>_<!Minimum deposit amount: 1 USDT. Any deposits less than the minimum will not be credited or refunded.!>_<!Your deposit address won’t change often. If there are any changes, we will notify you via announcement or email.!>_<!Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked.",\n' +
                '            "svd":null,\n' +
                '            "swd":null,\n' +
                '            "sdd":null,\n' +
                '            "wd":"Minimum withdrawal amount: 10 USDT (ERC20). !>_<!To ensure the safety of your funds, your withdrawal request will be manually reviewed if your security strategy or password is changed. Please wait for phone calls or emails from our staff.!>_<!Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked."\n' +
                '        }\n' +
                '    ],\n' +
                '    "ts":"1641869938436",\n' +
                '    "full":1\n' +
                '}'
        },
        "Get Currencies Settings": {
            url: '/v1/settings/common/currencys',
            params: {
                ts: {type: number, description: 'UNIX timestamp to get incremental data'}
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
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-currencys-settings',
            description: 'Get Currencys Settings',
            response_attributes: {
                status: 'status',

                name: 'currency name',
                dn: 'currency display name',
                vat: 'visible assets timestamp',
                det: 'deposit enable timestamp',
                wet: 'withdraw enable timestamp',
                wp: 'withdraw precision',
                ct: 'currency type',
                cp: 'currency partition. INVALID, all(PRO and HADAX), pro, hadax',
                ss: 'support sites. unknown, spot, otc, futures(coin-m futures), minepool( not supports mulan), institution, swap(coin-m swap), asset(mulan does not support transfer, it is only used for reconciliation, cfd(cfd contract in Japan), chat(Huobi Chat IM), option, linear-swap(usdt-m), custody(funding account in HK), turbine, margin, super-margin',
                oe: '0: disable, 1: enable',
                dma: 'deposit min amount',
                wma: 'withdraw min amount',
                sp: 'show precision',
                w: 'weight',
                qc: 'be quote currency',
                state: 'currency state. unkown, not-online, online, offline',
                v: 'visible',
                whe: 'white enabled',
                cd: 'country disabled',
                de: 'deposit enabled',
                we: 'withdraw enabled',
                cawt: 'currency addr with tag',
                cao: 'currency addr oneoff',
                fc: 'fast confirms',
                sc: 'safe confirms',
                swd: 'suspend withdraw desc',
                wd: 'withdraw desc',
                sdd: 'suspend deposit desc',
                dd: 'deposit desc',
                svd: 'suspend visible desc',
                tags: 'Tags, multiple tags are separated by commas, such as: st, hadax',
                fn: 'currency full name',



                ts: 'timestamp of incremental data',
                full: 'full data flag: 0 for no and 1 for yes',
                'err-code': 'error code(returned when the interface reports an error)',
                'err-msg': 'error msg(returned when the interface reports an error)',
            },
            sample_response: '{\n' +
                '    "status":"ok",\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "tags":"",\n' +
                '            "name":"usdt",\n' +
                '            "state":"online",\n' +
                '            "cawt":false,\n' +
                '            "fc":12,\n' +
                '            "sc":12,\n' +
                '            "sp":"8",\n' +
                '            "iqc":true,\n' +
                '            "ct":"eth",\n' +
                '            "de":true,\n' +
                '            "we":true,\n' +
                '            "cd":false,\n' +
                '            "oe":1,\n' +
                '            "v":true,\n' +
                '            "whe":false,\n' +
                '            "wet":1609430400000,\n' +
                '            "det":1609430400000,\n' +
                '            "cp":"all",\n' +
                '            "vat":1508839200000,\n' +
                '            "ss":[\n' +
                '                "INSTITUTION",\n' +
                '                "MINEPOOL",\n' +
                '                "OTC"\n' +
                '            ],\n' +
                '            "fn":"Tether USDT",\n' +
                '            "wp":6,\n' +
                '            "w":10006,\n' +
                '            "dma":"1",\n' +
                '            "wma":"10",\n' +
                '            "dn":"USDT",\n' +
                '            "dd":"Please don’t deposit any other digital assets except USDT to the above address. Otherwise, you may lose your assets permanently. !>_<!Depositing to the above address requires confirmations of the entire network. It will arrive after 12 confirmations, and it will be available to withdraw after 12 confirmations. !>_<!Minimum deposit amount: 1 USDT. Any deposits less than the minimum will not be credited or refunded.!>_<!Your deposit address won’t change often. If there are any changes, we will notify you via announcement or email.!>_<!Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked.",\n' +
                '            "svd":null,\n' +
                '            "swd":null,\n' +
                '            "sdd":null,\n' +
                '            "wd":"Minimum withdrawal amount: 10 USDT (ERC20). !>_<!To ensure the safety of your funds, your withdrawal request will be manually reviewed if your security strategy or password is changed. Please wait for phone calls or emails from our staff.!>_<!Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked."\n' +
                '        }\n' +
                '    ],\n' +
                '    "ts":"1641872721891",\n' +
                '    "full":1\n' +
                '}'
        },
        "Get Symbols Settings": {
            url: '/v1/settings/common/symbols',
            params: {
                ts: {type: number, description: 'UNIX timestamp to get incremental data'}
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
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-symbols-setting',
            description: 'Get Symbols Settings',
            response_attributes:{
                status: 'status',

                symbol: 'symbol(outside)',
                sn: 'symbol name',
                bc: 'base currency',
                qc: 'quote currency',
                state: 'symbol status. unknown，not-online，pre-online，online，suspend，offline，transfer-board，fuse',
                ve: 'visible',
                we: 'white enabled',
                dl: 'delist',
                cd: 'country disabled',
                te: 'trade enabled',
                ce: 'cancel enabled',
                tet: 'trade enable timestamp',
                toa: 'the time trade open at',
                tca: 'the time trade close at',
                voa: 'visible open at',
                vca: 'visible close at',
                sp: 'symbol partition',
                tm: 'symbol partition',
                w: 'weight sort',
                ttp: 'trade total precision',
                tap: 'trade amount precision',
                tpp: 'trade price precision',
                fp: 'fee precision',
                tags: 'Tags, multiple tags are separated by commas, such as: st, hadax',

                bcdn: 'base currency display name',
                qcdn: 'quote currency display name',
                elr: 'etp leverage ratio',
                castate: 'Not required. The state of the call auction; it will only be displayed when it is in the 1st and 2nd stage of the call auction. Enumeration values: "ca_1", "ca_2"',
                ca1oa: 'not mandatory. the open time of call auction phase 1, total milliseconds since January 1, 1970 0:0:0:00ms UTC',
                ca1ca: 'not mandatory. the close time of call auction phase 1, total milliseconds since January 1, 1970 0:0:0:00ms UTC',
                ca2oa: 'not mandatory. the open time of call auction phase 2, total milliseconds since January 1, 1970 0:0:0:00ms UTC',
                ca2ca: 'not mandatory. the close time of call auction phase 2, total milliseconds since January 1, 1970 0:0:0:00ms UTC',

                ts: 'timestamp of incremental data',
                full: 'full data flag: 0 for no and 1 for yes',
                'err-code': 'error code(returned when the interface reports an error)',
                'err-msg': 'error msg(returned when the interface reports an error)',
            },
            sample_response: '{\n' +
                '    "status":"ok",\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "symbol":"agldusdt",\n' +
                '            "tags":"",\n' +
                '            "state":"online",\n' +
                '            "bcdn":"AGLD",\n' +
                '            "qcdn":"USDT",\n' +
                '            "elr":null,\n' +
                '            "tm":"PRO",\n' +
                '            "sn":"AGLD/USDT",\n' +
                '            "ve":true,\n' +
                '            "dl":false,\n' +
                '            "te":true,\n' +
                '            "ce":true,\n' +
                '            "cd":false,\n' +
                '            "tet":1630668600000,\n' +
                '            "we":false,\n' +
                '            "toa":1630668600000,\n' +
                '            "tca":1893470400000,\n' +
                '            "voa":1630666800000,\n' +
                '            "vca":1893470400000,\n' +
                '            "bc":"agld",\n' +
                '            "qc":"usdt",\n' +
                '            "sp":"innovation",\n' +
                '            "d":null,\n' +
                '            "tpp":4,\n' +
                '            "tap":4,\n' +
                '            "fp":8,\n' +
                '            "w":950000000,\n' +
                '            "ttp":8\n' +
                '        }\n' +
                '    ],\n' +
                '    "ts":"1641880066563",\n' +
                '    "full":1\n' +
                '}'
        },
        "Get Market Symbols Settings": {
            url: '/v1/settings/common/market-symbols',
            go_down_1_level: true,
            params: {
                ts: {type: number, description: 'UNIX timestamp to get incremental data'},
                symbols: {type: string, description: 'symbols. NA means all symbols, multiple symbols separated with comma'}
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
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-market-symbols-setting',
            description: 'Get Market Symbols Settings',
            response_attributes: {
                status: 'status',

                symbol: 'symbol(outside)',
                bc: 'base currency',
                qc: 'quote currency',
                state: 'symbol status. unknown，not-online，pre-online，online，suspend，offline，transfer-board，fuse',
                sp: 'symbol partition',
                tags: 'Tags, multiple tags are separated by commas, such as: st, hadax',
                lr: 'leverage ratio of margin symbol, provided by Global',
                smlr: 'leverage ratio of super-margin symbol, provided by Global',
                pp: 'price precision',
                ap: 'amount precision',
                vp: 'value precision',
                minoa: 'min order amount',
                maxoa: 'max order amount',
                minov: 'min order value',
                lominoa: 'min amount of limit price order',
                lomaxoa: 'max amount of limit price order',
                lomaxba: 'max amount of limit price buy order',
                lomaxsa: 'max amount of limit price sell order',
                smminoa: 'min amount of market price sell order',
                smmaxoa: 'max amount of market price sell order',
                bmmaxov: 'max amount of market price buy order',
                blmlt: 'Buy limit must less than',
                slmgt: 'Sell limit must greater than',
                msormlt: 'Market sell order rate must less than',
                mbormlt: 'Market buy order rate must less than',
                at: 'trading by api interface',
                u: 'ETP: symbol',

                ct: 'charge time(unix time in millisecond, just for symbols of ETP)',
                rt: 'rebal time(unix time in millisecond, just for symbols of ETP)',
                rthr: 'rebal threshold(just for symbols of ETP)',
                in: 'ETP: init nav',
                maxov: 'max value of market price order',
                flr: 'C2C: funding leverage ratio',
                castate: 'not mandatory. The state of the call auction; it will only be displayed when it is in the 1st and 2nd stage of the call auction. Enumeration values: "ca_1", "ca_2"',

                ts: 'timestamp of incremental data',
                full: 'full data flag: 0 for no and 1 for yes',
                'err-code': 'error code(returned when the interface reports an error)',
                'err-msg': 'error msg(returned when the interface reports an error)',
            },
            sample_response: '{\n' +
                '    "status": "ok",\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "symbol": "btcusdt",\n' +
                '            "state": "online",\n' +
                '            "bc": "btc",\n' +
                '            "qc": "usdt",\n' +
                '            "pp": 2,\n' +
                '            "ap": 6,\n' +
                '            "sp": "main",\n' +
                '            "vp": 8,\n' +
                '            "minoa": 0.0001,\n' +
                '            "maxoa": 1000,\n' +
                '            "minov": 5,\n' +
                '            "lominoa": 0.0001,\n' +
                '            "lomaxoa": 1000,\n' +
                '            "lomaxba": 1000,\n' +
                '            "lomaxsa": 1000,\n' +
                '            "smminoa": 0.0001,\n' +
                '            "smmaxoa": 100,\n' +
                '            "bmmaxov": 1000000,\n' +
                '            "lr": 5,\n' +
                '            "smlr": 3,\n' +
                '            "flr": 3,\n' +
                '            "at": "enabled",\n' +
                '            "tags": "activities"\n' +
                '        }\n' +
                '    ],\n' +
                '    "ts": "1641880897191",\n' +
                '    "full": 1\n' +
                '}'
        },
        "Get Chain Information": {
            url: '/v1/settings/common/chains',
            params: {
                ts: {type: number, description: 'UNIX timestamp to get incremental data'},
                currency: {type: string},
                'show-desc': {description: 'show desc, 0: no, 1: all, 2: suspend deposit/withdrawal and chain exchange', possible: [0,1,2]}
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
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-chains-information',
            description: 'Get Chains Information',
            response_attributes:{
                'status': 'status',

                'adt': 'has addr deposit tag',
                'ac': 'address of chain',
                'ao': 'addr oneoff',
                'awt': 'addr with tag',
                'chain': 'chain name',
                'ct': 'chain type. plain, live, old, new, legal, tooold',
                'code': 'obsolete, please to use chain',
                'currency': 'currency',
                'deposit-desc': 'deposit desc',
                'de': 'deposit enable',
                'dma': 'deposit-min-amount, if the amount is less than this amount will be: 1. The small amount will exceed the deposit-min-amount and then be credited 2. The small amount will not be accumulated and will never be credited to the account',
                'deposit-tips-desc': 'deposit tips desc',
                'dn': 'display name, general be upper',
                'fc': 'fast-confirms, when height of the exchange node to that chain tail is greater than this number, the deposit and withdrawal will be not settled to the user account, this deposit order is regarded as an unsafe deposit, and the available amount in the withdrawal and account transfer must be excluded that amount from this order.',
                'ft': 'fee type',
                'default': 'is default',
                'replace-chain-info-desc': 'replace chain info desc',
                'replace-chain-notification-desc': 'replace chain notification desc',
                'replace-chain-popup-desc': 'replace chain popup desc',
                'sc': "safe confirms, When the distance between the height of the current exchange's chain node and the chain tail is greater than this number, the asset management DW will mark this order as a safe deposit, and it will be regarded as the available amount when withdrawing and transferring funds.",
                'sda': 'suspend deposit announcement',
                'suspend-deposit-desc': 'suspend deposit desc',
                'swa': 'suspend withdraw announcement',
                'suspend-withdraw-desc': 'suspend withdraw desc',
                'v': 'visible',
                'withdraw-desc': 'withdraw desc',
                'we': 'withdraw enable',
                'wma': 'withdraw min amount, refused to withdraw if less than this amount',
                'wp': 'withdraw precision, refused to withdraw if greater than this amount',

                'withdraw-tips-desc': 'withdraw tips desc',
                'suspend-visible-desc': 'suspend visible desc',

                'ts': 'timestamp of incremental data',
                'full': 'full data flag: 0 for no and 1 for yes',
                'err-code': 'error code(returned when the interface reports an error)',
                'err-msg': 'error msg(returned when the interface reports an error)',
            },
            sample_response: '{\n' +
                '    "status": "ok",\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "chain": "hrc20nft",\n' +
                '            "currency": "nft",\n' +
                '            "code": "hrc20nft",\n' +
                '            "ct": "live",\n' +
                '            "ac": "eth",\n' +
                '            "default": 0,\n' +
                '            "dma": "160298",\n' +
                '            "wma": "160298",\n' +
                '            "de": true,\n' +
                '            "we": true,\n' +
                '            "wp": 6,\n' +
                '            "ft": "eth",\n' +
                '            "dn": "HECO",\n' +
                '            "fn": "",\n' +
                '            "awt": false,\n' +
                '            "adt": false,\n' +
                '            "ao": false,\n' +
                '            "fc": 10,\n' +
                '            "sc": 20,\n' +
                '            "v": true,\n' +
                '            "sda": "",\n' +
                '            "swa": "",\n' +
                '            "deposit-tips-desc": "Minimum deposit amount:160298\\nAny deposits less than the minimum amount will not be credited or refunded.",\n' +
                '            "withdraw-desc": "Minimum withdrawal amount: 160298 NFT(HECO). !>_<!To ensure the safety of your funds, your withdrawal request will be manually reviewed if your security strategy or password is changed. Please wait for phone calls or emails from our staff.!>_<!Please make sure that your computer and browser are secure and your information is protected from being tampered or leaked.",\n' +
                '            "suspend-deposit-desc": "",\n' +
                '            "suspend-withdraw-desc": "",\n' +
                '            "replace-chain-info-desc": "",\n' +
                '            "replace-chain-notification-desc": "",\n' +
                '            "replace-chain-popup-desc": ""\n' +
                '        }\n' +
                '    ],\n' +
                '    "ts": "1641880897191",\n' +
                '    "full": 1\n' +
                '}'
        },
        "Get Currency and Chains": {
            url: '/v2/reference/currencies',
            params: {
                currency: {type: string, description: 'btc, ltc, bch, eth, etc ...(available currencies in Huobi Global)'},
            },
            go_down_1_level: true,
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#apiv2-currency-amp-chains',
            description: 'Query static reference information for each currency, as well as its corresponding chain(s).',
            sample_response: '{\n' +
                '    "code":200,\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "chains":[\n' +
                '                {\n' +
                '                    "chain":"trc20usdt",\n' +
                '                    "displayName":"",\n' +
                '                    "baseChain": "TRX",\n' +
                '                    "baseChainProtocol": "TRC20",\n' +
                '                    "isDynamic": false,\n' +
                '                    "depositStatus":"allowed",\n' +
                '                    "maxTransactFeeWithdraw":"1.00000000",\n' +
                '                    "maxWithdrawAmt":"280000.00000000",\n' +
                '                    "minDepositAmt":"100",\n' +
                '                    "minTransactFeeWithdraw":"0.10000000",\n' +
                '                    "minWithdrawAmt":"0.01",\n' +
                '                    "numOfConfirmations":999,\n' +
                '                    "numOfFastConfirmations":999,\n' +
                '                    "withdrawFeeType":"circulated",\n' +
                '                    "withdrawPrecision":5,\n' +
                '                    "withdrawQuotaPerDay":"280000.00000000",\n' +
                '                    "withdrawQuotaPerYear":"2800000.00000000",\n' +
                '                    "withdrawQuotaTotal":"2800000.00000000",\n' +
                '                    "withdrawStatus":"allowed"\n' +
                '                }\n' +
                '            ],\n' +
                '            "currency":"usdt",\n' +
                '            "instStatus":"normal"\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Candlesticks": {
            url: '/market/history/kline',
            go_down_1_level: true,
            params: {
                period: {required: true, description: 'The period of each candle', possible: ['1min', '5min', '15min', '30min', '60min', '4hour', '1day', '1mon', '1week', '1year']},
                symbol: {required: true, description: 'A supported trading symbol, e.g. btcusdt, bccbtcn (to retrieve candlesticks for ETP NAV, symbol = ETP trading symbol + suffix \'nav\'，for example: btc3lusdtnav)'},
                size: {description: 'The number of data returns. Can be from 1 to 2000', type: number, default: 150}
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-klines-candles',
            description: 'This endpoint retrieves all klines in a specific range.',
            sample_response: '{\n' +
                '    "ch": "market.btcusdt.kline.5min",\n' +
                '    "status": "ok",\n' +
                '    "ts": 1629769247172,\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "id": 1629769200,\n' +
                '            "open": 49056.37,\n' +
                '            "close": 49025.51,\n' +
                '            "low": 49022.86,\n' +
                '            "high": 49056.38,\n' +
                '            "amount": 3.946281917950917,\n' +
                '            "vol": 193489.67275732,\n' +
                '            "count": 196\n' +
                '        },\n' +
                '        {\n' +
                '            "id": 1629768900,\n' +
                '            "open": 48994.61,\n' +
                '            "close": 49056.37,\n' +
                '            "low": 48966.72,\n' +
                '            "high": 49072.46,\n' +
                '            "amount": 30.72223099519689,\n' +
                '            "vol": 1505870.732227976,\n' +
                '            "count": 1504\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Latest Aggregated Ticker": {
            url: '/market/detail/merged',
            params: {
                symbol: {required: true, description: 'A supported trading symbol, e.g. btcusdt, bccbtc'},
            },
            go_down_1_level: true,
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-latest-aggregated-ticker',
            description: 'This endpoint retrieves the latest ticker with some important 24h aggregated market data.',
            sample_response: '{\n' +
                '    "ch": "market.btcusdt.detail.merged",\n' +
                '    "status": "ok",\n' +
                '    "ts": 1629788763750,\n' +
                '    "tick": {\n' +
                '        "id": 272156789143,\n' +
                '        "version": 272156789143,\n' +
                '        "open": 50080.0,\n' +
                '        "close": 49820.92,\n' +
                '        "low": 48767.0,\n' +
                '        "high": 50500.0,\n' +
                '        "amount": 12055.365781937457,\n' +
                '        "vol": 5.985618685709001E8,\n' +
                '        "count": 420573,\n' +
                '        "bid": [\n' +
                '            49819.48,\n' +
                '            2.58112\n' +
                '        ],\n' +
                '        "ask": [\n' +
                '            49819.49,\n' +
                '            0.002411\n' +
                '        ]\n' +
                '    }\n' +
                '}'
        },
        "Get Latest Tickers for All Pairs": {
            url: '/market/tickers',
            go_down_1_level: true,
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-latest-tickers-for-all-pairs',
            description: 'This endpoint retrieves the latest tickers for all supported pairs.',
            sample_response: '{\n' +
                '    "status":"ok",\n' +
                '    "ts":1629789355531,\n' +
                '    "data":[\n' +
                '        {\n' +
                '            "symbol":"smtusdt",\n' +
                '            "open":0.004659,     \n' +
                '            "high":0.004696,     \n' +
                '            "low":0.0046,        \n' +
                '            "close":0.00468,     \n' +
                '            "amount":36551302.17544405,\n' +
                '            "vol":170526.0643855023,\n' +
                '            "count":1709,\n' +
                '            "bid":0.004651,\n' +
                '            "bidSize":54300.341,\n' +
                '            "ask":0.004679,\n' +
                '            "askSize":1923.4879\n' +
                '        },\n' +
                '        {\n' +
                '            "symbol":"ltcht",\n' +
                '            "open":12.795626,\n' +
                '            "high":12.918053,\n' +
                '            "low":12.568926,\n' +
                '            "close":12.918053,\n' +
                '            "amount":1131.801675005825,\n' +
                '            "vol":14506.9381937385,\n' +
                '            "count":923,\n' +
                '            "bid":12.912687,\n' +
                '            "bidSize":0.1068,\n' +
                '            "ask":12.927032,\n' +
                '            "askSize":5.3228\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Market Depth": {
            url: '/market/depth',
            go_down_1_level: true,
            params: {
                depth: {description: 'The number of market depth to return on each side', possible: [5, 10, 20], default: 20},
                symbol: {required: true, description: 'The trading symbol to query'},
                type: {default: 'step0', description: 'Market depth aggregation level, details below', possible: ['step0', 'step1', 'step2', 'step3', 'step4', 'step5']}
            },
            specialHandleFunction: (data) => {
                var ask = data.tick.asks
                var bids = data.tick.bids
                var res = [['ask_price', 'ask_size', 'bids_price', 'bids_size']]
                for(var i=0;i<Math.min(ask.length, bids.length); i++){
                    res.push([ask[i][0], ask[i][1], bids[i][0], bids[i][1]])
                }
                return res
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-market-depth',
            description: 'This endpoint retrieves the current order book of a specific pair.',
            sample_response: '{\n' +
                '    "ch": "market.btcusdt.depth.step0",\n' +
                '    "status": "ok",\n' +
                '    "ts": 1629790438801,\n' +
                '    "tick": {\n' +
                '        "ts": 1629790438215,\n' +
                '        "version": 136107114472,\n' +
                '        "bids": [\n' +
                '            [\n' +
                '                49790.87,  // price\n' +
                '                0.779876   // size\n' +
                '            ],\n' +
                '            [\n' +
                '                49785.9,\n' +
                '                1.82E-4\n' +
                '            ]\n' +
                '        ],\n' +
                '        "asks": [\n' +
                '            [\n' +
                '                49790.88, // price\n' +
                '                2.980472 // size \n' +
                '            ],\n' +
                '            [\n' +
                '                49790.89,\n' +
                '                0.006613\n' +
                '            ]\n' +
                '        ]\n' +
                '    }\n' +
                '}'
        },
        "Get Last Trade": {
            url: '/market/trade',
            params: {
                symbol: {required: true, description: 'The trading symbol to query'},
            },
            go_down_1_level: true,
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-the-last-trade',
            description: 'This endpoint retrieves the latest trade with its price, volume, and direction.',
            sample_response: '{\n' +
                '    "ch": "market.btcusdt.trade.detail",\n' +
                '    "status": "ok",\n' +
                '    "ts": 1629792192037,\n' +
                '    "tick": {\n' +
                '        "id": 136107843051,\n' +
                '        "ts": 1629792191928,\n' +
                '        "data": [\n' +
                '            {\n' +
                '                "id": 136107843051348400221001656,\n' +
                '                "ts": 1629792191928,\n' +
                '                "trade-id": 102517374388,\n' +
                '                "amount": 0.028416,\n' +
                '                "price": 49806.0,\n' +
                '                "direction": "buy"\n' +
                '            },\n' +
                '            {\n' +
                '                "id": 136107843051348400229813302,\n' +
                '                "ts": 1629792191928,\n' +
                '                "trade-id": 102517374387,\n' +
                '                "amount": 0.025794,\n' +
                '                "price": 49806.0,\n' +
                '                "direction": "buy"\n' +
                '            }\n' +
                '        ]\n' +
                '    }\n' +
                '}'
        },
        "Get Recent Trades": {
            url: '/market/history/trade',
            go_down_1_level: true,
            params: {
                symbol: {required: true, description: 'The trading symbol to query'},
                size: {type: 'number', description: 'The number of data returns', default: 1}
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-the-most-recent-trades',
            description: 'This endpoint retrieves the most recent trades with their price, volume, and direction.',
            sample_response: '{\n' +
                '    "ch": "market.btcusdt.trade.detail",\n' +
                '    "status": "ok",\n' +
                '    "ts": 1629793657842,\n' +
                '    "data": [\n' +
                '        {\n' +
                '            "id": 136108764379,\n' +
                '            "ts": 1629793656939,\n' +
                '            "data": [\n' +
                '                {\n' +
                '                    "id": 136108764379348400430265987,\n' +
                '                    "ts": 1629793656939,\n' +
                '                    "trade-id": 102517381182,\n' +
                '                    "amount": 1.24E-4,\n' +
                '                    "price": 49656.4,\n' +
                '                    "direction": "buy"\n' +
                '                }\n' +
                '            ]\n' +
                '        },\n' +
                '        {\n' +
                '            "id": 136108763320,\n' +
                '            "ts": 1629793656198,\n' +
                '            "data": [\n' +
                '                {\n' +
                '                    "id": 136108763320348400439066863,\n' +
                '                    "ts": 1629793656198,\n' +
                '                    "trade-id": 102517381181,\n' +
                '                    "amount": 0.01125,\n' +
                '                    "price": 49655.0,\n' +
                '                    "direction": "buy"\n' +
                '                },\n' +
                '                {\n' +
                '                    "id": 136108763320348400429773626,\n' +
                '                    "ts": 1629793656198,\n' +
                '                    "trade-id": 102517381180,\n' +
                '                    "amount": 8.3E-4,\n' +
                '                    "price": 49651.35,\n' +
                '                    "direction": "buy"\n' +
                '                }\n' +
                '            ]\n' +
                '        }\n' +
                '    ]\n' +
                '}'
        },
        "Get Last 24h Market Summary": {
            url: '/market/detail/',
            go_down_1_level: true,
            params: {
                symbol: {required: true, description: 'The trading symbol to query'},
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-the-last-24h-market-summary',
            description: 'This endpoint retrieves the summary of trading in the market for the last 24 hours.',
            sample_response: '{\n' +
                '    "ch": "market.btcusdt.detail",\n' +
                '    "status": "ok",\n' +
                '    "ts": 1629795484817,\n' +
                '    "tick": {\n' +
                '        "id": 272164011416,\n' +
                '        "low": 48767.0,\n' +
                '        "high": 50500.0,\n' +
                '        "open": 50266.89,\n' +
                '        "close": 49728.71,\n' +
                '        "vol": 6.010379336834868E8,\n' +
                '        "amount": 12110.642402972368,\n' +
                '        "version": 272164011416,\n' +
                '        "count": 420452\n' +
                '    }\n' +
                '}'
        },

        "Get Real Time NAV": {
            url: '/market/etp',
            go_down_1_level: true,
            params: {
                symbol: {required: true, description: 'ETP trading symbol'},
            },
            doc_url: 'https://huobiapi.github.io/docs/spot/v1/en/#get-real-time-nav',
            description: 'This endpoint returns real time NAV for ETP.',
            sample_response: '{\n' +
                '    "ch":"market.btc3lusdt.etp",\n' +
                '    "status":"ok",\n' +
                '    "ts":1597890198849,\n' +
                '    "tick":{\n' +
                '        "actualLeverage":2.988538205272293,\n' +
                '        "nav":17.463067985747816,\n' +
                '        "outstanding":98338.57818006596,\n' +
                '        "symbol":"btc3lusdt",\n' +
                '        "navTime":1597890198525,\n' +
                '        "basket":[\n' +
                '            {\n' +
                '                "amount":0.004438693860243208,\n' +
                '                "currency":"btc"\n' +
                '            },\n' +
                '            {\n' +
                '                "amount":-34.725977870927,\n' +
                '                "currency":"usdt"\n' +
                '            }\n' +
                '        ]\n' +
                '    }\n' +
                '}'
        },
    },

    Bitmex: {
        "base_url": "https://www.bitmex.com/api/v1",
        "provider_description": 'BitMEX is a cryptocurrency exchange and derivative trading platform. It is owned and operated by HDR Global Trading Limited, which is registered in the Seychelles.',
        "doc_url": 'https://www.bitmex.com/api/explorer/#/',
        "logo_url": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/lsys93ej83czbxinnwp6",

        "Swap Funding History": {
            url: '/funding',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual'},
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'true', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Funding/Funding_get',
            description: 'Get funding history' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "timestamp": "2022-03-03T14:45:37.373Z",\n' +
                '    "symbol": "string",\n' +
                '    "fundingInterval": "2022-03-03T14:45:37.373Z",\n' +
                '    "fundingRate": 0,\n' +
                '    "fundingRateDaily": 0\n' +
                '  }\n' +
                ']'
        },
        "All Instruments": {
            url: '/instrument',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual'},
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},

            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Instrument/Instrument_get',
            description: 'This returns all instruments and indices, including those that have settled or are unlisted. Use this endpoint if you want to query for individual instruments or use a complex filter' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "rootSymbol": "string",\n' +
                '    "state": "string",\n' +
                '    "typ": "string",\n' +
                '    "listing": "2022-03-03T14:45:37.378Z",\n' +
                '    "front": "2022-03-03T14:45:37.378Z",\n' +
                '    ...\n' +
                '    "markMethod": "string",\n' +
                '    "markPrice": 0,\n' +
                '    "indicativeTaxRate": 0,\n' +
                '    "indicativeSettlePrice": 0,\n' +
                '    "optionUnderlyingPrice": 0,\n' +
                '    "settledPriceAdjustmentRate": 0,\n' +
                '    "settledPrice": 0,\n' +
                '    "timestamp": "2022-03-03T14:45:37.378Z"\n' +
                '  }\n' +
                ']'
        },
        "Active or Expired <24h Instruments": {
            url: '/instrument/active',
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Instrument/Instrument_getActive',
            description: 'Get all active instruments and instruments that have expired in <24hrs' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "rootSymbol": "string",\n' +
                '    "state": "string",\n' +
                '    "typ": "string",\n' +
                '    "listing": "2022-03-03T14:45:37.378Z",\n' +
                '    "front": "2022-03-03T14:45:37.378Z",\n' +
                '    ...\n' +
                '    "markMethod": "string",\n' +
                '    "markPrice": 0,\n' +
                '    "indicativeTaxRate": 0,\n' +
                '    "indicativeSettlePrice": 0,\n' +
                '    "optionUnderlyingPrice": 0,\n' +
                '    "settledPriceAdjustmentRate": 0,\n' +
                '    "settledPrice": 0,\n' +
                '    "timestamp": "2022-03-03T14:45:37.378Z"\n' +
                '  }\n' +
                ']'
        },
        "All Active Contract Series and Interval Pairs": {
            url: '/instrument/activeIntervals',
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Instrument/Instrument_getActiveIntervals',
            description: 'This endpoint is useful for determining which pairs are live. It returns two arrays of strings. The first is intervals, such as ["XBT:perpetual", "XBT:quarterly", "XBT:biquarterly", "ETH:quarterly", ...]. These identifiers are usable in any query\'s symbol param. The second array is the current resolution of these intervals. Results are mapped at the same index.' ,
            sample_response: '{\n' +
                '  "intervals": [\n' +
                '    "string"\n' +
                '  ],\n' +
                '  "symbols": [\n' +
                '    "string"\n' +
                '  ]\n' +
                '}'
        },
        "Composite Index": {
            url: '/instrument/compositeIndex',
            params: {
                symbol: {description: 'The composite index symbol.', required: true},
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},

            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Instrument/Instrument_getCompositeIndex',
            description: 'Composite indices are built from multiple external price sources.\n' +
                '\n' +
                'Use this endpoint to get the underlying prices of an index. For example, send a symbol of .BXBT to get the ticks and weights of the constituent exchanges that build the ".BXBT" index.\n' +
                '\n' +
                'A tick with reference "BMI" and weight null is the composite index tick.' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "timestamp": "2022-03-03T14:45:37.397Z",\n' +
                '    "symbol": "string",\n' +
                '    "indexSymbol": "string",\n' +
                '    "indexMultiplier": 0,\n' +
                '    "reference": "string",\n' +
                '    "lastPrice": 0,\n' +
                '    "sourcePrice": 0,\n' +
                '    "conversionIndex": "string",\n' +
                '    "conversionIndexPrice": 0,\n' +
                '    "weight": 0,\n' +
                '    "logged": "2022-03-03T14:45:37.397Z"\n' +
                '  }\n' +
                ']'
        },
        "All Price Indices": {
            url: '/instrument/indices',
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Instrument/Instrument_getIndices',
            description: 'Get all price indices' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "rootSymbol": "string",\n' +
                '    "state": "string",\n' +
                '    "typ": "string",\n' +
                '    "listing": "2022-03-03T14:45:37.400Z",\n' +
                '    "front": "2022-03-03T14:45:37.400Z",\n' +
                '    "expiry": "2022-03-03T14:45:37.400Z",\n' +
                '    "settle": "2022-03-03T14:45:37.400Z",\n' +
                '    "listedSettle": "2022-03-03T14:45:37.400Z",\n' +
                '    "relistInterval": "2022-03-03T14:45:37.400Z",\n' +
                '    "inverseLeg": "string",\n' +
                '    "sellLeg": "string",\n' +
                '    ...\n' +
                '    "fairPrice": 0,\n' +
                '    "markMethod": "string",\n' +
                '    "markPrice": 0,\n' +
                '    "indicativeTaxRate": 0,\n' +
                '    "indicativeSettlePrice": 0,\n' +
                '    "optionUnderlyingPrice": 0,\n' +
                '    "settledPriceAdjustmentRate": 0,\n' +
                '    "settledPrice": 0,\n' +
                '    "timestamp": "2022-03-03T14:45:37.400Z"\n' +
                '  }\n' +
                ']'
        },
        "Summary of Exchange Statistics in USD": {
            url: '/instrument/usdVolume',
            params: {
                symbol: {description: 'Filter by symbol.'}
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Instrument/Instrument_getUsdVolume',
            description: 'Get a summary of exchange statistics in USD' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "string",\n' +
                '    "currency": "string",\n' +
                '    "turnover24h": 0,\n' +
                '    "turnover30d": 0,\n' +
                '    "turnover365d": 0,\n' +
                '    "turnover": 0\n' +
                '  }\n' +
                ']'
        },
        "Insurance Fund Data": {
            url: '/insurance',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual'},
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Insurance/Insurance_get',
            description: 'Get insurance fund history.' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "currency": "string",\n' +
                '    "timestamp": "2022-03-03T14:45:37.407Z",\n' +
                '    "walletBalance": 0\n' +
                '  }\n' +
                ']'
        },
        "Active Liquidations": {
            url: '/liquidation',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual'},
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Liquidation/Liquidation_get',
            description: 'Get liquidation orders.' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "id": 0\n' +
                '  }\n' +
                ']'
        },
        "Book Order": {
            url: '/orderBook/L2',
            params: {
                symbol: {required: true, description: 'Instrument symbol. Send a series (e.g. XBT) to get data for the nearest contract in that series.'},
                depth:{type: 'number', description: 'Orderbook depth per side. Send 0 for full depth.', default: 25},

            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/OrderBook/OrderBook_getL2',
            description: 'Get current orderbook in vertical format' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "id": 0\n' +
                '  }\n' +
                ']'
        },
        "Quotes": {
            url: '/quote',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual', },
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Quote/Quote_get',
            description: 'Get quotes' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "timestamp": "2022-03-03T14:45:37.500Z",\n' +
                '    "symbol": "string",\n' +
                '    "bidSize": 0,\n' +
                '    "bidPrice": 0,\n' +
                '    "askPrice": 0,\n' +
                '    "askSize": 0\n' +
                '  }\n' +
                ']'
        },
        "Previous Quotes in Time Buckets": {
            url: '/quote/bucketed',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual', },
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
                binSize: {required: true, description: 'Time interval to bucket by', possible: ['1m','5m','1h','1d']},
                partial: {description: 'If true, will send in-progress (incomplete) bins for the current time period.', possible: ['true', 'false'], default: 'false'}
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Quote/Quote_getBucketed',
            description: 'Get previous quotes in time buckets' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "timestamp": "2022-03-03T14:45:37.503Z",\n' +
                '    "symbol": "string",\n' +
                '    "bidSize": 0,\n' +
                '    "bidPrice": 0,\n' +
                '    "askPrice": 0,\n' +
                '    "askSize": 0\n' +
                '  }\n' +
                ']'
        },
        "Historical Settlement Data": {
            url: '/settlement',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual', },
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Settlement/Settlement_get',
            description: 'Get settlement history' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "id": 0\n' +
                '  }\n' +
                ']'
        },
        "Exchange Statistics": {
            url: '/stats',
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Stats/Stats_get',
            description: 'Get exchange-wide and per-series turnover and volume statistics.' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "rootSymbol": "string",\n' +
                '    "currency": "string",\n' +
                '    "volume24h": 0,\n' +
                '    "turnover24h": 0,\n' +
                '    "openInterest": 0,\n' +
                '    "openValue": 0\n' +
                '  }\n' +
                ']'
        },
        "Historical Exchange Statistics": {
            url: '/stats/history',
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Stats/Stats_history',
            description: 'Get historical exchange-wide and per-series turnover and volume statistics' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "date": "2022-03-03T14:45:37.518Z",\n' +
                '    "rootSymbol": "string",\n' +
                '    "currency": "string",\n' +
                '    "volume": 0,\n' +
                '    "turnover": 0\n' +
                '  }\n' +
                ']'
        },
        "All Trades": {
            url: '/trade',
            params: {
                symbol: {description: 'Instrument symbol. Send a bare series (e.g. XBT) to get data for the nearest expiring contract in that series.\n' +
                        'You can also send a timeframe, e.g. XBT:quarterly. Timeframes are nearest, daily, weekly, monthly, quarterly, biquarterly, and perpetual', },
                count:{type: 'number', description: 'Number of results to fetch. Must be a positive integer.', default: 100},
                reverse: {default: 'false', description: 'If true, will sort results newest first.', possible: ['true', 'false']},
                startTime: {type: string, description: 'Starting date filter for results. (e.g. 2014-12-26 11:00)'},
                endTime: {type: string, description: 'Ending date filter for results. (e.g. 2014-12-26 11:00)'},
            },
            doc_url: 'https://www.bitmex.com/api/explorer/#!/Trade/Trade_get',
            description: 'Get trades. Please note that indices (symbols starting with .) post trades at intervals to the trade feed. These have a size of 0 and are used only to indicate a changing price.' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "timestamp": "2022-03-03T14:45:37.525Z",\n' +
                '    "symbol": "string",\n' +
                '    "side": "string",\n' +
                '    "size": 0,\n' +
                '    "price": 0,\n' +
                '    "tickDirection": "string",\n' +
                '    "trdMatchID": "string",\n' +
                '    "grossValue": 0,\n' +
                '    "homeNotional": 0,\n' +
                '    "foreignNotional": 0\n' +
                '  }\n' +
                ']'
        },
    },
    '0xAPI': {
        "doc_url": 'https://docs.0x.org/introduction/welcome',
        'provider_description': '0x is important infrastructure for the emerging crypto economy and enables markets to be created that couldn\'t have existed before. As more assets become tokenized, public blockchains provide the opportunity to establish a new financial stack that is more efficient, transparent, and equitable than any system in the past.',
        "base_url": "https://api.0x.org",
        "logo_url": 'https://avatars.githubusercontent.com/u/24832717?s=200&v=4',
        "Get Swap Quote": {
            url: '/swap/v1/quote',
            doc_url: 'https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-quote',
            description:  'Get an easy-to-consume quote for buying or selling any token. The return format is a valid unsigned Ethereum transaction and can be submitted directly to an Ethereum node to complete the swap. For transactions where the sellToken is not ETH, you will have to set your allowances. Either a sellAmount or buyAmount is required.',
            params: {
                sellToken: {required: true, description:'The ERC20 token address or symbol of the token you want to send. "ETH" can be provided as a valid sellToken.'},
                buyToken: {required: true, description:'The ERC20 token address or symbol of the token you want to receive. "ETH" can be provided as a valid buyToken'},
                sellAmount: {type: 'number', description:'(Optional) The amount of sellToken (in sellToken base units) you want to send.'},
                buyAmount: {type: 'number',description:'(Optional) The amount of buyToken (in buyToken base units) you want to receive.'},
                slippagePercentage: {type: 'number',description:'(Optional) The maximum acceptable slippage of the buyToken amount if sellAmount is provided, the maximum acceptable slippage of the sellAmount amount if buyAmount is provided. E.g 0.03 for 3% slippage allowed.'},
                gasPrice: {type: 'number',description:'(Optional, defaults to ethgasstation "fast") The target gas price (in wei) for the swap transaction. If the price is too low to achieve the quote, an error will be returned.'},
                takerAddress: {description:'(Optional) The address which will fill the quote. When provided the gas will be estimated and returned and the entire transaction will be validated for success. If the validation fails a Revert Error will be returned in the response.'},
                excludedSources: {description:'(Optional) Liquidity sources (Uniswap, SushiSwap, 0x, Curve etc) that will not be included in the provided quote. Ex: excludedSources=Uniswap,SushiSwap,Curve.'},
                includedSources: {description:'(Optional) For now only supports RFQT, which should be used when the integrator only wants RFQT liquidity without any other DEX orders. Requires a particular agreement with the 0x integrations team. This parameter cannot be combined with excludedSources.'},
                skipValidation: {possible: ['true', 'false'],description:'(Optional) Normally, whenever a takerAddress is provided, the API will validate the quote for the user. When this parameter is set to true, that validation will be skipped. See also here.'},
                intentOnFilling: {description:'(Optional) Used to enable RFQ-T liquidity. '},
                feeRecipient: {description:'(Optional) The ETH address that should receive affiliate fees specified with buyTokenPercentageFee.'},
                buyTokenPercentageFee: {type: 'number',description:'(Optional) The percentage (between 0 - 1.0) of the buyAmount that should be attributed to feeRecipient as affiliate fees. Note that this requires that the feeRecipient parameter is also specified in the request.'},
                affiliateAddress: {description:'(Optional) An ETH address for which to attribute the trade for tracking and analytics purposes. Note affiliateAddress is only for tracking trades and has no impact on affiliate fees, for affiliate fees use feeRecipient.'},
            },
            response_attributes: {
                'price': `If buyAmount was specified in the request it provides the price of buyToken in sellToken and vice versa. This price does not include the slippage provided in the request above, and therefore represents the best possible price.`,
                'guaranteedPrice': `The price which must be met or else the entire transaction will revert. This price is influenced by the slippagePercentage parameter. On-chain sources may encounter price movements from quote to settlement.`,
                'to': `The address of the contract to send call data to.`,
                'data': `The call data required to be sent to the to contract address.`,
                'value': `The amount of ether (in wei) that should be sent with the transaction. (Assuming protocolFee is paid in ether).`,
                'gasPrice': `The gas price (in wei) that should be used to send the transaction. The transaction needs to be sent with this gasPrice or lower for the transaction to be successful.`,
                'gas': `The estimated gas limit that should be used to send the transaction to guarantee settlement. While a computed estimate is returned in all responses, an accurate estimate will only be returned if a takerAddress is included in the request.`,
                'estimatedGas': `The estimate for the amount of gas that will actually be used in the transaction. Always less than gas.`,
                'protocolFee': `The maximum amount of ether that will be paid towards the protocol fee (in wei), and what is used to compute the value field of the transaction.`,
                'minimumProtocolFee': `The minimum amount of ether that will be paid towards the protocol fee (in wei) during the transaction.`,
                'buyAmount': `The amount of buyToken (in buyToken units) that would be bought in this swap. Certain on-chain sources do not allow specifying buyAmount, when using buyAmount these sources are excluded.`,
                'sellAmount': `The amount of sellToken (in sellToken units) that would be sold in this swap. Specifying sellAmount is the recommended way to interact with 0xAPI as it covers all on-chain sources.`,
                'sources': `The percentage distribution of buyAmount or sellAmount split between each liquidity source. Ex: [{ name: '0x', proportion: "0.8" }, { name: 'Kyber', proportion: "0.2"}, ...]`,
                'buyTokenAddress': `The ERC20 token address of the token you want to receive in quote.`,
                'sellTokenAddress': `The ERC20 token address of the token you want to sell with quote.`,
                'allowanceTarget': `The target contract address for which the user needs to have an allowance in order to be able to complete the swap. For swaps with "ETH" as sellToken, wrapping "ETH" to "WETH" or unwrapping "WETH" to "ETH" no allowance is needed, a null address of 0x0000000000000000000000000000000000000000 is then returned instead.`,
            },
            sample_response: '{\n' +
                '    "price": "198.02566690042823231",\n' +
                '    "guaranteedPrice": "191.88959851561835913",\n' +
                '    "to": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",\n' +
                '    "data": "0xa6c3bf330000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000000007200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002600000000000000000000000006924a03bb710eaf199ab6ac9f2bb148215ae9b5d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000119f25fd7ebc6a400000000000000000000000000000000000000000000000000016c7d70543164aa3b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ecd420c0000000000000000000000000000000000000000000000000000017251c82bed00000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000005e0000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000000000000000000000000000000000000000000000000000000000005591360f8c7640fea5771c9682d6b5ecb776e1f80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010a4ce15149935d8a000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ecd5dc48b6ed252d3488d46ccd3297146fca393cbbc0053dd77a341c0133d612b7c4a8900000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000000000000000000000000000001c4dc1600f30000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000005591360f8c7640fea5771c9682d6b5ecb776e1f800000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000140000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ae3641dffb712e917b9dc3e6c271b6657ff39818000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000000010a4ce15149935d8a00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000421c2e80750e2e69ac0e865ae163b236fc3d22632daeb909fc10a1a8ac05e4bd1212709da900d7785a5af9b77ba76a324b744da8e66108f72e61fa927aa5e9433dca0300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010400000000000000000000000000000000000000000000000000000000000000869584cd0000000000000000000000001000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000005ecd41a5",\n' +
                '    "value": "10800000000000000",\n' +
                '    "gas": "605952",\n' +
                '    "estimatedGas": "504960",\n' +
                '    "gasPrice": "36000000000",\n' +
                '    "protocolFee": "10800000000000000",\n' +
                '    "minimumProtocolFee": "5400000000000000",\n' +
                '    "buyTokenAddress": "0x6b175474e89094c44da98b954eedeac495271d0f",\n' +
                '    "sellTokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '    "buyAmount": "19802566690042823231",\n' +
                '    "sellAmount": "100000000000000000",\n' +
                '    "estimatedGasTokenRefund": "192000",\n' +
                '    "sources": [\n' +
                '        {\n' +
                '            "name": "0x",\n' +
                '            "proportion": "1"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Uniswap",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Eth2Dai",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Kyber",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Curve",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "LiquidityProvider",\n' +
                '            "proportion": "0"\n' +
                '        }\n' +
                '    ],\n' +
                '    "allowanceTarget": "0xdef1c0ded9bec7f1a1670819833240f027b25eff"\n' +
                '}'
        },
        "Get Swap Price": {
            url: '/swap/v1/price',
            doc_url: 'https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-price',
            description:  'Nearly identical to /swap/v1/quote, but with a few key differences. Rather than returning a transaction that can be submitted to an Ethereum node, this resource simply indicates the pricing that would be available for an analogous call to /swap/v1/quote. Intended for use with RFQ-T;',
            params: {
                sellToken: {required: true,description:'The ERC20 token address or symbol of the token you want to send. "ETH" can be provided as a valid sellToken.'},
                buyToken: {required: true,description:'The ERC20 token address or symbol of the token you want to receive. "ETH" can be provided as a valid buyToken'},
                sellAmount: {type: 'number', description:'(Optional) The amount of sellToken (in sellToken base units) you want to send.'},
                buyAmount: {type: 'number',description:'(Optional) The amount of buyToken (in buyToken base units) you want to receive.'},
                slippagePercentage: {type: 'number',description:'(Optional) The maximum acceptable slippage of the buyToken amount if sellAmount is provided, the maximum acceptable slippage of the sellAmount amount if buyAmount is provided. E.g 0.03 for 3% slippage allowed.'},
                gasPrice: {type: 'number',description:'(Optional, defaults to ethgasstation "fast") The target gas price (in wei) for the swap transaction. If the price is too low to achieve the quote, an error will be returned.'},
                takerAddress: {description:'(Optional) The address which will fill the quote. When provided the gas will be estimated and returned and the entire transaction will be validated for success. If the validation fails a Revert Error will be returned in the response.'},
                excludedSources: {description:'(Optional) Liquidity sources (Uniswap, SushiSwap, 0x, Curve etc) that will not be included in the provided quote. Ex: excludedSources=Uniswap,SushiSwap,Curve.'},
                includedSources: {description:'(Optional) For now only supports RFQT, which should be used when the integrator only wants RFQT liquidity without any other DEX orders. Requires a particular agreement with the 0x integrations team. This parameter cannot be combined with excludedSources.'},
                skipValidation: {possible: ['true', 'false'],description:'(Optional) Normally, whenever a takerAddress is provided, the API will validate the quote for the user. When this parameter is set to true, that validation will be skipped. See also here.'},
                intentOnFilling: {description:'(Optional) Used to enable RFQ-T liquidity. '},
                feeRecipient: {description:'(Optional) The ETH address that should receive affiliate fees specified with buyTokenPercentageFee.'},
                buyTokenPercentageFee: {type: 'number',description:'(Optional) The percentage (between 0 - 1.0) of the buyAmount that should be attributed to feeRecipient as affiliate fees. Note that this requires that the feeRecipient parameter is also specified in the request.'},
                affiliateAddress: {description:'(Optional) An ETH address for which to attribute the trade for tracking and analytics purposes. Note affiliateAddress is only for tracking trades and has no impact on affiliate fees, for affiliate fees use feeRecipient.'},
            },
            response_attributes: {
                'price': `If buyAmount was specified in the request it provides the price of buyToken in sellToken and vice versa. This price does not include the slippage provided in the request above, and therefore represents the best possible price.`,
                'guaranteedPrice': `The price which must be met or else the entire transaction will revert. This price is influenced by the slippagePercentage parameter. On-chain sources may encounter price movements from quote to settlement.`,
                'to': `The address of the contract to send call data to.`,
                'data': `The call data required to be sent to the to contract address.`,
                'value': `The amount of ether (in wei) that should be sent with the transaction. (Assuming protocolFee is paid in ether).`,
                'gasPrice': `The gas price (in wei) that should be used to send the transaction. The transaction needs to be sent with this gasPrice or lower for the transaction to be successful.`,
                'gas': `The estimated gas limit that should be used to send the transaction to guarantee settlement. While a computed estimate is returned in all responses, an accurate estimate will only be returned if a takerAddress is included in the request.`,
                'estimatedGas': `The estimate for the amount of gas that will actually be used in the transaction. Always less than gas.`,
                'protocolFee': `The maximum amount of ether that will be paid towards the protocol fee (in wei), and what is used to compute the value field of the transaction.`,
                'minimumProtocolFee': `The minimum amount of ether that will be paid towards the protocol fee (in wei) during the transaction.`,
                'buyAmount': `The amount of buyToken (in buyToken units) that would be bought in this swap. Certain on-chain sources do not allow specifying buyAmount, when using buyAmount these sources are excluded.`,
                'sellAmount': `The amount of sellToken (in sellToken units) that would be sold in this swap. Specifying sellAmount is the recommended way to interact with 0xAPI as it covers all on-chain sources.`,
                'sources': `The percentage distribution of buyAmount or sellAmount split between each liquidity source. Ex: [{ name: '0x', proportion: "0.8" }, { name: 'Kyber', proportion: "0.2"}, ...]`,
                'buyTokenAddress': `The ERC20 token address of the token you want to receive in quote.`,
                'sellTokenAddress': `The ERC20 token address of the token you want to sell with quote.`,
                'allowanceTarget': `The target contract address for which the user needs to have an allowance in order to be able to complete the swap. For swaps with "ETH" as sellToken, wrapping "ETH" to "WETH" or unwrapping "WETH" to "ETH" no allowance is needed, a null address of 0x0000000000000000000000000000000000000000 is then returned instead.`,
            },
            sample_response: '{\n' +
                '    "price": "198.02566690042823231",\n' +
                '    "guaranteedPrice": "191.88959851561835913",\n' +
                '    "to": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",\n' +
                '    "data": "0xa6c3bf330000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000000007200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002600000000000000000000000006924a03bb710eaf199ab6ac9f2bb148215ae9b5d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000119f25fd7ebc6a400000000000000000000000000000000000000000000000000016c7d70543164aa3b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ecd420c0000000000000000000000000000000000000000000000000000017251c82bed00000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000005e0000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000024f47261b00000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000000000000000000000000000000000000000000000000000000000005591360f8c7640fea5771c9682d6b5ecb776e1f80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010a4ce15149935d8a000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005ecd5dc48b6ed252d3488d46ccd3297146fca393cbbc0053dd77a341c0133d612b7c4a8900000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000003c00000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000000000000000000000000000001c4dc1600f30000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000005591360f8c7640fea5771c9682d6b5ecb776e1f800000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000140000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000ae3641dffb712e917b9dc3e6c271b6657ff39818000000000000000000000000000000000000000000000000016345785d8a00000000000000000000000000000000000000000000000000010a4ce15149935d8a00000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000421c2e80750e2e69ac0e865ae163b236fc3d22632daeb909fc10a1a8ac05e4bd1212709da900d7785a5af9b77ba76a324b744da8e66108f72e61fa927aa5e9433dca0300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010400000000000000000000000000000000000000000000000000000000000000869584cd0000000000000000000000001000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000005ecd41a5",\n' +
                '    "value": "10800000000000000",\n' +
                '    "gas": "605952",\n' +
                '    "estimatedGas": "504960",\n' +
                '    "gasPrice": "36000000000",\n' +
                '    "protocolFee": "10800000000000000",\n' +
                '    "minimumProtocolFee": "5400000000000000",\n' +
                '    "buyTokenAddress": "0x6b175474e89094c44da98b954eedeac495271d0f",\n' +
                '    "sellTokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '    "buyAmount": "19802566690042823231",\n' +
                '    "sellAmount": "100000000000000000",\n' +
                '    "estimatedGasTokenRefund": "192000",\n' +
                '    "sources": [\n' +
                '        {\n' +
                '            "name": "0x",\n' +
                '            "proportion": "1"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Uniswap",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Eth2Dai",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Kyber",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "Curve",\n' +
                '            "proportion": "0"\n' +
                '        },\n' +
                '        {\n' +
                '            "name": "LiquidityProvider",\n' +
                '            "proportion": "0"\n' +
                '        }\n' +
                '    ],\n' +
                '    "allowanceTarget": "0xdef1c0ded9bec7f1a1670819833240f027b25eff"\n' +
                '}'
        },
        "Get Swap Sources": {
            url: '/swap/v1/sources',
            doc_url: 'https://docs.0x.org/0x-api-swap/api-references/get-swap-v1-sources',
            description:  'Returns the sources enabled for the chain.',
            response_attributes: {
                'records': `An array of Liquidity Sources.`,
            },
            sample_response: '{\n' +
                '    "records": [\n' +
                '        "0x",\n' +
                '        "Balancer",\n' +
                '        "Balancer_V2",\n' +
                '        "Bancor",\n' +
                '        "Component",\n' +
                '        "CREAM",\n' +
                '        "CryptoCom",\n' +
                '        "Curve",\n' +
                '        "Curve_V2",\n' +
                '        "DODO",\n' +
                '        "DODO_V2",\n' +
                '        "Eth2Dai",\n' +
                '        "Kyber",\n' +
                '        "KyberDMM",\n' +
                '        "Lido",\n' +
                '        "Linkswap",\n' +
                '        "LiquidityProvider",\n' +
                '        "MakerPsm",\n' +
                '        "Mooniswap",\n' +
                '        "mStable",\n' +
                '        "MultiHop",\n' +
                '        "Saddle",\n' +
                '        "Shell",\n' +
                '        "ShibaSwap",\n' +
                '        "Smoothy",\n' +
                '        "SnowSwap",\n' +
                '        "SushiSwap",\n' +
                '        "Swerve",\n' +
                '        "Uniswap",\n' +
                '        "Uniswap_V2",\n' +
                '        "Uniswap_V3",\n' +
                '        "xSigma"\n' +
                '    ]\n' +
                '}'
        },

        "Get Orderbook": {
            url: '/orderbook/v1',
            doc_url: 'https://docs.0x.org/0x-api-orderbook/api-references/get-orderbook-v1',
            description:  'Retrieves the orderbook for a given asset pair.',
            params:{
                'baseToken' : {required: true,description: `The address of makerToken or takerToken designated as the base currency in the currency pair calculation of price.`},
                'quoteToken' : {required: true,description: `The address of makerToken or takerToken designated as the quote currency in the currency pair calculation of price.`},
            },
            response_attributes: {
                'bids' :  `Paginated collection of SRA signed orders (below) where takerToken is equal to baseToken.`,

                'asks' :  `Paginated collection of SRA signed orders (below) where makerToken is equal to baseToken.`,
                'order' :  `Raw signed order.`,

                'metaData' :  `Object where optional meta-data will be included, such as the orderHash and remainingFillableTakerAmount.`,
            },
            sample_response: '"bids": {\n' +
                '        "total": 2,\n' +
                '        "page": 1,\n' +
                '        "perPage": 20,\n' +
                '        "records": [\n' +
                '            {\n' +
                '                "order": {\n' +
                '                    "signature": {\n' +
                '                        "signatureType": 3,\n' +
                '                        "r": "0xd471903a58c8af8e04606fdffef66d8dc820e8ad0bfc8da38df9e75774ce2145",\n' +
                '                        "s": "0x7c98326b5cae57af19406f651b53e1d18cc687c956d4b5d49e63cc5ecde0b235",\n' +
                '                        "v": 27\n' +
                '                    },\n' +
                '                    "sender": "0x0000000000000000000000000000000000000000",\n' +
                '                    "maker": "0x56eb0ad2dc746540fab5c02478b31e2aa9ddc38c",\n' +
                '                    "taker": "0x0000000000000000000000000000000000000000",\n' +
                '                    "takerTokenFeeAmount": "0",\n' +
                '                    "makerAmount": "100000000",\n' +
                '                    "takerAmount": "10000000",\n' +
                '                    "makerToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '                    "takerToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n' +
                '                    "salt": "46180318074336470317559353922611974059818459041810314650988282984048441965273",\n' +
                '                    "verifyingContract": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",\n' +
                '                    "feeRecipient": "0x0000000000000000000000000000000000000000",\n' +
                '                    "expiry": "1614959239",\n' +
                '                    "chainId": 1,\n' +
                '                    "pool": "0x0000000000000000000000000000000000000000000000000000000000000000"\n' +
                '                },\n' +
                '                "metaData": {\n' +
                '                    "orderHash": "0x0ffda2f9d9f41144bb063100403f926efa2ee5bacd9af00716175f00b030ff36",\n' +
                '                    "remainingFillableTakerAmount": "10000000",\n' +
                '                    "createdAt": "2021-03-05T15:32:18.473Z"\n' +
                '                }\n' +
                '            }\n' +
                '        ]\n' +
                '    },\n' +
                '    "asks": {\n' +
                '        "total": 2,\n' +
                '        "page": 1,\n' +
                '        "perPage": 20,\n' +
                '        "records": [\n' +
                '            {\n' +
                '                "order": {\n' +
                '                    "signature": {\n' +
                '                        "signatureType": 3,\n' +
                '                        "r": "0x5edf42008a5b379d44857634ffb6c0ef64a8884763bbbe8eecaca14f1b9670e9",\n' +
                '                        "s": "0x6ed1c68cd18e2ede793f6cb7fdd5391c559cf59c2cc0876a7479e4ff7459a79a",\n' +
                '                        "v": 28\n' +
                '                    },\n' +
                '                    "sender": "0x0000000000000000000000000000000000000000",\n' +
                '                    "maker": "0x56eb0ad2dc746540fab5c02478b31e2aa9ddc38c",\n' +
                '                    "taker": "0x0000000000000000000000000000000000000000",\n' +
                '                    "takerTokenFeeAmount": "0",\n' +
                '                    "makerAmount": "10000000",\n' +
                '                    "takerAmount": "2000000000000000000000",\n' +
                '                    "makerToken": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n' +
                '                    "takerToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '                    "salt": "56970174968746324800967727809155263811357634174793941230224490280738761530883",\n' +
                '                    "verifyingContract": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",\n' +
                '                    "feeRecipient": "0x0000000000000000000000000000000000000000",\n' +
                '                    "expiry": "1614959117",\n' +
                '                    "chainId": 1,\n' +
                '                    "pool": "0x0000000000000000000000000000000000000000000000000000000000000000"\n' +
                '                },\n' +
                '                "metaData": {\n' +
                '                    "orderHash": "0xf8b4d85e98d7dc41bb6b9b200aafe7a2b479f59d6ca5288fa990124a23f2056a",\n' +
                '                    "remainingFillableTakerAmount": "2000000000000000000000",\n' +
                '                    "createdAt": "2021-03-05T15:30:17.127Z"\n' +
                '                }\n' +
                '            }\n' +
                '        ]\n' +
                '    }'
        },
        "Get Orderbook Order Hash": {
            url: '/orderbook/v1/order/:orderHash',
            doc_url: 'https://docs.0x.org/0x-api-orderbook/api-references/get-orderbook-v1-order-orderhash',
            description:  'Retrieves a specific order by orderHash.',
            params:{
                'orderHash' : {description: `The hash of the desired signed order.`, replace_2dots: true, required: true},
            },
            response_attributes: {
                'order' :  `Raw signed order.`,
                'metaData' :  `Object where optional meta-data will be included, such as the orderHash and remainingFillableTakerAmount.`,
            },
            sample_response: '{\n' +
                '    "order": {\n' +
                '        "signature": {\n' +
                '            "signatureType": 3,\n' +
                '            "r": "0x260e3ade4c5e995074e51c5e6031a7f9ac4c466923cf636a52da5618733ca733",\n' +
                '            "s": "0x0ad43fef82c1deaa740905d76fd6201960b034dbaebda9ae55a28276fffda5b4",\n' +
                '            "v": 27\n' +
                '        },\n' +
                '        "sender": "0x0000000000000000000000000000000000000000",\n' +
                '        "maker": "0x56eb0ad2dc746540fab5c02478b31e2aa9ddc38c",\n' +
                '        "taker": "0x0000000000000000000000000000000000000000",\n' +
                '        "takerTokenFeeAmount": "0",\n' +
                '        "makerAmount": "100000000000000",\n' +
                '        "takerAmount": "2000000000000000000000",\n' +
                '        "makerToken": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '        "takerToken": "0xe41d2489571d322189246dafa5ebde1f4699f498",\n' +
                '        "salt": "6783702559744797318323886303764333477871845949851321622397911580758640049826",\n' +
                '        "verifyingContract": "0xdef1c0ded9bec7f1a1670819833240f027b25eff",\n' +
                '        "feeRecipient": "0x0000000000000000000000000000000000000000",\n' +
                '        "expiry": "1614957869",\n' +
                '        "chainId": 1,\n' +
                '        "pool": "0x0000000000000000000000000000000000000000000000000000000000000000"\n' +
                '    },\n' +
                '    "metaData": {\n' +
                '        "orderHash": "0xd56098f729763f53b338c723be01ffdb8a1ff9dd8d323c9021ff1d8e29635fca",\n' +
                '        "remainingFillableTakerAmount": "2000000000000000000000",\n' +
                '        "createdAt": "2021-03-05T15:09:28.611Z"\n' +
                '    }\n' +
                '}'
        },
        "Get Orderbook Fee Recipients": {
            url: '/orderbook/v1/fee_recipients',
            doc_url: 'https://docs.0x.org/0x-api-orderbook/api-references/get-orderbook-v1-fee_recipients',
            description:  'Retrieves a list of valid feeRecipient addresses.',
            response_attributes: {
                'record(s)': `A valid Ethereum address(s).`,
            },
            sample_response: '{\n' +
                '    "total": 1,\n' +
                '    "page": 1,\n' +
                '    "perPage": 20,\n' +
                '    "records": ["0x0000000000000000000000000000000000000000"]\n' +
                '}'
        },
    },
    '0xTracker': {
        "doc_url": 'https://docs.0xtracker.com/',
        'provider_description': 'The leading provider of 0x protocol market data, transparent Ethereum token price index and 0x protocol news aggregator.',
        "base_url": "https://api.0xtracker.com",
        "logo_url": "https://avatars.githubusercontent.com/u/42436424?s=200&v=4",

        "Get App": {
            url: '/apps/:slug',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#app',
            description:  'Returns the details and stats of a single app.',
            params:{
                'slug' : {description: `Slug of the app to fetch. (e.g.: matcha)`, replace_2dots: true, required: true},
                'statsPeriodTo' : {description: `End of the time period for which to return stats. Should be used as an alternative to the statsPeriod parameter. Must be in the format YYYY-MM-DD.`,  },
                'statsPeriodFrom' : {description: `Start of the time period for which to return stats. Should be used as an alternative to the statsPeriod parameter. Must be in the format YYYY-MM-DD.`,  },
                'statsPeriod' : {description: `The time period for which to return stats. Valid values are: "day", "week", "month", "year" and "all". Default value is "day"`, default: 'day', possible: ["day", "week", "month", "year" , "all"]  },
            },
            sample_response: '{\n' +
                '    "categories": [\n' +
                '        "dex-aggregator",\n' +
                '        "relayer"\n' +
                '    ],\n' +
                '    "description": "Built by the 0x core team \u2013 Matcha is a DEX aggregator built on top of 0x API which allows users to easily swap tokens and place limit orders.",\n' +
                '    "id": "5067df8b-f9cd-4a34-aee1-38d607100145",\n' +
                '    "logoUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/matcha.png",\n' +
                '    "name": "Matcha",\n' +
                '    "stats": {\n' +
                '        "activeTraders": 808,\n' +
                '        "activeTradersChange": 19.174041297935105,\n' +
                '        "avgTradeSize": 60230.98896439627,\n' +
                '        "avgTradeSizeChange": 55.88229155059747,\n' +
                '        "tradeCount": {\n' +
                '            "relayed": 73,\n' +
                '            "total": 1207\n' +
                '        },\n' +
                '        "tradeCountChange": {\n' +
                '            "relayed": 108.57142857142857,\n' +
                '            "total": 20.33898305084746\n' +
                '        },\n' +
                '        "tradeVolume": {\n' +
                '            "relayed": 10889677.034785688,\n' +
                '            "total": 72698803.6800263\n' +
                '        },\n' +
                '        "tradeVolumeChange": {\n' +
                '            "relayed": 5910.600207842618,\n' +
                '            "total": 87.58716440834611\n' +
                '        }\n' +
                '    },\n' +
                '    "urlSlug": "matcha",\n' +
                '    "websiteUrl": "https://matcha.xyz"\n' +
                '}'
        },
        "Get Apps": {
            url: '/apps',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#apps',
            description:  'Returns a paginated collection of active apps and their associated stats for the specified time period.',
            params:{
                'sortDirection' : {description: 'The direction in which to sort results Valid values are "asc" and "desc".Default value is "desc".', default: 'desc', possible: ['asc', 'desc']},
                'sortBy' : {possible: ["activeTraders", "tradeCount" , "tradeVolume"], default:'tradeVolume', description: `The field by which to sort results. Valid values are: "activeTraders", "tradeCount" and "tradeVolume". Default value is "tradeVolume".`,  },
                'limit' : {description: `The maximum number of apps to return per page. Default value is 20. Maximum value is 50.`, default: 20, type: 'number' },
                'page' : {description: `The page of data to return. Default value is 1.`, default: 20, type: 'number' },
                'statsPeriod' : {description: `The time period for which to return stats. Valid values are: "day", "week", "month", "year" and "all". Default value is "day"`, default: 'day', possible: ["day", "week", "month", "year" , "all"]  },
            },
            sample_response: '{\n' +
                '  "apps": [\n' +
                '    {\n' +
                '      "categories": [\n' +
                '        "relayer"\n' +
                '      ],\n' +
                '      "description": "Built by the 0x core team – 0x API makes accessing DEX liquidity easy through the use of smart order routing which aggregates liquidity from 0x Mesh, Kyber, Uniswap, and more.",\n' +
                '      "id": "052b4862-2142-4532-bdc0-416814b0a5fe",\n' +
                '      "logoUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/0x-api.png",\n' +
                '      "name": "0x API",\n' +
                '      "stats": {\n' +
                '        "activeTraders": 4857,\n' +
                '        "activeTradersChange": -16.099499049922265,\n' +
                '        "tradeCount": {\n' +
                '          "relayed": 7316,\n' +
                '          "total": 7316\n' +
                '        },\n' +
                '        "tradeCountChange": {\n' +
                '          "relayed": -14.900546702338024,\n' +
                '          "total": -14.900546702338024\n' +
                '        },\n' +
                '        "tradeVolume": {\n' +
                '          "relayed": 27118521.443833765,\n' +
                '          "total": 27118521.443833765\n' +
                '        },\n' +
                '        "tradeVolumeChange": {\n' +
                '          "relayed": 30.176737544737716,\n' +
                '          "total": 30.176737544737716\n' +
                '        }\n' +
                '      },\n' +
                '      "urlSlug": "0x-api",\n' +
                '      "websiteUrl": "https://0x.org/api"\n' +
                '    },\n' +
                '    // ...\n' +
                '  ],\n' +
                '  "page": 1,\n' +
                '  "pageCount": 1,\n' +
                '  "limit": 20,\n' +
                '  "total": 10\n' +
                '}'
        },
        "Get Article": {
            url: '/articles',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#apps',
            description:  'Returns a paged collection of news articles matching the specified parameters. Articles are sorted from most recent to least recent.',
            params:{
                'source' : {description: `Slug of an article source to filter by. `, },
                'page' : {description: `The page of data to return. Default is 1.`,default: 1, type: 'number'  },
            },
            sample_response: '{\n' +
                '    "articles": [\n' +
                '        {\n' +
                '            "date": "2022-03-22T11:58:09.000Z",\n' +
                '            "id": "6239b9e38ff0ad00126c4099",\n' +
                '            "imageUrl": "https://dexkit.com/wp-content/webpc-passthru.php?src=https://dexkit.com/wp-content/uploads/SuperApp-Latest-Update.png&nocache=1",\n' +
                '            "slug": "superapp-version-00619-is-here-with-a-lot-of-features",\n' +
                '            "source": {\n' +
                '                "imageUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/dex-kit.png",\n' +
                '                "name": "DexKit Swap",\n' +
                '                "slug": "dex-kit",\n' +
                '                "url": "https://swap.dexkit.com"\n' +
                '            },\n' +
                '            "summary": "Thinking of those users who want to undertake in the world of decentralized finance but do not have the technical knowledge, DEXKIT developed technologies aimed at easy use and now with universal compatibility. Users can deploy these tools (the aggregator and the NFT custom marketplace) and start their decentralized projects in a simple way, in record time, without the need to hire professionals.",\n' +
                '            "title": "SuperApp version 0.0.6.19 is here with a lot of features!",\n' +
                '            "url": "https://dexkit.com/update-superapp-0-0-6-19/"\n' +
                '        },\n' +
                '        {\n' +
                '            "date": "2022-03-21T15:02:19.000Z",\n' +
                '            "id": "623896248ff0ad00126b4b09",\n' +
                '            "imageUrl": "https://miro.medium.com/max/1024/0*1MmkXSFTm_D4DzRP",\n' +
                '            "slug": "superfluid-collateral-for-squeeth-in-the-uniswap-pool",\n' +
                '            "source": {\n' +
                '                "imageUrl": "https://resources.0xtracker.com/logos/opyn.png",\n' +
                '                "name": "Opyn",\n' +
                '                "slug": "opyn",\n' +
                '                "url": "https://opyn.co"\n' +
                '            },\n' +
                '            "summary": "Superfluid means you get to do more stuff with your collateral. In the squeeth ecosystem this is enabled by allowing Uniswap v3 LPs to be collateral for short squeeth. This means\u00a0that",\n' +
                '            "title": "Superfluid collateral for squeeth in the Uniswap pool",\n' +
                '            "url": "https://medium.com/opyn/superfluid-collateral-for-squeeth-in-the-uniswap-pool-3b0585bb94a0?source=rss----850b56baf5d0---4"\n' +
                '        } \n' +
                '    ] \n' +
                '}'
        },
        "Get Protocols": {
            url: '/protocols',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#protocols',
            description:  'Returns a paginated collection of protocols matching the specified parameters.',
            params:{
                'sortBy' : {required: true,description: `The field by which to sort protocols.`, default: 'tradeCount', possible: ['tradeCount', 'tradeVolume'] },
                'statsPeriod' : {description: `The time period for which to return stats. Must be one of: day, week, month, year, all.Default value is day.`,default: 'day', possible: ['day', 'week', 'month', 'year', 'all']  },
            },
            sample_response: '{\n' +
                '  "protocols": [\n' +
                '    {\n' +
                '      "stats": {\n' +
                '        "fillCount": 2026,\n' +
                '        "fillVolume": 1728911.7356433223,\n' +
                '        "tradeCount": 1559,\n' +
                '        "tradeVolume": 1285629.9583338788\n' +
                '      },\n' +
                '      "version": 2\n' +
                '    },\n' +
                '    {\n' +
                '      "stats": {\n' +
                '        "fillCount": 374,\n' +
                '        "fillVolume": 585201.4918576538,\n' +
                '        "tradeCount": 357,\n' +
                '        "tradeVolume": 540775.9960855007\n' +
                '      },\n' +
                '      "version": 3\n' +
                '    }\n' +
                '  ],\n' +
                '  "page": 1,\n' +
                '  "pageCount": 1,\n' +
                '  "limit": 20,\n' +
                '  "total": 2\n' +
                '}'
        },

        "Get Token": {
            url: '/tokens/:address',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#token',
            description:  'Returns the full details of a single token.',
            params:{
                'address' : {description: `Address of the token to fetch.`,replace_2dots: true, required: true },
                'statsPeriod' : {description: `The time period for which to return stats. Valid values are: "day", "week", "month", "year" and "all". Default value is "day"`, default: 'day', possible: ["day", "week", "month", "year" , "all"]  },
            },
            sample_response: '{\n' +
                '  "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '  "circulatingSupply": null,\n' +
                '  "imageUrl": "https://cdn.staticaly.com/gh/TrustWallet/tokens/master/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",\n' +
                '  "lastTrade": {\n' +
                '    "date": "2020-04-16T19:01:36.000Z",\n' +
                '    "id": "5e98ac33f3edba0548d57499"\n' +
                '  },\n' +
                '  "marketCap": 401979735.10782796,\n' +
                '  "name": "Wrapped Ether",\n' +
                '  "price": {\n' +
                '    "change": 8.77204150486982,\n' +
                '    "close": 170.87,\n' +
                '    "high": 174.47853088378906,\n' +
                '    "last": 170.87,\n' +
                '    "low": 145.86898803710938,\n' +
                '    "open": 157.09\n' +
                '  },\n' +
                '  "stats": {\n' +
                '    "fillCount": 3403,\n' +
                '    "fillVolume": {\n' +
                '      "token": 29343.563185668743,\n' +
                '      "USD": 4839232.989858636\n' +
                '    },\n' +
                '    "tradeCount": 3064,\n' +
                '    "tradeVolume": {\n' +
                '      "token": 25417.591251252252,\n' +
                '      "USD": 4189388.872657468\n' +
                '    }\n' +
                '  },\n' +
                '  "statsPeriod": "day",\n' +
                '  "symbol": "WETH",\n' +
                '  "totalSupply": 2352547.1709944867,\n' +
                '  "type": "erc-20"\n' +
                '}'
        },
        "Get Traders": {
            url: '/traders',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#traders',
            description:  'Returns a paginated collection of active traders and their associated stats for the specified time period. Traders are returned in order of most fill volume to least fill volume.',
            params:{
                'apps' : {description: `A comma-separated list of app IDs to filter the traders by. App IDs can be found by calling the apps endpoint.` },

                'type' : {description: `The type of traders to return. Must be one of: maker, taker.` },
                'excludeRelayers' : {description: `Whether to exclude relayer taker addresses from the results. Default is true.`, default: 'true', possible: ['true', 'false'] },
                'limit' : {description: `The maximum number of traders to return per page. Default value is 20. Maximum value is 50.`, default: 20, type: 'number' },
                'page' : {description: `The page of data to return. Default value is 1.` ,default: 1, type: 'number'},

                'statsPeriodTo' : {description: `End of the time period for which to return stats. Should be used as an alternative to the statsPeriod parameter. Must be in the format YYYY-MM-DD.`,  },
                'statsPeriodFrom' : {description: `Start of the time period for which to return stats. Should be used as an alternative to the statsPeriod parameter. Must be in the format YYYY-MM-DD.`,  },
                'statsPeriod' : {description: `The time period for which to return stats. Valid values are: "day", "week", "month", "year" and "all". Default value is "day"`, default: 'day', possible: ["day", "week", "month", "year" , "all"]  },
            },
            sample_response: '{\n' +
                '  "page": 1,\n' +
                '  "pageCount": 6,\n' +
                '  "limit": 20,\n' +
                '  "total": 119,\n' +
                '  "traders": [\n' +
                '    {\n' +
                '      "address": "0x41f8d14c9475444f30a80431c68cf24dc9a8369a",\n' +
                '      "stats": {\n' +
                '        "fillCount": {\n' +
                '          "maker": 0,\n' +
                '          "taker": 259,\n' +
                '          "total": 259\n' +
                '        },\n' +
                '        "fillVolume": {\n' +
                '          "maker": 0,\n' +
                '          "taker": 496613.5857697289,\n' +
                '          "total": 496613.5857697289\n' +
                '        }\n' +
                '      }\n' +
                '    },\n' +
                '    // ...\n' +
                '  ]\n' +
                '}'
        },
        // "Get Trade": {
        //     url: '/fills/:id',
        //     doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#trade',
        //     description:  'Returns the full details of a single trade.',
        //     params:{
        //         'id' : {description: `ID of the trade to fetch.`,replace_2dots: true, required: true },
        //     },
        //     sample_response: '{\n' +
        //         '  "affiliate": null,\n' +
        //         '  "apps": [\n' +
        //         '    {\n' +
        //         '      "id": "a5808078-d297-4fbd-a818-dccd8a5438ed",\n' +
        //         '      "logoUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/star-bit.png",\n' +
        //         '      "name": "STAR BIT",\n' +
        //         '      "type": "relayer",\n' +
        //         '      "urlSlug": "star-bit"\n' +
        //         '    }\n' +
        //         '  ],\n' +
        //         '  "assets": [\n' +
        //         '    {\n' +
        //         '      "amount": "0.023595691875",\n' +
        //         '      "bridge": null,\n' +
        //         '      "price": {\n' +
        //         '        "USD": 186.71999999999997\n' +
        //         '      },\n' +
        //         '      "tokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
        //         '      "tokenImageUrl": "https://cdn.staticaly.com/gh/TrustWallet/tokens/master/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",\n' +
        //         '      "tokenSymbol": "WETH",\n' +
        //         '      "tokenType": "Wrapped Ether",\n' +
        //         '      "traderType": "maker",\n' +
        //         '      "type": "erc-20"\n' +
        //         '    },\n' +
        //         '    {\n' +
        //         '      "amount": "2041",\n' +
        //         '      "bridge": null,\n' +
        //         '      "price": {\n' +
        //         '        "USD": 0.0021586416398334148\n' +
        //         '      },\n' +
        //         '      "tokenAddress": "0x503f9794d6a6bb0df8fbb19a2b3e2aeab35339ad",\n' +
        //         '      "tokenImageUrl": "https://0xtracker.com/assets/logos/starbit.png",\n' +
        //         '      "tokenSymbol": "SBT",\n' +
        //         '      "tokenType": "Star Bit Token",\n' +
        //         '      "traderType": "taker",\n' +
        //         '      "type": "erc-20"\n' +
        //         '    }\n' +
        //         '  ],\n' +
        //         '  "date": "2019-11-04T18:22:03.000Z",\n' +
        //         '  "fees": [],\n' +
        //         '  "feeRecipient": "0x8124071f810d533ff63de61d0c98db99eeb99d64",\n' +
        //         '  "feeRecipientMetadata": {\n' +
        //         '    "address": "0x8124071f810d533ff63de61d0c98db99eeb99d64",\n' +
        //         '    "imageUrl": null,\n' +
        //         '    "isContract": false,\n' +
        //         '    "name": null\n' +
        //         '  },\n' +
        //         '  "id": "5dc06d68ab099b000489d3fe",\n' +
        //         '  "makerAddress": "0xda912ecc847b3d98ca882e396e693e485deed518",\n' +
        //         '  "maker": {\n' +
        //         '    "address": "0xda912ecc847b3d98ca882e396e693e485deed518",\n' +
        //         '    "imageUrl": null,\n' +
        //         '    "isContract": false,\n' +
        //         '    "name": null\n' +
        //         '  },\n' +
        //         '  "orderHash": "0x9165afe0f746839d2f390972b9a4473910143e6650be48477e7eb0196b607b02",\n' +
        //         '  "protocolVersion": 2,\n' +
        //         '  "relayer": {\n' +
        //         '    "imageUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/star-bit.png",\n' +
        //         '    "name": "STAR BIT",\n' +
        //         '    "slug": "star-bit"\n' +
        //         '  },\n' +
        //         '  "senderAddress": "0x0681e844593a051e2882ec897ecd5444efe19ff2",\n' +
        //         '  "sender": {\n' +
        //         '    "address": "0x0681e844593a051e2882ec897ecd5444efe19ff2",\n' +
        //         '    "imageUrl": "https://cdn.staticaly.com/gh/0xTracker/ethereum-address-metadata/master/images/starbit.png",\n' +
        //         '    "isContract": false,\n' +
        //         '    "name": "StarbitEx"\n' +
        //         '  },\n' +
        //         '  "status": "successful",\n' +
        //         '  "takerAddress": "0x0681e844593a051e2882ec897ecd5444efe19ff2",\n' +
        //         '  "taker": {\n' +
        //         '    "address": "0x0681e844593a051e2882ec897ecd5444efe19ff2",\n' +
        //         '    "imageUrl": "https://cdn.staticaly.com/gh/0xTracker/ethereum-address-metadata/master/images/starbit.png",\n' +
        //         '    "isContract": false,\n' +
        //         '    "name": "StarbitEx"\n' +
        //         '  },\n' +
        //         '  "transactionHash": "0xc99fc0a2c65da2d3b94a1cd979afb05317203354a2dc6999c0dde26c61fecd0e",\n' +
        //         '  "transactionFrom": {\n' +
        //         '    "address": "0x0681E844593A051E2882Ec897ecD5444eFE19FF2",\n' +
        //         '    "imageUrl": null,\n' +
        //         '    "isContract": null,\n' +
        //         '    "name": null\n' +
        //         '  },\n' +
        //         '  "transactionTo": {\n' +
        //         '    "address": "0x080bf510FCbF18b91105470639e9561022937712",\n' +
        //         '    "imageUrl": null,\n' +
        //         '    "isContract": null,\n' +
        //         '    "name": null\n' +
        //         '  },\n' +
        //         '  "value": {\n' +
        //         '    "USD": 4.4057875869\n' +
        //         '  }\n' +
        //         '}'
        // },
        "Get Trades": {
            url: '/fills',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#trades',
            description:  'Returns a paginated collection of trades matching the specified parameters.',
            params:{
                'apps' : {description: `A comma-separated list of app IDs to filter the traders by. App IDs can be found by calling the apps endpoint.` },
                'trader' : {description: `Trader address to filter by.` },
                'sortDirection' : {description: 'The direction in which to sort results Valid values are "asc" and "desc".Default value is "desc".', default: 'desc', possible: ['asc', 'desc']},
                'sortBy' : {possible: ["date", "protocolFeeUSD" , "value"], default:'date', description: `The field by which to sort results. `,  },

                'valueTo' : {description: 'Maximum trade value (in USD) to filter by.' },
                'valueFrom' : {description: 'Minimum trade value (in USD) to filter by.' },
                'protocolVersion' : {description: `Protocol version to filter by.`  },

                'token' : {description: 'Address of a token to filter by.' },
                'limit' : {description: `The maximum number of traders to return per page. Default value is 20. Maximum value is 50.`, default: 20, type: 'number' },
                'page' : {description: `The page of data to return. Default value is 1.` ,default: 1, type: 'number'},
            },
            sample_response: '{\n' +
                '    "fills": [\n' +
                '        {\n' +
                '          "apps": [\n' +
                '            {\n' +
                '              "id": "0a5d5f06-1626-4276-893f-42527e5a4147",\n' +
                '              "logoUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/tokenlon.png",\n' +
                '              "name": "Tokenlon",\n' +
                '              "type": "relayer",\n' +
                '              "urlSlug": "tokenlon"\n' +
                '            }\n' +
                '          ],\n' +
                '          "assets": [\n' +
                '            {\n' +
                '              "amount": "367.191483",\n' +
                '              "bridge": null,\n' +
                '              "price": {\n' +
                '                "USD": 0.9997\n' +
                '              },\n' +
                '              "tokenAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",\n' +
                '              "tokenImageUrl": "https://cdn.staticaly.com/gh/TrustWallet/tokens/master/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png",\n' +
                '              "tokenSymbol": "USDT",\n' +
                '              "tokenType": "Tether USD",\n' +
                '              "traderType": "maker",\n' +
                '              "type": "erc-20"\n' +
                '            },\n' +
                '            {\n' +
                '              "amount": "0.5",\n' +
                '              "bridge": null,\n' +
                '              "price": {\n' +
                '                "USD": 734.1626511102\n' +
                '              },\n' +
                '              "tokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",\n' +
                '              "tokenImageUrl": "https://cdn.staticaly.com/gh/TrustWallet/tokens/master/tokens/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",\n' +
                '              "tokenSymbol": "WETH",\n' +
                '              "tokenType": "Wrapped Ether",\n' +
                '              "traderType": "taker",\n' +
                '              "type": "erc-20"\n' +
                '            }\n' +
                '          ],\n' +
                '          "date": "2020-12-30T14:47:21.000Z",\n' +
                '          "feeRecipient": "0xd4dff17ccf7ca237e66270cc097ae60dabf8f85b",\n' +
                '          "id": "5fec93c57f7a4022f922b139",\n' +
                '          "makerAddress": "0x9c597c4da5e8f052182fe9b3d12af7e61e8d809b",\n' +
                '          "protocolVersion": 2,\n' +
                '          "relayer": {\n' +
                '            "imageUrl": "https://cdn.staticaly.com/gh/0xTracker/0x-tracker-worker/master/src/attributions/logos/tokenlon.png",\n' +
                '            "name": "Tokenlon",\n' +
                '            "slug": "tokenlon"\n' +
                '          },\n' +
                '          "status": "successful",\n' +
                '          "takerAddress": "0x8d90113a1e286a5ab3e496fbd1853f265e5913c6",\n' +
                '          "value": {\n' +
                '            "USD": 367.0813255551\n' +
                '          }\n' +
                '        },\n' +
                '        // ...\n' +
                '    ],\n' +
                '    "limit": 50,\n' +
                '    "page": 1,\n' +
                '    "pageCount": 17221,\n' +
                '    "total": 344408\n' +
                '}'
        },

        // "Get Network Stats": {
        //     url: '/stats/networks',
        //     doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#network-stats',
        //     description:  'Returns network stats for the specified time period.',
        //     params:{
        //         'period' : {description: `Time period for which to return stats. Must be one of: day, week, month, year, all. Default value is day.`,default: 'day', possible: ['day', 'week', 'month', 'year', 'all'] },
        //     },
        //     sample_response: '{\n' +
        //         '  "fillCount": 1215,\n' +
        //         '  "fillVolume": 1424278.9861453106,\n' +
        //         '  "protocolFees": {\n' +
        //         '    "ETH": "221.8",\n' +
        //         '    "USD": 33270\n' +
        //         '  },\n' +
        //         '  "tradeCount": 887,\n' +
        //         '  "tradeVolume": 1408589.3708279347\n' +
        //         '}'
        // },
        "Get Trader Stats": {
            url: '/stats/trader',
            doc_url: 'https://docs.0xtracker.com/api-reference/endpoints#trader-stats',
            description:  'Returns active trader stats for the specified time period.',
            params:{
                'period' : {description: `Time period for which to return stats. Must be one of: day, week, month, year, all. Default value is day.`,default: 'day', possible: ['day', 'week', 'month', 'year', 'all'] },
            },
            sample_response: '{\n' +
                '  "makerCount": 68,\n' +
                '  "takerCount": 53,\n' +
                '  "traderCount": 116\n' +
                '}'
        },
    },
    Aave: {
        "doc_url": 'https://aave-api-v2.aave.com/',
        'provider_description': 'Aave is a decentralised non-custodial liquidity market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralised (perpetually) or undercollateralised (one-block liquidity) fashion.',
        "base_url": "https://aave-api-v2.aave.com",
        "logo_url": "https://aave.com/favicon64.png",
        "Get TVL": {
            url: '/data/tvl',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_tvl',
            description: 'Gets the combined TVL of all markets and staking contracts' ,
            sample_response: '{\n' +
                '  "totalTvl": {\n' +
                '    "tvlInEth": "2694999.404135708",\n' +
                '    "tvlInUsd": "3325280801.4152594"\n' +
                '  },\n' +
                '  "marketTvls": {\n' +
                '    "v1": {\n' +
                '      "tvlInEth": "2694999.404135708",\n' +
                '      "tvlInUsd": "3325280801.4152594"\n' +
                '    },\n' +
                '    "v2": {\n' +
                '      "tvlInEth": "2694999.404135708",\n' +
                '      "tvlInUsd": "3325280801.4152594"\n' +
                '    },\n' +
                '    "staking": {\n' +
                '      "stkAave": {\n' +
                '        "tvlInEth": "2694999.404135708",\n' +
                '        "tvlInUsd": "3325280801.4152594"\n' +
                '      },\n' +
                '      "stkABPT": {\n' +
                '        "tvlInEth": "2694999.404135708",\n' +
                '        "tvlInUsd": "3325280801.4152594"\n' +
                '      }\n' +
                '    },\n' +
                '    "updatedAt": "2016-08-29T09:12:33.001Z",\n' +
                '    "createdAt": "2016-08-29T09:12:33.001Z"\n' +
                '  }\n' +
                '}'
        },
        "Get Daily Volume 24h": {
            url: '/data/daily-volume-24-hours',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_daily_volume_24_hours',
            description: 'Gets the combined volume of the protocol in the last 24 hours window' ,
            sample_response: '{\n' +
                '  "totalVolumeInUsd": 2537758161.0711317,\n' +
                '  "totalVolumeInEth": 1.4578956086436396e+24,\n' +
                '  "totalBorrowUSD": 93708825.01188761,\n' +
                '  "totalBorrowETH": 5.383400458392099e+22,\n' +
                '  "totalRepayETH": 4.5639311177594584e+22,\n' +
                '  "totalRepayUSD": 79444326.27406068,\n' +
                '  "totalDepositETH": 6.926962774121884e+23,\n' +
                '  "totalDepositUSD": 1205776065.6689548,\n' +
                '  "totalWithdrawalUSD": 1158828944.1162288,\n' +
                '  "totalWithdrawalETH": 6.657260154699355e+23,\n' +
                '  "totalStakedETH": 6.926962774121884e+23,\n' +
                '  "totalStakedUSD": 1205776065.6689548,\n' +
                '  "totalRedeemedUSD": 1158828944.1162288,\n' +
                '  "totalRedeemedETH": 6.657260154699355e+23,\n' +
                '  "reserves": {\n' +
                '    "v1": [\n' +
                '      {\n' +
                '        "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "aToken": "0x4da9b813057d04baef4e5800e36083717b4a0341",\n' +
                '        "asset": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "pool": "0x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "symbol": "TUSD",\n' +
                '        "decimals": 18,\n' +
                '        "priceInEth": "573034943849483",\n' +
                '        "borrow": 1031806.6110582352,\n' +
                '        "deposit": 0,\n' +
                '        "repay": 1201747.9494428635,\n' +
                '        "withdrawal": 1000000\n' +
                '      }\n' +
                '    ],\n' +
                '    "v2": [\n' +
                '      {\n' +
                '        "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "aToken": "0x4da9b813057d04baef4e5800e36083717b4a0341",\n' +
                '        "asset": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "pool": "0x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "symbol": "TUSD",\n' +
                '        "decimals": 18,\n' +
                '        "priceInEth": "573034943849483",\n' +
                '        "borrow": 1031806.6110582352,\n' +
                '        "deposit": 0,\n' +
                '        "repay": 1201747.9494428635,\n' +
                '        "withdrawal": 1000000\n' +
                '      }\n' +
                '    ],\n' +
                '    "stk": [\n' +
                '      {\n' +
                '        "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "asset": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "symbol": "TUSD",\n' +
                '        "decimals": 18,\n' +
                '        "priceInEth": "573034943849483",\n' +
                '        "stake": 1031806.6110582352,\n' +
                '        "redeem": 1031806.6110582352\n' +
                '      }\n' +
                '    ]\n' +
                '  }\n' +
                '}'
        },
        "Get Liquidity": {
            url: '/data/liquidity/v1',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_liquidity_v1',
            description: 'Returns overall protocol liquidity at a certain date' ,
            params: {
                poolId: {description: 'The id of the Aave Lending Pool Addresses Provider (e.g. 0x24a42fd28c976a61d\nf5d00d0599c34c4f90748c8)', required: true},
                date: {description: 'The date for where we want to get the data from (e.g. 01-01-2020)'}
            },
            sample_response: '[\n' +
                '  {\n' +
                '    "availableLiquidity": "942194.519059401080866728",\n' +
                '    "averageStableRate": "100050758739420732058977873",\n' +
                '    "baseLTVasCollateral": "0.75",\n' +
                '    "baseVariableBorrowRate": "0",\n' +
                '    "borrowingEnabled": true,\n' +
                '    "decimals": 18,\n' +
                '    "id": "0x0000000000085d4780b73119b644ae5ecd22b3760xb53c1a33016b2dc2ff3653530bff1848a515c8c5",\n' +
                '    "liquidityIndex": "1.01825210810387712252",\n' +
                '    "liquidityRate": "0.10455997873609331382",\n' +
                '    "name": "TrueUSD",\n' +
                '    "optimalUtilisationRate": "0.8",\n' +
                '    "pool": "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",\n' +
                '    "price": {\n' +
                '      "id": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '      "priceInEth": "0.00057794"\n' +
                '    },\n' +
                '    "reserveFactor": "0.1",\n' +
                '    "reserveInterestRateStrategy": "0x0ddec679166c367ae45036c8b2c169c5fb2dcee1",\n' +
                '    "reserveLiquidationBonus": "0.05",\n' +
                '      "timestamp": 1612997034,\n' +
                '      "totalLiquidity": "6248213120765942920753579",\n' +
                '      "utilizationRate": "0.84920576",\n' +
                '      "variableBorrowIndex": "1059494494389873906724270151",\n' +
                '      "variableBorrowRate": "0.22375297880588482699"\n' +
                '    }\n' +
                '  }\n' +
                ']'
        },
        "Get Liquidity V2": {
            url: '/data/liquidity/v2',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_liquidity_v2',
            description: 'Returns overall protocol liquidity at a certain date' ,
            params: {
                poolId: {description: 'The id of the Aave Lending Pool Addresses Provider (e.g. 0x24a42fd28c976a61d\nf5d00d0599c34c4f90748c8)', required: true},
                date: {description: 'The date for where we want to get the data from (e.g. 01-01-2020)'}
            },
            sample_response: '[\n' +
                '  {\n' +
                '    "availableLiquidity": "942194.519059401080866728",\n' +
                '    "averageStableRate": "100050758739420732058977873",\n' +
                '    "baseLTVasCollateral": "0.75",\n' +
                '    "baseVariableBorrowRate": "0",\n' +
                '    "borrowingEnabled": true,\n' +
                '    "decimals": 18,\n' +
                '    "id": "0x0000000000085d4780b73119b644ae5ecd22b3760xb53c1a33016b2dc2ff3653530bff1848a515c8c5",\n' +
                '    "liquidityIndex": "1.01825210810387712252",\n' +
                '    "liquidityRate": "0.10455997873609331382",\n' +
                '    "name": "TrueUSD",\n' +
                '    "optimalUtilisationRate": "0.8",\n' +
                '    "pool": "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",\n' +
                '    "price": {\n' +
                '      "id": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '      "priceInEth": "0.00057794"\n' +
                '    },\n' +
                '    "reserveFactor": "0.1",\n' +
                '    "reserveInterestRateStrategy": "0x0ddec679166c367ae45036c8b2c169c5fb2dcee1",\n' +
                '    "reserveLiquidationBonus": "0.05",\n' +
                '      "timestamp": 1612997034,\n' +
                '      "totalLiquidity": "6248213120765942920753579",\n' +
                '      "utilizationRate": "0.84920576",\n' +
                '      "variableBorrowIndex": "1059494494389873906724270151",\n' +
                '      "variableBorrowRate": "0.22375297880588482699"\n' +
                '    }\n' +
                '  }\n' +
                ']'
        },

        "Get Staking Pools": {
            url: '/data/pools',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_pools',
            description: 'Returns staking pool(stkAAVE, stkABPT) stats' ,
            sample_response: '[\n' +
                '  {\n' +
                '    "liquidity": {\n' +
                '      "usd": 78179450.32030025,\n' +
                '      "eth": 44301.64683831359,\n' +
                '      "native": 163287843.2696208\n' +
                '    },\n' +
                '    "price": {\n' +
                '      "eth": 0.000271310135226434,\n' +
                '      "usd": 0.4787830419880699\n' +
                '    },\n' +
                '    "address": "0xa1116930326D21fB917d5A27F1E9943A9595fb47",\n' +
                '    "name": "Staked Aave Balance Pool Token",\n' +
                '    "symbol": "stkABPT",\n' +
                '    "apy": "5.52",\n' +
                '    "updatedAt": "2021-02-12T15:19:20.571Z"\n' +
                '  }\n' +
                ']'
        },
        "Get Governance Leaderboard": {
            url: '/data/governance-leaderboard',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_governance_leaderboard',
            description: 'Get top governance participants. By calling this endpoint you will specify the power type in {\'vote\', \'proposition\'} and will receive the top users ranked by voting or proposition power' ,
            params: {
                power: {description: 'The type of power to rank users by', required: true, possible: ['vote', 'proposition']},
                first: {description: 'Number of users to return', type: 'number'},
                min: {description: 'Minimum number of votes or proposals a user must have participated in', type: 'number'}
            },
            sample_response: '[\n' +
                '  {\n' +
                '    "address": "0x0000000000000000000000000000000000000000",\n' +
                '    "votingPower": 120.45,\n' +
                '    "isVerified": true,\n' +
                '    "avatar": "https://pbs.twimg.com/profile_images/1362172699192090629/JdD_IZSe_normal.jpg",\n' +
                '    "name": "John Appleseed",\n' +
                '    "handle": "jack",\n' +
                '    "propositionPower": 12.7,\n' +
                '    "votingWeight": 0.5,\n' +
                '    "propositionWeight": 0.2,\n' +
                '    "votingHistory": [\n' +
                '      {\n' +
                '        "id": "0x0000000000000000000000000000000000000000",\n' +
                '        "proposal": {\n' +
                '          "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '          "title": "Extend Aave Liquidity Incentives",\n' +
                '          "ipfsHash": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8"\n' +
                '        },\n' +
                '        "votingPower": 542.34,\n' +
                '        "support": true,\n' +
                '        "timestamp": 1590866770\n' +
                '      }\n' +
                '    ],\n' +
                '    "proposalHistory": [\n' +
                '      {\n' +
                '        "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "state": "executed",\n' +
                '        "ipfsHash": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "aipNumber": 14,\n' +
                '        "title": "Upgrade Aave V1 repayment for migration tool"\n' +
                '      }\n' +
                '    ],\n' +
                '    "lastUpdateTimestamp": 1611158580,\n' +
                '    "aaveVotingDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '    "aavePropositionDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '    "stkAaveVotingDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '    "stkAavePropositionDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '    "aaveBalance": 4,\n' +
                '    "stkAaveBalance": 0.1\n' +
                '  }\n' +
                ']'
        },
        "Get Top Voters": {
            url: '/data/proposa-top-voters',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_proposal_top_voters',
            description: 'Get top voters for a given proposal. By calling this endpoint you will specify the proposal id and will receive the the top voters both for and against. Return format is [[forTopVoters],[againstTopVoters]]' ,
            params: {
                proposal: {description: 'Proposal id', required: true,  },
            },
            sample_response: '[\n' +
                '  [\n' +
                '    [\n' +
                '      {\n' +
                '        "address": "0x0000000000000000000000000000000000000000",\n' +
                '        "votingPower": 120.45,\n' +
                '        "isVerified": true,\n' +
                '        "avatar": "https://pbs.twimg.com/profile_images/1362172699192090629/JdD_IZSe_normal.jpg",\n' +
                '        "name": "John Appleseed",\n' +
                '        "handle": "jack",\n' +
                '        "propositionPower": 12.7,\n' +
                '        "votingWeight": 0.5,\n' +
                '        "propositionWeight": 0.2,\n' +
                '        "votingHistory": [\n' +
                '          {\n' +
                '            "id": "0x0000000000000000000000000000000000000000",\n' +
                '            "proposal": {\n' +
                '              "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '              "title": "Extend Aave Liquidity Incentives",\n' +
                '              "ipfsHash": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8"\n' +
                '            },\n' +
                '            "votingPower": 542.34,\n' +
                '            "support": true,\n' +
                '            "timestamp": 1590866770\n' +
                '          }\n' +
                '        ],\n' +
                '        "proposalHistory": [\n' +
                '          {\n' +
                '            "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '            "state": "executed",\n' +
                '            "ipfsHash": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '            "aipNumber": 14,\n' +
                '            "title": "Upgrade Aave V1 repayment for migration tool"\n' +
                '          }\n' +
                '        ],\n' +
                '        "lastUpdateTimestamp": 1611158580,\n' +
                '        "aaveVotingDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "aavePropositionDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "stkAaveVotingDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "stkAavePropositionDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '        "aaveBalance": 4,\n' +
                '        "stkAaveBalance": 0.1\n' +
                '      }\n' +
                '    ]\n' +
                '  ]\n' +
                ']'
        },
        "Governance User Search": {
            url: '/data/governance-user-search',
            doc_url: 'https://aave-api-v2.aave.com/#/data/get_data_governance_user_search',
            description: 'Search for individual Aave governance user. By calling this endpoint you will specify the address and will receive governance info for a given user' ,
            params: {
                address: {description: 'user wallet address', required: true,  },
            },
            sample_response: '{\n' +
                '  "address": "0x0000000000000000000000000000000000000000",\n' +
                '  "votingPower": 120.45,\n' +
                '  "isVerified": true,\n' +
                '  "avatar": "https://pbs.twimg.com/profile_images/1362172699192090629/JdD_IZSe_normal.jpg",\n' +
                '  "name": "John Appleseed",\n' +
                '  "handle": "jack",\n' +
                '  "propositionPower": 12.7,\n' +
                '  "votingWeight": 0.5,\n' +
                '  "propositionWeight": 0.2,\n' +
                '  "votingHistory": [\n' +
                '    {\n' +
                '      "id": "0x0000000000000000000000000000000000000000",\n' +
                '      "proposal": {\n' +
                '        "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '        "title": "Extend Aave Liquidity Incentives",\n' +
                '        "ipfsHash": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8"\n' +
                '      },\n' +
                '      "votingPower": 542.34,\n' +
                '      "support": true,\n' +
                '      "timestamp": 1590866770\n' +
                '    }\n' +
                '  ],\n' +
                '  "proposalHistory": [\n' +
                '    {\n' +
                '      "id": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '      "state": "executed",\n' +
                '      "ipfsHash": "0x0000000000085d4780b73119b644ae5ecd22b3760x24a42fd28c976a61df5d00d0599c34c4f90748c8",\n' +
                '      "aipNumber": 14,\n' +
                '      "title": "Upgrade Aave V1 repayment for migration tool"\n' +
                '    }\n' +
                '  ],\n' +
                '  "lastUpdateTimestamp": 1611158580,\n' +
                '  "aaveVotingDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '  "aavePropositionDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '  "stkAaveVotingDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '  "stkAavePropositionDelegate": "0x0000000000085d4780b73119b644ae5ecd22b376",\n' +
                '  "aaveBalance": 4,\n' +
                '  "stkAaveBalance": 0.1,\n' +
                '  "usersRepresented": [\n' +
                '    null\n' +
                '  ]\n' +
                '}'
        },

    },

    Glassnode: {
        "doc_url": 'https://docs.glassnode.com/',
        'provider_description': 'Glassnode is a blockchain data and intelligence provider that generates innovative on-chain metrics and tools for digital asset stakeholders.',
        "base_url": "https://api.glassnode.com",
        "logo_url": "https://crypto-central.io/library/uploads/Glassnode-Logo-300x300.png",
        "Assets List":{
            url: '/v1/metrics/assets',
            doc_url: 'https://docs.glassnode.com/basic-api/assets',
            description:  'Returns the list of supported assets.',
            sample_response: '[\n' +
                '  {\n' +
                '    "symbol": "ETH",\n' +
                '    "name": "Ethereum",\n' +
                '    "isERC20": false,\n' +
                '    "exchanges": [\n' +
                '       "aggregated",\n' +
                '       "bibox",\n' +
                '       "bigone",\n' +
                '       "binance",\n' +
                '       "bitfinex",\n' +
                '       "bithumb",\n' +
                '       "bittrex",\n' +
                '       "cobinhood",\n' +
                '       "coinex",\n' +
                '       "gate.io",\n' +
                '       "gemini",\n' +
                '       "hitbtc",\n' +
                '       "huobi",\n' +
                '       "kraken",\n' +
                '       "kucoin",\n' +
                '       "okex",\n' +
                '       "poloniex",\n' +
                '       "zb.com"\n' +
                '    ]\n' +
                '  },\n' +
                '  {\n' +
                '    "symbol": "BTC",\n' +
                '    "name": "Bitcoin"\n' +
                '    "isERC20": false,  \n' +
                '    "exchanges": [\n' +
                '      ...\n' +
                '    ]      \n' +
                '  },\n' +
                '  ...\n' +
                ']'
        },
        "Withdrawing Addresses":{
            url: '/v1/metrics/addresses/receiving_from_exchanges_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#total-addresses',
            description:  'The number of unique addresses that appeared as a receiver in a transaction receiving funds from an exchanges.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":71426}]'
        },
        "Total Addresses":{
            url: '/v1/metrics/addresses/count',
            doc_url: 'https://docs.glassnode.com/api/addresses#total-addresses',
            description:  'The total number of unique addresses that ever appeared in a transaction of the native coin in the network.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":792573183}]'
        },
        "Sending Addresses":{
            url: '/v1/metrics/addresses/sending_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#sending-addresses',
            description:  'The number of unique addresses that were active as a sender of funds. Only addresses that were active as a sender in successful non-zero transfers are counted.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Receiving Addresses":{
            url: '/v1/metrics/addresses/receiving_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#receiving-addresses',
            description:  'The number of unique addresses that were active as a receiver of funds. Only addresses that were active as a receiver in successful non-zero transfers are counted.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Active Addresses":{
            url: '/v1/metrics/addresses/active_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#active-addresses',
            description:  'The number of unique addresses that were active either as a sender or receiver. Only addresses that were active in successful transactions are counted.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "New Addresses":{
            url: '/v1/metrics/addresses/new_non_zero_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#new-addresses',
            description:  'The number of unique addresses that appeared for the first time in a transaction of the native coin in the network.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with non-zero balance":{
            url: '/v1/metrics/addresses/non_zero_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-non-zero-balance',
            description:  'The number of unique addresses holding a positive (non-zero) amount of coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.\n' +
                'For ERC-20 Assets 1h resolution is being updated every 24 hours.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 0.01":{
            url: '/v1/metrics/addresses/min_point_zero_1_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-0.01',
            description:  'The number of unique addresses holding at least 0.01 coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 0.1":{
            url: '/v1/metrics/addresses/min_point_1_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-0.1',
            description:  'The number of unique addresses holding at least 0.1 coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 1":{
            url: '/v1/metrics/addresses/min_1_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-1',
            description:  'The number of unique addresses holding at least 1 coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 10":{
            url: '/v1/metrics/addresses/min_10_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-10',
            description:  'The number of unique addresses holding at least 10 coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 100":{
            url: '/v1/metrics/addresses/min_100_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-100',
            description:  'The number of unique addresses holding at least 100 coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 1k":{
            url: '/v1/metrics/addresses/min_1k_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-1k',
            description:  'The number of unique addresses holding at least 1k coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 10k":{
            url: '/v1/metrics/addresses/min_10k_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-10k',
            description:  'The number of unique addresses holding at least 10k coins. For Ethereum only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol', required: true},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Addresses with balance >= 32 ETH":{
            url: '/v1/metrics/addresses/min_32_count',
            doc_url: 'https://docs.glassnode.com/api/addresses#addresses-with-balance-32-eth',
            description:  'The number of unique addresses holding at least 32 ETH. This is the number of potential validators for ETH 2.0. Only Externally Owned Addresses (EOAs) are counted, contracts are excluded.',
            params:{
                a: {description: 'asset symbol (ETH only)', required: true, default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },


        "UTXOs Created":{
            url: '/v1/metrics/blockchain/utxo_created_count',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxos-created',
            description:  'The number of created unspent transaction outputs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs Spent":{
            url: '/v1/metrics/blockchain/utxo_spent_count',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxos-spent',
            description:  'The number of spent transaction outputs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs Value Created (Total)":{
            url: '/v1/metrics/blockchain/utxo_created_value_sum',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-value-created-total',
            description:  'The total amount of coins in newly created UTXOs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs Value Spent (Total)":{
            url: '/v1/metrics/blockchain/utxo_spent_value_sum',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-value-spent-total',
            description:  'The total amount of coins in spent transaction outputs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },

        "UTXOs Value Created (Mean)":{
            url: '/v1/metrics/blockchain/utxo_created_value_mean',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-value-created-mean',
            description:  'The mean amount of coins in newly created UTXOs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs Value Spent (Mean)":{
            url: '/v1/metrics/blockchain/utxo_spent_value_mean',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-value-spent-mean',
            description:  'The mean amount of coins in spent transaction outputs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs Value Created (Median)":{
            url: '/v1/metrics/blockchain/utxo_created_value_median',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-value-created-median',
            description:  'The median amount of coins in newly created UTXOs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs Value Spent (Median)":{
            url: '/v1/metrics/blockchain/utxo_spent_value_median',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-value-spent-median',
            description:  'The median amount of coins in spent transaction outputs.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs in Profits":{
            url: '/v1/metrics/blockchain/utxo_profit_count',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-in-profit',
            description:  'The number of unspent transaction outputs whose price at creation time was lower than the current price. For more information see this article (https://medium.com/glassnode-insights/dissecting-bitcoins-unrealised-on-chain-profit-loss-73e735020c8d).',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "UTXOs in Loss":{
            url: '/v1/metrics/blockchain/utxo_loss_count',
            doc_url: 'https://docs.glassnode.com/api/blockchain#utxo-in-loss',
            description:  'The number of unspent transaction outputs whose price at creation time was higher than the current price. For more information see this article (https://medium.com/glassnode-insights/dissecting-bitcoins-unrealised-on-chain-profit-loss-73e735020c8d).',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Percent UTXOs in Profit":{
            url: '/v1/metrics/blockchain/utxo_profit_relative',
            doc_url: 'https://docs.glassnode.com/api/blockchain#percent-utxos-in-profit',
            description:  'The percentage of unspent transaction outputs whose price at creation time was lower than the current price. For more information see this article (https://medium.com/glassnode-insights/dissecting-bitcoins-unrealised-on-chain-profit-loss-73e735020c8d).\n',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.981980231502865}]'
        },
        "Block Height":{
            url: '/v1/metrics/blockchain/block_height',
            doc_url: 'https://docs.glassnode.com/api/blockchain#block-height',
            description:  'The block height, i.e. the total number of blocks ever created and included in the main blockchain.\n',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Block Mined":{
            url: '/v1/metrics/blockchain/block_count',
            doc_url: 'https://docs.glassnode.com/api/blockchain#block-mined',
            description:  'The number of blocks created and included in the main blockchain in that time period.\n',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":618852}]'
        },
        "Block Interval (Mean)":{
            url: '/v1/metrics/blockchain/block_interval_mean',
            doc_url: 'https://docs.glassnode.com/api/blockchain#block-interval-mean',
            description:  'The mean time (in seconds) between mined blocks.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":663.838461538462}]'
        },
        "Block Interval (Median)":{
            url: '/v1/metrics/blockchain/block_interval_median',
            doc_url: 'https://docs.glassnode.com/api/blockchain#block-interval-median',
            description:  'The median time (in seconds) between mined blocks.',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":663.838461538462}]'
        },
        "Block Size (Mean)":{
            url: '/v1/metrics/blockchain/block_size_mean',
            doc_url: 'https://docs.glassnode.com/api/blockchain#block-size-mean',
            description:  'The mean size of all blocks created within the time period (in bytes).\n',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1347932.73076923}]'
        },
        "Block Size (Total)":{
            url: '/v1/metrics/blockchain/block_size_sum',
            doc_url: 'https://docs.glassnode.com/api/blockchain#block-size-total',
            description:  'The total size of all blocks created within the time period (in bytes).\n',
            params:{
                a: {description: 'asset symbol', required: true, },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h', '24h', '1w' ,'1m']},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":175231255}]'
        },
        "Total Value Locked in DeFi (TVL)":{
            url: '/v1/metrics/defi/total_value_locked',
            doc_url: 'https://docs.glassnode.com/api/defi',
            description:  'The total value locked in all of DeFi. Please note that this does not only include DeFi in the Ethereum network. Source: DeFi Lama\n',
            params:{
                a: {description: 'asset symbol (ETH only)', required: true, default: "ETH"},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '24h',  ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":55227243703.86716}]'
        },
        "Exchange Balance (Total)":{
            url: '/v1/metrics/distribution/balance_exchanges',
            doc_url: 'https://docs.glassnode.com/api/distribution#exchange-balance-total',
            description:  'The total amount of coins held on exchange addresses. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['1h', '24h', '10m'  ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":55227243703.86716}]'
        },
        "Exchange Net Position Change":{
            url: '/v1/metrics/distribution/exchange_net_position_change',
            doc_url: 'https://docs.glassnode.com/api/distribution#exchange-net-position-change',
            description:  'The 30d change of the supply held in exchange wallets.',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":55227243703.86716}]'
        },
        "Exchange Balance (Percent)":{
            url: '/v1/metrics/distribution/balance_exchanges_relative',
            doc_url: 'https://docs.glassnode.com/api/distribution#exchange-balance-percent',
            description:  'The percent supply held on exchange addresses. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['1h', '24h', '10m'  ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.14031713428927348}]'
        },
        "Exchange Balance (Stacked)":{
            url: '/v1/metrics/distribution/balance_exchanges_all',
            doc_url: 'https://docs.glassnode.com/api/distribution#exchange-balance-stacked',
            description:  'The percent supply held on exchange addresses. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"binance":362581.12205584,"bitfinex":105628.17362217,"bithumb":20859.85074187,"bitmex":117389.09310413,"bitstamp":88317.95357653,"bittrex":93125.33273907,"coinbase":866330.21344423,"coincheck":31922.86654034,"ftx":37997.73382687,"gate.io":12495.57379613,"gemini":264542.65223614,"hitbtc":56699.28029552,"huobi":221957.39826201,"kraken":169890.49001436,"kucoin":288.00175251,"luno":7843.30335199,"okex":119884.43048572,"poloniex":38071.8728946}}]'
        },
        "Supply of Top 1% Addresses":{
            url: '/v1/metrics/distribution/balance_1pct_holders',
            doc_url: 'https://docs.glassnode.com/api/distribution#supply-of-top-1-addresses',
            description:  'The percentage of supply held by the top 1% addresses. For Bitcoin we use entities (cluster of addresses controlled by the same network entity) rather than addresses. Exchange addresses/entities, smart contract addresses, and other special asset-specific addresses (e.g. team fund addresses) are excluded.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.965586}]'
        },
        "Gini Coefficient":{
            url: '/v1/metrics/distribution/gini',
            doc_url: 'https://docs.glassnode.com/api/distribution#gini-coefficient',
            description:  'The gini coefficient for the distribution of coins over addresses. For Bitcoin we use entities (cluster of addresses controlled by the same network entity) rather than addresses for the computation of this metric. Exchange addresses/entities, smart contract addresses, and other special asset-specific addresses (e.g. team fund addresses) are excluded for the computation of the gini.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.99579}]'
        },
        "Herfindahl Index":{
            url: '/v1/metrics/distribution/herfindahl',
            doc_url: 'https://docs.glassnode.com/api/distribution#herfindahl-index',
            description:  'Originally used as a measure of competition (https://en.wikipedia.org/wiki/Herfindahl–Hirschman_Index), we adapt the Herfindahl Index as a metric for decentralization. It measures the addresses\' shares of the current supply, and is defined as the sum of weighted address balances in the network. A large score indicates high concentration of supply, whereas a small score is an indicator for more evenly distributed funds across addresses. For Bitcoin we use entities (cluster of addresses controlled by the same network entity) rather than addresses. Exchange addresses/entities, smart contract addresses and other special asset-specific addresses (e.g. team fund addresses) are excluded.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.00099}]'
        },
        "Supply in Smart Contracts":{
            url: '/v1/metrics/distribution/supply_contracts',
            doc_url: 'https://docs.glassnode.com/api/distribution#supply-in-smart-contracts',
            description: 'The percent of total supply of the token that is held in smart contracts.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.207087}]'
        },
        "Wrapped BTC (WBTC) Balance":{
            url: '/v1/metrics/distribution/balance_wbtc',
            doc_url: 'https://docs.glassnode.com/api/distribution#wrapped-btc-wbtc-balance',
            description: 'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin and designed to act as representation of Bitcoin on the Ethereum blockchain. The WBTC supply listed here corresponds to the amount of Bitcoin held by BitGo, the custodian responsible for minting new WBTC ERC20 tokens and guaranteeing backing of new ERC20 tokens by actual BTC.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":123333.45408548}]'
        },
        "Mt. Gox Balance":{
            url: '/v1/metrics/distribution/balance_mtgox_trustee',
            doc_url: 'https://docs.glassnode.com/api/distribution#mt.-gox-balance',
            description: 'The Mt. Gox Trustee Balance corresponds to the amount of BTC held in addresses controlled by Nobuaki Kobayashi, the trustee overseeing the Mt. Gox civil rehabilitation proceedings.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":137890.97857473}]'
        },
        "Luna Foundation Guard Balance":{
            url: '/v1/metrics/distribution/balance_luna_foundation_guard',
            doc_url: 'https://docs.glassnode.com/api/distribution#luna-foundation-guard-balance',
            description: 'The Luna Foundation Guard Balance corresponds to the amount of BTC () held in addresses of the Luna Foundation Guard (LFG), which controls the bitcoin reserve supporting the TerraUSD (UST) stablecoin .\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[]'
        },
        "New Deposits ETH 2.0":{
            url: '/v1/metrics/eth2/staking_deposits_count',
            doc_url: 'https://docs.glassnode.com/api/eth2#new-deposits',
            description: 'The number transactions depositing 32 ETH to the ETH2 deposit contract.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":356}]'
        },
        "New Value Staked ETH 2.0":{
            url: '/v1/metrics/eth2/staking_volume_sum',
            doc_url: 'https://docs.glassnode.com/api/eth2#new-value-staked',
            description: 'The amount of ETH transferred to the ETH2 deposit contract.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":11392}]'
        },
        "New Validators ETH 2.0":{
            url: '/v1/metrics/eth2/staking_validators_count',
            doc_url: 'https://docs.glassnode.com/api/eth2#new-validators',
            description: 'The number of new validators (accounts) depositing 32 ETH to the ETH2 deposit contract.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":356}]'
        },

        "Total Number of Deposits ETH 2.0":{
            url: '/v1/metrics/eth2/staking_total_deposits_count',
            doc_url: 'https://docs.glassnode.com/api/eth2#total-number-of-deposits',
            description: 'The total number of transactions to the ETH2 deposit contract.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":104182}]'
        },
        "Total Value Staked ETH 2.0":{
            url: '/v1/metrics/eth2/staking_total_volume_sum',
            doc_url: 'https://docs.glassnode.com/api/eth2#total-value-staked',
            description: 'The amount of ETH that has been deposited to the ETH2 deposit contract, the current ETH balance on the ETH2 deposit contract.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":3333122}]'
        },
        "Total Number of Validators ETH 2.0":{
            url: '/v1/metrics/eth2/staking_validators_count',
            doc_url: 'https://docs.glassnode.com/api/eth2#total-number-of-validators',
            description: 'The total number of unique validators (accounts) that have deposited 32 ETH to the ETH2 deposit contract.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":104121}]'
        },
        "Phase 0 Staking Goal ETH 2.0":{
            url: '/v1/metrics/eth2/staking_phase_0_goal_percent',
            doc_url: 'https://docs.glassnode.com/api/eth2#phase-0-staking-goal',
            description: 'The percentage of the Phase 0 staking goal, i.e. the total volume deposited to the ETH2 deposit contract divided by 524,288. The ETH2 network needs to reach at least 524,288 ETH (16,384 validators) to launch the mainnet.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":6.357425689697266}]'
        },



        "Gas Used (Total)":{
            url: '/v1/metrics/fees/gas_used_sum',
            doc_url: 'https://docs.glassnode.com/api/fees#gas-used-total',
            description: 'The total amount of gas used in all transactions.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":79071397736}]'
        },
        "Gas Used (Mean)":{
            url: '/v1/metrics/fees/gas_used_mean',
            doc_url: 'https://docs.glassnode.com/api/fees#gas-used-mean',
            description: 'The mean amount of gas used in all transactions.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":66674.87213441}]'
        },
        "Gas Used (Median)":{
            url: '/v1/metrics/fees/gas_used_median',
            doc_url: 'https://docs.glassnode.com/api/fees#gas-used-median',
            description: 'The median amount of gas used in all transactions.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":66674.87213441}]'
        },
        "Transaction Gas Limit (Mean)":{
            url: '/v1/metrics/fees/gas_limit_tx_mean',
            doc_url: 'https://docs.glassnode.com/api/fees#transaction-gas-limit-mean',
            description: 'The mean gas limit per transaction.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":159727.884050846}]'
        },
        "Transaction Gas Limit (Median)":{
            url: '/v1/metrics/fees/gas_limit_tx_median',
            doc_url: 'https://docs.glassnode.com/api/fees#transaction-gas-limit-median',
            description: 'The median gas limit per transaction.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":159727.884050846}]'
        },
        "Gas Price (Mean)":{
            url: '/v1/metrics/fees/gas_price_mean',
            doc_url: 'https://docs.glassnode.com/api/fees#gas-price-mean',
            description: 'The mean gas price paid per transaction.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":118525248946.951}]'
        },
        "Gas Price (Median)":{
            url: '/v1/metrics/fees/gas_price_median',
            doc_url: 'https://docs.glassnode.com/api/fees#gas-price-median',
            description: 'The median gas price paid per transaction.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":118525248946.951}]'
        },
        "Fees (Total)":{
            url: '/v1/metrics/fees/volume_sum',
            doc_url: 'https://docs.glassnode.com/api/fees#fees-total',
            description: 'The total amount of fees paid to miners. Issued (minted) coins are not included.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":121.83630841}]'
        },
        "Fees (Mean)":{
            url: '/v1/metrics/fees/volume_mean',
            doc_url: 'https://docs.glassnode.com/api/fees#fees-mean',
            description: 'The mean amount of fees paid to miners. Issued (minted) coins are not included.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.000434578689197624}]'
        },
        "Fees (Median)":{
            url: '/v1/metrics/fees/volume_median',
            doc_url: 'https://docs.glassnode.com/api/fees#fees-median',
            description: 'The median amount of fees paid to miners. Issued (minted) coins are not included.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m', '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.000434578689197624}]'
        },
        "Fee Ratio Multiple (FRM)":{
            url: '/v1/metrics/fees/fee_ratio_multiple',
            doc_url: 'https://docs.glassnode.com/api/fees#fee-ratio-multiple-frm',
            description: 'The Fee Ratio Multiple (FRM) is defined as the ratio between the total miner revenue (blocks rewards + transaction fees) and transaction fees. FRM is a measure of a blockchain\'s security and gives an assessment how secure a chain is once block rewards disappear.',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'ETH'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h', '10m',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":7.668783801835153}]'
        },

        "RHODL Ratio":{
            url: '/v1/metrics/indicators/rhodl_ratio',
            doc_url: 'https://docs.glassnode.com/api/indicators#rhodl-ratio',
            description: 'The Realized HODL Ratio is a market indicator that uses a ratio of the Realized Cap HODL Waves. In particular, the RHODL Ratio takes the ratio between the 1 week and the 1-2 years RCap HODL bands. In addition, it accounts for increased supply by weighting the ratio by the total market age. A high ratio is an indication of an overheated market and can be used to time cycle tops',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":11736.695660092}]'
        },
        "CVDD":{
            url: '/v1/metrics/indicators/cvdd',
            doc_url: 'https://docs.glassnode.com/api/indicators#cvdd',
            description: 'Cumulative Value-Days Destroyed (CVDD) is the ratio of the cumulative USD value of Coin Days Destroyed and the market age (in days). Historically, CVDD has been an accurate indicator for global Bitcoin market bottoms',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":7107.76067290648}]'
        },
        "Balance Price":{
            url: '/v1/metrics/indicators/balanced_price_usd',
            doc_url: 'https://docs.glassnode.com/api/indicators#balanced-price',
            description: 'Balanced Price is the difference between Realized Price and Transfer Price. Transfer Price is the cumulative sum of Coin Days Destroyed in USD, adjusted by circulating supply and total time since Bitcoin\'s inception. Balanced Price attempts to detect major cycle bottoms',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":12820.42304013733}]'
        },

        "Hash Ribbon":{
            url: '/v1/metrics/indicators/hash_ribbon',
            doc_url: 'https://docs.glassnode.com/api/indicators#hash-ribbon',
            description: 'The Hash Ribbon is a market indicator that assumes that Bitcoin tends to reach a bottom when miners capitulate, i.e. when Bitcoin becomes too expensive to mine relative to the cost of mining. The Hash Ribbon indicates that the worst of the miner capitulation is over when the 30d MA of the hash rate crosses above the 60d MA (switch from light red to dark red areas). Times when this occurs and the price momentum switches from negative to positive have shown to be good buying opportunities (switch from dark red to white)',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"buy":0,"capitulation":0,"crossed":0,"ma30":154402746378203560000,"ma60":151785951956532430000}}]'
        },
        "Difficulty Ribbon":{
            url: '/v1/metrics/indicators/difficulty_ribbon',
            doc_url: 'https://docs.glassnode.com/api/indicators#difficulty-ribbon',
            description: 'The Difficulty Ribbon is an indicator that uses simple moving averages (200d, 128d, 90d, 60d, 40d, 25d, 14d) of the Bitcoin mining difficulty (https://studio.glassnode.com/metrics?a=BTC&m=mining.DifficultyLatest) to create the ribbon. Historically, periods when the ribbon compresses have been good buying opportunities',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"ma128":8.375418784633655e+22,"ma14":9.30377876582909e+22,"ma200":8.19934213972157e+22,"ma25":9.250262836512482e+22,"ma40":9.130637732683341e+22,"ma60":8.922384160053527e+22,"ma9":9.33044489295953e+22,"ma90":8.645398228124447e+22}}]'
        },
        "Difficulty Ribbon Compression":{
            url: '/v1/metrics/indicators/difficulty_ribbon_compression',
            doc_url: 'https://docs.glassnode.com/api/indicators#difficulty-ribbon-compression',
            description: 'Difficulty Ribbon Compression is a market indicator that uses a normalized standard deviation to quantify compression of the Difficulty Ribbon. Historically, zones of high compression (low values) have been good buying opportunities. The compression threshold is set here at 0.05.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.04627619655202409}]'
        },

        "NVT Ratio":{
            url: '/v1/metrics/indicators/nvt',
            doc_url: 'https://docs.glassnode.com/api/indicators#nvt-ratio',
            description: 'The Network Value to Transactions (NVT) Ratio is computed by dividing the market cap by the transferred on-chain volume measured in USD',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":37.79788074473667}]'
        },
        "NVT Signal":{
            url: '/v1/metrics/indicators/nvts',
            doc_url: 'https://docs.glassnode.com/api/indicators#nvt-signal',
            description: 'The NVT Signal (NVTS) is a modified version of the original NVT Ratio. It uses a 90 day moving average of the daily transaction volume in the denominator instead of the raw daily transaction volume. This moving average improves the ratio to better function as a leading indicator.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"ma128":8.375418784633655e+22,"ma14":9.30377876582909e+22,"ma200":8.19934213972157e+22,"ma25":9.250262836512482e+22,"ma40":9.130637732683341e+22,"ma60":8.922384160053527e+22,"ma9":9.33044489295953e+22,"ma90":8.645398228124447e+22}}]'
        },
        "Velocity":{
            url: '/v1/metrics/indicators/velocity',
            doc_url: 'https://docs.glassnode.com/api/indicators#velocity',
            description: 'Velocity is a measure of how quickly units are circulating in the network and is calculated by dividing the on-chain transaction volume (in USD) by the market cap, i.e. the inverse of the NVT ratio.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m', '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.026456509738029408}]'
        },

        "Supply-Adjusted CDD":{
            url: '/v1/metrics/indicators/cdd_supply_adjusted',
            doc_url: 'https://docs.glassnode.com/api/indicators#supply-adjusted-cdd',
            description: 'Adjusted Coin Days Destroyed simply divides CDD by the circulating supply (total amount of coins issued). Adjusted CDD more accurately represents the quantity of native coins sold by long-term holders over time.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.42424034176182446}]'
        },
        "Binary CDD":{
            url: '/v1/metrics/indicators/cdd_supply_adjusted_binary',
            doc_url: 'https://docs.glassnode.com/api/indicators#binary-cdd',
            description: 'Binary Coin Days Destroyed (Binary CDD) is computed by thresholding Adjusted CDD by its average over time, i.e. taking the mean destruction over time and asking whether there were more Adjusted CDDs destroyed today than on average. Binary CDD is used in order to minimize the impact of exchange movements, which do not accurately reflect behavior of the long-term holders',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0}]',
        },
        "Supply-Adjusted Dormancy":{
            url: '/v1/metrics/indicators/average_dormancy_supply_adjusted',
            doc_url: 'https://docs.glassnode.com/api/indicators#supply-adjusted-dormancy',
            description: 'Dormancy is the average number of days destroyed per coin transacted, and is defined as the ratio of coin days destroyed and total transfer volume',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m', '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":8.60164228946218e-7}]'
        },
        "Puell Multiple":{
            url: '/v1/metrics/indicators/puell_multiple',
            doc_url: 'https://docs.glassnode.com/api/indicators#puell-multiple',
            description: 'The Puell Multiple is calculated by dividing the daily issuance value of bitcoins (in USD) by the 365-day moving average of daily issuance value.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2.40989379548892}]'
        },
        "aSOPR":{
            url: '/v1/metrics/indicators/sopr_adjusted',
            doc_url: 'https://docs.glassnode.com/api/indicators#asopr',
            description: 'Adjusted SOPR is SOPR ignoring all outputs with a lifespan of less than 1 hour.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":1.05718779610037}]',
        },
        "Reserve Risk":{
            url: '/v1/metrics/indicators/reserve_risk',
            doc_url: 'https://docs.glassnode.com/api/indicators#reserve-risk',
            description: 'Reserve Risk is defined as price / HODL Bank. It is used to assess the confidence of long-term holders relative to the price of the native coin at any given point in time. When confidence is high and price is low, there is an attractive risk/reward to invest (Reserve Risk is low). When confidence is low and price is high then risk/reward is unattractive at that time (Reserve Risk is high).',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.006707944759253438}]'
        },
        "Coin Years Destroyed (CYD)":{
            url: '/v1/metrics/indicators/cyd',
            doc_url: 'https://docs.glassnode.com/api/indicators#coin-years-destroyed-cyd',
            description: 'Coin Years Destroyed (CYD) is defined as the 365 day rolling sum of Coin Days Destroyed (CDD), and shows the amount of coin days that have been destroyed over the past year. It is indicative of long-term holder behaviour',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614470400,"v":4020542992.4289646},{"t":1614556800,"v":4023369966.45044}]',
        },
        "Supply-Adjusted CYD":{
            url: '/v1/metrics/indicators/cyd_supply_adjusted',
            doc_url: 'https://docs.glassnode.com/api/indicators#supply-adjusted-cyd',
            description: 'Coin Years Destroyed (CYD) is defined as the 365 day rolling sum of Coin Days Destroyed (CDD), and shows the amount of coin days that have been destroyed over the past year. It is indicative of long-term holder behaviour. This version is supply-adjusted to account for the increasing baseline of the metric over time.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [      '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614470400,"v":217.2524803519757},{"t":1614556800,"v":217.3982190952282}]'
        },
        "90D Coin Days Destroyed (CDD-90)":{
            url: '/v1/metrics/indicators/cdd90_age_adjusted',
            doc_url: 'https://docs.glassnode.com/api/indicators#90d-coin-days-destroyed-cdd-90',
            description: '90D Coin Days Destroyed is the 90 day rolling sum of Coin Days Destroyed (CDD) and shows the amount of coin days that have been destroyed over the past year. This version is age-adjusted meaning that we normalize by time in order to account for the increasing baseline as time goes by.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614470400,"v":371731.83586700866},{"t":1614556800,"v":368098.56978506857}]',
        },
        "SOPR":{
            url: '/v1/metrics/indicators/sopr',
            doc_url: 'https://docs.glassnode.com/api/indicators#sopr',
            description: 'The Spent Output Profit Ratio (SOPR) is computed by dividing the realized value (in USD) divided by the value at creation (USD) of a spent output. Or simply: price sold / price paid. This metric was created by Renato Shirakashi. For a detailed commentary see this post.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1.01522641599799}]'
        },
        "Coin Days Destroyed (CDD)":{
            url: '/v1/metrics/indicators/cdd',
            doc_url: 'https://docs.glassnode.com/api/indicators#coin-days-destroyed-cdd',
            description: 'Coin Days Destroyed (CDD) for any given transaction is calculated by taking the number of coins in a transaction and multiplying it by the number of days it has been since those coins were last spent.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":7908789.2082051}]'
        },
        "ASOL":{
            url: '/v1/metrics/indicators/asol',
            doc_url: 'https://docs.glassnode.com/api/indicators#asol',
            description: 'Average Spent Output Lifespan (ASOL) is the average age (in days) of spent transaction outputs. Outputs with a lifespan of less than 1h are discarded.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":29.6668550463353}]',
        },
        "MSOL":{
            url: '/v1/metrics/indicators/msol',
            doc_url: 'https://docs.glassnode.com/api/indicators#msol',
            description: 'Median Spent Output Lifespan (MSOL) is the median age (in days) of spent transaction outputs. Outputs with a lifespan of less than 1h are discarded.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2.45491898148148}]'
        },

        "Dormancy":{
            url: '/v1/metrics/indicators/average_dormancy',
            doc_url: 'https://docs.glassnode.com/api/indicators#dormancy',
            description: 'Dormancy is the average number of days destroyed per coin transacted, and is defined as the ratio of coin days destroyed and total transfer volume',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":16.03538584501977}]',
        },
        "Liveliness":{
            url: '/v1/metrics/indicators/liveliness',
            doc_url: 'https://docs.glassnode.com/api/indicators#liveliness',
            description: 'Liveliness is defined as the ratio of the sum of Coin Days Destroyed and the sum of all coin days ever created. Liveliness increases as long term holder liquidate positions and decreases while they accumulate to HODL.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',    '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.617889587368704}]'
        },
        "Relative Unrealized Profit":{
            url: '/v1/metrics/indicators/unrealized_profit',
            doc_url: 'https://docs.glassnode.com/api/indicators#relative-unrealized-profit',
            description: 'Relative Unrealized Profit is defined as the total profit in USD of all coins in existence whose price at realisation time was lower than the current price normalised by the market cap.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0.699516929765209}]',
        },
        "Relative Unrealized Loss":{
            url: '/v1/metrics/indicators/unrealized_loss',
            doc_url: 'https://docs.glassnode.com/api/indicators#relative-unrealized-loss',
            description: 'Relative Unrealized Loss is defined as the total loss in USD of all coins in existence whose price at realisation time was higher than the current price normalised the market cap.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0.00313812006065384}]',
        },
        "Net Unrealized Profit/Loss (NUPL)":{
            url: '/v1/metrics/indicators/net_unrealized_profit_loss',
            doc_url: 'https://docs.glassnode.com/api/indicators#net-unrealized-profit-loss-nupl',
            description: 'Net Unrealized Profit/Loss is the difference between Relative Unrealized Profit and Relative Unrealized Loss. This metric can also be calculated by subtracting realised cap from market cap, and dividing the result by the market cap',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0.696378809704555}]',
        },
        "Entity-Adjusted Dormancy Flow":{
            url: '/v1/metrics/indicators/dormancy_flow',
            doc_url: 'https://docs.glassnode.com/api/indicators#entity-adjusted-dormancy-flow',
            description: 'Entity-adjusted Dormancy Flow is the ratio of the current market capitalization and the annualized dormancy value (measured in USD). Entity-adjusted Dormancy Flow can be used to time market lows and assess whether the bull market remains in relatively normal conditions. It helps confirm whether Bitcoin is in a bullish or bearish primary trend',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":815467.3736572348}]',
        },
        "Net Realized Profit/Loss":{
            url: '/v1/metrics/indicators/net_realized_profit_loss',
            doc_url: 'https://docs.glassnode.com/api/indicators#net-realized-profit-loss',
            description: 'Net Realized Profit/Loss is the net profit or loss of all moved coins, and is defined by the difference of Realized Profit - Realized Loss.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1280812570.76976}]'
        },
        "Realized P/L Ratio":{
            url: '/v1/metrics/indicators/realized_profit_loss_ratio',
            doc_url: 'https://docs.glassnode.com/api/indicators#realized-p-l-ratio',
            description: 'Realized Profit/Loss Ratio is the ratio between all coins moved at a profit and at a loss, i.e. Realized Profit / Realized Loss..',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":6.68102662407061}]'
        },
        "Stock-to-Flow Ratio":{
            url: '/v1/metrics/indicators/stock_to_flow_ratio',
            doc_url: 'https://docs.glassnode.com/api/indicators#stock-to-flow-ratio',
            description: 'The Stock to Flow (S/F) Ratio is a popular model that assumes that scarcity drives value. Stock to Flow is defined as the ratio of the current stock of a commodity (i.e. circulating Bitcoin supply) and the flow of new production (i.e. newly mined bitcoins). Bitcoin\'s price has historically followed the S/F Ratio and therefore it is a model that can be used to predict future Bitcoin valuations',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"o":{"daysTillHalving":1154,"price":49768.16035012147,"ratio":55440.73166028007}}]',
        },
        "Stock-to-Flow Deflection":{
            url: '/v1/metrics/indicators/stock_to_flow_deflection',
            doc_url: 'https://docs.glassnode.com/api/indicators#stock-to-flow-deflection',
            description: 'The Stock to Flow (S/F) Deflection is the ratio between the current Bitcoin price and the S/F model. If deflection is ≥ 1 it means that Bitcoin is overvalued according to the S/F model, otherwise undervalued.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.8977729501845982}]'
        },
        "Realized Profit":{
            url: '/v1/metrics/indicators/realized_profit',
            doc_url: 'https://docs.glassnode.com/api/indicators#realized-profit',
            description: 'Realized Profit denotes the total profit (USD value) of all moved coins whose price at their last movement was lower than the price at the current movement.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":1506266992.21939}]',
        },
        "Realized Loss":{
            url: '/v1/metrics/indicators/realized_loss',
            doc_url: 'https://docs.glassnode.com/api/indicators#realized-loss',
            description: 'Realized Loss denotes the total loss (USD value) of all moved coins whose price at their last movement was higher than the price at the current movement.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',    '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":225454421.449627}]'
        },
        "Stablecoin Supply Ratio (SSR)":{
            url: '/v1/metrics/indicators/ssr',
            doc_url: 'https://docs.glassnode.com/api/indicators#stablecoin-supply-ratio-ssr',
            description: 'The Stablecoin Supply Ratio (SSR) is the ratio between Bitcoin supply and the supply of stablecoins denoted in BTC, or: Bitcoin Marketcap / Stablecoin Marketcap. We use the following stablecoins for the supply: USDT, TUSD, USDC, USDP, GUSD, DAI, SAI, and BUSD. When the SSR is low, the current stablecoin supply has more "buying power" to purchase BTC. It serves as a proxy for the supply/demand mechanics between BTC and USD',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"o":{"h":23.345999612743775,"l":7.151128652306964,"v":18.578375571193103}}]',
        },
        "Stablecoin Supply Ratio (SSR) Oscillator":{
            url: '/v1/metrics/indicators/ssr_oscillator',
            doc_url: 'https://docs.glassnode.com/api/indicators#stablecoin-supply-ratio-ssr-oscillator',
            description: 'The Stablecoin Supply Ratio Oscillator is derived from the Stablecoin Supply Ratio (SSR), and quantifies how the 200d SMA of the SSR moves within the Bollinger Bands BB(200, 2)',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0.8224360531929604}]',
        },
        "Spent Output Age Bands":{
            url: '/v1/metrics/indicators/soab',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-output-age-bands',
            description: 'Spent Output Age Bands (SOAB) is a bundle of all spent outputs that were created within a specified ageband. Each line represents the percentage of spent outputs that were created within the time period denoted in the legend.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"o":{"1d_1w":0.207521569631565,"1h":0.212052635674677,"1h_24h":0.299032786844094,"1m_3m":0.0347611839512402,"1w_1m":0.215161624757444,"1y_2y":0.0061778135911899,"2y_3y":0.00329851566794942,"3m_6m":0.009272996101526,"3y_5y":0.00410557258366155,"5y_7y":0.00102545178870422,"6m_12m":0.00729489081511493,"7y_10y":0.000294958592834138,"more_10y":0}}]',
        },
        "Spent Outputs < 1h":{
            url: '/v1/metrics/indicators/sol_1h',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-less-than-1h',
            description: 'The total number of spent outputs that were created within the last hour.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":168947}]',
        },
        "Spent Outputs 1h-24h":{
            url: '/v1/metrics/indicators/sol_1h_24h',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-1h-24h',
            description: 'The total number of spent outputs that were created between 1h and 24 hours ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',   '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":238246}]'
        },
        "Spent Outputs 1d-1w":{
            url: '/v1/metrics/indicators/sol_1d_1w',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-1d-1w',
            description: 'The total number of spent outputs that were created between 1d and 1w ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":165337}]'
        },
        "Spent Outputs 1w-1m":{
            url: '/v1/metrics/indicators/sol_1w_1m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-1w-1m',
            description: 'The total number of spent outputs that were created between 1w and 1m ago.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m', '1h', '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":171424}]',
        },
        "Spent Outputs 1m-3m":{
            url: '/v1/metrics/indicators/sol_1m_3m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-1m-3m',
            description: 'The total number of spent outputs that were created between 1m and 3m ago.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '10m',  '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":27695}]'
        },
        "Spent Outputs 3m-6m":{
            url: '/v1/metrics/indicators/sol_3m_6m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-3m-6m',
            description: 'The total number of spent outputs that were created between 3m and 6m ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',   '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":7388}]',
        },
        "Spent Outputs 6m-12m":{
            url: '/v1/metrics/indicators/sol_6m_12m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-6m-12m',
            description: 'The total number of spent outputs that were created between 6m and 12m ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m',  '1h',    '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":5812}]'
        },
        "Spent Outputs 1y-2y":{
            url: '/v1/metrics/indicators/sol_1y_2y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-1y-2y',
            description: 'The total number of spent outputs that were created between 1y and 2y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":4922}]',
        },
        "Spent Outputs 2y-3y":{
            url: '/v1/metrics/indicators/sol_2y_3y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-2y-3y',
            description: 'The total number of spent outputs that were created between 2y and 3y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":2628}]',
        },
        "Spent Outputs 3y-5y":{
            url: '/v1/metrics/indicators/sol_3y_5y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-3y-5y',
            description: 'The total number of spent outputs that were created between 3y and 5y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m', '1h',    '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":3271}]'
        },
        "Spent Outputs 5y-7y":{
            url: '/v1/metrics/indicators/sol_5y_7y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-5y-7y',
            description: 'The total number of spent outputs that were created between 5y and 7y ago',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":817}]',
        },
        "Spent Outputs 7y-10y":{
            url: '/v1/metrics/indicators/sol_7y_10y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-7y-10y',
            description: 'The total number of spent outputs that were created between 7y and 10y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',   '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":235}]'
        },
        "Spent Outputs > 10y":{
            url: '/v1/metrics/indicators/sol_more_10y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-outputs-greater-than-10y',
            description: 'The total number of spent outputs that were created more than 10 years ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0}]'
        },
        "Spent Volume Age Bands (SVAB)":{
            url: '/v1/metrics/indicators/svab',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-age-bands-svab',
            description: 'Spent Volume Age Bands (SVAB) is a separation of the on-chain transfer volume based on the coins\' age. Each band represents the percentage of spent volume that was previously moved within the time period denoted in the legend.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"o":{"1d_1w":0.159853649794143,"1h":0.415708795800463,"1h_24h":0.29537918812004,"1m_3m":0.0342055486481017,"1w_1m":0.0623956819233631,"1y_2y":0.00457325329569319,"2y_3y":0.0017866922364579,"3m_6m":0.0186408781923728,"3y_5y":0.00371712975354566,"5y_7y":0.000104414942927017,"6m_12m":0.0034481744425942,"7y_10y":0.000186592850296279,"more_10y":0}}]',
        },
        "Spent Volume < 1h":{
            url: '/v1/metrics/indicators/svl_1h',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-less-than-1h',
            description: 'The total transfer volume of coins younger than one hour.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '10m',  '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":204847.91621909}]'
        },
        "Spent Volume 1h-24h":{
            url: '/v1/metrics/indicators/svl_1h_24h',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-1h-24h',
            description: 'The total transfer volume of coins that were last active between 1h and 24 hours ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',   '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":145553.35800477}]',
        },
        "Spent Volume 1d-1w":{
            url: '/v1/metrics/indicators/svl_1d_1w',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-1d-1w',
            description: 'The total transfer volume of coins that were last active between 1d and 1w ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m',  '1h',    '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":78770.7342042001}]'
        },
        "Spent Volume 1w-1m":{
            url: '/v1/metrics/indicators/svl_1w_1m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-1w-1m',
            description: 'The total transfer volume of coins that were last active between 1w and 1m ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":30746.5840323598}]',
        },
        "Spent Volume 1m-3m":{
            url: '/v1/metrics/indicators/svl_1m_3m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-1m-3m',
            description: 'The total transfer volume of coins that were last active between 1m and 3m ago',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":16855.39356992}]',
        },
        "Spent Volume 3m-6m":{
            url: '/v1/metrics/indicators/svl_3m_6m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-3m-6m',
            description: 'The total transfer volume of coins that were last active between 3m and 6m ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m', '1h',    '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":9185.62487197001}]'
        },
        "Spent Volume 6m-12m":{
            url: '/v1/metrics/indicators/svl_6m_12m',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-6m-12m',
            description: 'The total transfer volume of coins that were last active between 6m and 12m ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":1699.14939607}]',
        },
        "Spent Volume 1y-2y":{
            url: '/v1/metrics/indicators/svl_1y_2y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-1y-2y',
            description: 'The total transfer volume of coins that were last active between 1y and 2y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '10m',  '1h', '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2253.55204756}]'
        },
        "Spent Volume 2y-3y":{
            url: '/v1/metrics/indicators/svl_2y_3y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-2y-3y',
            description: 'The total transfer volume of coins that were last active between 2y and 3y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',   '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":880.424434749999}]',
        },
        "Spent Volume 3y-5y":{
            url: '/v1/metrics/indicators/svl_3y_5y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-3y-5y',
            description: 'The total transfer volume of coins that were last active between 3y and 5y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m',  '1h',    '24h',    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1831.68191778}]'
        },
        "Spent Volume 5y-7y":{
            url: '/v1/metrics/indicators/svl_5y_7y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-5y-7y',
            description: 'The total transfer volume of coins that were last active between 5y and 7y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":51.45232359}]',
        },
        "Spent Volume 7y-10y":{
            url: '/v1/metrics/indicators/svl_7y_10y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-7y-10y',
            description: 'The total transfer volume of coins that were last active between 7y and 10y ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":91.9469516900001}]',
        },
        "Spent Volume > 10y":{
            url: '/v1/metrics/indicators/svl_more_10y',
            doc_url: 'https://docs.glassnode.com/api/indicators#spent-volume-greater-than-10y',
            description: 'The total transfer volume of coins that were last active more than 10 years ago.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m', '1h',    '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: ['NATIVE', 'USD']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0}]'
        },
        "Bitcoin Volatility Index (BVIN)":{
            url: '/v1/metrics/indicators/bvin',
            doc_url: 'https://docs.glassnode.com/api/indicators#bitcoin-volatility-index-bvin',
            description: 'The Bitcoin Volatility Index (BVIN) is an implied volatility index that also represents the fair value of a bitcoin variance swap. The index is calculated by CryptoCompare using options data from Deribit and has been developed in collaboration with Carol Alexander and Arben Imeraj at the University of Sussex Business School. The index is suitable for use as a settlement price for bitcoin volatility futures',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":1.0701}]',
        },




        "Investor Capitalization":{
            url: '/v1/metrics/indicators/investor_capitalization',
            doc_url: 'https://docs.glassnode.com/api/indicators#investor-capitalization',
            description: 'Investor Capitalization is the difference of Realized Cap and Thermocap. It discounts the capital paid to miners from the market’s general cost basis, serving as a bottom indicator in bear cycles.',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":259646688229.636}]',
        },
        "Realized Profits-to-Value (RPV) Ratio":{
            url: '/v1/metrics/indicators/realized_profits_to_value_ratio',
            doc_url: 'https://docs.glassnode.com/api/indicators#realized-profits-to-value-rpv-ratio',
            description: 'The Realized Profits-to-Value Ratio (RPV) is defined as the ratio of Realized Profits and Realized Cap. This metric compares profit-taking in the market with its overall cost basis on a dollar-to-dollar basis',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '1h',   '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0.00534804912075168}]',
        },
        "Seller Exhaustion Constant":{
            url: '/v1/metrics/indicators/seller_exhaustion_constant',
            doc_url: 'https://docs.glassnode.com/api/indicators#seller-exhaustion-constant',
            description: 'Seller Exhaustion Constant is defined as the product of the Percentage Supply in Profit and 30-day price volatility. It detects when two factors co-align: low volatility and high losses, or, in other words, low risk bottoms',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"v":0.13053898829337524}]',
        },
        "Accumulation Trend Score":{
            url: '/v1/metrics/indicators/accumulation_trend_score',
            doc_url: 'https://docs.glassnode.com/api/indicators#accumulation-trend-score',
            description: 'The Accumulation Trend Score is an indicator that reflects the relative size of entities that are actively accumulating coins on-chain in terms of their BTC holdings. The scale of the Accumulation Trend Score represents both the size of the entities balance (their participation score), and the amount of new coins they have acquired/sold over the last month (their balance change score). An Accumulation Trend Score of closer to 1 indicates that on aggregate, larger entities (or a big part of the network) are accumulating, and a value closer to 0 indicates they are distributing or not accumulating. This provides insight into the balance size of market participants, and their accumulation behavior over the last month',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"o":{"price":49768.16035012147,"score":0.204466254194098}}]',
        },
        "Pi Cycle Top Indicator":{
            url: '/v1/metrics/indicators/pi_cycle_top',
            doc_url: 'https://docs.glassnode.com/api/indicators#pi-cycle-top-indicator',
            description: 'The Pi Cycle indicators is composed of the 111 day moving average (111SMA) and a 2x multiple of the 350 day moving average (350SMA x 2) of Bitcoin\'s price. This metric shows when BTC becomes significantly overheated (the shorter MA reaches the levels of the larger MA), and has historically been a good indicator for cycle tops',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response:'[{"t":1614556800,"o":{"ma111":30932.94980026362,"ma350x2":33155.397225559085}}]',
        },

        "Purpose Bitcoin ETF Holdings":{
            url: '/v1/metrics/institutions/purpose_etf_holdings_sum',
            doc_url: 'https://docs.glassnode.com/api/institutions#purpose-bitcoin-etf-holdings',
            description: 'The number of bitcoin in the Purpose Bitcoin ETF. Source: Purpose Investments\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":10673.7143}]'
        },
        "Purpose Bitcoin ETF Flows":{
            url: '/v1/metrics/institutions/purpose_etf_flows_sum',
            doc_url: 'https://docs.glassnode.com/api/institutions#purpose-bitcoin-etf-flows',
            description: 'The number of bitcoin flowing from/to the Purpose Bitcoin ETF. Source: Purpose Investments\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":10673.7143}]'
        },

        "Lightning Network Channel Size (Mean)":{
            url: '/v1/metrics/lightning/channel_size_mean',
            doc_url: 'https://docs.glassnode.com/api/lightning#lightning-network-channel-size-mean',
            description: 'The mean BTC size of of public Lightning Network channels.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.028203547833657694}]'
        },
        "Lightning Network Channel Size (Median)":{
            url: '/v1/metrics/lightning/channel_size_median',
            doc_url: 'https://docs.glassnode.com/api/lightning#lightning-network-channel-size-median',
            description: 'The median BTC size of of public Lightning Network channels.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.028203547833657694}]'
        },
        "Lightning Network Capacity":{
            url: '/v1/metrics/lightning/network_capacity_sum',
            doc_url: 'https://docs.glassnode.com/api/lightning#lightning-network-capacity',
            description: 'The total amount of BTC locked in the Lightning Network.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1101.40495}]'
        },

        "Lightning Network Number of Channels":{
            url: '/v1/metrics/lightning/channels_count',
            doc_url: 'https://docs.glassnode.com/api/lightning#lightning-network-number-of-channels',
            description: 'The number of public Lightning Network channels.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":39052}]'
        },
        "Lightning Network Number of Nodes":{
            url: '/v1/metrics/lightning/nodes_count',
            doc_url: 'https://docs.glassnode.com/api/lightning#lightning-network-number-of-nodes',
            description: 'The number of Lightning Network nodes.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":9301}]'
        },
        "Price":{
            url: '/v1/metrics/market/price_usd_close',
            doc_url: 'https://docs.glassnode.com/api/market#price',
            description: 'The asset\'s closing price in USD.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',   '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":49768.16035012147}]'
        },
        "Price OHLC":{
            url: '/v1/metrics/market/price_usd_ohlc',
            doc_url: 'https://docs.glassnode.com/api/market#price-ohlc',
            description: 'OHLC candlestick chart of the asset\'s price in USD.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  default: 'BTC'},
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"c":49768.16035012147,"h":49773.18922304233,"l":45159.50305252744,"o":45159.50305252744}}]'
        },

        "Price Drawdown from ATH":{
            url: '/v1/metrics/market/price_drawdown_relative',
            doc_url: 'https://docs.glassnode.com/api/market#price-drawdown-from-ath',
            description: 'The percent drawdown of the asset\'s price from the previous all-time high.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',   '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":-0.14679115046064417}]'
        },
        "Delta Cap":{
            url: '/v1/metrics/market/deltacap_usd',
            doc_url: 'https://docs.glassnode.com/api/market#delta-cap',
            description: 'Delta Cap is the difference between Realized Cap and Average Cap, where Average Cap is assumed to be the life-to-date moving average of Market Cap. It attempts to detect major market bottoms in Bitcoin cycles',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":217861878101.77612}]'
        },


        "Market Cap":{
            url: '/v1/metrics/market/marketcap_usd',
            doc_url: 'https://docs.glassnode.com/api/market#market-cap',
            description: 'The market capitalization (or network value) is defined as the product of the current supply by the current USD price.\n',
            params:{
                a: {description: 'asset symbol ', required: true,   },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: ['10m', '1h',  '24h',   '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":927789865185.0476}]'
        },
        "MVRV Ratio":{
            url: '/v1/metrics/market/mvrv',
            doc_url: 'https://docs.glassnode.com/api/market#mvrv-ratio',
            description: 'MVRV is the ratio between market cap and realised cap. It gives an indication of when the traded price is below a “fair value”',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":3.294147583645988}]'
        },
        "Realized Cap":{
            url: '/v1/metrics/market/marketcap_realized_usd',
            doc_url: 'https://docs.glassnode.com/api/market#realized-cap',
            description: 'Realized Cap values different part of the supplies at different prices (instead of using the current daily close). Specifically, it is computed by valuing each UTXO by the price when it was last moved.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":281647935202.151}]'
        },
        "MVRV Z-Score":{
            url: '/v1/metrics/market/mvrv_z_score',
            doc_url: 'https://docs.glassnode.com/api/market#mvrv-z-score',
            description: 'The MVRV Z-Score is used to assess when Bitcoin is over/undervalued relative to its "fair value". When market value is significantly higher than realized value, it has historically indicated a market top (red zone), while the opposite has indicated market bottoms (green zone). Technically, MVRV Z-Score is defined as the ratio between the difference of market cap and realized cap, and the standard deviation of market cap, i.e. (market cap – realized cap) / std(market cap).\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":5.83559714668574}]'
        },
        "Realized Price":{
            url: '/v1/metrics/market/price_realized_usd',
            doc_url: 'https://docs.glassnode.com/api/market#realized-price',
            description: 'Realized Price is the Realized Cap divided by the current supply.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":15108.054234485051}]'
        },
        "Difficulty":{
            url: '/v1/metrics/mining/difficulty_latest',
            doc_url: 'https://docs.glassnode.com/api/mining#difficulty',
            description: 'The current estimated number of hashes required to mine a block. Note: Bitcoin difficulty is often denoted as the relative difficulty with respect to the genesis block, which required approximately 2^32 hashes. For better comparison across blockchains, our values are denoted in raw hashes.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',  '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":9.33044489295953e+22}]'
        },
        "Hash Rate":{
            url: '/v1/metrics/mining/hash_rate_mean',
            doc_url: 'https://docs.glassnode.com/api/mining#hash-rate',
            description: 'The average estimated number of hashes per second produced by the miners in the network.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',  '1w', '1month'   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":140552942222359000000}]'
        },
        "Miner Revenue (Total)":{
            url: '/v1/metrics/mining/revenue_sum',
            doc_url: 'https://docs.glassnode.com/api/mining#miner-revenue-total',
            description: 'The total miner revenue, i.e. fees plus newly minted coins.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',   ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":9.33044489295953e+22}]'
        },
        "Miner Revenue (Fees)":{
            url: '/v1/metrics/mining/revenue_from_fees',
            doc_url: 'https://docs.glassnode.com/api/mining#miner-revenue-fees',
            description: 'The percentage of miner revenue derived from fees, i.e. fees divided by fees plus minted coins.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.130398773239728}]'
        },
        "Miner Revenue (Block Rewards)":{
            url: '/v1/metrics/mining/volume_mined_sum',
            doc_url: 'https://docs.glassnode.com/api/mining#miner-revenue-block-rewards',
            description: 'The total amount of newly minted coins, i.e. block rewards.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":812.5}]'
        },
        "Thermocap":{
            url: '/v1/metrics/mining/thermocap',
            doc_url: 'https://docs.glassnode.com/api/mining#thermocap',
            description: 'Aggregate security spend, or "Thermocap", is the aggregated amount of coins paid to miners and serves as a proxy to mining resources spent. It serves a measure of the true capital flow into Bitcoin and is computed as the aggregate coinbase transactions multiplied by the price in USD at the time they were mined',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.130398773239728}]'
        },
        "Market Cap to Thermocap Ratio":{
            url: '/v1/metrics/mining/marketcap_thermocap_ratio',
            doc_url: 'https://docs.glassnode.com/api/mining#market-cap-to-thermocap-ratio',
            description: 'The Marketcap to Thermocap Ratio is simply defined as Marketcap / Thermocap, and can be used to assess if the asset\'s price is currently trading at a premium with respect to total security spend by miners. The ratio is adjusted to account for the increasing circulating supply over time.\n',
            params:{
                a: {description: 'asset symbol ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.0000021637976516006243}]'
        },
        "Uniswap Transactions":{
            url: '/v1/metrics/protocols/uniswap_transaction_count',
            doc_url: 'https://docs.glassnode.com/api/protocols#uniswap-transactions',
            description: 'The total number of transactions that contains an interaction within Uniswap contracts. Includes Mint, Burn, and Swap events on the Uniswap core contracts.\n' +
                'Note: When selecting Ethereum as the asset, the chart shows Uniswap\'s macro view of this metric, i.e. aggregate transaction count across all available assets on Uniswap.',
            params:{
                a: {description: 'asset symbol (ETH, AAVE)', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":139771}]'
        },
        "Uniswap Liquidity":{
            url: '/v1/metrics/protocols/uniswap_liquidity_latest',
            doc_url: 'https://docs.glassnode.com/api/protocols#uniswap-liquidity',
            description: 'The current liquidity on Uniswap.\n' +
                'Note: When selecting Ethereum as the asset, the chart shows Uniswap\'s macro view of this metric, i.e. aggregate liquidity across all available assets on Uniswap.',
            params:{
                a: {description: 'asset symbol (ETH, AAVE)', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":4143005177.45272}]'
        },
        "Uniswap Volume":{
            url: '/v1/metrics/protocols/uniswap_volume_sum',
            doc_url: 'https://docs.glassnode.com/api/protocols#uniswap-volume',
            description: 'The total volume traded on Uniswap.\n' +
                'Note: When selecting Ethereum as the asset, the chart shows Uniswap\'s macro view of this metric, i.e. aggregate volume across all available trading pairs on Uniswap.',
            params:{
                a: {description: 'asset symbol (ETH, AAVE)', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":552566.082082158}]'
        },
        "Circulating Supply":{
            url: '/v1/metrics/supply/current',
            doc_url: 'https://docs.glassnode.com/api/supply#circulating-supply',
            description: 'The total amount of all coins ever created/issued, i.e. the circulating supply.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '10m', '1h',  '24h',   '1w', '1month'    ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":18642237.5}]'
        },
        "Coin Issuance":{
            url: '/v1/metrics/supply/issued',
            doc_url: 'https://docs.glassnode.com/api/supply#issuance',
            description: 'The total amount of new coins added to the current supply, i.e. minted coins or new coins released to the network.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [  '10m', '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":812.5}]'
        },
        "Inflation Rate":{
            url: '/v1/metrics/supply/inflation_rate',
            doc_url: 'https://docs.glassnode.com/api/supply#inflation-rate',
            description: 'The yearly inflation rate, i.e. the percentage of new coins issued, divided by the current supply (annualized).\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.01603495098272356}]'
        },

        "Supply Last Active < 24h":{
            url: '/v1/metrics/supply/active_24h',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-less-than-24h',
            description: 'The amount of circulating supply last moved in the last 24 hours.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":233939.129930867}]'
        },
        "Supply Last Active 1d-1w":{
            url: '/v1/metrics/supply/active_1d_1w',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-1d-1w',
            description: 'The amount of circulating supply last moved between 1 day and 1 week ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":789358.463747983}]'
        },
        "Supply Last Active 1w-1m":{
            url: '/v1/metrics/supply/active_1w_1m',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-1w-1m',
            description: 'The amount of circulating supply last moved between 1 week and 1 month ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1562687.4585108}]'
        },
        "Supply Last Active 1m-3m":{
            url: '/v1/metrics/supply/active_1m_3m',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-1m-3m',
            description: 'The amount of circulating supply last moved between 1 month and 3 months ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2779665.1789717}]'
        },
        "Supply Last Active 3m-6m":{
            url: '/v1/metrics/supply/active_3m_6m',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-1w-1m',
            description: 'The amount of circulating supply last moved between 3 months and 6 months ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1280272.6049434}]'
        },
        "Supply Last Active 6m-12m":{
            url: '/v1/metrics/supply/active_6m_12m',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-6m-12m',
            description: 'The amount of circulating supply last moved between 6 months and 12 months ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1555726.99288638}]'
        },
        "Supply Last Active 1y-2y":{
            url: '/v1/metrics/supply/active_1y_2y',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-1y-2y',
            description: 'The amount of circulating supply last moved between 1 year and 2 years ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1867493.27412408}]'
        },
        "Supply Last Active 2y-3y":{
            url: '/v1/metrics/supply/active_2y_3y',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-2y-3y',
            description: 'The amount of circulating supply last moved between 2 years and 3 years ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1986381.86580901}]'
        },
        "Supply Last Active 3y-5y":{
            url: '/v1/metrics/supply/active_3y_5y',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-3y-5y',
            description: 'The amount of circulating supply last moved between 3 years and 5 years ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2521489.65220627}]'
        },


        "Supply Last Active 5y-7y":{
            url: '/v1/metrics/supply/active_5y_7y',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-5y-7y',
            description: 'The amount of circulating supply last moved between 5 years and 7 years ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":733391.561829753}]'
        },
        "Supply Last Active Supply 7y-10y":{
            url: '/v1/metrics/supply/active_7y_10y',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-supply-7y-10y',
            description: 'The amount of circulating supply last moved between 7 years and 10 years ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1340814.66965948}]'
        },
        "Supply Last Active >10y":{
            url: '/v1/metrics/supply/active_more_10y',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-greater-than-10y',
            description: 'The amount of circulating supply last moved more than 10 years ago.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1990987.69235172}]'
        },
        "HODL Waves":{
            url: '/v1/metrics/supply/hodl_waves',
            doc_url: 'https://docs.glassnode.com/api/supply#hodl-waves',
            description: 'Bundle of all active supply age bands, aka HODL waves. Each colored band shows the percentage of Bitcoin in existence that was last moved within the time period denoted in the legend',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [     '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"1d_1w":0.0423424743809847,"1m_3m":0.149105770107891,"1w_1m":0.0838251019230284,"1y_2y":0.100175382602227,"24h":0.0125488761706242,"2y_3y":0.106552760408133,"3m_6m":0.0686759089376152,"3y_5y":0.135256814113985,"5y_7y":0.0393403185550958,"6m_12m":0.0834517312037454,"7y_10y":0.0719234839519387,"more_10y":0.106799824449813}}]'
        },





        "Supply Last Active 1+ Years Ago":{
            url: '/v1/metrics/supply/active_more_1y_percent',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-1+-years-ago',
            description: 'The percent of circulating supply that has not moved in at least 1 year.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.560048584081162}]'
        },
        "Supply Last Active 2+ Years Ago":{
            url: '/v1/metrics/supply/active_more_2y_percent',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-2+-years-ago',
            description: 'The percent of circulating supply that has not moved in at least 2 years.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.459873201478951}]'
        },
        "Supply Last Active 3+ Years Ago":{
            url: '/v1/metrics/supply/active_more_3y_percent',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-3+-years-ago',
            description: 'The percent of circulating supply that has not moved in at least 3 years.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1986381.86580901}]'
        },
        "Supply Last Active 5+ Years Ago":{
            url: '/v1/metrics/supply/active_more_5y_percent',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-last-active-5+-years-ago',
            description: 'The percent of circulating supply that has not moved in at least 5 years.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2521489.65220627}]'
        },
        "Realized Cap HODL Waves":{
            url: '/v1/metrics/supply/rcap_hodl_waves',
            doc_url: 'https://docs.glassnode.com/api/supply#realized-cap-hodl-waves',
            description: 'HODL Waves weighted by Realized Price',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [      '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"1d_1w":0.134582222871132,"1m_3m":0.297292774958315,"1w_1m":0.262816514753674,"1y_2y":0.0573075556214347,"24h":0.0401194237139516,"2y_3y":0.0377140693031246,"3m_6m":0.0629451050772352,"3y_5y":0.054150652419221,"5y_7y":0.00116650500732617,"6m_12m":0.0510635207384384,"7y_10y":0.00084085491073546,"more_10y":8.00625458962708e-7}}]'
        },
        "Adjusted Supply":{
            url: '/v1/metrics/supply/current_adjusted',
            doc_url: 'https://docs.glassnode.com/api/supply#adjusted-supply',
            description: 'The circulating supply adjusted by accounting for lost coins. The amount of lost coins is estimated by all those that have not moved in over 7 years.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":15265060.6430131}]'
        },
        "Supply in Profit":{
            url: '/v1/metrics/supply/profit_sum',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-in-profit',
            description: 'The circulating supply in profit, i.e. the amount of coins whose price at the time they last moved was lower than the current price',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":17793885.1168379}]'
        },
        "Supply in Loss":{
            url: '/v1/metrics/supply/loss_sum',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-in-loss',
            description: 'The circulating supply in loss, i.e. the amount of coins whose price at the time they last moved was higher than the current price',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":835381.97866036}]'
        },
        "Percent Supply in Profit":{
            url: '/v1/metrics/supply/profit_relative',
            doc_url: 'https://docs.glassnode.com/api/supply#percent-supply-in-profit',
            description: 'The percentage of circulating supply in profit, i.e. the percentage of existing coins whose price at the time they last moved was lower than the current price',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.955157549978859}]'
        },
        "Supply by TxOut Type":{
            url: '/v1/metrics/supply/supply_by_txout_type',
            doc_url: 'https://docs.glassnode.com/api/supply#supply-by-txout-type',
            description: 'This metric breaks down the total Bitcoin supply by transaction output types. Transaction output types, or txout types for short, are determined by the type of Bitcoin script conditions that are used to lock Bitcoin in the output. The most common transaction output types are:\n' +
                'P2TR (Pay to Taproot): Funds are locked using a 32-byte hash that is either (1) a public key, (2) a combination of multiple public keys, or (3) a script hash. P2WPKH (Pay to Witness Public Key Hash): The SegWit version of P2PKH. P2WSH (Pay to Witness Script Hash): The SegWit version of P2SH. This type comes in two variants. P2SH (Pay to Script Hash): Funds are locked using arbitrary Bitcoin script instructions. P2PKH (Pay to Public Key Hash): The successor of P2PK, locking funds using the hash of a public key. P2PK (Pay to Public Key): The first available type, locking funds using a public key. Other: Serves as catch-all for all outputs whose script instructions don\'t match any of most commonly used output types listed above.',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"o":{"total_other":2678.92223173999,"total_p2pk":1742367.45328664,"total_p2pkh":9771350.33059723,"total_p2sh":5574230.6725032,"total_p2tr":0.00159787,"total_p2wpkh":1220786.16601274,"total_p2wsh":330794.99874156}}]'
        },
        "Transaction Count":{
            url: '/v1/metrics/transactions/count',
            doc_url: 'https://docs.glassnode.com/api/transactions#transaction-count',
            description: 'The total amount of transactions. Only successful transactions are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":280355}]'
        },
        "Transaction Rate":{
            url: '/v1/metrics/transactions/rate',
            doc_url: 'https://docs.glassnode.com/api/transactions#transaction-rate',
            description: 'The total amount of transactions per second. Only successful transactions are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":3.244849537037037}]'
        },
        "Contract Calls (External)":{
            url: '/v1/metrics/transactions/contract_calls_external_count',
            doc_url: 'https://docs.glassnode.com/api/transactions#contract-calls-external',
            description: 'The total number of smart contract calls on the Ethereum network initiated by Externally Owned Addresses (EOAs), i.e. external transactions. Only successful transactions are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [    '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":686017}]'
        },
        "Contract Calls (Internal)":{
            url: '/v1/metrics/transactions/contract_calls_internal_count',
            doc_url: 'https://docs.glassnode.com/api/transactions#contract-calls-internal',
            description: 'The total number of internal smart contract calls on the Ethereum network, i.e. contract calls initiated by other contracts (internal transactions). Only successful transactions are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":2848362}]'
        },
        "Transaction Size (Mean)":{
            url: '/v1/metrics/transactions/size_mean',
            doc_url: 'https://docs.glassnode.com/api/transactions#transaction-size-mean',
            description: 'The mean size of a transaction within the time period (in bytes).\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":624.841889746921}]'
        },




        "Transaction Size (Total)":{
            url: '/v1/metrics/transactions/size_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#transaction-size-total',
            description: 'The total size of all transactions within the time period (in bytes).\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":175177548}]'
        },
        "Transfer Count":{
            url: '/v1/metrics/transactions/transfers_count',
            doc_url: 'https://docs.glassnode.com/api/transactions#transfer-count',
            description: 'The total amount of transfers. One transaction can trigger one or more transfers. Only successful, non-zero transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [   '10m',  '1h',  '24h', '1w', '1month'      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":540001}]'
        },
        "Transfer Rate":{
            url: '/v1/metrics/transactions/transfers_rate',
            doc_url: 'https://docs.glassnode.com/api/transactions#transfer-rate',
            description: 'The total amount of transfers per second. One transaction can trigger one or more transfers. Only successful, non-zero transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":6.250011574074074}]'
        },
        "Transfer Volume (Total)":{
            url: '/v1/metrics/transactions/transfers_volume_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#transfer-volume-total',
            description: 'The total amount of coins transferred on-chain. Only successful transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1783340.7063559}]'
        },
        "Transfer Volume (Mean)":{
            url: '/v1/metrics/transactions/transfers_volume_mean',
            doc_url: 'https://docs.glassnode.com/api/transactions#transfer-volume-mean',
            description: 'The mean value of a transfer. Only successful transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1783340.7063559}]'
        },
        "Transfer Volume (Median)":{
            url: '/v1/metrics/transactions/transfers_volume_median',
            doc_url: 'https://docs.glassnode.com/api/transactions#transfer-volume-median',
            description: 'The median value of a transfer. Only successful transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h', '1w', '1month'     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1783340.7063559}]'
        },
        "Change-Adjusted Volume (Total)":{
            url: '/v1/metrics/transactions/transfers_volume_adjusted_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#change-adjusted-volume-total',
            description: 'The total amount of coins transferred on-chain, adjusted by change volume. Only successful transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":493208.537957407}]'
        },
        "Change-Adjusted Volume (Mean)":{
            url: '/v1/metrics/transactions/transfers_volume_adjusted_mean',
            doc_url: 'https://docs.glassnode.com/api/transactions#change-adjusted-volume-mean',
            description: 'The mean amount of coins transferred on-chain, adjusted by change volume. Only successful transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1.76998025478891}]'
        },
        "Change-Adjusted Volume (Median)":{
            url: '/v1/metrics/transactions/transfers_volume_adjusted_median',
            doc_url: 'https://docs.glassnode.com/api/transactions#change-adjusted-volume-median',
            description: 'The median amount of coins transferred on-chain, adjusted by change volume. Only successful transfers are counted.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":1.76998025478891}]'
        },
        "Inter-Exchange Transfers":{
            url: '/v1/metrics/transactions/transfers_between_exchanges_count',
            doc_url: 'https://docs.glassnode.com/api/transactions#inter-exchange-transfers',
            description: 'The total count of transfers between exchanges. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":8663}]'
        },
        "Inter-Exchange Volume":{
            url: '/v1/metrics/transactions/transfers_volume_between_exchanges_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#inter-exchange-volume',
            description: 'The total amount of coins transferred between exchanges. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":21588.6462354585}]'
        },




        "Exchange Inflow Volume (Mean)":{
            url: '/v1/metrics/transactions/transfers_volume_to_exchanges_mean',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-inflow-volume-mean',
            description: 'The mean value of a transfer to exchanges addresses. Only successful transfers are counted. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.6147247372451271}]'
        },
        "Exchange Outflow Volume (Mean)":{
            url: '/v1/metrics/transactions/transfers_volume_from_exchanges_mean',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-outflow-volume-mean',
            description: 'The mean value of a transfer from exchanges addresses. Only successful transfers are counted. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":0.7272150246853516}]'
        },
        "Exchange Netflow Volume":{
            url: '/v1/metrics/transactions/transfers_volume_exchanges_net',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-netflow-volume',
            description: 'The difference of in volume flowing into exchanges and out of exchanges, i.e. the net flow of coins into/out of exchanges. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',     ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},
                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":-7728.4047220868015}]'
        },
        "Exchange Deposits":{
            url: '/v1/metrics/transactions/transfers_to_exchanges_count',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-deposits',
            description: 'The total count of transfers to exchange addresses, i.e. the number of on-chain deposits to exchanges. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":78290}]'
        },
        "Exchange Withdrawals":{
            url: '/v1/metrics/transactions/transfers_from_exchanges_count',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-withdrawals',
            description: 'The total count of transfers from exchange addresses, i.e. the number of on-chain withdrawals from exchanges. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":76807}]'
        },
        "Exchange Inflow Volume (Total)":{
            url: '/v1/metrics/transactions/transfers_volume_to_exchanges_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-inflow-volume-total',
            description: 'The total amount of coins transferred to exchange addresses. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":48126.799678921}]'
        },
        "Exchange Outflow Volume (Total)":{
            url: '/v1/metrics/transactions/transfers_volume_from_exchanges_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#exchange-outflow-volume-total',
            description: 'The total amount of coins transferred from exchange addresses. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":55855.2044010078}]'
        },
        "In-house Exchange Volume":{
            url: '/v1/metrics/transactions/transfers_volume_within_exchanges_sum',
            doc_url: 'https://docs.glassnode.com/api/transactions#in-house-exchange-volume',
            description: 'The total amount of coins transferred within wallets of the same exchange. Note that exchange metrics are based on our labeled data of exchange addresses that we constantly keep updating, as well as data science techniques and statistical information that changes over time. Therefore these metrics are mutable – the data is stable, but especially most recent data points are subject to slight fluctuations as time progresses.\n',
            params:{
                a: {description: 'asset symbol  ', required: true,  },
                s: {description: 'since, unix timestamp', type: 'number'},
                u: {description: 'until, unix timestamp', type: 'number'},
                i: {description: 'frequency interval', possible: [ '10m',  '1h',  '24h',      ]},
                f: {description: 'format', possible: ['JSON', 'CSV']},
                c: {description: 'currency', possible: [ 'NATIVE', 'USD'  ]},
                e: {description: 'exchange name', possible: ['aggregated', 'binance', 'bittrex', 'coinex', 'gate.io', 'gemini', 'huobi', 'kucoin', 'poloniex', 'bibox', 'bigone', 'bitfinex', 'coinbase', 'hitbtc', 'kraken', 'okex', 'bithumb', 'zb.com', 'cobinhood', 'bitmex', 'bitstamp', 'coincheck', 'ftx', 'luno']},

                timestamp_format: {description: 'timestamp format', possible: ['unix', 'humanized (RFC 3339)']}
            },
            sample_response: '[{"t":1614556800,"v":170151.612887479}]'
        },
    }
}


var skip_endpoint = {
    doc_url: 1, base_url:1, provider_description: 1, logo_url: 1
}


var orders = []
var paths = {}
var definitions = {}
// export var map_url_to_true_endpoint_name = {}
for(var provider of Object.keys(big_api_map)){
    orders.push('/' + provider.toLowerCase())
    paths['/' + provider.toLowerCase()] = {
        "get": {
            "summary": capFirst(provider),
            "description": big_api_map[provider].provider_description,
            "doc_url": big_api_map[provider].doc_url,
            "urlId": provider.toLowerCase(),
            "navHeader": capFirst(provider) ,
            "title": capFirst(provider),
            "section": capFirst(provider),
        }
    }
    for(var endpoint of Object.keys(big_api_map[provider])){
        if(endpoint in skip_endpoint){continue}
        var path  = '/' + provider.toLowerCase() + '/' + endpoint.toLowerCase().replaceAll(' ', '-')
        orders.push(path)
        var parameters = []
        if(big_api_map[provider][endpoint].params){
            for(var param of Object.keys(big_api_map[provider][endpoint].params)){
                if(big_api_map[provider][endpoint].params[param].append_to_url){continue}
                parameters.push({
                    "in": "query",
                    "name": param,
                    "description": big_api_map[provider][endpoint].params[param].description ? big_api_map[provider][endpoint].params[param].description : param,
                    "required": big_api_map[provider][endpoint].params[param].required === true,
                    "type": big_api_map[provider][endpoint].params[param].type === 'number' ? 'number' : "string"
                })
            }
        }

        // map_url_to_true_endpoint_name[path.slice(1, path.length)] = endpoint
        paths[path] = {
            "get": {
                "summary": capFirst(provider) + ' | ' + endpoint,
                "description": big_api_map[provider][endpoint].description ? big_api_map[provider][endpoint].description : endpoint,
                "doc_url": big_api_map[provider][endpoint].doc_url ? big_api_map[provider][endpoint].doc_url : big_api_map[provider].doc_url,
                "urlId": path.slice(1, path.length),
                "navHeader": endpoint  ,
                "title": endpoint+ ' | Integrations',
                "section": capFirst(provider),
                "parameters": parameters,
                "sample_response": big_api_map[provider][endpoint].sample_response
            }
        }

        // Add response attributes
        if(big_api_map[provider][endpoint].response_attributes){
            paths[path].get['responses'] = {
                "200": {
                    "description": "successful operation",
                    "schema": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/" + provider + endpoint
                        }
                    }
                }
            }
            var this_definition = {"type": "object", "properties": {}}
            for(var def_key of Object.keys(big_api_map[provider][endpoint].response_attributes)){
                this_definition.properties[def_key] = {
                    "type": "array",
                    "description": big_api_map[provider][endpoint].response_attributes[def_key],
                    "items": {
                        "type": "integer",
                        "format": "int64"
                    }
                }
            }
            definitions[provider + endpoint] = this_definition

        }
    }
}
 var intergration_json = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Finsheet",
        "license": {
            "name": "Apache-2.0",
            "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "host": "finsheet.io",
    "basePath": "/docs/integrations",
    "schemes": [
        "https"
    ],
    "securityDefinitions": {
        "api_key": {
            "type": "apiKey",
            "name": "token",
            "in": "query"
        }
    },
    "extraDocs": [],
    "orders": orders,
    "paths": paths,
    "definitions": definitions
}
