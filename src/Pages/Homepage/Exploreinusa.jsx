import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const destinations = [
  {
    name: "Washington",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg`,
    description:
      "Begin your journey in Washington, a hub for innovation and culture!",
  },
  {
    name: "New York",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`,
    description:
      "New York offers a vibrant atmosphere, full of career opportunities and diverse culture.",
  },
  {
    name: "Massachusetts",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
    description:
      "Massachusetts is known for its prestigious universities and rich history.",
  },
  {
    name: "California",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`,
    description:
      "California is the heart of tech innovation and beautiful landscapes.",
  },
];

const Exploreinusa = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
  };

  const sectionTitleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
    fontWeight: "bold",
  };

  const sectionSubtitleStyle = {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#666",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const cardStyle = {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
  };

  const imageStyle = {
    width: "100%",
    height: "300px", // Increased height of images
    objectFit: "cover",
    transition: "opacity 0.3s ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const overlayVisibleStyle = {
    opacity: 1,
  };

  const textOverlayStyle = {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const descriptionStyle = {
    textAlign: "center",
    padding: "10px",
    maxWidth: "80%",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitleStyle}>Explore in USA</h2>
      <p style={sectionSubtitleStyle}>
        Begin an exciting academic journey in these varied and welcoming study
        locations!
      </p>
      <div style={gridStyle}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hovered === index ? cardHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={destination.imgSrc}
              alt={destination.name}
              style={imageStyle}
            />
            <div style={textOverlayStyle}>{destination.name}</div>
            {hovered === index && (
              <div style={{ ...overlayStyle, ...overlayVisibleStyle }}>
                <h3>{destination.name}</h3>
                {destination.description && (
                  <p style={descriptionStyle}>{destination.description}</p>
                )}
                {destination.description && (
                  <button
                    style={buttonStyle}
                    onClick={() => navigate("/formpage")}
                  >
                    Discover
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exploreinusa;
