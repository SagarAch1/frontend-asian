import React from "react";
import Exploreinaustralia from "../Homepage/Exploreinaus";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const StudyInAustralia = () => {
  return (
    <div style={styles.container}>
      <header style={styles.headerSection}>
        <div
          style={{
            ...styles.headerImage,
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/mapaus.jpg)`,
            marginTop: "83px",
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
          There are many reasons why students choose Australia—what's yours?
        </h2>
        <p style={styles.paragraph}>
          If you're seeking better opportunities, Australia is an excellent
          destination to advance your career. The country offers a wide range of
          opportunities, and studying there will help you develop valuable
          skills and improve your English language proficiency, which will
          benefit you throughout your career and future earnings.
        </p>

        <h2 style={styles.sectionTitle}>
          Student visa requirements for Nepalese students to study in Australia
        </h2>
        <p style={styles.paragraph}>
          The type of visa you need depends on your age, the type of study you
          plan to pursue, and the duration of your stay in Australia. As an
          international student, you must apply for a student visa (subclass
          500). Once granted, your visa will be valid for the length of your
          study program, plus some additional time to allow for completion of
          your studies. Since July 2016, the Subclass 500 student visa is the
          only visa available for studying in Australia. It is valid for up to
          five years and costs AUD 1600. Before applying, make sure you have
          sufficient funds to cover your tuition and living expenses, and ensure
          you have Overseas Student Health Cover (OSHC).
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
          Australian universities have two main intakes: Semester 1, which
          begins in February/March, and Semester 2, which starts in July/August.
          Admission deadlines vary based on the program.
        </p>

        <h2 style={styles.sectionTitle}>IELTS to study in Australia</h2>
        <p style={styles.paragraph}>
          The International English Language Testing System (IELTS) is widely
          recognized by Australian universities. For most courses, a minimum
          overall score of 6.5 is required, with no individual score below 6.0.
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
          Did you know that you can reduce your living costs and gain work
          experience while studying in Australia? Australian laws allow students
          on a student visa to work part-time for up to 48 hours per fortnight,
          helping you support yourself during your studies.
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
          Index 2022, Australia ranks among the top 10 countries, reflecting its
          strong GDP, education system, and purchasing power parity index. In
          addition to high income levels, Australia benefits from excellent
          health awareness, a robust medical system, and political stability.
          Sounds exciting, right?
        </p>
        <p style={styles.paragraph}>
          When creating your budget, you should also consider these common
          expenses:
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
          We understand you may have many questions, so we've answered some
          common queries that students like you often have about studying and
          living in the UK.
        </p>
        <p style={styles.section}>
          Ques 1: How much show money do I need to study in Australia?
        </p>
        <p style={styles.paragraph}>
          Ans: Starting October 1, 2023, students applying for a visa must
          demonstrate that they have a minimum of AUD 24,505 in savings to cover
          their living expenses for one year.
        </p>
        <p style={styles.section}>
          Ques 2: Who can sponsor me to study in Australia?
        </p>
        <p style={styles.paragraph}>
          Ans: Unless you are fully self-sponsoring, your visa application can
          be sponsored by your parents, legal guardians, or spouse. In this
          case, sponsorship refers to the individuals who will be responsible
          for funding your travel, education costs, and other financial needs
          while you study in Australia.
        </p>
        <p style={styles.section}>
          Ques 3: What is the maximum age limit for a student visa in Australia?
        </p>
        <p style={styles.paragraph}>
          Ans: To apply for an Australian student visa, you must be at least 18
          years old. There is no upper age limit for student visas in Australia.
          However, the conditions of the Subclass 500 student visa do not apply
          to individuals under 18 years of age.
        </p>
        <p style={styles.section}>
          Ques 4: How much will it cost to study in Australia?
        </p>
        <p style={styles.paragraph}>
          Ans: On average, tuition fees at Australian tertiary institutions
          range from AUD 20,000 to AUD 30,000 per year.
        </p>
        <p style={styles.section}>
          Ques 5: What are the new rules for student visas in Australia 2023?
        </p>
        <p style={styles.paragraph}>
          Ans: Starting July 1, 2023, student visa holders will be restricted to
          working a maximum of 48 hours per fortnight.
        </p>
        <Exploreinaustralia />
        <FormPage />
      </div>
      <Footer />
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
  },
  headerContent: {
    position: "absolute",
    top: "20%",
    left: "20px",
    color: "#fff",
  },
  headerTitle: {
    fontSize: "34px",
    fontWeight: "bold",
    color: "black",
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
