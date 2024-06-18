const router = require("express").Router();
const path = require("path");

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
//send and routes endpoints
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});



module.exports = router;