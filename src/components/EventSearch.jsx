import React from "react";

// Styles for EventSearch component
export const dropdownStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  minWidth: "120px", // Adjusted size to fit topics
};

export const searchButtonStyle = {
  padding: "8px 16px",
  borderRadius: "5px",
  backgroundColor: "blue",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "16px", // Adjusted font size for consistency
};

const containerStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

function EventSearch() {
  return (
    <div style={containerStyle}>
      <nav style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0" }}>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            padding: "0",
            margin: "0",
          }}
        >
          {["Courses", "Scholarships", "Universities", "Events", "Guide me"].map(
            (item) => (
              <li key={item} style={{ marginRight: "20px" }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    paddingBottom: "10px",
                    display: "inline-block",
                    borderBottom: item === "Events" ? "3px solid blue" : "none",
                  }}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <select style={dropdownStyle}>
          <option value="">City</option>
          {/* Add city options here */}
        </select>

        <select style={dropdownStyle}>
          <option value="">Month</option>
          {/* Add month options here */}
        </select>

        <select style={dropdownStyle}>
          <option value="">Study destinations</option>
          {/* Add study destination options here */}
        </select>

        <button style={searchButtonStyle}>Search</button>
      </div>

      {/* The Guide Me section now includes a search button */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h3>Let us help you with your search</h3>
        <p>
          Simply answer these questions to find the best events for you.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={searchButtonStyle}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default EventSearch;
