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
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/features">Features</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/destinations">Destinations</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <li>
      <NavLink to={to} className="menu-item" activeClassName="active" exact>
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
