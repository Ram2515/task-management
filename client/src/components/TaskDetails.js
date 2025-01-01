import React, { useState } from 'react';

function TaskDetails({ task, saveEditedTask }) {
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleSave = () => {
    saveEditedTask({ ...task, name: editedTaskName });
  };

  return (
    <div className="edit-task-form">
      <h2>Edit Task</h2>
      <input 
        type="text" 
        value={editedTaskName} 
        onChange={(e) => setEditedTaskName(e.target.value)} 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default TaskDetails;
