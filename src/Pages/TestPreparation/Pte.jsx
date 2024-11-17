import React from "react";
import {
  FaBookOpen,
  FaCheckCircle,
  FaGraduationCap,
  FaHandshake,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const navbarHeight = "60px";

const PtePreparationPage = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pteee.jpeg`} // Replace with your image path
          alt="Pte Preparation"
          style={styles.headerImage}
        />
      </header>
      <div style={styles.contentContainer}>
        <div style={styles.sidebar}>
          <ul style={styles.testList}>
            <li>
              <button style={styles.testButton}>
                IELTS<FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
            <li>
              <button style={styles.testButton}>
                TOEFL <FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
            <li>
              <button style={styles.testButton}>
                SAT <FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
            <li>
              <button style={styles.testButton}>
                Duolingo <FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
          </ul>

          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
            alt="Pte Preparation"
            style={styles.sidebarImage}
          />

          <button style={styles.bookButton}>Book Your Pte</button>
        </div>

        <div style={styles.mainContent}>
          <h1 style={styles.heading}>
            Pte Preparation: Your Gateway to Success
          </h1>
          
          <p style={styles.text}>
            The Pearson Test of English (PTE) is a globally recognized computer-based test that assesses the language proficiency of non-native English speakers. It evaluates key language skills, including reading, writing, listening, and speaking, offering a smooth testing experience with rapid results. PTE focuses on practical language use in everyday situations.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Pte.jpg`}
            alt="Pte Preparation"
            style={styles.image}
          />
          <h2 style={styles.subHeading}>Expert Tips for Success</h2>
          <div style={styles.tipsGrid}>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaUsers style={styles.icon} />
              </div>
              <p>Improve your time management to finish each section efficiently.</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaBookOpen style={styles.icon} />
              </div>
              <p>Concentrate on refining your grammar, vocabulary, and writing coherence.</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaGraduationCap style={styles.icon} />
              </div>
              <p>Make speaking practice a part of your daily routine.</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaHandshake style={styles.icon} />
              </div>
              <p>Enhance your listening comprehension by immersing yourself in English audio.</p>
            </div>
          </div>
          <h2 style={styles.subHeading}>Understanding the Pte Test</h2>
          <p style={styles.text}>
            The PTE exam is divided into four sections: Listening, Reading, Writing, and Speaking. These sections test different aspects of language proficiency that are essential for effective communication in English-speaking settings. Familiarizing yourself with the test structure and practicing with real-world materials will significantly boost your chances of success.
          </p>
          <h2 style={styles.subHeading}>Key Versions of Pte</h2>
          <ul style={styles.list}>
            <li>
              <strong>Academic Version:</strong> Intended for university-bound students, medical professionals, and nurses seeking academic admissions or licensure.
            </li>
            <li>
              <strong>General Training Version:</strong> Designed for individuals pursuing vocational training, employment, or immigration.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            PTE scores are widely accepted by universities, employers, and government agencies around the world. Known for its consistency and precision, PTE is endorsed by thousands of academic institutions, professional organizations, and governments globally, making it a trusted measure of English proficiency.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The total duration of the PTE Academic test is approximately 3 hours, with each section (Speaking, Writing, Reading, Listening) completed in sequence, without breaks.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          <p style={styles.text}>
            PTE scores range from 10 to 90, with higher scores reflecting a higher level of English proficiency. Each score level corresponds to a specific proficiency range, from beginner to expert, offering a clear evaluation of your abilities across the four test areas.
          </p>
          <h2 style={styles.subHeading}>Our Benefits</h2>
          <p style={styles.text}>
            Choosing the right consultancy can significantly impact your international journey and success. At AIEC GLOBAL, we take pride in the unique advantages we offer:
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="Pte Preparation"
            style={styles.sidebrImage}
          />
          <ul style={styles.benefitsList}>
            <li>
              <FaStar style={styles.starIcon} /> Experienced Trainers
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Customized Test Preparation Plans
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Engaging Learning Atmosphere
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Ongoing Support Beyond Classes
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Complimentary Mock Tests
            </li>
          </ul>
          {/* Added Section */}
          <h2 style={styles.subHeading}>
            Why Choose Our Pte Preparation Course?
          </h2>
          <p style={styles.text}>
            Our PTE preparation course provides personalized coaching, practice tests, and feedback to help you achieve your target score. With seasoned instructors and comprehensive learning materials, we offer everything you need for success. Whether you're preparing for academic goals or career advancement abroad, our course is designed to unlock your potential and enhance your confidence.
          </p>
          <ul style={styles.list}>
            <li>Customized study plans based on your current skills</li>
            <li>Interactive sessions with expert PTE trainers</li>
            <li>
              Access to an extensive library of study resources and practice tests
            </li>
            <li>Flexible scheduling to fit your lifestyle</li>
            <li>
              Regular evaluations to track your progress and adjust your study plan
            </li>
          </ul>
          <p style={styles.text}>
            Enroll in our PTE preparation course today and begin your journey toward achieving your aspirations. Our team is dedicated to supporting you throughout every step of your preparation.
          </p>
        </div>
      </div>

      <FormPage />
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensures the page takes at least the full height of the viewport
  },
  header: {
    width: "100%",
    overflow: "hidden",
  },
  headerImage: {
    width: "100%",
    height: "390px",
    objectFit: "cover", // Ensures the image covers the container without being distorted
    backgroundPosition: "center",
  },
  contentContainer: {
    flex: 1, // Makes sure the content takes up the remaining space
    display: "flex",
    flexWrap: "wrap", // Ensures responsiveness
    marginTop: navbarHeight, // Adjust this based on your navbar height
  },

  sidebar: {
    width: "25%",
    padding: "20px",
    backgroundColor: "#f8faff",
    borderRadius: "16px",
    marginRight: "20px",
    textAlign: "center",
  },
  testList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
  },
  testButton: {
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #e0e0e0",
    padding: "12px 20px",
    borderRadius: "12px",
    fontSize: "16px",
    width: "100%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  arrowIcon: {
    marginLeft: "10px",
  },
  sidebarImage: {
    width: "400px",
    marginBottom: "20px",
  },
  bookButton: {
    backgroundColor: "#0d6efd",
    color: "#fff",
    border: "none",
    padding: "15px 20px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "16px",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  heading: {
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  introduction: {
    fontSize: "1.1em",
    marginBottom: "20px",
  },
  image: {
    width: "1000px",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "29px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  tipsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  tipCard: {
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
  },
  iconCircle: {
    backgroundColor: "#0d6efd",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px auto",
  },
  icon: {
    color: "#fff",
    fontSize: "24px",
  },
  text: {
    fontSize: "1.8em",
    marginBottom: "20px",
  },
  list: {
    listStyle: "disc inside",
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  benefitsList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
  },
  sidebrImage: {
    width: "600px",
    height: "auto",
    marginBottom: "20px",
  },
};

export default PtePreparationPage;
