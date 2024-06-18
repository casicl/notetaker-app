const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Data {
  readData() {
    return readFile("db/db.json", "utf8");
  }

  writeData(notes) {
    console.log(notes);
    return writeFile("db/db.json", JSON.stringify(notes));
  }

  getNotes() {
    return this.readData().then((notes) => {
      console.log("getnotes", notes);
      let parseNotes;
      try {
        parseNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parseNotes = [];
      }
      console.log("finalparse", parseNotes);
      return parseNotes;
    });
  }
//   res.send("hello")
  postNotes(noteData) {
    console.log("testing notedata", noteData)
    const newNote = noteData;
    console.log(noteData);
    return this.getNotes()
      .then((response) => [...response, newNote])
      .then((updatedNotes) => this.writeData(updatedNotes))
      .then(() => newNote);
  }
 
}

module.exports = new Data();
