import React from "react";
import Exploreincanada from "../Homepage/Exploreincanada";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const StudyinCanada = () => {
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
            Study in Canada from Nepal – Top Universities, Courses, Cost &
            Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          Know why Canada is so popular with Nepalese students.
        </h2>
        <p style={styles.paragraph}>
          Hosting nearly half a million international students, Canada is known
          to offer high-quality education at affordable tuition fees with
          globally recognised degrees. Add to it, an excellent quality of life,
          immense post-study work and immigration opportunities - Canada stands
          out as a popular country to study among Nepalese students.
        </p>
        <h2 style={styles.sectionTitle}>
          Student visa requirements for Nepalese students to study in Canada
        </h2>
        <p style={styles.paragraph}>
          To study in Canada students require a study permit. While a student
          visa authorises your admission into Canada, a study permit verifies
          your stay in Canada. It is a mandatory immigration paperwork for an
          international student.
        </p>
        <p style={styles.paragraph}>
          If you have a study permission, you must stay enrolled and make fair
          progress toward completing your course.
        </p>
        <p style={styles.paragraph}>
          Your study permit is always accompanied by a guest visa or Electronic
          Travel Authorization (ETA). Please remember that a study permit is a
          document that allows you to study in Canada whereas a guest visa The
          ETA permits you to enter Canada. Your expert will help you access the
          newest information and connect you with certified migration experts.
        </p>

        <h2 style={styles.sectionTitle}>
          Cost of studying in Canada for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          Your expenditure on tuition fees depends on the sort of qualification
          and institution you pick for. To cover this, you will need about
          between CAD 13,000 - CAD 35,000 a year.
        </p>
        <p style={styles.paragraph}>
          Generally, courses in humanities, education, and arts tend to be less
          expensive, whereas fields like medicine and engineering are usually
          pricier. Postgraduate programs typically have higher tuition fees,
          with costs varying by program. Like in many other countries, MBA
          programs are often the most costly, with average fees ranging from CAD
          30,000 to 42,000.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Study program</th>
              <th style={styles.tableHeader}>Average annual fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Undergraduate program</td>
              <td style={styles.tableCell}>CAD 13,000 to CAD 20,000</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Postgraduate master's degree</td>
              <td style={styles.tableCell}>CAD 17,000 to CAD 25,000</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>Doctoral degree</td>
              <td style={styles.tableCell}>CAD 7,000 to CAD 15,000</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>
                Masters of Business administration (MBA)
              </td>
              <td style={styles.tableCell}>CAD 30,000 to CAD 40,000</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *Please note all fee figures are indicative
        </p>

        <h2 style={styles.sectionTitle}>Scholarships to study in Canada</h2>
        <p style={styles.paragraph}>
          Here are some well-known government-sponsored scholarships for
          Nepalese students pursuing studies in Canada:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Scholarship</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                Canadian Commonwealth Scholarship and Fellowship Plan
              </td>
              <td style={styles.tableCell}>
                This program is intended to allow students to undertake advanced
                study and research at the Master's and PhD levels in
                Commonwealth countries outside their own.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>
                National Research Council of Canada (NRCC)
              </td>
              <td style={styles.tableCell}>
                The research associateship is available to individuals with a
                master's degree in engineering or a PhD in natural science or
                engineering fields.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                Ontario Graduate Scholarship Program
              </td>
              <td style={styles.tableCell}>
                For graduate students in a wide variety of disciplines.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>
                Quebec Provincial Government Scholarship
              </td>
              <td style={styles.tableCell}>
                Financial assistance is offered to students studying at the
                master's level or higher in Quebec.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>Ontario Trillium Scholarship</td>
              <td style={styles.tableCell}>
                Originally introduced in November 2010, this program is aimed at
                attracting the top doctoral students from across the globe to
                study in Ontario.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *This is an indicative list, speak with your AIEC-Global expert for
          details and the best available options suited to your profile
        </p>

        <h2 style={styles.sectionTitle}>Intakes in Canada</h2>
        <p style={styles.paragraph}>
          In contrast to the single intake system in Nepalese universities,
          Canadian colleges and universities offer three intakes. In some
          institutions, these intakes may also be referred to as semesters. The
          three available intakes in Canada are:
        </p>
        <ul style={styles.courseList}>
          <li>Fall</li>
        </ul>
        <p style={styles.paragraph}>
          *This is an indicative list, speak with your AIEC-Global expert for
          details and the best available options suited to your profile
        </p>
        <ul style={styles.courseList}>
          <li>Winter</li>
        </ul>
        <p style={styles.paragraph}>
          Starts in January; it’s best if you miss the September intake
        </p>
        <ul style={styles.courseList}>
          <li>Summer</li>
        </ul>
        <p style={styles.paragraph}>
          Available for limited programs and colleges, the Summer intake usually
          starts around April and May
        </p>

        <h2 style={styles.sectionTitle}>IELTS for studying in Canada</h2>
        <p style={styles.paragraph}>
          IELTS band score requirements differ across Canadian institutions for
          undergraduate (UG) and postgraduate (PG) programs. Generally, colleges
          require an overall band score of 6.0 for UG courses and 6.5 for PG
          courses. Universities often require an overall band score of 6.5 for
          both UG and PG programs. It is recommended to check the specific IELTS
          band score requirements of your selected institution when applying to
          ensure you meet the necessary criteria.
        </p>

        <h2 style={styles.sectionTitle}>Top courses to study in Canada</h2>
        <p style={styles.paragraph}>
          Here are the popular courses that you can choose for studying in
          Canada:
        </p>
        <ul style={styles.courseList}>
          <li>Computer science</li>
          <li>Business</li>
          <li>Engineering</li>
          <li>Health sciences</li>
          <li>Physiotherapy</li>
          <li>Information technology</li>
          <li>Animation and gaming</li>
          <li>Hospitality</li>
        </ul>
        <h2 style={styles.sectionTitle}>Top universities to study in Canada</h2>
        <p style={styles.paragraph}>
          When deciding which university to study at, it is crucial that you
          also look at the world university rankings.
        </p>

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
              <td style={styles.tableCell}>University of Toronto</td>
              <td style={styles.tableCell}>21</td>
              <td style={styles.tableCell}>34</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>McGill University</td>
              <td style={styles.tableCell}>30</td>
              <td style={styles.tableCell}>31</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>University of British Columbia</td>
              <td style={styles.tableCell}>34</td>
              <td style={styles.tableCell}>47</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>University of Montreal</td>
              <td style={styles.tableCell}>141</td>
              <td style={styles.tableCell}>116</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>University of Alberta</td>
              <td style={styles.tableCell}>11</td>
              <td style={styles.tableCell}>110</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>6</td>
              <td style={styles.tableCell}>McMaster University</td>
              <td style={styles.tableCell}>189</td>
              <td style={styles.tableCell}>152</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>7</td>
              <td style={styles.tableCell}>University of Waterloo</td>
              <td style={styles.tableCell}>112</td>
              <td style={styles.tableCell}>154</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>8</td>
              <td style={styles.tableCell}>Western University</td>
              <td style={styles.tableCell}>114</td>
              <td style={styles.tableCell}>172</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>9</td>
              <td style={styles.tableCell}>University of Ottawa</td>
              <td style={styles.tableCell}>203</td>
              <td style={styles.tableCell}>237</td>
            </tr>
          </tbody>
        </table>
        <h2 style={styles.sectionTitle}>
          Cost of living in Canada for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          There is a significant difference between living in Canada and your
          home country. It's essential to research the Canadian lifestyle and
          the cost of living in the area where you plan to stay. Quebec stands
          out as one of the most affordable cities in Canada, with living costs
          much lower than in other major cities.
        </p>
        <p style={styles.paragraph}>
          Additionally, when applying for your student permit, you must
          demonstrate to the Canadian government that you have sufficient funds
          to cover your financial expenses. Be sure to keep this in mind!
        </p>
        <p style={styles.paragraph}>
          When planning your budget, do include the following expenses:
        </p>

        <ul style={styles.courseList}>
          <li>Communication costs</li>
        </ul>
        <p style={styles.paragraph}>
          Make sure to allocate funds in your budget for phone and data bills,
          as you'll likely be calling friends and family back home often. Look
          for affordable calling plans and student discounts. The average
          monthly cost for these services is approximately CAD 20.
        </p>
        <ul style={styles.courseList}>
          <li>Textbooks and supplies</li>
        </ul>
        <p style={styles.paragraph}>
          Textbooks can be expensive, with books for engineering courses, for
          instance, ranging from CAD 250 to CAD 350. For courses like law,
          medicine, and pharmacy, the cost can be even higher. To manage this
          expense, consider buying used books, opting for digital versions, or
          getting a library membership.
        </p>
        <ul style={styles.courseList}>
          <li>Personal expenses and incidentals</li>
        </ul>
        <p style={styles.paragraph}>
          Everyday expenses such as laundry, toiletries, clothing, dining out,
          and more will be part of your budget. These costs largely depend on
          the lifestyle choices you make.
        </p>

        <h2 style={styles.sectionTitle}>Job prospects in Canada</h2>
        <p style={styles.paragraph}>
          In recent years, Canada has seen a significant influx of international
          students from around the world and has offered various work
          opportunities for both students and professionals. The country has
          experienced job growth across multiple sectors, including technology,
          healthcare, and construction. In August 2023, the Canadian labor
          market demonstrated resilience, adding 39.9k jobs, continuing the
          positive employment trend. This increase was largely driven by a rise
          of 32.2k full-time positions, along with 7.8k new part-time jobs. The
          unemployment rate remained stable at 5.5%, while the participation
          rate saw a slight decline of 0.1 percentage point, reaching 65.5%.
        </p>

        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>
        <p style={styles.paragraph}>
          Starting the application process can seem complicated, so we've
          addressed some frequently asked questions about studying and living in
          the USA.
        </p>
        <p style={styles.section}>Ques 1: Is IELTS required for Canada?</p>
        <p style={styles.paragraph}>
          Ans: IELTS is an accepted proof of English language proficiency by
          Immigration, Refugees, and Citizenship Canada (IRCC). When applying
          for undergraduate or postgraduate programs in Canada, submitting your
          IELTS scores will likely be a required part of the application
          process.
        </p>
        <p style={styles.section}>
          Ques 2: How much GPA is required to study in Canada from Nepal?
        </p>
        <p style={styles.paragraph}>
          Ans: GPA requirements can vary depending on the institution you're
          applying to. It's recommended to check with your chosen institution or
          consult an AIEC-Global expert for specific details.
        </p>

        <p style={styles.section}>
          Ques 3: Can I go to Canada with 50% in 12th?
        </p>
        <p style={styles.paragraph}>
          Ans: The minimum percentage required for Canadian programs after
          completing the 12th grade varies based on the program chosen. However,
          students should aim for at least a 70% score in their 12th standard
          exams.
        </p>

        <Exploreincanada />
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

export default StudyinCanada;
