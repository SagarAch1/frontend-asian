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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ar.jpg)`,
            marginTop: "83px",
          }}
        ></div>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>
            Study in Ireland from Nepal – Top Universities, Courses, Cost &
            Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          Here’s a comprehensive guide for all Nepalese students who want to
          study in Ireland
        </h2>
        <p style={styles.paragraph}>
          Ireland consistently ranks in the world's top 20 for excellent quality
          of life, peace, and human development, making it an increasingly
          popular destination for Nepalese students . Its vibrant culture
          encourages entrepreneurialism and offers numerous professional growth
          opportunities, providing valuable life lessons beyond the classroom.
        </p>
        <h2 style={styles.sectionTitle}>Why study in Ireland?</h2>
        <p style={styles.paragraph}>
          Studying in Ireland offers a blend of high-quality education, a
          welcoming culture, and ample opportunities for personal and
          professional growth. Here’s why you should study in Ireland:
        </p>
        <ul style={styles.courseList}>
          <li>Quality education</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland's universities are globally respected for their high-quality
          education and research programs.
        </p>
        <ul style={styles.courseList}>
          <li>English language</li>
        </ul>
        <p style={styles.paragraph}>
          As English is the primary language of instruction, it's an excellent
          destination for international students.
        </p>
        <ul style={styles.courseList}>
          <li>Vibrant culture</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland's rich culture and history provide a unique and welcoming
          atmosphere for students.
        </p>
        <ul style={styles.courseList}>
          <li>Global opportunities</li>
        </ul>
        <p style={styles.paragraph}>
          The country's strong ties to international businesses offer great
          post-graduation employment opportunities
        </p>
        <ul style={styles.courseList}>
          <li>Beautiful landscape</li>
        </ul>
        <p style={styles.paragraph}>
          From historic cities to stunning landscapes, Ireland offers a
          beautiful backdrop for your studies.
        </p>
        <ul style={styles.courseList}>
          <li>Safety</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland is considered one of the safest countries in the world,
          ensuring a secure environment for students,
        </p>
        <ul style={styles.courseList}>
          <li>Scholarship options</li>
        </ul>
        <p style={styles.paragraph}>
          Many Irish universities offer scholarships for international students,
          helping with tuition costs.
        </p>
        <ul style={styles.courseList}>
          <li>Innovation</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland is a hub for technology and innovation, making it a prime
          location for cutting-edge research and opportunities
        </p>
        <ul style={styles.courseList}>
          <li>Multicultural experience</li>
        </ul>
        <p style={styles.paragraph}>
          Ireland's diverse student population creates a multicultural
          environment that enriches your global perspective.
        </p>
        <ul style={styles.courseList}>
          <li>English-speaking environment</li>
        </ul>
        <p style={styles.paragraph}>
          An English-speaking environment enhances your language skills, a
          valuable asset for your future career.
        </p>
        <h2 style={styles.sectionTitle}>
          Student visa requirements for Nepalese students to study in Ireland
        </h2>
        <p style={styles.paragraph}>
          The Irish Government extends an invitation to Nepalese students to
          pursue their education in the country. To begin your journey, you'll
          need to secure a student visa. The specific visa type required is
          determined by the duration of your study in Ireland. Here’s an
          overview of the types of study visas and their application
          requirements
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
          The cost of studying in Ireland for Nepalese students can vary
          depending on factors such as the level of study (undergraduate or
          postgraduate), the choice of university, and the city or region where
          the institution is located. Here's a general overview of the costs to
          consider:
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
          Most commonly, courses in humanities, education, and arts are a little
          cheaper, while subjects such as medicine, engineering, business, and
          management are likely to be more expensive. If you wish to study at a
          postgraduate level, the tuition fee is typically higher, and the costs
          vary depending on the program.
        </p>

        <h2 style={styles.sectionTitle}>Education system in Ireland</h2>
        <p style={styles.paragraph}>
          The Irish education system closely resembles that of the UK, which is
          a testament to the high-quality education it offers. the system
          promotes critical thinking, creativity, and independent learning.
          Ireland's universities are known for their research and innovation,
          attracting students from around the world. Education in Ireland is
          typically divided into four primary levels.
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
          Ireland is home to some of the world-renowned universities that are
          known for producing great scholars. Here are the top universities in
          Ireland, according to the QS World University Rankings 2024 :
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
          Ireland offers various intake options, which may vary depending on the
          educational level and the institution providing the program. Here are
          some common intakes in Ireland:
        </p>
        <ul style={styles.courseList}>
          <li>Autumn intake in Ireland</li>
        </ul>
        <p style={styles.paragraph}>
          This is the primary intake for most undergraduate and postgraduate
          courses in Ireland, usually commencing in September or October,
          depending on the institution and program.
        </p>
        <ul style={styles.courseList}>
          <li>Spring intake in Ireland</li>
        </ul>
        <p style={styles.paragraph}>
          Some institutions offer a secondary intake in January or February,
          primarily for postgraduate programs. This intake is typically smaller
          in scale compared to the autumn intake.
        </p>
        <h2 style={styles.sectionTitle}>IELTS for studying in Ireland</h2>
        <p style={styles.paragraph}>
          The IELTS score requirement for studying in Ireland varies depending
          on the type of degree. Here’s an overview:
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
                While a standard IELTS band score of 6.5 is typically required
                by most colleges and universities in Ireland, the specific
                requirement can vary depending on the university and the course
                you are seeking admission to.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Postgraduate Degree</td>
              <td style={styles.tableCell}>
                Ireland's leading academic institutions commonly stipulate an
                IELTS score of 6.5. However, some universities may have
                instances where they mandate a band score of 7.0, while others
                may accept a score of 6.0.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Foundation Courses</td>
              <td style={styles.tableCell}>
                Students must satisfy a minimum IELTS requirement of an overall
                4.5 band to be eligible for enrolment in foundation courses.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Scholarships to study in Ireland</h2>
        <p style={styles.paragraph}>
          Here are some popular scholarship programs you can apply to study in
          Ireland as a Nepalese student:
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
                The Government of Ireland International Education Scholarship
              </td>
              <td style={styles.tableCell}>
                Under this initiative, 60 scholarships are granted for 1-year
                study at Bachelor, Masters or PhD levels, if you have been
                offered to study in an Irish higher education institution. Upon
                securing the scholarship, you will receive: A €10,000 stipend
                for 1 year of study Fully funded tuition and other registration
                costs at the higher education institution opted for.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>The Walsh Fellowship</td>
              <td style={styles.tableCell}>
                Awarded to postgraduates relevantly working on projects related
                to the Teagasc Research and Knowledge Transfer Program, majorly
                in fields of food, crops, animal and grasslands, environment,
                economics and rural development. The fellowship commemorates the
                late Dr Tom Walsh's contribution to agriculture and food
                research in Ireland. There are up to 30 new places each year
                with a grant of €22,000 per student. The duration is Up to two
                years for an MSc course and four years maximum for a PhD program
                and the location is preferably Teagasc Research Centre. The
                applications for scholarships are invited each June and the
                deadline extends to early-September. Applications are not
                invited from individual PG students, and it does not include
                taught (non-research) postgraduate programmes (Source:
                https://www.teagasc.ie/about/research--innovation/postgraduate-scholarships/)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                Government of Ireland Postgraduate Scholarship
              </td>
              <td style={styles.tableCell}>
                This scholarship is funded by the Department of Education and
                Skills and managed by the Council. This opens up a gateway for
                international students to pursue their Research MS and PhD or
                Direct PhD (MS leading to PhD). The amount includes: - a stipend
                of €16,000 per annum a contribution to fees, including non-EU
                fees, up to a maximum of €5,750 per annum eligible direct
                research expenses of €2,250 per annum
              </td>
            </tr>
          </tbody>
        </table>

        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>

        <p style={styles.section}>
          Ques 1:Can I work and study in Ireland as an international student?
        </p>
        <p style={styles.paragraph}>
          Ans:Yes, as an international student in Ireland, you can work and
          study. You are generally allowed to work part-time during term and
          full-time during vacation periods. You can work for 20 hours per week
          during the term and 40 hours per week during holidays.
        </p>
        <p style={styles.section}>
          Ques 2: Can I study in Ireland with a study gap?
        </p>
        <p style={styles.paragraph}>
          Ans:You can study in Ireland with a study gap, but it's crucial to be
          aware that admission and visa requirements may vary based on the
          duration and reasons for the gap. Some universities and colleges in
          Ireland accept students with study gaps, while others may have
          stricter policies
        </p>

        <p style={styles.section}>
          Ques 3:What are the best courses to study in Ireland
        </p>
        <p style={styles.paragraph}>
          Ans: Here are some popular and well-regarded courses and areas of
          study in Ireland:
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
          If you want to know more about studying in Ireland, get in touch with
          our international education expert at AIEC. They will help you with
          the end-to-end admission process.
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
    width: "3290px",
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

export default Studyinireland;
