//requirements

const express = require('express');
const path = require('path');
const apiRoutes = require("./routes/apiroutes");

//initialize express
const app = express();
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//middleware
app.use(express.static('public'));

//send and routes endpoints
//app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/notes.html'))
// );

// app.get('/api/notes', (req, res) =>
//   //res.sendFile(path.join(__dirname, '/db/db.json')),
//   data.getNotes()
// );
app.use("/api", apiRoutes)
//post new note
app.post('/api/notes', (req, res) =>
  console.log(req.body)
);

//listening on port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
