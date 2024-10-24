import React from 'react';
import './Sidebar.css';

function Sidebar({ onSectionChange }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onSectionChange('Dashboard')}>
          <i className="fas fa-tachometer-alt"></i> {/* Dashboard icon */}
          Dashboard
        </li>
        <li onClick={() => onSectionChange('Event Calendar')}>
          <i className="fas fa-calendar-alt"></i> {/* Event Calendar icon */}
          Event Calendar
        </li>
        <li onClick={() => onSectionChange('Reports')}>
          <i className="fas fa-chart-line"></i> {/* Reports icon */}
          Reports
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
