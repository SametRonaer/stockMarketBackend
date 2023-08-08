
var { YFinanceLive } = require('yfinance-live')
const express = require("express");
var http = require("http");
const { emit } = require('process');
const { getSymbolHistoricalData, getSymbolQuotes, searchTopic } = require('./services/yahoo_finance/yahoo_finance_service');
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

var stockAmount = 10;

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  new YFinanceLive(['AAPL', 'BTC'], (data) => {
     socket.emit("StockChange", data);
     console.log(data);
   });


  socket.on("myMessage", (user) => {
       socket.emit("hello", "world");
      console.log("Messaged")
      console.log(user);
    });
  socket.on("ios", (user) => {
    stockAmount--;
       socket.emit("stockCount", stockAmount);
      console.log("ios here")
      console.log(user);
    });
});

//searchTopic("Nasdaq");
getSymbolHistoricalData('AAPL');

server.listen(port, () => {
  console.log("server started");
});
