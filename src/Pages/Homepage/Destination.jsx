import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Australia",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg`,
    description:
      "Explore the boundless possibilities in Australia, where you can choose from over 1,100 institutions and 22,000 courses. This country offers top-tier education and a vibrant lifestyle.",
    route: "/studyinaustralia",
  },
  {
    name: "Canada",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`,
    description:
      "Canada is celebrated for its exceptional education system and inclusive, multicultural environment. With a reputation for safety and natural beauty, it's an ideal choice for students looking for a balanced study experience.",
    route: "/studyincanada",
  },
  {
    name: "Ireland",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
    description:
      "Known for its top-quality education and friendly atmosphere, Ireland combines innovation with rich cultural heritage, making it a great place for students seeking both academic and personal growth.",
    route: "/studyinireland",
  },
  {
    name: "New Zealand",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`,
    description:
      "New Zealand is famous for its safety and natural beauty, providing world-class education and ample research opportunities. Students can enjoy a peaceful environment with endless outdoor adventures.",
    route: "/studyinnewzeland",
  },
  {
    name: "United Kingdom",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/uk.webp`,
    description:
      "The UK is home to some of the world’s oldest and most prestigious universities, offering academic excellence and opportunities for research that shape future leaders across diverse fields.",
    route: "/studyinuk",
  },
  {
    name: "United States",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/usa.jpeg`,
    description:
      "With 33 of the world’s top 100 universities, the US offers unmatched academic and career opportunities in key industries like technology, healthcare, and entertainment.",
    route: "/studyinusa",
  },
];

const InfoSection = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
  };

  const sectionTitleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
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
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    padding: "20px",
    textAlign: "center", // Ensure text is centered horizontally
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

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  };

  const handleDiscoverClick = (route) => {
    navigate(route); // Navigate to the route specified for the destination
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitleStyle}>Six dream destinations</h2>
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
                {destination.description && <p>{destination.description}</p>}
                {destination.description && (
                  <button
                    style={buttonStyle}
                    onClick={() => handleDiscoverClick(destination.route)} // Navigate to specific route
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

export default InfoSection;
