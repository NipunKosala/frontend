import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="University Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">
          RABINDRANATH TAGORE MEMORIAL AUDITORIUM AT UNIVERSITY OF RUHUNA
        </span>
      </div>
      <div className="navbar-right">
        <a href="/vc-login" className="navbar-link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </a>
        <a href="/notifications" className="navbar-link">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <span>Notifications</span>
        </a>
        <a href="/user" className="navbar-link">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>User Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
