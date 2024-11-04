// src/Dashboard.js
import React from 'react';
import TaskList from './TaskList';

function Dashboard({ tasks, updateTask, deleteTask }) {
  const today = new Date().toISOString().split('T')[0];

  const upcomingTasks = tasks.filter(task => task.dueDate >= today && !task.completed);
  const overdueTasks = tasks.filter(task => task.dueDate < today && !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <TaskList tasks={upcomingTasks} updateTask={updateTask} deleteTask={deleteTask} />

      <h2>Overdue Tasks</h2>
      <TaskList tasks={overdueTasks} updateTask={updateTask} deleteTask={deleteTask} />

      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default Dashboard;
