import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormPage from '../Homepage/FormPage';
import Footer from '../Homepage/Footer';
import WhyChooseAiec from '../Homepage/WhyChooseAiec';

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
  {
    id: 4,
    title: 'Tech Innovators Scholarship',
    institute: 'University of Canterbury',
    location: 'New Zealand',
    type: 'Undergraduate',
    funding: 'Full tuition',
  },
  {
    id: 5,
    title: 'Excellence in Engineering Scholarship',
    institute: 'Victoria University of Wellington',
    location: 'New Zealand',
    type: 'Postgraduate',
    funding: 'Partial scholarship',
  },
  {
    id: 6,
    title: 'Future Leaders Scholarship',
    institute: 'Massey University',
    location: 'New Zealand',
    type: 'Undergraduate',
    funding: 'Full tuition',
  },
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
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Title and count */}
      <h2 style={{ textAlign: 'center', margin: '10px 0' }}>
        Found {scholarships.length} Pre-Degree & Vocational Scholarships
      </h2>

      {/* Scholarship grid with improved styling */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        {scholarships.map((scholarship) => (
          <div 
            key={scholarship.id} 
            style={{ 
              border: '1px solid #ccc', 
              padding: '20px', 
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              textAlign: 'center', // Center text
            }}
          >
            <h3 style={{ margin: '10px 0', fontSize: '1.2em' }}>{scholarship.title}</h3> {/* Decreased size */}
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
                marginTop: '10px',
                transition: 'background-color 0.3s',
              }}
              onClick={handleViewDetails}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
              View details
            </button>
          </div>
        ))}
      </div>
      <FormPage />
      <WhyChooseAiec />
      
    </div>
  );
};

export default ScholarshipList;
