const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(" hello world!!!");
});
app.get("/test", (req, res) => {
  let { a, b } = req.query;
  let c = parseInt(a) + parseInt(b);
  console.log(c);
  res.send(c.toString());
});
app.use("/get", require("./router/GetAll"));
app.use("/room", require("./router/data"));
app.use("/user", require("./router/user"));
module.exports = app;
