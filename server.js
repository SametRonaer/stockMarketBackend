var http = require("http");
const app = require("./app");
const { openSocketConnection } = require("./services/socket/socket_service");





// var stockAmount = 10;

// io.on("connection", (socket) => {
//   console.log("Connected");
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   new YFinanceLive(['AAPL', 'BTC'], (data) => {
//      socket.emit("StockChange", data);
//      console.log(data);
//    });


//   socket.on("myMessage", (user) => {
//        socket.emit("hello", "world");
//       console.log("Messaged")
//       console.log(user);
//     });
//   socket.on("ios", (user) => {
//        socket.emit("stockCount", stockAmount);
//       console.log("ios here")
//       console.log(user);
//     });
// });

//searchTopic("Nasdaq");
//getSymbolHistoricalData('AAPL');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);


async function startServer() {
   openSocketConnection(server);
   server.listen(PORT, () => {
     console.log(`Listening on port ${PORT}...`);
   });
 }
 
 startServer();