import React from 'react';
import './Bookingid.css'; // Import your CSS file for styling

const Bookingid = () => {
  return (
    <div className="booking-container">
      <div className="centered-text">Enter your booking ID here</div>
      <input type="text" placeholder="Booking ID" />
    </div>
  );
}

export default Bookingid;

