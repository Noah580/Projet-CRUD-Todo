// Fichier pour gérer le system des task en CRUD
import Tasks from "../models/TaskModels.js";

export const CreateTask = async (req, res) => {
  const { name, content } = req.body;

  const TaskExist = await Tasks.findOne({ name: name });

  if (TaskExist) {
    console.log("Cette tâche existe déja");
    res.status(409).json({ message: "Cette tâche existe déja" });
  } else {
    const NewTask = new Tasks({
      name: name,
      content: content,
    });

    await NewTask.save();
    console.log("Nouvelle tâche crée");
    res.status(201).json({ message: "Nouvelle tâche crée", task: NewTask });
  }
};
