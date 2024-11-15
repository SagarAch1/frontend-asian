import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Whatwedo = () => {
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
    { label: "Events", path: "/upcommingevents" },
    { label: "How to find a course", path: "/browsesubject" },
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
        <h2 style={titleStyle}>What we do</h2>
        <p style={subtitleStyle}>
          Study abroad with someone who knows the way.
        </p>
        <p style={paragraphStyle}>
          AIEC is a recognized leader in international education services, with
          nearly 50 years of experience. We have the expertise and insight to
          assist you in fulfilling your aspirations of studying overseas.
        </p>
        <p style={paragraphStyle}>
          Thousands of students have benefited from our popular services, making
          their study abroad plans run smoothly.
        </p>
        <p style={paragraphStyle}>
          Our extensive range of services is designed to support every step of
          your educational journey. From providing course information to
          offering career guidance, we are committed to helping students thrive
          in their international studies and beyond.
        </p>

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

export default Whatwedo;
