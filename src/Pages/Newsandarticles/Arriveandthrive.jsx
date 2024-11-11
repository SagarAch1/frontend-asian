import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Arriveandthrive = () => {
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
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/arrive.jpeg)`,
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
        <h1 style={styles.headerTitle}>Arrive and Thrive</h1>
        <p style={styles.subheader}>
          Learn how to maximize your study abroad experience.
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
          <h2 style={styles.h2}>Supporting you all the way through</h2>
          <p>
            Embarking on your study abroad journey is a thrilling experience
            filled with opportunities. From meeting new people to learning
            valuable skills, every moment holds the potential for personal and
            academic growth. Adjusting to a new environment can take time, but
            the effort pays off with enriching experiences. We’re here to
            provide continuous support, whether it’s helping with accommodation,
            managing finances, or offering guidance through the immigration
            process. Your well-being is our priority, and we’ve partnered with
            mental health experts to ensure you have access to all the help you
            need. This is your moment to thrive and build a journey you’ll
            cherish forever.
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
            Create your profile and unlock a range of features, including
            personalized suggestions, quicker application processing, and much
            more.
          </p>
          <button style={styles.signupButton} onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Your study abroad experience</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Settle into your new life</h3>
          <p>
            Make the most of your time abroad and embrace your new surroundings.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. Get work experience</h3>
          <p>
            Discover opportunities to advance your career through internships,
            part-time jobs, or mentorships during your studies.
          </p>
          <a href="#" style={styles.listItemLink}>
            Working part-time
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>3. Know what to pack</h3>
          <p>
            Before you pack, take a moment to review this checklist to ensure
            you’ve got everything you need while abroad.
          </p>
          <a href="#" style={styles.listItemLink}>
            This travel checklist
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            4. Access our Student Essential Services
          </h3>
          <p>
            Whether you need support with accommodation, cultural integration,
            or arrival assistance, we’ve got you covered.
          </p>
          <a href="#" style={styles.listItemLink}>
            We're here to help
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>5. Make a study plan</h3>
          <p>
            Ensure you have a clear plan to accomplish your academic and
            personal goals.
          </p>
          <a href="#" style={styles.listItemLink}>
            Study tips
          </a>
        </div>
      </div>
      {/* Second Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Frequently Asked Questions</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            How do I make new friends? What are the networking opportunities?
          </h3>
          <p>
            As an international student, you’ll find many chances to connect
            with others and form friendships. Start by engaging with fellow
            students on campus and attending social events. You can also tap
            into alumni networks for mentorship or join clubs and interest
            groups to meet people with similar passions. There will be numerous
            events to participate in, providing opportunities to create lasting
            friendships, discover job prospects, and get answers to your
            questions. Stay open to new experiences, and you’ll build meaningful
            relationships that enhance your time abroad.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>How do I deal with homesickness?</h3>
          <p>
            Feeling homesick when you first move abroad is completely normal,
            and most students go through it. To cope, try connecting with
            others, exploring your new surroundings, keeping in touch with
            family and friends, and making your space feel familiar and
            comforting. Know that homesickness is just a phase in your journey
            and will gradually fade as you embrace your new adventure.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>How do I find a part-time job?</h3>
          <p>
            As a student, you’re usually allowed to work a set number of hours
            part-time. To find opportunities, check your university’s job board,
            look at local job listings online, network with other students, and
            ask around at local businesses. Be sure to ask about any work-study
            programs that may be available as well.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            Who can help me if I need counselling?
          </h3>
          <p>
            It's normal to seek guidance when you're in a new place, whether
            it’s related to academics, social life, or career. Your university
            likely offers counselling services, and you can also find external
            counsellors in your city. For migration-related questions, AIEC can
            provide assistance in specific locations. Additionally, we’ve
            partnered with mental health professionals who can offer support
            throughout your journey.
          </p>
        </div>
      </div>
      <FormPage />

      <Footer />
    </div>
  );
};

export default Arriveandthrive;
