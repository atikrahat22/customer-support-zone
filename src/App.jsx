import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus.jsx';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ticketsData from './assets/data/tickets.js';

import './App.css';

export default function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  function handleAddToTask(ticket) {
    if (tasks.find(t => t.id === ticket.id)) {
      toast.info('Ticket already in Task Status');
      return;
    }
    setTasks(prev => [ticket, ...prev]);
    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    toast.success('Added to Task Status');
  }

  function handleComplete(task) {
    setTasks(prev => prev.filter(t => t.id !== task.id));
    setResolved(prev => [task, ...prev]);
    toast.success('Task marked as resolved');
  }

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] mx-auto">
      <Navbar />
      <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />

      {/* main layout: mobile = single column, md+ = 2 columns */}
      <main className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 p-4 lg:p-10">
        <section className="md:col-span-2">
          {/* Moved the heading here to be part of the main layout */}
          <h2 className="section-heading">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {tickets.map(ticket => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onAddToTask={handleAddToTask}
              />
            ))}
          </div>
        </section>

        <section className="md:col-span-1">
          <TaskStatus tasks={tasks} onComplete={handleComplete} />
          <div className="task-status-box resolved-task-box mt-6">
            <h4 className="font-semibold mb-2">Resolved ({resolved.length})</h4>
            <ul className="list-disc pl-5">
              {resolved.map(ticket => (
                <li key={ticket.id} className="resolved-list-item">
                  {ticket.title}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}