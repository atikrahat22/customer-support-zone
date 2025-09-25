import React from 'react';
import './TaskStatus.css';

const TaskStatus = () => {
  const stats = [
    {
      label: 'Total Tickets',
      value: '1,234',
      icon: '📋',
      color: '#3498db'
    },
    {
      label: 'Open Tickets',
      value: '56',
      icon: '🔴',
      color: '#e74c3c'
    },
    {
      label: 'In Progress',
      value: '23',
      icon: '🟡',
      color: '#f39c12'
    },
    {
      label: 'Resolved',
      value: '1,155',
      icon: '🟢',
      color: '#27ae60'
    }
  ];

  return (
    <section className="task-status">
      <div className="task-status-container">
        <div className="task-status-header">
          <h2>Task Status Overview</h2>
          <p>Real-time statistics of your support tickets</p>
        </div>
        <div className="task-status-grid">
          {stats.map((stat, index) => (
            <div key={index} className="task-status-card">
              <div className="task-status-icon" style={{ backgroundColor: stat.color }}>
                {stat.icon}
              </div>
              <div className="task-status-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskStatus;
