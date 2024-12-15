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
          <h3 style={titleStyle}> A rich history</h3>
          <p style={descriptionStyle}>
          Over 15 years of experience in turning students' study abroad dreams into reality.
          </p>
          <a href="/about-aiec" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>👥</div>
          <h3 style={titleStyle}>Global network</h3>
          <p style={descriptionStyle}>
          In collaboration with top universities worldwide.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>🌍</div>
          <h3 style={titleStyle}>Closer to you</h3>
          <p style={descriptionStyle}>
          Providing global support through 4 offices in different countries.
          </p>
          <a href="/officelocator" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>👨‍🏫</div>
          <h3 style={titleStyle}>Driven by innovation</h3>
          <p style={descriptionStyle}>
          Blending human expertise with advanced technology to deliver a highly personalized experience.
          </p>
          <a href="#" style={linkStyle}>
            Learn more &gt;
          </a>
        </div>

        <div style={cardStyle}>
          <div style={iconStyle}>
            <i className="fas fa-search"></i> {/* Search icon */}
          </div>
          <h3 style={titleStyle}>Centred around you</h3>
          <p style={descriptionStyle}>
          Connecting you to the ideal country and course with the perfect support system.
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
