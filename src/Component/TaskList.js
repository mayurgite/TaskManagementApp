// src/TaskList.js
import React, { useState } from 'react';
import Task from './TaskItem';
import '../Component/taskItem.css';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) &&
    (!priorityFilter || task.priority === priorityFilter)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setPriorityFilter(e.target.value)}>
        <option value="">All Priorities</option>
        <option   value="High">High</option>
        <option  value="Medium">Medium</option>
        <option  value="Low">Low</option>
      </select>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
