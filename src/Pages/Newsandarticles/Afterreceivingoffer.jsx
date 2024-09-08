import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Afterreceivingoffer = () => {
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
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/app.jpeg)`,
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
        <h1 style={styles.headerTitle}>After receiving an offer</h1>
        <p style={styles.subheader}>
          Here are the steps to take from accepting an offer through to planning
          for your trip to make your study abroad dream a reality.
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
        <span onClick={() => navigate("/arriveandthrive")}>
          Arrive and thrive
        </span>
      </nav>

      {/* Main Content Section */}
      <div style={styles.contentSection}>
        <div style={styles.leftColumn}>
          <h2 style={styles.h2}>It's decision time</h2>
          <p>
            Congratulations! An approved university application means you’re one
            step closer to achieving your dream to study abroad. It’s an
            exciting time but it’s natural to feel nervous. IDP is here to
            support you at every step of your journey. You can speak to one of
            our experienced counsellors to guide you through the process after
            you receive an offer. We’ll also help you with student visas, money
            transfer, health cover and accommodation before your move. So take a
            deep breath, and make a confident decision with the reassurance that
            we have your back every step of the way.
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
        Next steps after receiving an offer
        </h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Track your application</h3>
          <p>
          Stay informed every step of the way through our ‘Application Tracker’ while you wait for the outcome.
          </p>
          
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. Choosing between multiple offers</h3>
          <p>
          Got more than one offer? It’s an exciting yet challenging scenario that requires thoughtful deliberation.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>3. Pay admission and tution fees</h3>
          <p>
          You nailed it! Need help transferring funds? We’ve got you covered every step of the way.
          </p>
          
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>4. Access our Student Essential Services</h3>
          <p>
          Plan your upcoming move. Find accommodation, apply for Health Insurance and more.
          </p>
          <a href="#" style={styles.listItemLink}>
            Student visa | Money transfer |Student banking |Accommodation  |Health insurance 
          </a>
        </div>
        
      </div>
      {/* Second Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Frequently asked questions</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>What is studying abroad?</h3>
          <p>
            Studying abroad is the experience of living overseas in order to
            acquire a foreign education. It can take many forms – from a few
            weeks in a short course, to a four years’ program of full-time
            study. 
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            How is it different from studying locally?
          </h3>
          <p>
            While studying locally is the easier option, in the longer run
            studying abroad offers unique opportunities and experiences that
            cannot be found at home. For more information, read this article
            about whether to study abroad or locally. 
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            What are the main benefits of studying overseas?
          </h3>
          <p>
            Studying abroad offers a wide range of benefits, from inspiring a
            global mindset to helping you learn new skills and enhancing your
            career prospects. To read all about it, check our article about the
            benefits of studying abroad.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>What's the experience like?</h3>
          <p>
            Studying abroad is a transformative experience of personal growth
            that helps you broaden your perspective, develop independence,
            self-confidence and a greater understanding and appreciation of
            different cultures. To see what it’s like, meet some students who
            have made the move to study abroad with AIEC. 
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>Will I be able to afford it?</h3>
          <p>
            Studying abroad is not as expensive as you may think! Use our cost
            of living calculator to estimate how much you will need to cover all
            your expenses as an international student. We connect you to over
            5,100 scholarships across our partner university network. Reach out
            to us to explore your options.
          </p>
         
        </div>
      </div>
      <FormPage />
      <Footer />
    </div>
  );
};

export default Afterreceivingoffer;
