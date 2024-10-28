import React from "react";
import Footer from "./Footer"; 
import WhyChooseAiec from "../Homepage/WhyChooseAiec";
import Youshouldknow from "./YouShouldknow";

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
      display: "flex",
      justifyContent: "center",
      margin: "30px 0",
      gap: "20px",
    },
    button: {
      padding: "15px 25px",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      textDecoration: "none",
      display: "inline-block",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      background: "linear-gradient(135deg, #f06, #f79)",
      color: "#fff",
      borderBottom: "3px solid rgba(0, 0, 0, 0.3)",
    },
    primaryButton: {
      background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    },
    secondaryButton: {
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
    },
    infoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "40px",
    },
    infoButton: {
      width: "280px",
      margin: "10px 0",
      padding: "15px 20px",
      borderRadius: "25px",
      fontWeight: "600",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
      color: "#fff",
      borderBottom: "3px solid rgba(0, 0, 0, 0.3)",
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
