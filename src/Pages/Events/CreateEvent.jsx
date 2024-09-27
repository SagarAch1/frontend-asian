import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createEventApi } from "../../apis/Api";

const Event = () => {
  const navigate = useNavigate();

  // Define state for form fields
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState(""); // For event time
  const [eventLocation, setEventLocation] = useState(""); // For event location
  const [eventImage, setEventImage] = useState(null); // For file upload
  const [previewImage, setPreviewImage] = useState(null);

  // Handle file input
  const handleImage = (event) => {
    const file = event.target.files[0];
    setEventImage(file);
    setPreviewImage(URL.createObjectURL(file)); // Preview the selected image
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(); // Use FormData for file uploads
    formData.append("eventName", eventName);
    formData.append("eventType", eventType);
    formData.append("eventDate", eventDate);
    formData.append("eventTime", eventTime); // Add event time
    formData.append("eventLocation", eventLocation); // Add event location
    formData.append("eventImage", eventImage);

    try {
      const response = await createEventApi(formData); // Sending FormData to API
      if (response.status === 201) {
        toast.success("Event created successfully!");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error("Failed to create event.");
      console.error(error);
    }
  };

  // Styling
  const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    marginTop: "50px",
  };

  const formContainerStyle = {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    fontWeight: 700,
    color: "#343a40",
    marginBottom: "30px",
    fontSize: "1.8rem",
  };

  const labelStyle = {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#495057",
    display: "block",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ced4da",
    borderRadius: "5px",
    fontSize: "1rem",
    marginBottom: "15px",
  };

  const fileInputStyle = {
    display: "block",
    marginBottom: "15px",
    padding: "10px 0",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="eventName" style={labelStyle}>
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="eventType" style={labelStyle}>
              Event Type
            </label>
            <input
              type="text"
              id="eventType"
              placeholder="Enter event type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="eventDate" style={labelStyle}>
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="eventTime" style={labelStyle}>
              Event Time
            </label>
            <input
              type="time"
              id="eventTime"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="eventLocation" style={labelStyle}>
              Event Location
            </label>
            <input
              type="text"
              id="eventLocation"
              placeholder="Enter event location"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="eventImage" style={labelStyle}>
              Event Image
            </label>
            <input
              type="file"
              id="eventImage"
              accept="image/*"
              onChange={handleImage} // Capture the file and preview it
              style={fileInputStyle}
              required
            />
          </div>

          {previewImage && (
            <div>
              <h5 style={{ marginBottom: "10px" }}>Image Preview:</h5>
              <img src={previewImage} alt="Event Preview" style={{ width: "100%", borderRadius: "8px" }} />
            </div>
          )}

          <button type="submit" style={buttonStyle}>
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Event;
