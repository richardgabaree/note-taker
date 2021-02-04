const fs = require("fs");
const express = require("express");

const path = require("path")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended: true }));
app.use(express.json());
//connects the css and js files from the puplic folder
app.use(express.static(__dirname + '/public'));

// require("./routes/apiRoute")(app);
// require("./routes/htmlRoute")(app);

// const indexCode = require("../public/assets/js/index");

    // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    app.get('/api/notes', (req, res) => {
      // store data in a variable
      const dbData = fs.readFileSync('./db/db.json', 'utf8');
      console.log(dbData);
      // parse data into json and send back to browser
      res.json(JSON.parse(dbData))
    });

    app.post("/api/notes", (req, res) => {
        const userNotes = req.body;
        console.log(userNotes);

        const data = fs.readFileSync('./db/db.json', 'utf8');
        const dbData = JSON.parse(data);

          dbData.push(userNotes);
          
          let number = 1;
          dbData.forEach((note, index) => {
            note.id = number;
            number++;
            return dbData;
          })
          console.log(dbData);

        stringData = JSON.stringify(dbData);

        fs.writeFile("./db/db.json", stringData, (err, data) => {
           if (err) throw err;
        });
      // });
      res.send('Note added');       
    });
    
    // * DELETE `/api/notes/:id` In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete("/api/notes/:id", (req, res) => {
      const deleteNote = req.params.id;
      console.log(deleteNote);

    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;

      const dbData = JSON.parse(data);
        for (let i = 0; i < dbData.length; i++) {
          if (dbData[i].id === Number(deleteNote)) {
            dbData.splice([i], 1);
          }
        }
        console.log(dbData);
     
        stringData = JSON.stringify(dbData);

      fs.writeFile('./db/db.json', stringData, (err, data) => {
        if (err) throw err;
      });
    });
    // // Express response.status(204)
    res.status(204).send();
    })
//html routs
  app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, '/index.html'))
    });

  app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, '/public/notes.html'))
    });


  app.listen(PORT, function() {
    console.log(`Server listening on: PORT:${PORT}`);
  });