// Fichier pour les routes

import express from "express";
import { Router } from "express";
import { CreateTask, ReadTask } from "../controller/taskController.js";

const Routers = express.Router();

export default function Routes() {
  Routers.post("/CreateTask", CreateTask);

  Routers.get("/ReadTasks", ReadTask);

  return Routers;
}
