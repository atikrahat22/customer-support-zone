import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <h1>Welcome to Customer Support Zone</h1>
          <p>Get instant support for all your queries and issues</p>
          <div className="banner-stats">
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-item">
              <h3>Fast</h3>
              <p>Response Time</p>
            </div>
            <div className="stat-item">
              <h3>Expert</h3>
              <p>Support Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
