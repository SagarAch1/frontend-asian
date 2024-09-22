import React from "react";

const KathmanduOffice = () => {
  const officeData = {
    address:
      "Putalisadak, Kathmandu, ADBL Bank's Building, AL3, Putalisadak-30, Kathmandu, Nepal",
    phone: "977-01-5908881/5908882",
    openingHours: "09:00 AM - 05:30 PM",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3709997553105!2d85.32043637556089!3d27.705829276183444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195c580e7a5d%3A0xf35b7e6ce96c9d55!2sAsian%20International%20Education%20and%20Migration%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1726823511164!5m2!1sen!2snp",
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
          <h1 style={styles.headerText}>IDP Kathmandu Office, Nepal</h1>
          <div style={styles.buttonsContainer}>
            <button style={styles.enquireButton} onClick={navigateToFormPage}>
              Enquire now
            </button>
            <button style={styles.shareButton}>
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
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
          <iframe
            src={officeData.mapUrl}
            width="100%"
            height="300"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div style={styles.sidebar}>
          <div style={styles.card}>
            <h3>Not sure about your study abroad journey?</h3>
            <p>
              Answer a few questions to get personalized content optimized for
              you or get in touch with one of our counsellors for a free
              consultation.
            </p>
            <button style={styles.cardButton} onClick={navigateToFormPage}>
              Get started
            </button>
          </div>
          <div style={styles.card}>
            <h3>Feeling stuck? Let our expert counsellor help you.</h3>
            <p>
              Can't decide on the university and courses? Our experienced
              counsellors are here to guide and support you through each step of
              your study abroad journey.
            </p>
            <button style={styles.cardButton} onClick={navigateToFormPage}>
              Meet a counsellor
            </button>
          </div>
        </div>

        <div style={styles.footer}>
          <h2>Study abroad with IDP Nepal - Kathmandu</h2>
          <p>
            We at IDP Nepal: Kathmandu assist you in fulfilling your dream of
            studying abroad in the most sought-after countries – Australia,
            Canada, the USA, the UK, New Zealand, and Ireland.
          </p>
          <p>
            IDP provides a wide range of services to support your international
            education journey. We are dedicated to you and your international
            future – from course information to career advice to efficient
            processing of your admission application, student visa processing,
            and helping you find a better scholarship. IDP will be here to help
            you.
          </p>
          <button style={styles.footerButton} onClick={navigateToFormPage}>
            Help me Study abroad
          </button>
        </div>
      </div>
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
  buttonsContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  },
  enquireButton: {
    padding: "10px 20px",
    backgroundColor: "#FF5A00",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  shareButton: {
    padding: "10px",
    backgroundColor: "#E5E5E5",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
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
  map: {
    border: "none",
    marginTop: "10px",
  },
  sidebar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0",
  },
  card: {
    width: "45%",
    padding: "20px",
    backgroundColor: "#F9F9F9",
    borderRadius: "10px",
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

export default KathmanduOffice;
