import { Button, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const CustomButton = styled(Button)`
  min-width: 6.5rem;
  margin-left: 20px;
`;

const TodoForm = ({ addTodo, inputRef }) => {
  return (
    <form style={{ display: "flex", margin: "0 10px" }} onSubmit={addTodo}>
      <TextField id="todoText" label="Todo" fullWidth inputRef={inputRef} />
      <CustomButton variant="contained" color="primary" type="submit">
        Add Todo
      </CustomButton>
    </form>
  );
};

export default TodoForm;
