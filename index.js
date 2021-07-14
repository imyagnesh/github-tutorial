let todoList = [];

const addListToUl = (todoListItem) => {
  const ul = document.querySelector("#todoList > ul");
  const listItem = `<li id="${todoListItem.id}">
    <input type="checkbox" ${
      todoListItem.isDone ? "checked" : ""
    } name="isDone" id="isDone" onchange="completeTodo(${todoListItem.id})" />
    <span style="text-decoration: ${
      todoListItem.isDone ? "line-through" : "none"
    }">${todoListItem.todoText}</span>
    <button type="button">Delete Todo</button>
  </li>`;

  ul.insertAdjacentHTML("afterbegin", listItem);
};

const clearUl = () => {
  const ul = document.querySelector("#todoList > ul");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
};

const todoForm = document.getElementById("todoForm");
todoForm.onsubmit = (event) => {
  event.preventDefault();
  const todoText = document.getElementById("todoText");
  const todoListItem = {
    id: new Date().valueOf(),
    todoText: todoText.value,
    isDone: false,
  };

  todoList.push(todoListItem);
  todoText.value = "";

  addListToUl(todoListItem);
};

const completeTodo = (id) => {
  const index = todoList.findIndex((x) => x.id === id);
  const updatedTodoList = [
    ...todoList.slice(0, index),
    { ...todoList[index], isDone: !todoList[index].isDone },
    ...todoList.slice(index + 1),
  ];
  todoList = updatedTodoList;
  clearUl();
  for (let i = 0; i < updatedTodoList.length; i++) {
    addListToUl(updatedTodoList[i]);
  }
};

// document.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });

// todoForm.addEventListener("submit", (e) => {
//   event.preventDefault();
//   console.log("form Submitted");
// });

// todoForm.removeEventListener('submit')
