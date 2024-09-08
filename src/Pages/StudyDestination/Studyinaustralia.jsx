import React from 'react';

const StudyInAustralia = () => {
  const headerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ar.jpg)`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const headerContentStyle = {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '10px',
  };

  const sectionStyle = {
    margin: '50px auto',
    width: '80%',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const buttonStyle = {
    backgroundColor: '#ff5722',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div>
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <h1>Study in Australia from Nepal – Top Universities, Courses, Cost & Scholarships</h1>
          <button style={buttonStyle}>Contact Us</button>
        </div>
      </header>

      <section style={sectionStyle}>
        <h2>There are abundant reasons why students choose Australia, which one is yours?</h2>
        <p>
          If you are looking for better job opportunities, quality education, degrees that pack more power, or a better lifestyle, Australia has it all. 
          Whether you are looking for undergraduate, postgraduate, or English language courses, Australia offers a diverse range of opportunities for Nepalese students.
        </p>

        <h3>Student visa requirements for Nepalese students to study in Australia</h3>
        <p>
          You must obtain a student visa to study in Australia. You will need to apply for your student visa after you receive an offer of a place at a university.
          Requirements include a Confirmation of Enrollment (CoE), Genuine Temporary Entrant (GTE) statement, proof of sufficient funds, and English language proficiency.
        </p>

        <h3>Cost of studying for Nepalese students in Australia</h3>
        <table style={tableStyle}>
          <thead style={tableHeaderStyle}>
            <tr>
              <th style={tableCellStyle}>Study Program</th>
              <th style={tableCellStyle}>Average fees in AUD*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>School</td>
              <td style={tableCellStyle}>AUD 7,800 to AUD 30,000 annually</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>English Language Studies</td>
              <td style={tableCellStyle}>AUD 300 to AUD 400 weekly (varies as per course length)</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Vocational Education and Training (Certificates I to IV, Diplomas and Advanced Diplomas)</td>
              <td style={tableCellStyle}>AUD 4,000 to AUD 22,000 annually</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Undergraduate Bachelor Degree</td>
              <td style={tableCellStyle}>AUD 15,000 to AUD 33,000 annually</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Postgraduate Masters Degree</td>
              <td style={tableCellStyle}>AUD 20,000 to AUD 37,000 annually</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Doctoral Degree</td>
              <td style={tableCellStyle}>AUD 14,000 to AUD 37,000 annually</td>
            </tr>
          </tbody>
        </table>

        <h3>Scholarships to study for Nepalese students in Australia</h3>
        <table style={tableStyle}>
          <thead style={tableHeaderStyle}>
            <tr>
              <th style={tableCellStyle}>Scholarship</th>
              <th style={tableCellStyle}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>Australia Awards</td>
              <td style={tableCellStyle}>
                Australian Government scholarships providing opportunities for people from developing countries, particularly in the Indo-Pacific region, to undertake full-time undergraduate or postgraduate study.
              </td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Destination Australia</td>
              <td style={tableCellStyle}>
                Australian Government program offering scholarships to support international students to study in regional Australia.
              </td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Australian Government Research Training Program (RTP)</td>
              <td style={tableCellStyle}>
                Provides block grants to support both domestic and international students undertaking Research Doctorate and Research Masters degrees.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Intakes in Australia for Nepalese students</h3>
        <p>
          Australian universities typically have two major intakes: February and July. Some universities also have a third minor intake in November. 
          For specific details, it's best to check the official website of the university.
        </p>

        <h3>IELTS to study in Australia</h3>
        <p>
          IELTS is the most popular English language proficiency test accepted by Australian universities. 
          The required score may vary depending on the course and institution.
        </p>

        <h3>Top courses to study in Australia</h3>
        <p>
          Some of the popular fields of study in Australia include:
          <ul>
            <li>Engineering</li>
            <li>Accounting</li>
            <li>Information Technology</li>
            <li>Business (including MBA)</li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default StudyInAustralia;
