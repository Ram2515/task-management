import React from 'react';

function Task({ task, index, updateTaskStatus, deleteTask, editTask }) {
  return (
    <li style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
      <span>{task.name}</span>
      <button onClick={() => updateTaskStatus(index)}>✔</button>
      <button onClick={() => editTask(index)}>✏️</button>
      <button onClick={() => deleteTask(index)}>🗑</button>
    </li>
  );
}

export default Task;
