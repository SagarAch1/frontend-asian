import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../Homepage/FormPage";
import WhyChooseAiec from "../Homepage/WhyChooseAiec";

// Sample scholarship data
const scholarshipData = [
  {
    id: 1,
    title: "International Student Scholarship",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 2,
    title: "The Chancellor’s Scholarship",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 3,
    title: "Eisenhower Scholarship",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 4,
    title: "President’s Scholarship",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 5,
    title: "National Science Foundation (NSF) Scholarships in STEM Program",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 6,
    title: "Barry Goldwater Scholarship and Excellence in Education Program",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 7,
    title: "Foreign Fulbright Student Scholarship Program",
    institute: "Contact AIEC",
    location: "United States of America",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 8,
    title: "International Excellence Scholarship",
    institute: "Contact AIEC",
    location: "United Kingdom",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 9,
    title: "Music Scholarships",
    institute: "Contact AIEC",
    location: "United Kingdom",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 10,
    title: "International Sports Scholarships",
    institute: "Contact AIEC",
    location: "United Kingdom",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 11,
    title: "Chevening Scholarships",
    institute: "Contact AIEC",
    location: "United Kingdom",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 12,
    title: "International Postgraduate Research Excellence Scholarship",
    institute: "Contact AIEC",
    location: "United Kingdom",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 13,
    title: "Global Talent Scholarships",
    institute: "Contact AIEC",
    location: "United Kingdom",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 14,
    title: "Destination Australia International Scholarships ",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 15,
    title: "Australia Awards Scholarship",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 16,
    title: "Vice Chancellor’s International Diversification Scholarship ",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 17,
    title: "Research Training Program Stipend Scholarship",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 18,
    title: "National Science Foundation (NSF) Scholarships in STEM Program",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 19,
    title: "Barry Goldwater Scholarship and Excellence in Education Program",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
  {
    id: 20,
    title: "Foreign Fulbright Student Scholarship Program",
    institute: "Contact AIEC",
    location: "Australia",
    type: "Pre-Degree & Vocational",
  },
];

const Doctoratescholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate(); // React Router's hook for navigation

  useEffect(() => {
    // Simulate fetching scholarship data
    setScholarships(scholarshipData);
  }, []);

  const handleViewDetails = () => {
    // Navigate to /formpage when button is clicked
    navigate("/formpage");
  };

  const handleInstituteClick = (institute) => {
    if (institute === "Contact AIEC") {
      navigate("/formpage"); // Navigate to /formpage if 'Contact AIEC' is clicked
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Title and count */}
      <h2 style={{ textAlign: "center", margin: "60px 0" }}>
        Found {scholarships.length} Pre-Degree & Vocational Scholarships
      </h2>

      {/* Scholarship grid with improved styling */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center", // Center text
            }}
          >
            <h3 style={{ margin: "10px 0", fontSize: "1.2em" }}>
              {scholarship.title}
            </h3>{" "}
            {/* Decreased size */}
            <p>
              <strong>Institute:</strong>{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => handleInstituteClick(scholarship.institute)}
              >
                {scholarship.institute}
              </span>
            </p>
            <p>
              <strong>Location:</strong> {scholarship.location}
            </p>
            <p>
              <strong>Type:</strong> {scholarship.type}
            </p>

            <button
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
                transition: "background-color 0.3s",
              }}
              onClick={handleViewDetails}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              View details
            </button>
          </div>
        ))}
      </div>
      <FormPage />
      <WhyChooseAiec />
    </div>
  );
};

export default Doctoratescholarship;
