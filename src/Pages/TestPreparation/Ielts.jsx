import React from 'react';
import { FaCheckCircle, FaUsers, FaBookOpen, FaGraduationCap, FaHandshake} from 'react-icons/fa';

const IELTSPreparationPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ul style={styles.testList}>
          <li><button style={styles.testButton}>PTE <FaCheckCircle style={styles.arrowIcon} /></button></li>
          <li><button style={styles.testButton}>TOEFL <FaCheckCircle style={styles.arrowIcon} /></button></li>
          <li><button style={styles.testButton}>SAT <FaCheckCircle style={styles.arrowIcon} /></button></li>
          <li><button style={styles.testButton}>Duolingo <FaCheckCircle style={styles.arrowIcon} /></button></li>
        </ul>
        
        {/* Image placed here */}
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`} alt="IELTS Preparation" style={styles.sidebarImage} />
        
        <button style={styles.bookButton}>Book Your IELTS</button>
      </div>

      <div style={styles.content}>
        <h1 style={styles.heading}>IELTS Preparation: Your Gateway to Success</h1>
        <p style={styles.introduction}>
          Are you aspiring to study abroad, immigrate to an English-speaking country, or enhance your career opportunities?
          The International English Language Testing System (IELTS) is the key to unlocking these possibilities. With thorough
          preparation and strategic guidance, you can achieve your desired band score and open doors to a brighter future.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/images/ielts.png`} alt="IELTS Preparation" style={styles.image} />

        <h2 style={styles.subHeading}>Expert Tips for Success</h2>
        <div style={styles.tipsGrid}>
  <div style={styles.tipCard}>
    <div style={styles.iconCircle}>
      <FaUsers style={styles.icon} />
    </div>
    <p>Develop time management skills to complete each section</p>
  </div>
  <div style={styles.tipCard}>
    <div style={styles.iconCircle}>
      <FaBookOpen style={styles.icon} />
    </div>
    <p>Focus on grammar, vocabulary, and coherence</p>
  </div>
  <div style={styles.tipCard}>
    <div style={styles.iconCircle}>
      <FaGraduationCap style={styles.icon} />
    </div>
    <p>Engage in regular speaking practice</p>
  </div>
  <div style={styles.tipCard}>
    <div style={styles.iconCircle}>
      <FaHandshake style={styles.icon} />
    </div>
    <p>Enhance your listening skills by exposing yourself</p>
  </div>
</div>

        <h2 style={styles.subHeading}>Understanding the IELTS Test</h2>
        <p style={styles.text}>
          The IELTS test comprises four sections: Listening, Reading, Writing, and Speaking. Each section assesses different
          language skills essential for effective communication in an English-speaking environment. Understanding the format of the test
          and practicing with authentic materials are crucial steps toward success.
        </p>

        <h2 style={styles.subHeading}>Key Versions of IELTS</h2>
        <ul style={styles.list}>
          <li><strong>Academic Version:</strong> Aspiring university students, medical professionals, and nurses seeking academic enrollment or practice.</li>
          <li><strong>General Training Version:</strong> Individuals pursuing non-academic training, employment opportunities, or immigration purposes.</li>
        </ul>

        <h2 style={styles.subHeading}>Global Recognition and Acceptance</h2>
        <p style={styles.text}>
          IELTS is recognized by a multitude of esteemed academic institutions worldwide, including those in Australia, the UK, Canada, Ireland,
          New Zealand, and over 1800 US institutions. It serves as the mandatory English language test for immigration to Australia.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    marginTop: '60px', // Avoid overlap with the navbar
  },
  sidebar: {
    width: '25%',
    padding: '20px',
    backgroundColor: '#f8faff',
    borderRadius: '16px',
    marginRight: '20px',
    textAlign: 'center',
  },
  testList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  testButton: {
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #e0e0e0',
    padding: '12px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#007bff',
    fontSize: '16px',
  },
  sidebarImage: {
    width: '100px', // Adjust the size as needed
    height: 'auto',
    margin: '10px auto', // Center the image horizontally
  },
  bookButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
  content: {
    width: '75%',
    padding: '20px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  introduction: {
    fontSize: '18px',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    maxHeight: '300px',
    objectFit: 'contain',
  },
  subHeading: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#333',
  },
  tipsGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  tipCard: {
    width: '48%',
    backgroundColor: '#e0f7fa',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    color: '#00796b',
    marginRight: '10px',
    fontSize: '20px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'disc inside',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  iconCircle: {
    backgroundColor: '#007bff',
    borderRadius: '50%',
    padding: '10px',
    display: 'flex',
    alignItems: 'center', // Center align the icon within the circle
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    marginRight: '15px', // Add space between the icon and the text
  },
  icon: {
    color: '#fff',
    fontSize: '20px',
  },
};

export default IELTSPreparationPage;
