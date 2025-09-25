import React, { useState, useEffect } from 'react';
import './Tickets.css';
import TicketCard from './TicketCard';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching tickets data
    const fetchTickets = async () => {
      setLoading(true);
      // Mock data - replace with actual API call
      const mockTickets = [
        {
          id: 1,
          title: 'Login Issue',
          description: 'Unable to login to the system',
          status: 'Open',
          priority: 'High',
          createdAt: '2024-01-15T10:30:00Z'
        },
        {
          id: 2,
          title: 'Feature Request',
          description: 'Add dark mode support',
          status: 'In Progress',
          priority: 'Medium',
          createdAt: '2024-01-14T14:20:00Z'
        },
        {
          id: 3,
          title: 'Bug Report',
          description: 'Application crashes on mobile',
          status: 'Resolved',
          priority: 'High',
          createdAt: '2024-01-13T09:15:00Z'
        }
      ];
      
      setTimeout(() => {
        setTickets(mockTickets);
        setLoading(false);
      }, 1000);
    };

    fetchTickets();
  }, []);

  if (loading) {
    return (
      <section className="tickets">
        <div className="tickets-container">
          <h2>Support Tickets</h2>
          <div className="loading">Loading tickets...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="tickets">
      <div className="tickets-container">
        <div className="tickets-header">
          <h2>Support Tickets</h2>
          <p>Track and manage your support requests</p>
        </div>
        <div className="tickets-grid">
          {tickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
