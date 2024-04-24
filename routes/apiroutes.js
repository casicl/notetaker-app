const router=require("express").Router();
const data = require("../db/data");

router.get('/notes', (req, res) =>
  //res.sendFile(path.join(__dirname, '/db/db.json')),
  console.log(req.body)
  data.getNotes()
);

module.exports=router;