import React, { useEffect, useState } from "react";
import { getEventApi } from "../../apis/Api"; // Correct API import

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]); // Initialize state as an empty array

  // Fetch events on component mount
  useEffect(() => {
    getEventApi() // Use your API function
      .then((res) => {
        setEvents(res.data.event || []); // Make sure to use the correct key "event"
      })
      .catch((error) => {
        console.error("Failed to fetch events:", error);
      });
  }, []);

  return (
    <div className="container mt-5 pt-5 p-3 bg-light text-center">
      <h2>Upcoming Events</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {events.length > 0 ? ( // Check if events are available
          events.map((event) => (
            <div className="col" key={event._id}>
              <div className="card">
                <div className="card-body">
                  <img
                     src={`http://localhost:5000/event/${event.eventImage}`} 
                    className="card-img-top fixed-size-image"
                    alt="Event"
                  />
                  <h5 className="card-title">{event.eventName}</h5>
                  <p className="card-text">{event.eventType}</p>
                  <p className="card-text">{new Date(event.eventDate).toDateString()}</p>
                  <p className="card-text">{event.eventLocation}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available at the moment.</p> // Fallback message if no events
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
