import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import img from "../assets/img/Logo.jpg";
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
    <img src={img} alt="Logo" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }} />
    <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <h4 className="name" style={{ marginBottom: '0' }}>Taranginii Agro Farms & </h4>
          <h4 className="subtitle">Set By Nature Paradise</h4>
    </div>
  </div>{" "}
</div>


      <div className="navbar-right">
        <FaBars className="menu-icon" onClick={toggleMenu} />
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <NavItem to="/" onClick={toggleMenu}>Home</NavItem>
          <NavItem to="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem to="/features" onClick={toggleMenu}>Features</NavItem>
          <NavItem to="/Oursets" onClick={toggleMenu}>Our Sets</NavItem>
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
