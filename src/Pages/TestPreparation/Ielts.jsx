import React from 'react';
import { FaCheckCircle, FaUsers, FaBookOpen, FaGraduationCap, FaHandshake, FaStar } from 'react-icons/fa';
import FormPage from '../Homepage/FormPage';
import Footer from '../Homepage/Footer';
const navbarHeight = '60px';

const IELTSPreparationPage = () => {
  return (
    <div style={styles.pageContainer}> 
    <header style={styles.header}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ib.png`} // Replace with your image path
          alt="IELTS Preparation"
          style={styles.headerImage}
        />
      </header>
      <div style={styles.contentContainer}>
        <div style={styles.sidebar}>
          <ul style={styles.testList}>
            <li><button style={styles.testButton}>PTE <FaCheckCircle style={styles.arrowIcon} /></button></li>
            <li><button style={styles.testButton}>TOEFL <FaCheckCircle style={styles.arrowIcon} /></button></li>
            <li><button style={styles.testButton}>SAT <FaCheckCircle style={styles.arrowIcon} /></button></li>
            <li><button style={styles.testButton}>Duolingo <FaCheckCircle style={styles.arrowIcon} /></button></li>
          </ul>
          
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.jpeg`} alt="IELTS Preparation" style={styles.sidebarImage} />
          
          <button style={styles.bookButton}>Book Your IELTS</button>
        </div>

        <div style={styles.mainContent}>
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

          {/* Added Section */}
          <h2 style={styles.subHeading}>Test Duration</h2>
          <p style={styles.text}>
            The total test duration is 2 hours and 45 minutes. The Listening, Reading, and Writing modules are completed consecutively, followed by the Speaking module either on the same day or the following day.
          </p>
          {/* Added Section */}
          <h2 style={styles.subHeading}>Band Scale and Interpretation</h2>
          <ul style={styles.list}>
            <li><strong>9 Expert User:</strong> Full command of the language with accuracy, fluency, and complete understanding.</li>
            <li><strong>8 Very Good User:</strong> Fully operational command with occasional inaccuracies, handling complex arguments proficiently.</li>
            <li><strong>7 Good User:</strong> Operational command with occasional inaccuracies, handling complex language and reasoning well.</li>
            <li><strong>6 Competent User:</strong>: Effective command despite some errors, understanding complex language in familiar contexts.</li>
            <li><strong>5 Modest User:</strong> Partial command, coping with overall meaning but likely making frequent mistakes.</li>
            <li><strong>4 Limited User:</strong> Basic competence limited to familiar situations, struggles with complex language.</li>
            <li><strong>3 Extremely Limited User:</strong> Conveys general meaning in familiar situations but experiences frequent breakdowns.</li>
            <li><strong>2 Intermittent User:</strong> Limited communication beyond basic information purposes, difficulty in understanding English.</li>
            <li><strong>1 Non User:</strong> Minimal ability to use the language beyond isolated words.</li>
            <li><strong>0 Did not attempt the test:</strong> No assessable information provided.</li>
          </ul>

          <h2 style={styles.subHeading}>Our Benefits</h2>
   
          <p style={styles.text}>
            Choosing the right consultancy can make a world of difference in your journey toward international exploration, growth, and success.
            At AIEC GLOBAL, we take pride in the distinctive benefits of partnering with us:
          </p>
          <img src={`${process.env.PUBLIC_URL}/assets/images/beni.png`} alt="IELTS Preparation" style={styles.sidebrImage} />
          <ul style={styles.benefitsList}>
            <li><FaStar style={styles.starIcon} /> Experienced Instructors</li>
            <li><FaStar style={styles.starIcon} /> Targeted Preparation Strategies</li>
            <li><FaStar style={styles.starIcon} /> Interactive Learning Environment</li>
            <li><FaStar style={styles.starIcon} /> Support Beyond the Classroom</li>
            <li><FaStar style={styles.starIcon} /> Free Mock Test</li>
          </ul>

          {/* Added Section */}
          <h2 style={styles.subHeading}>Why Choose Our IELTS Preparation Course?</h2>
          <p style={styles.text}>
            Our IELTS preparation course offers personalized coaching, practice tests, and feedback sessions to help you achieve your desired band score.
            With experienced instructors and comprehensive study materials, we provide all the tools you need to succeed. Whether you're aiming for academic
            excellence or pursuing your career abroad, our course is designed to maximize your potential and boost your confidence.
          </p>
          <ul style={styles.list}>
            <li>Tailored study plans based on your current skill level</li>
            <li>Interactive sessions with expert IELTS instructors</li>
            <li>Access to a vast library of study materials and practice tests</li>
            <li>Flexible scheduling options to fit your busy lifestyle</li>
            <li>Regular assessments to track your progress and adjust your learning plan</li>
          </ul>
          <p style={styles.text}>
            Join our IELTS preparation course today and take the first step towards achieving your goals. Our dedicated team is here to support you every step of the way.
          </p>
        </div>
      </div>

      <FormPage />
      <Footer />
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the page takes at least the full height of the viewport
  },
  header: {
    width: '100%',
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: '500px',
    display: 'block',
  },
  contentContainer: {
    flex: 1, // Makes sure the content takes up the remaining space
    display: 'flex',
    marginTop: navbarHeight, // Adjust this based on your navbar height
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
    fontSize: '16px',
    width: '100%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  arrowIcon: {
    marginLeft: '10px',
  },
  sidebarImage: {
    width: '400px',
    marginBottom: '20px',
  },
  bookButton: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    padding: '15px 20px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
  heading: {
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  introduction: {
    fontSize: '1.1em',
    marginBottom: '20px',
  },
  image: {
    width: '1000px',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '29px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  tipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  },
  tipCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
  },
  iconCircle: {
    backgroundColor: '#0d6efd',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 10px auto',
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
  },
  text: {
    fontSize: '1.1em',
    
    marginBottom: '20px',
  },
  list: {
    listStyle: 'disc inside',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  benefitsList: {

    listStyle: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  sidebrImage: {
    width: '600px',
    height: 'auto',
    marginBottom: '20px',
  },
};

export default IELTSPreparationPage;
