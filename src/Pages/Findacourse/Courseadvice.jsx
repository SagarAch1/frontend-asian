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
          Every course is a unique mix of academic subjects, campus environment,
          and career potential. Whether you're exploring your study options,
          deciding on a field, or still uncertain about your career direction,
          your AIEC counselor is ready to help. We'll guide you in selecting the
          perfect course and navigating the university application process
          seamlessly.
        </p>
        <h2 style={styles.sectionTitle}>Finding the best fit</h2>
        <p style={styles.paragraph}>
          Our team utilizes a sophisticated matching system that includes
          up-to-date information on our partner institutions, including schools,
          English language colleges, vocational colleges, and universities.
        </p>
        <p style={styles.paragraph}>
          During our consultations, we cover essential factors like:
        </p>
        <ul style={styles.courseList}>
          <li>Subject Matter</li>
        </ul>
        <p style={styles.paragraph}>
          While it may seem obvious, your interests, academic background, and
          previous experiences are the foundation of finding the right course.
          Your AIEC counselor will help you explore course handbooks and subject
          options to create a tailored shortlist.
        </p>
        <ul style={styles.courseList}>
          <li>Career Goals</li>
        </ul>
        <p style={styles.paragraph}>
          It's important to choose a course that aligns with your future career
          aspirations. Your AIEC counselor will assist in identifying courses
          that match your desired career path, setting you on the right track.
        </p>
        <ul style={styles.courseList}>
          <li>Timelines and Budgets</li>
        </ul>
        <p style={styles.paragraph}>
          Understanding the cost of your chosen course and the budget for your
          education is crucial when selecting where to study. Your AIEC
          counselor will help you keep track of application deadlines and course
          start dates, ensuring you stay on top of the process.
        </p>
        <ul style={styles.courseList}>
          <li>Course Experience and Campus Life</li>
        </ul>
        <p style={styles.paragraph}>
          The atmosphere of the university and campus life play a huge role in
          your overall satisfaction. Some students thrive in vibrant,
          city-centered campuses, while others prefer more intimate, rural
          environments. Whether you're drawn to cultural diversity or active
          student clubs, we ensure that all your preferences are considered in
          your decision-making.
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
    lineHeight: "1.7",
    color: "#555",
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
