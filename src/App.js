import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
/*================================== ============================================*/

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

/*==============================================================================*/

function App() {
  const [showAddTaskPanel, setShowAddTaskPanel] = useState(true);
  const [tasks, setTasks] = useState([]);
  const tasksCollection = collection(db, "tasks");

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollection);

      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);

  function handleAddTask(task) {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };

    const addTask = async () => {
      await addDoc(tasksCollection, newTask);
    };
    addTask();
    setTasks([newTask, ...tasks]);
  }

  const handleDelete = async (index, id) => {
    setTasks(tasks.filter((task, i) => i !== index));
    const userDoc = doc(db, "tasks", id);
    await deleteDoc(userDoc);
  };

  function handleReminder(index, id) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, reminder: !task.reminder } : task
      )
    );

    const updateDatabaseReminder = async () => {
      const userDoc = doc(db, "tasks", id);
      const reminder = { reminder: !tasks[index].reminder };
      await updateDoc(userDoc, reminder);
    };
    updateDatabaseReminder();
  }

  function handleTogglePanel() {
    setShowAddTaskPanel(!showAddTaskPanel);
  }
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1>Task tracker</h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>
                  You have{" "}
                  {tasks.length >= 2
                    ? tasks.length + " tasks"
                    : tasks.length > 0
                    ? " 1 task"
                    : " no tasks"}{" "}
                </h2>
                <div className="btn" onClick={handleTogglePanel}>
                  Add Task{" "}
                </div>
                <br />
                <div className="addTaskForm">
                  {showAddTaskPanel && <AddTaskForm onAdd={handleAddTask} />}
                </div>
                <div className="tasksWrapper">
                  <TaskList
                    taskList={tasks}
                    handleDelete={handleDelete}
                    handleReminder={handleReminder}
                  />
                </div>
              </>
            }
          />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
