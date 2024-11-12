import React, { useState } from 'react';

const destinations = [
  { name: 'Newcastle', imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg`, description: 'Newcastle is a vibrant city in the northeast of England, known for its friendly atmosphere and rich history. It offers top-tier universities and a lively cultural scene, making it an exciting place to study.' },
  { name: 'London', imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`, description: 'London, the capital city, is a global hub for education, business, and culture. With prestigious universities and a diverse population, it’s an ideal location for international students seeking both academic excellence and cultural immersion.' },
  { name: 'Edinburgh', imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`, description: 'Edinburgh, the capital of Scotland, is known for its stunning architecture, rich history, and vibrant arts scene. The city offers an array of top universities and is a great choice for students who appreciate culture and nature.' },
  { name: 'Glasgow', imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`, description: 'Glasgow is Scotland’s largest city, offering a mix of modern culture and historical charm. Known for its arts, music, and diverse food scene, Glasgow provides a dynamic atmosphere for students to thrive academically and socially.' },
  { name: 'Cardiff', imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`, description: 'Cardiff, the capital of Wales, is known for its welcoming atmosphere and historic landmarks. It boasts a strong educational system, making it an excellent choice for students who want a balance between city life and beautiful nature.' },
];

const ExploreinUk = () => {
  const [hovered, setHovered] = useState(null);

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
    fontWeight: 'bold',
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

  const descriptionStyle = {
    textAlign: 'center', // Centers the text
    padding: '10px',
    maxWidth: '80%', // Optional: set a max width to avoid text overflowing
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
      <h2 style={sectionTitleStyle}>Explore in UK</h2>
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
                {destination.description && <p style={descriptionStyle}>{destination.description}</p>}
                {destination.description && <button style={buttonStyle}>Discover</button>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreinUk;
