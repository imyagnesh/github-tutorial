const todoList = [];

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

  const ul = document.querySelector("#todoList > ul");

  const listItem = `<li id="${todoListItem.id}">
  <input type="checkbox" name="isDone" id="isDone" />
  <span>${todoListItem.todoText}</span>
  <button type="button">Delete Todo</button>
</li>`;

  ul.insertAdjacentHTML("afterbegin", listItem);
};

// document.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });

// todoForm.addEventListener("submit", (e) => {
//   event.preventDefault();
//   console.log("form Submitted");
// });

// todoForm.removeEventListener('submit')
