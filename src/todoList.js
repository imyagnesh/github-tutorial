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

const TodoList = ({ data, completeTodo, deleteTodo }) => {
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
              />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              style={{
                textDecoration: item.isDone ? "line-through" : "none",
              }}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => deleteTodo(item)}>
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
