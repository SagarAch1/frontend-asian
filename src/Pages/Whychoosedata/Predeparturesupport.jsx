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
    { text: "Student health cover", path: "/usa-visa" },
    {
      text: "Accommodation services",
      path: "/uk-visa",
    },
    {
      text: "Guardianship referral",
      path: "/guradianship",
    },
  ];

  const learnMoreButtons = [
    { text: "Why choose AIEC?", path: "/whychooseus" },
    { text: "Study abroad counseling", path: "/studyabroadcounseling" },
    { text: "Pre-departure support", path: "/predeparturesupport" },
    { text: "What we do?", path: "/whatwedo" },
    { text: "Events", path: "/events" },
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
          src="/path/to/your/banner-image.jpg"
          alt="Banner"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Content Section */}
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>Pre-departure support by AIEC</h2>
        <p style={subtitleStyle}>
          We're dedicated to providing unwavering support throughout your entire
          study abroad journey. Effective preparation for your overseas studies
          is essential for your success. We aim to equip you with the necessary
          tools to ensure an enriching study experience.
        </p>
        <p style={subtitleStyle}>
          Our counselors are readily available to address your queries and calm
          your nerves. We conduct pre-departure briefings year-round to aid you
          in gearing up for life in your chosen destination.
        </p>
        <h3 style={titleStyle}>Transitioning from visiting to belonging:</h3>
        <p style={paragraphStyle}>
          These pre-departure orientation sessions are designed to help you
          navigate personal and cultural growth opportunities during your time
          abroad.
        </p>
        <p style={paragraphStyle}>You'll gain insights into:</p>
        <p style={paragraphStyle}>
          1. Local culture: Acquiring knowledge about local customs and culture
          before arriving in your study country eases your transition and
          fosters effective interactions with classmates from various
          backgrounds.
        </p>
        <p style={paragraphStyle}>
          2. Student life in your new country: Adapting to diverse learning
          styles, classroom environments, and cultural norms is crucial for a
          successful study experience.
        </p>
        <p style={paragraphStyle}>
          3. Culture shock: Adjusting to a new culture may bring about culture
          shock. We'll help you recognize it and provide techniques to cope and
          thrive.
        </p>
        <p style={paragraphStyle}>
          4. Support and well-being: Access to academic assistance, English
          language support, visa guidance, and more is vital for international
          students. Practical insights on:
        </p>
        <p style={paragraphStyle}>
          5. Banking and foreign exchange: Setting up a local bank account upon
          arrival ensures easy access to funds for tuition, accommodation, and
          living expenses.
        </p>
        <p style={paragraphStyle}>
          6.Working while studying and internship advice: Supplement your study
          experience with work opportunities. We'll guide you on adhering to
          student visa regulations and offer job-search tips.
        </p>
        <p style={paragraphStyle}>
          7. A network of advice: Connect with AIEC alumni and fellow students
          to gather valuable insights and advice.
        </p>
        <p style={paragraphStyle}>
          We're committed to ensuring your seamless transition into a fulfilling
          study abroad experience.
        </p>

        <h3 style={titleStyle}>Learn more about pre-departure support</h3>

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
              onClick={() => handleButtonClick(button.path)} // Navigate to the corresponding path
            >
              {button.text}
            </button>
          ))}
        </div>

        <h3 style={titleStyle}>Learn More</h3>

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
