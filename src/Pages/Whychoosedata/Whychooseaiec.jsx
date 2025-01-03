import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Whychooseaiec = () => {
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
    { label: "Visa application assistance", path: "/studentvisapplication" },
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
        <h2 style={titleStyle}>Why choose AIEC</h2>
        <p style={subtitleStyle}>
          AIEC is a leading organization in the field of international
          education. We assist students like you in pursuing higher education in
          English-speaking nations.
        </p>
        <p style={paragraphStyle}>
          Our large network of friendly and knowledgeable professionals helps
          you find and secure the perfect university or college where you can
          excel.
        </p>
        <p style={paragraphStyle}>
          We guide you to the right courses at the best universities in the
          ideal countries for your education. For over 12 years, we’ve been
          helping students, creating a broad network with offices in diffrent
          countries.
        </p>

        <h3 style={titleStyle}>
          Ready to begin your global journey? We're here to support you
        </h3>
        <p style={paragraphStyle}>
          AIEC partners with you to transform your study abroad aspirations into
          a successful international career and personal growth.
        </p>
        <p style={paragraphStyle}>
          We blend our years of expertise in the education field with
          cutting-edge technology to ensure you make well-informed decisions.
        </p>
        <p style={paragraphStyle}>
          With collaborations with various top universities across Australia,
          Canada, New Zealand, the UK, and the USA, we have access to more than
          hundred of courses and programs to find the right match for you.
        </p>
        <h3 style={titleStyle}>Your success is our priority</h3>
        <p style={paragraphStyle}>
          Need assistance in selecting the ideal course, completing your
          university application, or understanding visa processes?
        </p>
        <p style={paragraphStyle}>
          Your personal AIEC counsellor will guide you through every stage of
          your study abroad journey, offering support at every turn.
        </p>
        <p style={paragraphStyle}>
          We understand how exciting this transition can be not only for you but
          also for your family. Therefore, your AIEC counsellor will go above
          and beyond to assist both you and your loved ones throughout this
          journey.
        </p>
        <h3 style={titleStyle}>Accessible international education experts</h3>
        <p style={paragraphStyle}>
          Many of our AIEC counsellors were international students themselves.
        </p>
        <p style={paragraphStyle}>
          They are experts in international education, having gone through the
          same experiences you're facing right now.
        </p>
        <p style={paragraphStyle}>
          With firsthand knowledge of what it’s like to prepare for studying
          abroad, they are eager to share their insights and guide you.
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

export default Whychooseaiec;
