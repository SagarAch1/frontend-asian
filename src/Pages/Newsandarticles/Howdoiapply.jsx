import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Howdoiapply = () => {
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
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/is.png)`,
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
        <h1 style={styles.headerTitle}>How do I apply?</h1>
        <p style={styles.subheader}>
          AIEC is here to guide you through the application process.
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
          <h2 style={styles.h2}>Kickstart your application with confidence</h2>
          <p>
            Congratulations on narrowing down your ideal university and course! The next step is to submit your application. You can apply to as many universities as you want, but we suggest focusing on your top three choices. The AIEC Live app will assist you in completing the application forms and gathering necessary documents. Simply fill out the application form once to apply to all your selected courses, with access to expert guidance throughout the process. Be sure to take note of the intake dates, deadlines, and required documents such as application forms, academic transcripts, letters of recommendation, and IELTS test results. Whether you use the app or work with a counselor, we’ll be here to guide you every step of the way.
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
            Create your profile to unlock personalized recommendations, expedited applications, and much more.
          </p>
          <button style={styles.signupButton} onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
      </div>

      {/* Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Steps to apply</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Who can help me</h3>
          <p>Book a free appointment with an AIEC counselor</p>
          <a href="#" style={styles.listItemLink}>
            About AIEC |Why AIEC | Free study abroad counseling
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. Check your eligibility</h3>
          <p>
            With AIEC FastLane, you can check if you can get into a course
            before applying. Learn more about the FastLane process here.
          </p>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            3. Check the application guidelines
          </h3>
          <p>
            Review course requirements and documents to be completed in the
            application process.
          </p>
          <a href="#" style={styles.listItemLink}>
            Statement of purpose | Letter of recommendation
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>
            4. Check English proficiency requirements
          </h3>
          <p>
            Most courses require proof of your English language proficiency.
            IELTS is a popular choice among test takers. Learn more about preparing for IELTS.
          </p>
          <a href="#" style={styles.listItemLink}>
            Why IELTS with AIEC | Prepare for IELTS | Book IELTS
          </a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>5. Submit your application</h3>
          <p>
            AIEC can help you submit your application and assist with the
            necessary documents. Get started today!
          </p>
          <a href="officelocator" style={styles.listItemLink}>
            Find your nearest AIEC office
          </a>
        </div>
      </div>
      <div style={styles.additionalSection}>
  <h2 style={styles.additionalTitle}>Frequently Asked Questions</h2>
  <div style={styles.listItem}>
    <h3 style={styles.listItemTitle}>What is the process to apply to foreign universities?</h3>
    <p>
      After selecting the courses you want to apply for, you can begin your application via the AIEC Live app. Start by clicking the ‘Apply with IDP’ button for your first choice of course. You can fill out the application form at your convenience, with your progress automatically saved. If you run into difficulties, you can submit an incomplete form or contact your AIECcounsellor. Once the form is completed, you can reuse it for additional applications. You'll also be guided to upload any required documents. Once your counsellor confirms all your details and documents, they will proceed with submitting your application to the university.
    </p>
  </div>
  <div style={styles.listItem}>
    <h3 style={styles.listItemTitle}>How do I check if I can get in before I apply?</h3>
    <p>
      If the course you’re considering has the AIEC FastLane tag, you can check your likelihood of acceptance even before submitting your application. Start by creating an AIEC account and completing your academic profile. If you meet the course’s entry requirements, you’ll receive an Offer in Principle from the university. With this offer, your application will be processed 2 to 3 times faster!
    </p>
  </div>
  <div style={styles.listItem}>
    <h3 style={styles.listItemTitle}>How can I improve my acceptance chances?</h3>
    <p>
      To increase your chances of acceptance, we recommend narrowing down your top three course choices. Ensure you’ve reviewed all entry criteria, deadlines, and intake dates for your chosen courses. Complete your application form with precision. Our experienced counsellors will evaluate your application and documents, ensuring they are polished and optimized to improve your acceptance chances.
    </p>
  </div>
  <div style={styles.listItem}>
    <h3 style={styles.listItemTitle}>Who can help me navigate through the process?</h3>
    <p>
      The AIEC Live app is your go-to resource for starting the application process. It offers easy-to-follow tools that guide you through each step, allowing you to complete your application at your own pace. If you need assistance, our expert counsellors are available to support you. They will review your application and documents before submitting them directly to the university on your behalf.
    </p>
  </div>
</div>

      <FormPage />
      <Footer />
    </div>
  );
};

export default Howdoiapply;
