import React from "react";
import Footer from "../Homepage/Footer";
import Youshouldknow from "../Homepage/YouShouldknow";

const SydneyOffice = () => {
  const officeData = {
    address: "Sydney Office 70 Raymond Avenue, Campbelltown, Sydney-Australia",
    phone: "0425883105 /+61 425883105",
    openingHours: "09:00 AM - 05:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3305.1133377415745!2d150.82584917556113!3d-34.066608773151515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d-34.0665821!2d150.82847769999998!5e0!3m2!1sen!2snp!4v1726980802528!5m2!1sen!2s",
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
          <h1 style={styles.headerText}>AIEC Kathmandu Office, Nepal</h1>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.officeDetails}>
          <h2 style={styles.sectionTitle}>Office details</h2>
          <p>
            <strong>Office Location:</strong> {officeData.address}
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${officeData.phone}`}>{officeData.phone}</a>
          </p>
          <p>
            <strong>Opening hours:</strong> {officeData.openingHours}
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
              <h3>Not sure about your study abroad journey?</h3>
              <p>
                Take a short quiz to receive personalized recommendations or
                connect with one of our counselors for free guidance.
              </p>
              <button style={styles.cardButton} onClick={navigateToFormPage}>
                Get started
              </button>
            </div>
            <div style={styles.card}>
              <h3>Feeling stuck? Let our expert counsellor help you.</h3>
              <p>
                Struggling to choose the right university or course? Our
                experienced counselors are here to assist and guide you through
                every step of your study abroad process.
              </p>
              <button style={styles.cardButton} onClick={navigateToFormPage}>
                Meet a counsellor
              </button>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <h2>Study abroad with AIEC Nepal - Kathmandu</h2>
          <p>
            At AIEC Nepal: Kathmandu, we help students achieve their aspirations
            to study in top destinations like Australia, Canada, the USA, the
            UK, New Zealand, and Ireland.
          </p>
          <p>
            AIEC offers a comprehensive range of services to support your global
            education goals, from course guidance and career advice to admission
            processing, visa assistance, and securing scholarships. We're here
            for you every step of the way.
          </p>
          <p>
            Our extensive network of experts and offices in 32 countries enables
            us to assist students in finding the right university or college
            where they can excel.
          </p>
          <p>
            Our counselors at AIEC are skilled in providing end-to-end guidance
            for studying and living in your dream destination. Located in
            Hattisar, Kathmandu, we've supported students from areas like
            Lalitpur, Syuchatar, New Baneshwor, Gothatar, Mahankal, Baglung,
            Butwal, Pokhra, and beyond. Visit us for expert advice on your
            international education journey. We offer free study abroad
            counseling services for all students.
          </p>
          <p>
            Meet your dedicated AIEC counselor in Kathmandu, Nepal, and take the
            first step toward your dreams. Visit us or book your free
            appointment today.
          </p>
          <button style={styles.footerButton} onClick={navigateToFormPage}>
            Help me Study abroad
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

export default SydneyOffice;
