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
    status: "idle",
  };

  async componentDidMount() {
    this.loadData();
  }

  addTodo = async (event) => {
    try {
      event.preventDefault();
      this.setState({ status: "adding" });
      const res = await fetch("https://ca81928d8566.ngrok.io/todoList", {
        method: "POST",
        body: JSON.stringify({
          text: this.inputRef.current.value,
          isDone: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();

      console.log(this.inputRef.current.value);
      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
          filter: "all",
          status: "idle",
        }),
        () => {
          this.inputRef.current.value = "";
        }
      );
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  completeTodo = async (item) => {
    try {
      this.setState({ status: "updating" });
      const res = await fetch(
        `https://ca81928d8566.ngrok.io/todoList/${item.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ ...item, isDone: !item.isDone }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const json = await res.json();

      const { todoList } = this.state;
      const index = todoList.findIndex((x) => x.id === item.id);
      const updatedTodoList = [
        ...todoList.slice(0, index),
        json,
        ...todoList.slice(index + 1),
      ];
      this.setState({ todoList: updatedTodoList, status: "idle" });
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  deleteTodo = async (item) => {
    try {
      this.setState({ status: "deleting" });
      await fetch(`https://ca81928d8566.ngrok.io/todoList/${item.id}`, {
        method: "DELETE",
      });
      const { todoList } = this.state;
      const index = todoList.findIndex((x) => x.id === item.id);
      const updatedTodoList = [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ];
      this.setState({ todoList: updatedTodoList, status: "idle" });
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  loadData = async (filter) => {
    try {
      this.setState({ status: "loading" });
      let query = "";
      if (filter !== "all") {
        query = `?isDone=${filter === "completed" ? true : false}`;
      }
      const res = await fetch(`https://ca81928d8566.ngrok.io/todoList${query}`);
      const json = await res.json();
      this.setState({ filter, todoList: json, status: "idle" });
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  render() {
    const { todoList, filter, status } = this.state;
    if (status === "error") {
      return (
        <div>
          <h1>Something went wrong. Please try after sometime</h1>
          <button type="button" onClick={this.loadData}>
            Reload
          </button>
        </div>
      );
    }
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
          <TodoForm
            addTodo={this.addTodo}
            inputRef={this.inputRef}
            status={status}
          />
          <section>
            <TodoList
              status={status}
              data={todoList}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
            />
          </section>
        </main>
        <footer>
          <TodoFilter value={filter} onFilter={this.loadData} />
        </footer>
      </>
    );
  }
}

export default App;
