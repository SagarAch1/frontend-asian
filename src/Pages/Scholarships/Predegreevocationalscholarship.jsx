import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample scholarship data
const scholarshipData = [
  {
    id: 1,
    title: 'Female in Technology Scholarship',
    institute: 'Aspire2 International Business and Technology',
    location: 'New Zealand',
    type: 'Pre-Degree & Vocational',
    funding: 'Other Discount',
  },
  {
    id: 2,
    title: 'AIS Scholarship',
    institute: 'Auckland Institute of Studies New Zealand',
    location: 'New Zealand',
    type: 'Pre-Degree & Vocational',
    funding: 'Fee waiver/discount',
  },
  {
    id: 3,
    title: 'Lincoln University International Undergraduate Scholarship',
    institute: 'Lincoln University',
    location: 'New Zealand',
    type: 'Pre-Degree & Vocational',
    funding: 'Fee waiver/discount',
  },
  // Add more data as needed...
];

const ScholarshipList = () => {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate(); // React Router's hook for navigation

  useEffect(() => {
    // Simulate fetching scholarship data
    setScholarships(scholarshipData);
  }, []);

  const handleViewDetails = () => {
    // Navigate to /formpage when button is clicked
    navigate('/formpage');
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Top image from left to right */}
      <img src={`${process.env.PUBLIC_URL}/assets/images/ire.jpeg`} alt="Scholarship Banner" style={{ width: '100%', marginBottom: '20px',height:'300px' }} />

      {/* Title and count */}
      <h2>Found {scholarships.length} Pre Degree & Vocational Scholarships</h2>

      {/* Scholarship grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <h3>{scholarship.title}</h3>
            <p><strong>Institute:</strong> {scholarship.institute}</p>
            <p><strong>Location:</strong> {scholarship.location}</p>
            <p><strong>Type:</strong> {scholarship.type}</p>
            <p><strong>Funding:</strong> {scholarship.funding}</p>
            <button
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleViewDetails} // Navigate to /formpage on click
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipList;
