import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Element, Link } from "react-scroll";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Canadavisarequirementt = () => {
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
          src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`} // Replace with the correct image path
          alt="Header"
          style={styles.headerImage}
        />
        <div style={styles.headerTitle}>Canada Student Visa Requirements</div>
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
                Where to find the right information
              </Link>
            </li>
            <li>
              <Link
                to="documents-required"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                We can help you
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <Element name="how-to-apply">
            <p>
              In Canada, the document allowing you to study as an international
              student is commonly called a study permit.
            </p>
            <p>
              It’s crucial to obtain the right permit for studying in Canada
              before your departure.
            </p>
          </Element>
          <div style={styles.videoContainer}>
            <iframe
              style={styles.iframe}
              src="https://www.youtube.com/embed/KeNwIImEsPU?rel=0" // Replace with the correct YouTube video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Element name="how-to-apply">
            <h2 style={styles.sectionTitle}>
              Where to find the right information
            </h2>
            <p>
              Since requirements for study permits may change, it’s essential to
              follow the latest guidance.
            </p>
            <p>
              The most reliable place to get up-to-date information is the{" "}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                Canadian immigration authority website,
              </a>
              officially known as Immigration, Refugees and Citizenship Canada
              (IRCC).
            </p>
            <p>
              If you need assistance locating relevant IRCC information, your
              AIEC counsellor can help you. They can also connect you with
              authorized immigration representatives if needed.
            </p>
          </Element>

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>We can help you</h2>
            <p>
              Sometimes, translation and courier services are required for your
              documents.
            </p>
            <p>
              AIEC can assist you with these tasks, reducing the amount of
              paperwork you need to manage.
            </p>
            <p>
              We offer free support with the visa application process for
              students planning to study in Canada.
            </p>
            <p>
              Additionally, we can guide you to the IRCC website and other
              resources to ensure you have the most current visa requirement
              details.
            </p>
            <p>
              Our goal is to support you throughout your journey to study
              abroad.
            </p>
          </Element>

          {/* Sign Up Section */}
          <div style={styles.signupSection}>
            <h2>One account for all your study abroad needs</h2>
            <p>
              Register to receive tailored information, study plans, and more.
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

export default Canadavisarequirementt;
