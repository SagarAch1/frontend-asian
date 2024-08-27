import React from "react";

// Define styles used in BelowSliderSection
const dropdownStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  margin: "0 5px",
};

const searchButtonStyle = {
  backgroundColor: "#ff6600",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const belowSliderSectionStyle = {
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  width: "fit-content", // Adjust width based on content
  margin: "0 auto", // Center the box horizontally
  marginTop: "-50px", // Adjust this value to move the section up or down
  border: "2px solid black", // Add black border
};

const flexContainerStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap", // Allow wrapping if needed
  alignItems: "center", // Align items in the center vertically
};

const BelowSliderSection = ({ activeSection }) => {
  return (
    <div style={belowSliderSectionStyle}>
      <div style={flexContainerStyle}>
        {activeSection === "courses" && (
          <>
            <select style={dropdownStyle}>
              <option value="">Course Subject</option>
              {/* Add course subjects here */}
            </select>
            <select style={dropdownStyle}>
              <option value="">Study Level</option>
              {/* Add study levels here */}
            </select>
            <select style={dropdownStyle}>
              <option value="">Study Destinations</option>
              {/* Add study destination options here */}
            </select>
            <button style={searchButtonStyle}>Search</button>
          </>
        )}
        {activeSection === "scholarships" && (
          <>
            <select style={dropdownStyle}>
              <option value="">Country</option>
              {/* Add countries here */}
            </select>
            <select style={dropdownStyle}>
              <option value="">Scholarship Type</option>
              {/* Add scholarship types here */}
            </select>
            <button style={searchButtonStyle}>Search</button>
          </>
        )}
        {activeSection === "universities" && (
          <>
            <select style={dropdownStyle}>
              <option value="">Country</option>
              {/* Add countries here */}
            </select>
            <select style={dropdownStyle}>
              <option value="">University Type</option>
              {/* Add university types here */}
            </select>
            <button style={searchButtonStyle}>Search</button>
          </>
        )}
        {activeSection === "guideMe" && (
          <>
            <h3>Let us help you with your search</h3>
            <p>
              Simply answer these 5 questions to see courses perfectly matched
              to you.
            </p>
            <button style={searchButtonStyle}>Search</button>
          </>
        )}
        {activeSection === "events" && (
          <>
            <select style={dropdownStyle}>
              <option value="">City</option>
              {/* Add city options here */}
            </select>
            <select style={dropdownStyle}>
              <option value="">Month</option>
              {/* Add month options here */}
            </select>
            <select style={dropdownStyle}>
              <option value="">Study Destinations</option>
              {/* Add study destination options here */}
            </select>
            <button style={searchButtonStyle}>Search</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BelowSliderSection;
