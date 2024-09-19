import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Studyabroadcounseling = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

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
          src="/path/to/your/banner-image.jpg"
          alt="Banner"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Content Section */}
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>Free study abroad counselling</h2>
        <p style={subtitleStyle}>
          Our expert counselors are here to guide you every step of the way and
          to assist you in finding the best school and program that aligns with
          your needs and budget.
        </p>
        <p style={paragraphStyle}>
          With numerous options to consider, making decisions about where and
          what to study, and discovering the optimal application approach for
          increased acceptance odds, can be challenging. Here's how we can
          assist you in discovering the perfect course and destination.
        </p>

        <h3 style={titleStyle}>Course selection and application </h3>
        <p style={paragraphStyle}>
          AIEC’s counselors are adept at comprehending your educational
          aspirations and locating the ideal course that aligns with your
          ambitions. Our team can make the optimal choice for you, thanks to our
          advanced knowledge matching system that houses the latest information
          about our 600 partner universities and institutions
        </p>

        <h3 style={titleStyle}>Relatable and approachable </h3>
        <p style={paragraphStyle}>
          Our experienced counselors comprehend your study objectives. In fact,
          a number of our counselors were international students themselves,
          enabling them to address all your queries.
        </p>

        <h3 style={titleStyle}>Speak your preferred language </h3>
        <p style={paragraphStyle}>
          If you prefer conversing in your native language during your visit,
          rest assured that we have team members who can make you feel at ease
          and understand you.
        </p>
        <h3 style={titleStyle}>What should you expect?  </h3>
        <p style={paragraphStyle}>
          During your initial meeting with us, your counselor will discuss the
          following topics:
        </p>
        <p style={paragraphStyle}>
          1. Your education, experiences, interests, timeline, budget, and
          career or migration objectives.
        </p>
        <p style={paragraphStyle}>
          2. Courses that align with your requirements.
        </p>
        <p style={paragraphStyle}>3. The application process.</p>
        <p style={paragraphStyle}>
          4. Visa considerations and their alignment with your intentions.
        </p>
        <p style={paragraphStyle}>
          5. Upcoming information on events that might be of interest.
        </p>

        <h3 style={titleStyle}>Submitting your study applications </h3>
        <p style={paragraphStyle}>
          We provide the necessary institution course application documents and
          institution program guides, and also compile your applications while
          ensuring the certification of supporting documents.
        </p>
        <p style={paragraphStyle}>
          Subsequently, we handle the task of submitting your application to the
          university or institution you've selected.
        </p>
        <p style={paragraphStyle}>
          You might receive an invitation to meet with education institution
          representatives who will evaluate your application and determine your
          eligibility for the course.
        </p>
        <p style={paragraphStyle}>
          Additionally, you could seize the chance to engage in discussions
          about course structures and graduate outcomes during our education
          seminars.
        </p>

        <h3 style={titleStyle}>Response from the study provider </h3>
        <p style={paragraphStyle}>
          Within two to six weeks of submitting your application, you can expect
          a response from the school or university. When you are granted a place
          in a course, an offer letter will be issued to you.
        </p>
        <p style={paragraphStyle}>
          In certain instances, a school or university representative can
          evaluate your eligibility for the course and provide an offer letter
          during your interview. These interviews might occur at our office or
          at one of AIEC's numerous international student events held throughout
          the year.
        </p>

        <h3 style={titleStyle}>Acceptance and payment </h3>
        <p style={paragraphStyle}>
          If your offer letter has no conditions, you can accept it right away.
          Some examples of conditions that might be listed in the offer letter
          include providing a fresh IELTS test result, an academic transcript
          from your most recent study, or certified documents.
        </p>
        <p style={paragraphStyle}>
          You can accept these offers at an AIEC office, and the deposit will be
          directly paid to the school or university extending the offer. Your
          counselor will accompany you throughout the process, ensuring guidance
          and ease.
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
