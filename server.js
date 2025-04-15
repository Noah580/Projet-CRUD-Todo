import "dotenv/config";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ConnectBdd } from "./config/Bdd.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static("./public"));

const PORT = process.env.PORT;

app.get("/Welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pages/index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`le server est lancée: ${PORT}`);
  ConnectBdd();
});
