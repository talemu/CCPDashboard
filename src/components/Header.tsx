import React from "react";
import { FaSearch, FaBell, FaCog, FaUser } from "react-icons/fa";
import "./styling/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/assets/Screenshot 2025-07-17 123101.png"
          alt="Accenture Icon"
          className="header-logo"
        />
        <h1 className="header-title">Accenture cockpit</h1>
      </div>
      <div className="header-right">
        <span className="header-icon" title="Search">
          <FaSearch />
        </span>
        <span className="header-icon" title="Notifications">
          <FaBell />
        </span>
        <span className="header-icon" title="Settings">
          <FaCog />
        </span>
        <span className="header-icon" title="Profile">
          <FaUser />
        </span>
      </div>
    </header>
  );
};

export default Header;
