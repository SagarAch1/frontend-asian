import React, { useEffect, useState } from "react";
import { getSlidersApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";
import StudyAbroadSteps from "./Abroadsteps";
import BelowNavbar from "./BelowNavbar";
import BelowSliderSection from "./BelowSliderSection";
import Destination from "./Destination";
import FormPage from "./FormPage";
import VideoSection from "./Homevedio";
import PopularCourses from "./Popularcourses";
import ServicesSection from "./Services";
import WhyChooseAiec from "./WhyChooseAiec";
import Youshouldknow from "./YouShouldknow";

// Image Row Component with Sections in One Row
const ImageRow = () => {
  // Grouped Images with Section Titles
  const url=process.env.API_URL || "https://api.asian.edu.np";
  const sections = [
    {
      title: "Accreditation",
      images: [
        {
          src: "/assets/images/aff.png",
          link: "https://www.icef.com/agency/0010J000026RLxMQAW",
        },
      ],
    },
    {
      title: "Professional Membership",
      images: [
        { src: "/assets/images/naaer.jpg", link: "https://www.naaer.org/" },
        { src: "/assets/images/ecan.jpg", link: "https://ecan.org.np/" },
        { src: "/assets/images/uni.jpg", link: "https://www.uniagents.com/" },
      ],
    },
    {
      title: "Professional Certification",
      images: [
        {
          src: "/assets/images/itac.png",
          link: "https://www.icef.com/academy/icef-trained-agent-counsellors-itacs-list/",
        },
        {
          src: "/assets/images/toefl.jpg",
          link: "https://www.ets.org/toefl/institutions/ibt.html",
        },
        { src: "/assets/images/isana.png", link: "https://isana.org.au/" },
        {
          src: "/assets/images/qeac.png",
          link: "https://www.icef.com/academy/qualified-education-agent-counsellors-qeacs-list/",
        },
        {
          src: "/assets/images/think-new.jpg",
          link: "https://thinknewnz.com/",
        },
      ],
    },
  ];

  // Styles
  const containerStyle = {
    margin: "20px 0",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    gap: "5px", // Further reduced gap between sections
    flexWrap: "wrap",
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "10px", // Further reduced min-width to bring sections closer
    textAlign: "center",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px", // Further reduced margin for section title
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px", // Further reduced gap between images
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      {sections.map((section, index) => (
        <div key={index} style={sectionStyle}>
          {/* Section Title */}
          <h3 style={sectionTitleStyle}>{section.title}</h3>
          <div style={rowStyle}>
            {section.images.map((image, idx) => (
              <a
                href={image.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image.src} alt={section.title} style={imageStyle} />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Homepage = () => {
  const [sliders, setSliders] = useState([]);
  const [activeSection, setActiveSection] = useState("courses");
  const url=process.env.API_URL || "https://api.asian.edu.np";

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

  const containerStyle = {
    background: "#e0f7fa",
    minHeight: "100vh",
    color: "#333",
    padding: "0",
  };

  const carouselStyle = {
    width: "100%",
    height: "500px",
    margin: "0 auto",
    position: "relative",
    marginTop: "-37px",
  };
  const origamiImageStyle = {
    transition: "transform 2s ease, opacity 1s ease",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  const origamiEffect = `
    @keyframes origamiIn {
      0% {
        transform: rotateY(180deg);
        opacity: 0;
      }
      100% {
        transform: rotateY(0deg);
        opacity: 1;
      }
    }

    .carousel-item {
      animation: origamiIn 1s forwards;
      transform-origin: center center;
    }
  `;

  const navStyle = {
    marginTop: "40px",
    marginBottom: "40px",
    textAlign: "center",
  };
  const foldEffect = {
    animation: "foldEffect 2s forwards",
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

  return (
    <>
      {/* Below Navbar */}
      <BelowNavbar />

      <style>{origamiEffect}</style>

      <div className="container-fluid p-0" style={containerStyle}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          style={carouselStyle}
          data-bs-ride="carousel"
          data-bs-interval="4000"
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
                  src={`${url}/sliders/${slider.sliderImage}`}
                  className="d-block w-100"
                  alt={slider.name}
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
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
            {["courses", "scholarships", "universities"].map((section) => (
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
        <Youshouldknow />
        <Destination />
        <ServicesSection />
        <StudyAbroadSteps />
        <VideoSection />
        <PopularCourses />
      </div>

      {/* Image Row Section */}
      <ImageRow />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Homepage;
