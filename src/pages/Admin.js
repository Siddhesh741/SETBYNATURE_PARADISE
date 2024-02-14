import React, { useState } from 'react';
import './Admin.css'; // Import CSS for styling (create this file)
//import AdminDashboard from './AdminDashboard'; // Import the admin dashboard component
import ItemsPage from './ItemPage';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Authenticate the admin (replace this logic with actual authentication)
    if (username === 'l' && password === 'l') {
      setLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  if (loggedIn) {
    return <ItemsPage />;
  }

  return (
    <div className="admin-login-wrapper"> {/* Wrapper for centering */}
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Admin;
