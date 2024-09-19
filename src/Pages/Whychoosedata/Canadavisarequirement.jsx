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
              In Canada, a student visa is often referred to as a study permit.
            </p>
            <p>
              It is important that you make sure you have the correct study
              permit for your international studies before you leave for Canada.
            </p>
          </Element>
          <div style={styles.videoContainer}>
            <iframe
              style={styles.iframe}
              src="https://www.youtube.com/embed/3n4rzyhmRbU?rel=0" // Replace with the correct YouTube video ID
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
              As study permit conditions can change quickly, you will need to
              make sure you follow the most up-to-date advice.
            </p>
            <p>
            The best place to find the latest information is on the{" "}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                 Canadian immigration authority website,
              </a>.
              which is called the Immigration, Refugees and Citizenship Canada (IRCC).
            </p>
            <p>
              If you need help in finding the relevant IRCC information, your
              IDP counsellor can direct you to it. Your counsellor can also help
              you find authorised immigration representatives, if required.
            </p>
          </Element>
           

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>We can help you</h2>
            <p>
            Often, you will have to translate and courier your documents.  
            </p>
            <p>
            IDP can help you through this as well so that you have less paperwork to keep track of.  
            </p>
            <p>
            We offer free visa support to students who wish to study in Canada. 
            </p>
            <p>
            We will also direct you to the IRCC and other relevant websites to ensure that you have the latest information on visa requirements.  
            </p>
            <p>
            Our commitment is to help you in your study abroad journey. 
            </p>
          </Element>

          {/* Sign Up Section */}
          <div style={styles.signupSection}>
            <h2>One account for all your study abroad needs</h2>
            <p>
              Sign up to get personalized information, study plans, and more.
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
