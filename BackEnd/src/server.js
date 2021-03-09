const express = require("express");
const app = express();
const cors = require("cors")();
const body = require("body-parser").json();
app.use(body);
app.use(cors);
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
app.use("/data", require("./router/data"));
app.use("/user", require("./router/user"));
app.use("/room", require("./router/room"));

module.exports = app;
