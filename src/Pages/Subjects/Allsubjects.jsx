import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const subjectsData = {
  'A': [
    { name: 'Agriculture Sciences', subjects: ['Agriculture, Environmental & Rel Studies', 'Fisheries studies'] },
    { name: 'All Accounting', subjects: [] },
    { name: 'All Pharmacy', subjects: [] },
    { name: 'Architecture and Planning', subjects: [] },
    { name: 'Art and Design', subjects: [] },
    { name: 'Arts, Humanities And Social Science', subjects: [] },
  ],
  'B': [
    { name: 'Biological and Biomedical Sciences', subjects: [] },
    { name: 'Biological and life Sciences', subjects: [] },
    { name: 'Building and Architecture', subjects: [] },
    { name: 'Business', subjects: [] },
  ],
};

const Allsubjects = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredSubjects = Object.keys(subjectsData).reduce((acc, letter) => {
    const filtered = subjectsData[letter].filter((subject) =>
      subject.name.toLowerCase().includes(searchTerm) || subject.subjects.some((sub) => sub.toLowerCase().includes(searchTerm))
    );
    if (filtered.length > 0) acc[letter] = filtered;
    return acc;
  }, {});

  const handleSubjectClick = (subject) => {
    const subjectName = subject.replace(/\s+/g, '').toLowerCase();
    navigate(`/${subjectName}`);
  };

  return (
    <div>
      {/* Top image */}
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/pre.jpg)`, width: '100%', height: '300px', backgroundSize: 'cover' }}></div>

      {/* Title Section */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>What to study abroad?</h1>
        <p>With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Don't worry, we are here to guide you during the entire process.</p>
      </div>

      {/* Browse Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ width: '70%' }}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
          />
          {Object.keys(filteredSubjects).map((letter, i) => (
            <div key={i}>
              <h2>{letter}</h2>
              {filteredSubjects[letter].map((subject, index) => (
                <div key={index}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #ddd', padding: '10px 0' }}
                    onClick={() => handleToggle(`${letter}-${index}`)}
                  >
                    <h3>{subject.name}</h3>
                    <span>{expanded === `${letter}-${index}` ? '-' : '+'}</span>
                  </div>
                  {expanded === `${letter}-${index}` && subject.subjects.length > 0 && (
                    <div style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                      {subject.subjects.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          style={{ cursor: 'pointer', marginBottom: '10px', color: 'blue' }}
                          onClick={() => handleSubjectClick(sub)}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Signup Section */}
        <div style={{ width: '25%', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
          <h3>Haven't you signed up yet?</h3>
          <p>Sign in to get personalized content for you or get in touch with one of our counselors for free consultation.</p>
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allsubjects;
