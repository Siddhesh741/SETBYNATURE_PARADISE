import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assets/img/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [iconColor, setIconColor] = useState("white");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // Change icon color when menu is toggled
    setIconColor(showMenu ? "white" : "yellow");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="brand">
          <img src={img} alt="Logo" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} />
          <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <h4 className="name" style={{ marginBottom: '0' }}>Tarangini Agro Farms & </h4>
            <h4 className="subtitle">Sets By Nature Paradise</h4>
          </div>
        </div>{" "}
      </div>

      <div className="navbar-right">
        {showMenu ? (
          <FaTimes className="close-icon" onClick={toggleMenu} style={{ color: iconColor }} />
        ) : (
          <FaBars className="menu-icon" onClick={toggleMenu} style={{ color: iconColor }} />
        )}
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <NavItem to="/" onClick={toggleMenu}>Home</NavItem>
          <NavItem to="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem to="/features" onClick={toggleMenu}>Features</NavItem>
          <NavItem to="/Oursets" onClick={toggleMenu}>Our Sets</NavItem>
          <NavItem to="/contact" onClick={toggleMenu}>Contact</NavItem>
          <NavItem to="/destinations" onClick={toggleMenu}>Destinations</NavItem>
          <NavItem to="/admin" onClick={toggleMenu}>Login</NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children, onClick }) => {
  return (
    <li>
      <NavLink to={to} className="menu-item" activeClassName="active" exact onClick={onClick}>
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
