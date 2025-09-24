import React from 'react';
import './TaskStatus.css';

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="task-status">
      <h2>In Progress</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks in progress.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.title}</span>
              <button
                className="complete-btn"
                onClick={() => onComplete(task)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskStatus;