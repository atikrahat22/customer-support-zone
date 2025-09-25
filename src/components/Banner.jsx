import React from 'react';
import './Banner.css';


const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="banner">
      <div className="status-box in-progress-box">
        <p>In-Progress</p>
        <h2>{inProgressCount}</h2>
      </div>
      <div className="status-box resolved-box">
        <p>Resolved</p>
        <h2>{resolvedCount}</h2>
      </div>
    </div>
  );
};

export default Banner;
