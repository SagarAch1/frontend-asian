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

const DuolingoPreparationPage = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ib.png`} // Replace with your image path
          alt="duolingo Preparation"
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
                IELTS <FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
          </ul>

          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
            alt="duolingo Preparation"
            style={styles.sidebarImage}
          />

          <button style={styles.bookButton}>Book Your duolingo</button>
        </div>

        <div style={styles.mainContent}>
          <h1 style={styles.heading}>
            Comprehensive Guide to the Duolingo English Test (DET)
          </h1>
          <p style={styles.introduction}>
            The Duolingo English Test is an innovative and accessible online
            English proficiency exam designed for international students and
            professionals. Unlike traditional English language tests like TOEFL
            or IELTS, the Duolingo English Test can be taken online from the
            comfort of your own home. The test is increasingly recognized by a
            growing number of universities globally because of its convenience
            and fast results.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/duolingo.webp`}
            alt="duolingo Preparation"
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
          <h2 style={styles.subHeading}>
            Understanding the Duolingo English Test
          </h2>
          <p style={styles.text}>
            The Duolingo English Test challenges your ability to read, write,
            speak, and listen to English in an academic setting. It is designed
            to test real-world language ability through a variety of exercises.
          </p>
          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            While not as universally accepted as TOEFL or IELTS, the Duolingo
            English Test is rapidly gaining recognition. Many universities,
            particularly in the United States, consider it a legitimate proof of
            English proficiency alongside more traditional tests.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The Duolingo English Test requires about 45 minutes to complete,
            making it significantly shorter than other English proficiency
            tests.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          The test provides a score ranging from 10 to 160 in 5-point
          increments. Scores can generally be interpreted as follows:
          <ul style={styles.list}>
            <li>
              <strong>10-55:</strong> Basic proficiency, indicates limited
              ability to understand and communicate.
            </li>
            <li>
              <strong>60-85:</strong> Intermediate proficiency, suggests a
              capacity to handle basic communication in English.
            </li>
            <li>
              <strong>90-115:</strong>: High intermediate proficiency, indicates
              being fairly competent in English for everyday conversations and
              most workplace tasks.
            </li>
            <li>
              <strong>120-160:</strong> Advanced proficiency, reflects the
              ability to communicate effectively in English in academic and
              professional settings.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Our Benefits</h2>
          <p style={styles.text}>
            Choosing the right consultancy can make a world of difference in
            your journey toward international exploration, growth, and success.
            At AIEC GLOBAL, we take pride in the distinctive benefits of
            partnering with us:
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="duolingo Preparation"
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
            Why Choose Our duolingo Preparation Course?
          </h2>
          <p style={styles.text}>
            Candidates can register and pay for the Duolingo English Test on the
            official Duolingo website or can contact us. Before registering,
            ensure you meet all technical requirements and have a valid ID to
            present during the test setup. Enhancing your capabilities and
            understanding of the Duolingo English Test through focused
            preparation and familiarity with the testing process can
            significantly aid in achieving a high score, thereby bolstering
            prospects for international education and employment opportunities.
          </p>
          <ul style={styles.list}>
            <li>Tailored study plans based on your current skill level</li>
            <li>Interactive sessions with expert duolingo instructors</li>
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
            Join our duolingo preparation course today and take the first step
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
    height: "500px",
    display: "block",
  },
  contentContainer: {
    flex: 1, // Makes sure the content takes up the remaining space
    display: "flex",
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
    fontSize: "1.1em",

    marginBottom: "20px",
  },
  list: {
    listStyle: "disc inside",
    fontSize: "18px",
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

export default DuolingoPreparationPage;
