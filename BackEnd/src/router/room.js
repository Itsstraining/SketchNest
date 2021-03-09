const router = require("express").Router();
const db = require("../database");
var cors = require("cors");
const { response } = require("../server");
// router.use(cors());

/**
 * Lấy phòng từ người dùng
 */
router.get("/all", async (req, res) => {
  const { uid } = req.query;
  let result = (await db.collection("user").doc(uid).get()).data();
  res.send({ result: result.room });
});
/**
 * create room
 */
router.post("/create", async (req, res) => {
  try {
    const { roomName, password } = req.body;
    if (roomName.length < 3 || password.length < 5) {
      res.send({ message: "Please choose another password or Room name!!" });
    } else {
      let id = await db.collection("room").add({
        roomName: roomName,
        password: password,
        canvas: [],
      });
      res.send({ message: "Create successful", id: id._path.segments[1] });
    }
  } catch (err) {
    res.send({
      error: err,
    });
  }
});
router.get("/canvas", async (req, res) => {
  try {
    const { idRoom } = req.query;
    let result = (await db.collection("room").doc(idRoom).get()).data();
    res.send({
      message: "Success",
      data: result.canvas,
    });
  } catch (err) {
    res.send({ message: "Fail to get canvas" });
  }
});
router.delete("/one", async (req, res) => {
  try {
    const { idRoom } = req.body;
    await db.collection("room").doc(idRoom).delete();
    res.send({ message: "Deleted!!" });
  } catch (err) {
    res.send({ message: "Failed" , error:err});
  }
});
router.delete("/all",async (req,res)=>{
    
})
module.exports = router;
