// Admin.js

import React, { useState } from "react";
import Footer from "./Footer";
import "./Admin.css"; // Import CSS for styling (create this file)
import ExpensesPage from "./ExpensesPage"; // Import the ExpensesPage component
import FoodPage from "./FoodPage"; // Import the FoodPage component
import SettlementPage from "./SettlementPage";
import InventoryPage from "./InventoryPage";
import CalendarPage from "./CalendarPage";
import { FaSignOutAlt } from "react-icons/fa";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInAdmin, setLoggedInAdmin] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const validCredentials = [
    { username: "", password: "", name: "Rahul Samgir" },
    { username: "u", password: "p2", name: "Umesh Samgir" },
    { username: "y", password: "p3", name: "Yogesh Samgir" },
    { username: "w", password: "p4", name: "Yashodhan Wadkar" },
    { username: "p", password: "p5", name: "Prachi Wadkar" },
    { username: "Y", password: "p6", name: "Yogita Samgir" },
    { username: "a", password: "p7", name: "Ashwini Samgir" },
  ];

  const handleLogin = () => {
    // Authenticate the admin (replace this logic with actual authentication)
    const user = validCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );
    if (user) {
      setLoggedIn(true);
      setLoggedInAdmin(user.name);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
    setLoggedIn(false);
    setLoggedInAdmin("");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <div className="welcome-container">
            <div className="welcome-message">
              <h2>
                Welcome, <span className="admin-name">{loggedInAdmin}</span>! 
             

              <button className="logout-button" onClick={handleLogout}>
              {" "}
              <FaSignOutAlt style={{ marginRight: "5px" }} /> 
              
            </button>
            </h2>
            </div>
            
            {/* Global category selection buttons */}
            <div className="category-buttons">
              <button
                onClick={() => handleCategorySelect("Expenses")}
                className={`category-button ${
                  selectedCategory === "Expenses" ? "active" : ""
                }`}
              >
                Expenses
              </button>
              <button
                onClick={() => handleCategorySelect("Settlement")}
                className={`category-button ${
                  selectedCategory === "Settlement" ? "active" : ""
                }`}
              >
                Settlement
              </button>
              <button
                onClick={() => handleCategorySelect("Food")}
                className={`category-button ${
                  selectedCategory === "Food" ? "active" : ""
                }`}
              >
                Food
              </button>
              <button
                onClick={() => handleCategorySelect("Inventory")}
                className={`category-button ${
                  selectedCategory === "Inventory" ? "active" : ""
                }`}
              >
                Inventory
              </button>
              <button
                onClick={() => handleCategorySelect("Calendar")}
                className={`category-button ${
                  selectedCategory === "Calendar" ? "active" : ""
                }`}
              >
                Calendar
              </button>
            </div>
          </div>
          {selectedCategory === "Expenses" && <ExpensesPage />}
          {selectedCategory === "Settlement" && <SettlementPage />}
          {selectedCategory === "Food" && <FoodPage />}
          {selectedCategory === "Inventory" && <InventoryPage />}
          {selectedCategory === "Calendar" && <CalendarPage />}
          {/* Add more conditions for other categories */}
        </div>
      ) : (
        <div className="admin-login-wrapper">
          {" "}
          {/* Wrapper for centering */}
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
      )}
      <Footer />
    </div>
  );
}

export default Admin;
