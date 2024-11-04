// src/Task.js
import React from 'react';
import '../Component/taskItem.css';

function Task({ task, updateTask, deleteTask }) {
  const toggleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className='task'>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={toggleCompletion}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
