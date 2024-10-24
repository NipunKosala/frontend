import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'

const Navbar = () => {
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
        <a href="/" className="navbar-link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
