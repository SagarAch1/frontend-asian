import React, { useState } from "react";

const BelowNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const headerStyle = {
    backgroundColor: "white",
    padding: "20px 0",
    borderBottom: "1px solid #ccc",
    marginTop: "70px",
  };

  const logoStyle = {
    height: "80px",
    marginLeft: "-300px",
  };

  const navMenuStyle = {
    display: "flex",
    gap: "20px",
    marginLeft: "20px",
    fontWeight: "bold",
    color: "black",
  };

  const contactButtonStyle = {
    backgroundColor: "#ff6600",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
  };

  const dropdownButtonStyle = {
    display: "block",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "5px",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
  };

  return (
    <header className="header-section" style={headerStyle}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
            alt="Logo"
            style={logoStyle}
          />
        </a>

        {/* Study Abroad Links with Dropdowns */}
        <div className="study-abroad-menu" style={navMenuStyle}>
          {[
            {
              title: "Study Abroad Steps",
              content: ["Step 1: Research", "Step 2: Apply", "Step 3: Prepare"],
            },
            {
              title: "Study Destinations",
              content: ["USA", "UK", "Australia"],
            },
            {
              title: "Find a Course",
              content: ["Undergraduate", "Postgraduate", "Vocational"],
            },
            {
              title: "IELTS",
              content: ["IELTS Preparation", "IELTS Test Centers", "IELTS Tips"],
            },
            {
              title: "Arrival Services",
              content: ["Airport Pickup", "Accommodation", "Orientation"],
            },
          ].map((item) => (
            <div
              key={item.title}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              {item.title}
              <div
                style={{
                  display: hoveredItem === item.title ? "block" : "none",
                  position: "absolute",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
                  zIndex: 1,
                  padding: "10px",
                  borderRadius: "5px",
                  minWidth: "200px", // Ensure dropdown width
                }}
              >
                {item.content.map((contentItem, index) => (
                  <button
                    key={index}
                    style={{
                      ...dropdownButtonStyle,
                      fontStyle: index === 0 ? "italic" : "normal",
                      fontWeight: index === 1 ? "lighter" : "normal",
                      textDecoration: index === 2 ? "underline" : "none",
                    }}
                    onClick={() => alert(`${contentItem} clicked`)}
                  >
                    {contentItem}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div style={{ marginLeft: "5px" }}>
          <button style={contactButtonStyle}>Contact AIEC</button>
        </div>
      </div>
    </header>
  );
};

export default BelowNavbar;
