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