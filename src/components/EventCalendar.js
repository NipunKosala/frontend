// EventCalendar.js
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the CSS for the calendar
import { format } from "date-fns"; 
import "./EventCalendar.css"; 

// Setting up the localizer by providing the moment Object to the correct localizer.
const localizer = momentLocalizer(require("moment"));

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Sample events data
    const sampleEvents = [
      {
        id: 0,
        title: "Board Meeting",
        start: new Date(2024, 8, 22, 10, 0), // 10:00 AM
        end: new Date(2024, 8, 22, 12, 0), // 12:00 PM
      },
      {
        id: 1,
        title: "Stage Drama Rehearsal",
        start: new Date(2024, 8, 23, 14, 0), // 2:00 PM
        end: new Date(2024, 8, 23, 16, 0), // 4:00 PM
      },
      {
        id: 2,
        title: "Concert",
        start: new Date(2024, 8, 24, 18, 0), // 6:00 PM
        end: new Date(2024, 8, 24, 21, 0), // 9:00 PM
      },
    ];

    setEvents(sampleEvents);
  }, []);

  return (
    <div className="event-calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }} 
        views={["month", "week", "day"]}
        step={30}
        timeslots={2}
        popup
        selectable
        onSelectEvent={(event) => alert(event.title)} 
        onSelectSlot={(slotInfo) =>
          alert(
            `Selected slot: \n\nstart ${format(slotInfo.start, "PPpp")} \nend: ${format(
              slotInfo.end,
              "PPpp"
            )}`
          )
        }
      />
    </div>
  );
};

export default EventCalendar;
