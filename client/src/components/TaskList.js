import React from 'react';
import Task from './Task';

function TaskList({ tasks, updateTaskStatus, deleteTask, editTask }) {
  return (
    <div className="task-list">
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task 
            key={index} 
            index={index} 
            task={task} 
            updateTaskStatus={updateTaskStatus} 
            deleteTask={deleteTask} 
            editTask={editTask} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
