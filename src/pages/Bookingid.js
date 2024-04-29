import React, { useState } from 'react';
import config from "../config";
import './Bookingid.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ onSearch, onClear, errorMessage, successMessage }) => {
  const [bookingId, setBookingId] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(bookingId);
  };

  const handleClear = () => {
    setBookingId('');
    onClear();
  };

  const handleChange = (e) => {
    setBookingId(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="form-container">
        <input
          type="text"
          placeholder="Enter BookingID"
          value={bookingId}
          onChange={handleChange}
          className="input-field"
        />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="clear-button"
        >
          Clear
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

const BookingDetails = ({ bookingData }) => {
  return (
    <div>
      <h2>Your Booking Details</h2>
      <table className="booking-details-table">
        <tbody>
          {Object.entries(bookingData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Bookingid = ({ onClose }) => { // Pass onClose function as a prop
  const [bookingData, setBookingData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearch = async (bookingId) => {
    try {
      const response = await fetch(`${config.apiUrl}/clients/bybookingId/${bookingId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data && Object.keys(data).length === 0) {
        setErrorMessage('Booking ID not found. Please enter a correct booking ID.');
        setBookingData(null);
        setSuccessMessage('');
      } else {
        setBookingData(data);
        setErrorMessage('');
        setSuccessMessage('✅ Congratulation! Logged in Successfully.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage('Booking ID not found. Please enter a correct booking ID.');
      setBookingData(null);
      setSuccessMessage('');
    }
  };

  const handleClear = () => {
    setBookingData(null);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleGoBack = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="booking-container">
      {successMessage && (
        <div className="success-message-container">
          {successMessage}
        </div>
      )}
       <div className="back-button-container" onClick={handleGoBack}>
    <button className="back-button" >
      <FontAwesomeIcon icon={faArrowLeft} /> {/* Icon for back button */}
      Back
    </button>
  </div>
      <div style={{ textAlign: 'center', fontSize: '25px', width: '100%' }}>
        <h1>Search Booking</h1>
        <SearchForm 
          onSearch={handleSearch} 
          onClear={handleClear} 
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
        {bookingData && <BookingDetails bookingData={bookingData} />}
      </div>
    </div>
  );
};

export default Bookingid;
