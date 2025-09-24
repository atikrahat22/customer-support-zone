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
  // all tickets (customer ticket list)
  const [tickets, setTickets] = useState(ticketsData);
  // tasks in progress
  const [tasks, setTasks] = useState([]);
  // resolved list
  const [resolved, setResolved] = useState([]);

  function handleAddToTask(ticket) {
    // avoid duplicate
    if (tasks.find(t => t.id === ticket.id)) {
      toast.info('Ticket already in Task Status');
      return;
    }
    setTasks(prev => [ticket, ...prev]);
    // remove from tickets list
    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    toast.success('Added to Task Status');
  }

  function handleComplete(task) {
    // remove from tasks
    setTasks(prev => prev.filter(t => t.id !== task.id));
    // add to resolved
    setResolved(prev => [task, ...prev]);
    toast.success('Task marked as resolved');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner inProgressCount={tasks.length} resolvedCount={resolved.length} />

      <main className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 p-4">
        <section className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} onAddToTask={handleAddToTask} />
          ))}
        </section>

        <section className="md:col-span-1">
          <TaskStatus tasks={tasks} onComplete={handleComplete} />

          <div className="mt-6 p-4 border rounded">
            <h4 className="font-semibold mb-2">Resolved ({resolved.length})</h4>
            <ul>
              {resolved.map(ticket => (
                <li key={ticket.id} className="text-sm text-gray-600">
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