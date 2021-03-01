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
app.get("/", (req, res) => {
  res.send("Cái con cặc hello world!!!");
});
app.get("/test", (req, res) => {
  let { a, b } = req.query;
  let c = parseInt(a) + parseInt(b);
  console.log(c);
  res.send(c.toString());
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("a", (msg) => {
    console.log(`User: ${msg} is connected`);
  });
});

http.listen(3000, function () {
  console.log("Server is running on port 3000");
});
