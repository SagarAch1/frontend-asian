import React from "react";

const aiecWorkshop = () => {
  const styles = {
    container: {
      width: "100vw", // Full width of the viewport
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      marginTop: "80px", // Adjust this value according to your navbar height
    },
    banner: {
      position: "relative",
      textAlign: "center",
      color: "white",
    },
    bannerImage: {
      width: "100vw", // Full width of the viewport
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
      fontSize: "50px",
      fontWeight: "bold",
    },
    bannerSubtitle: {
      fontSize: "30px",
    },
    bannerText: {
      fontSize: "18px",
      margin: "5px 0",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "20px 0",
    },
    button: {
      padding: "15px 25px",
      border: "none",
      borderRadius: "5px",
      margin: "0 10px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s ease",
      textDecoration: "none",
      color: "white",
      display: "inline-block",
    },
    primaryButton: {
      backgroundColor: "#007bff",
    },
    secondaryButton: {
      backgroundColor: "#28a745",
    },
    infoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    },
    infoButton: {
      width: "300px",
      backgroundColor: "#007bff",
      margin: "10px 0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/new.jpeg`}
          alt="aiec Workshop"
          style={styles.bannerImage}
        />
        <div style={styles.bannerContent}>
          <h1 style={styles.bannerTitle}>AIEC</h1>
          <h2 style={styles.bannerSubtitle}>TEST PREPARATION</h2>
          <h2 style={styles.bannerSubtitle}>WORKSHOP WEEK</h2>
          <p style={styles.bannerText}>Sunday to Friday | 10 am - 5 pm</p>
          <p style={styles.bannerText}>
            Venue: AIEC office
            ADBL Bank's Building, AL3, Putalisadak, Kathmandu
          </p>
          <p style={styles.bannerText}>977-01-5908881,  977-01- 5908882 </p>
          <p style={styles.bannerText}>info@asian.edu.np</p>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <a href="/contact" style={{ ...styles.button, ...styles.primaryButton }}>
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
        <a href="/formpage" style={{ ...styles.button, ...styles.secondaryButton }}>
          Inquiry or Registration Form
        </a>
        <a href="/bookclass" style={{ ...styles.button, ...styles.infoButton }}>
          AIEC Learning Center Class Schedule 📖
        </a>
        <a href="/bcd" style={{ ...styles.button, ...styles.secondaryButton }}>
          Universities Represented by AIEC 🎓
        </a>
        <a href="/whystudyabroad" style={{ ...styles.button, ...styles.infoButton }}>
          Abroad Study Destination & Facts 🌍
        </a>
      </div>
    </div>
  );
};

export default aiecWorkshop;
