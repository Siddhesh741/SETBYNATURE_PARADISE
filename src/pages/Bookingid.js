import React, { useState } from 'react';

const SearchForm = ({ onSearch, onClear }) => {
  const [bookingId, setBookingId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateBookingId(bookingId)) {
      setError('');
      onSearch(bookingId);
    } else {
      setError('Booking ID must be exactly 6 digits long.');
    }
  };

  const handleClear = () => {
    setBookingId('');
    setError('');
    onClear();
  };

  const validateBookingId = (id) => {
    return /^\d{6}$/.test(id);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    if (!/^\d{0,6}$/.test(input)) {
      setError('Booking ID must be exactly 6 digits long.');
    } else {
      setBookingId(input);
      setError('');
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={handleChange}
          style={{
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: error ? '1px solid red' : '1px solid #ccc',
            width: '130px',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          style={{
            marginLeft: '10px',
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
        {error && <div style={{ color: 'red', marginLeft: '10px' }}>{error}</div>}
      </form>
    </div>
  );
};

const BookingDetails = ({ bookingData }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Booking Details</h2>
      <table style={{ margin: '0 auto' }}>
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


const Bookingid = () => {
  const [bookingData, setBookingData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearch = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/clients/bybookingId/${bookingId}`);
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
        setSuccessMessage('✅Congratulation Logged in Successfully !');
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

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Search Booking</h1>
      <SearchForm onSearch={handleSearch} onClear={handleClear} />
      {successMessage && <div style={{ color: 'green', marginTop: '10px', fontSize: '20px', textAlign: 'center' }}>{successMessage}</div>}
      {successMessage && <div style={{ marginTop: '5px', fontSize: '20px', textAlign: 'center' }}>If you want to make some changes in this, you can contact the admin Rahul Samgir</div>}
      {errorMessage && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{errorMessage}</div>}
      {bookingData && <BookingDetails bookingData={bookingData} />}
    </div>
  );
};

export default Bookingid;
