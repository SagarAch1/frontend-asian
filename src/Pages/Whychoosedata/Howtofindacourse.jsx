import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Aboutaiec = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate(); // Create navigate instance

  const containerStyle = {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  };

  const bannerStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: 'url("/assets/images/aus.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    navigate(path); // Navigate to the provided path
  };

  const buttons = [
    { text: "Why choose AIEC?", path: "/whychooseus" },
    { text: "Study abroad counseling", path: "/studyabroadcounseling" },
    { text: "Pre-departure support", path: "/predeparturesupport" },
    { text: "What we do?", path: "/whatwedo" },
    { text: "Events", path: "/events" },
    { text: "How to find a course", path: "/how-to-find-course" },
    {
      text: "Visa application assistance",
      path: "/studentvisapplication",
    },
    { text: "Living abroad support", path: "/livingabroadsupport" },
  ];

  return (
    <div style={containerStyle}>
      {/* Banner Section */}
      <div style={bannerStyle}>
        <img
          src="/path/to/your/banner-image.jpg"
          alt="Banner"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Content Section */}
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>How to find a course</h2>
        <p style={subtitleStyle}>
          Navigating through numerous courses and universities while deciding
          where and what to study abroad can indeed be a formidable task. But
          rest assured, AIEC is here as your steadfast companion throughout this
          journey.
        </p>
        <p style={paragraphStyle}>
          Our experienced counselors are dedicated to comprehending your dreams
          and goals, striving to discover the perfect path for you. Delve into
          our subject guides below to unearth your strengths and pinpoint
          courses that resonate with your aspirations.
        </p>
        <p style={paragraphStyle}>
          Reach out to your nearest AIEC office anytime for a compassionate and
          free counseling session. Your aspirations matter to us!
        </p>
        <h2 style={titleStyle}>You can find course from here</h2>
        <button
          style={{
            ...buttonStyle,
            marginTop: "20px", // Add margin to separate the button from text
            display: "block", // Ensure button stays full-width
            margin: "20px auto",
            marginLeft: "20px", // Center the button horizontally
          }}
          onClick={() => handleButtonClick("/courseusa")} // Navigate to the course page
        >
          Find Course
        </button>

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
              onClick={() => handleButtonClick(button.path)} // Navigate to the corresponding path
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <FormPage />
      <Footer />
    </div>
  );
};

export default Aboutaiec;
