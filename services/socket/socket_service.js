var { YFinanceLive } = require('yfinance-live')
const { emit } = require('process');


var stockAmount = 10;




function openSocketConnection(server){
    var io = require("socket.io")(server, {
        cors: {
          origin: "*",
        },
      });
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
             socket.emit("stockCount", stockAmount);
            console.log("ios here")
            console.log(user);
          });
      });
}

module.exports = {
    openSocketConnection
}