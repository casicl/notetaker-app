const util=require("util");
const fs=require("fs");


const readFile=util.promisify(fs.readFile);
const writeFile=util.promisify(fs.writeFile);

class Data {
    readData() {
        return readFile("db/db.json", "utf8");
    }

    writeData(notes) {
        return writeFile("db/db.json", JSON.stringify(notes))
    }

    getNotes() {
        return this.readData().then((notes)=> {
            console.log(notes)
            return res.json(notes)
        })
        .catch((err)=>res.status(500).json(err))
    }
}

module.exports= new Data();
