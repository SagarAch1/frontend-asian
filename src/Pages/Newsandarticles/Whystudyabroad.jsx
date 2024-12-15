import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
import VideoSection from "../Homepage/Homevedio";

const Preparetodepart = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const styles = {
    page: { fontFamily: "Arial, sans-serif", padding: "20px" },
    navbar: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#0056b3",
      padding: "10px",
      color: "white",
      cursor: "pointer",
      position: "relative",
      width: "100%",
      zIndex: 1000,
    },
    headerWrapper: {
      width: "100%",
    },
    headerSection: {
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/lcc.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "100px 25px",
      textAlign: "center",
      color: "white",
      width: "100%",
      minHeight: "400px",
    },
    headerTitle: { fontSize: "36px", fontWeight: "bold", color: "black" },
    subheader: { fontSize: "18px", marginTop: "10px", color: "black" },
    contentSection: {
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: "20px",
      alignItems: "center",
      marginTop: "70px",
    },
    leftColumn: {
      gridColumn: "1 / 2",
    },
    h2: {
      color: "blue",
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
      width: "100%",
      maxWidth: "600px",
      height: "300px",
      backgroundColor: "#f7f7f7",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    video: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
    navigate("/register");
  };

  return (
    <>
      {/* Header Section */}
      <div style={styles.headerWrapper}>
        <div style={styles.headerSection}>
          <h1 style={styles.headerTitle}>Why study abroad?</h1>
          <p style={styles.subheader}>
            Learn how studying abroad opens a world of opportunities.
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
            <h2 style={styles.h2}>
              Expand your horizons, skills and opportunities
            </h2>
            <p>
              Looking to invest in yourself for a successful future? Studying
              abroad is a once-in-a-lifetime journey that unlocks new
              opportunities and pathways. It’s your chance to obtain a
              world-class education, embrace a global perspective, develop
              valuable skills, and gain essential expertise to enhance your
              career prospects. So, get ready to take the leap and experience
              the world through the eyes of an international student!
            </p>
          </div>
          <div style={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7VVkxTD0jJo?rel=0"
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
              Set up your profile to access a variety of features, such as
              tailored recommendations, expedited applications, and much more.
            </p>
            <button style={styles.signupButton} onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>

        {/* Additional Sections */}
        <div style={styles.additionalSection}>
          <h2 style={styles.additionalTitle}>
            Discover how studying abroad can help you
          </h2>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>1. Benefits of studying abroad</h3>
            <p>
              Explore how studying abroad can support your success—from quality
              education and personal growth to career advancement—through these
              insightful articles and videos.
            </p>
            <a href="#" style={styles.listItemLink}>
              What is studying abroad | Why study abroad|Study abroad vs study
              locally |Benefits
            </a>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>2. The study abroad experience</h3>
            <p>
              Learn all about what it’s like to experience life in a different
              country.
            </p>
            <a href="#" style={styles.listItemLink}>
              What's the experience like | How much does it typically cost?
            </a>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>3. Breaking down the steps</h3>
            <p>Not sure where to start? Follow these simple steps</p>
            <a href="#" style={styles.listItemLink}>
              Simple steps
            </a>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              4. Study abroad guide for parents
            </h3>
            <p>
              Discover how you can assist your child's international education
              journey with valuable resources, including articles and videos
              that explain what to expect and what life is like in different
              countries.
            </p>
            <a href="#" style={styles.listItemLink}>
              Study abroad parent's guide | Is it safe?
            </a>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>5. Hear from our students</h3>
            <p>
              If you're considering studying abroad, you can read and watch
              videos featuring firsthand experiences from our students to help
              guide your study abroad choices.
            </p>
            <a href="#" style={styles.listItemLink}>
              First-hand experiences
            </a>
          </div>
        </div>
        <VideoSection />

        {/* Second Additional Section */}
        <div style={styles.additionalSection}>
          <h2 style={styles.additionalTitle}>Frequently asked questions</h2>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>What is studying abroad?</h3>
            <p>
              Studying abroad involves living in another country to pursue an
              international education. This experience can vary greatly, from
              short courses lasting a few weeks to full-time study programs
              extending over four years.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              How is it different from studying locally?
            </h3>
            <p>
              Although studying locally may be the more convenient choice,
              studying abroad provides unique opportunities and experiences that
              you won’t find at home. For further insights, read our article
              comparing studying abroad to studying locally.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              What are the main benefits of studying overseas?
            </h3>
            <p>
              Studying abroad brings numerous advantages, from fostering a
              global outlook to helping you acquire new skills and boost your
              career opportunities. To learn more, explore our article on the
              many benefits of studying abroad.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>What's the experience like?</h3>
            <p>
              Studying abroad is a life-changing experience that fosters
              personal growth, helping you expand your outlook, build
              independence, boost self-confidence, and gain a deeper
              appreciation for different cultures. To understand what it’s truly
              like, hear from students who have chosen to study abroad with
              AIEC-Global.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>Will I be able to afford it?</h3>
            <p>
              Studying abroad might be more affordable than you expect! Use our
              cost of living calculator to estimate the total expenses you’ll
              need as an international student. We also offer access to over
               scholarships through our partner universities. Contact us to
              explore all your available options.
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
