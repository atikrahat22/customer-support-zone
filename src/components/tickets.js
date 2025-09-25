import React from 'react';
import './TicketCard.css'; 
import { FaCalendarAlt } from 'react-icons/fa'; 

const TicketCard = ({ ticket, onAddToTask }) => {
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

  return (
    <div className={`ticket-card ${getPriorityClass(ticket.priority)}`} onClick={() => onAddToTask(ticket)}>
      <div className="card-header">
        <h3>{ticket.title}</h3>
        <span className="card-status">
          <span className="status-dot"></span>
          {ticket.status}
        </span>
      </div>
      <p className="description">{ticket.description}</p>
      <div className="card-details">
        <p>
          #{ticket.id}{' '}
          <span className={`priority ${getPriorityClass(ticket.priority)}`}>
            {ticket.priority} PRIORITY
          </span>
        </p>
        <p className="customer-info">
          {ticket.customer}
          <FaCalendarAlt />
          {ticket.createdAt}
        </p>
      </div>
    </div>
  );
};

export default TicketCard;