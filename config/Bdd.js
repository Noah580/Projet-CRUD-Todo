// Function pour crée le models des tâche
import { configDotenv } from "dotenv";
import { mongoose } from "mongoose";
const URI = process.env.MONGOD;

export function ConnectBdd() {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Bien connecté a la base de donnée mongo");
    })
    .catch((err) => {
      console.log(err);
      console.log("Err lors de connexion a la base de donnée");
    });
}
