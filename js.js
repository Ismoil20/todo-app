const valueTodo = document.querySelector(".form-control");
const addToDo = document.querySelector("#addButton");
const clearToDoList = document.getElementById("clearButton");
const toDoList = document.getElementById("todoList");

function addTask() {
  let value = valueTodo.value;
  valueTodo.value = "";
  if (value === "") {
    return;
  }
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

  const taskBans = document.createElement("div");
  taskBans.style.display = "flex";
  taskBans.style.gap = "10px";

  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.classList.add("btn");
  btnEdit.classList.add("btn-primary");

  const btnComplete = document.createElement("button");
  btnComplete.textContent = "Complete";
  btnComplete.classList.add("btn");
  btnComplete.classList.add("btn-success");

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.classList.add("btn");
  btnDelete.classList.add("btn-danger");

  let isComplete = false;
  btnComplete.addEventListener("click", function () {
    isComplete = !isComplete;
    if (isComplete) {
      todoText.style.textDecoration = "line-through";
      todoText.style.opacity = "0.5";
      btnComplete.textContent = "Uncompleted";
      btnComplete.classList.add("btn-warning");
      btnComplete.classList.remove("btn-success");
    } else {
      btnComplete.textContent = "Complete";
      todoText.style.textDecoration = "none";
      todoText.style.opacity = "1";
      btnComplete.classList.add("btn-success");
      btnComplete.classList.remove("btn-warning");
    }
  });
  // ////////////////////////////////////////////////////
  btnEdit.addEventListener("click", function () {
    todoText.style.display = "none";
    const editInput = document.createElement("input");
    btnEdit.style.display = "none";
    editInput.style.color = "red";
    editInput.value = value;
    li.prepend(editInput);
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("btn-primary");
    cancelBtn.classList.add("btn-warning");
    const ok = document.createElement("button");
    ok.textContent = "ok";
    ok.classList.add("btn-primary");
    ok.classList.add("btn");
    btnComplete.style.display = "none";
    btnDelete.style.display = "none";
    ok.addEventListener("click", function () {
      editInput.style.display = "none";
      todoText.style.display = "flex";
      value = editInput.value || value;
      todoText.textContent = value;

      ok.remove();
      cancelBtn.remove();
      btnComplete.style.display = "block";
      btnDelete.style.display = "block";
      btnEdit.style.display = "block";
    });
    cancelBtn.addEventListener("click", function () {
      editInput.style.display = "none";
      todoText.style.display = "flex";
      ok.remove();
      cancelBtn.remove();
      btnComplete.style.display = "block";
      btnDelete.style.display = "block";
      btnEdit.style.display = "block";
    });
    taskBans.prepend(cancelBtn);
    taskBans.prepend(ok);
  });

  btnDelete.addEventListener("click", function () {
    li.remove();
  });
  // ///////////////////////////////////////////////////////////////////////////////////
  taskBans.append(btnEdit);
  taskBans.append(btnComplete);
  taskBans.append(btnDelete);

  li.append(todoText);
  li.append(taskBans);

  toDoList.prepend(li);
}
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") addTask();
});

addToDo.addEventListener("click", addTask);

clearToDoList.addEventListener("click", function () {
  toDoList.innerHTML = "";
});

// respansivlik
