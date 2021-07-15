import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Header from "./components/Header";
import TodoForm from "./todoForm";

// function component
const App = ({ title, caption }) => {
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
        <TodoForm />
        <section>
          <List>
            <ListItem>
              <ListItemIcon>
                <Checkbox edge="start"></Checkbox>
              </ListItemIcon>
              <ListItemText primary="Get Milk"></ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Checkbox edge="start"></Checkbox>
              </ListItemIcon>
              <ListItemText primary="Get Milk"></ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Checkbox edge="start"></Checkbox>
              </ListItemIcon>
              <ListItemText primary="Get Milk"></ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Checkbox edge="start"></Checkbox>
              </ListItemIcon>
              <ListItemText primary="Get Milk"></ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </section>
      </main>
      <footer>
        <Tabs
          value={1}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab label="All" />
          <Tab label="Pending" />
          <Tab label="Completed" />
        </Tabs>
      </footer>
    </>
  );
};

export default App;
