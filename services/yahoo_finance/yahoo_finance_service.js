var yahooFinance = require('yahoo-finance');
var {sendGetRequest} = require('../http_service/http_service.js');


 function getSymbolHistoricalData(symbol){
    yahooFinance.historical({
        symbol: symbol,
        from: '2020-01-01',
        to: '2020-12-31',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        console.log(quotes);
    });
//   const response =  sendGetRequest(`https://query1.finance.yahoo.com/v8/finance/chart/AAPL?range=1d&interval=1m&indicators=quote&includeTimestamps=true`);
//   console.log(response.data);
}

function getSymbolQuotes(symbol){
//   sendGetRequest("https://query1.finance.yahoo.com/v6/finance/quote",{"symbols":"AAPL"})
}
function searchTopic(topic){
  sendGetRequest(`https://query1.finance.yahoo.com/v1/finance/search?q=${topic}`);
}


module.exports = {
    getSymbolHistoricalData,
    getSymbolQuotes,
    searchTopic,
}

// Fecth quotes
//"https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL,TSLA,GOOG,MSFT "

// Search ticker symbols
//"https://query1.finance.yahoo.com/v1/finance/search?q=APPLE"

// Fetch charts
//"https://query1.finance.yahoo.com/v8/finance/chart/AAPL?range=1d&interval=1m&indicators=quote&includeTimestamps=true "
