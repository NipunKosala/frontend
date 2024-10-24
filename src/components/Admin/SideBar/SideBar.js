import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClipboardList, faCalendarAlt, faChartBar, faHistory, faUsers } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/admin-dashboard"><i className="icon-dashboard"><FontAwesomeIcon icon={faTachometerAlt} /></i> Dashboard</Link></li>
                <li><Link to="/manage-reservations"><i className="icon-reservations"><FontAwesomeIcon icon={faClipboardList} /></i> Reservations</Link></li>
                <li><Link to="/calendar"><i className="icon-calendar"><FontAwesomeIcon icon={faCalendarAlt} /></i> Event Calendar</Link></li>
                <li><Link to="/reports"><i className="icon-reports"><FontAwesomeIcon icon={faChartBar} /></i> Reports</Link></li>
                <li><Link to="/history"><i className="icon-history"><FontAwesomeIcon icon={faHistory} /></i> History</Link></li>
                <li><Link to="/manage-users"><i className="icon-users"><FontAwesomeIcon icon={faUsers} /></i> Manage Users</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;
