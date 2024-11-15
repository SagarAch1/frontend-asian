import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Livingabroadsupport = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const containerStyle = {
    width: "100%",
    padding: "0", // Remove padding to ensure full-width alignment
    boxSizing: "border-box",
  };

  const bannerStyle = {
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "left",
    padding: "40px 20px",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  };

  const buttonGroupStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 buttons per row
    gap: "10px", // space between buttons
    maxWidth: "900px", // limit the width for the button group
    margin: "20px auto", // center the button group horizontally
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "2px solid #007bff",
    backgroundColor: "white",
    color: "#007bff",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
    flexGrow: 1, // make buttons have equal width
  };

  const buttonHoverStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  const buttons = [
    { label: "Why choose AIEC?", path: "/whychooseus" },
    { label: "Study abroad counseling", path: "/studyabroadcounseling" },
    { label: "Pre-departure support", path: "/predeparturesupport" },
    { label: "What we do?", path: "/whatwedo" },
    { label: "Events", path: "/events" },
    { label: "How to find a course", path: "/howtofindcourse" },
    {
      label: "Visa application assistance",
      path: "/studentvisapplication",
    },
    { label: "Living abroad support", path: "/livingabroadsupport" },
  ];

  return (
    <div style={containerStyle}>
      {/* Banner Section */}
      <div style={bannerStyle}>
        <img
          src="/assets/images/allf.jpeg"
          alt="Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Content Section */}
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>Living abroad support</h2>
        <p style={subtitleStyle}>
          After choosing your course, it’s time to get ready for an exciting
          international education experience. Moving to a new country comes with
          a lot to consider, such as visa applications, insurance, finances,
          housing, and possible work opportunities. Although this might feel
          overwhelming, AIEC’s experts are here to guide you through the entire
          process, ensuring a smooth transition.
        </p>

        <h3 style={titleStyle}>Support Services for International Students:</h3>
        <p style={paragraphStyle}>
          1. Arrival assistance: We help you adjust to your new environment and
          continue offering support throughout your stay. Our experienced
          counselors are available to assist you as you settle into your new home.
        </p>
        <p style={paragraphStyle}>
          2. Housing assistance: Whether you prefer university accommodation,
          shared apartments, or a homestay, AIEC will help you find safe and
          comfortable housing for your time abroad.
        </p>
        <p style={paragraphStyle}>
          3. Cultural integration: We help you understand and adapt to the local
          culture, offering advice on how to adjust to your new surroundings.
        </p>

        {/* YouTube Video Embed */}
        <div style={{ marginBottom: "30px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CjUdsR2JJ4w?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h3 style={titleStyle}>Learn More</h3>

        {/* Button Section */}
        <div style={buttonGroupStyle}>
          {buttons.map((button, index) => (
            <button
              key={index}
              style={
                hoveredButton === index
                  ? { ...buttonStyle, ...buttonHoverStyle }
                  : buttonStyle
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleButtonClick(button.path)} // Navigate to the button path on click
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <FormPage />
      <Footer />
    </div>
  );
};

export default Livingabroadsupport;
