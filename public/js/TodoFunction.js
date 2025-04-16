export function AddTodo() {
  const btnAdd = document.querySelector(".AddTodo");

  btnAdd.addEventListener("click", async (e) => {
    e.preventDefault();
    const Name = document.querySelector("#name").value;
    const Content = document.querySelector("#content").value;

    try {
      const response = await fetch("http://localhost:3000/api/CreateTask", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: Name, content: Content }),
      });

      const data = await response.json();
      console.log(data);

      Readtask();
    } catch (error) {
      console.log("err lors de creation de la tâche", error);
    }
  });
}

export async function Readtask() {
  try {
    const response = await fetch("http://localhost:3000/api/ReadTasks", {
      method: "GET",
    });
    const data = await response.json();
    const todolist = document.querySelector(".TodoList");
    todolist.innerHTML = "";

    data.tâche.forEach((tache) => {

      const newTodo = document.createElement("div");
      newTodo.classList.add("todo");

      newTodo.innerHTML = `
        <h3>${tache.name}</h3>
        <p>${tache.content}</p>
      `;

      todolist.append(newTodo);
    });
  } catch (error) {
    console.log(error);
  }
}
