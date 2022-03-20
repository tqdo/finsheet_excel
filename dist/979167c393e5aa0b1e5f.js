function ownKeys(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var _ = Object.getOwnPropertySymbols(e);
        t && (_ = _.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), a.push.apply(a, _)
    }
    return a
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(a), !0).forEach((function (t) {
            _defineProperty(e, t, a[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        }))
    }
    return e
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}

function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function asyncGeneratorStep(e, t, a, _, n, r, l) {
    try {
        var i = e[r](l), p = i.value
    } catch (e) {
        return void a(e)
    }
    i.done ? t(p) : Promise.resolve(p).then(_, n)
}

function _asyncToGenerator(e) {
    return function () {
        var t = this, a = arguments;
        return new Promise((function (_, n) {
            var r = e.apply(t, a);

            function l(e) {
                asyncGeneratorStep(r, _, n, l, i, "next", e)
            }

            function i(e) {
                asyncGeneratorStep(r, _, n, l, i, "throw", e)
            }

            l(void 0)
        }))
    }
}

function _createForOfIteratorHelper(e, t) {
    var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!a) {
        if (Array.isArray(e) || (a = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            a && (e = a);
            var _ = 0, n = function () {
            };
            return {
                s: n, n: function () {
                    return _ >= e.length ? {done: !0} : {done: !1, value: e[_++]}
                }, e: function (e) {
                    throw e
                }, f: n
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, l = !0, i = !1;
    return {
        s: function () {
            a = a.call(e)
        }, n: function () {
            var e = a.next();
            return l = e.done, e
        }, e: function (e) {
            i = !0, r = e
        }, f: function () {
            try {
                l || null == a.return || a.return()
            } finally {
                if (i) throw r
            }
        }
    }
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var a = 0, _ = new Array(t); a < t; a++) _[a] = e[a];
    return _
}

var link = "https://b607-96-234-76-225.ngrok.io", map_metrics = {
    0: {
        display_name: "Average Daily Trading Volume (10d)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "1",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "avg_trading_volume_10d",
        default_0: 0
    },
    1: {
        display_name: "Average Daily Return (13w)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_return_daily_13w",
        default_0: 0
    },
    2: {
        display_name: "Average Daily Return (26w)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_return_daily_26w",
        default_0: 0
    },
    3: {
        display_name: "Average Monthly Trading Volume (3m)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "1",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "avg_trading_volume_10d",
        default_0: 0
    },
    4: {
        display_name: "52 Week High",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_high_52w",
        default_0: 0
    },
    5: {
        display_name: "52 Week High Date",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "price_high_date_52w",
        default_0: 0
    },
    6: {
        display_name: "52 Week Low",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_low_52w",
        default_0: 0
    },
    7: {
        display_name: "52 Week Low Date",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "price_low_date_52w",
        default_0: 0
    },
    8: {
        display_name: "Average Daily Return (5d)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_return_daily_5d",
        default_0: 0
    },
    9: {
        display_name: "Headquarter Address",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "address",
        default_0: 0
    },
    10: {
        display_name: "Headquarter City",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "city",
        default_0: 0
    },
    11: {
        display_name: "Operating Country",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "country",
        default_0: 0
    },
    12: {
        display_name: "Reporting Currency",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "reporting_currency",
        default_0: 0
    },
    13: {
        display_name: "Company Description",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "4",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "description",
        default_0: 0
    },
    14: {
        display_name: "Number of Employees",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "employees",
        default_0: 0
    },
    15: {
        display_name: "Exchange Name",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "exchange_name",
        default_0: 0
    },
    16: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    17: {
        display_name: "Alpha Research Industry",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "ar_industry",
        default_0: 0
    },
    18: {
        display_name: "Fiscal Year-End Month",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    19: {
        display_name: "Industry Group",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "ggroup",
        default_0: 0
    },
    20: {
        display_name: "Industry",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "gind",
        default_0: 0
    },
    21: {
        display_name: "Sector",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "gsector",
        default_0: 0
    },
    22: {
        display_name: "Sub-Industry",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "gsubind",
        default_0: 0
    },
    23: {
        display_name: "IPO Date",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "ipo",
        default_0: 0
    },
    24: {
        display_name: "Market Capitalization",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "1",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "market_cap",
        default_0: 0
    },
    25: {
        display_name: "Average Daily Return (Month to Date)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "mtd_price_return_daily",
        default_0: 0
    },
    26: {
        display_name: "NAICS Industry",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "naics",
        default_0: 0
    },
    27: {
        display_name: "NAICS National Industry",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "naics_national_industry",
        default_0: 0
    },
    28: {
        display_name: "NAICS Sector",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "naics_sector",
        default_0: 0
    },
    29: {
        display_name: "NAICS Subsector",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "naics_subsector",
        default_0: 0
    },
    30: {
        display_name: "Company Name",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "4",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "company_name",
        default_0: 0
    },
    31: {
        display_name: "Company Phone Number",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "phone",
        default_0: 0
    },
    32: {
        display_name: "Price Relative to S&P500 (13 Week)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_relative_to_sp500_13w",
        default_0: 0
    },
    33: {
        display_name: "Price Relative to S&P500 (26 Week)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_relative_to_sp500_26w",
        default_0: 0
    },
    34: {
        display_name: "Price Relative to S&P500 (4 Week)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_relative_to_sp500_4w",
        default_0: 0
    },
    35: {
        display_name: "Price Relative to S&P500 (YTD)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "relative_to_sp500_ytd",
        default_0: 0
    },
    36: {
        display_name: "Sedol Number",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "sedol",
        default_0: 0
    },
    37: {
        display_name: "Number of Outstanding Shares",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "1",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "shares_out",
        default_0: 0
    },
    38: {
        display_name: "Headquarter State",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "state",
        default_0: 0
    },
    39: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    40: {
        display_name: "Company Website",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "weburl",
        default_0: 0
    },
    41: {
        display_name: "Average Daily Return (YTD)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "ytd_price_return_daily",
        default_0: 0
    },
    42: {
        display_name: "Asset Turnover",
        is_financial_group: "",
        display_group: ["Efficiency", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "asset_turnover",
        default_0: 0
    },
    43: {
        display_name: "Book Value Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "bv_share",
        default_0: 0
    },
    44: {
        display_name: "Accounts Payable",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "account_payable",
        default_0: 0
    },
    45: {
        display_name: "Accounts Receivable - Trade, Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "account_receivable",
        default_0: 0
    },
    46: {
        display_name: "Accrued Expenses",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "accured_exp",
        default_0: 0
    },
    47: {
        display_name: "Accumulated Depreciation, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "accum_dep",
        default_0: 0
    },
    48: {
        display_name: "Additional Paid-In Capital",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "add_paid_in",
        default_0: 0
    },
    49: {
        display_name: "Cash",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash",
        default_0: 0
    },
    50: {
        display_name: "Cash and Short Term Investments",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash_st_inv",
        default_0: 0
    },
    51: {
        display_name: "Cash & Equivalents",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash_equiv",
        default_0: 0
    },
    52: {
        display_name: "Common Stock, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "common_stock",
        default_0: 0
    },
    53: {
        display_name: "Deferred Income Tax",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "deferred_inc_tax",
        default_0: 0
    },
    54: {
        display_name: "Goodwill, Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "goodwill",
        default_0: 0
    },
    55: {
        display_name: "Intangibles, Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "intangible",
        default_0: 0
    },
    56: {
        display_name: "Long Term Debt",
        is_financial_group: "BS",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "lt_debt",
        default_0: 0
    },
    57: {
        display_name: "Long Term Investments",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "lt_inv",
        default_0: 0
    },
    58: {
        display_name: "Notes Payable/Short Term Debt",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "note_payable",
        default_0: 0
    },
    59: {
        display_name: "Other Current Assets, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_curr_asset",
        default_0: 0
    },
    60: {
        display_name: "Other Current Liabilities, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_curr_lib",
        default_0: 0
    },
    61: {
        display_name: "Other Equity, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_equity",
        default_0: 0
    },
    62: {
        display_name: "Other Liabilities, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_lib",
        default_0: 0
    },
    63: {
        display_name: "Other Long Term Assets, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_lt_asset",
        default_0: 0
    },
    64: {
        display_name: "Other Receivables",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_receivable",
        default_0: 0
    },
    65: {
        display_name: "Prepaid Expenses",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "prepaid_exp",
        default_0: 0
    },
    66: {
        display_name: "Property/Plant/Equipment, Total - Gross",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ppe_gross",
        default_0: 0
    },
    67: {
        display_name: "Property/Plant/Equipment, Total - Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ppe_net",
        default_0: 0
    },
    68: {
        display_name: "Retained Earnings",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "retained_earnings",
        default_0: 0
    },
    69: {
        display_name: "Short Term Investments",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "st_inv",
        default_0: 0
    },
    70: {
        display_name: "Tangible Book Value per Share, Common Eq",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "tangible_per_share",
        default_0: 0
    },
    71: {
        display_name: "Total Assets",
        is_financial_group: "BS",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_asset",
        default_0: 0
    },
    72: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    73: {
        display_name: "Total Current Assets",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_curr_asset",
        default_0: 0
    },
    74: {
        display_name: "Total Current Liabilities",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_curr_lib",
        default_0: 0
    },
    75: {
        display_name: "Total Debt",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_debt",
        default_0: 0
    },
    76: {
        display_name: "Total Equity",
        is_financial_group: "BS",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_equity",
        default_0: 0
    },
    77: {
        display_name: "Total Inventory",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_inven",
        default_0: 0
    },
    78: {
        display_name: "Total Liabilities",
        is_financial_group: "BS",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_lib",
        default_0: 0
    },
    79: {
        display_name: "Total Liabilities & Shareholders Equity",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_lib_equity",
        default_0: 0
    },
    80: {
        display_name: "Total Long Term Debt",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_lt_debt",
        default_0: 0
    },
    81: {
        display_name: "Total Receivables, Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "receivable_net",
        default_0: 0
    },
    83: {
        display_name: "Cash Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "cash_per_share",
        default_0: 0
    },
    84: {
        display_name: "Cash Ratio",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "cash_ratio",
        default_0: 0
    },
    85: {
        display_name: "Capital Expenditures",
        is_financial_group: "CF",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "capex",
        default_0: 0
    },
    86: {
        display_name: "Cash from Financing Activities",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cf_financing",
        default_0: 0
    },
    87: {
        display_name: "Cash from Investing Activities",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cf_investing",
        default_0: 0
    },
    88: {
        display_name: "Cash from Operating Activities",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cf_operating",
        default_0: 0
    },
    89: {
        display_name: "Cash Payments",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash_payment",
        default_0: 0
    },
    90: {
        display_name: "Cash Receipts",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash_receipt",
        default_0: 0
    },
    91: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    92: {
        display_name: "Changes in Working Capital",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "change_wc",
        default_0: 0
    },
    93: {
        display_name: "Financing Cash Flow Items",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "fin_cf_item",
        default_0: 0
    },
    94: {
        display_name: "Foreign Exchange Effects",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "forex_effect",
        default_0: 0
    },
    95: {
        display_name: "Issuance (Retirement) of Debt, Net",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "iss_retire_debt",
        default_0: 0
    },
    96: {
        display_name: "Net Change in Cash",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_chg_cash",
        default_0: 0
    },
    97: {
        display_name: "Other Investing Cash Flow Items, Total",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_inv_cf_item",
        default_0: 0
    },
    98: {
        display_name: "Total Dividends Paid",
        is_financial_group: "CF",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "dividend",
        default_0: 1
    },
    99: {
        display_name: "Current Ratio",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "curr_ratio",
        default_0: 0
    },
    100: {
        display_name: "EBITD",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "TTM", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebitd",
        default_0: 0
    },
    101: {
        display_name: "EBIT Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ebit_per_share",
        default_0: 0
    },
    102: {
        display_name: "EBT",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebt",
        default_0: 0
    },
    103: {
        display_name: "EPS",
        is_financial_group: "",
        display_group: ["Financials", "Popular"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "eps",
        default_0: 0
    },
    104: {
        display_name: "Free Cash Flow",
        is_financial_group: "",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "fcf",
        default_0: 0
    },
    105: {
        display_name: "Gross Margin",
        is_financial_group: "",
        display_group: ["Efficiency", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "gross_margin",
        default_0: 0
    },
    106: {
        display_name: "Cost of Revenue, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cost_of_rev",
        default_0: 0
    },
    107: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    108: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    109: {
        display_name: "Diluted EPS",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "diluted_eps",
        default_0: 0
    },
    110: {
        display_name: "Gain (Loss) on Sale of Assets",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "gain_loss_sale_asset",
        default_0: 0
    },
    111: {
        display_name: "Gross Profit",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "gross_profit",
        default_0: 0
    },
    112: {
        display_name: "Interest Exp.(Inc.),Net-Operating, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "int_exp_inc_net_op",
        default_0: 0
    },
    113: {
        display_name: "Net Income",
        is_financial_group: "IC",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_income",
        default_0: 0
    },
    114: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    115: {
        display_name: "Net Income Before Taxes",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "inc_before_tax",
        default_0: 0
    },
    116: {
        display_name: "Operating Income",
        is_financial_group: "IC",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "operating_inc",
        default_0: 0
    },
    117: {
        display_name: "Other Non-operating Income (Expense), Net",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_non_op_inc_exp",
        default_0: 0
    },
    118: {
        display_name: "Other Operating Expenses, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_op_exp",
        default_0: 0
    },
    119: {
        display_name: "Provision for Income Taxes",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "prov_inc_tax",
        default_0: 0
    },
    120: {
        display_name: "Research & Development",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "rd",
        default_0: 0
    },
    121: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    122: {
        display_name: "Selling/General/Admin. Expenses, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "sga",
        default_0: 0
    },
    123: {
        display_name: "Total Operating Expense",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_op_exp",
        default_0: 0
    },
    124: {
        display_name: "Unusual Expense (Income)",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "unsual_exp_inc",
        default_0: 0
    },
    125: {
        display_name: "Inventory Turnover",
        is_financial_group: "",
        display_group: ["Efficiency", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "inven_turnover",
        default_0: 0
    },
    127: {
        display_name: "Long Term Debt / Total Assets",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "lt_debt_to _asset",
        default_0: 0
    },
    128: {
        display_name: "Long Term Debt / Total Capital",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "lt_debt_to_capital",
        default_0: 0
    },
    129: {
        display_name: "Long Term Debt / Total Equity",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "lt_debt_to_equity",
        default_0: 0
    },
    130: {
        display_name: "Net Debt",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_debt",
        default_0: 0
    },
    131: {
        display_name: "Net Debt / Total Capital",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "net_debt_to_capital",
        default_0: 0
    },
    132: {
        display_name: "Net Debt / Total Equity",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "net_debt_to_equity",
        default_0: 0
    },
    135: {
        display_name: "Net Interest Coverage",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["FY", "TTM", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "net_int_cov",
        default_0: 0
    },
    136: {
        display_name: "Net Margin",
        is_financial_group: "",
        display_group: ["Efficiency", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "net_margin",
        default_0: 0
    },
    137: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "TTM"],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "2",
        excel: "",
        default_0: 0
    },
    138: {
        display_name: "Operating Margin",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "op_margin",
        default_0: 0
    },
    139: {
        display_name: "Payout Ratio",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "payout_ratio",
        default_0: 0
    },
    140: {
        display_name: "Price / Book Ratio (P/B)",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "pb",
        default_0: 0
    },
    141: {
        display_name: "Pretax Margin",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "pre_tax_margin",
        default_0: 0
    },
    142: {
        display_name: "Price / Sales Ratio (P/S)",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ps",
        default_0: 0
    },
    143: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    144: {
        display_name: "Quick Ratio",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "quick_ratio",
        default_0: 0
    },
    145: {
        display_name: "Receivables Turnover",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["FY", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "receivables_turnover",
        default_0: 0
    },
    146: {
        display_name: "Revenue",
        is_financial_group: "",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "TTM", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "revenue",
        default_0: 0
    },
    148: {
        display_name: "Revenue Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "TTM", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "rev_per_share",
        default_0: 0
    },
    149: {
        display_name: "Return on Investments (ROI)",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "roi",
        default_0: 0
    },
    151: {
        display_name: "Selling, General & Admin Expenses / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "sga_to_rev",
        default_0: 0
    },
    152: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    153: {
        display_name: "Total Debt / Total Assets",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "total_debt_to_asset",
        default_0: 0
    },
    154: {
        display_name: "Total Debt / Total Capital",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "total_debt_to_capital",
        default_0: 0
    },
    155: {
        display_name: "Total Debt / Total Equity",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "total_debt_to_equity",
        default_0: 0
    },
    156: {
        display_name: "Total Ratio",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "total_ratio",
        default_0: 0
    },
    157: {
        display_name: "Minority Interest",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["Q", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "minority_interest_bs",
        default_0: 0
    },
    158: {
        display_name: "Minority Interest",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["Q", "TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "minority_interest_ic",
        default_0: 0
    },
    159: {
        display_name: "Revenue Growth YoY",
        is_financial_group: "",
        display_group: ["Growth", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["Q", "TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "rev_growth_yoy",
        default_0: 0
    },
    160: {
        display_name: "Dividends Per Share",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "dividend_per_share",
        default_0: 1
    },
    161: {
        display_name: "EBITD Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ebitd_per_share",
        default_0: 0
    },
    162: {
        display_name: "Free Cash Flow Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "fcf_per_share",
        default_0: 0
    },
    163: {
        display_name: "Operating Cash Flow / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "ocf_to_rev",
        default_0: 0
    },
    164: {
        display_name: "Average Daily Return (52w)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_return_daily_52w",
        default_0: 0
    },
    165: {
        display_name: "Beta",
        is_financial_group: "",
        display_group: ["Valuation", "Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "beta",
        default_0: 0
    },
    166: {
        display_name: "CUSIP Number",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "cusip",
        default_0: 0
    },
    167: {
        display_name: "ISIN Number",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "isisn",
        default_0: 0
    },
    168: {
        display_name: "Price Currency",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "",
        plot_type: "",
        excel: "price_currency",
        default_0: 0
    },
    169: {
        display_name: "Price Relative to S&P500 (52 Week)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_relative_to_sp500_52w",
        default_0: 0
    },
    170: {
        display_name: "Current Port. of LT Debt/Capital Leases",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "current_port_debt_leases",
        default_0: 0
    },
    171: {
        display_name: "Unrealized Gain (Loss)",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "unrealized_gain_loss",
        default_0: 0
    },
    172: {
        display_name: "Cash Interest Paid",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash_int_paid",
        default_0: 0
    },
    173: {
        display_name: "Deferred Taxes",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "deferred_tax",
        default_0: 0
    },
    174: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    175: {
        display_name: "Issuance (Retirement) of Stock, Net",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "iss_retire_stock",
        default_0: 0
    },
    176: {
        display_name: "Net Income/Starting Line",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_inc_starting_line",
        default_0: 0
    },
    177: {
        display_name: "Non-Cash Items",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "non_cash_item",
        default_0: 0
    },
    180: {
        display_name: "Interest Income (Expense) , Net Non Operating, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "int_inc_exp_net_op",
        default_0: 0
    },
    181: {
        display_name: "Preferred Stock - Non Redeemable, Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "non_redeem_pref_stock",
        default_0: 0
    },
    182: {
        display_name: "Treasury Stock - Common",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "treasury_stock",
        default_0: 0
    },
    183: {
        display_name: "Amortization",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM", "YTD"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "amortization",
        default_0: 0
    },
    184: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    185: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    186: {
        display_name: "Note Receivable - Long Term",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "note_receivable_lt",
        default_0: 0
    },
    187: {
        display_name: "Total Preferred Shares Outstanding",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_pref_shares",
        default_0: 0
    },
    188: {
        display_name: "Total Adjustments to Net Income",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "adj_to_net_inc",
        default_0: 0
    },
    189: {
        display_name: "Cash & Due from Banks",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "cash_due_from_bank",
        default_0: 0
    },
    190: {
        display_name: "Net Loans",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_loan",
        default_0: 0
    },
    191: {
        display_name: "Other Assets, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_asset",
        default_0: 0
    },
    192: {
        display_name: "Other Earning Assets, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_earning_asset",
        default_0: 0
    },
    193: {
        display_name: "Payable/Accrued",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "payable_accrued",
        default_0: 0
    },
    194: {
        display_name: "Total Deposits",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_deposit",
        default_0: 0
    },
    195: {
        display_name: "Total Short Term Borrowings",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_st_borrowing",
        default_0: 0
    },
    196: {
        display_name: "Interest Income, Bank",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "interest_inc_bank",
        default_0: 0
    },
    197: {
        display_name: "Loan Loss Provision",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "loan_loss_prov",
        default_0: 0
    },
    198: {
        display_name: "Net Interest Inc. After Loan Loss Prov.",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "int_inc_after_loan_loss",
        default_0: 0
    },
    199: {
        display_name: "Net Interest Income",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_int_inc",
        default_0: 0
    },
    200: {
        display_name: "Non-Interest Expense, Bank",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "non_int_exp_bank",
        default_0: 0
    },
    201: {
        display_name: "Non-Interest Income, Bank",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "non_int_inc_bank",
        default_0: 0
    },
    202: {
        display_name: "Total Interest Expense",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_int_exp",
        default_0: 0
    },
    203: {
        display_name: "Price % Change Today",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "today_percent_chg",
        default_0: 0
    },
    204: {
        display_name: "Price $ Change Today",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "today_val_chg",
        default_0: 0
    },
    205: {
        display_name: "Stock Price, Previous Close",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_previous_close",
        default_0: 0
    },
    206: {
        display_name: "Stock Price, Latest",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "price_latest",
        default_0: 0
    },
    207: {
        display_name: "CAPEX / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "capex_to_rev",
        default_0: 0
    },
    208: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    209: {
        display_name: "Depreciation & Amortization",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "depre_amort",
        default_0: 0
    },
    210: {
        display_name: "Depreciation & Amortization / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "da_to_rev",
        default_0: 0
    },
    211: {
        display_name: "EBIT",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebit",
        default_0: 0
    },
    212: {
        display_name: "EBITDA",
        is_financial_group: "",
        display_group: ["Financials", "Popular"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebitda",
        default_0: 0
    },
    213: {
        display_name: "EBITDA Margin",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "ebitda_margin",
        default_0: 0
    },
    214: {
        display_name: "EBITDA Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ebitda_per_share",
        default_0: 0
    },
    215: {
        display_name: "EBITD Margin",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "ebitd_margin",
        default_0: 0
    },
    216: {
        display_name: "EBIT Margin",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "ebit_margin",
        default_0: 0
    },
    217: {
        display_name: "Interest Income (Expense)",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "int_inc_exp",
        default_0: 0
    },
    218: {
        display_name: "Interest Income (Expense) / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "int_inc_exp_to_rev",
        default_0: 0
    },
    219: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    220: {
        display_name: "Net Debt / Total Assets",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "net_debt_to_asset",
        default_0: 0
    },
    221: {
        display_name: "Net Income Per Employee",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "inc_per_employee",
        default_0: 0
    },
    222: {
        display_name: "Other Income (Expense)",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_inc_exp",
        default_0: 0
    },
    223: {
        display_name: "Other Income (Expense) / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "other_inc_exp_to_rev",
        default_0: 0
    },
    224: {
        display_name: "Research & Development / Revenue",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "rd_to_rev",
        default_0: 0
    },
    225: {
        display_name: "Revenue Per Employee",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "rev_per_employee",
        default_0: 0
    },
    226: {
        display_name: "Return on Assets (ROA)",
        is_financial_group: "",
        display_group: ["Efficiency", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "roa",
        default_0: 0
    },
    227: {
        display_name: "Return on Equity (ROE)",
        is_financial_group: "",
        display_group: ["Efficiency", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "roe",
        default_0: 0
    },
    228: {
        display_name: "Effective Tax Rate",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "tax_rate",
        default_0: 0
    },
    229: {
        display_name: "Redeemable Preferred Stock, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "redeem_pref_stock",
        default_0: 0
    },
    230: {
        display_name: "Other Bearing Liabilities, Total",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_bearing_lib",
        default_0: 0
    },
    232: {
        display_name: "EPS Forecast Count of Estimates",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "0",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "num_analyst_eps",
        default_0: 0
    },
    233: {
        display_name: "EPS Forecast Mean Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "eps_proj_avg",
        default_0: 0
    },
    234: {
        display_name: "EPS Forecast High Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "eps_proj_high",
        default_0: 0
    },
    235: {
        display_name: "EPS Forecast Low Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "eps_proj_low",
        default_0: 0
    },
    236: {
        display_name: "Revenue Forecast Count of Estimates",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "0",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "num_analyst_rev",
        default_0: 0
    },
    237: {
        display_name: "Revenue Forecast Mean Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "rev_proj_avg",
        default_0: 0
    },
    238: {
        display_name: "Revenue Forecast High Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "rev_proj_high",
        default_0: 0
    },
    239: {
        display_name: "Revenue Forecast Low Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "rev_proj_low",
        default_0: 0
    },
    240: {
        display_name: "Deferred Policy Acquisition Costs",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "deferred_pol_acq_cost",
        default_0: 0
    },
    241: {
        display_name: "Policy Liabilities",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "policy_lib",
        default_0: 0
    },
    242: {
        display_name: "Amortization of Policy Acquisition Costs",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "amort_pol_acq_cost",
        default_0: 0
    },
    243: {
        display_name: "Losses, Benefits, and Adjustments, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "loss_benefit_adj",
        default_0: 0
    },
    244: {
        display_name: "Net Investment Income",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "net_inv_inc",
        default_0: 0
    },
    245: {
        display_name: "Other Revenue, Total",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "other_rev",
        default_0: 0
    },
    246: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    247: {
        display_name: "Total Premiums Earned",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_prem_earned",
        default_0: 0
    },
    248: {
        display_name: "Insurance Receivables",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "insur_receivable",
        default_0: 0
    },
    249: {
        display_name: "Operations & Maintenance",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "op_maintenance",
        default_0: 0
    },
    250: {
        display_name: "Total Utility Plant, Net",
        is_financial_group: "BS",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_util_plant",
        default_0: 0
    },
    251: {
        display_name: "U.S. GAAP Adjustment",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "us_gaap_adj",
        default_0: 0
    },
    252: {
        display_name: "Fuel Expense",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "fuel_exp",
        default_0: 0
    },
    254: {
        display_name: "Risk Free Rate",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "risk_free_rate",
        default_0: 0
    },
    255: {
        display_name: "Days to Next Earnings",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "days_to_earnings",
        default_0: 0
    },
    256: {
        display_name: "Analyst Price Target High",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_target_high",
        default_0: 0
    },
    257: {
        display_name: "Upside Analyst Target High",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "upside_target_high",
        default_0: 0
    },
    258: {
        display_name: "Analyst Price Target Low",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_target_low",
        default_0: 0
    },
    259: {
        display_name: "Upside Analyst Target Low",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "upside_target_low",
        default_0: 0
    },
    260: {
        display_name: "Analyst Price Target Mean",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_target_avg",
        default_0: 0
    },
    261: {
        display_name: "Upside Analyst Target Mean",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "upside_target_avg",
        default_0: 0
    },
    262: {
        display_name: "Analyst Price Target Median",
        is_financial_group: "",
        display_group: ["Forecast", "Popular"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "price_target_median",
        default_0: 0
    },
    263: {
        display_name: "Upside Analyst Target Median",
        is_financial_group: "",
        display_group: ["Forecast", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "upside_target_median",
        default_0: 0
    },
    264: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    265: {
        display_name: "EV / Free Cash Flow",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ev_to_fcf",
        default_0: 0
    },
    266: {
        display_name: "Net Income Forecast Mean Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "inc_proj_avg",
        default_0: 0
    },
    267: {
        display_name: "Net Income Forecast High Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "inc_proj_high",
        default_0: 0
    },
    268: {
        display_name: "Net Income Forecast Low Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "inc_proj_low",
        default_0: 0
    },
    269: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    270: {
        display_name: "Free Cash Flow / Net Income",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "fcf_to_net_inc",
        default_0: 0
    },
    271: {
        display_name: "Total Equity / Total Assets",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "equity_to_asset",
        default_0: 0
    },
    272: {
        display_name: "Asset Efficiency",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "asset_efficiency",
        default_0: 0
    },
    273: {
        display_name: "Working Capital",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "working_cap",
        default_0: 0
    },
    274: {
        display_name: "Altman Z-Score",
        is_financial_group: "",
        display_group: ["Risk", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "altman_z_score",
        default_0: 0
    },
    275: {
        display_name: "Cash Returned on Invested Capital (CROCI)",
        is_financial_group: "",
        display_group: ["Efficiency"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "croci",
        default_0: 0
    },
    276: {
        display_name: "Cash / Total Assets",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "cash_to_asset",
        default_0: 0
    },
    277: {
        display_name: "Cash / Total Equity",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "Q",
        supported_freq: ["FY", "Q"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "cash_to_equity",
        default_0: 0
    },
    278: {
        display_name: "Free Cash Flow / Debt",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "fcf_to_debt",
        default_0: 0
    },
    279: {
        display_name: "Free Cash Flow / Current Liabilities",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "fcf_to_curr_lib",
        default_0: 0
    },
    280: {
        display_name: "Free Cash Flow / Total Liabilities",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "fcf_to_lib",
        default_0: 0
    },
    281: {
        display_name: "Net Income Growth YoY",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "net_inc_growth_yoy",
        default_0: 0
    },
    282: {
        display_name: "EPS Growth YoY",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "eps_growth_yoy",
        default_0: 0
    },
    283: {
        display_name: "Degree of Combined Leverage",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "deg_of_combined_lev",
        default_0: 0
    },
    284: {
        display_name: "Degree of Financial Leverage",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "deg_of_financial_lev",
        default_0: 0
    },
    285: {
        display_name: "Degree of Operating Leverage",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "deg_of_operating_lev",
        default_0: 0
    },
    287: {
        display_name: "Net Income CAGR 5y",
        is_financial_group: "",
        display_group: ["Growth", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "net_inc_cagr_5y",
        default_0: 0
    },
    286: {
        display_name: "Revenue CAGR 5y",
        is_financial_group: "",
        display_group: ["Growth", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "rev_cagr_5y",
        default_0: 0
    },
    288: {
        display_name: "EBITDA CAGR 5y",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "ebitda_cagr_5y",
        default_0: 0
    },
    289: {
        display_name: "EBITDA Interest Coverage",
        is_financial_group: "",
        display_group: ["Risk"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "net_int_cov_ebitda",
        default_0: 0
    },
    290: {
        display_name: "Beneish M-Score",
        is_financial_group: "",
        display_group: ["Risk", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "TTM",
        supported_freq: ["TTM", "FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "beneish_m_score",
        default_0: 0
    },
    291: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    292: {
        display_name: "Dividends Growth YoY",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "dividends_growth_yoy",
        default_0: 0
    },
    293: {
        display_name: "Dvidends CAGR 5y",
        is_financial_group: "",
        display_group: ["Growth", "Popular"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "dividends_cagr_5y",
        default_0: 0
    },
    294: {
        display_name: "Index Membership",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "index_membership",
        default_0: 0
    },
    295: {
        display_name: "Forward P/E",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "forward_pe",
        default_0: 0
    },
    296: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    297: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    298: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    299: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    300: {
        display_name: "Operating Cash Flow Per Share",
        is_financial_group: "",
        display_group: ["Financials"],
        type: "0",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ocf_per_share",
        default_0: 0
    },
    301: {
        display_name: "Country of Exchange",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "3",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "country_of_exchange",
        default_0: 0
    },
    302: {
        display_name: "Price / Earnings (P/E)",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "pe",
        default_0: 0
    },
    303: {
        display_name: "Enterprise Value (EV)",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "1",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ev",
        default_0: 0
    },
    304: {
        display_name: "Enterprise Value Per Share",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "0",
        currency_type: "2",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ev_per_share",
        default_0: 0
    },
    305: {
        display_name: "EV / EBITDA",
        is_financial_group: "",
        display_group: ["Valuation", "Popular"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ev_to_ebitda",
        default_0: 0
    },
    306: {
        display_name: "EV / Revenue",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "ev_to_rev",
        default_0: 0
    },
    307: {
        display_name: "PEG",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "0",
        currency_type: "0",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "peg",
        default_0: 0
    },
    308: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    309: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    310: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    311: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    312: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    313: {
        display_name: "EBITDA Growth YoY",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "ebitda_growth_yoy",
        default_0: 0
    },
    314: {
        display_name: "FCF Growth YoY",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "fcf_growth_yoy",
        default_0: 0
    },
    315: {
        display_name: "Cost of Revenue Growth YoY",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "cogs_growth_yoy",
        default_0: 0
    },
    316: {
        display_name: "FCF CAGR 5y",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "fcf_cagr_5y",
        default_0: 0
    },
    317: {
        display_name: "Cost of Revenue CAGR 5y",
        is_financial_group: "",
        display_group: ["Growth"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "",
        excel: "cogs_cagr_5y",
        default_0: 0
    },
    318: {
        display_name: "Total Revenue",
        is_financial_group: "IC",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "total_rev",
        default_0: 0
    },
    319: {
        display_name: "Depreciation / Depletion",
        is_financial_group: "CF",
        display_group: ["Financials"],
        type: "1",
        currency_type: "1",
        default_freq: "TTM",
        supported_freq: ["FY", "Q", "TTM"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "depre_deple",
        default_0: 0
    },
    320: {
        display_name: "",
        is_financial_group: "",
        display_group: [""],
        type: "",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "",
        excel: "",
        default_0: 0
    },
    321: {
        display_name: "Dividend Yield",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "dividend_yield",
        default_0: 0
    },
    322: {
        display_name: "Volume",
        is_financial_group: "",
        display_group: ["Profile"],
        type: "1",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "volume",
        default_0: 0
    },
    323: {
        display_name: "Upside DCF",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "2",
        excel: "",
        default_0: 0
    },
    324: {
        display_name: "Upside EPV",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "2",
        excel: "",
        default_0: 0
    },
    325: {
        display_name: "Upside DDM",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "n",
        can_be_column: "n",
        plot_type: "2",
        excel: "",
        default_0: 0
    },
    326: {
        display_name: "Benjamin Graham Number",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "0",
        currency_type: "1",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "graham_value",
        default_0: 0
    },
    327: {
        display_name: "Benjamin Graham Number Upside",
        is_financial_group: "",
        display_group: ["Valuation"],
        type: "2",
        currency_type: "",
        default_freq: "",
        supported_freq: [""],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "2",
        excel: "graham_upside",
        default_0: 0
    },
    328: {
        display_name: "EBITDA Forecast Mean Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebitda_proj_avg",
        default_0: 0
    },
    329: {
        display_name: "EBITDA Forecast High Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebitda_proj_high",
        default_0: 0
    },
    330: {
        display_name: "EBITDA Forecast Low Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebitda_proj_low",
        default_0: 0
    },
    331: {
        display_name: "EBITDA Forecast Count of Estimates",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "0",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "num_analyst_ebitda",
        default_0: 0
    },
    332: {
        display_name: "EBIT Forecast Mean Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebit_proj_avg",
        default_0: 0
    },
    333: {
        display_name: "EBIT Forecast High Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebit_proj_high",
        default_0: 0
    },
    334: {
        display_name: "EBIT Forecast Low Consensus",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "1",
        currency_type: "1",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "1",
        excel: "ebit_proj_low",
        default_0: 0
    },
    335: {
        display_name: "EBIT Forecast Count of Estimates",
        is_financial_group: "",
        display_group: ["Forecast"],
        type: "0",
        currency_type: "0",
        default_freq: "FY",
        supported_freq: ["FY"],
        can_be_filter: "",
        can_be_column: "",
        plot_type: "0",
        excel: "num_analyst_ebit",
        default_0: 0
    }
};
delete map_metrics[17], map_metrics[30].can_be_column = "", map_metrics[30].can_be_filter = "";
for (var analyst_metrics = {
    232: 1,
    233: 1,
    234: 1,
    235: 1,
    236: 1,
    237: 1,
    238: 1,
    239: 1,
    266: 1,
    267: 1,
    268: 1,
    328: 1,
    329: 1,
    330: 1,
    331: 1,
    332: 1,
    333: 1,
    334: 1,
    325: 1
}, map_excel_name_to_id = {}, _i = 0, _Object$keys = Object.keys(map_metrics); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i], dic = map_metrics[key];
    dic.excel && (map_excel_name_to_id[dic.excel] = key)
}

function checkCoupon(e) {
    fetch(link + "/checkcoupon?api_key=" + e, {
        method: "GET",
        headers: {"Content-Type": "text/plain"}
    }).then((function (e) {
        e.json().then((function (e) {
            window.show_coupon = 1 - parseInt(e.have_used_coupon) > 0 && !e.is_paid_user && e.create_at && Math.abs(new Date - new Date(e.create_at.slice(0, 10))) / 36e5 > 72, window.show_coupon && (document.getElementById("header_coupon").innerHTML = '\n                            <div class="alert alert-dismissible" role="alert"\n                 style="width: 100%; background-color: #222222; padding: 8px 14px 8px 14px;position: fixed; bottom: 0; margin-left: -8px;\n                        color: white;\n                        font-size: 14px;\n                        margin-bottom: 0;">\n                        <span>\n                        Get your first month 30% off for any plan.  <a\n                                href="https://finsheet.io/account" style="color: white;cursor: pointer"><b><u style="color: #0e8e32">Redeem offer!</u></b></a>\n                        </span>\n            </div>\n                ')
        }))
    }))
}

function addCookie(e, t, a) {
    return localStorage.setItem(e, t), !0
}

function readCookie(e) {
    return localStorage.getItem(e)
}

function eraseCookie(e) {
    localStorage.removeItem(e)
}

$(document).ready((function () {
    var e = readCookie("finsheet_api_key");
    setTimeout((function () {
        $("#functions_dropdown_wrap").addClass("left_bar_different_green")
    }), 200), checkCoupon(e), e ? setTimeout((function () {
        $("#header_login").css({display: "none"})
    }), 500) : setTimeout((function () {
        $("#sign_out_button").css({display: "none"})
    }), 200)
}));
var isObject = function (e) {
    return !!e && e.constructor === Object
}, map_freq_to_int = {FY: 0, Q: 1, M: 2, W: 3, D: 4, TTM: 5, YTD: 6};

function duplicate(e) {
    return JSON.parse(JSON.stringify(e))
}

function split_ticker_exchange(e) {
    if (!e.includes(".")) return [e, ""];
    var t = e.split(".");
    return [t.slice(0, t.length - 1).join("."), t[t.length - 1]]
}

var example_freq = [["Get data for the fiscal year 2020", "FY2020"], ["Get data for the TTM period two-quarter prior", "TTM-2"], ["Get data for the fiscal quarter before last", "Q-1"], ["Get data for the third fiscal quarter of 2019", "FY2019.Q3"]];

function Login() {
    var e = $("#email").val(), t = $("#password").val(), a = $("#login_warning");
    e ? t ? ($("#login_warning").css({display: "none"}), $(".loader").css({display: "block"}), a.text(""), $("#email").val(""), $("#password").val(""), fetch(link + "/excel/login?email=" + e + "&password=" + t).then((function (e) {
        if (e.ok) return e.json().then((function (e) {
            e.msg ? ($(".loader").css({display: "none"}), $("#login_warning").css({display: "block"}), a.text(e.msg)) : (addCookie("finsheet_api_key", e.token, 1e3), $(".loader").css({display: "none"}), $("#login_warning").css({display: "block"}), $("#if_have_api_key").css({display: "flex"}), $("#api_key_input_div").css({display: "none"}), $("#sign_out_button").css({display: "flex"}), $("#header_login").css({display: "none"}), checkCoupon(e.token), setTimeout((function () {
                $("#functions_dropdown_wrap").addClass("left_bar_different_green")
            }), 200))
        }));
        console.log("Network Error", 3e3, "error")
    }))) : a.text("Please enter your password") : a.text("Please enter your email")
}

function toggleLogoutDropdown() {
    var e = $("#logout_dropdown");
    "none" == e.css("display") ? e.css({display: "block"}) : e.css({display: "none"}), $("#refresh_dropdown").css({display: "none"})
}

function showApiInputDiv() {
    $("#api_key_input_div").css({display: "flex"}), $("#if_have_api_key").css({display: "none"}), $("#logout_dropdown").css({display: "none"}), eraseCookie("finsheet_api_key")
}

function showDropdownHeader(e) {
    if ("function" == e) (t = $("#functions_dropdown")).is(":visible") ? t.css({display: "none"}) : t.css({display: "block"}), $("#lookup_dropdown").css({display: "none"}); else if ("lookup" == e) {
        var t;
        (t = $("#lookup_dropdown")).is(":visible") ? t.css({display: "none"}) : t.css({display: "block"}), $("#functions_dropdown").css({display: "none"})
    }
}

var hide_map = {
    "#search_dropdown_wrap": "#search_dropdown",
    "#functions_dropdown_wrap": "#functions_dropdown",
    "#refresh_dropdown_wrap": "#refresh_dropdown"
};

function onFocusNewFilter() {
    $("#metric_dropdown").css({display: "block"}), changeNewFilterName()
}

function onFocusNewSymbol() {
    $("#symbol_dropdown").css({display: "block"})
}

function changeNewSymbol() {
    var e = $("#symbol_input").val(), t = $(".all_symbols");
    t.empty(), e && fetch("https://valueinvesting.io/get_some_companies?val=" + e).then((function (e) {
        if (e.ok) return e.json().then((function (e) {
            var a, _ = _createForOfIteratorHelper(e.data);
            try {
                for (_.s(); !(a = _.n()).done;) {
                    var n = a.value;
                    t.append('<div class="one_filter_suggestion pointer" id="'.concat(n.tickers, '" onmousedown="clickSymbol(\'').concat(n.tickers + "__" + n.comp_name, '\')"><div style="display: inline; color: #2cbd54">').concat(n.tickers, "</div>").concat(" - " + n.comp_name, "</div>"))
                }
            } catch (e) {
                _.e(e)
            } finally {
                _.f()
            }
        }));
        console.log("Network Error", 3e3, "error")
    }))
}

function changeNewFilterName() {
    var e = $("#metric_input").val();
    e || (e = "");
    var t = $(".all_suggestions");
    t.empty();
    for (var a = 0, _ = 0, n = Object.keys(map_metrics); _ < n.length; _++) {
        var r = n[_], l = map_metrics[r].display_name, i = "" !== map_metrics[r].excel;
        if (l.toLowerCase().includes(e.toLowerCase()) && i && (a += 1, t.append('<div class="one_filter_suggestion pointer" id="'.concat(r, '" onmousedown="clickMetric(\'').concat(r, "')\">").concat(l, "</div>")), a >= 6)) break
    }
}

function clickSymbol(e) {
    var t = e.split("__");
    $(".symbol_wrap").css({display: "block"}), $("#symbol_result").text(t[0]), $("#comp_name_result").text(t[1]), $("#symbol_input").val("")
}

function clickMetric(e) {
    var t = map_metrics[e];
    $(".all_metric_lines").css({display: "block"}), $(".metric_formal_name").text(t.display_name), $(".actual_fieldname").text(t.excel), t.default_freq ? ($(".limit_section").css({display: "inline-block"}), $(".all_periods_section").css({display: "block"}), $(".default_period_section").css({display: "block"}), $(".actual_all_periods").text(t.supported_freq.join(", ")), $(".actual_default_period").text(t.default_freq)) : ($(".limit_section").css({display: "none"}), $(".all_periods_section").css({display: "none"}), $(".default_period_section").css({display: "none"})), 1 == t.type ? $(".unit_section").css({display: "block"}) : $(".unit_section").css({display: "none"}), e in analyst_metrics ? $(".note_future_period_section").css({display: "block"}) : $(".note_future_period_section").css({display: "none"});
    var a = $(".example_formula_section");
    if (a.empty(), a.append('<div class="one_example_usage_metric">'.concat('=FS_EquityMetrics("AAPL", "' + t.excel + '")', "</div>")), t.default_freq) {
        $("#customized_period_wrap").css({display: "block"});
        var _ = duplicate(example_freq);
        t.supported_freq.includes("TTM") || (_[1] = ["Get data for the fiscal year two-year prior", "FY-2"]), t.supported_freq.includes("Q") || (t.supported_freq.includes("TTM") ? (_ = _.slice(0, 3))[2] = ["Get data for the fiscal year two-year prior", "FY-2"] : _ = _.slice(0, 2)), e in analyst_metrics && t.supported_freq.includes("FY") && _.push(["Get forecast data for the next fiscal year", "FY+1"]);
        var n = $(".customized_period_section");
        n.empty();
        var r, l = _createForOfIteratorHelper(_);
        try {
            for (l.s(); !(r = l.n()).done;) {
                var i = r.value;
                n.append("\n          <div><div  >".concat(i[0], '</div><div class="one_example_freq ">').concat(i[1], "</div></div>\n        "))
            }
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
        a.append('<div class="one_example_usage_metric">'.concat('=FS_EquityMetrics("AAPL", "' + t.excel + '", "' + t.supported_freq[0] + '")', "</div>")), a.append('<div class="one_example_usage_metric">'.concat('=FS_EquityMetrics("AAPL", "' + t.excel + '", "' + t.supported_freq[Math.min(1, t.supported_freq.length - 1)] + (e in analyst_metrics ? '+2")' : '-1")'), "</div>")), a.append('<div class="one_example_usage_metric">'.concat('=FS_EquityMetrics("AAPL", "' + t.excel + '", "' + t.supported_freq[Math.min(2, t.supported_freq.length - 1)] + '", 3)', "</div>"))
    } else $("#customized_period_wrap").css({display: "none"});
    $("#caret_custom_metric").removeClass("fa-caret-down").addClass("fa-caret-right"), $(".customized_period_section").css("display", "none"), $("#caret_example_formula").removeClass("fa-caret-right").addClass("fa-caret-down"), $(".example_formula_section").css("display", "block"), $("#example_formula_wrap").css("display", "block"), $("#metric_input").val("")
}

function onBlurNewFilter() {
    $("#metric_dropdown").css({display: "none"})
}

function onBlurNewSymbol() {
    $("#symbol_dropdown").css({display: "none"})
}

function clickNavigate(e) {
    for (var t = 0, a = ["symbols", "metrics", "etf", "mutual_fund", "equity_metrics", "equity_full_financials", "equity_candles", "forex_candles", "forex_all_rates", "crypto_candles", "crypto_profile", "etf_candles", "etf_profile", "streaming", "mutual_fund_candles", "mutual_fund_profile", "latest", "pattern_recognition", "support_resistance", "aggregate_indicators", "technical_indicators", "console"]; t < a.length; t++) {
        var _ = a[t];
        e == _ ? $("#" + e).css({display: "block"}) : $("#" + _).css({display: "none"})
    }
    $("#functions_dropdown").css({display: "none"}), $("#search_dropdown").css({display: "none"}), ["symbols", "metrics", "etf", "mutual_fund"].includes(e) ? (makeDifferentGreen("search_dropdown_wrap"), $("#header_coupon").removeClass("display_none")) : "console" === e ? (makeDifferentGreen("console_left_bar"), $("#header_coupon").addClass("display_none")) : (makeDifferentGreen("functions_dropdown_wrap"), $("#header_coupon").removeClass("display_none"))
}

function generate_query(e, t, a, _, n, r, l, i) {
    var p, o = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : [], c = r[1], s = [], u = [], f = [],
        d = [], y = [], m = [], g = [], b = [], T = _createForOfIteratorHelper(a);
    try {
        for (T.s(); !(p = T.n()).done;) {
            var q = p.value;
            s.push(q.field_code), m.push(q.field_code);
            var h = "-1";
            "default_freq" in map_metrics[q.field_code] && (h = map_freq_to_int[map_metrics[q.field_code].default_freq].toString()), b.push(h), u.push(h), g.push("currency_type" in map_metrics[q.field_code] ? map_metrics[q.field_code].currency_type.toString() : "0"), f.push("currency_type" in map_metrics[q.field_code] ? map_metrics[q.field_code].currency_type.toString() : "0"), d.push("0"), y.push("0")
        }
    } catch (e) {
        T.e(e)
    } finally {
        T.f()
    }
    var x, F = _createForOfIteratorHelper(_);
    try {
        for (F.s(); !(x = F.n()).done;) if ("ticker" !== (q = x.value).field_code && "30" !== q.field_code) if (h = "-1", "period" in q && (h = q.period), h.includes("@")) for (var v = h.split("@"), I = parseInt(v[1]), Y = 0; Y < I; Y++) h = Y > 0 ? v[0] + "-" + Y : v[0], s.push(q.field_code), h in map_freq_to_int && (h = map_freq_to_int[h].toString()), u.push(h), f.push("currency_type" in map_metrics[q.field_code] ? map_metrics[q.field_code].currency_type.toString() : "0"), d.push(map_metrics[q.field_code].is_financial_group ? "F" : "NF"), q.field_code in analyst_metrics ? y.push("analystEstimateAnnual") : isNaN(h) && h.includes("Q") ? y.push("Q") : isNaN(h) && h.includes("FY") ? y.push("FY") : isNaN(h) && h.includes("TTM") ? y.push("TTM") : isNaN(h) && h.includes("YTD") ? y.push("YTD") : y.push("None"); else s.push(q.field_code), h in map_freq_to_int && (h = map_freq_to_int[h].toString()), u.push(h), f.push("currency_type" in map_metrics[q.field_code] ? map_metrics[q.field_code].currency_type.toString() : "0"), d.push(map_metrics[q.field_code].is_financial_group ? "F" : "NF"), q.field_code in analyst_metrics ? y.push("analystEstimateAnnual") : isNaN(h) && h.includes("Q") ? y.push("Q") : isNaN(h) && h.includes("FY") ? y.push("FY") : isNaN(h) && h.includes("TTM") ? y.push("TTM") : isNaN(h) && h.includes("YTD") ? y.push("YTD") : y.push("None")
    } catch (e) {
        F.e(e)
    } finally {
        F.f()
    }
    var M = duplicate(a);
    for (Y = 0; Y < M.length; Y++) {
        M[Y].count = M[Y].count.toString();
        for (var w = 0; w < M[Y].value.length; w++) M[Y].value[w] = M[Y].value[w].toString();
        M[Y].value = JSON.stringify(M[Y].value)
    }
    var C = {
        conditions: JSON.stringify(M),
        mode: t.toString(),
        existing_columns: JSON.stringify(n),
        screener_currency: c,
        latest_tracking_code: e.toString(),
        metrics_to_queries: JSON.stringify(s),
        metrics_to_queries_period: JSON.stringify(u),
        metrics_to_queries_currency_type: JSON.stringify(f),
        filter_default_freq: JSON.stringify(b),
        filter_metrics: JSON.stringify(m),
        filter_currency_type: JSON.stringify(g),
        metrics_financials_grouping: JSON.stringify(d),
        metrics_which_latest_days: JSON.stringify(y),
        name_of_considered_screener: l,
        ticker_str: "",
        original_filters: JSON.stringify(a),
        original_columns: JSON.stringify(i.slice(2, i.length)),
        original_currency: JSON.stringify(r),
        count_arr: JSON.stringify([])
    };
    if (o.length > 0 && ("new_filter" === t || "edit_columns" === t || "watchlist" === t)) {
        C.ticker_str = "(";
        var Q, E = _createForOfIteratorHelper(o);
        try {
            for (E.s(); !(Q = E.n()).done;) {
                q = Q.value;
                var k = split_ticker_exchange("watchlist" === t ? q : q.ticker);
                C.ticker_str += "('" + k[0] + "', '" + k[1] + "') ,"
            }
        } catch (e) {
            E.e(e)
        } finally {
            E.f()
        }
        C.ticker_str = C.ticker_str.slice(0, C.ticker_str.length - 2) + ")";
        var S, P = [], A = _createForOfIteratorHelper(a);
        try {
            for (A.s(); !(S = A.n()).done;) q = S.value, P.push(q.count)
        } catch (e) {
            A.e(e)
        } finally {
            A.f()
        }
        C.count_arr = JSON.stringify(P)
    }
    return C
}

$(document).mouseup((function (e) {
    for (var t = 0, a = Object.keys(hide_map); t < a.length; t++) {
        var _ = a[t], n = $(_), r = $(hide_map[_]);
        n.is(e.target) || 0 !== n.has(e.target).length || r.hide()
    }
}));
var fiancials_fields = {
    fieldName: {
        bs: {
            accountsPayable: "Accounts Payable",
            accountsReceivableTradeNet: "Accounts Receivable - Trade, Net",
            accruedExpenses: "Accrued Expenses",
            accumulatedDepreciationTotal: "Accumulated Depreciation, Total",
            additionalPaidInCapital: "Additional Paid-In Capital",
            capitalLeaseObligations: "Capital Lease Obligations",
            cash: "Cash",
            cashDuefromBanks: "Cash & Due from Banks",
            cashEquivalents: "Cash & Equivalents",
            cashandShortTermInvestments: "Cash and Short Term Investments",
            commonStockTotal: "Common Stock, Total",
            currentPortofLTDebtCapitalLeases: "Current Port. of  LT Debt/Capital Leases",
            deferredIncomeTax: "Deferred Income Tax",
            deferredPolicyAcquisitionCosts: "Deferred Policy Acquisition Costs",
            eSOPDebtGuarantee: "ESOP Debt Guarantee",
            goodwillNet: "Goodwill, Net",
            insuranceReceivables: "Insurance Receivables",
            intangiblesNet: "Intangibles, Net",
            longTermDebt: "Long Term Debt",
            longTermInvestments: "Long Term Investments",
            minorityInterest: "Minority Interest",
            netLoans: "Net Loans",
            noteReceivableLongTerm: "Note Receivable - Long Term",
            notesPayableShortTermDebt: "Notes Payable/Short Term Debt",
            otherAssetsTotal: "Other Assets, Total",
            otherBearingLiabilitiesTotal: "Other Bearing Liabilities, Total",
            otherCurrentAssetsTotal: "Other Current Assets, Total",
            otherCurrentliabilitiesTotal: "Other Current liabilities, Total",
            otherEarningAssetsTotal: "Other Earning Assets, Total",
            otherEquityTotal: "Other Equity, Total",
            otherLiabilitiesTotal: "Other Liabilities, Total",
            otherLongTermAssetsTotal: "Other Long Term Assets, Total",
            payableAccrued: "Payable/Accrued",
            policyLiabilities: "Policy Liabilities",
            preferredStockNonRedeemableNet: "Preferred Stock - Non Redeemable, Net",
            prepaidExpenses: "Prepaid Expenses",
            propertyPlantEquipmentTotalGross: "Property/Plant/Equipment, Total - Gross",
            propertyPlantEquipmentTotalNet: "Property/Plant/Equipment, Total - Net",
            redeemablePreferredStockTotal: "Redeemable Preferred Stock, Total",
            retainedEarningsAccumulatedDeficit: "Retained Earnings (Accumulated Deficit)",
            shortTermInvestments: "Short Term Investments",
            tangibleBookValueperShare: "Tangible Book Value per Share, Common Eq",
            totalAssets: "Total Assets",
            totalCommonSharesOutstanding: "Total Common Shares Outstanding",
            totalCurrentAssets: "Total Current Assets",
            totalCurrentLiabilities: "Total Current Liabilities",
            totalDebt: "Total Debt",
            totalDeposits: "Total Deposits",
            totalEquity: "Total Equity",
            totalInventory: "Total Inventory",
            totalLiabilities: "Total Liabilities",
            totalLiabilitiesShareholdersEquity: "Total Liabilities & Shareholders' Equity",
            totalLongTermDebt: "Total Long Term Debt",
            totalPreferredSharesOutstanding: "Total Preferred Shares Outstanding",
            totalReceivablesNet: "Total Receivables, Net",
            totalShortTermBorrowings: "Total Short Term Borrowings",
            totalUtilityPlantNet: "Total Utility Plant, Net",
            treasuryStockCommon: "Treasury Stock - Common",
            unrealizedGainLoss: "Unrealized Gain (Loss)"
        },
        cf: {
            amortization: "Amortization",
            capitalExpenditures: "Capital Expenditures",
            cashInterestPaid: "Cash Interest Paid",
            cashPayments: "Cash Payments",
            cashReceipts: "Cash Receipts",
            cashTaxesPaid: "Cash Taxes Paid",
            cashfromFinancingActivities: "Cash from Financing Activities",
            cashfromInvestingActivities: "Cash from Investing Activities",
            cashfromOperatingActivities: "Cash from Operating Activities",
            changesinWorkingCapital: "Changes in Working Capital",
            deferredTaxes: "Deferred Taxes",
            depreciationDepletion: "Depreciation/Depletion",
            financingCashFlowItems: "Financing Cash Flow Items",
            foreignExchangeEffects: "Foreign Exchange Effects",
            issuanceRetirementofDebtNet: "Issuance (Retirement) of Debt, Net",
            issuanceRetirementofStockNet: "Issuance (Retirement) of Stock, Net",
            netChangeinCash: "Net Change in Cash",
            netIncomeStartingLine: "Net Income/Starting Line",
            nonCashItems: "Non-Cash Items",
            otherInvestingCashFlowItemsTotal: "Other Investing Cash Flow Items, Total",
            totalCashDividendsPaid: "Total Cash Dividends Paid"
        },
        ic: {
            allowanceforFundsUsedDuringConst: "Allowance for Funds Used During Const.",
            amortizationofPolicyAcquisitionCosts: "Amortization of Policy Acquisition Costs",
            costofRevenueTotal: "Cost of Revenue, Total",
            dPSCommonStockPrimaryIssue: "DPS - Common Stock Primary Issue",
            depreciationAmortization: "Depreciation/Amortization",
            dilutedEPSExcludingExtraOrdItems: "Diluted EPS Excluding ExtraOrd Items",
            dilutedNetIncome: "Diluted Net Income",
            dilutedNormalizedEPS: "Diluted Normalized EPS",
            dilutedWeightedAverageShares: "Diluted Weighted Average Shares",
            dilutionAdjustment: "Dilution Adjustment",
            equityInAffiliates: "Equity In Affiliates",
            fuelExpense: "Fuel Expense",
            gainLossonSaleofAssets: "Gain (Loss) on Sale of Assets",
            grossProfit: "Gross Profit",
            incomeAvailabletoComExclExtraOrd: "Income Available to Com Excl ExtraOrd",
            incomeAvailabletoComInclExtraOrd: "Income Available to Com Incl ExtraOrd",
            interestExpIncNetOperatingTotal: "Interest Exp.(Inc.),Net-Operating, Total",
            interestIncExpNetNonOpTotal: "Interest Inc.(Exp.),Net-Non-Op., Total",
            interestIncomeBank: "Interest Income, Bank",
            loanLossProvision: "Loan Loss Provision",
            lossesBenefitsandAdjustmentsTotal: "Losses, Benefits, and Adjustments, Total",
            minorityInterest: "Minority Interest",
            netIncome: "Net Income",
            netIncomeAfterTaxes: "Net Income After Taxes",
            netIncomeBeforeExtraItems: "Net Income Before Extra. Items",
            netIncomeBeforeTaxes: "Net Income Before Taxes",
            netInterestIncAfterLoanLossProv: "Net Interest Inc. After Loan Loss Prov.",
            netInterestIncome: "Net Interest Income",
            netInvestmentIncome: "Net Investment Income",
            nonInterestExpenseBank: "Non-Interest Expense, Bank",
            nonInterestIncomeBank: "Non-Interest Income, Bank",
            operatingIncome: "Operating Income",
            operationsMaintenance: "Operations & Maintenance",
            otherNet: "Other, Net",
            otherOperatingExpensesTotal: "Other Operating Expenses, Total",
            otherRevenueTotal: "Other Revenue, Total",
            provisionforIncomeTaxes: "Provision for Income Taxes",
            realizedGainsLosses: "Realized Gains (Losses)",
            realizedUnrealizedGainsLosses: "Realized & Unrealized Gains (Losses)",
            researchDevelopment: "Research & Development",
            revenue: "Revenue",
            sellingGeneralAdminExpensesTotal: "Selling/General/Admin. Expenses, Total",
            totalAdjustmentstoNetIncome: "Total Adjustments to Net Income",
            totalExtraordinaryItems: "Total Extraordinary Items",
            totalInterestExpense: "Total Interest Expense",
            totalOperatingExpense: "Total Operating Expense",
            totalPremiumsEarned: "Total Premiums Earned",
            totalRevenue: "Total Revenue",
            uSGAAPAdjustment: "U.S. GAAP Adjustment",
            unusualExpenseIncome: "Unusual Expense (Income)"
        }
    }, template: {
        bs_financial: ["cashDuefromBanks", "otherEarningAssetsTotal", "netLoans", "propertyPlantEquipmentTotalNet", "goodwillNet", "intangiblesNet", "otherAssetsTotal", "totalAssets", "accruedExpenses", "totalDeposits", "totalShortTermBorrowings", "longTermDebt", "totalLongTermDebt", "totalDebt", "otherLiabilitiesTotal", "totalLiabilities", "preferredStockNonRedeemableNet", "commonStockTotal", "additionalPaidInCapital", "retainedEarningsAccumulatedDeficit", "unrealizedGainLoss", "otherEquityTotal", "totalEquity", "totalLiabilitiesShareholdersEquity", "otherLongTermAssetsTotal", "otherBearingLiabilitiesTotal", "currentPortofLTDebtCapitalLeases"],
        bs_industrial: ["cash", "cashEquivalents", "shortTermInvestments", "cashandShortTermInvestments", "accountsReceivableTradeNet", "totalReceivablesNet", "totalInventory", "otherCurrentAssetsTotal", "totalCurrentAssets", "propertyPlantEquipmentTotalGross", "accumulatedDepreciationTotal", "propertyPlantEquipmentTotalNet", "longTermInvestments", "otherLongTermAssetsTotal", "totalAssets", "accountsPayable", "notesPayableShortTermDebt", "currentPortofLTDebtCapitalLeases", "otherCurrentliabilitiesTotal", "totalCurrentLiabilities", "longTermDebt", "totalLongTermDebt", "totalDebt", "otherLiabilitiesTotal", "totalLiabilities", "commonStockTotal", "retainedEarningsAccumulatedDeficit", "unrealizedGainLoss", "otherEquityTotal", "totalEquity", "totalLiabilitiesShareholdersEquity"],
        cf: ["netIncomeStartingLine", "depreciationDepletion", "amortization", "deferredTaxes", "nonCashItems", "cashTaxesPaid", "cashInterestPaid", "changesinWorkingCapital", "cashfromOperatingActivities", "otherInvestingCashFlowItemsTotal", "cashfromInvestingActivities", "financingCashFlowItems", "totalCashDividendsPaid", "issuanceRetirementofStockNet", "issuanceRetirementofDebtNet", "cashfromFinancingActivities", "foreignExchangeEffects", "netChangeinCash", "capitalExpenditures"],
        ic_financial: ["interestIncomeBank", "totalInterestExpense", "netInterestIncome", "loanLossProvision", "netInterestIncAfterLoanLossProv", "nonInterestIncomeBank", "nonInterestExpenseBank", "netIncomeBeforeTaxes", "provisionforIncomeTaxes", "netIncomeAfterTaxes", "netIncomeBeforeExtraItems", "netIncome", "totalAdjustmentstoNetIncome", "incomeAvailabletoComExclExtraOrd", "incomeAvailabletoComInclExtraOrd", "dilutionAdjustment", "dilutedNetIncome", "totalExtraordinaryItems"],
        ic_industrial: ["revenue", "totalRevenue", "costofRevenueTotal", "grossProfit", "sellingGeneralAdminExpensesTotal", "researchDevelopment", "totalOperatingExpense", "operatingIncome", "interestIncExpNetNonOpTotal", "otherNet", "netIncomeBeforeTaxes", "provisionforIncomeTaxes", "netIncomeAfterTaxes", "netIncomeBeforeExtraItems", "netIncome"],
        ic_insurance: ["totalPremiumsEarned", "netInvestmentIncome", "realizedUnrealizedGainsLosses", "totalRevenue", "lossesBenefitsandAdjustmentsTotal", "amortizationofPolicyAcquisitionCosts", "sellingGeneralAdminExpensesTotal", "unusualExpenseIncome", "totalOperatingExpense", "operatingIncome", "interestIncExpNetNonOpTotal", "netIncomeBeforeTaxes", "provisionforIncomeTaxes", "netIncomeAfterTaxes", "minorityInterest", "netIncomeBeforeExtraItems", "totalExtraordinaryItems", "netIncome", "totalAdjustmentstoNetIncome", "incomeAvailabletoComExclExtraOrd", "incomeAvailabletoComInclExtraOrd", "dilutionAdjustment", "dilutedNetIncome"]
    }
};

function isValidFreq_returnCleanString(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["FY", "TTM", "Q", "YTD"],
        a = arguments.length > 3 ? arguments[3] : void 0;
    if ("" === (e = e.replace(/\s/g, ""))) return "";
    if (!(a in analyst_metrics) && e.includes("+")) return !1;
    "+0" === e.slice(e.length - 2) && (e = e.slice(0, e.length - 2));
    for (var _ = 0, n = ["FY", "TTM", "Q", "YTD"]; _ < n.length; _++) {
        var r = n[_];
        if (!t.includes(r) && e.includes(r)) return !1
    }
    if (e.includes("+")) return !!["FY+1", "FY+2", "FY+3"].includes(e) && e;
    var l = 0;
    if ("FY" === e.slice(0, 2)) if (l = 1, e.includes(".")) {
        if (2 !== (o = e.split(".")).length || 6 !== o[0].length || isNaN(o[0].slice(2, 3)) || isNaN(o[0].slice(2)) || 2 !== o[1].length || "Q" !== o[1].slice(0, 1) || isNaN(o[1].slice(1, 2)) || parseInt(o[1].slice(1, 2)) > 4 || parseInt(o[1].slice(1, 2)) < 1) return !1
    } else {
        if (e.includes("-") && ("-" !== e.slice(2, 3) || 2 !== e.split("-").length || "" === e.split("-")[1] || isNaN(e.split("-")[1].slice(0, 1)) || isNaN(e.split("-")[1]))) return !1;
        if ("FY" !== e && !e.includes("-") && (6 !== e.length || isNaN(e.slice(2, 3)) || isNaN(e.slice(2)))) return !1
    }
    for (var i = 0, p = ["TTM", "Q", "YTD"]; i < p.length; i++) {
        var o;
        if (r = p[i], e.slice(0, r.length) === r && (l = 1, r !== e && (2 !== (o = e.split("-")).length || o[0] !== r || "" === o[1] || o[1].includes(".") || isNaN(o[1])))) return !1
    }
    return !(l < 1) && ("-0" === e.slice(e.length - 2) && (e = e.slice(0, e.length - 2)), e)
}

function handle_receive_AR_EQUITY(e, t, a) {
    if ("message" in e) return [[e.message ? e.message : "Something went wrong, please try again"]];
    if (!e || !e.data) return [["No data"]];
    if (t) {
        var _, n = e.data;
        if (isObject(e.data) && (n = [e.data]), Object.keys(n[0]).length < 1) return [["No data"]];
        n = n.reverse(), "bs" === a ? _ = "cashDuefromBanks" in n[0] ? "bs_financial" : "bs_industrial" : "ic" === a ? _ = "interestIncomeBank" in n[0] ? "ic_financial" : "totalPremiumsEarned" in n[0] ? "ic_insurance" : "ic_industrial" : "cf" === a && (_ = "cf"), Y = [[""]];
        var r, l = _createForOfIteratorHelper(fiancials_fields.template[_]);
        try {
            for (l.s(); !(r = l.n()).done;) {
                var i = r.value;
                Y.push([fiancials_fields.fieldName[a][i]])
            }
        } catch (e) {
            l.e(e)
        } finally {
            l.f()
        }
        var p, o = _createForOfIteratorHelper(n);
        try {
            for (o.s(); !(p = o.n()).done;) {
                var c = p.value;
                Y[0].push(c.period);
                for (var s = 0; s < fiancials_fields.template[_].length; s++) i = fiancials_fields.template[_][s], Y[s + 1].push(c[i] ? c[i] : 0)
            }
        } catch (e) {
            o.e(e)
        } finally {
            o.f()
        }
        return Y
    }
    if (0 == Object.keys(e.data).length) return [["No data"]];
    if (1 == Object.keys(e.data).length) for (var u = 0, f = Object.keys(e.data); u < f.length; u++) return "39_-1" === (q = f[u]) ? [["No data"]] : [[e.data[q]]];
    for (var d, y = parseInt(e.numYearLimit), m = Math.floor(Date.now() / 1e3) - 365 * y * 24 * 60 * 60, g = [], b = 0, T = Object.keys(e.data); b < T.length; b++) {
        var q, h = (q = T[b]).split("_");
        if (a == h[0]) if (2 != h.length || h[1].includes("-")) {
            if (2 == h.length && h[1].includes("-")) {
                var x = h[1].split("-");
                d = "FY" === x[0] ? "annual" : "ttm", g.push([x[1], e.data[q]])
            }
        } else g.push([0, e.data[q]])
    }
    if (!d) return [["No data"]];
    g = g.sort((function (e, t) {
        return t[0] - e[0]
    }));
    var F = {};
    try {
        F = JSON.parse(e.data["310_-1"])
    } catch (e) {
        return [["No data"]]
    }
    if (!F[d]) return [["No data"]];
    var v, I = F[d], Y = [[], []], M = _createForOfIteratorHelper(g);
    try {
        for (M.s(); !(v = M.n()).done;) {
            var w = v.value, C = w[0];
            C < I.length && Date.parse(I[C]) / 1e3 >= m && (Y[0].push(I[C]), Y[1].push(w[1]))
        }
    } catch (e) {
        M.e(e)
    } finally {
        M.f()
    }
    return Y
}

function refresh_all_sheets_js() {
    return _refresh_all_sheets_js.apply(this, arguments)
}

function _refresh_all_sheets_js() {
    return (_refresh_all_sheets_js = _asyncToGenerator(regeneratorRuntime.mark((function e() {
        return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run((function (e) {
                        var t = e.workbook.worksheets;
                        return t.load("items"), e.sync().then((function () {
                            t.items.forEach((function (e) {
                                refresh_1_sheet_js(e)
                            }))
                        }))
                    }));
                case 2:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

function refresh_1_sheet_js(e) {
    return _refresh_1_sheet_js.apply(this, arguments)
}

function _refresh_1_sheet_js() {
    return (_refresh_1_sheet_js = _asyncToGenerator(regeneratorRuntime.mark((function e(t) {
        return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run((function (e) {
                        return null == t && (t = e.workbook.worksheets.getActiveWorksheet()), t.getUsedRange(!0).calculate(), e.sync().then((function () {
                        }))
                    }));
                case 2:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

function refresh_selected_js() {
    return _refresh_selected_js.apply(this, arguments)
}

function _refresh_selected_js() {
    return (_refresh_selected_js = _asyncToGenerator(regeneratorRuntime.mark((function e() {
        return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run((function (e) {
                        return e.workbook.getSelectedRanges().calculate(), e.sync().then((function () {
                        }))
                    }));
                case 2:
                case"end":
                    return e.stop()
            }
        }), e)
    })))).apply(this, arguments)
}

function clickRefreshDropdown(e) {
    "refresh_all_sheet" == e ? refresh_all_sheets_js() : "refresh_this_sheet" == e ? refresh_1_sheet_js() : refresh_selected_js(), $("#refresh_dropdown").css({display: "none"})
}

function clickAllForex() {
    window.open("https://docs.google.com/spreadsheets/d/1wJ66ZYcp999cp-C61NM5KNndwpmsLGMRKUsn9Gv5ZlY/edit?usp=sharing"), $("#search_dropdown").css({display: "none"})
}

function clickAllCrypto() {
    window.open("https://docs.google.com/spreadsheets/d/1HyUz9gl9BSyHa_hYPwUFtHNbQjXQIE-LpO-_Uw3my7E/edit?usp=sharing"), $("#search_dropdown").css({display: "none"})
}

function clickAllEtf() {
    window.open("https://docs.google.com/spreadsheets/d/19NY30n2XdQf5_Y5h3G8dyV7Mlpz9MhR9_RqzhEaolqQ/edit?usp=sharing"), $("#search_dropdown").css({display: "none"})
}

function toggleRefreshDropdown() {
    var e = $("#refresh_dropdown");
    "none" == e.css("display") ? e.css({display: "block"}) : e.css({display: "none"}), $("#search_dropdown").css({display: "none"}), $("#functions_dropdown").css({display: "none"})
}

function toggleSearchDropdown() {
    var e = $("#search_dropdown");
    "none" == e.css("display") ? e.css({display: "block"}) : e.css({display: "none"}), $("#refresh_dropdown").css({display: "none"}), $("#functions_dropdown").css({display: "none"})
}

function toggleFunctionsDropdown() {
    var e = $("#functions_dropdown");
    "none" == e.css("display") ? e.css({display: "block"}) : e.css({display: "none"}), $("#refresh_dropdown").css({display: "none"}), $("#search_dropdown").css({display: "none"})
}

function start_streaming() {
    window.Should_Update_Streaming = !0, $("#refresh_dropdown").css({display: "none"})
}

function stop_streaming() {
    window.Should_Update_Streaming = !1, $("#refresh_dropdown").css({display: "none"})
}

var sheet_name_map = {};

function changeColorStreaming(e) {
    return Excel.run((function (t) {
        var a = t.workbook.worksheets;
        return a.load("items"), t.sync().then(_asyncToGenerator(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        a.items.forEach((function (e) {
                            sheet_name_map[e.id] = e.name
                        })), e.worksheetId, e.address, e.details.valueAfter;
                    case 4:
                    case"end":
                        return t.stop()
                }
            }), t)
        }))))
    }))
}

function colnameToNumber(e) {
    var t, a, _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = 0;
    for (t = 0, a = e.length - 1; t < e.length; t += 1, a -= 1) n += Math.pow(_.length, a) * (_.indexOf(e[t]) + 1);
    return n
}

function getExcelColName(e) {
    for (var t = "a".charCodeAt(0), a = "z".charCodeAt(0) - t + 1, _ = ""; e >= 0;) _ = String.fromCharCode(e % a + t) + _, e = Math.floor(e / a) - 1;
    return _
}

function onFocusNewEtf() {
    $("#etf_dropdown").css({display: "block"})
}

function onBlurNewEtf() {
    $("#etf_dropdown").css({display: "none"})
}

function clickEtf(e) {
    var t = e.split("__");
    $(".etf_wrap").css({display: "block"}), $("#etf_result").text(t[0]), $("#etf_name_result").text(t[1]), $("#etf_input").val("")
}

function changeNewEtf() {
    var e = $("#etf_input").val(), t = $(".all_etf");
    t.empty(), e && fetch("https://valueinvesting.io/get_some_etfs?val=" + e).then((function (e) {
        if (e.ok) return e.json().then((function (e) {
            var a, _ = _createForOfIteratorHelper(e.data);
            try {
                for (_.s(); !(a = _.n()).done;) {
                    var n = a.value;
                    t.append('<div class="one_filter_suggestion pointer" id="'.concat(n.tickers, '" onmousedown="clickEtf(\'').concat(n.tickers + "__" + n.comp_name, '\')"><div style="display: inline; color: #2cbd54">').concat(n.tickers, "</div>").concat(" - " + n.comp_name, "</div>"))
                }
            } catch (e) {
                _.e(e)
            } finally {
                _.f()
            }
        }));
        window.pushNoti("Network Error", 3e3, "error")
    }))
}

function onFocusNewMutualFund() {
    $("#mutual_fund_dropdown").css({display: "block"})
}

function onBlurNewMutualFund() {
    $("#mutual_fund_dropdown").css({display: "none"})
}

function clickMutualFund(e) {
    var t = e.split("__");
    $(".mutual_fund_wrap").css({display: "block"}), $("#mutual_fund_result").text(t[0]), $("#mutual_fund_name_result").text(t[1]), $("#mutual_fund_input").val("")
}

function changeNewMutualFund() {
    var e = $("#mutual_fund_input").val(), t = $(".all_mutual_fund");
    t.empty(), e && fetch(link + "/search_symbols?which=mutual_fund&val=" + e).then((function (e) {
        if (e.ok) return e.json().then((function (e) {
            var a, _ = _createForOfIteratorHelper(e.data);
            try {
                for (_.s(); !(a = _.n()).done;) {
                    var n = a.value;
                    t.append('<div class="one_filter_suggestion pointer" id="'.concat(n.tickers, '" onmousedown="clickMutualFund(\'').concat(n.tickers + "__" + n.comp_name, '\')"><div style="display: inline; color: #2cbd54">').concat(n.tickers, "</div>").concat(" - " + n.comp_name, "</div>"))
                }
            } catch (e) {
                _.e(e)
            } finally {
                _.f()
            }
        }));
        window.pushNoti("Network Error", 3e3, "error")
    }))
}

function clickCustomPeriod() {
    $("#caret_custom_metric").attr("class").includes("right") ? ($("#caret_custom_metric").removeClass("fa-caret-right").addClass("fa-caret-down"), $(".customized_period_section").css("display", "block")) : ($("#caret_custom_metric").removeClass("fa-caret-down").addClass("fa-caret-right"), $(".customized_period_section").css("display", "none"))
}

function clickExampleFormula() {
    $("#caret_example_formula").attr("class").includes("right") ? ($("#caret_example_formula").removeClass("fa-caret-right").addClass("fa-caret-down"), $(".example_formula_section").css("display", "block")) : ($("#caret_example_formula").removeClass("fa-caret-down").addClass("fa-caret-right"), $(".example_formula_section").css("display", "none"))
}

var possible_different_green_id = {search_dropdown_wrap: 1, functions_dropdown_wrap: 1, console_left_bar: 1};

function makeDifferentGreen(e) {
    for (var t = 0, a = Object.keys(possible_different_green_id); t < a.length; t++) {
        var _ = a[t];
        _ === e ? $("#" + _).addClass("left_bar_different_green") : $("#" + _).removeClass("left_bar_different_green")
    }
}

function showDropdown(e) {
    $("#" + e).css("display", "block")
}

function hideDropdown(e) {
    $("#" + e).css("display", "none")
}

function capFirst(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function getArrayDepth(e) {
    return Array.isArray(e) ? 1 + Math.max.apply(Math, _toConsumableArray(e.map(getArrayDepth))) : 0
}

function convertDicToArray(e, t) {
    for (var a = [], _ = 0, n = Object.keys(e); _ < n.length; _++) {
        var r = n[_];
        if (e[r].constructor === Array) a.push({
            "": r,
            data: e[r]
        }); else if ("object" === _typeof(e[r])) a.push(_objectSpread(_objectSpread({}, {"": r}), e[r])); else {
            var l;
            a.push((_defineProperty(l = {}, t, r), _defineProperty(l, "value", e[r]), l))
        }
    }
    return a
}

function handleApiDataExpandColumn(e, t) {
    var a = [];
    return helperHandleData(e, t, a), a
}

function helperHandleData(e, t, a) {
    if (null != e && "object" === _typeof(e) && e.constructor !== Array) {
        Object.keys(e).length < 1 && a.push([t, ""]);
        for (var _ = 0, n = Object.keys(e); _ < n.length; _++) {
            var r = n[_];
            helperHandleData(e[r], (t ? t + "_" : "") + r, a)
        }
    } else if (null != e && e.constructor === Array) {
        if (e.length < 1) return [t, ""];
        for (var l = 0; l < e.length; l++) helperHandleData(e[l], t + "[" + l + "]", a)
    } else a.push([t, e || ""])
}

function flatHelper(e) {
    var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], n = _createForOfIteratorHelper(e);
    try {
        for (n.s(); !(t = n.n()).done;) {
            var r = t.value;
            r instanceof Array && a > 0 ? flatHelper(r, a - 1, _) : _.push(r)
        }
    } catch (e) {
        n.e(e)
    } finally {
        n.f()
    }
    return _
}

function flattenArray(e) {
    var t, a = [], _ = _createForOfIteratorHelper(e);
    try {
        for (_.s(); !(t = _.n()).done;) {
            var n, r = t.value, l = [], i = _createForOfIteratorHelper(r);
            try {
                for (i.s(); !(n = i.n()).done;) {
                    var p = n.value;
                    getArrayDepth(p) > 1 ? l = l.concat(flatHelper(p, Math.max(getArrayDepth(p) - 2, 0))) : l.push(p)
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            a.push(l)
        }
    } catch (e) {
        _.e(e)
    } finally {
        _.f()
    }
    return a
}

function rotateDataAfterExpandRow(e) {
    var t, a = [], _ = {}, n = -1, r = [], l = _createForOfIteratorHelper(e);
    try {
        for (l.s(); !(t = l.n()).done;) {
            var i = t.value;
            n += 1;
            var p, o = [], c = _createForOfIteratorHelper(i);
            try {
                for (c.s(); !(p = c.n()).done;) {
                    var s = p.value;
                    if (s && !(s.length < 2)) {
                        var u = s[0];
                        if (0 === n) a.push(u), _[u] = 1; else if (!(u in _)) continue;
                        o.push(s[1])
                    }
                }
            } catch (e) {
                c.e(e)
            } finally {
                c.f()
            }
            if (n > 0) {
                for (var f = Math.max(0, r[0].length - o.length), d = new Array(f), y = 0; y < f; ++y) d[y] = "";
                o = o.concat(d)
            }
            r.push(o)
        }
    } catch (e) {
        l.e(e)
    } finally {
        l.f()
    }
    return [a].concat(r)
}

function blowUpDimension(e, t) {
    if (!e || e.length < 1) return e;
    for (var a = e[0].length, _ = Array.from({length: t}, (function () {
        return Array.from({length: a}, (function () {
            return ""
        }))
    })), n = 0; n < e.length; n++) for (var r = 0; r < e[0].length; r++) _[n][r] = e[n][r];
    return _
}

function concatHorizontally(e) {
    if (!e) return e;
    for (var t = [], a = 0; a < e[0].length; a++) {
        for (var _ = [], n = 0; n < e.length; n++) _ = _.concat(e[n][a]);
        t.push(_)
    }
    return t
}

function actuallyImportToSheet(e, t, a) {
    return _actuallyImportToSheet.apply(this, arguments)
}

function _actuallyImportToSheet() {
    return _actuallyImportToSheet = _asyncToGenerator(regeneratorRuntime.mark((function e(t, a, _) {
        return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run(function () {
                        var e = _asyncToGenerator(regeneratorRuntime.mark((function e(n) {
                            var r, l;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = n.workbook.worksheets, (l = r.add()).activate(), e.abrupt("return", n.sync().then(_asyncToGenerator(regeneratorRuntime.mark((function e() {
                                            var r, i, p, o, c, s;
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        for (r = [["Provider", capFirst(t)], ["Endpoint", a], ["", ""]], l.getRange("B1:B2").format.fill.color = "#c0e5a6", i = 3, p = "=FS_Api(B1, B2", Object.keys(_).length > 0 ? p += ", A4:B" : p += ")", o = 0, c = Object.keys(_); o < c.length; o++) s = c[o], r.push([s, _[s]]), i += 1;
                                                        return Object.keys(_).length > 0 && (p += i + ")", l.getRange("B4:B" + i).format.fill.color = "#c0e5a6", r.push(["", ""]), i += 1), i += 1, r.push(["Output", p]), l.getRange("A1:B" + i).values = r, l.getRange("B" + i).select(), e.next = 16, n.sync();
                                                    case 16:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))));
                                    case 4:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }());
                case 2:
                case"end":
                    return e.stop()
            }
        }), e)
    }))), _actuallyImportToSheet.apply(this, arguments)
}

window.pushNoti = function (e, t, a) {
    "error" === a ? iziToast.error({
        title: "Error",
        message: e,
        theme: "dark",
        backgroundColor: "#f44242",
        messageColor: "white",
        titleColor: "white",
        position: "bottomCenter",
        timeout: t,
        class: "toaster"
    }) : iziToast.success({
        title: "OK",
        message: e,
        theme: "dark",
        backgroundColor: "#0e8e32",
        messageColor: "white",
        titleColor: "white",
        position: "bottomCenter",
        timeout: t,
        class: "toaster"
    })
}, window.stripHtml = function (e) {
    var t = document.createElement("DIV");
    return t.innerHTML = e, t.textContent || t.innerText || ""
};