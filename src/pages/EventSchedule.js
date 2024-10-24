import React, { useState, useEffect } from 'react';

const EventSchedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the event data from an API or database
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching event data:', error));
  }, []);

  return (
    <div>
      <h1>Event Schedule</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.name}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSchedule;
