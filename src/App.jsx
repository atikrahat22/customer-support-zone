import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Tickets from './components/Tickets';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Tickets />
      <TaskStatus />
      <Footer />
    </div>
  );
}

export default App;
