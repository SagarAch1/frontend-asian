import React, { useState, useEffect } from "react";
import { getSlidersApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";
import FormPage from "./FormPage";
import BelowSliderSection from "./BelowSliderSection";
import WhyChooseAiec from "./WhyChooseAiec";

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

const containerStyle = {
  background: "#f8f8f8",
  minHeight: "100vh",
  color: "#333",
  padding: "0",
};

const carouselStyle = {
  width: "100%",
  position: "relative",
};

const navStyle = {
  marginTop: "40px",
  marginBottom: "40px",
  textAlign: "center",
};

const navListStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  padding: "0",
  margin: "0",
};

const navItemStyle = {
  marginRight: "20px",
};

const navLinkStyle = (activeSection, section) => ({
  textDecoration: "none",
  fontWeight: "bold",
  paddingBottom: "10px",
  display: "inline-block",
  color: activeSection === section ? "blue" : "#000",
  borderBottom: activeSection === section ? "3px solid blue" : "none",
  cursor: "pointer",
});

const Homepage = () => {
  const [sliders, setSliders] = useState([]);
  const [activeSection, setActiveSection] = useState("courses"); // Set default section
  const [hoveredItem, setHoveredItem] = useState(null);

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

  return (
    <>
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
          <div
            className="study-abroad-menu"
            style={navMenuStyle}
          >
            {["Study Abroad Steps", "Study Destinations", "Find a Course", "IELTS", "Arrival Services"].map((item) => (
              <div
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                {item}
                <div
                  style={{
                    display: hoveredItem === item ? "block" : "none",
                    position: "absolute",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
                    zIndex: 1,
                    padding: "10px",
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
            <button style={contactButtonStyle}>
              Contact AIEC
            </button>
          </div>
        </div>
      </header>

      <div className="container-fluid p-0" style={containerStyle}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          style={carouselStyle}
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
        <nav style={navStyle}>
          <ul style={navListStyle}>
            {["courses", "scholarships", "universities", "events", "guideMe"].map((section) => (
              <li key={section} style={navItemStyle}>
                <a
                  href="#"
                  onClick={() => setActiveSection(section)}
                  style={navLinkStyle(activeSection, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Render the active section */}
        <BelowSliderSection activeSection={activeSection} />

        {/* Form Page */}
        <FormPage />
        <WhyChooseAiec />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Homepage;
