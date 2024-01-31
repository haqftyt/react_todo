import React, { useState, useEffect } from "react";
import { CgInsertBeforeR } from "react-icons/cg";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
const TodoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Load tasks from local storage on mount
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const CompleteorNot = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <div className="addForm">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>
          <CgInsertBeforeR />
        </button>
      </div>
      <div className="FilterBox">
          <h3 style={{ color: "black" }}>Filter:</h3>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <div className="CountBlock">
          <h3 style={{color:'black'}}>Count:{(tasks.length !=0 ? tasks.length : 0)}</h3>
          </div>
      </div>

      <ul className="TaskContainer">
        {filterTasks().map((task) => (
          <li className="TaskDiv" key={task.id}>
            <div className="TaskField">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => CompleteorNot(task.id)}
              />
              <div className="TextSpace">
                {task.completed ? (
                  <del>{task.text}</del>
                ) : (
                  <span>{task.text}</span>
                )}
              </div>
            </div>
            <div className="ButtonField">
              <button
                onClick={() =>
                  editTask(task.id, prompt("Edit task:", task.text))
                }
              >
                <FaPencil />
              </button>
              <button onClick={() => deleteTask(task.id)}>
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
