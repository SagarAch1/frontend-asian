import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Predeparturesupport = () => {
  // State to track hovered buttons for visa requirements section
  const [hoveredVisaButton, setHoveredVisaButton] = useState(null);

  // State to track hovered buttons for Learn More section
  const [hoveredLearnMoreButton, setHoveredLearnMoreButton] = useState(null);

  const navigate = useNavigate(); // Create navigate instance

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

  const handleMouseEnterVisa = (index) => {
    setHoveredVisaButton(index);
  };

  const handleMouseLeaveVisa = () => {
    setHoveredVisaButton(null);
  };

  const handleMouseEnterLearnMore = (index) => {
    setHoveredLearnMoreButton(index);
  };

  const handleMouseLeaveLearnMore = () => {
    setHoveredLearnMoreButton(null);
  };

  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the provided path
  };

  const visaButtons = [
    { text: "Student health cover", path: "/formpage" },
    {
      text: "Accommodation services",
      path: "/formpage",
    },
    {
      text: "Guardianship referral",
      path: "/guradianship",
    },
  ];

  const learnMoreButtons = [
    { text: "Why choose AIEC-Global?", path: "/whychooseus" },
    { text: "Study abroad counseling", path: "/studyabroadcounseling" },
    { text: "Pre-departure support", path: "/predeparturesupport" },
    { text: "What we do?", path: "/whatwedo" },
    { text: "Events", path: "/upcommingevents" },
    { text: "How to find a course", path: "/howtofindcourse" },
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
          src="/assets/images/allf.jpeg"
          alt="Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* Content Section */}
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>Pre-departure support by AIEC-Global</h2>
        <p style={subtitleStyle}>
          We are committed to providing continuous assistance throughout your
          entire journey of studying abroad. Preparing properly for your
          international education is critical to achieving success. Our mission
          is to supply you with the essential resources that will contribute to
          a rewarding study experience.
        </p>
        <p style={subtitleStyle}>
          Our advisors are always available to answer your questions and ease
          any concerns. We conduct pre-departure orientations throughout the
          year to help you prepare for life in your chosen destination.
        </p>
        <h3 style={titleStyle}>Moving from visitor to resident:</h3>
        <p style={paragraphStyle}>
          These orientation sessions aim to guide you in making the most of
          personal and cultural development opportunities while abroad.
        </p>
        <p style={paragraphStyle}>You will learn about:</p>
        <p style={paragraphStyle}>
          1. Local culture: Gaining an understanding of local customs and
          traditions before arriving helps ease your adjustment and promotes
          positive interactions with classmates from diverse backgrounds.
        </p>
        <p style={paragraphStyle}>
          2. Student life in your new country: Adapting to different educational
          styles, classroom settings, and cultural practices is essential for a
          successful academic experience.
        </p>
        <p style={paragraphStyle}>
          3. Coping with culture shock: Moving to a new culture may result in
          culture shock. We will help you recognize this and offer strategies to
          manage and thrive.
        </p>
        <p style={paragraphStyle}>
          4. Support systems: Having access to academic resources, English
          language assistance, visa support, and other essential services is
          crucial for international students. We provide practical guidance on
          topics like:
        </p>
        <p style={paragraphStyle}>
          5. Banking and currency exchange: Setting up a local bank account as
          soon as you arrive ensures that you can easily manage funds for
          tuition, housing, and everyday expenses.
        </p>
        <p style={paragraphStyle}>
          6. Working while studying and internship opportunities: Enhance your
          study experience with part-time jobs. We’ll assist you in
          understanding student visa regulations and share tips for finding
          employment.
        </p>
        <p style={paragraphStyle}>
          7. A network of advice: Connect with AIEC-Global alumni and fellow
          students to gain valuable insights and advice.
        </p>
        <p style={paragraphStyle}>
          Our aim is to ensure a smooth transition for you as you embark on your
          academic journey abroad.
        </p>

        <h3 style={titleStyle}>Find out more about pre-departure support</h3>

        {/* Visa Requirements Button Section */}
        <div style={buttonGroupStyle}>
          {visaButtons.map((button, index) => (
            <button
              key={index}
              style={
                hoveredVisaButton === index
                  ? { ...buttonStyle, ...buttonHoverStyle }
                  : buttonStyle
              }
              onMouseEnter={() => handleMouseEnterVisa(index)}
              onMouseLeave={handleMouseLeaveVisa}
              onClick={() => handleButtonClick(button.path)}
            >
              {button.text}
            </button>
          ))}
        </div>

        <h3 style={titleStyle}>Explore More</h3>

        {/* Learn More Button Section */}
        <div style={buttonGroupStyle}>
          {learnMoreButtons.map((button, index) => (
            <button
              key={index}
              style={
                hoveredLearnMoreButton === index
                  ? { ...buttonStyle, ...buttonHoverStyle }
                  : buttonStyle
              }
              onMouseEnter={() => handleMouseEnterLearnMore(index)}
              onMouseLeave={handleMouseLeaveLearnMore}
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

export default Predeparturesupport;
