import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = { name: taskName, done: false };
      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <div className="add-task-form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
