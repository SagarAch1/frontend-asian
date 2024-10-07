import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseName, universityName, countryName } = location.state || {};

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section, path) => {
    setActiveSection(activeSection === section ? null : section);
    navigate(path);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>
            {courseName || "Bachelor of Arts in Biology"}
          </h1>
          <h3 style={styles.university}>
            At {universityName || "University of Wisconsin - La Crosse"}
          </h3>
        </div>
        <div style={styles.actionButtons}>
          <button
            style={styles.enquireButton}
            onClick={() => navigate("/formpage")}
          >
            Enquire Now
          </button>
          <button style={styles.actionButton}>❤️</button>
          <button style={styles.actionButton}>🔗</button>
        </div>
      </header>

      {/* Main Content Section */}
      <div style={styles.contentContainer}>
        {/* Left Column: Course Info */}
        <div style={styles.leftColumn}>
          {/* Course Information Box */}
          <div style={styles.courseInfoBox}>
            <div style={styles.courseInfo}>
              <p>
                <strong>Location:</strong> {countryName || "United States"}
              </p>
              <p>
                <strong>Qualification:</strong> Bachelor Degree
              </p>
              <p>
                <strong>Fees:</strong> USD 19,576 (2024)
              </p>
              <p>
                <strong>Duration:</strong> 4 Years
              </p>
              <p>
                <strong>Next Intake:</strong> 06 January 2025
              </p>
              <p>
                <strong>Entry Score:</strong> 6.0 IELTS
              </p>
            </div>
          </div>

          {/* About the Course */}
          <div style={styles.aboutCourse}>
            <h2 style={styles.sectionTitle}>About the Course</h2>
            <p>
              This course is designed to provide students with a robust
              foundation in essential concepts and skills relevant to today's
              dynamic job market. Engaging in a comprehensive curriculum that
              combines theoretical knowledge with practical applications,
              students will foster a deep understanding of the subject matter.
              They will explore various key topics that enhance their critical
              thinking and problem-solving abilities, allowing them to tackle
              real-world challenges with confidence. Emphasizing hands-on
              projects and collaborative learning, the course ensures an
              enriching experience. Throughout the course, participants will
              develop essential skills, gain vital competencies that are highly
              sought after by employers across various industries, and prepare
              for diverse career paths. They will also have the opportunity to
              connect with industry experts, building a valuable network that
              facilitates mentorship and guidance in their career journey. This
              course serves as an excellent stepping stone for those looking to
              advance their careers or explore new fields, unlocking their
              potential and taking the first step toward a successful and
              fulfilling future. With an interactive learning environment and
              real-world applications, students will apply theoretical knowledge
              to practical scenarios, effectively preparing for the challenges
              of the industry while accessing resources and guidance to navigate
              their career paths.
            </p>
            <div style={styles.scholarshipsInternships}>
              <p>
                <strong>Scholarships:</strong>
                <span
                  style={styles.link}
                  onClick={() => navigate("/scholarship")}
                >
                  View all scholarships
                </span>
              </p>
              <p>
                <strong>Internships:</strong>
                <span style={styles.link} onClick={() => navigate("/contact")}>
                  Available
                </span>
              </p>
            </div>
          </div>

          {/* Accordion Sections */}
          <div style={styles.accordion}>
            <AccordionSection
              title="Start Dates and Prices"
              isActive={activeSection === "dates"}
              onToggle={() => toggleSection("dates", "/abc/")}
            />
            <AccordionSection
              title="How to Apply"
              isActive={activeSection === "apply"}
              onToggle={() => toggleSection("apply", "/ghi/")}
            />
            <AccordionSection
              title="Reviews and Rankings"
              isActive={activeSection === "reviews"}
              onToggle={() => toggleSection("reviews", "/def/")}
            />
            <AccordionSection
              title="About the School"
              isActive={activeSection === "school"}
              onToggle={() => toggleSection("school", "/bcd/")}
            />
          </div>
        </div>

        {/* Right Column: Counselor Section */}
        <div style={styles.rightColumn}>
          <div style={styles.counselorBox}>
            <h3 style={styles.counselorTitle}>
              Feeling Stuck? Let Our Expert Counsellor Help You.
            </h3>
            <p style={styles.counselorText}>
              Can’t decide on the university and course? Our experienced
              counsellors are here to guide and support you through every step
              of your study abroad journey. Reach out today!
            </p>
            <button
              style={styles.meetCounselorButton}
              onClick={() => navigate("/formpage")}
            >
              Meet a Counsellor
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/assets/counsellor.jpg`}
              alt="Counsellor"
              style={styles.counselorImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionSection = ({ title, isActive, onToggle }) => (
  <div style={styles.accordionItem}>
    <div style={styles.accordionTitle} onClick={onToggle}>
      <span>{title}</span>
      <span style={styles.accordionIcon}>{isActive ? "−" : "+"}</span>
    </div>
    {isActive && (
      <div style={styles.accordionContent}>
        <p>Content for {title.toLowerCase()}</p>
      </div>
    )}
  </div>
);

const styles = {
  pageContainer: {
    padding: "20px",
    paddingTop: "80px", // Adding this to create space below the navbar
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
  },
  titleSection: {
    flex: "1",
  },
  title: {
    fontSize: "28px",
    margin: "0",
  },
  university: {
    fontSize: "18px",
    margin: "5px 0",
    color: "#fff",
  },
  actionButtons: {
    display: "flex",
    gap: "10px",
  },
  enquireButton: {
    backgroundColor: "#FFD700",
    color: "#000",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  actionButton: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  contentContainer: {
    display: "flex",
    marginTop: "20px",
  },
  leftColumn: {
    flex: "1",
    marginRight: "20px",
  },
  rightColumn: {
    width: "30%",
  },
  courseInfoBox: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  courseInfo: {
    margin: "0",
  },
  aboutCourse: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  scholarshipsInternships: {
    marginTop: "10px",
  },
  link: {
    color: "#007BFF",
    cursor: "pointer",
  },
  accordion: {
    marginTop: "20px",
  },
  accordionItem: {
    marginTop: "10px",
    backgroundColor: "#f7f7f7",
    borderRadius: "5px",
  },
  accordionTitle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  accordionContent: {
    padding: "10px",
    backgroundColor: "#fff",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  sectionTitle: {
    color: "#007BFF",
    borderBottom: "2px solid #007BFF",
    paddingBottom: "5px",
  },
  counselorBox: {
    padding: "20px",
    backgroundColor: "#e7f3fe",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  counselorTitle: {
    fontSize: "20px",
    margin: "0 0 10px",
  },
  counselorText: {
    margin: "10px 0",
  },
  meetCounselorButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  counselorImage: {
    marginTop: "15px",
    width: "100%",
    borderRadius: "8px",
  },
};

export default CourseDetail;
