import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { PureComponent, createRef } from "react";
import styled from "styled-components";
import TodoList from "./todoList";
import TodoFilter from "./todoFilter";
import TodoForm from "./todoForm";

// function component
class App extends PureComponent {
  inputRef = createRef();

  state = {
    todoList: [],
    filter: "all",
  };

  addTodo = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.inputRef.current.value,
            isDone: false,
          },
        ],
        filter: "all",
      }),
      () => {
        this.inputRef.current.value = "";
      }
    );
  };

  completeTodo = (item) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === item.id);
    const updatedTodoList = [
      ...todoList.slice(0, index),
      { ...item, isDone: !item.isDone },
      ...todoList.slice(index + 1),
    ];
    this.setState({ todoList: updatedTodoList });
  };

  deleteTodo = (item) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((x) => x.id === item.id);
    const updatedTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    this.setState({ todoList: updatedTodoList });
  };

  filter = (filter) => {
    this.setState({ filter });
  };

  filterList = () => {
    const { todoList, filter } = this.state;
    return todoList.filter((item) => {
      switch (filter) {
        case "completed":
          return item.isDone;
        case "pending":
          return !item.isDone;
        default:
          return true;
      }
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Todo Application
            </Typography>
          </Toolbar>
        </AppBar>
        <main style={{ marginTop: 20, flex: 1 }}>
          <TodoForm addTodo={this.addTodo} inputRef={this.inputRef} />
          <section>
            <TodoList
              data={this.filterList()}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
            />
          </section>
        </main>
        <footer>
          <TodoFilter value={filter} onFilter={this.filter} />
        </footer>
      </>
    );
  }
}

export default App;
