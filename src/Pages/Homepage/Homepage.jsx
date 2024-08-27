import React, { useState, useEffect } from "react";
import { getSlidersApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";
import { dropdownStyle, searchButtonStyle } from "../../components/EventSearch"; 
import FormPage from "./FormPage";

const sectionStyle = {
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  width: "fit-content", // Adjust width based on content
  margin: "0 auto", // Center the box horizontally
};

const flexContainerStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap", // Allow wrapping if needed
  alignItems: "center", // Align items in the center vertically
};

const dropdownItemStyle = {
  position: "relative",
  padding: "10px",
  cursor: "pointer",
};

const dropdownContentStyle = {
  display: "none",
  position: "absolute",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
  zIndex: 1,
};

const dropdownHoverStyle = {
  display: "block",
};

const Homepage = () => {
  const [sliders, setSliders] = useState([]);
  const [activeSection, setActiveSection] = useState("courses"); // Set default section
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  useEffect(() => {
    getSlidersApi()
      .then((res) => {
        setSliders(res.data.sliders);
        console.log("Fetched sliders:", res.data.sliders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "courses":
        return (
          <div style={sectionStyle}>
            <div style={flexContainerStyle}>
              <select style={dropdownStyle}>
                <option value="">Course Subject</option>
                {/* Add course subjects here */}
              </select>

              <select style={dropdownStyle}>
                <option value="">Study Level</option>
                {/* Add study levels here */}
              </select>

              <select style={dropdownStyle}>
                <option value="">Study Destinations</option>
                {/* Add study destination options here */}
              </select>

              <button style={searchButtonStyle}>Search</button>
            </div>
          </div>
        );

      case "scholarships":
        return (
          <div style={sectionStyle}>
            <div style={flexContainerStyle}>
              <select style={dropdownStyle}>
                <option value="">Country</option>
                {/* Add countries here */}
              </select>

              <select style={dropdownStyle}>
                <option value="">Scholarship Type</option>
                {/* Add scholarship types here */}
              </select>

              <button style={searchButtonStyle}>Search</button>
            </div>
          </div>
        );

      case "universities":
        return (
          <div style={sectionStyle}>
            <div style={flexContainerStyle}>
              <select style={dropdownStyle}>
                <option value="">Country</option>
                {/* Add countries here */}
              </select>

              <select style={dropdownStyle}>
                <option value="">University Type</option>
                {/* Add university types here */}
              </select>

              <button style={searchButtonStyle}>Search</button>
            </div>
          </div>
        );

      case "guideMe":
        return (
          <div style={sectionStyle}>
            <div style={flexContainerStyle}>
              <h3>Let us help you with your search</h3>
              <p>
                Simply answer these 5 questions to see courses perfectly matched
                to you.
              </p>
              <button style={searchButtonStyle}>Search</button>
            </div>
          </div>
        );

      case "events":
        return (
          <div style={sectionStyle}>
            <div style={flexContainerStyle}>
              <select style={dropdownStyle}>
                <option value="">City</option>
                {/* Add city options here */}
              </select>

              <select style={dropdownStyle}>
                <option value="">Month</option>
                {/* Add month options here */}
              </select>

              <select style={dropdownStyle}>
                <option value="">Study Destinations</option>
                {/* Add study destination options here */}
              </select>

              <button style={searchButtonStyle}>Search</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <header
        className="header-section"
        style={{
          backgroundColor: "white",
          padding: "20px 0",
          borderBottom: "1px solid #ccc",
          marginTop: "70px",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
              alt="Logo"
              style={{ height: "80px", marginLeft: "-300px" }}
            />
          </a>

          {/* Study Abroad Links with Dropdowns */}
          <div
            className="study-abroad-menu"
            style={{ display: "flex", gap: "20px", marginLeft: "20px" , fontWeight: "bold", color: "black"}}
          >
            {["Study Abroad Steps", "Study Destinations", "Find a Course", "IELTS", "Arrival Services"].map((item) => (
              <div
                key={item}
                style={dropdownItemStyle}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
                <div
                  style={{
                    ...dropdownContentStyle,
                    ...(hoveredItem === item ? dropdownHoverStyle : {}),
                  }}
                >
                  {/* Add dropdown content here */}
                  <p>{item} content goes here</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div style={{ marginLeft: "5px" }}>
            <button
              style={{
                backgroundColor: "#ff6600",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
              }}
            >
              Contact AIEC
            </button>
          </div>
        </div>
      </header>

      <div
        className="container-fluid p-0"
        style={{
          background: "#f8f8f8",
          minHeight: "100vh",
          color: "#333",
          padding: "0",
        }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          style={{
            width: "100%",
            position: "relative",
          }}
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-indicators">
            {sliders.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {sliders.map((slider, index) => (
              <div
                key={slider._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`http://localhost:5000/sliders/${slider.sliderImage}`}
                  className="d-block w-100"
                  alt={slider.name}
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{slider.name}</h5>
                  <p>{slider.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "center",
              padding: "0",
              margin: "0",
            }}
          >
            {[
              "courses",
              "scholarships",
              "universities",
              "events",
              "guideMe",
            ].map((section) => (
              <li key={section} style={{ marginRight: "20px" }}>
                <a
                  href="#"
                  onClick={() => setActiveSection(section)}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    paddingBottom: "10px",
                    display: "inline-block",
                    color:
                      activeSection === section ? "blue" : "#000",
                    borderBottom:
                      activeSection === section ? "3px solid blue" : "none",
                    cursor: "pointer",
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Render the active section */}
        {renderSection()}

        {/* Adjust the position of FormPage */}
        <div style={{ marginTop: "40px", marginBottom: "40px" }}> {/* Adjust this margin as needed */}
          <FormPage />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
