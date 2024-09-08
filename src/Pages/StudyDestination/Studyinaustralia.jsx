import React from 'react';

const StudyInAustralia = () => {
  return (
    <div style={styles.container}>
      <header style={styles.headerSection}>
        {/* Adjust the marginTop value to bring the image further up */}
        <div style={{ ...styles.headerImage, backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ar.jpg)`, marginTop: '80px' }}></div>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Study in Australia from Nepal – Top Universities, Courses, Cost & Scholarships</h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>There are abundant reasons why students choose Australia, which one is yours?</h2>
        <p style={styles.paragraph}>
          If you’re looking for better opportunities, Australia is a world-class place to reach your career. Australia offers a range of opportunities. Whatever you choose, studying in Australia will equip you with skills and English language proficiency, which will benefit you for a lifetime in terms of career and future earnings.
        </p>

        <h2 style={styles.sectionTitle}>Student visa requirements for Nepalese students to study in Australia</h2>
        <p style={styles.paragraph}>
          The visa you will need depends on your age, the type of study you want to undertake, and how long you want to stay in Australia. As an international student, you must apply for a student visa (subclass 500). Once your visa is granted, it will be valid for the duration of your study program, as well as a bit longer to give you time to finish your study. As of July 2016, the only student visa available for study in Australia is the Subclass 500 student visa, which is valid for up to five years and costs AUD 620. Before applying, ensure you have enough funds to cover your tuition and living expenses in Australia, and get your Overseas Student Health Cover (OSHC).
        </p>

        <h2 style={styles.sectionTitle}>Cost of studying for Nepalese students in Australia</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Study Program</th>
              <th style={styles.tableHeader}>Average fees in AUD*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>School</td>
              <td style={styles.tableCell}>AUD 7,800 to 30,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>English language studies</td>
              <td style={styles.tableCell}>AUD 300/week (varies as per course length)</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Vocational Education and Training (Certificates I to IV, Diplomas and Advanced Diplomas)</td>
              <td style={styles.tableCell}>AUD 4,000 to 22,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Undergraduate Bachelor Degree</td>
              <td style={styles.tableCell}>AUD 20,000 to 45,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Postgraduate Masters Degree</td>
              <td style={styles.tableCell}>AUD 22,000 to 50,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Doctoral Degree</td>
              <td style={styles.tableCell}>AUD 18,000 to 42,000 annually</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Scholarships to study for Nepalese students in Australia</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Scholarship</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Australia Awards</td>
              <td style={styles.tableCell}>International scholarships funded by the Department of Education for Australian citizens.</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Australian APEC Women in Research Fellowship</td>
              <td style={styles.tableCell}>Supports women researchers to pursue postgraduate studies in Australia.</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Australian Government Research Training Program</td>
              <td style={styles.tableCell}>Provides funding for higher degree by research (HDR) students and supporting research endeavors.</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Intakes in Australia for Nepalese students</h2>
        <p style={styles.paragraph}>Australian universities have two major intakes: Semester 1 starts in February/March and Semester 2 starts in July/August. The admission deadlines vary depending on the program.</p>

        <h2 style={styles.sectionTitle}>IELTS to study in Australia</h2>
        <p style={styles.paragraph}>The International English Language Testing System (IELTS) is widely accepted by Australian universities. For standard courses, a minimum overall score of 6.5, with no individual score below 6.0, is required.</p>

        <h2 style={styles.sectionTitle}>Top courses to study in Australia</h2>
        <ul style={styles.courseList}>
          <li>Engineering</li>
          <li>Business Analytics</li>
          <li>MBA (Masters of Business Administration)</li>
          <li>Life Sciences</li>
          <li>Artificial Intelligence (AI)</li>
          <li>Social Sciences</li>
          <li>Medicine</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
  },
  headerSection: {
    position: 'relative',
    textAlign: 'left',
  },
  headerImage: {
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  headerContent: {
    position: 'absolute',
    top: '60%',
    left: '10%',
    transform: 'translateY(-50%)',
    color: 'white',
  },
  headerTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  contactBtn: {
    backgroundColor: '#e76f51',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  contentSection: {
    padding: '2rem 0',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '2rem',
  },
  tableHeader: {
    border: '1px solid #ddd',
    padding: '0.75rem',
    backgroundColor: '#f4f4f4',
    textAlign: 'left',
  },
  tableCell: {
    border: '1px solid #ddd',
    padding: '0.75rem',
    textAlign: 'left',
  },
  courseList: {
    fontSize: '1rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
    listStyleType: 'disc',
    marginLeft: '1.5rem',
  },
};

export default StudyInAustralia;
