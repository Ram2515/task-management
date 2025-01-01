import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const updateTaskStatus = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (index) => {
    setTaskToEdit(tasks[index]);
    setShowAddTask(false);
  };

  const saveEditedTask = (updatedTask) => {
    const newTasks = tasks.map(task => task.name === updatedTask.name ? updatedTask : task);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setShowAddTask(true);
    setTaskToEdit(null);
  };

  return (
    <div className="App">
      <h1>Task Manager App</h1>
      {showAddTask ? (
        <AddTask addTask={addTask} />
      ) : (
        <TaskDetails task={taskToEdit} saveEditedTask={saveEditedTask} />
      )}
      <TaskList 
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
