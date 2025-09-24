import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Customer Support Zone
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
        <button className="new-ticket-btn">New Ticket</button>
      </div>
    </nav>
  );
};

export default Navbar;