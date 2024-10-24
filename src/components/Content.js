import React, { useState } from "react";
import "./Content.css";
import backgroundImage from "../assets/background.jpg"; // Background image import
import EventCalendar from "./EventCalendar"; // Import the Event Calendar component
import NotificationPage from './StatusMessages'; // Import the NotificationPage component

function Content({ activeSection }) { // Accept activeSection prop
  // State to track the clicked row index
  const [clickedRowIndex, setClickedRowIndex] = useState(null);

  // Sample data for the table
  const reservations = [
    { organization: "ABC", applicant: "John Doe", eventType: "Stage Drama", date: "22/08/2024" },
    { organization: "XYZ", applicant: "Jane Smith", eventType: "Concert", date: "22/09/2024" }
  ];

  // Handler for row click
  const handleRowClick = (index) => {
    setClickedRowIndex(index);
  };

  return (
    <div className="content">
      {/* White Card Container for Pending Reservation Requests Header with background image */}
      {activeSection !== 'Event Calendar' && activeSection !== 'NotificationPage' && (
        <div className="pending-requests-card" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
          <div className="card-background">
            <h2>Pending Reservation Requests</h2>
            <div className="request-count">2</div>
          </div>
        </div>
      )}

      {/* Conditionally render content based on active section */}
      {activeSection === 'Event Calendar' ? (
        <EventCalendar /> // Render the Event Calendar component
      ) : activeSection === 'NotificationPage' ? (
        <NotificationPage /> // Render the Notification Page component
      ) : (
        // Table Section for Reservations
        <div className="pending-requests-table">
          <table>
            <thead>
              <tr>
                <th>Name of the <br /> organization</th>
                <th>Name of the <br /> applicant</th>
                <th>Event Type</th>
                <th>Date</th>
                <th>View to Approve <br /> or Reject</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(index)} 
                  style={{
                    backgroundColor: clickedRowIndex === index ? "red" : "transparent", 
                    color: clickedRowIndex === index ? "white" : "black", 
                  }}
                >
                  <td>{reservation.organization}</td>
                  <td>{reservation.applicant}</td>
                  <td>{reservation.eventType}</td>
                  <td>{reservation.date}</td>
                  <td><button className="view-button">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Content;
