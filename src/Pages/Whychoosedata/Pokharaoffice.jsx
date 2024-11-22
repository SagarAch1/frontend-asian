import React from "react";
import Footer from "../Homepage/Footer";
import Youshouldknow from "../Homepage/YouShouldknow";

const PokharaOffice = () => {
  const officeData = {
    address: "Nivagalli, Chiplodhunga-09, Pokhara, Nepal",
    phone: "+9779801048957",
    openingHours: "09:00 AM - 05:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.455097395174!2d83.98375838117846!3d28.22386341372524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595667cb215ff%3A0xfe8b4d02bb7d6674!2sNiva%20Galli!5e0!3m2!1sen!2snp!4v1726979628386!5m2!1sen!2snp",
  };

  const navigateToFormPage = () => {
    window.location.href = "/formpage";
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/is.png`}
          alt="Office Header"
          style={styles.headerImage}
        />
        <div style={styles.headerContent}>
          <h1 style={styles.headerText}>AIEC-Global Pokhara Office, Nepal</h1>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.officeDetails}>
          <h2 style={styles.sectionTitle}>Office Details</h2>
          <p>
            <strong>Office Location:</strong> {officeData.address}
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${officeData.phone}`}>{officeData.phone}</a>
          </p>
          <p>
            <strong>Opening Hours:</strong> {officeData.openingHours}
          </p>
        </div>

        <div style={styles.mainContainer}>
          <iframe
            src={officeData.mapUrl}
            width="100%"
            height="300"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div style={styles.buttonsContainer}>
            <div style={styles.card}>
              <h3>Unsure about studying abroad?</h3>
              <p>
                Take a quick quiz to receive tailored advice or connect with one
                of our counselors for a complimentary consultation.
              </p>
              <button style={styles.cardButton} onClick={navigateToFormPage}>
                Get Started
              </button>
            </div>
            <div style={styles.card}>
              <h3>Need guidance? Consult our experts!</h3>
              <p>
                If you're struggling to choose universities or courses, our
                counselors are here to provide assistance and guide you at every
                stage of your journey.
              </p>
              <button style={styles.cardButton} onClick={navigateToFormPage}>
                Meet a Counselor
              </button>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <h2>Embark on Your Study Abroad Journey with AIEC-Global Pokhara</h2>
          <p>
            At AIEC-Global Pokhara, we support your aspirations to study in top
            destinations like Australia, Canada, the USA, the UK, New Zealand,
            and Ireland.
          </p>
          <p>
            Our services encompass everything from course selection to career
            advice, assistance with admission applications, visa processing, and
            securing scholarships, ensuring you have a seamless experience.
          </p>
          <p>
            With a global presence across 32 countries, AIEC-Global Pokhara has
            built a robust network to help you find the right university or
            college where you can thrive.
          </p>
          <p>
            Our counselors provide comprehensive insights into studying and
            living in your desired destination. Situated in Chiplodhunga,
            Pokhara, we have supported numerous students from nearby regions.
            You can visit us in person to discuss your international education
            plans. Our counseling services are entirely free of charge.
          </p>
          <p>
            Meet your dedicated AIEC-Global counselor in Pokhara and take the
            first step toward your global education. Schedule your free
            appointment today!
          </p>
          <button style={styles.footerButton} onClick={navigateToFormPage}>
            Help Me Study Abroad
          </button>
        </div>
      </div>
      <Youshouldknow />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    width: "100%",
    position: "relative",
    marginTop: "82px",
  },
  headerImage: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  headerContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
  },
  headerText: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  officeDetails: {
    padding: "20px 0",
    textAlign: "center",
  },
  sectionTitle: {
    borderBottom: "2px solid #FF5A00",
    paddingBottom: "5px",
    marginBottom: "10px",
    display: "inline-block",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  map: {
    border: "none",
    flex: "1",
    marginRight: "20px",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "35%",
  },
  card: {
    padding: "20px",
    backgroundColor: "#F9F9F9",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  cardButton: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#0073E6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    padding: "20px 0",
    textAlign: "center",
  },
  footerButton: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#0073E6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PokharaOffice;
