import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormPage from '../Homepage/FormPage';
import Footer from '../Homepage/Footer';

const subjectsData = {
 'A': [
    { name: 'Agriculture Sciences', subjects: ['Pest And Weed Control', 'Plant Sciences', 'Horticulture and Viticulture', ' Crop Sciences', ' Wool Science'] },
    { name: 'All Accounting', subjects: ['Taxation'] },
    { name: 'All Pharmacy', subjects: ['Pharmaceutical Science'] },
    { name: 'Architecture and Planning', subjects: ['Architecture'] },
    { name: 'Art and Design', subjects: ['Fashion Merchandise', 'Visual arts', 'Product Design', 'Industrial Design', 'Graphic and Design Studies', 'Fashion Design', 'Art History', 'Video Game development', 'Digital production'] },
    { name: 'Arts, Humanities And Social Science', subjects: ['Human Welfare Studies And Services'] },
    { name: 'Agriculture, Environmental & Rel Studies', subjects: ['Fisheries studies'] },
  ],
  'B': [ 
    { name: 'Biological and Biomedical Sciences', subjects: ['Pharmacology', 'Botany'] },
    { name: 'Biological and life Sciences', subjects: ['Forensics', 'Biotechnology', 'Biochemistry'] },
    { name: 'Building and Architecture', subjects: ['Technology', 'Planning', 'Landscape design and architecture', 'Town planning'] },
    { name: 'Business', subjects: ['Psychology', 'Business Administration', 'Farm and Agribusiness'] },
    { name: 'Business, Commerce And Management', subjects: ['Tourism'] },
  ],
'C': [
    { name: 'Communication and Journalism', subjects: ['Web Development'] },
    { name: 'Computer and Information Sciences', subjects: ['Systems Engineering', 'Statistics'] },
    { name: 'Computing and IT', subjects: ['Information technology'] },
  ],
  'E': [
    { name: 'Economics', subjects: ['Qualitative Economics'] },
    { name: 'Education', subjects: ['Agriculture Education Services'] },
    { name: 'Engineering', subjects: ['Food Science'] },
    { name: 'English Language and Literature', subjects: ['Creative Writing'] },
    { name: 'English Language Studies', subjects: ['Business English'] },
    { name: 'Environmental Science', subjects: ['Conservation'] },

  ],

'F': [
    { name: 'Family and Consumer Sciences', subjects: ['Dietetics'] },
    { name: 'Food, Hospitality And Personal Services', subjects: ['Food And Hospitality'] },
  ],
  'G': [
    { name: 'General Primary And Secondary Education', subjects: ['Social Skills Programmes'] },
  ],
  'H':[
        { name: 'Health and Medicine', subjects: ['Rehabilitation Therapy', 'Human Movement', 'Geriatric Studies', 'Sports Science', 'Surgery', 'Animal and Veterinary Studies', 'Disability Studies', 'First Aid', 'Speech Pathology', 'Allied Health Science', 'Occupational Health & Safety', 'Podiatry', 'Psychiatry and Neurosurgery', 'Disability Studies', 'Occupational Therapy', 'Speech Therapy'] },
    { name: 'Health Professions & Clinical Sciences', subjects: ['Acupuncture'] },
    { name: 'Health, Medicine And Veterinary Studies', subjects: ['Public Health', 'Radiography'] },
    { name: 'History', subjects: ['General History'] },
    { name: 'Hospitality and Tourism', subjects: ['Hotel and hospitality', 'Bakery', 'Beauty'] },
  ],


  'L': [
    { name: 'Language and Culture', subjects: ['Philosophy and Religious Studies'] },
    { name: 'Law and Legal Studies', subjects: ['Police Studies'] },
  ],

'M': [
    { name: 'Marketing, Media and Communication', subjects: ['Written Communication', 'Mass Communication'] },
  ],
  'N': [
    { name: 'Natural And Physical Sciences', subjects: ['Earth Sciences'] },
    { name: 'Natural Resources and Conservation', subjects: ['Environmental Engineering'] },
  ],

'P': [
    { name: 'Personal and Culinary Services', subjects: ['Cosmetology'] },
    { name: 'Philosophy & Religion', subjects: ['Religious Studies'] },
    { name: 'Physical Sciences', subjects: ['Astrophysics', 'Physical Sciences'] },
    { name: 'Physics', subjects: ['Theoretical Physics'] },
    { name: 'Political and Social Sciences', subjects: ['Social Justice', 'Social Science', 'Political Science and Policy Studies', 'Political Science'] },
  ],
  'S': [
    { name: 'Social Sciences', subjects: ['Sociology'] },
  ],

'T': [
    { name: 'Teaching and Education', subjects: ['Higher Education', 'Counselling', 'Curriculum and Education Studies', 'Early Childhood Education', 'Primary Education', 'Secondary Education'] },

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
    <>
    <div style={styles.container}>
      {/* Top image */}
      <div style={styles.topImage}></div>

      {/* Title Section */}
      <div style={styles.titleSection}>
        <h1 style={styles.title}>What to study abroad?</h1>
        <p style={styles.subtitle}>
          With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. 
          Don't worry, we are here to guide you during the entire process.
        </p>
      </div>

      {/* Browse Section */}
      <div style={styles.browseSection}>
        <div style={styles.subjectList}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          {Object.keys(filteredSubjects).map((letter, i) => (
            <div key={i}>
              <h2 style={styles.letterHeader}>{letter}</h2>
              {filteredSubjects[letter].map((subject, index) => (
                <div key={index} style={styles.subjectBox}>
                  <div
                    style={styles.subjectHeader}
                    onClick={() => handleToggle(`${letter}-${index}`)}
                  >
                    <h3 style={styles.subjectTitle}>{subject.name}</h3>
                    <span style={styles.toggleIcon}>{expanded === `${letter}-${index}` ? '-' : '+'}</span>
                  </div>
                  {expanded === `${letter}-${index}` && subject.subjects.length > 0 && (
                    <div style={styles.subjectDetails}>
                      {subject.subjects.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          style={styles.subjectItem}
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
        <div style={styles.signupSection}>
          <h3 style={styles.signupTitle}>Haven't you signed up yet?</h3>
          <p style={styles.signupText}>
            Sign in to get personalized content for you or get in touch with one of our counselors for free consultation.
          </p>
          <button style={styles.signupButton} onClick={() => navigate('/register')}>
            Sign Up
          </button>
        </div>
      </div>
      <FormPage />
     
    </div>
    <div style={styles.footer}>
          <Footer style={styles.footer} />
        </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    fontFamily: "'Aptos', sans-serif",
  },
  topImage: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/finalbanner.jpg)`,
    width: '100%',
    height: '350px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '80px',
  },
  footer: {
    
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '80px',
  },
  titleSection: {
    textAlign: 'center',
    padding: '40px',
    maxWidth: '800px',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#555',
  },
  browseSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '50px',
    width: '80%',
    marginTop: '20px',
  },
  subjectList: {
    flex: 3,
    maxWidth: '800px',
  },
  searchInput: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  letterHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  subjectBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fafafa',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  subjectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  subjectTitle: {
    fontSize: '18px',
    fontWeight: '500',
  },
  toggleIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  subjectDetails: {
    paddingLeft: '20px',
    marginTop: '10px',
  },
  subjectItem: {
    cursor: 'pointer',
    color: 'blue',
    marginBottom: '10px',
    fontSize: '16px',
  },
  subjectItemHover: {
    textDecoration: 'underline',
  },
  signupSection: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '300px',
    textAlign: 'center',
  },
  signupTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  signupText: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  signupButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  signupButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Allsubjects;
