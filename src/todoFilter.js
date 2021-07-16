import { Tab, Tabs } from "@material-ui/core";
import React, { memo } from "react";

const TodoFilter = ({ value, onFilter }) => {
  return (
    <Tabs
      value={value}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
    >
      <Tab
        role="button"
        label="All Todos"
        value="all"
        onClick={() => onFilter("all")}
      />
      <Tab
        role="button"
        label="Pending"
        value="pending"
        onClick={() => onFilter("pending")}
      />
      <Tab
        role="button"
        label="Completed"
        value="completed"
        onClick={() => onFilter("completed")}
      />
    </Tabs>
  );
};

export default memo(TodoFilter);
