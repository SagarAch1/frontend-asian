import React, { useState } from "react";

const destinations = [
  {
    name: "South Australia",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg`,
    description:
      "South Australia offers a blend of city and nature, with Adelaide as its heart. It provides a relaxed lifestyle and access to beautiful coastlines, making it perfect for students seeking balance between study and outdoor activities.",
  },
  {
    name: "Victoria",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`,
    description:
      "Victoria, with Melbourne as its capital, is known for its artsy vibe, diverse culture, and innovative industries. The region offers excellent universities and a thriving job market, making it ideal for international students.",
  },
  {
    name: "New South Wales",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
    description:
      "New South Wales is home to Sydney, Australia’s largest city, with a vibrant multicultural atmosphere. The region is famous for its world-class universities, stunning beaches, and strong employment opportunities.",
  },
  {
    name: "Australian Capital Territory",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`,
    description:
      "The Australian Capital Territory (ACT) is known for its clean environment and rich history, being home to Canberra, Australia’s capital. It’s ideal for students looking for a peaceful academic environment.",
  },
  {
    name: "Western Australia",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/uk.webp`,
    description:
      "Western Australia boasts incredible natural beauty, from beaches to deserts. Perth, its capital, offers a relaxed lifestyle and strong educational institutions, providing international students with both academic and cultural experiences.",
  },
  {
    name: "Tasmania",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/usa.jpeg`,
    description:
      "Tasmania is a small island with stunning landscapes and a laid-back lifestyle. It’s perfect for students who enjoy nature, with plenty of opportunities for outdoor adventures alongside a supportive educational community.",
  },
];

const Exploreinaustralia = () => {
  const [hovered, setHovered] = useState(null);

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

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitleStyle}>Explore in Australia</h2>
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
                  <button style={buttonStyle}>Discover</button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exploreinaustralia;
