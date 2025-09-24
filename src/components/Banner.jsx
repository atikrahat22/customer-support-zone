import React from 'react';
import './Banner.css';
import vector1 from '../assets/image/vector1.png';


const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="banner">
      <div className="status-box in-progress-box" style={{ backgroundImage: `url(${vector1})` }}>
        <p>In-Progress</p>
        <h2>{inProgressCount}</h2>
      </div>
      <div className="status-box resolved-box" style={{ backgroundImage: `url(${vector1})` }}>
        <p>Resolved</p>
        <h2>{resolvedCount}</h2>
      </div>
    </div>
  );
};

export default Banner;