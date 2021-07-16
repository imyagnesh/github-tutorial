import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { memo } from "react";

const TodoList = ({ data, completeTodo, deleteTodo, status }) => {
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  
  return (
    <List>
      {data.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.isDone}
                onChange={() => completeTodo(item)}
                disabled={status === "updating"}
              />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              style={{
                textDecoration: item.isDone ? "line-through" : "none",
              }}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                disabled={status === "deleting"}
                onClick={() => deleteTodo(item)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default memo(TodoList);
