import React from 'react';

const  Bachelorofdesign = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img 
            src="https://asian.edu.np/wp-content/uploads/elementor/thumbs/new-logo-footer-qnlq1cjtwddgp0mduco1alft6pg7aqz42y3lcne8bk.png" 
            alt="University Logo" 
            style={styles.logoImage} 
          />
        </div>
        <div style={styles.courseInfo}>
          <h1 style={styles.courseTitle}>Bachelor of Design</h1>
          <h2 style={styles.courseSubtitle}>At THE UNIVERSITY OF MELBOURNE</h2>
          <button style={styles.enquireButton}>Enquire now</button>
        </div>
      </header>
      <div style={styles.details}>
        <div style={styles.detailItem}>Location: Australia</div>
        <div style={styles.detailItem}>Qualification: Bachelor Degree</div>
        <div style={styles.detailItem}>Fees: AUD37264 (2024)</div>
        <div style={styles.detailItem}>Duration: 3 Year(s)</div>
        <div style={styles.detailItem}>Next intake: 27 February 2025</div>
        <div style={styles.detailItem}>Entry Score: 6.5 IELTS</div>
      </div>
      <section style={styles.aboutCourse}>
        <h3 style={styles.sectionTitle}>About the course</h3>
        <p style={styles.courseDescription}>
          Designers apply creative and open approaches to defining and solving problems, leading to high-quality decisions. 
          This enables businesses and industries to overcome rigid or outdated ways of doing things. Design has applications 
          in the creation and improvement of our cities, buildings, transport networks, furniture, websites, processes, bridges, 
          landscapes, and environment. Designers are innovators who enhance the way we live and interact with the world around us.
        </p>
        <p style={styles.courseDescription}>
          As technology drives more and more aspects of our lives, designers are playing an important role in expanding 
          the potential of the Internet of Things, such as smart homes, smart cities, and intelligent transportation.
        </p>
        <p style={styles.courseDescription}>
          If you are imaginative, enjoy learning about new fields, and want to play a role in improving the way we live 
          and the places we live in, Design could be a good fit for you.
        </p>
        <p style={styles.courseDescription}>
          As a Bachelor of Design student, you’ll use innovative processes to solve problems creatively and determine solutions 
          for a better future.
        </p>
        <div style={styles.careers}>
          <h4 style={styles.careersTitle}>Careers</h4>
          <ul style={styles.careersList}>
            <li>Architecture and landscape architecture</li>
            <li>Graphic design</li>
            <li>Construction and civil engineering</li>
            <li>Geospatial technology</li>
            <li>Property</li>
            <li>Software design</li>
            <li>Virtual reality and augmented reality</li>
            <li>Performance design</li>
            <li>Design for mechanics and robotics</li>
          </ul>
        </div>
      </section>
      <aside style={styles.counsellor}>
        <h3 style={styles.counsellorTitle}>Feeling stuck? Let our expert counsellor help you.</h3>
        <p style={styles.counsellorText}>
          Can't decide on the university and course? Our experienced counsellors are here to guide and support you through 
          each stage of your study abroad journey. Reach out today!
        </p>
        <button style={styles.counsellorButton}>Meet a counsellor</button>
      </aside>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px',
    backgroundColor: '#f7f7f7',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    maxWidth: '100px',
  },
  logoImage: {
    maxWidth: '100%',
  },
  courseInfo: {
    textAlign: 'right',
  },
  courseTitle: {
    fontSize: '24px',
    margin: '0',
  },
  courseSubtitle: {
    fontSize: '18px',
    color: '#666',
    marginTop: '5px',
    marginBottom: '10px',
  },
  enquireButton: {
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    borderBottom: '1px solid #ccc',
  },
  detailItem: {
    width: '16%',
    fontSize: '14px',
    color: '#555',
  },
  aboutCourse: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '22px',
  },
  courseDescription: {
    fontSize: '16px',
    margin: '10px 0',
    lineHeight: '1.6',
  },
  careers: {
    marginTop: '20px',
  },
  careersTitle: {
    fontSize: '20px',
  },
  careersList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '16px',
  },
  counsellor: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '5px',
    marginTop: '30px',
    textAlign: 'center',
  },
  counsellorTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  counsellorText: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  counsellorButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default  Bachelorofdesign;
