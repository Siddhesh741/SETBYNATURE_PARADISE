// DestinationItem.js

import React from 'react';
import './Destinations.css'; // Import your CSS file for DestinationItem styling

const DestinationItem = ({ image, title, description, buttonText }) => {
    
  return (
    <div className="destination-item">
      <img src={image} alt={title} className="destination-image" />
      <div className="destination-info">
        <h2 className="destinations-title">{title}</h2>
        <p className="destination-description">{description}</p>
        <a href="http://localhost:3000/contact" className="destination-button" > {buttonText} </a>
      </div>
    </div>
  );
};

export default DestinationItem;
