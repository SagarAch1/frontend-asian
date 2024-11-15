import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/visaaa.jpeg)`,
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
    { text: "Visa application assistance", path: "/studentvisapplication" },
    { text: "Living abroad support", path: "/livingabroadsupport" },
  ];

  return (
    <>
      {/* New container for Banner Section */}
      <div style={bannerStyle}></div>

      {/* Main content container */}
      <div style={containerStyle}>
        <div style={contentContainerStyle}>
          <h2 style={titleStyle}>
            Student visa application assistance by AIEC
          </h2>
          <p style={subtitleStyle}>
            Navigating the visa application process can be challenging, but our
            team is here to provide you with accurate guidance and continuous
            support every step of the way.
          </p>
          <h3 style={titleStyle}>
            When should you start applying for your student visa?
          </h3>
          <p style={paragraphStyle}>
            Generally, you can initiate your student visa application once your
            enrollment in the educational institution of your choice is
            confirmed.
          </p>
          <p style={paragraphStyle}>
            We recommend applying at the earliest opportunity, even if your
            program start date is later, as visa processing times can vary.
          </p>
          <h3 style={titleStyle}>
            What is the process for applying for a student visa?
          </h3>
          <p style={paragraphStyle}>
            Applying for a student visa involves several stages, and the
            specific sequence of these steps might depend on your intended study
            destination.
          </p>
          <p style={paragraphStyle}>
            Most students will generally need to submit the following:
          </p>
          <p style={paragraphStyle}>
            1. Verification of enrollment at a recognized educational
            institution.
          </p>
          <p style={paragraphStyle}>
            2. Evidence of funds to cover airfare, tuition fees, and living
            expenses for you and any dependents during your stay.
          </p>
          <p style={paragraphStyle}>
            3. A passport with a validity extending at least six months beyond
            your planned stay.
          </p>
          <p style={paragraphStyle}>
            4. You may also need to provide proof of English language skills and
            possibly undergo medical exams and/or a police background check.
          </p>
          <h3 style={titleStyle}>
            How can AIEC assist with your visa application?
          </h3>
          <p style={paragraphStyle}>
            Your AIEC advisor will help you understand which documents are
            required for your application submission.
          </p>
          <p style={paragraphStyle}>
            Given that visa regulations are subject to frequent updates, we will
            offer you the most current information and ensure access to official
            websites and necessary forms.
          </p>
          <p style={paragraphStyle}>
            Visa application requirements and procedures differ by country. We
            are dedicated to keeping you informed about the latest requirements.
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
                onClick={() => handleButtonClick(button.path)}
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
                onClick={() => handleButtonClick(button.path)}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>

        <FormPage />
      </div>
      <Footer />
    </>
  );
};

export default Visaapplicationassistance;
