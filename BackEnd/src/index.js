const config = require("./config");
const app = require("./server");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:4200"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("draw", (data) => {
    if (data) {
      fs.collection("canvas").doc("canvas").set({ json: data });
      io.emit("draw", true);
    }
  });
  socket.on("disconnect", function () {
    console.log(socket.id + "disconnected!!");
  });
});

http.listen(config.PORT, config.HOST, function () {
  console.log(`Server is running on  http://${config.HOST}:${config.PORT}`);
});
http.setTimeout(5000)
module.exports = app;
