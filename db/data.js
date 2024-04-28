const util=require("util");
const fs=require("fs");


const readFile=util.promisify(fs.readFile);
const writeFile=util.promisify(fs.writeFile);

class Data {
    readData() {
        return readFile("db/db.json", "utf8");
    }

    writeData(notes) {
        console.log(notes)
        return writeFile("db/db.json", JSON.stringify(notes))
    }

    getNotes() {
        return this.readData().then((notes)=> {
            
        const parseNotes=JSON.parse(notes);
        console.log(parseNotes)
        return parseNotes;
        })
       
    }

    postNotes(noteData) {
        console.log(noteData);
        return this.writeData(noteData).then((response)=> {
        console.log(response);
        });
    }
}

module.exports= new Data();
