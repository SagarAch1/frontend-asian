import React, { useEffect, useState } from "react";
import { getSlidersApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";

const Homepage = () => {
  const [sliders, setSliders] = useState([]);

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

  return (
    <>
      {/* White portion with logo, navigation, and contact button */}
      <header
        className="header-section"
        style={{
          backgroundColor: "white", // White background
          padding: "20px 0", // Padding around the header section
          borderBottom: "1px solid #ccc", // Optional border for separation
          marginTop: "70px", // Ensuring the white section is below the navbar
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo on the far left */}
          <a
            className="navbar-brand"
            href="#"
            style={{ marginRight: "auto" }} // Push logo to the far left
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
              alt="Logo"
              style={{ height: "80px", marginLeft: "-300px" }} // Align logo to the left
            />
          </a>

          {/* Centered Navigation Menu */}
          <nav
            className="mx-auto" // This centers the navigation menu
            style={{
              marginRight: "auto",
            }}
          >
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#study-steps"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    padding: "0 15px",
                  }}
                >
                  Study abroad steps
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#destinations"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    padding: "0 15px",
                  }}
                >
                  Study destinations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#courses"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    padding: "0 15px",
                  }}
                >
                  Find a course
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#ielts"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    padding: "0 15px",
                  }}
                >
                  IELTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#arrival"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    padding: "0 15px",
                  }}
                >
                  Arrival services
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button on the far right */}
          <div style={{ marginLeft: "5px" }}>
            {" "}
            {/* Ensures the contact button is far right */}
            <button
              style={{
                backgroundColor: "#ff6600",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "30px", // Makes the button rounded
                cursor: "pointer",
              }}
            >
              Contact AIEC
            </button>
          </div>
        </div>
      </header>

      {/* Slider Section */}
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
          style={{ width: "100%" }}
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
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
