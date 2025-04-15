// Fichier pour les routes

import express from "express";
import { Router } from "express";
import { CreateTask } from "../controller/taskController.js";

const Routers = express.Router();

export default function Routes() {
  Routers.post("/CreateTask", CreateTask);

  return Routers;
}
