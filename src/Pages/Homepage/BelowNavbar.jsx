import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BelowNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleNavigation = (path) => {
    navigate(path);
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
              content: [
                "Why Study Abroad?",
                "Where and what to study?",
                "How do I apply?",
                "After receiving an offer",
                "Prepare to depart",
                "Arrive and Thrive",
              ],
            },
            {
              title: "Study Destinations",
              content: ["USA", "UK", "Australia", "Canada", "New Zealand","Ireland"],
            },
            {
              title: "Find a Course",
              content: ["Course Advice", "Fastlane Courses", "Scholarships","University Ranking-THE","University Ranking-CUG"],
            },
            {
              title: "Test Preparation",
              content: ["IELTS ", "PTE", "TOEFL", "SAT", "DUOLINGO"],
            },
            {
              title: "Student Essentials",
              content: ["Money Transfer", "Accommodation", "Orientation"],
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
                    onClick={() =>
                      contentItem === "IELTS "
                        ? handleNavigation("/ielts")
                        : contentItem === "PTE"
                        ? handleNavigation("/pte")
                        : contentItem === "TOEFL"
                        ? handleNavigation("/toefl")
                        : contentItem === "SAT"
                        ? handleNavigation("/sat")
                        : contentItem === "DUOLINGO"
                        ? handleNavigation("/duolingo")
                        : contentItem === "Why Study Abroad?"
                        ? handleNavigation("/whystudyabroad")
                        : contentItem === "Where and what to study?"
                        ? handleNavigation("/whereandwhattostudy")
                        : contentItem === "How do I apply?"
                        ? handleNavigation("/howdoiapply")
                        : contentItem === "After receiving an offer"
                        ? handleNavigation("/afterreceivingoffer")
                        : contentItem === "Prepare to depart"
                        ? handleNavigation("/preparetodepart")
                        : contentItem === "Arrive and Thrive"
                        ? handleNavigation("/arriveandthrive")
                        : contentItem === "Australia"
                        ? handleNavigation("/studyinaustralia")
                        : contentItem === "USA"
                        ? handleNavigation("/studyinusa")
                        : contentItem === "UK"
                        ? handleNavigation("/studyinuk")
                        : contentItem === "Canada"
                        ? handleNavigation("/studyincanada")
                        : contentItem === "New Zealand"
                        ? handleNavigation("/studyinnewzeland")
                        : contentItem === "Ireland"
                        ? handleNavigation("/studyinireland")
                        : contentItem === "Course Advice"
                        ? handleNavigation("/courseadvice")
                        : contentItem === "Fastlane Courses"
                        ? handleNavigation("/fastlane")
                        : contentItem === "Scholarships"
                        ? handleNavigation("/scholarships")
                        : contentItem === "University Ranking-THE"
                        ? handleNavigation("/universityrankingthe")
                        : contentItem === "University Ranking-CUG"
                        ? handleNavigation("/universityrankingcug")
                        : contentItem === "Airport Pickup"
                        ? handleNavigation("/airportpickup")
                        : contentItem === "Accommodation"
                        ? handleNavigation("/accommodation")
                        : contentItem === "Orientation"
                        ? handleNavigation("/orientation")
                        : contentItem === "Money Transfer"
                        ? handleNavigation("/moneytransfer")
                        : alert(`${contentItem} clicked`)

                    }
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
          <button style={contactButtonStyle} onClick={handleContactClick}>
            Contact AIEC
          </button>
        </div>
      </div>
    </header>
  );
};

export default BelowNavbar;
