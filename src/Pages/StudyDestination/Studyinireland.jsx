import React from "react";
import Exploreinireland from "../Homepage/Exploreinireland";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const Studyinireland = () => {
  return (
    <div style={styles.container}>
      <header style={styles.headerSection}>
        <div
          style={{
            ...styles.headerImage,
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/topp.png)`,
            marginTop: "83px",
          }}
        ></div>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>
            Study in Ireland with Nepal: Leading Universities, Programs, Prices,
            and Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          For all Nepalese students who wish to study in Ireland, here is a
          thorough handbook.
        </h2>
        <p style={styles.paragraph}>
          Ireland is becoming a more and more popular destination for Nepalese
          students, since it is constantly ranked in the top 20 countries in the
          world for exceptional quality of life, peace, and human development.
          Its lively culture promotes entrepreneurship and provides a wealth of
          opportunities for professional development chances, offering priceless
          life lessons outside of the classroom.
        </p>
        <h2 style={styles.sectionTitle}>Why study in Ireland?</h2>
        <p style={styles.paragraph}>
          A combination of excellent education, a friendly culture, and lots of
          chances for both professional and personal development are provided by
          studying in Ireland. The following justifies studying in Ireland:
        </p>
        <ul style={styles.courseList}>
          <li>Quality education</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland's universities are renowned throughout the world for their
          excellent research and teaching initiatives.
        </p>
        <ul style={styles.courseList}>
          <li>English language</li>
        </ul>
        <p style={styles.paragraph}>
          It's a great place for overseas students to study because English is
          the main language of instruction.
        </p>
        <ul style={styles.courseList}>
          <li>Vibrant culture</li>
        </ul>
        <p style={styles.paragraph}>
          For students, Ireland's rich history and culture create a special and
          friendly environment.
        </p>
        <ul style={styles.courseList}>
          <li>Global opportunities</li>
        </ul>
        <p style={styles.paragraph}>
          Excellent post-graduation job prospects are provided by the nation's
          close ties to global corporations.
        </p>
        <ul style={styles.courseList}>
          <li>Beautiful landscape</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland provides a lovely setting for your studies, with its historic
          cities and breathtaking scenery.
        </p>
        <ul style={styles.courseList}>
          <li>Safety</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland is regarded as one of the safest nations in the world,
          guaranteeing pupils a safe atmosphere.
        </p>
        <ul style={styles.courseList}>
          <li>Scholarship options</li>
        </ul>
        <p style={styles.paragraph}>
          International students can receive financial aid for tuition at a
          number of Irish universities.
        </p>
        <ul style={styles.courseList}>
          <li>Innovation</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland is a centre for innovation and technology, which makes it an
          ideal place for possibilities and cutting-edge research.
        </p>
        <ul style={styles.courseList}>
          <li>Multicultural experience</li>
        </ul>
        <p style={styles.paragraph}>
          The multicultural atmosphere fostered by Ireland's diverse student
          body broadens your outlook on the world.
        </p>
        <ul style={styles.courseList}>
          <li>English-speaking environment</li>
        </ul>
        <p style={styles.paragraph}>
          Your language abilities will improve in an English-speaking
          atmosphere, which will be a great advantage for your future
          profession.
        </p>
        <h2 style={styles.sectionTitle}>
          Conditions for Nepalese students seeking to study in Ireland with a
          student visa
        </h2>
        <p style={styles.paragraph}>
          Nepalese students are invited to continue their education in Ireland
          by the Irish government. You will need to obtain a student visa in
          order to start your journey. The particular kind of visa that is
          needed is based on how long you plan to study in Ireland. This is an
          summary of the various kinds of study visas and how to apply for them
          prerequisites
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Duration of study</th>
              <th style={styles.tableHeader}>Visa type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Less than three months</td>
              <td style={styles.tableCell}>C Study visa</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>More than three months</td>
              <td style={styles.tableCell}>D Study visa</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          * For detailed information, please Contact us.
        </p>

        <h2 style={styles.sectionTitle}>
          Cost of studying in Ireland for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          Nepalese students' study expenses in Ireland might differ based on a
          number of variables, including their chosen university, location or
          region, and degree of study (undergraduate or postgraduate). It's
          where the institution is. This is a broad summary of the expenses to
          Think about:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Study program</th>
              <th style={styles.tableHeader}>Average fees (in Euros*)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Undergraduate Program</td>
              <td style={styles.tableCell}>€9,850 to €25,500 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Postgraduate master's degree</td>
              <td style={styles.tableCell}>€9,500 to €34,500 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>Doctoral degree</td>
              <td style={styles.tableCell}>€9,500 to €34,500 annually.</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          Subjects like medical, engineering, business, and management are
          likely to be more expensive than courses in the humanities, education,
          and arts, which are often a little less expensive. If you want to
          attend a At the postgraduate level, tuition is usually more expensive,
          and the expenses differ based on the program.
        </p>

        <h2 style={styles.sectionTitle}>Education system in Ireland</h2>
        <p style={styles.paragraph}>
          The fact that the Irish and UK educational systems are so similar is
          evidence of the high calibre of education that is provided there. The
          system encourages autonomous learning, creativity, and critical
          thinking. Universities in Ireland are renowned for their inventiveness
          and research. drawing pupils from all over the world. In Ireland,
          education is usually separated into four main levels.
        </p>
        <ul style={styles.courseList}>
          <li>Primary education including pre-primary</li>
          <li>Post-primary education</li>
          <li>Further education and training</li>
          <li>Safety and Low Crime Rate</li>
          <li>Higher education</li>
        </ul>

        <h2 style={styles.sectionTitle}>Top universities in Ireland</h2>
        <p style={styles.paragraph}>
          Some of the top universities in the world, which are famous for
          turning forth outstanding scholars, are located in Ireland. The QS
          World University Rankings 2024 list the following as Ireland's best
          universities:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S. No.</th>
              <th style={styles.tableHeader}>Institution</th>
              <th style={styles.tableHeader}>QS Ranking 2024 (Globally)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                Trinity College Dublin, The University of Dublin
              </td>
              <td style={styles.tableCell}>81</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>University College Dublin</td>
              <td style={styles.tableCell}>171</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>University of Galway</td>
              <td style={styles.tableCell}>289</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>University College Cork</td>
              <td style={styles.tableCell}>292</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>Dublin City University</td>
              <td style={styles.tableCell}>436</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>6</td>
              <td style={styles.tableCell}>University of Limerick</td>
              <td style={styles.tableCell}>426</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>7</td>
              <td style={styles.tableCell}>Maynooth University</td>
              <td style={styles.tableCell}>801-850</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>8</td>
              <td style={styles.tableCell}>
                Trinity College Dublin, The University of Dublin
              </td>
              <td style={styles.tableCell}>81</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Upcoming intakes in Ireland</h2>
        <p style={styles.paragraph}>
          Ireland provides a range of admission possibilities, which can change
          based on the program's institution and educational level. The
          following are some typical intakes in Ireland:
        </p>
        <ul style={styles.courseList}>
          <li>Autumn intake in Ireland</li>
        </ul>
        <p style={styles.paragraph}>
          Depending on the school and program, this is the main intake for the
          majority of undergraduate and graduate courses in Ireland, which
          typically start in September or October.
        </p>
        <ul style={styles.courseList}>
          <li>Spring intake in Ireland</li>
        </ul>
        <p style={styles.paragraph}>
          For postgraduate programs in particular, some universities provide a
          secondary admission in January or February. Generally speaking, this
          intake is lower in scope than the autumn intake.
        </p>
        <h2 style={styles.sectionTitle}>IELTS for studying in Ireland</h2>
        <p style={styles.paragraph}>
          Depending on the degree type, different IELTS scores are needed to
          study in Ireland. Here is a summary:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Type of degree</th>
              <th style={styles.tableHeader}>IELTS score requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Bachelor’s Degree</td>
              <td style={styles.tableCell}>
                Although the majority of Irish colleges and universities
                normally require an IELTS band score of 6.5, the precise
                criteria may differ based on the university and the degree.
                You're trying to get in.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Postgraduate Degree</td>
              <td style={styles.tableCell}>
                Leading academic institutions in Ireland typically require an
                IELTS score of 6.5. But in certain cases, universities might
                require a band score of 7.0, while others would not. might agree
                to a 6.0.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Foundation Courses</td>
              <td style={styles.tableCell}>
                For students to be eligible to study in foundation courses, they
                must meet the IELTS minimum criterion of an overall score of 4.5
                bands.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Scholarships to study in Ireland</h2>
        <p style={styles.paragraph}>
          The following well-known scholarship schemes are available to Nepalese
          students who wish to study in Ireland:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S. No.</th>
              <th style={styles.tableHeader}>Name of the scholarship</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                The International Education Scholarship of the Government of
                Ireland
              </td>
              <td style={styles.tableCell}>
                60 scholarships are awarded under this program for one year of
                study at the bachelor's, master's, or doctoral levels, provided
                that you have received an offer to enrol in an Irish university.
                After Receiving the award will grant you a salary of €10,000.
                for a year of coursework Tuition and other registration fees are
                fully subsidised. expenses at the chosen higher education
                school.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>The Walsh Fellowship</td>
              <td style={styles.tableCell}>
                Given to postgraduate students who are actively engaged in
                initiatives associated with the Teagasc Research and Knowledge
                Transfer Program, primarily in the areas of agriculture, food,
                animal and grassland habitats, and the environment, rural
                development and economics. The fellowship honours the The
                contributions of the late Dr. Tom Walsh to food and agriculture
                studies conducted in Ireland. Up to 30 additional locations are
                added annually. with each student receiving a €22,000 stipend.
                It lasts for up to two years for an MSc study, while a PhD
                program can last up to four years. and the Teagasc Research
                Centre is the ideal site. The Scholarship applications are
                accepted in June, and the The deadline has been moved to early
                September. Applications aren't invited from certain postgraduate
                students, and it excludes Postgraduate courses that are taught
                but do not include research (Source: Postgraduate scholarships:
                https://www.teagasc.ie/about/research--innovation/
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                Government of Ireland Postgraduate Scholarship
              </td>
              <td style={styles.tableCell}>
                The Department of Education and Skills provides funding for this
                scholarship, which is overseen by the Council. This creates an
                opportunity for overseas students to earn their master's and
                doctoral degrees in research or Direct PhD (PhD after MS). The
                sum consists of: a stipend Approximately €16,000 annually as a
                fee payment, including non-EU costs, up to €5,750 annually for
                qualified direct annual research expenditures of €2,250
              </td>
            </tr>
          </tbody>
        </table>

        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>

        <p style={styles.section}>
          Question 1: As a foreign student, is it possible for me to work and
          study in Ireland?
        </p>
        <p style={styles.paragraph}>
          Yes, you can work and study in Ireland as an international student.
          Generally speaking, you are permitted to work full-time during
          vacations and part-time during the school year. You are able to work
          20 hours a week. 40 hours a week throughout the holidays and during
          the school year.
        </p>
        <p style={styles.section}>
          Question 2: Can I take a study gap and still study in Ireland?
        </p>
        <p style={styles.paragraph}>
          You can study in Ireland while taking a study gap, but it's important
          to note that the length of the break and the reasons for it may affect
          the requirements for entrance and a visa. A few colleges and
          universities in Students with study gaps are accepted in Ireland,
          however others may have more stringent regulations
        </p>

        <p style={styles.section}>
          Question 3: Which courses are the finest to take in Ireland?
        </p>
        <p style={styles.paragraph}>
          The following are a few well-liked and respected programs and fields
          of study in Ireland:
        </p>
        <ul style={styles.courseList}>
          <li>Computer Science and Information Technology</li>
          <li>Business and Management</li>
          <li>Engineering (e.g., mechanical, civil, electrical)</li>
          <li>Sciences (e.g., physics, chemistry, biology)</li>
          <li>Arts and Humanities (e.g., literature, history, philosophy)</li>
          <li>Finance and Economics</li>
          <li>Environmental Studies and Sustainability</li>
          <li>Agriculture and Food Science</li>
          <li>Hospitality and Tourism Management</li>
        </ul>
        <p style={styles.paragraph}>
          Contact AIEC, our international education specialist, for more
          information about studying in Ireland. They will assist you throughout
          the entire admissions process.
        </p>

        <Exploreinireland />
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

export default Studyinireland;
