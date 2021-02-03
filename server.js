const fs = require("fs");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true }));
app.use(express.json());
//connects the css and js files from the puplic folder
app.use(express.static("public"));

// require("./routes/apiRoute")(app);
// require("./routes/htmlRoute")(app);

app.listen(PORT, function() {
    console.log(`App listening on: PORT:${PORT}`);
  });

  const path = require("path")
// const indexCode = require("../public/assets/js/index");

module.exports = function(app) {
    // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get("/api/notes", (req, res) => {
        let content = fs.readFile("./db/db.json", "utf8");
            //read the db.json file and return all saved notes as JSON
            res.json(content);
    });

    // * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("api/notes", (req, res) => {
        indexCode.push(req.body);
        res.json(indexCode);
    });


    // * DELETE `/api/notes/:id` In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.post("/api/notes/:id", (req, res) => {
      
    })
};

var path = require("path")

module.exports = function(app) {
    
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// return the `notes.html` file.
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
};