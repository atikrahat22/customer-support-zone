import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">
          <b>CS</b> — <span className="logo-sub">Ticket System</span>
        </span>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="new-ticket-btn">
          <span className="plus">+</span> New Ticket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;