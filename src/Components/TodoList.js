// TodoList.js
import React, { useState, useEffect } from 'react';
import Task from './Task';
import { FaPlus } from 'react-icons/fa'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const editTask = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className='addForm'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}><FaPlus/></button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
