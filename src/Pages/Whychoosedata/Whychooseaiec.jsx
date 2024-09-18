import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Whychooseaiec = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

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

  const buttons = [
    "Why choose AIEC?",
    "Study abroad counseling",
    "Pre-departure support",
    "What we do?",
    "Events",
    "How to find a course",
    "Visa application assistance",
    "Living abroad support",
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
        <h2 style={titleStyle}>Why choose AIEC</h2>
        <p style={subtitleStyle}>
          AIEC is a global leader in international education services. We help
          international students such as yourself to study in English speaking
          countries.
        </p>
        <p style={paragraphStyle}>
          Our extensive network of approachable experts helps you identify and
          secure the university or college where you can thrive.
        </p>
        <p style={paragraphStyle}>
          We can connect you to the courses you desire to pursue in the most
          suitable university or institution located in the right country. We
          have been helping students for over half a century and have created a
          huge network of opportunity with offices in 32 countries.
        </p>

        <h3 style={titleStyle}>
          Ready to start your global career? We're here to help
        </h3>
        <p style={paragraphStyle}>
          AIEC works with you to turn your plan to study abroad into a launch pad
          for your professional success and personal growth.
        </p>
        <p style={paragraphStyle}>
          We combine our vast experience in the education industry and the
          latest technology available to help you make the most informed
          decision possible.
        </p>
        <p style={paragraphStyle}>
          We partner with more than 650 leading universities, schools and
          colleges across Australia, Canada, New Zealand, the United Kingdom and
          the United States. With access to a database of over 180,000 courses
          and programmes, we are sure we can help you find what fits you best.
        </p>
        <h3 style={titleStyle}>We put you first</h3>
        <p style={paragraphStyle}>
          Need help finding the best course, submitting your university
          application or navigating the visa requirements?
        </p>
        <p style={paragraphStyle}>
          Your dedicated AIEC counsellor will work with you closely to prepare
          you for your study abroad journey and help you every step of the way.
        </p>
        <p style={paragraphStyle}>
          We know the transition can be an exciting time for not just you, but
          also your family. This is why your AIEC counsellor will go the extra
          mile and support both you and your family, as you begin your journey.
        </p>
        <h3 style={titleStyle}>
          Approachable international education experts
        </h3>
        <p style={paragraphStyle}>
          Many of the AIEC counsellors were international students themselves.
        </p>
        <p style={paragraphStyle}>
          They are international education experts, who have been there in the
          same place that you are right now.
        </p>
        <p style={paragraphStyle}>
          They know what it is like to have the right information before heading
          to a foreign country and they are willing to share what they have
          learned in their study abroad journey.
        </p>
        <h3 style={titleStyle}>
        Supporting you in every step
        </h3>
        <p style={paragraphStyle}>
        Our support does not end when you receive your university acceptance letter.
        </p>
        <p style={paragraphStyle}>
        At AIEC, we are dedicated to ensuring that you feel supported at every stage of your study abroad journey. 
        </p>
        <p style={paragraphStyle}>
        Our services continually evolve to support you through to graduation and beyond. 
        </p>
        <h3 style={titleStyle}>
        Go from ponderer to planner in a couple of easy steps 
        </h3>
        <p style={paragraphStyle}>
        Book an appointment with one of the AIEC counsellors, so that we can start to plan your journey from where you are today, to where you want to be.
        </p>
        <p style={paragraphStyle}>
          They are international education experts, who have been there in the
          same place that you are right now.
        </p>
        <h3 style={titleStyle}>Proud co-owner of IELTS</h3>
        <p style={paragraphStyle}>
          As a proud co-owner of IELTS, we can help you book and prepare for
          your IELTS test. Recognised by more than 12,000 organisations around
          the world, IELTS is the world’s leading English language test for
          study, work and migration purposes.
        </p>
        {/* YouTube Video Embed */}
        <div style={{ marginBottom: "30px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CjUdsR2JJ4w"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 style={titleStyle}>Learn More</h3>

        {/* Button Section */}
        <div style={buttonGroupStyle}>
          {buttons.map((text, index) => (
            <button
              key={index}
              style={
                hoveredButton === index
                  ? { ...buttonStyle, ...buttonHoverStyle }
                  : buttonStyle
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {text}
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
