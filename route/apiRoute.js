const path = require("path")

// const indexCode = require("../public/assets/js/index");

module.exports = function(app) {
    // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  
    app.get("/api/notes", (req, res) => {
        fs.readFileSync('../db/db.json', (err,result) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    // * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
            app.post("api/notes", (req, res) => {
                indexCode.push(req.body);
                res.json(indexCode);

                fs.readFileSync('../db/db.json', (err, data) => {
                    if (err) throw (err);
                    dbData = JSON.parse(data);
                    dbData.push(userNotes);
                        let number = 1;
                    dbData.forEach((note, index) => {
                        note.id = number;
                        number++;
                        return dbData;
                    });
                        console.log(dbData);

                stringData = JSON.stringify(dbData);

                fs.writeFile('./db/db.json', stringData, (err, data) => {
                    if (err) throw err;
            });
            });
            res.send('Note added');
        });
       
    });
    // * DELETE `/api/notes/:id` In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.deleteNote("/api/notes/:id", (req, res) => {
        const deleteNote = req.params.id;
        console.log(deleteNote);

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            
            dbData = JSON.parse(data);
            // for each function, comparing each note's id to the chosen_for_death variable
            for (let i = 0; i < dbData.length; i++) {
              if (dbData[i].id === Number(deleteNote)) {
                dbData.splice([i], 1);
              }
            }
            console.log(dbData);
            stringData = JSON.stringify(dbData);
      
            fs.writeFile('./db/db.json', stringData, (err, data)=> {
              if (err) throw err;
            });
          });
          res.status(204).send();
      });
    };

