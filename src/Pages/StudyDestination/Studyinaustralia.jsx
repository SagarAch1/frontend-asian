import React from "react";

const StudyInAustralia = () => {
  return (
    <div style={styles.container}>
      <header style={styles.headerSection}>
        <div
          style={{
            ...styles.headerImage,
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ar.jpg)`,
          }}
        ></div>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>
            Study in Australia from Nepal – Top Universities, Courses, Cost &
            Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          There are abundant reasons why students choose Australia, which one is
          yours?
        </h2>
        <p style={styles.paragraph}>
          If you’re looking for better opportunities, Australia is a world-class
          place to reach your career. Australia offers a range of opportunities.
          Whatever you choose, studying in Australia will equip you with skills
          and English language proficiency, which will benefit you for a
          lifetime in terms of career and future earnings.
        </p>

        <h2 style={styles.sectionTitle}>
          Student visa requirements for Nepalese students to study in Australia
        </h2>
        <p style={styles.paragraph}>
          The visa you will need depends on your age, the type of study you want
          to undertake, and how long you want to stay in Australia. As an
          international student, you must apply for a student visa (subclass
          500). Once your visa is granted, it will be valid for the duration of
          your study program, as well as a bit longer to give you time to finish
          your study. As of July 2016, the only student visa available for study
          in Australia is the Subclass 500 student visa, which is valid for up
          to five years and costs AUD 620. Before applying, ensure you have
          enough funds to cover your tuition and living expenses in Australia,
          and get your Overseas Student Health Cover (OSHC).
        </p>

        <h2 style={styles.sectionTitle}>
          Cost of studying for Nepalese students in Australia
        </h2>
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
              <td style={styles.tableCell}>
                AUD 300/week (varies as per course length)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Vocational Education and Training (Certificates I to IV,
                Diplomas and Advanced Diplomas)
              </td>
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

        <h2 style={styles.sectionTitle}>
          Scholarships to study for Nepalese students in Australia
        </h2>
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
              <td style={styles.tableCell}>
                International scholarships funded by the Department of Education
                for Australian citizens.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Australian APEC Women in Research Fellowship
              </td>
              <td style={styles.tableCell}>
                Supports women researchers to pursue postgraduate studies in
                Australia.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Australian Government Research Training Program
              </td>
              <td style={styles.tableCell}>
                Provides funding for higher degree by research (HDR) students
                and supporting research endeavors.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>
          Intakes in Australia for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          Australian universities have two major intakes: Semester 1 starts in
          February/March and Semester 2 starts in July/August. The admission
          deadlines vary depending on the program.
        </p>

        <h2 style={styles.sectionTitle}>IELTS to study in Australia</h2>
        <p style={styles.paragraph}>
          The International English Language Testing System (IELTS) is widely
          accepted by Australian universities. For standard courses, a minimum
          overall score of 6.5, with no individual score below 6.0, is required.
        </p>

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

        <h2 style={styles.sectionTitle}>
          Top Universities to Study in Australia
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.No.</th>
              <th style={styles.tableHeader}>Institution</th>
              <th style={styles.tableHeader}>QS Ranking 2024 (Globally)</th>
              <th style={styles.tableHeader}>QS Ranking 2023 (Globally)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                The Australian National University (ANU)
              </td>
              <td style={styles.tableCell}>34</td>
              <td style={styles.tableCell}>30</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>The University of Sydney</td>
              <td style={styles.tableCell}>19</td>
              <td style={styles.tableCell}>33</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>The University of Melbourne</td>
              <td style={styles.tableCell}>14</td>
              <td style={styles.tableCell}>41</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>
                The University of South Wales (UNSW Sydney)
              </td>
              <td style={styles.tableCell}>19</td>
              <td style={styles.tableCell}>45</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>The University of Queensland</td>
              <td style={styles.tableCell}>43</td>
              <td style={styles.tableCell}>50</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Job prospects in Australia</h2>
        <p style={styles.paragraph}>
          Did you know that you can cut down your cost of living and gain work
          experience while pursuing your study program in Australia? Thanks to
          Australian laws, working part-time on a student visa for up to 48
          hours per fortnight is permitted.
        </p>
        <h3 style={styles.sectionTitle}>Employment options:</h3>
        <ul style={styles.courseList}>
          <li>Retail sales jobs in supermarkets and department stores</li>
          <li>In cafes, bars, and restaurants</li>
          <li>
            In hotels and motels (both in housekeeping and administration)
          </li>
          <li>In farming or fruit-picking</li>
          <li>In telemarketing</li>
          <li>In clerical positions in different companies</li>
        </ul>
        <h2 style={styles.sectionTitle}>Cost of living in Australia</h2>
        <p style={styles.paragraph}>
          According to the Human Development Index 2023 and the Quality-of-Life
          Index 2022, Australia is ranked among the top 10 nations*, which
          implies Australia is counted in the top countries in terms of GDP,
          education system, and purchasing power parity index. So, along with
          the high level of income, it enjoys an excellent quality of health
          awareness, the medical system, and political stability. So, excited?
        </p>
        <p style={styles.paragraph}>
          You should also consider these common expenses when creating your
          budget:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Living expenses</th>
              <th style={styles.tableHeader}>Weekly budget (indicative)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Groceries and eating out</td>
              <td style={styles.tableCell}>AUD 140 to AUD 280</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Gas, electricity</td>
              <td style={styles.tableCell}>AUD 10 to AUD 20</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Phone and Internet</td>
              <td style={styles.tableCell}>AUD 15 to AUD 30</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Public transport</td>
              <td style={styles.tableCell}>AUD 30 to AUD 60</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Car (after purchase)</td>
              <td style={styles.tableCell}>AUD 150 to AUD 260</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Entertainment</td>
              <td style={styles.tableCell}>AUD 80 to AUD 150</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>
        <p style={styles.paragraph}>
          We know you have a lot of questions in your mind, so have answered
          common questions students as you raise about studying and living in
          the UK.
        </p>
        <p style={styles.section}>
          Ques 1: How much show money do I need to study in Australia? 
        </p>
        <p style={styles.paragraph}>
          Ans: Beginning October 1, 2023, students applying for a visa must
          prove that they have at least AUD 24,505 in savings to cover their
          living expenses for one year.
        </p>
        <p style={styles.section}>
          Ques 2: Who can sponsor me to study in Australia? 
        </p>
        <p style={styles.paragraph}>
          Ans: Unless you are entirely self-sponsoring, your visa application
          can be sponsored by your parents, legal guardians, or spouse. In this
          context, sponsorship relates to the individuals responsible for
          funding your travel, educational expenditures, and associated
          financial requirements while you pursue your studies in Australia.
        </p>
        <p style={styles.section}>
          Ques 3: What is the maximum age limit for a student visa in Australia?
          
        </p>
        <p style={styles.paragraph}>
          Ans: To apply for an Australian student visa, you must be at least 18
          years old. There is no upper age limit for student visas in Australia.
          The conditions of the Subclass 500 student visa in Australia do not
          apply to those under 18 years old.
        </p>
        <p style={styles.section}>
          Ques 4: How much will it cost to study in Australia? 
        </p>
        <p style={styles.paragraph}>
          Ans: On average, tuition fees at Australian tertiary institutions
          typically fall within the range of AUD 20,000 to AUD 30,000 per year.
        </p>
        <p style={styles.section}>
          Ques 5: What are the new rules for student visas in Australia 2023? 
        </p>
        <p style={styles.paragraph}>
          Ans: Starting on July 1, 2023, there will be a maximum limit of 48
          hours per fortnight for work restrictions on student visa holders.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
  },
  headerSection: {
    position: "relative",
  },
  headerImage: {
    width: "2500px",
    height: "310px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "-225px",
  },
  headerContent: {
    position: "absolute",
    top: "20%",
    left: "20px",
    color: "#fff",
  },
  headerTitle: {
    fontSize: "34px",
    marginBottom: "10px",
    background: "",
    padding: "10px",
  },
  contactBtn: {
    backgroundColor: "#f04e31",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
  contentSection: {
    padding: "20px",
  },
  sectionTitle: {
    fontSize: "25px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  section: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  table: {
    width: "1000px",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  tableCell: {
    border: "1px solid #ccc",
    padding: "10px",
  },
  courseList: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
  "@media (max-width: 768px)": {
    headerContent: {
      top: "10%",
      left: "10px",
    },
    headerTitle: {
      fontSize: "28px",
    },
    contactBtn: {
      fontSize: "14px",
    },
  },
};

export default StudyInAustralia;
