import React from "react";

import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const Courseadvice = () => {
  return (
    <div style={styles.container}>
      <header style={styles.headerSection}>
        <div
          style={{
            ...styles.headerImage,
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ar.jpg)`,
            marginTop: "83px",
          }}
        ></div>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>
            Course advice for students planning to study abroad
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <p style={styles.paragraph}>
          Every course is a distinct blend of various elements, ranging from the
          subjects covered and campus location to the eventual career path.
          Whether you're exploring potential courses, deliberating between
          fields of study, or unsure about your desired career, your AIEC
          counselor is here to assist. They'll guide you in discovering the
          ideal course and managing your university application process.
        </p>
        <h2 style={styles.sectionTitle}>Finding the best fit</h2>
        <p style={styles.paragraph}>
          Our team is supported by a sophisticated knowledge matching system
          that includes the latest information on our partner institutions, such
          as schools, English language colleges, vocational colleges, and
          universities.
        </p>
        <p style={styles.paragraph}>
          Some of the key considerations covered in our consultations are:
        </p>
        <ul style={styles.courseList}>
          <li>Subject Matter</li>
        </ul>
        <p style={styles.paragraph}>
          While it might appear evident, your education, experiences, and areas
          of interest constitute the initial phase in discovering your ideal
          course. Your AIEC counselor will collaborate with you to outline a
          shortlist and delve deeply into course handbooks and subject options.
        </p>
        <ul style={styles.courseList}>
          <li>Career Goals</li>
        </ul>
        <p style={styles.paragraph}>
          Your selected course should set you on a trajectory toward a
          profession you'll cherish. Your AIEC counselor can offer guidance on
          the courses that align with your desired career path.
        </p>
        <ul style={styles.courseList}>
          <li>Timelines and Budgets</li>
        </ul>
        <p style={styles.paragraph}>
          Understanding the cost of a course and your budget for education are
          pivotal considerations in selecting a study destination. Your AIEC
          counselor will also guide you through application deadlines and course
          commencement dates across various locations.
        </p>
        <ul style={styles.courseList}>
          <li>Course Experience and Campus Life</li>
        </ul>
        <p style={styles.paragraph}>
          The university's ambiance and social atmosphere significantly
          influence your contentment in your chosen course. Individual
          preferences vary – some flourish in bustling city campuses, while
          others lean towards smaller, rural settings. Cultural diversity or
          vibrant clubs might be your focus. Rest assured, we consider all these
          aspects when assisting you in making your decision.
        </p>
        <h2 style={styles.sectionTitle}>Contact Us For More Info</h2>

        <FormPage />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
  },
  headerSection: {
    position: "relative",
  },
  headerImage: {
    width: "3290px",
    height: "310px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "-225px",
  },
  headerContent: {
    position: "absolute",
    top: "20%",
    left: "20px",
    color: "#fff",
  },
  headerTitle: {
    fontSize: "34px",
    marginBottom: "10px",
    background: "",
    padding: "10px",
  },
  contactBtn: {
    backgroundColor: "#f04e31",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
  contentSection: {
    padding: "20px",
  },
  sectionTitle: {
    fontSize: "25px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  section: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  table: {
    width: "1000px",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  tableCell: {
    border: "1px solid #ccc",
    padding: "10px",
  },
  courseList: {
    listStyleType: "disc",
    marginLeft: "20px",
    fontWeight: "bold",
  },
  "@media (max-width: 768px)": {
    headerContent: {
      top: "10%",
      left: "10px",
    },
    headerTitle: {
      fontSize: "28px",
    },
    contactBtn: {
      fontSize: "14px",
    },
  },
};

export default Courseadvice;
