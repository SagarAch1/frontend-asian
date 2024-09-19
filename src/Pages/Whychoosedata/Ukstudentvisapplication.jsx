import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Element, Link } from "react-scroll";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

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
            <p>
              The visa you need will depend on your age and the type of study
              you want to do. An overview of study visa types and application
              requirements is included below.
            </p>
          </Element>
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
                You must apply for your student visa application online using
                the British Government's official Gov.UK website (unless you are
                applying from North Korea, in which case you can use a hardcopy
                form).
              </p>
              <p>
                You can apply up to three months before your intended date of
                travel to the UK. Your application date is the date when your
                application fee is paid.
              </p>
              <p>
                You can apply up to three months before your intended date of
                travel to the UK. Your application date is the date when your
                application fee is paid.
              </p>
            </ul>
          </Element>

          <Element name="post-visa">
            <h2 style={styles.sectionTitle}>
              When applying for your Tier 4 visa, you will generally need:
            </h2>
            <ul>
              <li>A current passport or other valid travel documentation.</li>
              <li>
                Evidence of funds to provide your living expenses for the
                duration of your course.
              </li>
              <li>
                Confirmation of Acceptance for Studies (CAS) reference number
                and documents used to obtain CAS.
              </li>
              <li>Passport-sized colour photograph.</li>
            </ul>

            <ul>
              <li>Tuberculosis screening (if required).</li>
              <li>Assessment documentation.</li>
              <li>
                Academic Technology Approval Scheme (ATAS) clearance certificate
                (if required).
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

              <li>Have family (dependents).</li>
            </ul>
            <p>
              If any of your supporting documents is not in English, you will
              need to have it translated.
            </p>
            <p>
              Each translated document must be dated and include the
              translator's name and signature, and you will need confirmation
              that it is an accurate translation of the original document.
            </p>
          </Element>

          <Element name="help">
            <h2 style={styles.sectionTitle}>English language requirements</h2>
            <p>
              You must provide evidence of your knowledge of the English
              language when you apply for your visa. This usually means passing
              a secure English language test such as IELTS.
            </p>
            <p>
              UK Visas and Immigration (UKVI) have minimum English language
              requirements for reading, writing, listening and speaking
              according to your level of study. Your education institution
              (sponsor) may have different English language requirements.
            </p>
            <p>
              UK Visas and Immigration (UKVI) have minimum English language
              requirements for reading, writing, listening and speaking
              according to your level of study. Your education institution
              (sponsor) may have different English language requirements.
            </p>
          </Element>
          <Element name="help">
            <h2 style={styles.sectionTitle}>Biometric residence permit</h2>
            <p>
            As part of your application, you must also obtain a biometric residence permit (BRP) from UKVI.
            </p>
          
            <p>
            You will need to make an appointment with UKVI to have your fingers and thumbs scanned and a digital photo taken of your face.
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

export default Ukvisarequirement;
