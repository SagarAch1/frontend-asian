import React from 'react';

const Studyinaustralia = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    header: {
      backgroundImage: 'url("/path-to-header-image")', // Replace with your actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '60px 20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#f26522',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '40px 0 20px',
    },
    paragraph: {
      marginBottom: '20px',
      fontSize: '16px',
      color: '#555',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '40px',
    },
    th: {
      backgroundColor: '#f5f5f5',
      padding: '10px',
      border: '1px solid #ddd',
      fontWeight: 'bold',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Study in Australia from Nepal - Top Universities, Courses, Cost & Scholarships</h1>
        <button style={styles.button}>Contact Us</button>
      </header>

      <section>
        <h2 style={styles.sectionTitle}>There are abundant reasons why students choose Australia, which one is yours?</h2>
        <p style={styles.paragraph}>
          If you're looking for further opportunities, Australia is an excellent destination for study and career growth. Australia offers a wide range of opportunities.
        </p>
        <p style={styles.paragraph}>
          Australia offers a great education system and students from Nepal can explore various opportunities in higher education, scholarships, and more.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Student visa requirements for Nepalese students to study in Australia</h2>
        <p style={styles.paragraph}>
          To study in Australia, Nepalese students need to fulfill several requirements such as acquiring a valid student visa, proving English proficiency, and more.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Cost of studying for Nepalese students in Australia</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>S.No</th>
              <th style={styles.th}>Study Program</th>
              <th style={styles.th}>Average fees (in AUD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>School</td>
              <td style={styles.td}>AUD 7,800 - AUD 30,000 annually</td>
            </tr>
            <tr>
              <td style={styles.td}>2</td>
              <td style={styles.td}>English Language Studies</td>
              <td style={styles.td}>AUD 300 - AUD 600 weekly (varies in course length)</td>
            </tr>
            <tr>
              <td style={styles.td}>3</td>
              <td style={styles.td}>Vocational Education and Training (Certificates I to IV, Diplomas and Advanced Diplomas)</td>
              <td style={styles.td}>AUD 4,000 - AUD 22,000 annually</td>
            </tr>
            <tr>
              <td style={styles.td}>4</td>
              <td style={styles.td}>Undergraduate Bachelor's Degree</td>
              <td style={styles.td}>AUD 20,000 - AUD 45,000 annually</td>
            </tr>
            <tr>
              <td style={styles.td}>5</td>
              <td style={styles.td}>Postgraduate Masters Degree</td>
              <td style={styles.td}>AUD 22,000 - AUD 50,000 annually</td>
            </tr>
            <tr>
              <td style={styles.td}>6</td>
              <td style={styles.td}>Doctoral Degree</td>
              <td style={styles.td}>AUD 18,000 - AUD 42,000 annually</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Scholarships to study for Nepalese students in Australia</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>S.No</th>
              <th style={styles.th}>Scholarship</th>
              <th style={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Australia Awards</td>
              <td style={styles.td}>The prestigious scholarship covering tuition and other costs.</td>
            </tr>
            <tr>
              <td style={styles.td}>2</td>
              <td style={styles.td}>Australian APEC Women in Research Fellowship</td>
              <td style={styles.td}>For high-achieving female researchers from developing APEC economies.</td>
            </tr>
            <tr>
              <td style={styles.td}>3</td>
              <td style={styles.td}>Australian Government Research Training Program</td>
              <td style={styles.td}>For those looking for research opportunities in Australia.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Intakes in Australia for Nepalese students</h2>
        <p style={styles.paragraph}>
          Most courses have three major intakes. Know the major intake seasons and plan your applications accordingly.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>IELTS to study in Australia</h2>
        <p style={styles.paragraph}>
          IELTS is a popular requirement for study in Australia, find out more about the exam requirements.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Top courses to study in Australia</h2>
        <p style={styles.paragraph}>
          Explore some of the top-rated courses and career paths that Nepalese students can pursue in Australia.
        </p>
      </section>
    </div>
  );
};

export default Studyinaustralia;
