import React from "react";
import { Element, Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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
          src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`} // Replace with the correct image path
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
                src="https://www.youtube.com/embed/3n4rzyhmRbU?rel=0" // Replace with the correct YouTube video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              The visa you need will depend on the type of study you want to do
              in the United States.
            </p>
            <p>The US Government offers three different student visa types:</p>
            <ul>
              <li>
                F Student Visa: used to study at an accredited US college or
                university, or to study English at an English language
                institute.
              </li>
              <li>
                J Exchange Visa: for participation in an exchange program,
                including high school and university study.
              </li>
              <li>
                M Student Visa: for non-academic or vocational study or training
                in the USA.
              </li>
            </ul>
            <p>
              You can find out more about each type of visa on the US
              Government's Department of State website.
            </p>
          </Element>
          <Element name="how-to-apply">
            <h2 style={styles.sectionTitle}>How to apply for a visa</h2>
            <p>
              To apply for a student visa, you must first apply and be accepted
              by an institution in the USA that is certified by the Student and
              Exchange Visitor Program (SEVP).
            </p>
            <p>
              Once accepted, you will receive a Form I-20 from the institution's
              international student office, which is a paper record of your
              information in the database called the Student and Exchange
              Visitor Information System (SEVIS).
            </p>
          </Element>

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>Documents required</h2>
            <ul>
              <li>
                A current passport that is valid for at least six months beyond
                your period of stay in the USA (unless exempt by
                country-specific agreements)
              </li>
              <li>Acceptance at a SEVP approved school and your Form I-20</li>
              <li>
                Application fee payment for the Student and Exchange Visitor
                Information SystemApplication fee payment for SEVIS
              </li>
              <li>
                Non-immigrant visa application and the Form DS-160 confirmation
                pageForm I-20
              </li>
              <li>One or two photographs in the requested format.</li>
            </ul>
          </Element>

          <Element name="post-visa">
            <h2 style={styles.sectionTitle}>
              What to do once you get your visa?
            </h2>
            <ul>
              <li>
                Do not enter the USA more than 30 days before your study program
                begins
              </li>
              <li>
                Contact your designated school official when you first enter the
                USA.
              </li>
              <li>
                Contact your designated school official again and no later than
                the program start date listed on your Form I-20.
              </li>
              <li>Make sure your visa remains valid.</li>
            </ul>
            <p>To ensure your visa remains valid, you will need to:</p>
            <ul>
              <li>
                Fulfill the purpose for why the Department of State issued the
                visa.
              </li>
              <li>Follow any regulations associated with that purpose.</li>
            </ul>
          </Element>

          <Element name="rules">
            <h2 style={styles.sectionTitle}>
              Rules to follow while studying in the USA
            </h2>
            <ul>
              <li>
                You must attend and pass all of your classes. If you are finding
                your studies too difficult, you should speak with your
                Designated School Official (DSO) immediately.
              </li>
              <li>
                If you think you will be unable to complete your program by the
                end date listed on your Form I-20, you must talk to your DSO
                about requesting a possible program extension.
              </li>
              <li>
                You must take a full course of study each term. If you cannot
                study full time, contact your DSO immediately.
              </li>
              <li>
                You cannot drop below a full course of study without consulting
                with your DSO.
              </li>
            </ul>
          </Element>

          <Element name="help">
            <h2 style={styles.sectionTitle}>How can AIEC help you?</h2>
            <p>
              AIEC offers an array of services designed to take the stress and
              confusion out of the process of applying for a student visa. Speak
              to an AIEC counsellor today.
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

export default Usavisarequirement;
