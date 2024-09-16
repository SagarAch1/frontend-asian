import React from "react";

const Australiauni = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <div style={styles.headerContainer}>
        <p style={styles.breadcrumb}>IDP Education / Find a University / Australia</p>
        <h1 style={styles.mainTitle}>310 Universities and Colleges in Australia</h1>
      </div>

      {/* Filter and Sort Buttons */}
      <div style={styles.filterSortContainer}>
        <button style={styles.filterButton}>Filter university</button>
        <button style={styles.sortButton}>Sort by: Popularity</button>

        {/* Toggle for FastLane */}
        <div style={styles.toggleContainer}>
          <span>Get Instant Offer</span>
          <span style={styles.toggleLabel}>FastLane</span>
        </div>
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
  },
  headerContainer: {
    marginBottom: "20px",
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
  filterSortContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  filterButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  sortButton: {
    backgroundColor: "#fff",
    color: "#007bff",
    border: "1px solid #007bff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  toggleContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    cursor: "pointer",
  },
  toggleLabel: {
    backgroundColor: "#d4edda",
    color: "#155724",
    fontSize: "12px",
    marginLeft: "10px",
    padding: "2px 6px",
    borderRadius: "10px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
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

export default Australiauni;
