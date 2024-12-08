import React from "react";
import WhyChooseAiec from "../Homepage/WhyChooseAiec";
import Footer from "./Footer";
import Youshouldknow from "./YouShouldknow";

const AiecWorkshop = () => {
  const styles = {
    banner: {
      position: "relative",
      textAlign: "center",
      color: "#ffffff",
      width: "100vw",
      height: "450px",
      marginTop: "-80px", // Ensures it starts from the top edge
      zIndex: "-1", // Ensures it is behind the navbar
      overflow: "hidden",
    },
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      marginTop: "165px",
    },
    bannerContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
    },
    bannerTitle: {
      fontSize: "60px",
      fontWeight: "700",
      marginBottom: "110px",
      color: "black",
      textAlign: "left",
    },
    bannerSubtitle: {
      fontSize: "36px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "black",
      textAlign: "left",
    },
    bannerText: {
      fontSize: "20px",
      margin: "5px 0",
      color: "black",
      textAlign: "left",
    },
    container: {
      width: "100vw",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
      backgroundColor: "#f0f4f8",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    buttonContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "15px",
      marginTop: "30px",
      width: "80%",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "80px",
      borderRadius: "15px",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "none",
      color: "#fff",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    primaryButton: {
      background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    },
    secondaryButton: {
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    infoSection: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "15px",
      marginTop: "20px",
      width: "80%",
    },
    infoButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "80px",
      borderRadius: "15px",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "none",
      color: "#fff",
      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <>
      {/* Banner Section Outside Main Container */}
      <div style={styles.banner}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/abo.jpg`}
          alt="AIEC Workshop"
          style={styles.bannerImage}
        />
        <div style={styles.bannerContent}>
          <h1 style={styles.bannerTitle}>AIEC</h1>
          <h2 style={styles.bannerSubtitle}>TEST PREPARATION</h2>
          <h2 style={styles.bannerSubtitle}>WORKSHOP WEEK</h2>
          <p style={styles.bannerText}>Every Friday | 8 am - 10 Am</p>
          <p style={styles.bannerText}>
            Venue: AIEC office, ADBL Bank's Building, AL3, Putalisadak,
            Kathmandu
          </p>
          <p style={styles.bannerText}>977-01-5908881, 977-01-5908882</p>
          <p style={styles.bannerText}>info@asian.edu.np</p>
        </div>
      </div>

      {/* Main Container */}
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <a href="/bookclass" style={{ ...styles.button, ...styles.primaryButton }}>
            PTE Mock Test Free* / Paid
          </a>
          <a
            href="https://englishtest.duolingo.com/applicants"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.secondaryButton }}
          >
            Duolingo Online Booking
          </a>
          <a
            href="/browsesubject"
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            Browse Subjects
          </a>
        </div>

        <div style={styles.infoSection}>
          <a href="/formpage" style={styles.infoButton}>
            Inquiry or Registration Form
          </a>
          <a href="/bookclass" style={styles.infoButton}>
            AIEC Learning Center Class Schedule 📖
          </a>
          <a href="/browsesubject" style={styles.infoButton}>
            Choose Subject
          </a>
          <a href="/whystudyabroad" style={styles.infoButton}>
            Abroad Study Destination & Facts 🌍
          </a>
          <a href="/resources" style={styles.infoButton}>
            Resources
          </a>
          <a href="/livingabroadsupport" style={styles.infoButton}>
            Learn More
          </a>
        </div>
      </div>

      {/* Footer */}
      <Youshouldknow />
      <WhyChooseAiec />
      <Footer />
    </>
  );
};

export default AiecWorkshop;
