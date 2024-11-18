import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Element, Link } from "react-scroll";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Newzelandvisarequirement = () => {
  const navigate = useNavigate(); // Create navigate function

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      position: "relative",
      width: "100%",
    },
    headerImage: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      marginTop: "81px",
    },
    headerTitle: {
      position: "absolute",
      bottom: "20px",
      left: "50px",
      color: "white",
      fontSize: "32px",
      fontWeight: "bold",
    },
    content: {
      display: "flex",
      margin: "20px",
    },
    sidebar: {
      width: "20%",
      padding: "20px",
      backgroundColor: "#f4f4f4",
    },
    sidebarHeading: {
      fontSize: "18px",
      marginBottom: "10px",
    },
    sidebarList: {
      listStyleType: "none",
      padding: "0",
    },
    sidebarLink: {
      color: "#007bff",
      cursor: "pointer",
      textDecoration: "none",
      marginBottom: "10px",
    },
    mainContent: {
      width: "75%",
      padding: "30px",
      backgroundColor: "white",
      fontSize: "18px",
    },
    sectionTitle: {
      fontSize: "24px",
      color: "#333",
      marginTop: "20px",
    },
    signupSection: {
      textAlign: "center",
      marginTop: "50px",
      padding: "20px",
      backgroundColor: "#f4f4f4",
    },
    videoContainer: {
      marginTop: "20px",
      textAlign: "center",
    },
    iframe: {
      width: "100%",
      height: "400px",
      border: "none",
    },
    signupButton: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "15px 30px",
      fontSize: "18px",
      cursor: "pointer",
      marginTop: "20px",
    },
    signupButtonHover: {
      backgroundColor: "#0056b3",
    },
  };

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to /register on button click
  };

  return (
    <div style={styles.container}>
      {/* Embedded CSS for hover effects */}
      <style>
        {`
          .signup-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      {/* Header with full-width image */}
      <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/flagnew.jpg`} // Replace with the correct image path
          alt="Header"
          style={styles.headerImage}
        />
        <div style={styles.headerTitle}>
          New Zealand Student Visa Requirements
        </div>
      </header>

      <div style={styles.content}>
        {/* Sidebar with scrollable links */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarHeading}>On this page</h2>
          <ul style={styles.sidebarList}>
            <li>
              <Link
                to="how-to-apply"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="documents-required"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                Applying for your visa online
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <Element name="how-to-apply">
            <p>
              The type of visa you need will depend on the kind of study you
              wish to pursue and the duration of your stay in New Zealand.
            </p>
            <p>
              It is essential to have a valid passport and the appropriate visa
              for a smooth entry into the country.
            </p>
            <p>
              While studying in New Zealand, it's crucial to maintain your
              status as a fee-paying student, which is linked to the reason you
              came to New Zealand.
            </p>
          </Element>
          <div style={styles.videoContainer}>
            <iframe
              style={styles.iframe}
              src="https://www.youtube.com/embed/uijlPy_G8mY?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Element name="how-to-apply">
            <h2 style={styles.sectionTitle}>Documentation</h2>
            <p>To apply for a visa, you will need the following documents:</p>
            <ul>
              <li>
                A valid passport, valid for at least three months beyond your
                planned stay in New Zealand.
              </li>
              <li>
                A letter of acceptance from a New Zealand educational provider,
                including course details and tuition fees in both domestic and
                foreign currency. The course should be accredited by the New
                Zealand Qualifications Authority.
              </li>
            </ul>
            <p>Additional documentation may be required, such as:</p>
            <ul>
              <li>
                Academic records like transcripts, diplomas, degrees, or
                certificates.
              </li>
              <li>Completed Student Visa Application form.</li>
              <li>Payment for the correct visa application fee.</li>
              <li>Receipt of tuition fee payment.</li>
              <li>
                Proof of sufficient funds to cover living expenses for your
                stay, such as NZD 15,000 for a full year or NZD 1,250 per month.
              </li>
            </ul>
            <p>Other potential documents include:</p>
            <ul>
              <li>Bank statements.</li>
              <li>
                A financial guarantee from a sponsor covering accommodation and
                living costs.
              </li>
              <li>A scholarship offer.</li>
              <li>
                Evidence of plans to leave New Zealand after your studies, such
                as flight bookings (optional).
              </li>
              <li>
                A police certificate if you are 17 years or older and planning
                to study for more than two years.
              </li>
              <li>
                An X-ray certificate may be required if you stay for more than
                six months or come from a high tuberculosis area.
              </li>
              <li>A full medical exam.</li>
            </ul>
          </Element>

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>Find out more</h2>
            <p>
              Learn more about the different visa types and how to apply on the{" "}
              <a
                href="https://www.immigration.govt.nz/new-zealand-visas/options/study"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                New Zealand Government's Immigration website
              </a>
              .
            </p>
          </Element>

          {/* Sign Up Section */}
          <div style={styles.signupSection}>
            <h2>One account for all your study abroad needs</h2>
            <p>
              Sign up to receive tailored information, study plans, and more.
            </p>
            <button
              className="signup-button"
              style={styles.signupButton}
              onClick={handleSignUpClick} // Navigate to /register on button click
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <FormPage />
      <Footer />
    </div>
  );
};

export default Newzelandvisarequirement;
