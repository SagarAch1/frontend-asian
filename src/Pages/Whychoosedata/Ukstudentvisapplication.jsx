import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Element, Link } from "react-scroll";
import Footer from "../Homepage/Footer";

const Ukvisarequirement = () => {
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
      color: "black",
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
          src={`${process.env.PUBLIC_URL}/assets/images/ukkk.webp`} // Replace with the correct image path
          alt="Header"
          style={styles.headerImage}
        />
        <div style={styles.headerTitle}>UK Student Visa Requirements</div>
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
                To be eligible for a Tier 4 student visa, you must:
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
            <li>
              <Link
                to="post-visa"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                When applying for your Tier 4 visa, you will generally need:
              </Link>
            </li>
            <li>
              <Link
                to="rules"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                Additional documents may also be needed if you are:
              </Link>
            </li>
            <li>
              <Link
                to="help"
                smooth={true}
                duration={500}
                style={styles.sidebarLink}
              >
                English language requirements
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <Element name="how-to-apply">
            <p>
              The type of visa required depends on your age and chosen course of
              study. Below is a summary of study visa categories and application
              guidelines.
            </p>
          </Element>
          <div style={styles.videoContainer}>
            <iframe
              style={styles.iframe}
              src="https://www.youtube.com/embed/itAvFzXh134?rel=0" // Replace with the correct YouTube video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Element name="how-to-apply">
            <h2 style={styles.sectionTitle}>
              To be eligible for a Tier 4 student visa, you must:
            </h2>
            <ul>
              <li>
                Have an unconditional offer of a place on a course with a
                licensed Tier 4 sponsor.
              </li>
              <li>Be able to speak, read, write and understand English.</li>
              <li>
                Have enough money to support yourself and pay for your course.
              </li>
            </ul>
          </Element>

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>Applying for your visa online</h2>
            <ul>
              <p>
                Submit your student visa application through the UK Government's
                Gov.UK website (unless you’re applying from North Korea, where a
                paper form is allowed).
              </p>
              <p>
                You can submit your application up to three months before your
                planned travel date to the UK. The application date is
                considered to be the date you pay the application fee.
              </p>
            </ul>
          </Element>

          <Element name="post-visa">
            <h2 style={styles.sectionTitle}>
              When applying for your Tier 4 visa, you will generally need:
            </h2>
            <ul>
              <li>A valid passport or other travel document.</li>
              <li>
                Proof of funds to cover living costs for the duration of your
                studies.
              </li>
              <li>
                A Confirmation of Acceptance for Studies (CAS) reference number
                and any documents used to get the CAS.
              </li>
              <li>A passport-sized color photo.</li>
            </ul>

            <ul>
              <li>A tuberculosis test (if required).</li>
              <li>Assessment documentation.</li>
              <li>
                An Academic Technology Approval Scheme (ATAS) certificate (if
                needed).
              </li>
            </ul>
          </Element>

          <Element name="rules">
            <h2 style={styles.sectionTitle}>
              Additional documents may also be needed if you are:
            </h2>
            <ul>
              <li>Not a citizen of the country you are applying from.</li>
              <li>Under 18 years of age.</li>
              <li>Applying with family members (dependents).</li>
            </ul>
            <p>Any documents that are not in English must be translated.</p>
            <p>
              Each translated document must be dated, include the translator's
              name and signature, and confirm that it’s a true and accurate
              translation of the original.
            </p>
          </Element>

          <Element name="help">
            <h2 style={styles.sectionTitle}>English language requirements</h2>
            <p>
              Evidence of English proficiency is required, typically via a
              secure English language test like IELTS.
            </p>
            <p>
              The UKVI has set minimum English requirements for reading,
              writing, listening, and speaking based on your study level. Your
              institution may have additional requirements.
            </p>
          </Element>
          <Element name="help">
            <h2 style={styles.sectionTitle}>Biometric residence permit</h2>
            <p>
              As part of your application, you must also obtain a biometric
              residence permit (BRP) from UKVI.
            </p>

            <p>
              You will need to make an appointment with UKVI to have your
              fingerprints scanned and a digital photo taken.
            </p>
          </Element>

          {/* Sign Up Section */}
          <div style={styles.signupSection}>
            <h2>One account for all your study abroad needs</h2>
            <p>Register to receive tailored guidance, study plans, and more.</p>
            <button
              className="signup-button"
              style={styles.signupButton}
              onClick={handleSignUpClick}
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ukvisarequirement;
