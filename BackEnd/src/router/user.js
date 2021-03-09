const router = require("express").Router();
const db = require("../database");

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
/**
 * update user add room
 */
router.post("/room-update", async (req, res) => {
  const { email, roomID } = req.body;
  let result = []
  let temp = await db.collection("user").doc(email).get();
  if (temp.data()) {
    temp = temp.data().room;
    for (let i of temp) {
      if (i == roomID) {
        res.send({
          message: "Room existed!!",
        });
        return;
      }
    }
    temp.push(roomID);
    console.log(temp);
    await db.collection("user").doc(email).update({
      room: temp,
    });
    res.send({ message: "Add room success" });
  } else {
    result.push(roomID);
    await db.collection("user").doc(email).create({
      room: result,
    });
  }
});
module.exports = router;
