import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Element, Link } from "react-scroll";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Usavisarequirement = () => {
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
    videoContainer: {
      marginTop: "20px",
      textAlign: "center",
    },
    iframe: {
      width: "100%",
      height: "400px",
      border: "none",
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
      left: "500px",
      color: "black",
      fontSize: "32px",
      fontWeight: "bold",
      textAlign: "center",
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
    videoContainer: {
      marginTop: "20px",
      textAlign: "center",
    },
    iframe: {
      width: "100%",
      height: "400px",
      border: "none",
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
          src={`${process.env.PUBLIC_URL}/assets/images/flagus.jpeg`} // Replace with the correct image path
          alt="Header"
          style={styles.headerImage}
        />
        <div style={styles.headerTitle}>
          Student Visa Requirements in the USA
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
                How to apply for a visa
              </Link>
            </li>
            <li>
              <Link
                to="documents-required"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                Documents required
              </Link>
            </li>
            <li>
              <Link
                to="post-visa"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                What to do once you get your visa?
              </Link>
            </li>
            <li>
              <Link
                to="rules"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                Rules to follow
              </Link>
            </li>
            <li>
              <Link
                to="help"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                How can AIEC help you?
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <Element name="how-to-apply">
            <div style={styles.videoContainer}>
              <iframe
                style={styles.iframe}
                src="https://www.youtube.com/embed/9_q60X7HKww?rel=0" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              Your visa type depends on the kind of study you plan to undertake
              in the United States.
            </p>
            <p>There are three types of student visas offered by the US:</p>
            <ul>
              <li>
                F Student Visa: for studying at a certified US college or
                university, or for learning English at an English language
                institute.
              </li>
              <li>
                J Exchange Visa: for participating in exchange programs, like
                high school or university studies.
              </li>
              <li>
                M Student Visa: for non-academic or vocational education or
                training in the USA.
              </li>
            </ul>
            <p>
              Visit the US Government's Department of State website to learn
              more about each visa type.
            </p>
          </Element>
          <Element name="how-to-apply">
            <h2 style={styles.sectionTitle}>How to apply for a visa</h2>
            <p>
              To apply for a student visa, you need to be accepted by a US
              institution that is certified by the Student and Exchange Visitor
              Program (SEVP).
            </p>
            <p>
              Once accepted, you will receive Form I-20 from the institution's
              international student office, which acts as your record in the
              Student and Exchange Visitor Information System (SEVIS).
            </p>
          </Element>

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>Documents required</h2>
            <ul>
              <li>
                A valid passport that is active for at least six months beyond
                your intended stay in the USA (subject to country-specific
                agreements).
              </li>
              <li>Acceptance at a SEVP-certified school and your Form I-20.</li>
              <li>
                Payment receipt for the Student and Exchange Visitor Information
                System (SEVIS) fee.
              </li>
              <li>
                Non-immigrant visa application and the Form DS-160 confirmation
                page.
              </li>
              <li>One or two photographs as specified.</li>
            </ul>
          </Element>

          <Element name="post-visa">
            <h2 style={styles.sectionTitle}>
              What to do once you get your visa?
            </h2>
            <ul>
              <li>
                Enter the USA no more than 30 days before your study program's
                start date.
              </li>
              <li>
                Check in with your designated school official upon arrival.
              </li>
              <li>
                Ensure to contact your designated school official by the program
                start date listed on your Form I-20.
              </li>
              <li>Keep your visa valid at all times.</li>
            </ul>
            <p>To maintain visa validity, you should:</p>
            <ul>
              <li>Fulfill the purpose for which the visa was granted.</li>
              <li>Comply with any associated regulations.</li>
            </ul>
          </Element>

          <Element name="rules">
            <h2 style={styles.sectionTitle}>
              Rules to follow while studying in the USA
            </h2>
            <ul>
              <li>
                Attend and pass all classes. If you're struggling, consult your
                Designated School Official (DSO) promptly.
              </li>
              <li>
                If you anticipate that you can't complete the program by the end
                date on your Form I-20, discuss an extension with your DSO.
              </li>
              <li>
                Enroll in a full course of study each term. If not possible,
                inform your DSO.
              </li>
              <li>
                Avoid dropping below full-time study without consulting your
                DSO.
              </li>
            </ul>
          </Element>

          <Element name="help">
            <h2 style={styles.sectionTitle}>How can AIEC help you?</h2>
            <p>
              AIEC provides the latest information in the field of overseas
              studies with the utmost comprehension. We assist students with not
              only educational matters but also settlement in various countries
              around the world.
            </p>
          </Element>
        </div>
      </div>

      {/* Signup Section */}
      <div style={styles.signupSection}>
        <h2>Contact Us to Get Started</h2>
        <p>
          Embark on your overseas education journey with us. Register now to get
          personalized assistance every step of the way.
        </p>
        <button
          className="signup-button"
          style={styles.signupButton}
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
      </div>

      {/* Footer and Form */}
      <FormPage />
      <Footer />
     
    </div>
  );
};

export default Usavisarequirement;
