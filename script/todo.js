let todoList = JSON.parse(localStorage.getItem("todoList"));

if (todoList === null) {
  let todoList = [];
}


renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
    <div class = "task">
      <p class = "task-name">${name}</p> <p class = "task-date">${dueDate}</p>  
      <button class="js-delete-todo delete-button" onclick='todoList.splice(${i}, 1); 
      renderTodoList();'
      >Delete</button>
    </div>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate,
  });

  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}
