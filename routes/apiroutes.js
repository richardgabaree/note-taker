const path = require("path");

module.export = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'))
        });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, './public/notes.html'))
        });
}