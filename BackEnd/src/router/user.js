const router = require("express").Router();
const db = require("../database");
const body = require("body-parser");
var cors = require("cors");
router.use(body.json());
router.use(cors());

//tao user
router.get("/hi", (req, res) => {
  res.send("hello");
});
router.post("/create", async (req, res) => {
  let { displayName, photoURL, email, uid } = req.body;
  let a = await db.collection("user").doc(uid).get();
  let result = await db.collection("user").doc(uid).set({
    displayName: displayName,
    photoURL: photoURL,
    email: email,
    uid: uid,
  });
  console.log(result);
  if (!a.exists) {
    res.send({ message: `created user with email ${email}` });
  }
  res.send({ message: `user already existed` });
});
//chinh sua thong tin user
router.put("/update", async (req, res) => {
  let { email } = req.query;
  let { room, displayName, photoURL } = req.body;
  let a = await db.collection("user").doc(email).get();
  let result = await db.collection("user").doc(email).update({
    room: room,
    displayName: displayName,
    photoURL: photoURL,
  });
  if (!a.exists) {
    res.send({ message: `user with email ${email} updated` });
  }
  res.send({ message: `user doesn't existed` });
});
//xoa user
router.delete("/delete", async (req, res) => {
  let { email } = req.query;
  let a = await db.collection("user").doc(uid).get();
  let result = await db.collection("user").doc(email).delete();
  if (!a.exists) {
    res.send({ message: `user doesn't exist` });
  }
  res.send({ message: `user with email ${email} deleted` });
});

module.exports = router;
