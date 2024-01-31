import React, { useState } from 'react';
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
const Task = ({ task, index, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    editTask(index, editedTask);
    setIsEditing(false);
  };

  return (
    <div className='addForm'>
      {isEditing ? (
        <div className='addForm'>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleEdit}><MdOutlineEditNote/></button>
        </div>
      ) : (
        <div className='TaskContainer'>
            <div className='TaskDiv'>{task}</div>
          <button onClick={() => setIsEditing(true)}><FaPencil/></button>
          <button onClick={() => deleteTask(index)}><FaRegTrashAlt/></button>
        </div>
      )}
    </div>
  );
};

export default Task;
