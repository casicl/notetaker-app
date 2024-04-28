const router=require("express").Router();
const data = require("../db/data");

router.get('/notes', (req, res) => {
  //res.sendFile(path.join(__dirname, '/db/db.json')),
  console.log(req.body, "here")
data.getNotes().then((noteData)=> {
  console.log(noteData, "this is notedata");
  return res.json(noteData);
})
});

router.post('/notes', (req,res)=> {
  console.log(req.body, "router post notes");
  data.postNotes(req.body);
  
})

//router.delete

module.exports=router;