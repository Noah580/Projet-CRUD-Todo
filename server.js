require('dotenv').config()
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("./public"));

const PORT = process.env.PORT

app.get("/Welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`le server est lancée${PORT}`);
});
