// src/localStorage.js
export const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };
  
  export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  