const router = require("express").Router();
const helpers = require("../db/data");
const fs = require("fs");

router.get("/notes", (req, res) => {
  helpers
    .getNotes()
    .then((noteData) => {
      // res.sendFile(path.join(__dirname, '/db/db.json')),
      console.log("this is notedata", noteData);
      return res.json(noteData);
    })
    .catch((error) => res.status(500).json(error));
});

router.post("/notes", (req, res) => {
  console.log("post req.body", req.body)
  const noteData = req.body;
  helpers
  .postNotes(noteData)
  .then((noteData) => {
    // res.sendFile(path.join(__dirname, '/db/db.json')),
    console.log("this is notedata", noteData);
    return res.json(noteData);
  })
  .catch((error) => res.status(500).json(error));
  // const existingData =  fs.readFile(
  //   "./db/db.json",
  //   "utf8",
  //   (err, data) => {
  //     console.log("data from existing file", data);
  //     const parsed = JSON.parse(data);
  //     parsed.push(req.body);
  //     console.log("parsed", parsed);
  //     helpers.postNotes(parsed);
  //   }
  // );

});

//router.delete

module.exports = router;
