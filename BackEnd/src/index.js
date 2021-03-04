const config = require("./config");
const app = require("./server");
const cors = require("cors")();
const body = require("body-parser");
app.use(body.json());
app.use(cors);
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:4200"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("a", (msg) => {
    socket.join("room 1");
    console.log(`User: ${msg} is connected`);
    console.log(socket.rooms);
  });

  socket.on("update-canvas", (canvas) => {
    io.emit("canvas", canvas);
    console.log("senddata: " + canvas, socket.rooms);
  });
  socket.on('disconnect', function () {
    console.log('A user disconnected'); 
  });
});

http.listen(config.PORT, config.HOST, function () {
  console.log(`Server is running on  http://${config.HOST}:${config.PORT}`);
});
module.exports = app;
