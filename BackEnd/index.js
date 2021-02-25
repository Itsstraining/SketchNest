// const config = require("./config");
// const app = require("express")();
// const http = require("http").createServer(app);
// const io = require("socket.io")(http, {
//   cors: {
//     origins: "*",
//     method: ["GET","POST"],
//   },
// });
// app.get("/", (req, res) => {
//   res.send("<h1>Hey Socket.io</h1>");
// });
// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });
// http.listen(config.PORT, config.HOST, () => {
//   console.log("listening on *:3000");
// });

const config = require("./config");
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("hello!");
});

io.on("connection", (socket) => {
  console.log("A user connected");
});

http.listen(3000, function () {
  console.log("Server is running on port 3000");
});
