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
          src={`${process.env.PUBLIC_URL}/assets/images/ib.png`} // Replace with your image path
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
            The Test of English as a Foreign Language (TOEFL) is a standardized
            test designed to measure the English language ability of non-native
            speakers wishing to enroll in English-speaking universities. It is
            an essential criterion for admissions to higher education
            institutions across the globe.
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

          <h2 style={styles.subHeading}>Understanding the TOEFL Test</h2>
          <p style={styles.text}>
            TOEFL tests the language proficiency in academic settings,
            reflecting how well you can combine your listening, reading,
            speaking, and writing skills to perform academic tasks.
          </p>

          <h2 style={styles.subHeading}>Key Versions of TOEFL</h2>
          <ul style={styles.list}>
            <li>
              <strong>TOEFL iBT (Internet-based Test):</strong> The most common
              form of the exam, conducted online.
            </li>
            <li>
              <strong>TOEFL Paper-delivered Test:</strong> Available in
              locations where testing via the internet is not possible.
            </li>
            <li>
              <strong>TOEFL Essentials Test:</strong> A newer version that
              assesses both academic and general English proficiency.
            </li>
          </ul>

          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            TOEFL scores are recognized by over 10,000 colleges, universities,
            and agencies in more than 150 countries worldwide, including top
            universities in the U.S., Canada, Australia, and the UK, making it
            one of the most widely respected English-language tests in the
            world.
          </p>

          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The TOEFL iBT test lasts about 3 hours, not including the check-in
            time at the testing center.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          <p style={styles.text}>
            Scores are reported on a scale of 0 to 30 for each section, with a
            total score range of 0 to 120. Each institution or agency sets its
            own score requirements.
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
            alt="Toefl Preparation"
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
            <h2 style={styles.subHeading}>Registration Information</h2>
            <p style={styles.text}>
              Register for the TOEFL test through the official ETS website or by
              contacting us. It’s advisable to register early to secure your
              preferred test date and location. By understanding the nuances of
              the TOEFL test and following these preparation tips, candidates
              can significantly enhance their prospects of achieving an
              outstanding score, thereby improving their chances of admission to
              leading universities and fulfilling their academic and
              professional goals.
            </p>
          </ul>

          {/* Added Section */}
          <h2 style={styles.subHeading}>
            Why Choose Our Toefl Preparation Course?
          </h2>
          <p style={styles.text}>
            Our Toefl preparation course offers personalized coaching, practice
            tests, and feedback sessions to help you achieve your desired band
            score. With experienced instructors and comprehensive study
            materials, we provide all the tools you need to succeed. Whether
            you're aiming for academic excellence or pursuing your career
            abroad, our course is designed to maximize your potential and boost
            your confidence.
          </p>
          <ul style={styles.list}>
            <li>Tailored study plans based on your current skill level</li>
            <li>Interactive sessions with expert Toefl instructors</li>
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
            Join our Toefl preparation course today and take the first step
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
