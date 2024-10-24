import React, { useState, useEffect } from 'react';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking history from an API or database
    fetch('/api/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching booking history:', error));
  }, []);

  return (
    <div>
      <h1>Booking History</h1>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Booked By</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.eventName}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.bookedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
