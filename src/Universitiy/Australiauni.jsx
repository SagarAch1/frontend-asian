import React from "react";

const UniversitiesPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <div style={styles.headerContainer}>
        <p style={styles.breadcrumb}>AIEC Education / Find a University / Australia</p>
        <h1 style={styles.mainTitle}>
          {universities.length} Universities and Colleges in Australia
        </h1> {/* Dynamic count */}
      </div>

      {/* Filter Tag */}
      <div style={styles.filterTagContainer}>
        <p>Based on your selection: <span style={styles.filterTag}>Australia</span></p>
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
            <button style={styles.detailsButton}>View details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for universities (example)
const universities = [
  {
    name: "The Friends' School",
    country: "Australia",
    internationalStudents: 50,
    englishCourses: true,
    detailsLink: "#",
  },
  {
    name: "Victorian Government Schools",
    country: "Australia",
    internationalStudents: 0,
    englishCourses: true,
    detailsLink: "#",
  },
  {
    name: "All Saints Anglican School",
    country: "Australia",
    internationalStudents: 1800,
    englishCourses: true,
    detailsLink: "#",
  },
  {
    name: "Monash University English Language Centre (MUELC)",
    country: "Australia",
    internationalStudents: null,
    englishCourses: true,
    detailsLink: "#",
  },
  {
    name: "Fahan School",
    country: "Australia",
    internationalStudents: null,
    englishCourses: false,
    detailsLink: "#",
  },
  {
    name: "Camberwell Girls Grammar School",
    country: "Australia",
    internationalStudents: 35,
    englishCourses: false,
    detailsLink: "#",
  },
];

// CSS styles for the page layout
const styles = {
  pageContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "80px", // Create space below the navbar
  },
  headerContainer: {
    marginBottom: "20px",
    textAlign: "center",  // Center align the header content
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
    gridTemplateColumns: "repeat(3, 1fr)",  // Create a grid with 3 columns
    gap: "20px",  // Add spacing between cards
  },
  universityCard: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
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

export default UniversitiesPage;
