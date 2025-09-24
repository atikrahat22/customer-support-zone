import React from 'react';
import './Banner.css';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to Customer Support Zone</h1>
        <p>Your one-stop solution for all customer queries and support tickets.</p>
        <div className="stats-container">
          <div className="stat-box">
            <h3>In Progress</h3>
            <p className="count">{inProgressCount}</p>
          </div>
          <div className="stat-box">
            <h3>Resolved</h3>
            <p className="count">{resolvedCount}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;