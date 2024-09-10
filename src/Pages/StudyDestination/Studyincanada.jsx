import React from "react";
import Exploreincanada from "../Homepage/Exploreincanada";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const StudyInUsa = () => {
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
          visa authorises your entry into Canada, a study permit validates your
          stay in Canada. It is a mandatory immigration document for an
          international student.
        </p>
        <p style={styles.paragraph}>
          if you hold a study permit, you must remain enrolled and make
          reasonable and timely progress towards completing your course.
        </p>
        <p style={styles.paragraph}>
          Your study permit is always accompanied by a visitor visa or
          Electronic Travel Authorization (ETA). Please note that a study permit
          is a document that allows you to study in Canada while a visitor visa
          or ETA allows you to enter Canada. Your expert will help you access
          the latest information and connect you with authorised migration
          experts.
        </p>

        <h2 style={styles.sectionTitle}>
          Cost of studying in Canada for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          Your expenditure on tuition fees depends on the type of qualification
          and institution you opt for. To cover this, you will need
          approximately between CAD 13,000 - CAD 35,000 a year.
        </p>
        <p style={styles.paragraph}>
          Most commonly, courses in humanities, education, and arts are a little
          cheaper, while subjects such as medicine and engineering are likely to
          be more expensive. If you wish to study at a postgraduate level, the
          tuition fee is typically higher, and the costs vary depending on the
          program. As with most other countries, MBA programs are often the most
          expensive. The average cost for these programs ranges between CAD
          30,000-42,000.
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
          Here are some popular government-funded scholarships available for
          Nepalese students to study in Canada:
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
                This program is designed to enable students to pursue programs
                of advanced study and research at the Master's and PhD levels in
                Commonwealth countries other than their own.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>
                National Research Council of Canada (NRCC)
              </td>
              <td style={styles.tableCell}>
                Research associateship is offered to master degree holders in
                engineering and PhD holders in natural science or engineering
                disciplines.
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
                For students studying in Quebec. Financial assistance is
                available to students studying master’s level or above.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>Ontario Trillium Scholarship</td>
              <td style={styles.tableCell}>
                First announced in November 2010 for the best doctoral students
                from around the world to study in Ontario.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *This is an indicative list, speak with your AIEC expert for details
          and the best available options suited to your profile
        </p>

        <h2 style={styles.sectionTitle}>Intakes in Canada</h2>
        <p style={styles.paragraph}>
          Unlike a single intake in Nepalese universities, Canadian colleges and
          universities offer three intakes. In some universities in Canada,
          intakes may also be referred to as a semester. The three intakes
          available in Canada are:
        </p>
        <ul style={styles.courseList}>
          <li>Fall</li>
        </ul>
        <p style={styles.paragraph}>
          *This is an indicative list, speak with your AIEC expert for details
          and the best available options suited to your profile
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
          IELTS band score requirements vary among Canadian institutions for
          undergraduate (UG) and postgraduate (PG) courses. Typically, colleges
          commonly ask for an overall band score of 6.0 for UG courses and 6.5
          for PG courses. In universities, an overall 6.5 band score is often
          required for both UG and PG programs. It is advisable to verify the
          specific IELTS band score requirements of your chosen institution when
          applying to ensure you meet the criteria.
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
          Indeed, there exists a substantial difference between living in Canada
          and your home country. It is important to explore the Canadian
          lifestyle and cost of living of the place where you plan to stay.
          Quebec makes one of the most affordable Canadian cities with the cost
          of living far less compared to other cities.
        </p>
        <p style={styles.paragraph}>
          Also, while applying for your student permit, you have to prove to the
          Canadian government that you have enough money to meet the financial
          expenses. So, keep that in mind!
        </p>
        <p style={styles.paragraph}>
          When planning your budget, do include the following expenses:
        </p>

        <ul style={styles.courseList}>
          <li>Communication costs</li>
        </ul>
        <p style={styles.paragraph}>
          Always set aside money in your budget for phone and data bills as
          you’d be calling your friends and family back home frequently. Look
          for low-cost calling plans as well as student discounts. The average
          monthly cost will be around CAD 20.
        </p>
        <ul style={styles.courseList}>
          <li>Textbooks and supplies</li>
        </ul>
        <p style={styles.paragraph}>
          Buying textbooks can be costly. Books for engineering courses, for
          example, might cost anywhere between CAD 250 and CAD 350. The value of
          courses like law, medicine, and pharmacy can be even higher. You may
          keep this within your budget by buying used books, purchasing digital
          versions, or even enrolling in a library membership.
        </p>
        <ul style={styles.courseList}>
          <li>Personal expenses and incidentals</li>
        </ul>
        <p style={styles.paragraph}>
          Laundry, toiletries, clothing, dining out, and so on will be part of
          your everyday spending. This is largely dependent on the type of
          lifestyle you select.
        </p>

        <h2 style={styles.sectionTitle}>Job prospects in Canada</h2>
        <p style={styles.paragraph}>
          Canada, over the past few years, has seen an abundance of
          international students from around the world and has provided various
          work opportunities to both, students and working professionals. Canada
          has experienced job growth in various sectors, including technology,
          healthcare, and construction. In August 2023, the Canadian labour
          market demonstrated resilience by adding 39.9k jobs, marking a
          positive trend in employment. This increase was primarily driven by a
          surge in full-time employment, which saw a notable rise of 32.2k
          positions, complemented by a growth of 7.8k part-time jobs. The
          unemployment rate held steady at 5.5%, reflecting stability, while the
          participation rate experienced a minor dip of 0.1 percentage point,
          settling at 65.5%.*
        </p>

        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>
        <p style={styles.paragraph}>
          Beginning the application process may feel like a complicated process,
          so we have answered some commonly asked question about studying and
          living in the USA.
        </p>
        <p style={styles.section}>Ques 1: Is IELTS required for Canada?</p>
        <p style={styles.paragraph}>
          Ans: IELTS serves as recognised proof of English language proficiency
          for Immigration, Refugees and Citizenship Canada (IRCC). When seeking
          admission to Canadian undergraduate or postgraduate programs, you will
          probably need to submit your IELTS scores as a mandatory component of
          your application.
        </p>
        <p style={styles.section}>
          Ques 2: How much GPA is required to study in Canada from Nepal?
        </p>
        <p style={styles.paragraph}>
          Ans: GPA requirements may vary with the institution you are applying
          to. It’s best to check with the institution you have chosen or an IDP
          expert for the same.
        </p>

        <p style={styles.section}>
          Ques 3: Can I go to Canada with 50% in 12th?
        </p>
        <p style={styles.paragraph}>
          Ans: A The specific minimum percentage required for Canadian programs
          after completing the 12th grade varies depending on the chosen
          program. Nevertheless, students should strive to achieve a minimum
          score of 70% in their 12th standard examinations
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

export default StudyInUsa;
