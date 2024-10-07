import React, { useState } from 'react';

const CourseDetail = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>Bachelor of Science in Biology - Cellular/Molecular Biology</h1>
          <h3 style={styles.university}>At Humboldt State University (California State University, CSU)</h3>
        </div>
        <div style={styles.actionButtons}>
          <button style={styles.enquireButton}>Enquire now</button>
          <button style={styles.actionButton}>❤</button>
          <button style={styles.actionButton}>🔗</button>
        </div>
      </header>

      {/* Main Content Section */}
      <div style={styles.contentContainer}>
        {/* Left Column: Course Details */}
        <div style={styles.leftColumn}>
          {/* Course Information */}
          <div style={styles.courseInfo}>
            <div style={styles.courseRow}>
              <p><strong>Location:</strong> United States</p>
              <p><strong>Qualification:</strong> Bachelor Degree</p>
            </div>
            <div style={styles.courseRow}>
              <p><strong>Fees:</strong> USD 19,738 (2024)</p>
              <p><strong>Duration:</strong> 8 Semesters</p>
            </div>
            <div style={styles.courseRow}>
              <p><strong>Next Intake:</strong> 21 January 2025</p>
              <p><strong>Entry Score:</strong> 6.0 IELTS</p>
            </div>
          </div>

          {/* About the Course */}
          <div style={styles.aboutCourse}>
            <h2>About the course</h2>
            <p>
              Biology majors study organisms and how they function in the natural world. You can be a general biology major 
              or focus your studies by choosing a concentration in one of five specialty areas: Cellular and Molecular Biology, 
              Ecology, Marine Biology, Microbiology, or Science Education.
            </p>
            <p>More course details...</p>
            <div>
              <p><strong>Scholarships:</strong> <a href="#">View all scholarships</a></p>
              <p><strong>Internships:</strong> Available</p>
            </div>
          </div>

          {/* Accordion Sections */}
          <div style={styles.accordion}>
            <AccordionSection
              title="Start dates and prices"
              isActive={activeSection === 'dates'}
              onToggle={() => toggleSection('dates')}
            />
            <AccordionSection
              title="How to apply"
              isActive={activeSection === 'apply'}
              onToggle={() => toggleSection('apply')}
            />
            <AccordionSection
              title="Reviews and rankings"
              isActive={activeSection === 'reviews'}
              onToggle={() => toggleSection('reviews')}
            />
            <AccordionSection
              title="About the school"
              isActive={activeSection === 'school'}
              onToggle={() => toggleSection('school')}
            />
          </div>
        </div>

        {/* Right Column: Counsellor Section */}
        <div style={styles.rightColumn}>
          <div style={styles.counselorBox}>
            <h3>Feeling stuck? Let our expert counsellor help you.</h3>
            <p>Our experienced counsellors are here to guide and support you through every step of your study abroad journey. Reach out today!</p>
            <button style={styles.meetCounselorButton}>Meet a counsellor</button>
            <img src={`${process.env.PUBLIC_URL}/assets/counsellor.jpg`} alt="Counsellor" style={styles.counselorImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionSection = ({ title, isActive, onToggle }) => (
  <div style={styles.accordionItem}>
    <div style={styles.accordionTitle} onClick={onToggle}>
      <span>{title}</span>
      <span>{isActive ? '-' : '+'}</span>
    </div>
    {isActive && (
      <div style={styles.accordionContent}>
        <p>Content for {title.toLowerCase()}</p>
      </div>
    )}
  </div>
);

const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '100px', // Ensures content is below the navbar
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  university: {
    fontSize: '16px',
    color: '#777',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
  },
  enquireButton: {
    padding: '10px 20px',
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  actionButton: {
    padding: '10px',
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftColumn: {
    width: '65%',
  },
  rightColumn: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  courseInfo: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  courseRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  aboutCourse: {
    marginBottom: '20px',
  },
  accordion: {
    marginTop: '20px',
  },
  accordionItem: {
    marginBottom: '10px',
  },
  accordionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  accordionContent: {
    padding: '10px 15px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px',
  },
  counselorBox: {
    backgroundColor: '#f0f4f7',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  meetCounselorButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  counselorImage: {
    marginTop: '20px',
    width: '100%',
    borderRadius: '50%',
  },
};

export default CourseDetail;
