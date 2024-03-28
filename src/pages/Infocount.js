import React, { useState, useEffect } from 'react';
import './Infocount.css'; // Import CSS file for styling

const Info = () => {
  const [totalSets, setTotalSets] = useState(0);
  const [shootOptions, setShootOptions] = useState(0);
  const [bookingMandatory, setBookingMandatory] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [serviceAvailable, setServiceAvailable] = useState(0);
  const [naturalSets, setNaturalSets] = useState(0);
  const [friendlyEnvironment, setFriendlyEnvironment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment counts until they reach their respective targets
      if (totalSets < 25) setTotalSets(totalSets + 1);
      if (shootOptions < 50) setShootOptions(shootOptions + 1);
      if (bookingMandatory < 100) setBookingMandatory(bookingMandatory + 1);
      if (happyCustomers < 1300) setHappyCustomers(happyCustomers + 10); // Increment by 10
      if (serviceAvailable < 24) setServiceAvailable(serviceAvailable + 1);
      if (naturalSets < 15) setNaturalSets(naturalSets + 1);
      if (friendlyEnvironment < 100) setFriendlyEnvironment(friendlyEnvironment + 1);
    }, 15); // Adjust the interval for the speed of counting

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [
    totalSets,
    shootOptions,
    bookingMandatory,
    happyCustomers,
    serviceAvailable,
    naturalSets,
    friendlyEnvironment,
  ]);





  return (
    <div className="info-container">
      <div className="info-item">
        <div className="number">{totalSets}+</div>
        <div className="text">Total Sets</div>
      </div>

      <div className="info-item">
        <div className="number">{shootOptions}+</div>
        <div className="text">Shoot Options</div>
      </div>

      <div className="info-item">
        <div className="number">{naturalSets}+</div>
        <div className="text">Natural Sets</div>
      </div>
      
      <div className="info-item">
        <div className="number">{bookingMandatory}%</div>
        <div className="text">Booking Mandatory</div>
      </div>

      <div className="info-item">
        <div className="number">{happyCustomers}+</div>
        <div className="text">Happy customers</div>
      </div>

      <div className="info-item">
        <div className="number">{serviceAvailable}/7</div>
        <div className="text">Service Available</div>
      </div>

      <div className="info-item">
        <div className="number">{friendlyEnvironment}%</div>
        <div className="text">Friendly Environment</div>
      </div>
    </div>
  );
}

export default Info;
