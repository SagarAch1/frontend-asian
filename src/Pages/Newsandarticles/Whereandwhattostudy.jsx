import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const WhereAndWhatToStudy = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const styles = {
    page: { fontFamily: "Arial, sans-serif", padding: "20px" },
    navbar: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#0056b3",
      padding: "10px",
      color: "white",
      cursor: "pointer",
      position: "relative", // Change position to relative or static
      width: "100%",
      zIndex: 1000,
    },
    headerSection: {
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/is.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed", // Keep background fixed during scroll
      padding: "100px 25px",
      textAlign: "center",
      color: "white",
      width: "100%",
      minHeight: "400px", // Ensure a minimum height for the section
      marginTop: "20px", // Adjust as needed to push the section down
    },

    headerTitle: { fontSize: "36px", fontWeight: "bold" },
    subheader: { fontSize: "18px", marginTop: "10px" },
    contentSection: {
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: "20px",
      alignItems: "center",
      marginTop: "70px", // Adjust this value to create space below the navbar
    },
    leftColumn: {
      gridColumn: "1 / 2",
    },
    h2: {
      color: "blue", // Apply blue color to the h2 element
    },
    rightColumn: {
      gridColumn: "2 / 4",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
    },
    videoContainer: {
      width: "100%", // Maintain box width
      maxWidth: "600px", // Set maximum width for the box
      height: "300px", // Set fixed height for the box
      backgroundColor: "#f7f7f7",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden", // Ensures the video does not overflow the container
    },
    video: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Maintain aspect ratio and cover the entire box
    },
    signupSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f7f7f7",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      marginLeft: "20px",
    },
    signupButton: {
      backgroundColor: "#0056b3",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
    },
    additionalSection: {
      marginTop: "40px",
      padding: "20px",
      backgroundColor: "#f7f7f7",
      borderRadius: "8px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    additionalTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    listItem: {
      marginBottom: "20px",
      borderBottom: "1px solid #ccc",
      paddingBottom: "10px",
      textAlign: "left",
      maxWidth: "800px",
      width: "100%",
    },
    listItemTitle: {
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "5px",
    },
    listItemLink: {
      color: "#0056b3",
      textDecoration: "none",
    },
  };

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to /register
  };

  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <h1 style={styles.headerTitle}>Where and What to Study</h1>
        <p style={styles.subheader}>
          We're here to help you navigate through your study abroad options with
          ease. From choosing a destination through to course advice
        </p>
      </div>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <span onClick={() => navigate("/whystudyabroad")}>
          Why study abroad?
        </span>
        <span onClick={() => navigate("/whereandwhattostudy")}>
          Where and what to study?
        </span>
        <span onClick={() => navigate("/howdoiapply")}>How do I apply?</span>
        <span onClick={() => navigate("/afterreceivingoffer")}>
          After receiving an offer
        </span>
        <span onClick={() => navigate("/preparetodepart")}>
          Prepare to depart
        </span>
        <span onClick={() => navigate("/arrive-and-thrive")}>
          Arrive and thrive
        </span>
      </nav>

      {/* Main Content Section */}
      <div style={styles.contentSection}>
        <div style={styles.leftColumn}>
          <h2 style={styles.h2}>Pick your dream destination and course</h2>
          <p>
            You've taken a significant step by deciding to study overseas. Now
            it’s time to choose where and what to study. Navigating through
            hundreds of course and university options can be overwhelming, plus
            you’ll have tons of other questions on your mind. With IDP, you’re
            in good hands. Simply create an account, complete your profile, and
            we’ll provide you with personalised course recommendations that
            align perfectly with your aspirations. If your shortlisted course
            has an IDP FastLane tag, you can check if you’re likely to be
            accepted even before applying – so give it a go! We also offer a
            wide array of tools and resources – from city, university, and
            subject guides to cost calculators, scholarship finders and tons of
            insightful articles – to make your decision on where and what to
            study abroad smooth and stress-free.
          </p>
        </div>
        <div style={styles.videoContainer}>
          <video ref={videoRef} controls style={styles.video}>
            <source
              src={`${process.env.PUBLIC_URL}/assets/images/vid.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={styles.signupSection}>
          <p>One account for all your study abroad needs</p>
          <p>
            Create your profile and unlock a wide array of features, including
            personalized recommendations, fast-tracked applications, and much
            more.
          </p>
          <button style={styles.signupButton} onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>
          Discover how studying abroad can help you
        </h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Choose a destination</h3>
          <p>
            You can choose from six amazing countries to study abroad in. Click
            the links below to learn more about each destination including what
            it’s like to live there and post education career and residency
            options.
          </p>
          <a href="#" style={styles.listItemLink}>
            UK | Australia | USA | Canada | New Zeland | Ireland | Korea |
            Germany
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. Explore Cost</h3>
          <p>
            Find out how much things cost in your chosen destination, and what
            options you have after your study by using our Cost Calculator.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>3. Pick a Study Level</h3>
          <p>
            Undergraduate, graduate, PhD or pathway courses, learn which is
            appropriate for you and what is required before you start studying
            across each level.
          </p>
          <a href="#" style={styles.listItemLink}>
            Study bachelor's | Study master's |Study PhD | Check your
            eligibility
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>4. Find a Course</h3>
          <p>
            You can explore course advice or jump straight into browsing
            available courses online. If you can't decide on which course to
            pursue, let us guide you through the process with a short 4 question
            quiz.
          </p>
          <a href="#" style={styles.listItemLink}>
            Course advice | Subject guides |Find a Course
           
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>5. Choose a University</h3>
          <p>
          Browse institutions across 6 different country destinations to see which align with your academic goals and aspirations.
          </p>
          <a href="#" style={styles.listItemLink}>
            Check uni ranking | Find a uni
           
          </a>
        </div>
      </div>
      <FormPage />
      <Footer />
    </div>
  );
};

export default WhereAndWhatToStudy;
