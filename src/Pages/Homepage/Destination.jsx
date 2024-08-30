import React, { useState } from 'react';

const destinations = [
    { name: 'Australia', imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg` , description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections' },
    { name: 'Canada', imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`, description: 'Canada is renowned for its high-quality education and welcoming multicultural society. With a reputation for safety, innovation, and stunning scenery, it’s a top choice for those seeking a well-rounded study abroad experience.' },
    { name: 'Ireland', imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections' },
    { name: 'New Zealand', imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`,description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections' },
    { name: 'United Kingdom', imgSrc: `${process.env.PUBLIC_URL}/assets/images/uk.webp`,description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections' },
    { name: 'United States', imgSrc: `${process.env.PUBLIC_URL}/assets/images/usa.jpeg`,description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections' },
  ];
  

const InfoSection = () => {
  const [hovered, setHovered] = useState(null);

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
                {destination.description && <button style={buttonStyle}>Discover</button>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
