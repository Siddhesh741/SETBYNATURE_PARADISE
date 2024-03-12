import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css"; // Import your custom CSS file

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="brand">
          <h1>Taranginii Agro Farms & </h1>
          <h3>Set By Nature Paradise</h3>
        </div>{" "}
      </div>
      <div className="navbar-right">
        <FaBars className="menu-icon" onClick={toggleMenu} />
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <NavItem to="/" onClick={toggleMenu}>Home</NavItem>
          <NavItem to="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem to="/features" onClick={toggleMenu}>Features</NavItem>
          <NavItem to="/contact" onClick={toggleMenu}>Contact</NavItem>
          <NavItem to="/destinations" onClick={toggleMenu}>Destinations</NavItem>
          <NavItem to="/admin" onClick={toggleMenu}>Admin</NavItem>
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
