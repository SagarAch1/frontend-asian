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
          src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`} // Replace with the correct image path
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
              The visa you need will depend on the type of study you want to do,
              and how long you want to stay in New Zealand.
            </p>
            <p>
              Having a valid passport and the right visa is key to a
              trouble-free entry.
            </p>
            <p>
              While studying in New Zealand, it's important to maintain your
              Fee-Paying student status. This status relates to the purpose, or
              reason why you came to New Zealand.
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
            <h2 style={styles.sectionTitle}>Documentation</h2>
            <p>
              To apply for a visa, you must have the following documentation
              ready:
            </p>
            <ul>
              <li>
                A valid passport with a validity of at least three months after
                your period of stay in New Zealand.
              </li>
              <li>
                A letter of acceptance from a New Zealand education provider
                that states the minimum course duration, total tuition fee and
                whether the tuition fee is in domestic and foreign currency. The
                course must be approved by the New Zealand Qualifications
                Authority.
              </li>
            </ul>
            <p>You may also need additional documentation such as:</p>
            <ul>
              <li>
                Academic preparation documents such as transcripts, diplomas,
                degrees or certificates.
              </li>
              <li>Current application form Student Visa Application form.</li>
              <li>Correct visa application fee.</li>
              <li>Tuition fee receipt showing payment to date.</li>
              <li>
                Evidence that you have sufficient funds to cover your living
                expenses throughout the periods of your stay. You will need to
                show you have NZ 15,000 for a full year of study or NZ 1,250 per
                month.
              </li>
            </ul>
            <p>This may include:</p>
            <ul>
              <li>Bank statements.</li>
              <li>
                Financial undertaking by a sponsor to cover accommodation and
                living costs.
              </li>
              <li>A scholarship program.</li>
              <li>
                Evidence that you are leaving New Zealand after the completion
                of your course. This can be in the form of flight tickets,
                however it is optional.
              </li>
              <li>
                A police certificate if you are aged 17 years or over and plan
                to study for more than 24 months. A police certificate is a
                document that is used as evidence of good character.
              </li>
              <li>
                An X-ray certificate - you will need to have a chest x-ray if
                you are staying in New Zealand for more than six months, or if
                you're a citizen of a country with a relatively high incidence
                of tuberculosis, or if you've spent more than three months in
                the last five years in a country with a relatively high
                incidence of tuberculosis.
              </li>
              <li>Full medical examination.</li>
            </ul>
          </Element>

          <Element name="Documents-required">
            <h2 style={styles.sectionTitle}>Find out more</h2>
            <p>
              You can find out more about each of the different types of visas
              and how to apply on the{" "}
              <a
                href="https://www.immigration.govt.nz/new-zealand-visas/options/study"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                New Zealand Government's Immigration website
              </a>.
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

export default Newzelandvisarequirement;
