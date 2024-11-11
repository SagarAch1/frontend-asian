import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const WhereAndWhatToStudy = () => {
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
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ar.jpg)`,
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
        <h1 style={styles.headerTitle}>Where and What to Study</h1>
        <p style={styles.subheader}>
          We are here to assist you in exploring your study abroad options, from
          selecting a destination to receiving advice on courses and programs.
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
          <h2 style={styles.h2}>Pick your dream destination and course</h2>
          <p>
            You’ve made a major decision to study abroad. Now, it’s time to
            choose the perfect destination and program for you. With so many
            universities and courses to explore, it can feel daunting, but don’t
            worry—AIEC is here to guide you every step of the way. Simply set up
            your profile and we’ll provide you with customized course options
            that match your goals. If you see a course with an AIEC FastLane
            label, you can get a head start by checking your chances of
            acceptance even before submitting your application. We also offer a
            range of helpful tools like city guides, university comparisons,
            cost calculators, scholarship resources, and expert articles to
            simplify your decision-making process and make studying abroad as
            seamless as possible.
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
            Set up your profile to unlock exclusive features like personalized
            recommendations, expedited applications, and much more.
          </p>
          <button style={styles.signupButton} onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>
          Discover how studying abroad can help you
        </h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Choose a destination</h3>
          <p>
            Choose from six fantastic countries to study in. Click below to
            explore more about each destination, including living conditions,
            career prospects after graduation, and residency opportunities.
          </p>
          <a href="#" style={styles.listItemLink}>
            UK | Australia | USA | Canada | New Zealand | Ireland | Korea |
            Germany
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. Explore Cost</h3>
          <p>
            Learn about the costs associated with studying in your chosen
            destination and discover financial options using our Cost
            Calculator.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>3. Pick a Study Level</h3>
          <p>
            Explore undergraduate, graduate, PhD, or pathway courses and find
            the right level for you, along with the requirements for each
            program.
          </p>
          <a href="#" style={styles.listItemLink}>
            Study bachelor's | Study master's | Study PhD | Check your
            eligibility
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>4. Find a Course</h3>
          <p>
            You can either explore course recommendations or dive right into
            browsing the available courses online. If you're unsure about which
            course to choose, let us help you by guiding you through a quick
            4-question quiz.
          </p>
          <a href="#" style={styles.listItemLink}>
            Course advice | Subject guides |Find a Course
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>5. Choose a University</h3>
          <p>
            Explore universities in six different countries to find the ones
            that match your academic objectives and ambitions.
          </p>
          <a href="#" style={styles.listItemLink}>
            Check uni ranking | Find a uni
          </a>
        </div>
      </div>
      {/* Second Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Frequently asked questions</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>What is studying abroad?</h3>
          <p>
            Studying abroad involves living in another country to pursue an
            education. It can range from a short course lasting a few weeks to a
            full-time, four-year degree program.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            How is it different from studying locally?
          </h3>
          <p>
            Although studying locally may seem like the simpler choice, studying
            abroad provides unique opportunities and experiences that are
            unavailable at home. To learn more, read this article on whether to
            study abroad or stay local.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            What are the main benefits of studying overseas?
          </h3>
          <p>
            Studying abroad provides numerous advantages, including fostering a
            global perspective, developing new skills, and boosting your career
            opportunities. For more details, read our article on the benefits of
            studying abroad.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>What's the experience like?</h3>
          <p>
            Studying abroad is a life-changing journey that fosters personal
            growth, expands your worldview, and helps you build independence,
            self-confidence, and a deeper understanding of diverse cultures. To
            learn more about the experience, meet students who have chosen to
            study abroad with AIEC.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>Will I be able to afford it?</h3>
          <p>
            Studying abroad may be more affordable than you imagine! Use our
            cost of living calculator to get an estimate of your expenses as an
            international student. Additionally, we provide access to over 5,100
            scholarships through our partner universities. Contact us to explore
            the opportunities available to you.
          </p>
        </div>
      </div>
      <FormPage />
      <Footer />
    </div>
  );
};

export default WhereAndWhatToStudy;
