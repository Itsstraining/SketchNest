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
    console.log(`User: ${msg} is connected`);
  });
  socket.on("update-canvas", (canvas) => {
    io.emit(canvas);
    console.log(canvas)
  });
});

http.listen(config.PORT, config.HOST, function () {
  console.log(`Server is running on  http://${config.HOST}:${config.PORT}`);
});
module.exports = app;
