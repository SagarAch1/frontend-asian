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
          src={`${process.env.PUBLIC_URL}/assets/images/ib.png`} // Replace with your image path
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
            The Pearson Test of English (PTE) is a renowned computer-based
            English language proficiency test that evaluates the language skills
            of non-native English speakers. Designed to assess reading, writing,
            listening, and speaking abilities, PTE offers a streamlined testing
            experience with quick results and an emphasis on real-life language
            use.
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
              <p>Develop time management skills to complete each section</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaBookOpen style={styles.icon} />
              </div>
              <p>Focus on grammar, vocabulary, and coherence</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaGraduationCap style={styles.icon} />
              </div>
              <p>Engage in regular speaking practice</p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaHandshake style={styles.icon} />
              </div>
              <p>Enhance your listening skills by exposing yourself</p>
            </div>
          </div>
          <h2 style={styles.subHeading}>Understanding the Pte Test</h2>
          <p style={styles.text}>
            The Pte test comprises four sections: Listening, Reading, Writing,
            and Speaking. Each section assesses different language skills
            essential for effective communication in an English-speaking
            environment. Understanding the format of the test and practicing
            with authentic materials are crucial steps toward success.
          </p>
          <h2 style={styles.subHeading}>Key Versions of Pte</h2>
          <ul style={styles.list}>
            <li>
              <strong>Academic Version:</strong> Aspiring university students,
              medical professionals, and nurses seeking academic enrollment or
              practice.
            </li>
            <li>
              <strong>General Training Version:</strong> Individuals pursuing
              non-academic training, employment opportunities, or immigration
              purposes.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            PTE scores are widely accepted by educational institutions,
            employers, and government bodies worldwide. Recognized for its
            reliability and accuracy, PTE is endorsed by thousands of
            universities, colleges, and organizations across the globe, making
            it a trusted measure of English proficiency.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            TThe complete PTE Academic test typically lasts around 3 hours, with
            each module – speaking, writing, reading, and listening –
            administered sequentially without breaks in between.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          <p style={styles.text}>
          PTE scores are reported on a scale from 10 to 90, with higher scores
          indicating greater proficiency in English. Each score level
          corresponds to a specific proficiency level, ranging from beginner to
          expert, providing a comprehensive evaluation of language skills across
          the four test modules.
          </p>
          <h2 style={styles.subHeading}>Our Benefits</h2>
          <p style={styles.text}>
            Choosing the right consultancy can make a world of difference in
            your journey toward international exploration, growth, and success.
            At AIEC GLOBAL, we take pride in the distinctive benefits of
            partnering with us:
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="Pte Preparation"
            style={styles.sidebrImage}
          />
          <ul style={styles.benefitsList}>
            <li>
              <FaStar style={styles.starIcon} /> Experienced Instructors
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Targeted Preparation Strategies
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Interactive Learning
              Environment
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Support Beyond the Classroom
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Free Mock Test
            </li>
          </ul>
          {/* Added Section */}
          <h2 style={styles.subHeading}>
            Why Choose Our Pte Preparation Course?
          </h2>
          <p style={styles.text}>
            Our Pte preparation course offers personalized coaching, practice
            tests, and feedback sessions to help you achieve your desired band
            score. With experienced instructors and comprehensive study
            materials, we provide all the tools you need to succeed. Whether
            you're aiming for academic excellence or pursuing your career
            abroad, our course is designed to maximize your potential and boost
            your confidence.
          </p>
          <ul style={styles.list}>
            <li>Tailored study plans based on your current skill level</li>
            <li>Interactive sessions with expert Pte instructors</li>
            <li>
              Access to a vast library of study materials and practice tests
            </li>
            <li>Flexible scheduling options to fit your busy lifestyle</li>
            <li>
              Regular assessments to track your progress and adjust your
              learning plan
            </li>
          </ul>
          <p style={styles.text}>
            Join our Pte preparation course today and take the first step
            towards achieving your goals. Our dedicated team is here to support
            you every step of the way.
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
    display: 'flex',
    flexWrap: 'wrap', // Ensures responsiveness
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
