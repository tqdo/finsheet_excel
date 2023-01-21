var link = 'https://54e9-100-1-232-170.ngrok.io'
var link = 'https://finsheet.io'
// Todo: uncomment Finsheet url
console.log(link)
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
var map_metrics = {
  '0': {display_name: 'Average Daily Trading Volume (10d)', is_financial_group: '', display_group:['Valuation'], 'type': '1', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'avg_trading_volume_10d', default_0: 0},
  '1': {display_name: 'Average Daily Return (13w)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_return_daily_13w', default_0: 0},
  '2': {display_name: 'Average Daily Return (26w)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_return_daily_26w', default_0: 0},
  '3': {display_name: 'Average Monthly Trading Volume (3m)', is_financial_group: '', display_group:['Valuation'], 'type': '1', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'avg_trading_volume_10d', default_0: 0},
  '4': {display_name: '52 Week High', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_high_52w', default_0: 0},
  '5': {display_name: '52 Week High Date', is_financial_group: '', display_group:['Valuation'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'price_high_date_52w', default_0: 0},
  '6': {display_name: '52 Week Low', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_low_52w', default_0: 0},
  '7': {display_name: '52 Week Low Date', is_financial_group: '', display_group:['Valuation'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'price_low_date_52w', default_0: 0},
  '8': {display_name: 'Average Daily Return (5d)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_return_daily_5d', default_0: 0},
  '9': {display_name: 'Headquarter Address', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'address', default_0: 0},
  '10': {display_name: 'Headquarter City', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'city', default_0: 0},
  '11': {display_name: 'Operating Country', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'country', default_0: 0},
  '12': {display_name: 'Reporting Currency', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'reporting_currency', default_0: 0},
  '13': {display_name: 'Company Description', is_financial_group: '', display_group:['Profile'], 'type': '4', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'description', default_0: 0},
  '14': {display_name: 'Number of Employees', is_financial_group: '', display_group:['Profile'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'employees', default_0: 0},
  '15': {display_name: 'Exchange Name', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'exchange_name', default_0: 0},
  '16': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '17': {display_name: 'Alpha Research Industry', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'ar_industry', default_0: 0},
  '18': {display_name: 'Fiscal Year-End Month', is_financial_group: '', display_group:['Profile'], 'type': '', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '19': {display_name: 'Industry Group', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'ggroup', default_0: 0},
  '20': {display_name: 'Industry', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'gind', default_0: 0},
  '21': {display_name: 'Sector', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'gsector', default_0: 0},
  '22': {display_name: 'Sub-Industry', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'gsubind', default_0: 0},
  '23': {display_name: 'IPO Date', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'ipo', default_0: 0},
  '24': {display_name: 'Market Capitalization', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '1', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'market_cap', default_0: 0},
  '25': {display_name: 'Average Daily Return (Month to Date)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'mtd_price_return_daily', default_0: 0},
  '26': {display_name: 'NAICS Industry', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'naics', default_0: 0},
  '27': {display_name: 'NAICS National Industry', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'naics_national_industry', default_0: 0},
  '28': {display_name: 'NAICS Sector', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'naics_sector', default_0: 0},
  '29': {display_name: 'NAICS Subsector', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'naics_subsector', default_0: 0},
  '30': {display_name: 'Company Name', is_financial_group: '', display_group:['Profile'], 'type': '4', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: 'company_name', default_0: 0},
  '31': {display_name: 'Company Phone Number', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'phone', default_0: 0},
  '32': {display_name: 'Price Relative to S&P500 (13 Week)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_relative_to_sp500_13w', default_0: 0},
  '33': {display_name: 'Price Relative to S&P500 (26 Week)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_relative_to_sp500_26w', default_0: 0},
  '34': {display_name: 'Price Relative to S&P500 (4 Week)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_relative_to_sp500_4w', default_0: 0},
  '35': {display_name: 'Price Relative to S&P500 (YTD)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'relative_to_sp500_ytd', default_0: 0},
  '36': {display_name: 'Sedol Number', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'sedol', default_0: 0},
  '37': {display_name: 'Number of Outstanding Shares', is_financial_group: '', display_group:['Valuation'], 'type': '1', currency_type: '0', default_freq: 'Q', supported_freq:['Q'], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'shares_out', default_0: 0},
  '38': {display_name: 'Headquarter State', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'state', default_0: 0},
  '39': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '40': {display_name: 'Company Website', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'weburl', default_0: 0},
  '41': {display_name: 'Average Daily Return (YTD)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'ytd_price_return_daily', default_0: 0},
  '42': {display_name: 'Asset Turnover', is_financial_group: '', display_group:['Efficiency', 'Popular'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'asset_turnover', default_0: 0},
  '43': {display_name: 'Book Value Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'bv_share', default_0: 0},
  '44': {display_name: 'Accounts Payable', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'account_payable', default_0: 0},
  '45': {display_name: 'Accounts Receivable - Trade, Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'account_receivable', default_0: 0},
  '46': {display_name: 'Accrued Expenses', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'accured_exp', default_0: 0},
  '47': {display_name: 'Accumulated Depreciation, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'accum_dep', default_0: 0},
  '48': {display_name: 'Additional Paid-In Capital', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'add_paid_in', default_0: 0},
  '49': {display_name: 'Cash', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash', default_0: 0},
  '50': {display_name: 'Cash and Short Term Investments', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash_st_inv', default_0: 0},
  '51': {display_name: 'Cash & Equivalents', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash_equiv', default_0: 0},
  '52': {display_name: 'Common Stock, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'common_stock', default_0: 0},
  '53': {display_name: 'Deferred Income Tax', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'deferred_inc_tax', default_0: 0},
  '54': {display_name: 'Goodwill, Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'goodwill', default_0: 0},
  '55': {display_name: 'Intangibles, Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'intangible', default_0: 0},
  '56': {display_name: 'Long Term Debt', is_financial_group: 'BS', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'lt_debt', default_0: 0},
  '57': {display_name: 'Long Term Investments', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'lt_inv', default_0: 0},
  '58': {display_name: 'Notes Payable/Short Term Debt', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'note_payable', default_0: 0},
  '59': {display_name: 'Other Current Assets, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_curr_asset', default_0: 0},
  '60': {display_name: 'Other Current Liabilities, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_curr_lib', default_0: 0},
  '61': {display_name: 'Other Equity, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_equity', default_0: 0},
  '62': {display_name: 'Other Liabilities, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_lib', default_0: 0},
  '63': {display_name: 'Other Long Term Assets, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_lt_asset', default_0: 0},
  '64': {display_name: 'Other Receivables', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_receivable', default_0: 0},
  '65': {display_name: 'Prepaid Expenses', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'prepaid_exp', default_0: 0},
  '66': {display_name: 'Property/Plant/Equipment, Total - Gross', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ppe_gross', default_0: 0},
  '67': {display_name: 'Property/Plant/Equipment, Total - Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ppe_net', default_0: 0},
  '68': {display_name: 'Retained Earnings', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'retained_earnings', default_0: 0},
  '69': {display_name: 'Short Term Investments', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'st_inv', default_0: 0},
  '70': {display_name: 'Tangible Book Value per Share, Common Eq', is_financial_group: 'BS', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'tangible_per_share', default_0: 0},
  '71': {display_name: 'Total Assets', is_financial_group: 'BS', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_asset', default_0: 0},
  '72': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '73': {display_name: 'Total Current Assets', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_curr_asset', default_0: 0},
  '74': {display_name: 'Total Current Liabilities', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_curr_lib', default_0: 0},
  '75': {display_name: 'Total Debt', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_debt', default_0: 0},
  '76': {display_name: 'Total Equity', is_financial_group: 'BS', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_equity', default_0: 0},
  '77': {display_name: 'Total Inventory', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_inven', default_0: 0},
  '78': {display_name: 'Total Liabilities', is_financial_group: 'BS', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_lib', default_0: 0},
  '79': {display_name: 'Total Liabilities & Shareholders Equity', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_lib_equity', default_0: 0},
  '80': {display_name: 'Total Long Term Debt', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_lt_debt', default_0: 0},
  '81': {display_name: 'Total Receivables, Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'receivable_net', default_0: 0},
  '83': {display_name: 'Cash Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'cash_per_share', default_0: 0},
  '84': {display_name: 'Cash Ratio', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'cash_ratio', default_0: 0},
  '85': {display_name: 'Capital Expenditures', is_financial_group: 'CF', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'capex', default_0: 0},
  '86': {display_name: 'Cash from Financing Activities', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cf_financing', default_0: 0},
  '87': {display_name: 'Cash from Investing Activities', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cf_investing', default_0: 0},
  '88': {display_name: 'Cash from Operating Activities', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cf_operating', default_0: 0},
  '89': {display_name: 'Cash Payments', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash_payment', default_0: 0},
  '90': {display_name: 'Cash Receipts', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash_receipt', default_0: 0},
  '91': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '92': {display_name: 'Changes in Working Capital', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'change_wc', default_0: 0},
  '93': {display_name: 'Financing Cash Flow Items', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'fin_cf_item', default_0: 0},
  '94': {display_name: 'Foreign Exchange Effects', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'forex_effect', default_0: 0},
  '95': {display_name: 'Issuance (Retirement) of Debt, Net', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'iss_retire_debt', default_0: 0},
  '96': {display_name: 'Net Change in Cash', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_chg_cash', default_0: 0},
  '97': {display_name: 'Other Investing Cash Flow Items, Total', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_inv_cf_item', default_0: 0},
  '98': {display_name: 'Total Dividends Paid', is_financial_group: 'CF', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'dividend', default_0: 1},
  '99': {display_name: 'Current Ratio', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'curr_ratio', default_0: 0},
  '100': {display_name: 'EBITD', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'TTM', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebitd', default_0: 0},
  '101': {display_name: 'EBIT Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ebit_per_share', default_0: 0},
  '102': {display_name: 'EBT', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebt', default_0: 0},
  '103': {display_name: 'EPS', is_financial_group: '', display_group:['Financials', 'Popular'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'eps', default_0: 0},
  '104': {display_name: 'Free Cash Flow', is_financial_group: '', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'fcf', default_0: 0},
  '105': {display_name: 'Gross Margin', is_financial_group: '', display_group:['Efficiency', 'Popular'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'gross_margin', default_0: 0},
  '106': {display_name: 'Cost of Revenue, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cost_of_rev', default_0: 0},
  '107': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '108': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '109': {display_name: 'Diluted EPS', is_financial_group: 'IC', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'diluted_eps', default_0: 0},
  '110': {display_name: 'Gain (Loss) on Sale of Assets', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'gain_loss_sale_asset', default_0: 0},
  '111': {display_name: 'Gross Profit', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'gross_profit', default_0: 0},
  '112': {display_name: 'Interest Exp.(Inc.),Net-Operating, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'int_exp_inc_net_op', default_0: 0},
  '113': {display_name: 'Net Income', is_financial_group: 'IC', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_income', default_0: 0},
  '114': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '115': {display_name: 'Net Income Before Taxes', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'inc_before_tax', default_0: 0},
  '116': {display_name: 'Operating Income', is_financial_group: 'IC', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'operating_inc', default_0: 0},
  '117': {display_name: 'Other Non-operating Income (Expense), Net', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_non_op_inc_exp', default_0: 0},
  '118': {display_name: 'Other Operating Expenses, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_op_exp', default_0: 0},
  '119': {display_name: 'Provision for Income Taxes', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'prov_inc_tax', default_0: 0},
  '120': {display_name: 'Research & Development', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'rd', default_0: 0},
  '121': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '122': {display_name: 'Selling/General/Admin. Expenses, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'sga', default_0: 0},
  '123': {display_name: 'Total Operating Expense', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_op_exp', default_0: 0},
  '124': {display_name: 'Unusual Expense (Income)', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'unsual_exp_inc', default_0: 0},
  '125': {display_name: 'Inventory Turnover', is_financial_group: '', display_group:['Efficiency', 'Popular'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'inven_turnover', default_0: 0},
  '127': {display_name: 'Long Term Debt / Total Assets', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'lt_debt_to _asset', default_0: 0},
  '128': {display_name: 'Long Term Debt / Total Capital', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'lt_debt_to_capital', default_0: 0},
  '129': {display_name: 'Long Term Debt / Total Equity', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'lt_debt_to_equity', default_0: 0},
  '130': {display_name: 'Net Debt', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_debt', default_0: 0},
  '131': {display_name: 'Net Debt / Total Capital', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'net_debt_to_capital', default_0: 0},
  '132': {display_name: 'Net Debt / Total Equity', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'net_debt_to_equity', default_0: 0},
  '135': {display_name: 'Net Interest Coverage', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['FY', 'TTM', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'net_int_cov', default_0: 0},
  '136': {display_name: 'Net Margin', is_financial_group: '', display_group:['Efficiency', 'Popular'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'net_margin', default_0: 0},
  '137': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'TTM'], can_be_filter: 'n', can_be_column: 'n', plot_type: '2', excel: '', default_0: 0},
  '138': {display_name: 'Operating Margin', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'op_margin', default_0: 0},
  '139': {display_name: 'Payout Ratio', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'payout_ratio', default_0: 0},
  '140': {display_name: 'Price / Book Ratio (P/B)', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'pb', default_0: 0},
  '141': {display_name: 'Pretax Margin', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'pre_tax_margin', default_0: 0},
  '142': {display_name: 'Price / Sales Ratio (P/S)', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ps', default_0: 0},
  '143': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '144': {display_name: 'Quick Ratio', is_financial_group: '', display_group:['Efficiency'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'quick_ratio', default_0: 0},
  '145': {display_name: 'Receivables Turnover', is_financial_group: '', display_group:['Efficiency'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['FY', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'receivables_turnover', default_0: 0},
  '146': {display_name: 'Revenue', is_financial_group: '', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'TTM', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'revenue', default_0: 0},
  '148': {display_name: 'Revenue Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'TTM', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'rev_per_share', default_0: 0},
  '149': {display_name: 'Return on Investments (ROI)', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'roi', default_0: 0},
  '151': {display_name: 'Selling, General & Admin Expenses / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'sga_to_rev', default_0: 0},
  '152': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '153': {display_name: 'Total Debt / Total Assets', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'total_debt_to_asset', default_0: 0},
  '154': {display_name: 'Total Debt / Total Capital', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'total_debt_to_capital', default_0: 0},
  '155': {display_name: 'Total Debt / Total Equity', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'total_debt_to_equity', default_0: 0},
  '156': {display_name: 'Total Ratio', is_financial_group: '', display_group:['Efficiency'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'total_ratio', default_0: 0},
  '157': {display_name: 'Minority Interest', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['Q', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'minority_interest_bs', default_0: 0},
  '158': {display_name: 'Minority Interest', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['Q', 'TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'minority_interest_ic', default_0: 0},
  '159': {display_name: 'Revenue Growth YoY', is_financial_group: '', display_group:['Growth', 'Popular'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['Q', 'TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'rev_growth_yoy', default_0: 0},
  // '160': {display_name: 'Dividends Per Share', is_financial_group: '', display_group:['Efficiency'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'dividend_per_share', default_0: 1},
  '161': {display_name: 'EBITD Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ebitd_per_share', default_0: 0},
  '162': {display_name: 'Free Cash Flow Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'fcf_per_share', default_0: 0},
  '163': {display_name: 'Operating Cash Flow / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'ocf_to_rev', default_0: 0},
  '164': {display_name: 'Average Daily Return (52w)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_return_daily_52w', default_0: 0},
  '165': {display_name: 'Beta', is_financial_group: '', display_group:['Valuation', 'Risk'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'beta', default_0: 0},
  '166': {display_name: 'CUSIP Number', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'cusip', default_0: 0},
  '167': {display_name: 'ISIN Number', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'isisn', default_0: 0},
  '168': {display_name: 'Price Currency', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: '', plot_type: '', excel: 'price_currency', default_0: 0},
  '169': {display_name: 'Price Relative to S&P500 (52 Week)', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_relative_to_sp500_52w', default_0: 0},
  '170': {display_name: 'Current Port. of LT Debt/Capital Leases', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'current_port_debt_leases', default_0: 0},
  '171': {display_name: 'Unrealized Gain (Loss)', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'unrealized_gain_loss', default_0: 0},
  '172': {display_name: 'Cash Interest Paid', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash_int_paid', default_0: 0},
  '173': {display_name: 'Deferred Taxes', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'deferred_tax', default_0: 0},
  '174': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '175': {display_name: 'Issuance (Retirement) of Stock, Net', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'iss_retire_stock', default_0: 0},
  '176': {display_name: 'Net Income/Starting Line', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_inc_starting_line', default_0: 0},
  '177': {display_name: 'Non-Cash Items', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'non_cash_item', default_0: 0},
  '180': {display_name: 'Interest Income (Expense) , Net Non Operating, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'int_inc_exp_net_op', default_0: 0},
  '181': {display_name: 'Preferred Stock - Non Redeemable, Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'non_redeem_pref_stock', default_0: 0},
  '182': {display_name: 'Treasury Stock - Common', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'treasury_stock', default_0: 0},
  '183': {display_name: 'Amortization', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM', 'YTD'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'amortization', default_0: 0},
  '184': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '185': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '186': {display_name: 'Note Receivable - Long Term', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'note_receivable_lt', default_0: 0},
  '187': {display_name: 'Total Preferred Shares Outstanding', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_pref_shares', default_0: 0},
  '188': {display_name: 'Total Adjustments to Net Income', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'adj_to_net_inc', default_0: 0},
  '189': {display_name: 'Cash & Due from Banks', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'cash_due_from_bank', default_0: 0},
  '190': {display_name: 'Net Loans', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_loan', default_0: 0},
  '191': {display_name: 'Other Assets, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_asset', default_0: 0},
  '192': {display_name: 'Other Earning Assets, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_earning_asset', default_0: 0},
  '193': {display_name: 'Payable/Accrued', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'payable_accrued', default_0: 0},
  '194': {display_name: 'Total Deposits', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_deposit', default_0: 0},
  '195': {display_name: 'Total Short Term Borrowings', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_st_borrowing', default_0: 0},
  '196': {display_name: 'Interest Income, Bank', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'interest_inc_bank', default_0: 0},
  '197': {display_name: 'Loan Loss Provision', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'loan_loss_prov', default_0: 0},
  '198': {display_name: 'Net Interest Inc. After Loan Loss Prov.', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'int_inc_after_loan_loss', default_0: 0},
  '199': {display_name: 'Net Interest Income', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_int_inc', default_0: 0},
  '200': {display_name: 'Non-Interest Expense, Bank', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'non_int_exp_bank', default_0: 0},
  '201': {display_name: 'Non-Interest Income, Bank', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'non_int_inc_bank', default_0: 0},
  '202': {display_name: 'Total Interest Expense', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_int_exp', default_0: 0},
  '203': {display_name: 'Price % Change Today', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'today_percent_chg', default_0: 0},
  '204': {display_name: 'Price $ Change Today', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'today_val_chg', default_0: 0},
  '205': {display_name: 'Stock Price, Previous Close', is_financial_group: '', display_group:['Valuation'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_previous_close', default_0: 0},
  '206': {display_name: 'Stock Price, Latest', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'price_latest', default_0: 0},
  '207': {display_name: 'CAPEX / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'capex_to_rev', default_0: 0},
  '208': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '209': {display_name: 'Depreciation & Amortization', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'depre_amort', default_0: 0},
  '210': {display_name: 'Depreciation & Amortization / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'da_to_rev', default_0: 0},
  '211': {display_name: 'EBIT', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebit', default_0: 0},
  '212': {display_name: 'EBITDA', is_financial_group: '', display_group:['Financials', 'Popular'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebitda', default_0: 0},
  '213': {display_name: 'EBITDA Margin', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'ebitda_margin', default_0: 0},
  '214': {display_name: 'EBITDA Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ebitda_per_share', default_0: 0},
  '215': {display_name: 'EBITD Margin', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'ebitd_margin', default_0: 0},
  '216': {display_name: 'EBIT Margin', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'ebit_margin', default_0: 0},
  '217': {display_name: 'Interest Income (Expense)', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'int_inc_exp', default_0: 0},
  '218': {display_name: 'Interest Income (Expense) / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'int_inc_exp_to_rev', default_0: 0},
  '219': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '220': {display_name: 'Net Debt / Total Assets', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'net_debt_to_asset', default_0: 0},
  '221': {display_name: 'Net Income Per Employee', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'inc_per_employee', default_0: 0},
  '222': {display_name: 'Other Income (Expense)', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_inc_exp', default_0: 0},
  '223': {display_name: 'Other Income (Expense) / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'other_inc_exp_to_rev', default_0: 0},
  '224': {display_name: 'Research & Development / Revenue', is_financial_group: '', display_group:['Efficiency'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'rd_to_rev', default_0: 0},
  '225': {display_name: 'Revenue Per Employee', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'rev_per_employee', default_0: 0},
  '226': {display_name: 'Return on Assets (ROA)', is_financial_group: '', display_group:['Efficiency', 'Popular'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'roa', default_0: 0},
  '227': {display_name: 'Return on Equity (ROE)', is_financial_group: '', display_group:['Efficiency', 'Popular'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'roe', default_0: 0},
  '228': {display_name: 'Effective Tax Rate', is_financial_group: '', display_group:['Financials'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'tax_rate', default_0: 0},
  '229': {display_name: 'Redeemable Preferred Stock, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'redeem_pref_stock', default_0: 0},
  '230': {display_name: 'Other Bearing Liabilities, Total', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_bearing_lib', default_0: 0},
  '232': {display_name: 'EPS Forecast Count of Estimates', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '0', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'num_analyst_eps', default_0: 0},
  '233': {display_name: 'EPS Forecast Mean Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'eps_proj_avg', default_0: 0},
  '234': {display_name: 'EPS Forecast High Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'eps_proj_high', default_0: 0},
  '235': {display_name: 'EPS Forecast Low Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'eps_proj_low', default_0: 0},
  '236': {display_name: 'Revenue Forecast Count of Estimates', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '0', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'num_analyst_rev', default_0: 0},
  '237': {display_name: 'Revenue Forecast Mean Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'rev_proj_avg', default_0: 0},
  '238': {display_name: 'Revenue Forecast High Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'rev_proj_high', default_0: 0},
  '239': {display_name: 'Revenue Forecast Low Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'rev_proj_low', default_0: 0},
  '240': {display_name: 'Deferred Policy Acquisition Costs', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'deferred_pol_acq_cost', default_0: 0},
  '241': {display_name: 'Policy Liabilities', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'policy_lib', default_0: 0},
  '242': {display_name: 'Amortization of Policy Acquisition Costs', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'amort_pol_acq_cost', default_0: 0},
  '243': {display_name: 'Losses, Benefits, and Adjustments, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'loss_benefit_adj', default_0: 0},
  '244': {display_name: 'Net Investment Income', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'net_inv_inc', default_0: 0},
  '245': {display_name: 'Other Revenue, Total', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'other_rev', default_0: 0},
  '246': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '247': {display_name: 'Total Premiums Earned', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_prem_earned', default_0: 0},
  '248': {display_name: 'Insurance Receivables', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'insur_receivable', default_0: 0},
  '249': {display_name: 'Operations & Maintenance', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'op_maintenance', default_0: 0},
  '250': {display_name: 'Total Utility Plant, Net', is_financial_group: 'BS', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_util_plant', default_0: 0},
  '251': {display_name: 'U.S. GAAP Adjustment', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'us_gaap_adj', default_0: 0},
  '252': {display_name: 'Fuel Expense', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'fuel_exp', default_0: 0},
  '254': {display_name: 'Risk Free Rate', is_financial_group: '', display_group:['Profile'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'risk_free_rate', default_0: 0},
  '255': {display_name: 'Days to Next Earnings', is_financial_group: '', display_group:['Profile'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'days_to_earnings', default_0: 0},
  '256': {display_name: 'Analyst Price Target High', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_target_high', default_0: 0},
  '257': {display_name: 'Upside Analyst Target High', is_financial_group: '', display_group:['Forecast'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'upside_target_high', default_0: 0},
  '258': {display_name: 'Analyst Price Target Low', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_target_low', default_0: 0},
  '259': {display_name: 'Upside Analyst Target Low', is_financial_group: '', display_group:['Forecast'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'upside_target_low', default_0: 0},
  '260': {display_name: 'Analyst Price Target Mean', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_target_avg', default_0: 0},
  '261': {display_name: 'Upside Analyst Target Mean', is_financial_group: '', display_group:['Forecast'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'upside_target_avg', default_0: 0},
  '262': {display_name: 'Analyst Price Target Median', is_financial_group: '', display_group:['Forecast', 'Popular'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'price_target_median', default_0: 0},
  '263': {display_name: 'Upside Analyst Target Median', is_financial_group: '', display_group:['Forecast', 'Popular'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'upside_target_median', default_0: 0},
  '264': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '265': {display_name: 'EV / Free Cash Flow', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ev_to_fcf', default_0: 0},
  '266': {display_name: 'Net Income Forecast Mean Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'inc_proj_avg', default_0: 0},
  '267': {display_name: 'Net Income Forecast High Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'inc_proj_high', default_0: 0},
  '268': {display_name: 'Net Income Forecast Low Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'inc_proj_low', default_0: 0},
  '269': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '270': {display_name: 'Free Cash Flow / Net Income', is_financial_group: '', display_group:['Risk'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'fcf_to_net_inc', default_0: 0},
  '271': {display_name: 'Total Equity / Total Assets', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'equity_to_asset', default_0: 0},
  '272': {display_name: 'Asset Efficiency', is_financial_group: '', display_group:['Efficiency'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'asset_efficiency', default_0: 0},
  '273': {display_name: 'Working Capital', is_financial_group: '', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'working_cap', default_0: 0},
  '274': {display_name: 'Altman Z-Score', is_financial_group: '', display_group:['Risk', 'Popular'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'altman_z_score', default_0: 0},
  '275': {display_name: 'Cash Returned on Invested Capital (CROCI)', is_financial_group: '', display_group:['Efficiency'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'croci', default_0: 0},
  '276': {display_name: 'Cash / Total Assets', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'cash_to_asset', default_0: 0},
  '277': {display_name: 'Cash / Total Equity', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'Q', supported_freq:['FY', 'Q'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'cash_to_equity', default_0: 0},
  '278': {display_name: 'Free Cash Flow / Debt', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'fcf_to_debt', default_0: 0},
  '279': {display_name: 'Free Cash Flow / Current Liabilities', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'fcf_to_curr_lib', default_0: 0},
  '280': {display_name: 'Free Cash Flow / Total Liabilities', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'fcf_to_lib', default_0: 0},
  '281': {display_name: 'Net Income Growth YoY', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'net_inc_growth_yoy', default_0: 0},
  '282': {display_name: 'EPS Growth YoY', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'eps_growth_yoy', default_0: 0},
  '283': {display_name: 'Degree of Combined Leverage', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'deg_of_combined_lev', default_0: 0},
  '284': {display_name: 'Degree of Financial Leverage', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'deg_of_financial_lev', default_0: 0},
  '285': {display_name: 'Degree of Operating Leverage', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'deg_of_operating_lev', default_0: 0},
  '287': {display_name: 'Net Income CAGR 5y', is_financial_group: '', display_group:['Growth', 'Popular'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'net_inc_cagr_5y', default_0: 0},
  '286': {display_name: 'Revenue CAGR 5y', is_financial_group: '', display_group:['Growth', 'Popular'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'rev_cagr_5y', default_0: 0},
  '288': {display_name: 'EBITDA CAGR 5y', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'ebitda_cagr_5y', default_0: 0},
  '289': {display_name: 'EBITDA Interest Coverage', is_financial_group: '', display_group:['Risk'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'net_int_cov_ebitda', default_0: 0},
  '290': {display_name: 'Beneish M-Score', is_financial_group: '', display_group:['Risk', 'Popular'], 'type': '0', currency_type: '0', default_freq: 'TTM', supported_freq:['TTM', 'FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'beneish_m_score', default_0: 0},
  '291': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '292': {display_name: 'Dividends Growth YoY', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'dividends_growth_yoy', default_0: 0},
  '293': {display_name: 'Dvidends CAGR 5y', is_financial_group: '', display_group:['Growth', 'Popular'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'dividends_cagr_5y', default_0: 0},
  '294': {display_name: 'Index Membership', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'index_membership', default_0: 0},
  '295': {display_name: 'Forward P/E', is_financial_group: '', display_group:['Valuation'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'forward_pe', default_0: 0},
  '296': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '297': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '298': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '299': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '300': {display_name: 'Operating Cash Flow Per Share', is_financial_group: '', display_group:['Financials'], 'type': '0', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ocf_per_share', default_0: 0},
  '301': {display_name: 'Country of Exchange', is_financial_group: '', display_group:['Profile'], 'type': '3', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'country_of_exchange', default_0: 0},
  '302': {display_name: 'Price / Earnings (P/E)', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'pe', default_0: 0},
  '303': {display_name: 'Enterprise Value (EV)', is_financial_group: '', display_group:['Valuation'], 'type': '1', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ev', default_0: 0},
  '304': {display_name: 'Enterprise Value Per Share', is_financial_group: '', display_group:['Valuation'], 'type': '0', currency_type: '2', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ev_per_share', default_0: 0},
  '305': {display_name: 'EV / EBITDA', is_financial_group: '', display_group:['Valuation', 'Popular'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ev_to_ebitda', default_0: 0},
  '306': {display_name: 'EV / Revenue', is_financial_group: '', display_group:['Valuation'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'ev_to_rev', default_0: 0},
  '307': {display_name: 'PEG', is_financial_group: '', display_group:['Valuation'], 'type': '0', currency_type: '0', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'peg', default_0: 0},
  '308': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '309': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '310': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '311': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '312': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '313': {display_name: 'EBITDA Growth YoY', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'ebitda_growth_yoy', default_0: 0},
  '314': {display_name: 'FCF Growth YoY', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'fcf_growth_yoy', default_0: 0},
  '315': {display_name: 'Cost of Revenue Growth YoY', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'cogs_growth_yoy', default_0: 0},
  '316': {display_name: 'FCF CAGR 5y', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'fcf_cagr_5y', default_0: 0},
  '317': {display_name: 'Cost of Revenue CAGR 5y', is_financial_group: '', display_group:['Growth'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '', excel: 'cogs_cagr_5y', default_0: 0},
  '318': {display_name: 'Total Revenue', is_financial_group: 'IC', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'total_rev', default_0: 0},
  '319': {display_name: 'Depreciation / Depletion', is_financial_group: 'CF', display_group:['Financials'], 'type': '1', currency_type: '1', default_freq: 'TTM', supported_freq:['FY', 'Q', 'TTM'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'depre_deple', default_0: 0},
  '320': {display_name: '', is_financial_group: '', display_group:[''], 'type': '', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '', excel: '', default_0: 0},
  '321': {display_name: 'Dividend Yield', is_financial_group: '', display_group:['Profile'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'dividend_yield', default_0: 0},
  '322': {display_name: 'Volume', is_financial_group: '', display_group:['Profile'], 'type': '1', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'volume', default_0: 0},
  '323': {display_name: 'Upside DCF', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '2', excel: '', default_0: 0},
  '324': {display_name: 'Upside EPV', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '2', excel: '', default_0: 0},
  '325': {display_name: 'Upside DDM', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: 'n', can_be_column: 'n', plot_type: '2', excel: '', default_0: 0},
  '326': {display_name: 'Benjamin Graham Number', is_financial_group: '', display_group:['Valuation'], 'type': '0', currency_type: '1', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'graham_value', default_0: 0},
  '327': {display_name: 'Benjamin Graham Number Upside', is_financial_group: '', display_group:['Valuation'], 'type': '2', currency_type: '', default_freq: '', supported_freq:[''], can_be_filter: '', can_be_column: '', plot_type: '2', excel: 'graham_upside', default_0: 0},
  '328': {display_name: 'EBITDA Forecast Mean Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebitda_proj_avg', default_0: 0},
  '329': {display_name: 'EBITDA Forecast High Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebitda_proj_high', default_0: 0},
  '330': {display_name: 'EBITDA Forecast Low Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebitda_proj_low', default_0: 0},
  '331': {display_name: 'EBITDA Forecast Count of Estimates', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '0', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'num_analyst_ebitda', default_0: 0},
  '332': {display_name: 'EBIT Forecast Mean Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebit_proj_avg', default_0: 0},
  '333': {display_name: 'EBIT Forecast High Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebit_proj_high', default_0: 0},
  '334': {display_name: 'EBIT Forecast Low Consensus', is_financial_group: '', display_group:['Forecast'], 'type': '1', currency_type: '1', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '1', excel: 'ebit_proj_low', default_0: 0},
  '335': {display_name: 'EBIT Forecast Count of Estimates', is_financial_group: '', display_group:['Forecast'], 'type': '0', currency_type: '0', default_freq: 'FY', supported_freq:['FY'], can_be_filter: '', can_be_column: '', plot_type: '0', excel: 'num_analyst_ebit', default_0: 0},
}

delete map_metrics['17']
map_metrics['30'].can_be_column = ''
map_metrics['30'].can_be_filter = ''

var analyst_metrics = {"232": 1, "233": 1, "234": 1, "235": 1, "236": 1, "237": 1, "238": 1, "239": 1, "266": 1, "267": 1, "268": 1,
  "328": 1, "329": 1, "330": 1, "331": 1, "332": 1, "333": 1, "334": 1, "325": 1,}


var map_excel_name_to_id = {};
for (var key of Object.keys(map_metrics)) {
  var dic = map_metrics[key];
  if (dic.excel) {
    map_excel_name_to_id[dic.excel] = key;
  }
}

var option_cols = ['contractName',
  'contractSize',
  'contractPeriod',
  'currency',
  'type',
  'inTheMoney',
  'lastTradeDateTime',
  'expirationDate',
  'strike',
  'lastPrice',
  'bid',
  'ask',
  'change',
  'changePercent',
  'volume',
  'openInterest',
  'impliedVolatility',
  'delta',
  'gamma',
  'theta',
  'vega',
  'rho',
  'theoretical',
  'intrinsicValue',
  'timeValue',
  'updatedAt',
  'daysBeforeExpiration']

function checkCoupon(cookie, ){
  fetch(link + "/checkcoupon?api_key=" + cookie, {
    method: "GET",
    headers: {"Content-Type": "text/plain"},
  }).then(function (res) {
    res.json().then(function (myJson) {
      console.log(myJson)
      window.show_coupon = 1-parseInt(myJson["have_used_coupon"]) > 0 && !myJson.is_paid_user
          && myJson["create_at"] && Math.abs((new Date()) - (new Date(myJson["create_at"].slice(0,10)))) / 36e5 > 72
      if(window.show_coupon ){
        document.getElementById('header_coupon').innerHTML = `
                            <div class="alert alert-dismissible" role="alert"
                 style="width: 100%; background-color: #222222; padding: 8px 14px 8px 14px;position: fixed; bottom: 0; margin-left: -8px;
                        color: white;
                        font-size: 14px;
                        margin-bottom: 0;">
                        <span>
                        Get your first month 30% off for any plan.  <a onclick="goToAccountPage()"
                                href="https://finsheet.io/account" style="color: white;cursor: pointer"><b><u style="color: #0e8e32">Redeem offer!</u></b></a>
                        </span>
            </div>
                `
      }
      else if (!myJson.is_paid_user && myJson.is_registered && !myJson.free_has_all_access) {      // This is the case for free user but not qualified for coupon (just register or have used coupon)
        document.getElementById('header_coupon').innerHTML = `
                          <div class="alert alert-dismissible" role="alert"
              style="width: 100%; background-color: #222222; padding: 8px 14px 8px 5px;position: fixed; bottom: 0; margin-left: -8px;
                      color: white;
                      font-size: 14px;
                      margin-bottom: 0;">
                      <span>
                      Your Free plan has a rate limit of 500/day and other limitations. <a onclick="goToAccountPage()"
                              href="https://finsheet.io/account" style="color: white"><b><u style="color: #0e8e32">Upgrade</u></b></a> for unlimited usages.
                      </span>
          </div>
              `
      }

      // Populate the account page
      $("#account_name").text(myJson.name)
      $("#account_email").text(myJson.email)
      $("#account_plan").text(myJson.plan.length > 0 ? capFirst(myJson.plan[0].name) : 'Free')

    })
  })
}
/* global console, document, Excel, Office */
$(document).ready(function () {
  setTimeout(() => {
    // $('.hide_chat_widget').css({display: 'none'})
    window.Tawk_API.hideWidget()
  }, 2000);

  let cookie = readCookie("finsheet_api_key")
  if (cookie || true) {
    // $("#if_have_api_key").css({ display: "flex" });
    setTimeout(() => {$('#functions_dropdown_wrap').addClass('left_bar_different_green')}, 200)

    checkCoupon(cookie)
    // Hide sign-out button if not login yet
    if(!cookie){
      setTimeout(() => {$("#sign_out_button").css({ display: "none" });}, 200)
    } else {
      setTimeout(() => {$("#header_login").css({ display: "none" });}, 500)
    }

  } else {
    $("#api_key_input_div").css({ display: "flex" });
  }

});
function addCookie(name, value, days) {
  // if (days) {
  //   var date = new Date();
  //   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  //   var expires = "; expires=" + date.toUTCString();
  // } else var expires = "";
  // var current_cookie = document.cookie ? document.cookie + ";" : "";
  // current_cookie += name + "=" + value + expires + "; path=/";
  // document.cookie = current_cookie;
  localStorage.setItem(name, value);
  return true;
}

function readCookie(name) {
  // var nameEQ = name + "=";
  // var ca = document.cookie.split(";");
  // for (var i = 0; i < ca.length; i++) {
  //   var c = ca[i];
  //   while (c.charAt(0) == " ") c = c.substring(1, c.length);
  //   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  // }
  // return null;

  const cookie = localStorage.getItem(name);
  return cookie

}

function eraseCookie(name) {
  // if (readCookie(name)) {
  //   addCookie(name, "", -1);
  // }
  localStorage.removeItem(name);

}

var isObject = function(a) {
  return !!a && a.constructor === Object;
};

const map_freq_to_int = { FY: 0, Q: 1, M: 2, W: 3, D: 4, TTM: 5, YTD: 6 };

function duplicate(x) {
  return JSON.parse(JSON.stringify(x));
}

function split_ticker_exchange(ticker) {
  if (!ticker.includes(".")) {
    return [ticker, ""];
  }
  var arr = ticker.split(".");
  return [arr.slice(0, arr.length - 1).join("."), arr[arr.length - 1]];
}

const example_freq = [['Get data for the fiscal year 2020', 'FY2020'], ['Get data for the TTM period two-quarter prior', 'TTM-2'],
  ['Get data for the fiscal quarter before last', 'Q-1'], ['Get data for the third fiscal quarter of 2019', 'FY2019.Q3']]


function Login() {
  var email = $("#email").val();
  var password = $("#password").val();
  var login_warning = $("#login_warning");
  if (!email) {
    login_warning.text("Please enter your email");
  } else if (!password) {
    login_warning.text("Please enter your password");
  } else {
    $("#login_warning").css({ display: "none" });
    $(".loader").css({ display: "block" });
    login_warning.text("");
    $("#email").val("");
    $("#password").val("");
    fetch(link + "/excel/login?email=" + encodeURIComponent(email) + '&password='+encodeURIComponent(password)).then(function(response) {
      if (response.ok) {
        return response.json().then(function(json) {
          // console.log(json);
          if (json.msg) {
            $(".loader").css({ display: "none" });
            $("#login_warning").css({ display: "block" });
            login_warning.text(json.msg);
          } else {
            // Successful login
            addCookie("finsheet_api_key", json.token, 1000);
            $(".loader").css({ display: "none" });
            $("#login_warning").css({ display: "block" });
            $("#if_have_api_key").css({ display: "flex" });
            $("#api_key_input_div").css({ display: "none" });
            $("#sign_out_button").css({ display: "flex" });
            $("#header_login").css({ display: "none" });

            checkCoupon(json.token)
            setTimeout(() => {$('#functions_dropdown_wrap').addClass('left_bar_different_green')}, 200)
          }
        });
      } else {
        console.log("Network Error", 3000, "error");
      }
    });
  }
}

function Register(){
  console.log(1)
  var name = $('#register_name').val()
  var email = $('#register_email').val()
  var password = $('#register_password').val()
  var login_warning = $('#register_warning')
  if(!email){console.log(2);login_warning.text("Email cannot be empty")}
  else if (!email.includes('@')){login_warning.text("Invalid email")}
  else if (!password){console.log(1);login_warning.text("Password cannot be empty") ;     console.log(login_warning.text())
  }
  else {
    console.log(3)
    $("#register_warning").css({ display: "none" });
    $(".register_loader").css({ display: "block" });
    login_warning.text('')
    $('#register_name').val('')
    $('#register_email').val('')
    $('#register_password').val('')
    fetch(link + '/excel/register?email=' + encodeURIComponent(email) + '&password='+encodeURIComponent(password) + '&name=' + encodeURIComponent(name)).then(function(response){
      if (response.ok) {return response.json().then(function (json) {
        console.log(json);
        if(json.msg){
          $(".register_loader").css({ display: "none" });
          $("#register_warning").css({ display: "block" });
          login_warning.text(json.msg);
        } else {
          // Successful register
          addCookie("finsheet_api_key", json.token, 1000);
          $(".register_loader").css({ display: "none" });
          $("#register_warning").css({ display: "block" });
          $("#if_have_api_key").css({ display: "flex" });
          $("#register").css({ display: "none" });
          $("#sign_out_button").css({ display: "flex" });
          $("#header_login").css({ display: "none" });

          checkCoupon(json.token)
          window.cookie = json.token
          setTimeout(() => {$('#functions_dropdown_wrap').addClass('left_bar_different_green')}, 200)
          // getDataFromGS()
        }
      })} else {window.pushNoti("Network Error", 3000, "error")}
    })
  }
}

function toggleLogoutDropdown() {
  var div = $("#logout_dropdown");
  var display = div.css("display");
  if (display == "none") {
    div.css({ display: "block" });
  } else {
    div.css({ display: "none" });
  }
  $("#refresh_dropdown").css({ display: "none" });
}



function showApiInputDiv(which = 'login') {
  if(which === 'login'){
    $("#api_key_input_div").css({ display: "flex" });
    $("#register").css({ display: "none" });
  } else if (which === 'register'){
    $("#api_key_input_div").css({ display: "none" });
    $("#register").css({ display: "flex" });
  }
  $("#if_have_api_key").css({ display: "none" });
  $("#logout_dropdown").css({ display: "none" });
  eraseCookie("finsheet_api_key");
}

function showDropdownHeader(which){
  if(which == 'function'){
    var div = $('#functions_dropdown')
    if(div.is(':visible')){
      div.css({display: 'none'})
    } else {
      div.css({display: 'block'})
    }
    $('#lookup_dropdown').css({display: 'none'})
  } else if(which == 'lookup'){
    var div = $('#lookup_dropdown')
    if(div.is(':visible')){
      div.css({display: 'none'})
    } else {
      div.css({display: 'block'})
    }
    $('#functions_dropdown').css({display: 'none'})
  }
}

// $('#refresh_dropdown_section').click(function(event){
//   event.stopPropagation();
// });
// $('#search_dropdown_section').click(function(event){
//   console.log(2)
//   event.stopPropagation();
// });
// $('#functions_dropdown_section').click(function(event){
//   event.stopPropagation();
// });
// $('html').click(function(){
//   $('#refresh_dropdown').css({display: 'none'})
//   $('#functions_dropdown').css({display: 'none'})
//   $('#search_dropdown').css({display: 'none'})
//   // console.log(1)
// })
var hide_map = {
  '#search_dropdown_wrap': '#search_dropdown',
  '#functions_dropdown_wrap': '#functions_dropdown',
  '#refresh_dropdown_wrap': '#refresh_dropdown'
}
$(document).mouseup(function(e)
{
  for(var name of Object.keys(hide_map)){
    var container = $(name);
    var inner = $(hide_map[name])
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      inner.hide();
    }
  }

});

function onFocusNewFilter() {
  $("#metric_dropdown").css({ display: "block" });
  changeNewFilterName();
}

function onFocusNewSymbol(which='stock'){
  $(which == 'stock' ? "#symbol_dropdown" : '#future_symbol_dropdown').css({ display: "block" });
}

function changeNewSymbol(which='stock'){
  var input = $(which == 'future' ? "#future_symbol_input" : "#symbol_input").val()
  var all_symbols = $('.all_symbols' + (which == 'future' ? '_future' : ''))
  all_symbols.empty();
  if(!input){ return}
  fetch(link + "/search_symbols?which=" + which + "&val=" + input).then(function(response){
    if (response.ok) {return response.json().then(function (json) {
      console.log(json);
      for(var dic of json.data){
        all_symbols.append(
            `<div class="one_filter_suggestion pointer" id="${dic.tickers}" onmousedown="clickSymbol('${dic.tickers + '__' +  dic.comp_name + '__' + (dic.exchange ? dic.exchange : dic.tickers.split(':')[0])}')"><div style="display: inline; color: #2cbd54">${dic.tickers}</div>${' - ' + dic.comp_name}</div>`
        )
      }
    })} else {window.pushNoti("Network Error", 3000, "error")}
  })
}

function changeNewFilterName() {
  var input = $("#metric_input").val();
  if (!input) {
    input = "";
  }
  var all_suggestions = $(".all_suggestions");
  all_suggestions.empty();
  var filter_suggestions = [];
  var count = 0;
  for (var key of Object.keys(map_metrics)) {
    var display_name = map_metrics[key].display_name;
    var check_whether_metric_can_be_used = map_metrics[key].excel !== "";
    if (display_name.toLowerCase().includes(input.toLowerCase()) && check_whether_metric_can_be_used) {
      count += 1;
      all_suggestions.append(
          `<div class="one_filter_suggestion pointer" id="${key}" onmousedown="clickMetric('${key}')">${display_name}</div>`
      );
      // all_suggestions.trigger("liszt:updated")
      if (count >= 6) {
        break;
      }
    }
  }
}

function clickSymbol(str){
  var arr = str.split('__')
  if(arr[0].includes(':')){ // this is for Futures
    $(".future_symbol_wrap").css({display: 'block'})
    $("#future_symbol").text(arr[0])
    $("#future_name").text(arr[1])
    $("#future_exchange").text(arr[2])
    $("#future_symbol_input").val('')
  } else {          // this is for Stocks
    $(".symbol_wrap").css({display: 'block'})
    $("#symbol_result").text(arr[0])
    $("#comp_name_result").text(arr[1])
    $("#comp_exchange").text(arr[2])
    $("#symbol_input").val('')
  }

}

function clickMetric(key){
  // var key = e.currentTarget.id
  var info_dic = map_metrics[key]

  $('.all_metric_lines').css({display: 'block'})

  $('.metric_formal_name').text(info_dic.display_name)
  // $('.formula_metric').text(', "' + info_dic.excel + '"')
  // if(info_dic.default_freq){
  //   $('.formula_freq').text(', "' +info_dic.default_freq + '"')
  //   $('.formula_limit').text(', ' +1)
  // } else {
  //   $('.formula_freq').text('')
  //   $('.formula_limit').text('')
  // }

  $('.actual_fieldname').text(info_dic.excel)
  if(info_dic.default_freq){
    $('.limit_section').css({display: 'inline-block'})
    $('.all_periods_section').css({display: 'block'})
    $('.default_period_section').css({display: 'block'})
    $('.actual_all_periods').text(info_dic.supported_freq.join(', '))
    $('.actual_default_period').text(info_dic.default_freq)
  } else {
    $('.limit_section').css({display: 'none'})
    $('.all_periods_section').css({display: 'none'})
    $('.default_period_section').css({display: 'none'})
  }

  var show_unit = info_dic.type == 1
  // var show_currency = info_dic.currency_type == 1 || info_dic.currency_type == 2
  // var show_unit_currency = show_unit || show_currency
  // if(show_unit_currency){
  //   $('.unit_currency_section').css({display: 'block'})
  //   $('.currency_section').css({'margin-left': '20px'})
  // } else {
  //   $('.unit_currency_section').css({display: 'none'})
  // }

  if(show_unit){
    $('.unit_section').css({display: 'block'})
  } else {
    $('.unit_section').css({display: 'none'})
  }

  var show_note_future_period_section = key in analyst_metrics
  if(show_note_future_period_section){
    $('.note_future_period_section').css({display: 'block'})
  } else {
    $('.note_future_period_section').css({display: 'none'})
  }


  // if(show_currency){
  //   $('.currency_section').css({display: 'inline-block'})
  //   $('.actual_currency').text(info_dic.currency_type == 1 ? 'Reporting' : 'Listing')
  // } else {
  //   $('.currency_section').css({display: 'none'})
  // }
  var all_formulas = $('.example_formula_section')
  all_formulas.empty()
  all_formulas.append(`<div class="one_example_usage_metric">${'=FS_EquityMetrics("AAPL", "' + info_dic.excel + '")'}</div>`)

  if(info_dic.default_freq){
    $('#customized_period_wrap').css({display: 'block'})

    var freqs =   duplicate(example_freq)
    if(!info_dic.supported_freq.includes('TTM')){freqs[1] = ['Get data for the fiscal year two-year prior', 'FY-2']}
    if(!info_dic.supported_freq.includes('Q')){
      if(!info_dic.supported_freq.includes('TTM')){freqs = freqs.slice(0,2)}
      else{
        freqs = freqs.slice(0,3)
        freqs[2] = ['Get data for the fiscal year two-year prior', 'FY-2']
      }
    }
    if(key in analyst_metrics && info_dic.supported_freq.includes('FY')){
      freqs.push(['Get forecast data for the next fiscal year', 'FY+1'])
    }

    if (info_dic.excel === 'shares_out' ){
      freqs = duplicate(example_freq.slice(2, example_freq.length))
    }

    var customized_period = $('.customized_period_section')
    customized_period.empty()
    for(var arr of freqs){
      customized_period.append(`
          <div><div  >${arr[0]}</div><div class="one_example_freq ">${arr[1]}</div></div>
        `)
    }

    // Add formulas based on supported freq
    all_formulas.append(`<div class="one_example_usage_metric">${'=FS_EquityMetrics("AAPL", "' + info_dic.excel + '", "' + info_dic.supported_freq[0] + '")' }</div>`)
    all_formulas.append(`<div class="one_example_usage_metric">${'=FS_EquityMetrics("AAPL", "' + info_dic.excel + '", "' + info_dic.supported_freq[Math.min(1, info_dic.supported_freq.length - 1)] + (key in analyst_metrics ? '+2")' : '-1")') }</div>`)
    all_formulas.append(`<div class="one_example_usage_metric">${'=FS_EquityMetrics("AAPL", "' + info_dic.excel + '", "' + info_dic.supported_freq[Math.min(2, info_dic.supported_freq.length - 1)] + '", 3)' }</div>`)

  } else {
    $('#customized_period_wrap').css({display: 'none'})
  }
  $('#caret_custom_metric').removeClass('fa-caret-down').addClass('fa-caret-right')
  $('.customized_period_section').css('display', 'none')

  $('#caret_example_formula').removeClass('fa-caret-right').addClass('fa-caret-down')
  $('.example_formula_section').css('display', 'block')

  $('#example_formula_wrap').css('display', 'block')

  $("#metric_input").val('')
}

function onBlurNewFilter() {
  $("#metric_dropdown").css({ display: "none" });
}

function onBlurNewSymbol(which='stock'){
  $(which == 'stock' ? "#symbol_dropdown" : '#future_symbol_dropdown').css({ display: "none" });
}


function clickNavigate(which){
  var all_components = ['symbols', 'metrics', 'etf', 'mutual_fund', 'equity_metrics', 'equity_full_financials', 'equity_candles', 'forex_candles', 'forex_all_rates',
                'crypto_candles', 'crypto_profile', 'etf_candles', 'etf_profile', 'streaming', 'mutual_fund_candles', 'mutual_fund_profile', 'latest',
    'pattern_recognition', 'support_resistance', 'aggregate_indicators', 'technical_indicators',     'console', 'account', 'future']
  for(var name of all_components){
    if(which == name){
      $("#" + which).css({ display: "block" });
    } else {
      $("#" + name).css({ display: "none" });
    }
  }
  $('#functions_dropdown').css({display: 'none'})
  $('#search_dropdown').css({display: 'none'})

  if(['symbols', 'metrics', 'etf', 'mutual_fund', 'future'].includes(which)){
    makeDifferentGreen('search_dropdown_wrap')
    $('#header_coupon').removeClass('display_none')
  } else if (which === 'console'){
    makeDifferentGreen('console_left_bar')
    $('#header_coupon').addClass('display_none')
  } else if (which === 'account'){
    // console.log('which', which)
    makeDifferentGreen('sign_out_button')
    $('#header_coupon').removeClass('display_none')
  } else {
    makeDifferentGreen('functions_dropdown_wrap')
    $('#header_coupon').removeClass('display_none')
  }
}


function generate_query(
    latest_tracking_code,
    mode,
    filters,
    additional_columns,
    existing_columns,
    currency_arr,
    name_of_considered_screener,
    columns,
    data = []
) {
  var screener_currency = currency_arr[1];
  var metrics_to_queries = [],
      metrics_to_queries_period = [],
      metrics_to_queries_currency_type = [],
      metrics_financials_grouping = [], // this one is used to which table (others or financials) to use
      metrics_which_latest_days = [], // this one is to tell which latest date to use
      filter_metrics = [],
      filter_currency_type = [],
      filter_default_freq = [];

  // Get all columns need to query
  for (var dic of filters) {
    metrics_to_queries.push(dic.field_code);
    filter_metrics.push(dic.field_code);
    var freq = "-1";
    if ("default_freq" in map_metrics[dic.field_code]) {
      freq = map_freq_to_int[map_metrics[dic.field_code].default_freq].toString();
    }
    filter_default_freq.push(freq);
    metrics_to_queries_period.push(freq);
    filter_currency_type.push(
        "currency_type" in map_metrics[dic.field_code] ? map_metrics[dic.field_code].currency_type.toString() : "0"
    );
    metrics_to_queries_currency_type.push(
        "currency_type" in map_metrics[dic.field_code] ? map_metrics[dic.field_code].currency_type.toString() : "0"
    );
    metrics_financials_grouping.push("0"); // "0" here is meaningless because these filters don't have customized frequency
    metrics_which_latest_days.push("0"); // again "0" is meaning less
  }
  for (var dic of additional_columns) {
    if (dic.field_code !== "ticker" && dic.field_code !== "30") {
      var freq = "-1";
      if ("period" in dic) {
        freq = dic.period;
      }
      if (freq.includes("@")) {
        // Handle Grouping columns (Series)
        var temp_arr = freq.split("@");
        var year_back_series = parseInt(temp_arr[1]);
        for (var i = 0; i < year_back_series; i++) {
          var freq = i > 0 ? temp_arr[0] + "-" + i : temp_arr[0];
          metrics_to_queries.push(dic.field_code);
          if (freq in map_freq_to_int) {
            freq = map_freq_to_int[freq].toString();
          }
          metrics_to_queries_period.push(freq);
          metrics_to_queries_currency_type.push(
              "currency_type" in map_metrics[dic.field_code] ? map_metrics[dic.field_code].currency_type.toString() : "0"
          );

          metrics_financials_grouping.push(map_metrics[dic.field_code].is_financial_group ? "F" : "NF");
          if (dic.field_code in analyst_metrics) {
            metrics_which_latest_days.push("analystEstimateAnnual");
          } else if (isNaN(freq) && freq.includes("Q")) {
            metrics_which_latest_days.push("Q");
          } else if (isNaN(freq) && freq.includes("FY")) {
            metrics_which_latest_days.push("FY");
          } else if (isNaN(freq) && freq.includes("TTM")) {
            metrics_which_latest_days.push("TTM");
          } else if (isNaN(freq) && freq.includes("YTD")) {
            metrics_which_latest_days.push("YTD");
          } else {
            metrics_which_latest_days.push("None");
          }
        }
      } else {
        // Handle ungrouping columns
        metrics_to_queries.push(dic.field_code);
        if (freq in map_freq_to_int) {
          freq = map_freq_to_int[freq].toString();
        }
        metrics_to_queries_period.push(freq);
        metrics_to_queries_currency_type.push(
            "currency_type" in map_metrics[dic.field_code] ? map_metrics[dic.field_code].currency_type.toString() : "0"
        );

        metrics_financials_grouping.push(map_metrics[dic.field_code].is_financial_group ? "F" : "NF");
        if (dic.field_code in analyst_metrics) {
          metrics_which_latest_days.push("analystEstimateAnnual");
        } else if (isNaN(freq) && freq.includes("Q")) {
          metrics_which_latest_days.push("Q");
        } else if (isNaN(freq) && freq.includes("FY")) {
          metrics_which_latest_days.push("FY");
        } else if (isNaN(freq) && freq.includes("TTM")) {
          metrics_which_latest_days.push("TTM");
        } else if (isNaN(freq) && freq.includes("YTD")) {
          metrics_which_latest_days.push("YTD");
        } else {
          metrics_which_latest_days.push("None");
        }
      }
    }
  }

  // Save the conditions of filters to use later (convert all number to string and stringify all array)
  var conditions = duplicate(filters);
  for (var i = 0; i < conditions.length; i++) {
    conditions[i].count = conditions[i].count.toString();
    for (var j = 0; j < conditions[i].value.length; j++) {
      conditions[i].value[j] = conditions[i].value[j].toString();
    }
    conditions[i].value = JSON.stringify(conditions[i].value);
  }

  var obj = {
    conditions: JSON.stringify(conditions),
    mode: mode.toString(),
    existing_columns: JSON.stringify(existing_columns),
    screener_currency: screener_currency,
    latest_tracking_code: latest_tracking_code.toString(),
    metrics_to_queries: JSON.stringify(metrics_to_queries),
    metrics_to_queries_period: JSON.stringify(metrics_to_queries_period),
    metrics_to_queries_currency_type: JSON.stringify(metrics_to_queries_currency_type),
    filter_default_freq: JSON.stringify(filter_default_freq),
    filter_metrics: JSON.stringify(filter_metrics),
    filter_currency_type: JSON.stringify(filter_currency_type),
    metrics_financials_grouping: JSON.stringify(metrics_financials_grouping),
    metrics_which_latest_days: JSON.stringify(metrics_which_latest_days),
    name_of_considered_screener: name_of_considered_screener,
    ticker_str: "",
    original_filters: JSON.stringify(filters),
    original_columns: JSON.stringify(columns.slice(2, columns.length)),
    original_currency: JSON.stringify(currency_arr),
    count_arr: JSON.stringify([])
  };

  // If we have some data and mode == "new_filter" and create ticker_str to send to Golang
  if (data.length > 0 && (mode === "new_filter" || mode === "edit_columns" || mode === "watchlist")) {
    obj["ticker_str"] = "(";
    for (var dic of data) {
      var arr = split_ticker_exchange(mode === "watchlist" ? dic : dic.ticker); // If watchlist then data is a list of tickers
      obj["ticker_str"] += "('" + arr[0] + "', '" + arr[1] + "') ,";
    }
    obj["ticker_str"] = obj["ticker_str"].slice(0, obj["ticker_str"].length - 2) + ")";

    // send all count as well, so that later send back to JS to recover
    var count_arr = [];
    for (var dic of filters) {
      count_arr.push(dic.count);
    }
    obj["count_arr"] = JSON.stringify(count_arr);
  }
  return obj;
}

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
      totalLiabilitiesShareholdersEquity: "Total Liabilities \u0026 Shareholders' Equity",
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
      operationsMaintenance: "Operations \u0026 Maintenance",
      otherNet: "Other, Net",
      otherOperatingExpensesTotal: "Other Operating Expenses, Total",
      otherRevenueTotal: "Other Revenue, Total",
      provisionforIncomeTaxes: "Provision for Income Taxes",
      realizedGainsLosses: "Realized Gains (Losses)",
      realizedUnrealizedGainsLosses: "Realized \u0026 Unrealized Gains (Losses)",
      researchDevelopment: "Research \u0026 Development",
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
  },
  template: {
    bs_financial: [
      "cashDuefromBanks",
      "otherEarningAssetsTotal",
      "netLoans",
      "propertyPlantEquipmentTotalNet",
      "goodwillNet",
      "intangiblesNet",
      "otherAssetsTotal",
      "totalAssets",
      "accruedExpenses",
      "totalDeposits",
      "totalShortTermBorrowings",
      "longTermDebt",
      "totalLongTermDebt",
      "totalDebt",
      "otherLiabilitiesTotal",
      "totalLiabilities",
      "preferredStockNonRedeemableNet",
      "commonStockTotal",
      "additionalPaidInCapital",
      "retainedEarningsAccumulatedDeficit",
      "unrealizedGainLoss",
      "otherEquityTotal",
      "totalEquity",
      "totalLiabilitiesShareholdersEquity",
      "otherLongTermAssetsTotal",
      "otherBearingLiabilitiesTotal",
      "currentPortofLTDebtCapitalLeases"
    ],
    bs_industrial: [
      "cash",
      "cashEquivalents",
      "shortTermInvestments",
      "cashandShortTermInvestments",
      "accountsReceivableTradeNet",
      "totalReceivablesNet",
      "totalInventory",
      "otherCurrentAssetsTotal",
      "totalCurrentAssets",
      "propertyPlantEquipmentTotalGross",
      "accumulatedDepreciationTotal",
      "propertyPlantEquipmentTotalNet",
      "longTermInvestments",
      "otherLongTermAssetsTotal",
      "totalAssets",
      "accountsPayable",
      "notesPayableShortTermDebt",
      "currentPortofLTDebtCapitalLeases",
      "otherCurrentliabilitiesTotal",
      "totalCurrentLiabilities",
      "longTermDebt",
      "totalLongTermDebt",
      "totalDebt",
      "otherLiabilitiesTotal",
      "totalLiabilities",
      "commonStockTotal",
      "retainedEarningsAccumulatedDeficit",
      "unrealizedGainLoss",
      "otherEquityTotal",
      "totalEquity",
      "totalLiabilitiesShareholdersEquity"
    ],
    cf: [
      "netIncomeStartingLine",
      "depreciationDepletion",
      "amortization",
      "deferredTaxes",
      "nonCashItems",
      "cashTaxesPaid",
      "cashInterestPaid",
      "changesinWorkingCapital",
      "cashfromOperatingActivities",
      "otherInvestingCashFlowItemsTotal",
      "cashfromInvestingActivities",
      "financingCashFlowItems",
      "totalCashDividendsPaid",
      "issuanceRetirementofStockNet",
      "issuanceRetirementofDebtNet",
      "cashfromFinancingActivities",
      "foreignExchangeEffects",
      "netChangeinCash",
      "capitalExpenditures"
    ],
    ic_financial: [
      "interestIncomeBank",
      "totalInterestExpense",
      "netInterestIncome",
      "loanLossProvision",
      "netInterestIncAfterLoanLossProv",
      "nonInterestIncomeBank",
      "nonInterestExpenseBank",
      "netIncomeBeforeTaxes",
      "provisionforIncomeTaxes",
      "netIncomeAfterTaxes",
      "netIncomeBeforeExtraItems",
      "netIncome",
      "totalAdjustmentstoNetIncome",
      "incomeAvailabletoComExclExtraOrd",
      "incomeAvailabletoComInclExtraOrd",
      "dilutionAdjustment",
      "dilutedNetIncome",
      "totalExtraordinaryItems"
    ],
    ic_industrial: [
      "revenue",
      "totalRevenue",
      "costofRevenueTotal",
      "grossProfit",
      "sellingGeneralAdminExpensesTotal",
      "researchDevelopment",
      "totalOperatingExpense",
      "operatingIncome",
      "interestIncExpNetNonOpTotal",
      "otherNet",
      "netIncomeBeforeTaxes",
      "provisionforIncomeTaxes",
      "netIncomeAfterTaxes",
      "netIncomeBeforeExtraItems",
      "netIncome"
    ],
    ic_insurance: [
      "totalPremiumsEarned",
      "netInvestmentIncome",
      "realizedUnrealizedGainsLosses",
      "totalRevenue",
      "lossesBenefitsandAdjustmentsTotal",
      "amortizationofPolicyAcquisitionCosts",
      "sellingGeneralAdminExpensesTotal",
      "unusualExpenseIncome",
      "totalOperatingExpense",
      "operatingIncome",
      "interestIncExpNetNonOpTotal",
      "netIncomeBeforeTaxes",
      "provisionforIncomeTaxes",
      "netIncomeAfterTaxes",
      "minorityInterest",
      "netIncomeBeforeExtraItems",
      "totalExtraordinaryItems",
      "netIncome",
      "totalAdjustmentstoNetIncome",
      "incomeAvailabletoComExclExtraOrd",
      "incomeAvailabletoComInclExtraOrd",
      "dilutionAdjustment",
      "dilutedNetIncome"
    ]
  }
};

function isValidFreq_returnCleanString(string, supported_freq = ["FY", "TTM", "Q", "YTD"], default_freq = "TTM", code) {
  string = string.replace(/\s/g, "");
  if(code == '37' ){
    if( string.includes('TTM') || string.includes('YTD')){
      return false
    }
    if(string.includes("FY") && !string.includes('Q')){
      return false
    }
  }
  if (string === "") {
    return "";
  }
  if (!(code in analyst_metrics) && string.includes("+")) {
    return false;
  }
  if (string.slice(string.length - 2) === "+0") {
    string = string.slice(0, string.length - 2);
  }
  for (var freq of ["FY", "TTM", "Q", "YTD"]) {
    if (!supported_freq.includes(freq) && string.includes(freq) &&  code != '37') {
      return false;
    }
  }
  if (string.includes("+")) {
    if (
        ![
          // 'Q+1', 'Q+2', 'Q+3',
          "FY+1",
          "FY+2",
          "FY+3"
        ].includes(string)
    ) {
      return false;
    }
    return string;
  }

  var has_some = 0;
  if (string.slice(0, 2) === "FY") {
    has_some = 1;
    if (string.includes(".")) {
      var arr = string.split(".");
      if (
          arr.length !== 2 ||
          arr[0].length !== 6 ||
          isNaN(arr[0].slice(2, 3)) ||
          isNaN(arr[0].slice(2)) ||
          arr[1].length !== 2 ||
          arr[1].slice(0, 1) !== "Q" ||
          isNaN(arr[1].slice(1, 2)) ||
          parseInt(arr[1].slice(1, 2)) > 4 ||
          parseInt(arr[1].slice(1, 2)) < 1
      ) {
        return false;
      }
    } else if (
        string.includes("-") &&
        (string.slice(2, 3) !== "-" ||
            string.split("-").length !== 2 ||
            string.split("-")[1] === "" ||
            isNaN(string.split("-")[1].slice(0, 1)) ||
            isNaN(string.split("-")[1]))
    ) {
      return false;
    } else if (
        string !== "FY" &&
        !string.includes("-") &&
        (string.length !== 6 || isNaN(string.slice(2, 3)) || isNaN(string.slice(2)))
    ) {
      return false;
    }
  }
  for (var freq of ["TTM", "Q", "YTD"]) {
    if (string.slice(0, freq.length) === freq) {
      has_some = 1;
      if (freq !== string) {
        var arr = string.split("-");
        if (arr.length !== 2 || arr[0] !== freq || arr[1] === "" || arr[1].includes(".") || isNaN(arr[1])) {
          return false;
        }
      }
    }
  }
  if (has_some < 1) {
    return false;
  }
  if (string.slice(string.length - 2) === "-0") {
    string = string.slice(0, string.length - 2);
  }
  return string;
}

function handle_receive_AR_EQUITY(json, is_full_statement, id, ticker, unique_tickers, sub_options) {
  if ("message" in json) {
    return [[json.message ? json.message : 'Something went wrong, please try again']];
  }

  ///// Deal with data
  if (!json || !json.data) {
    return [["No data"]];
  }
  // Deal with standard metrics first
  if (!is_full_statement) {
    if (Object.keys(json.data).length == 0) {
      return [["No data"]];
    }

    // // If only has 1 value in json.data meaning not series, simply return it
    // if (Object.keys(json.data).length == 1) {
    //   for (var key of Object.keys(json.data)) {
    //     if(key=== "39_-1"){return  [["No data"]];}
    //     return [[json.data[key]]];
    //   }
    // }
    // If only has 1 value in json.data meaning not series, simply return it (check whether ticker is an array, handle appropriately)
    if(Array.isArray(ticker)){
      // Handle each ticker (we have multiple tickers)
      let to_return = zeros([ticker.length, ticker[0].length], 'No data')
      let position_of_each_ticker = {}
      for(let tic of Object.keys(unique_tickers)){position_of_each_ticker[tic] = {}}
      for(let i=0;i<ticker.length;i++){
        for(let j=0;j<ticker[0].length;j++){
          if(ticker[i][j] in  position_of_each_ticker){
            position_of_each_ticker[ticker[i][j]][i + '@' + j] = 1
          }
          // If ticker at that slot is empty, change No data to ''
          if(!ticker[i][j]){to_return[i][j] = ''}
        }
      }
      for(let tic of Object.keys(json.data)){
        if(position_of_each_ticker[tic] && json.data[tic] && Object.keys(json.data[tic]).length == 1){
          for(let key of Object.keys(json.data[tic])){
            if(key !== "39_-1"){
              let value = json.data[tic][key]
              // Populate all cells of this ticker
              for(let pos_str of Object.keys(position_of_each_ticker[tic])){
                let pos_arr = pos_str.split('@')
                to_return[pos_arr[0]][pos_arr[1]] = value
              }
            }
          }
        }
      }
      return to_return
    } else {

      if(Object.keys(json.data).length == 1){
        for(var key of Object.keys(json.data)){
          if(key=== "39_-1"){return  [["No data"]]}
          return [[json.data[key]]]
        }
      }
    }

    ///// Now deal with series for standard metric (need to figure out appropriate date header). MAY HANDLE IN GO
     var numYearLimit = parseInt(json.numYearLimit)
    var earliest_second = Math.floor(Date.now() / 1000) - numYearLimit * 365 * 24 * 60 * 60

    var index_value_arr = [];
    var freq_to_lookup_date;
    for (var key of Object.keys(json.data)) {
      var arr = key.split("_");
      if (id == arr[0]) {
        if (arr.length == 2 && !arr[1].includes("-")) {
          // This is the original latest value (ex: 146_0, 146_1)
          index_value_arr.push([0, json.data[key]]);
        } else if (arr.length == 2 && arr[1].includes("-")) {
          // This is the previous-period value (ex: 146_FY-1, 146_TTM-1)
          var temp_arr = arr[1].split("-");
          freq_to_lookup_date = temp_arr[0] === "FY" ? "annual" : "ttm";
          index_value_arr.push([temp_arr[1], json.data[key]]);
        }
      }
    }
    if (!freq_to_lookup_date) {
      return [["No data"]];
    }
    // Sort so that oldest date show first
    index_value_arr = index_value_arr.sort(function(a, b) {
      return b[0] - a[0];
    });
     // Now get date arrays of financial statements
    var dic_all_dates = {};
    try {
      dic_all_dates = JSON.parse(json.data["310_-1"]);
    } catch (e) {
      return [["No data"]];
    }
    if (!dic_all_dates[freq_to_lookup_date]) {
      return [["No data"]];
    }
     var dates_array = dic_all_dates[freq_to_lookup_date];
    var data_to_return = [[], []];
    for (var small_arr of index_value_arr) {
      var index = small_arr[0];
      if (index < dates_array.length && Date.parse(dates_array[index]) / 1000 >= earliest_second ){
        data_to_return[0].push(dates_array[index]);
        data_to_return[1].push(small_arr[1]);
      }
    }
     if(!sub_options){sub_options=""}
    if(sub_options.toLowerCase().includes('nh')){data_to_return = [data_to_return[1]]}
     return data_to_return;
  }

  //  Now deal with full financial statements (bs, cf, ic)
  else {
    // If financial multiple years, the output will be array. So just always put it in array and handle once
    var data = json.data;
    if (isObject(json.data)) {
      data = [json.data];
    }
    if (Object.keys(data[0]).length < 1) {
      return [["No data"]];
    }

    // Reverse data to show old years first
    data = data.reverse();

    //choose template
    var template;
    if (id === "bs") {
      if ("cashDuefromBanks" in data[0]) {
        template = "bs_financial";
      } else {
        template = "bs_industrial";
      }
    } else if (id === "ic") {
      if ("interestIncomeBank" in data[0]) {
        template = "ic_financial";
      } else if ("totalPremiumsEarned" in data[0]) {
        template = "ic_insurance";
      } else {
        template = "ic_industrial";
      }
    } else if (id === "cf") {
      template = "cf";
    }
    // Construct the matrix of data to return
    var data_to_return = [['']];
    for (var field of fiancials_fields.template[template]) {
      data_to_return.push([fiancials_fields.fieldName[id][field]]);
    }
    for (var dic of data) {
      data_to_return[0].push(dic.period);
      for (var i = 0; i < fiancials_fields.template[template].length; i++) {
        var field = fiancials_fields.template[template][i];
        data_to_return[i + 1].push(dic[field] ? dic[field] : 0);
      }
    }
    return data_to_return;
  }
}


async function refresh_all_sheets_js(){
  await Excel.run(function (context) {
    // Replace for screener
    let this_sheet = context.workbook.worksheets.getActiveWorksheet();
    this_sheet.replaceAll('=@FS_EquityMetrics', '=FS_EquityMetrics', { completeMatch: false});

    var ss = context.workbook.worksheets;
    ss.load("items");
    return context.sync().then(function () {
      ss.items.forEach(function (sheet) {
        refresh_1_sheet_js(sheet)
      });
    })
  })
}

async function refresh_1_sheet_js(sheet){
  await Excel.run(function (context) {
    if(sheet == undefined){
      sheet = context.workbook.worksheets.getActiveWorksheet();
    }
    var range = sheet.getUsedRange(true);
    // range.load("formulas");
    range.calculate()

    // Replace for screener
    sheet.replaceAll('=@FS_EquityMetrics', '=FS_EquityMetrics', { completeMatch: false});

    return context.sync().then(function () { });
  })
}

async function refresh_selected_js(){
  await Excel.run(function (context) {
    const selectedRanges = context.workbook.getSelectedRanges();
    selectedRanges.calculate()

    return context.sync().then(function () { });
  })

}


function clickRefreshDropdown(which) {
  if (which == "refresh_all_sheet") {
    refresh_all_sheets_js();
  } else if (which == "refresh_this_sheet") {
    refresh_1_sheet_js();
  } else {
    refresh_selected_js();
  }
  $("#refresh_dropdown").css({ display: "none" });
}





function clickAllForex(){
  window.open("https://docs.google.com/spreadsheets/d/1wJ66ZYcp999cp-C61NM5KNndwpmsLGMRKUsn9Gv5ZlY/edit?usp=sharing")
  $('#search_dropdown').css({display: 'none'})
}
function clickAllCrypto(){
  window.open("https://docs.google.com/spreadsheets/d/1HyUz9gl9BSyHa_hYPwUFtHNbQjXQIE-LpO-_Uw3my7E/edit?usp=sharing")
  $('#search_dropdown').css({display: 'none'})
}
function clickAllEtf(){
  window.open("https://docs.google.com/spreadsheets/d/19NY30n2XdQf5_Y5h3G8dyV7Mlpz9MhR9_RqzhEaolqQ/edit?usp=sharing")
  $('#search_dropdown').css({display: 'none'})
}

function toggleRefreshDropdown(){
  var div = $('#refresh_dropdown')
  var display = div.css('display')
  if(display == 'none'){div.css({display: 'block'})}else{div.css({display: 'none'})}

  $('#search_dropdown').css({display: 'none'})
  $('#functions_dropdown').css({display: 'none'})
}

function toggleSearchDropdown(){
  var div = $('#search_dropdown')
  var display = div.css('display')
  if(display == 'none'){div.css({display: 'block'})}else{div.css({display: 'none'})}

  $('#refresh_dropdown').css({display: 'none'})
  $('#functions_dropdown').css({display: 'none'})
}

function toggleFunctionsDropdown(){
  var div = $('#functions_dropdown')
  var display = div.css('display')
  if(display == 'none'){div.css({display: 'block'})}else{div.css({display: 'none'})}

  $('#refresh_dropdown').css({display: 'none'})
  $('#search_dropdown').css({display: 'none'})
}

function start_streaming(){
  window.Should_Update_Streaming = true
  $("#refresh_dropdown").css({ display: "none" });
}

function stop_streaming(){
  window.Should_Update_Streaming = false
  $("#refresh_dropdown").css({ display: "none" });
}

(function () {
  Office.onReady((info) => {
    if (info.host === Office.HostType.Excel) {
      console.log(35)
      Excel.run(async (context) => {

        var ss = context.workbook.worksheets;
        ss.onChanged.add(changeColorStreaming);

        await context.sync();
      });
      $(document).ready(function (){

        console.log(34)
        // refresh_all_sheets_js()
      })
    }
  });
});

var sheet_name_map = {};
function changeColorStreaming(e) {
  return Excel.run(function (context) {
    var ss = context.workbook.worksheets;
    ss.load("items");
    return context.sync().then(async function () {
      ss.items.forEach(function (sheet) {
        sheet_name_map[sheet.id] = sheet.name;
      });
      var sheet_id = e.worksheetId;
      var cell_being_edit = e.address;
      var ticker = e.details.valueAfter
    })
  })
}
function colnameToNumber(val) {
  var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', i, j, result = 0;

  for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1) {
    result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
  }

  return result;
};
function getExcelColName(n) {
  var ordA = 'a'.charCodeAt(0);
  var ordZ = 'z'.charCodeAt(0);
  var len = ordZ - ordA + 1;

  var s = "";
  while(n >= 0) {
    s = String.fromCharCode(n % len + ordA) + s;
    n = Math.floor(n / len) - 1;
  }
  return s;
}

function onFocusNewEtf(){
  $("#etf_dropdown").css({ display: "block" });
}
function onBlurNewEtf(){
  $("#etf_dropdown").css({ display: "none" });
}
function clickEtf(str){
  var arr = str.split('__')
  $(".etf_wrap").css({display: 'block'})
  $("#etf_result").text(arr[0])
  $("#etf_name_result").text(arr[1])
  $("#etf_input").val('')
}
function changeNewEtf(){
  var input = $("#etf_input").val()
  var all_symbols = $('.all_etf')
  all_symbols.empty();
  if(!input){ return}
  fetch("https://valueinvesting.io/get_some_etfs?val=" + input).then(function(response){
    if (response.ok) {return response.json().then(function (json) {
      for(var dic of json.data){
        all_symbols.append(
            `<div class="one_filter_suggestion pointer" id="${dic.tickers}" onmousedown="clickEtf('${dic.tickers + '__' +  dic.comp_name}')"><div style="display: inline; color: #2cbd54">${dic.tickers}</div>${' - ' + dic.comp_name}</div>`
        )
      }
    })} else {window.pushNoti("Network Error", 3000, "error")}
  })
}


function onFocusNewMutualFund(){
  $("#mutual_fund_dropdown").css({ display: "block" });
}
function onBlurNewMutualFund(){
  $("#mutual_fund_dropdown").css({ display: "none" });
}
function clickMutualFund(str){
  var arr = str.split('__')
  $(".mutual_fund_wrap").css({display: 'block'})
  $("#mutual_fund_result").text(arr[0])
  $("#mutual_fund_name_result").text(arr[1])
  $("#mutual_fund_input").val('')
}
function changeNewMutualFund(){
  var input = $("#mutual_fund_input").val()
  var all_symbols = $('.all_mutual_fund')
  all_symbols.empty();
  if(!input){ return}
  fetch(link + "/search_symbols?which=mutual_fund&val=" + input).then(function(response){
    if (response.ok) {return response.json().then(function (json) {
      for(var dic of json.data){
        all_symbols.append(
            `<div class="one_filter_suggestion pointer" id="${dic.tickers}" onmousedown="clickMutualFund('${dic.tickers + '__' +  dic.comp_name}')"><div style="display: inline; color: #2cbd54">${dic.tickers}</div>${' - ' + dic.comp_name}</div>`
        )
      }
    })} else {window.pushNoti("Network Error", 3000, "error")}
  })
}

function clickCustomPeriod(){
  if($('#caret_custom_metric').attr('class').includes('right')){
    $('#caret_custom_metric').removeClass('fa-caret-right').addClass('fa-caret-down')
    $('.customized_period_section').css('display', 'block')
  } else {
    $('#caret_custom_metric').removeClass('fa-caret-down').addClass('fa-caret-right')
    $('.customized_period_section').css('display', 'none')
  }
}

function clickExampleFormula(){
  if($('#caret_example_formula').attr('class').includes('right')){
    $('#caret_example_formula').removeClass('fa-caret-right').addClass('fa-caret-down')
    $('.example_formula_section').css('display', 'block')
  } else {
    $('#caret_example_formula').removeClass('fa-caret-down').addClass('fa-caret-right')
    $('.example_formula_section').css('display', 'none')
  }
}

var possible_different_green_id = {search_dropdown_wrap: 1, functions_dropdown_wrap:1, console_left_bar: 1, sign_out_button: 1}
function makeDifferentGreen(which){
  for(var w of Object.keys(possible_different_green_id)){
    if(w === which){
      $('#' + w).addClass('left_bar_different_green')
    } else {
      $('#' + w).removeClass('left_bar_different_green')
    }
  }
}


function showDropdown(which){
  $('#' + which).css('display', 'block')
}
function hideDropdown(which){
  $('#' + which).css('display', 'none')
}

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getArrayDepth(value) {
  return Array.isArray(value) ?
      1 + Math.max(...value.map(getArrayDepth)) :
      0;
}

function convertDicToArray(dic, prefix){
  var res = []
  for(var key2 of Object.keys(dic)){
    if(dic[key2].constructor === Array){
      res.push({'': key2, data: dic[key2]})
    } else if(typeof dic[key2] === 'object'){
      res.push({...{'': key2}, ...dic[key2]})
    } else {
      res.push({[prefix]: key2, value: dic[key2]})
    }
  }
  return res
}

function handleApiDataExpandColumn(data, prefix){
  var save = []
  helperHandleData(data, prefix, save)
  return save
}

function helperHandleData(data, prefix, save){
  // console.log(data)
  // console.log(typeof data === 'object' && data.constructor !== Array && )
  // console.log(data !== null && data !== undefined && data.constructor === Array)

  if(data !== null && data !== undefined && typeof data === 'object' && data.constructor !== Array ){
    if(Object.keys(data).length < 1){save.push([prefix, ''])}
    for(let key of Object.keys(data)){
      helperHandleData(data[key], (prefix ? prefix + '_' : '') + key, save)
    }
  }
  else if (data !== null && data !== undefined && data.constructor === Array){
    if(data.length < 1){return [prefix, '']}
    for(let i=0;i<data.length; i++){
      helperHandleData(data[i], prefix +'[' + i + ']', save)
    }
  }
  else {
    save.push([prefix, data !== null && data !== undefined ? data : ''])
  }
  // console.log(34)
}
// function handleApiDataExpandColumn(data, prefix){
//   var matrix = []
//   if(typeof data === 'object' && data.constructor !== Array){
//     if(Object.keys(data).length < 1){return [prefix, '']}
//     for(let key of Object.keys(data)){
//       matrix.push(handleApiDataExpandColumn(data[key], prefix + '_' + key))
//     }
//   }
//   else if (data.constructor === Array){
//     if(data.length < 1){return [prefix, '']}
//     for(let i=0;i<data.length; i++){
//       matrix.push(handleApiDataExpandColumn(data[i], prefix +'[' + i + ']'))
//     }
//   }
//   else {
//     return [prefix, data ? data : '']
//   }
//   return matrix
// }

function flatHelper(input, depth = 1, stack = [])
{
  for (let item of input)
  {
    if (item instanceof Array && depth > 0)
    {
      flatHelper(item, depth - 1, stack);
    }
    else {
      stack.push(item);
    }
  }

  return stack;
}

function flattenArray(data) {
  var res = []
  for (var arr of data) { // Each arr is a row
    var one_row = []
    for (var item of arr) { // In each item, the first one is column name, second is value
      if(getArrayDepth(item) > 1){
        // one_row = one_row.concat(item.flat(Math.max(getArrayDepth(item) - 2, 0)))
        one_row = one_row.concat(flatHelper(item,Math.max(getArrayDepth(item) - 2, 0)))

        // console.log(item, item.flat(Math.max(getArrayDepth(item) - 2, 0)),
        //     Math.max(getArrayDepth(item) - 2, 0), duplicate(one_row))
      } else {
        one_row.push(item)
      }
    }
    res.push(one_row)
  }

  // // If depth of each component array is only 1, wrap it so that depth of resis 3
  // for(var i=0;i<res.length; i++ ){
  //   if(getArrayDepth(res[i]) < 2){
  //     res[i] = [res[i]]
  //   }
  // }
  return res
}

function rotateDataAfterExpandRow(data){
  var colnames = []
  var colnames_dic = {}
  var i=-1
  var res = []
  for(var arr of data){ // Each arr is a row
    i+=1
    var row_data = []
    for(var item of arr){  // In each item, the first one is column name, second is value
      if(!item || item.length < 2){continue}
      var this_col_name = item[0]
      if(i === 0){
        colnames.push(this_col_name)
        colnames_dic[this_col_name] = 1
      } else if(!(this_col_name in colnames_dic)){
        continue
      }

      row_data.push(item[1])
    }

    // Fill 0 to match the length of the first row
    if(i>0){
      var n = Math.max(0, res[0].length - row_data.length)
      let padding = new Array(n); for (let j=0; j<n; ++j) padding[j] = '';
      row_data = row_data.concat(padding)
    }

    res.push(row_data)
  }
  res = [colnames].concat(res)
  return res
}

function blowUpDimension(data, rows){
  if(!data || data.length<1){return data}

  const cols = data[0].length

  const nestedArray = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => '')
  );

  for(var i=0;i<data.length;i++){
    for(var j=0;j<data[0].length; j++){
      nestedArray[i][j] = data[i][j]
    }
  }

  return nestedArray
}

function concatHorizontally(data){
  if(!data){return data}

  var res = []
  for(var j=0;j<data[0].length;j++){
    var one_row = []
    for(var i=0;i<data.length;i++){
      one_row = one_row.concat(data[i][j])
    }
    res.push(one_row)
  }
  return res
}

window.pushNoti = function toastrNoti(message, duration, type) {
  if (type === "error") {
    iziToast.error({
      title: 'Error',
      message: message,
      theme: 'dark',
      backgroundColor: "#f44242",
      messageColor: "white",
      titleColor: "white",
      position: 'bottomCenter',
      timeout: duration,
      class: 'toaster',
    });
  } else {
    iziToast.success({
      title: 'OK',
      message: message,
      theme: 'dark',
      backgroundColor: "#0e8e32",
      messageColor: "white",
      titleColor: "white",
      position: 'bottomCenter',
      timeout: duration,
      class: 'toaster',
    });
  }
}
window.stripHtml = function (html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

async function actuallyImportToSheet(provider, endpoint, parameters){
  await Excel.run(async (context) => {
    let sheets = context.workbook.worksheets;

    let sheet = sheets.add();
    sheet.activate()
    return context.sync().then(async function () {

      var content = [
        ['Provider', capFirst(provider)],
        ['Endpoint', endpoint],
        ['', ''],
      ]
      let range1 = sheet.getRange("B1:B2");
      range1.format.fill.color = "#c0e5a6";

      var last_row = 3
      var formula = '=FS_Api(B1, B2'
      if(Object.keys(parameters).length>0){
        formula += ', A4:B'
      } else {
        formula += ')'
      }
      for(var key of Object.keys(parameters)){
        content.push([key, parameters[key]])
        last_row += 1
      }
      if(Object.keys(parameters).length>0){
        formula += last_row + ')'
        let range2 = sheet.getRange("B4:B" + last_row);
        range2.format.fill.color = "#c0e5a6";

        content.push(['', ''])
        last_row += 1
      }
      last_row += 1
      content.push(['Output', formula])
      var cells = sheet.getRange('A1:B' + last_row)
      cells.values = content;


      let active_range = sheet.getRange("B" + last_row);
      active_range.select();

      await context.sync();

    })
  });

}
function hideChatWidget(){
  $('.hide_chat_widget').css({display: 'none'})
  window.Tawk_API.minimize();
  window.Tawk_API.hideWidget();
}
function toggleChat(){
  if(window.Tawk_API.isChatHidden()){
    window.Tawk_API.showWidget()
  } else {
    window.Tawk_API.hideWidget()
  }
}

function goToAccountPage(e){
  e.preventDefault()
  // window.open('https://finsheet.io/account')
  window.open('https://finsheet.io/account', '_blank').focus();

}

function zeros(dimensions,val=0) {
  var array = [];

  for (var i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length === 1 ? val : zeros(dimensions.slice(1),val));
  }

  return array;
}

function dateIsValid(dateStr) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateStr.match(regex) === null) {
    return false;
  }

  const date = new Date(dateStr);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateStr);
}


var map_exchange_tick = {
  A: 'NYSE MKT LLC',
  B : 'Nasdaq OMX BX, Inc.',
  C : 'National Stock Exchange Inc. (NSX)',
  D : 'FINRA',
  I: 'International Securities Exchange, LLC (ISE)',
  J : 'Bats EDGA',
  K: 'Bats EDGX',
  M: 'Chicago Stock Exchange, Inc.',
  N: 'New York Stock Exchange LLC',
  P: 'NYSE Arca, Inc.',
  S: 'Consolidated Tape System',
  T: 'Nasdaq Stock Exchange (Tape A, B)',
  Q: 'Nasdaq Stock Exchange (Tape C)',
  V: 'IEX',
  W: 'Chicago Board Options Exchanges',
  X: 'Nasdaq OMX PSX, Inc. LLC',
  Y: 'Bats BYX Exchange, Inc.',
  Z: 'Bats BZX Exchange, Inc.',
  U: 'Other OTC',
  UB: 'OTC BULLETIN BOARD',
  MB: 'MEMX',
  EP: 'MIAX Pearl',
}



var map_url_guru = {
  'arnold-van-den-berg': ['Arnold Van Den Berg',
    'VAN DEN BERG MANAGEMENT INC/TX'],
  'barrow-hanley-mewhinney-strauss': ['Barrow, Hanley, Mewhinney & Strauss',
    'BARROW HANLEY MEWHINNEY & STRAUSS LLC'],
  'bill-ackman': ['Bill Ackman', 'Pershing Square Capital Management, L.P.'],
  'bill-gates': ['Bill Gates', 'Bill & Melinda Gates Foundation Trust'],
  'bruce-berkowitz': ['Bruce Berkowitz', 'FAIRHOLME CAPITAL MANAGEMENT LLC'],
  'charles-brandes': ['Charles Brandes', 'BRANDES INVESTMENT PARTNERS, LP'],
  'charlie-munger': ['Charlie Munger', 'DAILY JOURNAL CORP'],
  'chris-davis': ['Chris Davis', 'DAVIS SELECTED ADVISERS'],
  'chuck-akre': ['Chuck Akre', 'AKRE CAPITAL MANAGEMENT LLC'],
  'david-einhorn': ['David Einhorn', 'GREENLIGHT CAPITAL INC'],
  'david-tepper': ['David Tepper', 'APPALOOSA LP'],
  'dodge-cox': ['Dodge & Cox', 'Dodge & Cox'],
  'donald-smith-co': ['Donald Smith & Co', 'DONALD SMITH & CO., INC.'],
  'first-eagle-investment': ['First Eagle Investment',
    'First Eagle Investment Management, LLC'],
  'george-soros': ['George Soros', 'SOROS FUND MANAGEMENT LLC'],
  'glenn-greenberg': ['Glenn Greenberg', 'Brave Warrior Advisors, LLC'],
  'hotchkis-wiley': ['HOTCHKIS & WILEY',
    'HOTCHKIS & WILEY CAPITAL MANAGEMENT LLC'],
  'jefferies-group': ['Jefferies Group', 'LEUCADIA NATIONAL CORP'],
  'joel-greenblatt': ['Joel Greenblatt', 'Gotham Asset Management, LLC'],
  'john-paulson': ['John Paulson', 'PAULSON & CO INC'],
  'john-rogers': ['John Rogers', 'ARIEL INVESTMENTS, LLC'],
  'julian-robertson': ['Julian Robertson', 'TIGER MANAGEMENT L.L.C.'],
  'kahn-brothers': ['Kahn Brothers', 'KAHN BROTHERS & CO INC /DE/'],
  'keeley-teton-advisors-llc': ['Keeley-Teton Advisors, LLC',
    'Keeley-Teton Advisors, LLC'],
  'ken-fisher': ['Ken Fisher', 'Fisher Asset Management, LLC'],
  'ken-heebner': ['Ken Heebner', 'CAPITAL GROWTH MANAGEMENT LP'],
  'mario-gabelli': ['Mario Gabelli', 'GAMCO INVESTORS, INC. ET AL'],
  'mason-hawkins': ['Mason Hawkins', 'SOUTHEASTERN ASSET MANAGEMENT INC/TN/'],
  'mohnish-pabrai': ['Mohnish Pabrai', 'Dalal Street, LLC'],
  'prem-watsa': ['Prem Watsa', 'Fairfax Financial Holdings Ltd/ Can'],
  'private-capital': ['Private Capital', 'Private Capital Management, LLC'],
  'richard-pzena': ['Richard Pzena', 'PZENA INVESTMENT MANAGEMENT LLC'],
  'robert-bruce': ['Robert Bruce', 'Bruce & Co., Inc.'],
  'robert-karr': ['Robert Karr', 'JOHO CAPITAL LLC'],
  'robert-olstein': ['Robert Olstein', 'Olstein Capital Management, L.P.'],
  'ron-baron': ['Ron Baron', 'BAMCO INC /NY/'],
  'ronald-muhlenkamp': ['Ronald Muhlenkamp', 'MUHLENKAMP & CO INC'],
  'ruane-cunniff': ['Ruane Cunniff', 'Ruane, Cunniff & Goldfarb L.P.'],
  'seth-klarman': ['Seth Klarman', 'BAUPOST GROUP LLC/MA'],
  'steve-mandel': ['Steve Mandel', 'LONE PINE CAPITAL LLC'],
  'third-avenue-management': ['Third Avenue Management',
    'THIRD AVENUE MANAGEMENT LLC'],
  'tom-gayner': ['Tom Gayner', 'MARKEL CORP'],
  'tweedy-browne': ['Tweedy Browne', 'TWEEDY BROWNE CO LLC//'],
  'wallace-weitz': ['Wallace Weitz', 'WEITZ INVESTMENT MANAGEMENT, INC.'],
  'warren-buffett': ['Warren Buffett', 'Berkshire Hathaway Inc'],
  'yacktman-asset-management': ['Yacktman Asset Management',
    'YACKTMAN ASSET MANAGEMENT LP'],
  'yale-university': ['Yale University', 'YALE UNIVERSITY']
}

var reversed_map_url_guru = {}
for(var i of Object.keys(map_url_guru)){
  reversed_map_url_guru[map_url_guru[i][0].toLowerCase()] = i
}


async function check_whether_reach_limit(output, address){
  if( output[0][0].startsWith("You are sending too many requests") && output[0][0].endsWith('Wait a minute and continue.')){
    window.Cells_to_refresh[address] = 1
    // delete window.Cells_to_refresh[address]
  } else {
    // window.Cells_to_refresh[address] = 1
    delete window.Cells_to_refresh[address]
  }

  if(window.have_not_start_refresh_limit_reach){
    setInterval(async function () {
      await Excel.run(async (context) => {
        let sheets = context.workbook.worksheets;
        sheets.load("items/name");

        await context.sync();

        let out = {}
        for (const sheet of sheets.items) {
          out[sheet.name] = []
          // console.log(sheet.name)
        }
        // console.log(2, window.Cells_to_refresh)
        for (let cell of Object.keys(window.Cells_to_refresh)){
          let cell_sheet_name = cell.split('!')[0]
          for (const sheet of sheets.items) {
            // console.log(cell, cell_sheet_name, sheet.name)
            if(cell_sheet_name === sheet.name){
              out[sheet.name].push(cell.split('!')[1])
              // console.log(cell)
              break
            }
          }
        }

        let count = 0
        for (const sheet of sheets.items) {
          // console.log(sheet.name)
          if(out[sheet.name].length > 0){

            let range = sheet.getRanges(out[sheet.name].join(','))
            range.calculate()
            await context.sync()
            count += out[sheet.name].length
            if(count > 500){break}
          }
        }
        console.log(23)
      })
    }, 60000);

    window.have_not_start_refresh_limit_reach = 0
  }
}

// $("#search_dropdown_wrap").on("mouseover", function() {console.log(3);$("#search_dropdown").show();}).on("mouseout", function() {$("#search_dropdown").hide();});
// $("#functions_dropdown_wrap").on("mouseover", function() {$("#functions_dropdown").show();}).on("mouseout", function() {$("#functions_dropdown").hide();});
// $("#refresh_dropdown_wrap").on("mouseover", function() {$("#refresh_dropdown").show();}).on("mouseout", function() {$("#refresh_dropdown").hide();});

