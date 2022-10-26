const express = require("express");
const app = express();
const expressLayouts =require('express-ejs-layouts')

app.use(expressLayouts)

app.listen(3042, () => {
    console.log("App is listening on port 3042");
    })

app.get("/about", (req, res) => {
  res.sendFile(__dirname+"/views/about.html");
});

app.get("/works", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
  });

  app.get("/gallery", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
  });

app.use('/style',express.static('/styles'));
app.use('/images',express.static('/images'));

