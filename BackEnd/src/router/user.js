const router = require("express").Router();
const db = require("../database");
const body = require("body-parser");
var cors = require("cors");
const { doc } = require("../database");
router.use(body.json());
router.use(cors());

//tao user

router.post("/create", async (req, res) => {
  let { displayName, photoURL, email, uid, room } = req.body;
  let a = await db.collection("user").doc(email).get();
  let result = await db.collection("user").doc(email).set({
    room: [],
  });
  console.log(result);
  if (!a.exists) {
    res.send({ message: `created user with email ${email}` });
  }
  res.send({ message: `user already existed` });
});
//chinh sua thong tin user
router.get("/get", async (req, res) => {
  let { room, displayName, photoURL, email } = req.body;
  let a = await db
    .collection("user")
    .doc(email)
    .get()
    .then((doc) => doc.data());
  console.log(a);
});
router.put("/update", async (req, res) => {
  let { email, room } = req.body;
  let result = await db.collection("user").doc(email).set({
    room: room,
  });
  console.log(result);
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
