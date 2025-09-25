import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return '#e74c3c';
      case 'in progress':
        return '#f39c12';
      case 'resolved':
        return '#27ae60';
      default:
        return '#95a5a6';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '#e74c3c';
      case 'medium':
        return '#f39c12';
      case 'low':
        return '#27ae60';
      default:
        return '#95a5a6';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3 className="ticket-title">{ticket.title}</h3>
        <div className="ticket-meta">
          <span 
            className="ticket-status"
            style={{ backgroundColor: getStatusColor(ticket.status) }}
          >
            {ticket.status}
          </span>
          <span 
            className="ticket-priority"
            style={{ backgroundColor: getPriorityColor(ticket.priority) }}
          >
            {ticket.priority}
          </span>
        </div>
      </div>
      
      <div className="ticket-body">
        <p className="ticket-description">{ticket.description}</p>
      </div>
      
      <div className="ticket-footer">
        <span className="ticket-date">
          Created: {formatDate(ticket.createdAt)}
        </span>
        <button className="ticket-btn">View Details</button>
      </div>
    </div>
  );
};

export default TicketCard;
