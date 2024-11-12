import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Visaapplicationassistance = () => {
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
    {
      text: "Student visa requirements for the USA",
      path: "/usavisarequirement",
    },
    {
      text: "Student visa requirements for the UK",
      path: "/ukvisarequirement",
    },
    {
      text: "Student visa requirements for Australia",
      path: "/australiavisarequirement",
    },
    {
      text: "Student visa requirements for Canada",
      path: "/canadavisarequirement",
    },
    {
      text: "Student visa requirements for New Zealand",
      path: "/newzelandvisarequirement",
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
        <h2 style={titleStyle}>Student visa application assistance by AIEC</h2>
        <p style={subtitleStyle}>
          The process of applying for visas may seem overwhelming, but our team
          is committed to providing you with precise guidance and support
          throughout the entire process.
        </p>
        <h3 style={titleStyle}>
          When should you start applying for your student visa?{" "}
        </h3>
        <p style={paragraphStyle}>
          You can typically start your student visa application once you receive
          confirmation of your enrollment in your chosen educational
          institution.
        </p>
        <p style={paragraphStyle}>
          It is advisable to apply as early as possible, regardless of when your
          program is set to begin, as visa processing times can differ.
        </p>
        <h3 style={titleStyle}>
          What is the process for applying for a student visa?
        </h3>
        <p style={paragraphStyle}>
          There are multiple steps involved in applying for a student visa. The
          order of these steps and how you proceed may depend on your
          destination country.
        </p>
        <p style={paragraphStyle}>
          Most students will need to provide the following:
        </p>
        <p style={paragraphStyle}>
          1. Proof of enrollment in a recognized educational institution.
        </p>
        <p style={paragraphStyle}>
          2. Proof of your ability to cover the costs of airfare, tuition fees,
          and living expenses for both you and your dependents throughout your
          stay.
        </p>
        <p style={paragraphStyle}>
          3. A passport valid for at least six months beyond your intended stay.
        </p>
        <p style={paragraphStyle}>
          4. You may also need to provide evidence of your English proficiency
          and undergo medical examinations and/or police clearance.
        </p>
        <h3 style={titleStyle}>
          How can AIEC assist with your visa application?
        </h3>
        <p style={paragraphStyle}>
          Your AIEC advisor will assist you by explaining which documents are
          required for submission.
        </p>
        <p style={paragraphStyle}>
          All documents need to be scanned and certified, and in some cases,
          certified translations may also be necessary. Your advisor can help
          facilitate translation services.
        </p>
        <p style={paragraphStyle}>
          Since visa requirements can change frequently, we will provide you
          with up-to-date information and ensure that you have access to the
          official websites and necessary forms.
        </p>
        <p style={paragraphStyle}>
          To make the process smoother, we also offer help with document
          translation and couriering.
        </p>
        <p style={paragraphStyle}>
          The requirements and procedures for obtaining a student visa vary from
          one country to another.
        </p>
        <p style={paragraphStyle}>
          We are here to help you stay informed about the most current visa
          requirements.
        </p>
        <h3 style={titleStyle}>Learn more about visa requirements</h3>

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

        <h3 style={titleStyle}>Discover More</h3>

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

export default Visaapplicationassistance;
