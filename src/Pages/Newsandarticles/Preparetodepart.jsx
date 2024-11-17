import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Preparetodepart = () => {
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
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/whystudyabroad.jpeg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "100px 25px",
      textAlign: "center",
      color: "white",
      width: "100%",
      minHeight: "400px",
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
    headerWrapper: {
      width: "100%",
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
    <>
    
      {/* Header Section */}
      <div style={styles.headerWrapper}>
      <div style={styles.headerSection}>
        <h1 style={styles.headerTitle}>Preparing to depart</h1>
        <p style={styles.subheader}>
          We're here to help set you up for your study abroad adventure.
        </p>
      </div>
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
      <div style={styles.page}>
      <div style={styles.contentSection}>
        <div style={styles.leftColumn}>
          <h2 style={styles.h2}>Let's set you up for the big move</h2>
          <p>
            The countdown has started, and you're all set to depart! While it's
            an exciting time, we understand it can be just as overwhelming to
            leave the comfort of your home for a new country. We're here to ease
            your transition. From packing tips and arrival support to setting up
            essential services like bank accounts and accommodation, we’re here
            to guide you. Our team will assist you in ensuring everything is
            ready, allowing you to focus on your studies and embrace the next
            chapter of your life.
          </p>
        </div>
        <div style={styles.videoContainer}>
        <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={styles.video}
            ></iframe>
        </div>
        <div style={styles.signupSection}>
          <p>One account for all your study abroad needs</p>
          <p>
            Create your profile to unlock exclusive features, including
            personalized recommendations, fast-tracked applications, and more.
          </p>
          <button style={styles.signupButton} onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Before you depart</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Get pre-departure support</h3>
          <p>
            Our counsellors will provide in-depth pre-departure briefings,
            ensuring you're well-prepared for your journey abroad.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. Get to know your destination</h3>
          <p>
            Familiarize yourself with what to expect at your destination before
            you arrive.
          </p>
          <a href="#" style={styles.listItemLink}>
            Explore amenities | Find local food | Find groceries
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>3. Know what to pack</h3>
          <p>
            Before packing your bags, take a moment to review this checklist to
            make sure you have everything you need during your stay abroad.
          </p>
          <a href="#" style={styles.listItemLink}>
            Check out the travel checklist
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            4. Access our Student Essential Services
          </h3>
          <p>
            Whether it's on-arrival support, accommodation assistance, or
            cultural integration, we’re here to help.
          </p>
          <a href="#" style={styles.listItemLink}>
            We're here to help
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>5. Make a study plan</h3>
          <p>
            Ensure you have a well-structured plan to achieve your academic
            goals while studying abroad.
          </p>
          <a href="#" style={styles.listItemLink}>
            Read more about making a study plan
          </a>
        </div>
      </div>

      {/* Second Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Frequently Asked Questions</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>How do I find accommodation?</h3>
          <p>
            We can assist you in finding accommodation in your destination
            country. Through our partnerships with trusted providers, we offer
            options such as homestays and student apartments. Once you decide,
            we'll guide you through the application process to ensure you secure
            a place that meets your needs.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            Who will receive me upon arrival?
          </h3>
          <p>
            Arrival support varies depending on your destination. If our team is
            on the ground in your destination country, we can help arrange an
            airport pick-up and provide support upon your arrival. Many
            universities also offer airport transfers. For detailed information,
            check our 'Preparing to Depart' and 'Arrive and Thrive' pages or
            reach out during the planning stage.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>How do I find transport?</h3>
          <p>
            Before you depart, we will provide a city guide with information on
            bus and train routes. You can also explore other public
            transportation options available in your destination. If needed,
            feel free to contact an onshore counselor for additional help in
            arranging your transport.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            Will I find local cuisine at the destination?
          </h3>
          <p>
            Most destinations offer a variety of international food options,
            making it easy to find something familiar. However, we encourage you
            to explore and enjoy local cuisines as part of your study abroad
            experience. Check our city guide for more information on food
            options at your destination.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>What about groceries?</h3>
          <p>
            Large supermarkets in many destinations have international sections
            where you can find your favorite food items. Additionally, there are
            specialized stores for Asian, Indian, and Middle Eastern groceries.
            For more details, refer to our city guides or contact an onshore
            counselor if available.
          </p>
        </div>
      </div>

      <FormPage />
     
    </div>
    <Footer />
    </>
  );
};

export default Preparetodepart;
