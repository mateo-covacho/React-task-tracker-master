import React from "react";
import { AiFillBell, AiOutlineCloseCircle } from "react-icons/ai";

let priorityIcon;
const Task = (props) => {
  switch (props.taskData.importance) {
    case "high":
      priorityIcon = "🔥";
      break;
    case "medium":
      priorityIcon = "🦧";
      break;
    default:
      priorityIcon = "🐢";
  }
  return (
    <div>
      <p className="taskTitle">{props.taskData.title}</p>
      <div className="bottom">
        <p className="taskIcon">{priorityIcon}</p>
        <p className="taskDate">{props.taskData.date}</p>
      </div>

      {props.taskData.reminder ? (
        <div
          className="taskReminderButtonOn"
          onClick={() => {
            props.handleReminder(props.index, props.taskData.id);
          }}
        >
          <AiFillBell />
        </div>
      ) : (
        <div
          className="taskReminderButtonOff"
          onClick={() => {
            props.handleReminder(props.index, props.taskData.id);
          }}
        >
          <AiFillBell />
        </div>
      )}

      <div
        className="closeButton"
        onClick={(e) => {
          props.handleDelete(props.index, props.id);
        }}
      >
        <AiOutlineCloseCircle />
      </div>
    </div>
  );
};

export default Task;
