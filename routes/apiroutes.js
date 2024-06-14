const router=require("express").Router();
const helpers = require("../db/data");
const fs = require("fs")
router.get('/notes', (req, res) => {
  //res.sendFile(path.join(__dirname, '/db/db.json')),

helpers.getNotes().then((noteData)=> {
 console.log("this is notedata",noteData)
  return res.json(noteData);
})
});

router.post('/notes', async (req,res)=> {
const existingData= await fs.readFile("./db/db.json", "utf8", (err, data)=>{
  console.log("data from existing file",data)
  const parsed=JSON.parse(data)
  parsed.push(req.body)
  console.log("parsed", parsed);
  helpers.postNotes(parsed);
})


  
  
})

//router.delete

module.exports=router;