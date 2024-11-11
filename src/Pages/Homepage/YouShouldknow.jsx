import React from "react";
import { useNavigate } from "react-router-dom";

const Youshouldknow = () => {
  const navigate = useNavigate(); // Correct usage of useNavigate hook

  const mainImageStyle = {
    width: "100%",
    maxWidth: "400px",
    marginRight: "20px",
    borderRadius: "8px",
  };

  const sideImageStyle = {
    width: "100px",
    height: "100px",
    marginRight: "15px",
    borderRadius: "8px",
  };

  const infoSectionStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
  };

  const sectionTitleStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  };

  const infoContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const infoLeftStyle = {
    flex: 2,
    display: "flex",
    alignItems: "center",
    cursor: "pointer", // Add cursor pointer for clickable elements
  };

  const infoRightStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const infoBoxStyle = {
    display: "flex",
    marginBottom: "20px",
    cursor: "pointer", // Add cursor pointer for clickable elements
  };

  const infoTextHeaderStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#0056b3",
  };

  const infoTextParagraphStyle = {
    fontSize: "14px",
    color: "#666",
  };

  return (
    <div style={infoSectionStyle}>
      <h2 style={sectionTitleStyle}>You should also know</h2>
      <div style={infoContainerStyle}>
        {/* Global Events Section */}
        <div
          style={infoLeftStyle}
          onClick={() => navigate("/upcommingevents")} // Navigate to /events
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/you1.png`}
            alt="Global events"
            style={mainImageStyle}
          />
          <div>
            <h3 style={infoTextHeaderStyle}>Global events</h3>
            <p style={infoTextParagraphStyle}>
              At our global events, you’ll have the opportunity to connect with
              university representatives in person to discuss your study
              options, future opportunities, and much more.
            </p>
          </div>
        </div>
        <div style={infoRightStyle}>
          {/* FastLane Section */}
          <div
            style={infoBoxStyle}
            onClick={() => navigate("/upcommingevents")} // Navigate to /liveevent
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/you2.jpeg`}
              alt="Live life in the FastLane"
              style={sideImageStyle}
            />
            <div>
              <h4 style={infoTextHeaderStyle}>Live life in the FastLane</h4>
              <p style={infoTextParagraphStyle}>
              Receive an instant response from your dream university in just seconds!
              </p>
            </div>
          </div>
          {/* Visa Application Assistance Section */}
          <div
            style={infoBoxStyle}
            onClick={() => navigate("/visaapplicationassistance")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/you3.webp`}
              alt="Visa application assistance"
              style={sideImageStyle}
            />
            <div>
              <h4 style={infoTextHeaderStyle}>Visa application assistance</h4>
              <p style={infoTextParagraphStyle}>
              Visa applications can be complex, but our team provides precise information to make the process easier for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youshouldknow;
