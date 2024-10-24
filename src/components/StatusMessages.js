import React from 'react';
import './StatusMessages.css';

const notifications = [
  { message: 'Your form has submitted successfully.', date: 'August 15, 2024' },
  { message: 'Your form has approved. Pay advance fee to reserve the auditorium.', date: 'August 16, 2024' },
  { message: 'Payment for advance fee has done successfully.', date: 'August 17, 2024' },
];

function NotificationPage() {
  return (
    <div className="notification-page">
      {/* Loop through the notifications and display them in cards */}
      {notifications.map((notification, index) => (
        <div key={index} className="notification-card">
          <div className="notification-text">{notification.message}</div>
          <div className="notification-date">{notification.date}</div>
        </div>
      ))}
    </div>
  );
}

export default NotificationPage;
