import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Afterreceivingoffer = () => {
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
    headerWrapper: {
      width: "100%",
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
    <>
      {/* Header Section */}
      <div style={styles.headerWrapper}>
        <div style={styles.headerSection}>
          <h1 style={styles.headerTitle}>After receiving an offer</h1>
          <p style={styles.subheader}>
            Here are the steps to take from accepting an offer through to
            planning for your trip to make your study abroad dream a reality.
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
            <h2 style={styles.h2}>It's decision time</h2>
            <p>
              Congratulations! An accepted university application means you’re
              one step closer to achieving your dream of studying abroad. It’s
              an exciting moment, but it’s also common to feel a bit anxious.
              Our team is here to assist you at every stage. Speak with one of
              our skilled counselors for guidance after receiving your offer. We
              can also support you with visa applications, money transfers,
              health insurance, and accommodation before you move. Relax, take a
              deep breath, and make your decision confidently knowing we are
              here to support you at every step.
            </p>
          </div>
          <div style={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7hCujCUB7kM?rel=0"
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
              Set up your profile and gain access to a host of features, such as
              personalized recommendations, fast-tracked applications, and much
              more.
            </p>
            <button style={styles.signupButton} onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>

        {/* Additional Section */}
        <div style={styles.additionalSection}>
          <h2 style={styles.additionalTitle}>
            Next steps after receiving an offer
          </h2>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>1. Track your application</h3>
            <p>
              Stay updated every step of the way with our ‘Application Tracker’
              as you await your results.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              2. Choosing between multiple offers
            </h3>
            <p>
              Received more than one offer? This exciting, yet tricky situation
              calls for careful thought and consideration.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              3. Pay admission and tuition fees
            </h3>
            <p>
              Congratulations! Need assistance with fund transfers? We are here
              to support you through the process.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              4. Access our Student Essential Services
            </h3>
            <p>
              Plan your move by finding accommodation, applying for health
              insurance, and more.
            </p>
            <a href="#" style={styles.listItemLink}>
              Student visa | Money transfer | Student banking | Accommodation |
              Health insurance
            </a>
          </div>
        </div>
        <div style={styles.additionalSection}>
          <h2 style={styles.additionalTitle}>Commonly asked questions</h2>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              Does having an acceptance offer guarantee a student visa?
            </h3>
            <p>
              While having an acceptance offer increases your chances of
              securing a student visa, it does not guarantee approval. Visa
              approval depends on various factors such as your application,
              eligibility criteria, and compliance with immigration laws.
              AIEC-Global is here to assist you with your visa process. Contact
              our expert counsellors to maximize your chances of a successful
              visa application.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              Can I reapply if I decline an offer?
            </h3>
            <p>
              Yes, you can usually reapply to the same university or program at
              a later time. However, make sure to review the university’s
              reapplication guidelines, deadlines, and any changes in admission
              criteria when considering your next application.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              Do I need health insurance before applying for a student visa?
            </h3>
            <p>
              Health insurance requirements differ by country. In some
              countries, like Australia, you’ll need health coverage before
              applying for a student visa. Contact an AIEC-Global counsellor for
              detailed information about health insurance for studying abroad.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>
              How can I connect with students from different universities to
              learn about their experiences?
            </h3>
            <p>
              Gain insights from AIEC-Global students studying at international
              universities by checking out our #AskAIEC-Global videos and
              articles on our website and the AIEC-Global Live app.
            </p>
          </div>
          <div style={styles.listItem}>
            <h3 style={styles.listItemTitle}>What if I'm not accepted?</h3>
            <p>
              Don’t be disheartened if you’re not accepted. There are many other
              courses that may still be a good fit for you. Reach out to an
              AIEC-Global counsellor to discuss your study objectives, and
              they’ll connect you with the right program, country, university,
              and even scholarships. They can also guide you toward pathway
              programs that can lead you to your desired course.
            </p>
          </div>
        </div>

        <FormPage />
      </div>
      <Footer />
    </>
  );
};

export default Afterreceivingoffer;
