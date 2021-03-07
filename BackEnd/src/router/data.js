const router = require("express").Router();
const db = require("../database");
const body = require("body-parser");
const { name } = require("ejs");
var cors = require("cors");
router.use(cors());
router.use(body.json());
router.get("/hi", (req, res) => {
  res.send("hello");
});
//create room
router.post("/create", async (req, res) => {
  let { name, password, owner } = req.body;
  // let {canvas} = socket.on()
  let result = await db.collection("room").doc(name).set({
    name: name,
    password: password,
    owner: owner,
  });
  let check = await checkIdExist(name);
  if (check) {
    res.send({ message: `Can't create room ${name}` });
  }
  res.send({ message: `Room ${name} created` });
  console.log(result);
});
async function checkIdExist(name) {
  let varia = await db.collection("room").get();
  let arr = varia.docs.map((doc) => (doc.name == name ? 1 : 0));
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
  let { password, canvas } = req.body;
  let { name } = req.query;
  let result = await db.collection("room").doc(name).update({
    canvas: canvas,
  });
  let check = checkIdExist(name);
  if (check) {
    res.send({ message: `room ${name} updated` });
  }
  res.send(result);
});

//get room by owner email
// router.get("/get", async (req, res) => {
//   let { email } = req.body;
//   let a = await db.collection("room").get();
// });
module.exports = router;
