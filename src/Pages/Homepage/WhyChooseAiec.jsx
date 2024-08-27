import React from "react";

// Define the styles for the cards and container
const containerStyle = {
  padding: "40px 20px",
  backgroundColor: "#fff",
  textAlign: "center",
};

const headerStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "30px",
  position: "relative",
};

const underlineStyle = {
  width: "50px",
  height: "3px",
  backgroundColor: "#ff6600", // You can adjust the color to match your theme
  position: "absolute",
  bottom: "-10px",
  left: "50%",
  transform: "translateX(-50%)",
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  paddingTop: "20px",
};

const cardStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "40px",
  color: "#007bff",
  marginBottom: "15px",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#666",
  marginBottom: "20px",
};

const linkStyle = {
  fontSize: "14px",
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
};

const WhyChooseAiec = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>
        Why choose AIEC?
        <span style={underlineStyle}></span>
      </h2>
      <div style={gridContainerStyle}>
        <div style={cardStyle}>
          <div style={iconStyle}>🎓</div>
          <h3 style={titleStyle}>55+ years experience</h3>
          <p style={descriptionStyle}>
            AIEC combines experience and technology to help students get into
            their dream international course.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>👥</div>
          <h3 style={titleStyle}>800,000+ students</h3>
          <p style={descriptionStyle}>
            Helped by AIEC in securing admissions to leading universities across
            the USA, UK, Australia, and more.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>🌍</div>
          <h3 style={titleStyle}>200 offices across 35 countries</h3>
          <p style={descriptionStyle}>
            Supported by over 2300+ counsellors ensuring you're never too far to
            access our services.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>⭐</div>
          <h3 style={titleStyle}>9/10</h3>
          <p style={descriptionStyle}>
            9/10 of our customers said they would recommend our student
            placement services to their family and friends.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>🎓</div>
          <h3 style={titleStyle}>International education expert</h3>
          <p style={descriptionStyle}>
            Most universities these days offer a variety of different
            scholarship options to international students.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>🎯</div>
          <h3 style={titleStyle}>Proud Co-owners of IELTS</h3>
          <p style={descriptionStyle}>
            Accepted by 12,000+ global organizations, IELTS is the foremost
            English language test for study, work & migration.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAiec;
