import React from 'react';
import './TicketCard.css';

const getPriorityClass = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'priority-high';
    case 'medium':
      return 'priority-medium';
    case 'low':
      return 'priority-low';
    default:
      return '';
  }
};

const TicketCard = ({ ticket, onAddToTask }) => {
  return (
    <div className="ticket-card" onClick={() => onAddToTask(ticket)}>
      <div className="card-header">
        <h3>{ticket.title}</h3>
        <span className={`status-badge ${ticket.status.toLowerCase()}`}>
          <span className="status-dot"></span>
          {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
        </span>
      </div>
      <p className="description">{ticket.description}</p>
      <div className="card-footer">
        <span className="ticket-id">#{ticket.id}</span>
        <span className={`priority-label ${getPriorityClass(ticket.priority)}`}>
          {ticket.priority.toUpperCase()} PRIORITY
        </span>
        <span className="customer-info">{ticket.customer}</span>
        <span className="date">
          <span role="img" aria-label="calendar">📅</span> {ticket.createdAt}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;