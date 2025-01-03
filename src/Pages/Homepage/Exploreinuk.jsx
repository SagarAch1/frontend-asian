import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Newcastle",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/aus.jpeg`,
    description:
      "Newcastle is a vibrant city in the northeast of England, known for its friendly atmosphere and rich history. It offers top-tier universities and a lively cultural scene, making it an exciting place to study.",
  },
  {
    name: "London",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/canada.webp`,
    description:
      "London, the capital city, is a global hub for education, business, and culture. With prestigious universities and a diverse population, it’s an ideal location for international students seeking both academic excellence and cultural immersion.",
  },
  {
    name: "Edinburgh",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
    description:
      "Edinburgh, the capital of Scotland, is known for its stunning architecture, rich history, and vibrant arts scene. The city offers an array of top universities and is a great choice for students who appreciate culture and nature.",
  },
  {
    name: "Glasgow",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`,
    description:
      "Glasgow is Scotland’s largest city, offering a mix of modern culture and historical charm. Known for its arts, music, and diverse food scene, Glasgow provides a dynamic atmosphere for students to thrive academically and socially.",
  },
  {
    name: "Cardiff",
    imgSrc: `${process.env.PUBLIC_URL}/assets/images/new.jpeg`,
    description:
      "Cardiff, the capital of Wales, is known for its welcoming atmosphere and historic landmarks. It boasts a strong educational system, making it an excellent choice for students who want a balance between city life and beautiful nature.",
  },
];

const ExploreinUk = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleDiscoverClick = () => {
    navigate("/formpage"); // Navigate to the desired route
  };

  const containerStyle = {
    /* styles omitted for brevity */
  };

  return (
    <div style={containerStyle}>
      <h2>Explore in UK</h2>
      <p>
        Begin an exciting academic journey in these varied and welcoming study
        locations!
      </p>
      <div>
        {destinations.map((destination, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={destination.imgSrc} alt={destination.name} />
            <div>{destination.name}</div>
            {hovered === index && (
              <div>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <button onClick={handleDiscoverClick}>Discover</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreinUk;
