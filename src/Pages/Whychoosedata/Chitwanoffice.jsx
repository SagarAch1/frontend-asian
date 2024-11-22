import React from "react";
import Footer from "../Homepage/Footer";
import Youshouldknow from "../Homepage/YouShouldknow";

const ChitwanOffice = () => {
  const officeData = {
    address: "Tejman Plaza AL5, Pulchok-03, Narayangurh, Chitwan Nepal",
    phone: "+97756527974",
    openingHours: "09:00 AM - 05:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6353702698307!2d84.41815947530027!3d27.697662476188142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb224c79fd03%3A0x737835fc6d7dca86!2sPulchowk!5e0!3m2!1sen!2snp!4v1726980530330!5m2!1sen!2snp",
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
          <h1 style={styles.headerText}>AIEC-Global Kathmandu Office, Nepal</h1>
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
              <h3>Need help with your study abroad plans?</h3>
              <p>
                Take a short quiz to get personalized recommendations or connect
                with one of our counselors for a free consultation.
              </p>
              <button style={styles.cardButton} onClick={navigateToFormPage}>
                Get Started
              </button>
            </div>
            <div style={styles.card}>
              <h3>Stuck in the process? Our experts can help.</h3>
              <p>
                Unsure about universities or courses? Our experienced counselors
                are here to guide you at every step of your study abroad
                journey.
              </p>
              <button style={styles.cardButton} onClick={navigateToFormPage}>
                Meet a Counselor
              </button>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          <h2>
            Explore Study Opportunities with AIEC-Global Nepal - Kathmandu
          </h2>
          <p>
            At AIEC-Global Nepal: Kathmandu, we assist you in achieving your
            dream of studying abroad in top destinations such as Australia,
            Canada, the USA, the UK, New Zealand, and Ireland.
          </p>
          <p>
            We provide comprehensive services to support your global education
            plans, from course guidance to career counseling, application
            assistance, visa processing, and finding scholarships. AIEC-Global
            is your trusted partner throughout this journey.
          </p>
          <p>
            With offices in 32 countries, we’ve built a strong network of
            opportunities to help students identify and secure the right
            university or college to excel.
          </p>
          <p>
            Our trained counselors offer in-depth guidance on studying and
            living abroad. Based in Hattisar, Kathmandu, we’ve supported many
            students from regions like Lalitpur, Syuchatar, New Baneshwor,
            Gothatar, and beyond. Visit us to discuss your plans or benefit from
            our free study abroad counseling services.
          </p>
          <p>
            Meet your dedicated AIEC-Global counselor in Kathmandu, Nepal, and
            take the next step. Visit us or schedule your FREE appointment
            today.
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

export default ChitwanOffice;
