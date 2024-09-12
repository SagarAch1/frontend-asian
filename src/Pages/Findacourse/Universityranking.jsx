import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy data for universities
const universitiesData = [
  { id: 1, name: 'The University of Melbourne', country: 'Australia', logo: 'logo-melbourne.png' },
  { id: 2, name: 'Monash University', country: 'Australia', logo: 'logo-monash.png' },
  { id: 3, name: 'The University of Sydney', country: 'Australia', logo: 'logo-sydney.png' },
  // Add more universities as needed
];

const UniversityRankings = () => {
  const [searchName, setSearchName] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('Australia');
  const navigate = useNavigate();

  const filteredData = universitiesData.filter(university => {
    return (
      (university.name.toLowerCase().includes(searchName.toLowerCase()) || !searchName) &&
      (university.country === selectedDestination || !selectedDestination)
    );
  });

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', paddingTop: '100px' }}> {/* Added paddingTop here */}
      {/* Full-width background section */}
      <div style={{ backgroundColor: '#f0f4f8', padding: '40px 0', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>THE University Rankings for 2024</h1>
          <p style={{ marginBottom: '40px' }}>
            Discover the world’s top-ranking universities according to Times Higher Education University Rankings 2024. 
            Search globally or by country and explore the courses and experience they offer.
          </p>

          {/* Search and Dropdown Box */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              top: '150px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: '1',
              width: '60%',
              gap: '20px'
            }}
          >
            <input 
              type="text" 
              placeholder="Search by university name" 
              value={searchName} 
              onChange={handleSearchNameChange}
              style={{
                padding: '15px',
                width: '60%',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }} 
            />

            <select 
              value={selectedDestination} 
              onChange={handleDestinationChange}
              style={{
                padding: '15px',
                width: '40%',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            >
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>

            <button 
              style={{
                padding: '15px 30px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* University List and Signup Section */}
      <div style={{ display: 'flex', gap: '40px', padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* University List */}
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: '20px' }}>{filteredData.length} Universities, showing results below</p>
          {filteredData.map((university, index) => (
            <div 
              key={university.id} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '15px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <strong 
                  style={{ 
                    fontSize: '1.2rem', 
                    marginRight: '15px', 
                    backgroundColor: '#ffcc00', 
                    padding: '5px 10px', 
                    borderRadius: '50%', 
                    color: '#fff'
                  }}>
                  {index + 1}
                </strong>
                <img 
                  src={university.logo} 
                  alt={`${university.name} logo`} 
                  style={{ width: '50px', height: '50px', marginRight: '15px' }} 
                />
                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{university.name}</span> 
                <span style={{ marginLeft: '10px', color: '#888' }}>({university.country})</span>
              </div>
              <button 
                style={{
                  padding: '10px 20px',
                  border: '1px solid #007BFF',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  color: '#007BFF',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                View details
              </button>
            </div>
          ))}
        </div>

        {/* Sign Up Box */}
        <div 
          style={{
            padding: '20px',
            backgroundColor: '#f0f4f8',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>Need help with choosing a university?</p>
          <p style={{ marginBottom: '20px', color: '#888' }}>
            Sign in to get personalised content optimized for you or get in touch with one of our counsellors for free consultation.
          </p>
          <button 
            onClick={handleSignUp} 
            style={{
              padding: '15px 30px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityRankings;
