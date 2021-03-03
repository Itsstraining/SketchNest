const router = require("express").Router();
const db = require("../database");
router.get("/db", async (req, res) => {
  let a = await db.collection("user").get();
  let result = [];
  result.push({
    id: a.docs.map((doc) => doc.id),
    data: a.docs.map((doc) => doc.data()),
  });
  a.docs.map((doc) => {
    doc.id;
  });
  console.log(result);
  res.send(result);
});

module.exports = router;
