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
          src={`${process.env.PUBLIC_URL}/assets/images/saat.jpeg`} // Replace with your image path
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
            Complete Guide to the Scholastic Assessment Test (SAT)
          </h1>
          <p style={styles.introduction}>
            The SAT is a widely recognized standardized test used in the U.S.
            for college admissions. Managed by the College Board, it evaluates a
            student’s academic preparedness for higher education and helps
            colleges compare applicants using a standardized metric. Admissions
            decisions are based on a variety of factors including SAT scores,
            GPA, course selection, extracurriculars, teacher recommendations,
            interviews, and personal essays.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Sat.JPEg`}
            alt="Sat Preparation"
            style={styles.image}
          />
          <h2 style={styles.subHeading}>Expert Strategies for SAT Success</h2>
          <div style={styles.tipsGrid}>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaUsers style={styles.icon} />
              </div>
              <p>
                Hone your time management skills to ensure you finish every
                section
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaBookOpen style={styles.icon} />
              </div>
              <p>
                Emphasize improving grammar, vocabulary, and writing clarity
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaGraduationCap style={styles.icon} />
              </div>
              <p>
                Practice speaking regularly to improve your communication skills
              </p>
            </div>
            <div style={styles.tipCard}>
              <div style={styles.iconCircle}>
                <FaHandshake style={styles.icon} />
              </div>
              <p>
                Enhance your listening abilities by exposing yourself to diverse
                content
              </p>
            </div>
          </div>
          <h2 style={styles.subHeading}>How the SAT Works</h2>
          <p style={styles.text}>
            The SAT measures a student’s proficiency in reading, writing, and
            math, with two primary sections: Evidence-Based Reading and Writing
            (ERW) and Mathematics. Both sections are scored between 200 and 800
            points.
          </p>
          <h2 style={styles.subHeading}>Types of SAT Tests</h2>
          <ul style={styles.list}>
            <li>
              <strong>SAT General Test:</strong> The standard exam assessing
              college readiness through three sections: Reading, Writing and
              Language, and Math.
            </li>
            <li>
              <strong>SAT Subject Tests (discontinued):</strong> Specialized
              exams previously used for college admissions but discontinued in
              June 2021 by the College Board.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Global Recognition</h2>
          <p style={styles.text}>
            The SAT is accepted by all U.S. colleges and universities, as well
            as many international institutions, for admissions. It provides
            admissions teams with a consistent way to evaluate the academic
            readiness of applicants.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Duration of the SAT</h2>
          <p style={styles.text}>
            The SAT typically lasts about 3 hours, with an optional Essay
            component that adds an additional 50 minutes.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Understanding the SAT Score Range</h2>
          The SAT scores range from 400 to 1600, combining the scores of the two
          main sections: ERW and Math, each scoring between 200 and 800. Scores
          are generally interpreted as follows:
          <ul style={styles.list}>
            <li>
              <strong>Above 1200:</strong> Competitive for many universities.
            </li>
            <li>
              <strong>Above 1400:</strong> Strong candidate for selective
              universities.
            </li>
            <li>
              <strong>1600:</strong> Perfect score, highly competitive for top
              institutions.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Advantages of a High SAT Score</h2>
          <ul style={styles.list}>
            <li>
              <strong>Better Admission Opportunities:</strong> A higher score
              increases your chances of getting accepted into prestigious
              colleges.
            </li>
            <li>
              <strong>Scholarships:</strong> Many scholarship programs consider
              SAT scores as part of their selection process.
            </li>
          </ul>
          <h2 style={styles.subHeading}>Our Services</h2>
          <ul style={styles.list}>
            <li>
              <strong>Better Admission Opportunities:</strong> A higher SAT
              score improves your odds of admission to top universities.
            </li>
            <li>
              <strong>Scholarship Eligibility:</strong> SAT scores play a key
              role in securing scholarships.
            </li>
          </ul>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/beni.png`}
            alt="Sat Preparation"
            style={styles.sidebrImage}
          />
          <ul style={styles.benefitsList}>
            <li>
              <FaStar style={styles.starIcon} /> Experienced Coaches
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Targeted Study Plans
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Engaging Learning Methods
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Ongoing Support
            </li>
            <li>
              <FaStar style={styles.starIcon} /> Free Practice Tests
            </li>
            <h2 style={styles.subHeading}>How to Register</h2>
            <p style={styles.text}>
              You can register for the SAT through the College Board website or
              through us. Early registration is recommended to secure your
              preferred test date and location. By thoroughly understanding the
              SAT test format and following these tips, you can greatly improve
              your chances of achieving a top score, enhancing your university
              admission prospects.
            </p>
          </ul>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Why Enroll in Our SAT Prep Course?</h2>
          <p style={styles.text}>
            Our SAT preparation course offers personalized coaching, practice
            tests, and detailed feedback to help you achieve your target score.
            Our experienced instructors and comprehensive materials equip you
            with the necessary tools for success. Whether you're aiming for
            academic excellence or planning to study abroad, our course is
            designed to help you reach your full potential.
          </p>
          <ul style={styles.list}>
            <li>Custom study plans tailored to your current abilities</li>
            <li>Interactive lessons with expert instructors</li>
            <li>
              Access to a wide range of study materials and practice exams
            </li>
            <li>Flexible scheduling to suit your lifestyle</li>
            <li>Regular progress assessments to refine your study approach</li>
          </ul>
          <p style={styles.text}>
            Join our SAT prep course today and start working towards your goals.
            Our dedicated team is ready to support you every step of the way.
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

export default SatPreparationPage;
