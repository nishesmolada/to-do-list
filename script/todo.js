const todoList = [
  { name: "sample1", dueDate: "aaaaa" },
  { name: "sample2", dueDate: "eeeee" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate} = todoObject;

    const html = `
    <p>
      ${name} ${dueDate} 
      <button class="js-delete-todo" onclick='todoList.splice(${index}, 1); 
      renderTodoList();'
      >Delete</button>
    </p>`;
    todoListHTML += html;

  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
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
