const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extends: true }));
app.use(express.json());'git pushgit '
//connects the css and js files from the puplic folder
app.use(express.static("public"));

//Routes
module.exports = function (app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../index.html"))
  );

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../notes.html"));
    res.json(notes);
  });

  app.post("/notes", (req, res) => {
    const newNote = req.body;
  });

  const newLocal = app.listen(PORT, function () {
    console.log(`Server is listening on PORT: ${PORT}`);
  });
};
