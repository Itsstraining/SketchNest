const router = require("express").Router();
const db = require("../database");
const body = require("body-parser");
const { name } = require("ejs");

router.use(body.json());
//create room
router.post("/create", async (req, res) => {
  let { name, password } = req.body;
  // let {canvas} = socket.on()
  let result = await db.collection("room").doc(name).set({
    name: name,
    password: password,
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

module.exports = router;
