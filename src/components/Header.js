import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Header.css';
import logo from '../assets/logo.png'; 

function Header() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle bell icon click
  const handleBellClick = () => {
    navigate('/notifications'); // Navigate to the notifications page
  };


  // Function to handle bell icon click
  const handleuserClick = () => {
    navigate('/booking'); // Navigate to the notifications page
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>Welcome!</h1>
      <div className="header-icons">
        <span className="notification-bell" onClick={handleBellClick}>
          <i className="fas fa-bell"></i> {/* Font Awesome bell icon */}
        </span>
        <span className="user-icon" onClick={handleuserClick}>
          <i className="fas fa-user"></i> {/* Font Awesome user icon */}
        </span>
      </div>
    </header>
  );
}

export default Header;
