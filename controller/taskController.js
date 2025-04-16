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

export const ReadTask = async (req, res) => {
  try {
    const readTask = await Tasks.find();

    if (readTask) {
      console.log("Voici toutes les tâche");
      res
        .status(201)
        .json({ message: "Voici toutes les tâche déja crée", tâche: readTask });
    }
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: "Err lors des chargement des tâche" });
  }
};
