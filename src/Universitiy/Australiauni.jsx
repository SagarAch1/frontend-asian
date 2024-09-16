import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Pages/Homepage/Footer"; // Assuming this is the correct path

const Australiauni = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/bachelorofdesign");
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <div style={styles.headerContainer}>
        <p style={styles.breadcrumb}>AIEC Education / Find a University / Australia</p>
        <h1 style={styles.mainTitle}>
          {universities.length} Universities and Colleges in Australia
        </h1>
      </div>

      {/* Filter Tag */}
      <div style={styles.filterTagContainer}>
        <p>
          Based on your selection: <span style={styles.filterTag}>Australia</span>
        </p>
      </div>

      {/* Card Grid */}
      <div style={styles.cardGrid}>
        {universities.map((university, index) => (
          <div key={index} style={styles.universityCard}>
            <div style={styles.cardHeader}>
              <h3 style={styles.universityName}>{university.name}</h3>
              <p style={styles.universityCountry}>{university.country}</p>
            </div>
            <a href={university.detailsLink} style={styles.courseLink}>View all courses</a>
            <div style={styles.universityInfo}>
              <p>International students: {university.internationalStudents}</p>
              {university.englishCourses && <p>English Courses available</p>}
            </div>
            <button style={styles.detailsButton} onClick={handleViewDetails}>
              View details
            </button>
          </div>
        ))}
      </div>

      {/* Full-width Footer */}
      <Footer /> {/* This ensures the footer is outside the restricted content width */}
    </div>
  );
};

// Data for universities (example)
const universities = [
  // ... (data remains unchanged)
];

// CSS styles for the page layout
const styles = {
  pageContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    margin: "0",
    paddingTop: "80px", // Create space below the navbar
  },
  headerContainer: {
    marginBottom: "20px",
    textAlign: "center",
  },
  breadcrumb: {
    fontSize: "14px",
    color: "#666",
  },
  mainTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
  },
  filterTagContainer: {
    marginBottom: "20px",
  },
  filterTag: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    display: "inline-block",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Adjust to allow responsive grid
    gap: "20px",
    width: "100%", // Ensure grid spans the full width
  },
  universityCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "100%", // Ensure card spans full width within grid cell
  },
  cardHeader: {
    marginBottom: "10px",
  },
  universityName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  universityCountry: {
    color: "#888",
    fontSize: "14px",
  },
  courseLink: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    display: "block",
    margin: "10px 0",
  },
  universityInfo: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  detailsButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default Australiauni;
