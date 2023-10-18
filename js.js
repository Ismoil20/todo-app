const valueTodo = document.querySelector(".form-control");
const addToDo = document.querySelector("#addButton");
const clearToDoList = document.getElementById("clearButton");
const toDoList = document.getElementById("todoList");

function addTask() {
  const value = valueTodo.value;
  valueTodo.value = "";

  const li = document.createElement("li");

  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";
  li.style.padding = "20px";
  li.style.backgroundColor = "rgb(236, 236, 236)";
  li.style.marginTop = "10px";

  const todoText = document.createElement("p");
  todoText.textContent = value;
  todoText.style.margin = 0;
  todoText.style.fontWeight = 600;

  const taskBtns = document.createElement("div");
  taskBtns.style.display = "flex";
  taskBtns.style.gap = "10px";

  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.classList.add("btn");
  btnEdit.classList.add("btn-primary");

  const btnComplate = document.createElement("button");
  btnComplate.textContent = "Complate";
  btnComplate.classList.add("btn");
  btnComplate.classList.add("btn-success");

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.classList.add("btn");
  btnDelete.classList.add("btn-danger");

  let isComplate = false;
  btnComplate.addEventListener("click", function () {
    isComplate = !isComplate;
    if (isComplate) {
      todoText.style.textDecoration = "line-through";
      todoText.style.opacity = "0.5";
      btnComplate.textContent = "Uncomplate";
      btnComplate.classList.add("btn-warning");
      btnComplate.classList.remove("btn-success");
    } else {
      todoText.textContent = "Complate";
      todoText.style.textDecoration = "none";
      todoText.style.opacity = "1";
      btnComplate.classList.add("btn-success");

      btnComplate.classList.remove("btn-warning");
    }
  });

  btnEdit.addEventListener("click", function () {});

  btnDelete.addEventListener("click", function () {
    li.remove();
  });

  taskBtns.append(btnEdit);
  taskBtns.append(btnComplate);
  taskBtns.append(btnDelete);

  li.append(todoText);
  li.append(taskBtns);

  toDoList.prepend(li);
}
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") addTask();
});

addToDo.addEventListener("click", addTask);

clearToDoList.addEventListener("click", function () {
  toDoList.innerHTML = "";
});
