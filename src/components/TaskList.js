import { useState } from "react";
import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <div div className="taskList">
      {props.taskList.map((taskData, index) => (
        <div
          key={taskData.id}
          className={taskData.reminder ? "taskreminder" : "task"}
        >
          <Task
            taskData={taskData}
            index={index}
            handleDelete={props.handleDelete}
            handleReminder={props.handleReminder}
            id={taskData.id}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
