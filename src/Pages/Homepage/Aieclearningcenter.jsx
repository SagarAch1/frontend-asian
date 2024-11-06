
import React from "react";
import Footer from "./Footer"; 
import WhyChooseAiec from "../Homepage/WhyChooseAiec";
import Youshouldknow from "./YouShouldknow";
import { Fa } from "react-icons/fa";

const aiecWorkshop = () => {
  const styles = {
    container: {
      width: "100vw",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
      backgroundColor: "#f0f4f8",
      marginTop: "80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    banner: {
      position: "relative",
      textAlign: "center",
      color: "#ffffff",
    },
    bannerImage: {
      width: "100vw",
      height: "40vh",
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
      marginBottom: "10px",
    },
    bannerSubtitle: {
      fontSize: "36px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    bannerText: {
      fontSize: "20px",
      margin: "5px 0",
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
      height: "80px", // Reduced size for a sleeker look
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
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
      },
    },
  };

  return (
    <>
      {/* Main Container */}
      <div style={styles.container}>
        <div style={styles.banner}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/new.jpeg`}
            alt="AIEC Workshop"
            style={styles.bannerImage}
          />
          <div style={styles.bannerContent}>
            <h1 style={styles.bannerTitle}>AIEC</h1>
            <h2 style={styles.bannerSubtitle}>TEST PREPARATION</h2>
            <h2 style={styles.bannerSubtitle}>WORKSHOP WEEK</h2>
            <p style={styles.bannerText}>Sunday to Friday | 10 am - 5 pm</p>
            <p style={styles.bannerText}>
              Venue: AIEC office, ADBL Bank's Building, AL3, Putalisadak, Kathmandu
            </p>
            <p style={styles.bannerText}>977-01-5908881, 977-01-5908882</p>
            <p style={styles.bannerText}>info@asian.edu.np</p>
          </div>
        </div>

        <div style={styles.buttonContainer}>
          <a href="/abc" style={{ ...styles.button, ...styles.primaryButton }}>
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
            href="/anotherLink"
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            Another Button
          </a>
        </div>

        <div style={styles.infoSection}>
          <a href="/formpage" style={styles.infoButton}>
            Inquiry or Registration Form
          </a>
          <a href="/bookclass" style={styles.infoButton}>
            AIEC Learning Center Class Schedule 📖
          </a>
          <a href="/bcd" style={styles.infoButton}>
            Universities Represented by AIEC 🎓
          </a>
          <a href="/whystudyabroad" style={styles.infoButton}>
            Abroad Study Destination & Facts 🌍
          </a>
          <a href="/resources" style={styles.infoButton}>
            Resources
          </a>
          <a href="/moreinfo" style={styles.infoButton}>
            More Information
          </a>
        </div>
      </div>

      {/* Footer - Placed outside of the main container */}
      <Youshouldknow />
      <WhyChooseAiec />
      
      <Footer />
    </>
  );
};

export default aiecWorkshop;

