import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEventApi } from "../../apis/Api";
import axios from "axios";
import { toast } from "react-toastify";

const Event = () => {
  const navigate = useNavigate();
  const url = process.env.API_URL || "https://api.asian.edu.np";

  const handleClick = () => {
    navigate("/event"); // Redirect to the route for adding a new event
  };

  // State for storing fetched events
  const [events, setEvents] = useState([]);

  // Call the API to fetch all events initially (Page Load)
  useEffect(() => {
    getEventApi()
      .then((res) => {
        // Set the fetched events to state
        setEvents(res.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to delete an event
  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`${url}/api/event/delete-event/${eventId}`);
      toast.success("Event deleted successfully");
      // Refresh the event list after deletion
      setEvents(events.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "40px",
            marginLeft: "20px",
            borderRadius: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create Event
        </button>
      </div>

      <table
        className="table mt-2"
        style={{
          marginTop: "20px",
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: "0",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid black", // Set border color of the table
        }}
      >
        <thead
          className="table-primary"
          style={{ backgroundColor: "#343a40", color: "black" }}
        >
          <tr>
            <th style={tableHeaderStyle}>Event Name</th>
            <th style={tableHeaderStyle}>Event Type</th>
            <th style={tableHeaderStyle}>Event Date</th>
            <th style={tableHeaderStyle}>Event Time</th>
            <th style={tableHeaderStyle}>Event Location</th>
            <th style={tableHeaderStyle}>Event Image</th>
            <th style={tableHeaderStyle}>Event Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.eventName}</td>
              <td>{event.eventType}</td>
              <td>{event.eventDate}</td>
              <td>{event.eventTime}</td>
              <td>{event.eventLocation}</td>
              <td>
                <img
                  src={`${url}/event/${event.eventImage}`}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
              </td>
              <td>
                <button
                  onClick={() => deleteEvent(event._id)}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Style object for table headers and cells
const tableHeaderStyle = {
  padding: "12px",
  border: "1px solid black", // Set border color of table headers
  textAlign: "left",
};

export default Event;
