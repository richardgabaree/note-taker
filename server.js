const fs = require("fs");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true }));
app.use(express.json());
//connects the css and js files from the puplic folder
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
