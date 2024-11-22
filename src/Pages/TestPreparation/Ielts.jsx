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

const IELTSPreparationPage = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ib.png`} // Replace with your image path
          alt="IELTS Preparation"
          style={styles.headerImage}
        />
      </header>
      <div style={styles.contentContainer}>
        <div style={styles.sidebar}>
          <ul style={styles.testList}>
            <li>
              <button style={styles.testButton}>
                PTE <FaCheckCircle style={styles.arrowIcon} />
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
            alt="IELTS Preparation"
            style={styles.sidebarImage}
          />

          <button style={styles.bookButton}>Book Your IELTS</button>
        </div>

        <div style={styles.mainContent}>
          <h1 style={styles.heading}>
            IELTS Preparation: Your Gateway to Success
          </h1>
          <p style={styles.introduction}>
            Are you looking to study abroad, move to an English-speaking
            country, or expand your professional prospects? The International
            English Language Testing System (IELTS) is a vital step toward
            making these aspirations a reality. With the right preparation and
            expert guidance, you can secure your target band score and take a
            major step toward a successful future.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ielts.png`}
            alt="IELTS Preparation"
            style={styles.image}
          />

          <h2 style={styles.subHeading}>Expert Tips for Success</h2>
          <div style={styles.tipsGrid}>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaUsers style={styles.icon} />
              </div>
              <p>
                Master time management to ensure you can complete every section
                on time
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaBookOpen style={styles.icon} />
              </div>
              <p>
                Concentrate on improving your grammar, vocabulary, and sentence
                structure
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaGraduationCap style={styles.icon} />
              </div>
              <p>Engage in regular speaking practice to enhance fluency</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaHandshake style={styles.icon} />
              </div>
              <p>
                Refine your listening abilities by immersing yourself in diverse
                audio content
              </p>
            </div>
          </div>

          <h2 style={styles.subHeading}>Understanding the IELTS Test</h2>
          <p style={styles.text}>
            The IELTS exam is divided into four sections: Listening, Reading,
            Writing, and Speaking. Each section evaluates different language
            skills that are critical for effective communication in an
            English-speaking environment. Familiarizing yourself with the test's
            format and practicing with genuine test materials are essential
            steps toward success.
          </p>

          <h2 style={styles.subHeading}>Key Versions of IELTS</h2>
          <ul style={styles.list}>
            <li>
              <strong>Academic Version:</strong> Designed for those seeking
              university admission, medical professionals, and nurses who wish
              to study or practice in English-speaking countries.
            </li>
            <li>
              <strong>General Training Version:</strong> Intended for
              individuals who need English for work, immigration, or
              non-academic training purposes.
            </li>
          </ul>

          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            IELTS is widely accepted by universities, employers, and immigration
            authorities around the globe. It is recognized by institutions in
            the UK, Australia, New Zealand, Canada, Ireland, and more than 1800
            universities across the United States. Additionally, IELTS is the
            required English language proficiency test for immigration to
            Australia.
          </p>

          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The total time for the IELTS exam is 2 hours and 45 minutes. The
            Listening, Reading, and Writing tests are completed consecutively,
            and the Speaking test is usually conducted on the same day or the
            following day.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          <ul style={styles.list}>
            <li>
              <strong>9 Expert User:</strong> Complete control of the language
              with accuracy, fluency, and full understanding.
            </li>
            <li>
              <strong>8 Very Good User:</strong> Fully functional command of the
              language, with occasional errors but able to handle complex
              situations.
            </li>
            <li>
              <strong>7 Good User:</strong> Effective command with occasional
              errors and a strong ability to handle complex language and
              concepts.
            </li>
            <li>
              <strong>6 Competent User:</strong>: Solid command despite errors,
              capable of understanding complex language in familiar situations.
            </li>
            <li>
              <strong>5 Modest User:</strong> Basic command with frequent errors
              but able to understand general meaning.
            </li>
            <li>
              <strong>4 Limited User:</strong> Basic proficiency restricted to
              familiar contexts, struggles with complex language.
            </li>
            <li>
              <strong>3 Extremely Limited User:</strong> Can convey general
              meaning in familiar situations, but has frequent breakdowns in
              communication.
            </li>
            <li>
              <strong>2 Intermittent User:</strong> Limited ability to
              communicate beyond basic information, struggles to understand
              English.
            </li>
            <li>
              <strong>1 Non User:</strong> Has little ability to use the
              language beyond isolated words.
            </li>
            <li>
              <strong>0 Did not attempt the test:</strong> No assessable data
              provided.
            </li>
          </ul>

          <h2 style={styles.subHeading}>Our Benefits</h2>

          <p style={styles.text}>
            Selecting the right consultancy can significantly influence your
            journey toward studying abroad, career advancement, and personal
            growth. At AIEC-Global GLOBAL, we take pride in the unique
            advantages of collaborating with us:
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="IELTS Preparation"
            style={styles.sidebrImage}
          />
          <ul style={styles.benefitsList}>
            <li>
              <FaStar style={styles.starIcon} /> Skilled Instructors
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Focused Preparation Techniques
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Engaging Learning Environment
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Continuous Support
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Complimentary Mock Test
            </li>
          </ul>

          {/* Added Section */}
          <h2 style={styles.subHeading}>
            Why Choose Our IELTS Preparation Course?
          </h2>
          <p style={styles.text}>
            Our IELTS prep course offers tailored coaching, practice exams, and
            constructive feedback to help you reach your target score. With
            experienced instructors and comprehensive materials, we provide
            everything you need to succeed. Whether you're aiming for academic
            success or planning to further your career abroad, our course is
            designed to enhance your abilities and boost your confidence.
          </p>
          <ul style={styles.list}>
            <li>Custom study plans based on your individual needs</li>
            <li>Interactive sessions with expert IELTS instructors</li>
            <li>
              Access to an extensive collection of study materials and practice
              exams
            </li>
            <li>Flexible scheduling to accommodate your busy life</li>
            <li>Regular progress evaluations to optimize your learning path</li>
          </ul>
          <p style={styles.text}>
            Enroll in our IELTS preparation course today and take the first step
            toward achieving your academic or professional objectives. Our
            dedicated team is here to guide you throughout the process.
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
    marginTop: navbarHeight, // Adjust this based on your actual navbar height
    padding: "0 2rem",
  },
  sidebar: {
    width: "20%",
    paddingRight: "2rem",
    flexShrink: 0, // Prevents sidebar from shrinking
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  testList: {
    padding: "0",
    listStyleType: "none",
    margin: "0 0 2rem 0",
    fontSize: "18px",
  },
  testButton: {
    border: "none",
    background: "transparent",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2c3e50",
    cursor: "pointer",
    textAlign: "left",
    padding: "10px 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowIcon: {
    fontSize: "20px",
    color: "#3498db",
  },
  sidebarImage: {
    width: "80%",
    borderRadius: "5px",
    marginBottom: "1rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  bookButton: {
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    width: "100%",
  },
  mainContent: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "2rem 0",
  },
  subHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "1.5rem 0",
  },
  introduction: {
    fontSize: "1.25rem",
    lineHeight: "1.6",
    color: "#34495e",
    margin: "1rem 0",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#34495e",
  },
  image: {
    width: "100%",
    margin: "2rem 0",
  },
  tipsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
  },
  tipCard: {
    background: "#ecf0f1",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
  },
  iconCircle: {
    backgroundColor: "#3498db",
    padding: "15px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  icon: {
    color: "white",
    fontSize: "24px",
  },
  benefitsList: {
    paddingLeft: "20px",
    listStyleType: "none",
    fontSize: "1.25rem",
  },
  starIcon: {
    color: "#f39c12",
    marginRight: "10px",
  },
};

export default IELTSPreparationPage;
