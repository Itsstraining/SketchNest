const router = require("express").Router();
const db = require("../database");
const body = require("body-parser");

router.use(body.json());
//create room
router.post("/create", async (req, res) => {
  let { id, name, password, canvas } = req.body;
  // let {canvas} = socket.on()
  let result = await db.collection("room").doc(id).set({
    id: id,
    name: name,
    password: password,
    canvas: canvas,
  });
  let check = await checkIdExist(id);
  if (check) {
    res.send({ message: `Can't create room ${id}` });
  }
  res.send({ message: `Room ${id} created` });
  console.log(result);
});
async function checkIdExist(id) {
  let varia = await db.collection("room").get();
  let arr = varia.docs.map((doc) => (doc.id == id ? 1 : 0));
  for (let i of arr) {
    if (i == 0) {
      return 0;
    }
  }
  return 1;
}
//delete room
router.delete("/delete", async (req, res) => {
  let { id } = req.query;
  let result = await db.collection("room").doc(id).delete();
  if (result) {
    await res.send({ message: `Deleted room id ${id}` });
  }
  await res.send({ message: `Cannot delete room id ${id}` });
});

//update room
router.put("/update", async (req, res) => {
  let { name, password } = req.body;
  let { id } = req.query;
  let result = await db.collection("room").doc(id).update({
    name: name,
    password: password,
  });
  let check = checkIdExist(id);
  if (check) {
    res.send({ message: `room ${id} updated` });
  }
  res.send(result);
});
//create user
router.post("/create", async (req, res) => {
  let { uid, displayName, photoURL, email } = req.body;
  let a = await db.collection("user").doc(uid).get();
  if (!a.exists) {
    await db.collection("user").doc(uid).create({
      uid: uid,
      displayName: displayName,
      photoURL: photoURL,
      email: email,
    });
    res.send({ message: `create user with id ${uid}` });
  }
});

module.exports = router;
