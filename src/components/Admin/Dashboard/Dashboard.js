import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import axios from 'axios';
import topImage from '../../images/header2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faClipboardCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalReservations: 0,
        totalRevenue: 0,
    });
    const [pendingReservations, setPendingReservations] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        // Fetch stats for total users, reservations, and revenue
        axios.get('http://localhost:8080/admin/stats')
            .then(response => {
                setStats(response.data.body);
            });
        
        // Fetch pending reservations
        axios.get('http://localhost:8080/reservation/get/admin-pending')
            .then(response => {
                setPendingReservations(response.data);
                console.log(response.data)
            });
    }, []);

    const handleViewClick = (reservation) => {
        navigate('/application-form', { state: { reservation } });
    };
    
    
    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <img src={topImage} alt="Banner" />
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <i className="icon-users"><FontAwesomeIcon icon={faUsers} /></i>
                        <h3>Total Users</h3>
                        <p>{stats.numberOfUsers}</p>
                    </div>
                    <div className="stat-card">
                        <i className="icon-reservations"> <FontAwesomeIcon icon={faClipboardCheck} /></i>
                        <h3>Total Reservations</h3>
                        <p>{stats.numberOfReservations}</p>
                    </div>
                    <div className="stat-card">
                        <i className="icon-revenue"><FontAwesomeIcon icon={faDollarSign} /></i>
                        <h3>Total Revenue</h3>
                        <p>Rs. {stats.totalRevenue}</p>
                    </div>
                </div>
            </div>
            <div className="pending-reservations-card">
                <h2>Pending Reservation Requests</h2>
                <p className="pending-count">{pendingReservations.length}</p>
                <table className="reservations-table">
                    <thead>
                        <tr>
                            <th>Name of the Organization</th>
                            <th>Name of the Applicant</th>
                            <th>Event Type</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingReservations.map(reservation => (
                            <tr key={reservation.reservationId} className={reservation.isClosed ? 'closed' : ''}>
                                <td>{reservation.organizationName}</td>
                                <td>{reservation.applicantName}</td>
                                <td>{reservation.eventType}</td>
                                <td>{reservation.reservedDate}</td>
                                <td>
                                    <button className="view" onClick={() => handleViewClick(reservation)}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
