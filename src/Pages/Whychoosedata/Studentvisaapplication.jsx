import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Studentvisaapplication = () => {
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
    { text: "Student visa requirements for the USA", path: "/usavisarequirement" },
    {
      text: "Student visa requirements for the UK",
      path: "/uk-visa",
    },
    {
      text: "Student visa requirements for Australia",
      path: "/australia-visa",
    },
    { text: "Student visa requirements for Canada", path: "/canada-visa" },
    { text: "Student visa requirements for New Zealand", path: "/nz-visa" },
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
          Applying for visas can sometimes feel challenging, but our team is
          dedicated to providing you with accurate information and guidance
          throughout the process.
        </p>
        <h3 style={titleStyle}>
          When should you apply for your student visa?{" "}
        </h3>
        <p style={paragraphStyle}>
          You can generally begin your student visa application once you receive
          confirmation of your enrolment in your chosen school or university.
        </p>
        <p style={paragraphStyle}>
          It is best to apply as early as possible, regardless of when your
          program is due to start, as visa processing times can vary.
        </p>
        <h3 style={titleStyle}>How do you apply for a student visa?</h3>
        <p style={paragraphStyle}>
          There are several steps to apply for a student visa. The order of
          these steps and how you complete them may vary according to where you
          are planning to study.
        </p>
        <p style={paragraphStyle}>Most students will require:</p>
        <p style={paragraphStyle}>
          1. Proof of enrolment in a recognised educational institution.
        </p>
        <p style={paragraphStyle}>
          2. Proof of your capacity to cover the cost of air fares, course
          tuition fees and living costs for you and your family members for the
          duration of your stay.
        </p>
        <p style={paragraphStyle}>
          3. A passport valid for at least six months beyond your period of
          stay.
        </p>
        <p style={paragraphStyle}>
          4. You may also be required to show evidence of your English language
          proficiency and undertake health examinations and/or police checks.
        </p>
        <h3 style={titleStyle}>
          How can AIEC help with your visa applications?
        </h3>
        <p style={paragraphStyle}>
          Your AIEC counsellor can provide you with information about what
          documents you will need to provide.
        </p>
        <p style={paragraphStyle}>
          All documents need to be scanned and certified, and certified
          translations may be required. Your counsellor can help with the
          translation services.
        </p>
        <p style={paragraphStyle}>
          As visa requirements can change quickly, we will ensure you have
          access to official websites and can make sure you have the latest
          application forms.
        </p>
        <p style={paragraphStyle}>
          To reduce the hassle, we can also help with translating and couriering
          your documents.
        </p>
        <p style={paragraphStyle}>
          The processes and requirements that international students must meet
          to be eligible for a student visa vary from one country to another.
        </p>
        <p style={paragraphStyle}>
          We can help you stay up to date with the latest information on visa
          requirements.
        </p>
        <h3 style={titleStyle}>Find out more about visa requirements</h3>

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

export default Studentvisaapplication;
