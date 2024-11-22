import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Studyabroadcounseling = () => {
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
    { label: "Why choose AIEC-Global?", path: "/whychooseus" },
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
        <h2 style={titleStyle}>Free study abroad counselling</h2>
        <p style={subtitleStyle}>
          Our expert advisors are available to assist you throughout the entire
          process, helping you find the ideal school and program that matches
          your preferences and financial capacity.
        </p>
        <p style={paragraphStyle}>
          With so many choices to consider, deciding where and what to study, as
          well as identifying the best application strategy for a better chance
          of acceptance, can feel overwhelming. Let us guide you in finding the
          perfect program and destination.
        </p>

        <h3 style={titleStyle}>Course selection and application</h3>
        <p style={paragraphStyle}>
          Our consultants are skilled in understanding your academic goals and
          identifying the most suitable course to match your career aspirations.
          With our state-of-the-art matching system, we can connect you with the
          best options from over 600 partner universities and institutions
          worldwide.
        </p>

        <h3 style={titleStyle}>Approachable and understanding</h3>
        <p style={paragraphStyle}>
          Our seasoned advisors truly understand your study goals. Many of them
          were international students themselves, so they can address any
          questions you may have based on real-life experiences.
        </p>

        <h3 style={titleStyle}>Communicate in your preferred language</h3>
        <p style={paragraphStyle}>
          If you feel more comfortable conversing in your native language, we
          have staff members who can communicate with you in a way that ensures
          you feel comfortable and understood.
        </p>

        <h3 style={titleStyle}>What can you expect?</h3>
        <p style={paragraphStyle}>
          During your first consultation, your advisor will cover these key
          points:
        </p>
        <p style={paragraphStyle}>
          1. Your academic history, interests, budget, timeline, and career or
          migration goals.
        </p>
        <p style={paragraphStyle}>2. Suitable courses that meet your needs.</p>
        <p style={paragraphStyle}>3. The application procedure.</p>
        <p style={paragraphStyle}>
          4. Visa considerations relevant to your plans.
        </p>
        <p style={paragraphStyle}>5. Upcoming events that may interest you.</p>

        <h3 style={titleStyle}>Submitting your applications</h3>
        <p style={paragraphStyle}>
          We provide you with the necessary application documents and guides for
          the courses you're applying to, while also ensuring that your
          supporting documents are certified.
        </p>
        <p style={paragraphStyle}>
          After preparing your application, we will submit it to the university
          or institution of your choice.
        </p>
        <p style={paragraphStyle}>
          You may then be invited to meet with a representative from the
          institution who will assess your application and discuss your
          eligibility.
        </p>
        <p style={paragraphStyle}>
          You could also attend our education seminars to ask about course
          structures and potential outcomes after graduation.
        </p>

        <h3 style={titleStyle}>Response from the institution</h3>
        <p style={paragraphStyle}>
          After submitting your application, expect a response within two to six
          weeks. If accepted, you will receive an offer letter from the
          institution.
        </p>
        <p style={paragraphStyle}>
          In some cases, an institution may provide an offer letter directly
          during your interview, which may be conducted either at our office or
          at one of AIEC-Global's global student events held throughout the
          year.
        </p>

        <h3 style={titleStyle}>Acceptance and payment</h3>
        <p style={paragraphStyle}>
          Once you receive an unconditional offer, you can accept it right away.
          Conditions for acceptance might include additional documentation, such
          as a recent IELTS result or proof of your latest academic transcript.
        </p>
        <p style={paragraphStyle}>
          You can confirm your acceptance at any AIEC-Global office, and the
          deposit will be directly transferred to the institution. Your advisor
          will assist you every step of the way.
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

export default Studyabroadcounseling;
