import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { getEventApi } from "../../apis/Api"; 
import './Event.css'; // Importing the component-specific CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]); 
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    getEventApi()
      .then((res) => {
        setEvents(res.data.event || []); 
      })
      .catch((error) => {
        console.error("Failed to fetch events:", error);
      });
  }, []);

  // Handle navigation to /viewandregister
  const handleViewAndRegisterClick = () => {
    navigate("/viewandregister"); // Use navigate instead of history.push
  };

  return (
    <div className="upcoming-event-container mt-5 pt-5 p-3 bg-light text-center">
      <h2>Upcoming Events</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div className="col" key={event._id}>
              <div className="upcoming-event-card">
                <div className="upcoming-event-card-header">
                  <img
                    src={`http://localhost:5000/event/${event.eventImage}`} 
                    className="upcoming-event-image"
                    alt="Event"
                  />
                </div>
                <div className="upcoming-event-card-body">
                  <span className="upcoming-event-type">{event.eventType}</span>
                  <h5 className="upcoming-event-title">{event.eventName}</h5>
                  
                  {/* Time with Clock Icon */}
                  <p className="upcoming-event-date">
                    <FontAwesomeIcon icon={faClock} className="icon-clock" />{" "}
                    {new Date(event.eventDate).toDateString()} - {new Date(event.eventDate).toLocaleTimeString()}
                  </p>

                  {/* Location with Location Icon */}
                  <p className="upcoming-event-location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-location" />{" "}
                    {event.eventLocation}
                  </p>

                  {/* Add country flag icons if available */}
                  <p className="upcoming-event-country">
                    {event.eventCountries && event.eventCountries.includes("CA") && (
                      <img src="canada-flag.png" alt="Canada" className="icon" />
                    )}
                    {event.eventCountries && event.eventCountries.includes("US") && (
                      <img src="usa-flag.png" alt="USA" className="icon" />
                    )}
                  </p>
                  <p className="upcoming-event-level">{event.eventLevel}</p>
                </div>
                <div className="upcoming-event-card-footer">
                  <button
                    onClick={handleViewAndRegisterClick}
                    className="upcoming-event-register-button"
                  >
                    View and Register
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
