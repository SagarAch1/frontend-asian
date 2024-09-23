import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { name: 'Australia', imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg`, description: 'Uncover a world of opportunities in the land down under! With over 1,100 institutions, and 22,000 courses to choose from, Australia offers a world-class education and an outstanding quality of life.', route: '/studyinaustralia' },
  { name: 'Canada', imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`, description: 'Canada is renowned for its high-quality education and welcoming multicultural society. With a reputation for safety, innovation, and stunning scenery, it’s a top choice for those seeking a well-rounded study abroad experience.', route: '/studyincanada' },
  { name: 'Ireland', imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`, description: 'Canada is renowned for its high-quality education and welcoming multicultural society. With a reputation for safety, innovation, and stunning scenery, it’s a top choice for those seeking a well-rounded study abroad experience.', route: '/studyinireland' },
  { name: 'New Zealand', imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`, description: 'Renowned as one of the world’s safest nations, New Zealand is a popular choice among international students. It offers a world-class education system, abundant research opportunities, breathtaking natural beauty and unparalleled outdoor experiences.', route: '/studyinnewzeland' },
  { name: 'United Kingdom', imgSrc: `${process.env.PUBLIC_URL}/assets/images/uk.webp`, description: 'The United Kingdom is home to some of the world’s finest and oldest universities and colleges. Experience a tradition of academic excellence and research innovation, with access to top-quality education that shapes future leaders across diverse fields.', route: '/studyinuk' },
  { name: 'United States', imgSrc: `${process.env.PUBLIC_URL}/assets/images/usa.jpeg`, description: 'Boasting 33 of the world’s top 100 universities, as well as being home to the financial, technology, aerospace, healthcare and entertainment hubs of the world, the United States is a land of educational and career opportunities for international students.', route: '/studyinusa' },
];

const InfoSection = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const sectionSubtitleStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#666',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const cardStyle = {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  const imageStyle = {
    width: '100%',
    height: '300px', // Increased height of images
    objectFit: 'cover',
    transition: 'opacity 0.3s ease-in-out',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const overlayVisibleStyle = {
    opacity: 1,
  };

  const textOverlayStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const handleDiscoverClick = (route) => {
    navigate(route); // Navigate to the route specified for the destination
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitleStyle}>Six dream destinations</h2>
      <p style={sectionSubtitleStyle}>
        Begin an exciting academic journey in these varied and welcoming study locations!
      </p>
      <div style={gridStyle}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            style={{ ...cardStyle, ...(hovered === index ? cardHoverStyle : {}) }}
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
