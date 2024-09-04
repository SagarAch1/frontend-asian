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

const SatPreparationPage = () => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ib.png`} // Replace with your image path
          alt="Sat Preparation"
          style={styles.headerImage}
        />
      </header>
      <div style={styles.contentContainer}>
        <div style={styles.sidebar}>
          <ul style={styles.testList}>
            <li>
              <button style={styles.testButton}>
                IELTS <FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
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
                Duolingo <FaCheckCircle style={styles.arrowIcon} />
              </button>
            </li>
          </ul>

          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`}
            alt="Sat Preparation"
            style={styles.sidebarImage}
          />

          <button style={styles.bookButton}>Book Your Sat</button>
        </div>

        <div style={styles.mainContent}>
          <h1 style={styles.heading}>
            Comprehensive Guide to the Scholastic Assessment Test (SAT)
          </h1>
          <p style={styles.introduction}>
            The SAT is a standardized test widely used for college admissions in
            the United States. Administered by the College Board, it measures a
            high school student’s readiness for college and provides colleges
            with a common data point that can be used to compare all applicants.
            College admissions officers review standardized test scores
            alongside your high school GPA, the classes you took in high school,
            letters of recommendation from teachers or mentors, extracurricular
            activities, interviews, and personal essays.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Sat.JPEg`}
            alt="Sat Preparation"
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
          <h2 style={styles.subHeading}>Understanding the Sat Test</h2>
          <p style={styles.text}>
            The SAT assesses student skills in critical reading, writing, and
            mathematics. It is divided primarily into two sections, namely
            Evidence-Based Reading and Writing (ERW) and Math. Each section is
            scored on a scale of 200 to 800.
          </p>
          <h2 style={styles.subHeading}>Key Versions of Sat</h2>
          <ul style={styles.list}>
            <li>
              <strong>SAT General Test:</strong> The traditional exam that
              assesses a student’s readiness for college with three major
              components: Reading, Writing and Language, and Math.
            </li>
            <li>
              <strong>SAT Subject Tests (discontinued):</strong> Specific
              subject knowledge tests that some colleges previously used for
              admission. Notably, as of June 2021, the College Board
              discontinued SAT Subject Tests in the United States.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
          <p style={styles.text}>
            The SAT is recognized and accepted by all U.S. and many
            international colleges and universities as part of the admissions
            process. It helps admissions boards evaluate the academic
            preparedness of applicants.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The SAT takes approximately 3 hours, with an additional 50 minutes
            for the Essay, which is optional after the 2016 redesign
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          The SAT score ranges from 400 to 1600, with the composite score being
          the sum of the two section scores (ERW and Math), each ranging from
          200 to 800. Scores are typically interpreted as follows:
          <ul style={styles.list}>
            <li>
              <strong>Above 1200:</strong> Competitive for university admissions
              in many institutions.
            </li>
            <li>
              <strong>Above 1400:</strong> Highly competitive, considered strong
              for admission to selective institutions.
            </li>
            <li>
              <strong>1600:</strong>: Perfect score, exceptional for highly
              selective and Ivy League institutions.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Benefits of Scoring High on the SAT</h2>
          <ul style={styles.list}>
            <li>
              <strong>Enhanced Admission Prospects:</strong> A higher SAT score
              can significantly boost your chances of getting into a prestigious
              university.
            </li>
            <li>
              <strong>Scholarship Opportunities:</strong> Many scholarships use
              SAT scores as a criterion for eligibility.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Our Benefits</h2>
          <ul style={styles.list}>
            <li>
              <strong>Enhanced Admission Prospects:</strong> A higher SAT score
              can significantly boost your chances of getting into a prestigious
              university.
            </li>
            <li>
              <strong>Scholarship Opportunities:</strong> Many scholarships use
              SAT scores as a criterion for eligibility..
            </li>
          </ul>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="Sat Preparation"
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
            Why Choose Our Sat Preparation Course?
          </h2>
          <p style={styles.text}>
            Our Sat preparation course offers personalized coaching, practice
            tests, and feedback sessions to help you achieve your desired band
            score. With experienced instructors and comprehensive study
            materials, we provide all the tools you need to succeed. Whether
            you're aiming for academic excellence or pursuing your career
            abroad, our course is designed to maximize your potential and boost
            your confidence.
          </p>
          <ul style={styles.list}>
            <li>Tailored study plans based on your current skill level</li>
            <li>Interactive sessions with expert Sat instructors</li>
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
            Join our Sat preparation course today and take the first step
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

export default SatPreparationPage;
