const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("./public"));

app.get("/Welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/index.html"));
});

app.listen(3000, (req, res) => {
  console.log("le server est lancée");
});
