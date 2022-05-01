import { useState } from "react";
import React from "react";

const AddTaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const [importance, setImportance] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task name");
      return;
    }
    setTime(Date.now());
    props.onAdd({ title, date, reminder, importance, time });

    setTitle("");
    setDate("");
    setImportance("");
    setReminder("");
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task tag</label>
          <input
            type="title"
            placeholder="Tag"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label>Task date</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <p>Task importance</p>

          <div className="radio-button">
            <label>High</label>
            <input
              type="radio"
              name="importance"
              value={importance}
              onChange={(e) => {
                setImportance("high");
                console.log("high");
              }}
            />
          </div>
          <div className="radio-button">
            <label>Medium</label>
            <input
              type="radio"
              name="importance"
              value={importance}
              onChange={(e) => {
                setImportance("medium");
                console.log("medium");
              }}
            />
          </div>
          <div className="radio-button">
            <label>Low</label>
            <input
              type="radio"
              name="importance"
              value={importance}
              onChange={(e) => {
                setImportance("low");
                console.log("low");
              }}
            />
          </div>
        </div>

        <div className="form-control">
          <label>Task reminder</label>
          <input
            type="checkbox"
            value={reminder}
            onChange={(e) => {
              setReminder(e.currentTarget.checked);
              console.log(e.currentTarget.checked);
            }}
          />

          <input className="btn" type="submit" value="Save task" />
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
