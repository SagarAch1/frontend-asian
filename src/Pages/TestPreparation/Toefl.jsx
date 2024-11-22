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

const ToeflPreparationPage = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/tofu.jpeg`} // Replace with your image path
          alt="Toefl Preparation"
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
                IELTS <FaCheckCircle style={styles.arrowIcon} />
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
            alt="Toefl Preparation"
            style={styles.sidebarImage}
          />

          <button style={styles.bookButton}>Book Your Toefl</button>
        </div>

        <div style={styles.mainContent}>
          <h1 style={styles.heading}>
            The Ultimate Guide to TOEFL: Your Roadmap to English Proficiency
          </h1>
          <p style={styles.introduction}>
            The TOEFL (Test of English as a Foreign Language) is a standardized
            assessment aimed at evaluating the English language proficiency of
            non-native speakers who wish to attend universities in
            English-speaking countries. It is a key factor for admissions to
            higher education institutions worldwide.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/tofel.png`}
            alt="Toefl Preparation"
            style={styles.image}
          />

          <h2 style={styles.subHeading}>Expert Tips for Success</h2>
          <div style={styles.tipsGrid}>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaUsers style={styles.icon} />
              </div>
              <p>
                Master time management techniques to effectively finish each
                section.
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaBookOpen style={styles.icon} />
              </div>
              <p>
                Pay close attention to grammar, vocabulary, and sentence
                structure.
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaGraduationCap style={styles.icon} />
              </div>
              <p>
                Practice speaking regularly to improve fluency and confidence.
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaHandshake style={styles.icon} />
              </div>
              <p>
                Boost your listening abilities by immersing yourself in English
                audio.
              </p>
            </div>
          </div>

          <h2 style={styles.subHeading}>Understanding the TOEFL Test</h2>
          <p style={styles.text}>
            The TOEFL exam evaluates your ability to use the English language in
            academic situations, measuring how effectively you can apply
            listening, reading, speaking, and writing skills in academic tasks.
          </p>

          <h2 style={styles.subHeading}>Key Versions of TOEFL</h2>
          <ul style={styles.list}>
            <li>
              <strong>TOEFL iBT (Internet-based Test):</strong> This is the most
              commonly taken version, delivered online.
            </li>
            <li>
              <strong>TOEFL Paper-delivered Test:</strong> Available in
              locations where internet testing is unavailable.
            </li>
            <li>
              <strong>TOEFL Essentials Test:</strong> A recent variant that
              tests both general and academic English proficiency.
            </li>
          </ul>

          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            Over 10,000 colleges, universities, and agencies in more than 150
            countries accept TOEFL scores, including prestigious universities in
            the U.S., Canada, Australia, and the UK. This widespread acceptance
            makes it one of the most respected English proficiency exams
            worldwide.
          </p>

          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The TOEFL iBT typically lasts around 3 hours, not accounting for
            check-in time at the testing center.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          <p style={styles.text}>
            The scores are reported on a scale from 0 to 30 for each section,
            with a total range from 0 to 120. Institutions or agencies set their
            own score requirements.
          </p>

          <h2 style={styles.subHeading}>Our Benefits</h2>

          <p style={styles.text}>
            Selecting the right consultancy can have a significant impact on
            your journey toward academic and personal growth. At AIEC-Global
            GLOBAL, we pride ourselves on offering unique benefits when you
            choose to work with us:
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="Toefl Preparation"
            style={styles.sidebrImage}
          />
          <ul style={styles.benefitsList}>
            <li>
              <FaStar style={styles.starIcon} /> Expert Instructors
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Focused Preparation Strategies
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Engaging Learning Environment
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Support Beyond Classroom
              Sessions
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Complimentary Mock Tests
            </li>
            <h2 style={styles.subHeading}>Registration Information</h2>
            <p style={styles.text}>
              You can register for the TOEFL exam through the official ETS
              website or by contacting us directly. It’s advisable to register
              well in advance to secure your preferred test date and location.
              By comprehending the nuances of the TOEFL exam and following these
              preparatory guidelines, candidates can greatly improve their
              chances of obtaining an outstanding score, which will enhance
              their chances of gaining admission to top universities and
              advancing their academic and career goals.
            </p>
          </ul>

          {/* Added Section */}
          <h2 style={styles.subHeading}>
            Why Choose Our Toefl Preparation Course?
          </h2>
          <p style={styles.text}>
            Our TOEFL preparation course offers personalized coaching, practice
            tests, and feedback sessions, all designed to help you reach your
            desired score. With experienced instructors and comprehensive study
            materials, we provide all the resources you need to succeed. Whether
            you’re aiming for academic excellence or pursuing opportunities
            abroad, our course is crafted to maximize your potential and boost
            your confidence.
          </p>
          <ul style={styles.list}>
            <li>Customized study plans tailored to your current abilities</li>
            <li>Interactive sessions with expert TOEFL instructors</li>
            <li>
              Access to an extensive collection of study materials and practice
              exams
            </li>
            <li>Flexible scheduling to accommodate your busy lifestyle</li>
            <li>
              Ongoing assessments to monitor your progress and refine your study
              plan
            </li>
          </ul>
          <p style={styles.text}>
            Enroll in our TOEFL preparation course today and take the first step
            toward achieving your aspirations. Our dedicated team is here to
            guide you every step of the way.
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

export default ToeflPreparationPage;
