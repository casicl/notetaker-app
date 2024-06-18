//requirements

const express = require('express');
// const path = require('path');
const apiRoutes = require("./routes/apiroutes");
const homeRoutes = require("./routes/homeroutes");
// const fs = require("fs");

//initialize express
const app = express();
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//middleware
app.use(express.static('public'));

//send and routes endpoints
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/notes.html'))
// );

// app.get('/api/notes', (req, res) =>
//   //res.sendFile(path.join(__dirname, '/db/db.json')),
//   data.getNotes()
// );
app.use("/api", apiRoutes)
app.use("/", homeRoutes)
//post new note
// app.post('/api/notes', (req, res) => {
//   console.log("api route hit");
//   const existingData = fs.readFile("./db/data.json", "utf8", (data)=> {
//     console.log("reading file", data)
//     return data
//   })
//   console.log(" existing data is", existingData)
// });

//listening on port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
