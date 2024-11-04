// src/App.js
// import React, { useState, useEffect } from 'react';
// import Dashboard from './Component/Dashbord';
// import TaskForm from './Component/TaskForm';
// import { getTasks, saveTasks } from './localStorage';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState(getTasks());

//   useEffect(() => {
//     saveTasks(tasks);
//   }, [tasks]);

//   const addTask = (task) => {
//     setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
//   };

//   const updateTask = (updatedTask) => {
//     setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>Task Manager</h1>
//       <TaskForm addTask={addTask} />
//       <Dashboard tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [priority, setPriority] = useState("Low");
//   const [editTaskId, setEditTaskId] = useState(null);

//   const handleAddTask = () => {
//     if (title.trim() === "" || description.trim() === "") {
//       alert("Please fill out all fields.");
//       return;
//     }

//     if (editTaskId !== null) {
//       setTasks(tasks.map(task => task.id === editTaskId ? 
//         { ...task, title, description, dueDate, priority } : task));
//       setEditTaskId(null);
//     } else {
//       const newTask = {
//         id: Date.now(),
//         title,
//         description,
//         dueDate,
//         priority,
//         isCompleted: false,
//       };
//       setTasks([...tasks, newTask]);
//     }

//     setTitle("");
//     setDescription("");
//     setDueDate("");
//     setPriority("Low");
//   };

//   const handleEditClick = (task) => {
//     setEditTaskId(task.id);
//     setTitle(task.title);
//     setDescription(task.description);
//     setDueDate(task.dueDate);
//     setPriority(task.priority);
//   };

//   const handleDeleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   const handleToggleComplete = (taskId) => {
//     setTasks(tasks.map(task =>
//       task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
//     ));
//   };

//   return (
//     <div className="App">
//       <h1>Task Management Application</h1>
      
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleAddTask();
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Task Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="date"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//         />
//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//         >
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>
//         <button type="submit">{editTaskId ? "Update Task" : "Add Task"}</button>
//       </form>

//       <div className="task-section">
//         <h2>Tasks</h2>
//         {tasks.map((task) => (
//           <div className="task" key={task.id}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             <p>Due: {task.dueDate}</p>
//             <p className={task.priority.toLowerCase()}>{task.priority}</p>
//             <p>{task.isCompleted ? "Completed" : "Pending"}</p>
//             <button className="edit-btn" onClick={() => handleEditClick(task)}>
//               Edit
//             </button>
//             <button
//               className="delete-btn"
//               onClick={() => handleDeleteTask(task.id)}
//             >
//               Delete
//             </button>
//             <button
//               className="complete-btn"
//               onClick={() => handleToggleComplete(task.id)}
//             >
//               {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [editTaskId, setEditTaskId] = useState(null);

  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (editTaskId !== null) {
      setTasks(tasks.map(task => task.id === editTaskId ? 
        { ...task, title, description, dueDate, priority } : task));
      setEditTaskId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };

  const handleEditClick = (task) => {
    setEditTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
    setPriority(task.priority);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  // Helper function to categorize tasks
  const categorizeTasks = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const upcomingTasks = tasks.filter(task => task.dueDate > currentDate && !task.isCompleted);
    const overdueTasks = tasks.filter(task => task.dueDate < currentDate && !task.isCompleted);
    const completedTasks = tasks.filter(task => task.isCompleted);

    return { upcomingTasks, overdueTasks, completedTasks };
  };

  const { upcomingTasks, overdueTasks, completedTasks } = categorizeTasks();

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">{editTaskId ? "Update Task" : "Add Task"}</button>
      </form>

      <div className="task-section">
        <h2>Upcoming Tasks</h2>
        {upcomingTasks.map((task) => (
          <div className="task" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p className={task.priority.toLowerCase()}>{task.priority}</p>
            <button className="edit-btn" onClick={() => handleEditClick(task)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
            <button
              className="complete-btn"
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>
        ))}

        <h2>Overdue Tasks</h2>
        {overdueTasks.map((task) => (
          <div className="task" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p className={task.priority.toLowerCase()}>{task.priority}</p>
            <button className="edit-btn" onClick={() => handleEditClick(task)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
            <button
              className="complete-btn"
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>
        ))}

        <h2>Completed Tasks</h2>
        {completedTasks.map((task) => (
          <div className="task" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p className={task.priority.toLowerCase()}>{task.priority}</p>
            <button className="edit-btn" onClick={() => handleEditClick(task)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
            <button
              className="complete-btn"
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
