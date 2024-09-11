import React from "react";
import Exploreinnewzeland from "../Homepage/Exploreinnewzeland";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const Studyinnewzeland = () => {
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
            Study in New Zeland from Nepal – Top Universities, Courses, Cost &
            Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          Know why Studying in New Zealand is a great option for Nepalese
          Students
        </h2>
        <p style={styles.paragraph}>
          Ranking fourth on the Global Peace Index 2023, New Zealand is
          undoubtedly the safest country to study in. With globally ranked
          universities and a responsive education system, it has the right mix
          of opportunities, culture, economy and climate to thrive for a
          Nepalese student. Not to miss, its unspoiled scenery will make your
          experience worth every penny.
        </p>
        <h2 style={styles.sectionTitle}>10 reasons to study in New Zealand</h2>
        <ul style={styles.courseList}>
          <li>High-Quality Education</li>
          <li>Stunning Natural Landscapes</li>
          <li>Diverse and Inclusive Society</li>
          <li>Safety and Low Crime Rate</li>
          <li>English as the Main Language</li>
          <li>Work Opportunities for Students</li>
          <li>Supportive Student Services</li>
          <li>Globally Recognized Degrees</li>
          <li>Cultural Exchange and Adventure</li>
          <li>Quality of Life</li>
        </ul>
        <h2 style={styles.sectionTitle}>
          Student visa requirements for New Zealand
        </h2>
        <p style={styles.paragraph}>
          If you are over 18 years old and plan to study in New Zealand for more
          than six months, here’s an overview of the types of student visas
          available for you:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Types of student visa</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Fee Paying Student Visa</td>
              <td style={styles.tableCell}>
                Study full-time for up to four years and be able to work
                part-time
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Exchange Student Visa</td>
              <td style={styles.tableCell}>
                Study full-time for up to four years in an approved student
                exchange program
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                Foreign Government Supported Student Visa
              </td>
              <td style={styles.tableCell}>
                Study full-time for up to four years on a foreign government
                loan or scholarship
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>Pathway Student Visa</td>
              <td style={styles.tableCell}>
                Study up to five years for 3 consecutive courses on a single
                student visa and be able to work part-time
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          * For detailed information, please visit the New Zealand Government’s
          website{" "}
          <a
            href="https://www.immigration.govt.nz/new-zealand-visashttps:/www.immigration.govt.nz/new-zealand-visas"
            target="_blank"
            rel="noopener noreferrer"
          >
            immigration.govt
          </a>
        </p>

        <h2 style={styles.sectionTitle}>Intakes available in New Zealand</h2>
        <p style={styles.paragraph}>
          In some universities, intakes may also be referred to as a semester.
          The two intakes available in New Zealand are:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Intake Type</th>
              <th style={styles.tableHeader}>Start Date</th>
              <th style={styles.tableHeader}>Commonly Known As</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Semester One</td>
              <td style={styles.tableCell}>February or March</td>
              <td style={styles.tableCell}>Autumn Intake</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Semester Two</td>
              <td style={styles.tableCell}>July or August</td>
              <td style={styles.tableCell}>Spring Intake</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Rolling Intakes</td>
              <td style={styles.tableCell}>Various Times</td>
              <td style={styles.tableCell}>Flexible Intakes.</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          Admissions for vocational courses may also be available in March,
          April and May.
        </p>

        <h2 style={styles.sectionTitle}>IELTS for studying in New Zealand</h2>
        <p style={styles.paragraph}>
          New Zealand has a total of 8 universities, all of which hold prominent
          positions in prestigious global rankings, including the QS World
          University Ranking and Times Higher Education Ranking.
        </p>
        <p style={styles.paragraph}>
          Here are the IELTS requirements of all the Kiwi universities:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S. No.</th>
              <th style={styles.tableHeader}>Universities</th>
              <th style={styles.tableHeader}>IELTS Overall</th>
              <th style={styles.tableHeader}>IELTS Listening</th>
              <th style={styles.tableHeader}>IELTS Reading</th>
              <th style={styles.tableHeader}>IELTS Writing</th>
              <th style={styles.tableHeader}>IELTS Speaking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                Auckland University of Technology
              </td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Lincoln University</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>Massey University</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>University of Canterbury</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>University of Otago</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>6</td>
              <td style={styles.tableCell}>University of Waikato</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>7</td>
              <td style={styles.tableCell}>
                Victoria University of Wellington
              </td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>8</td>
              <td style={styles.tableCell}>University of Auckland</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
              <td style={styles.tableCell}>5.5</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *Minimum IELTS score accepted, the requirement varies with the course,
          hence do check when applying
        </p>

        <h2 style={styles.sectionTitle}>Cost of studying in New Zealand</h2>
        <p style={styles.paragraph}>
          If you want to know the total cost of studying in New Zealand for
          Nepalese students , you can get in touch with an IDP expert . Most
          commonly humanities, arts and education courses are cheaper, while
          subjects such as medicine and engineering are likely to be more
          expensive. If you wish to study at the postgraduate level, the tuition
          fees are typically higher, and the costs vary depending on the
          program. As with most other countries, MBA programs are often the most
          expensive. The average cost for these programs ranges between NZD
          31,000 and NZD 50,000 (indicative).
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.No.</th>
              <th style={styles.tableHeader}>Study Program</th>
              <th style={styles.tableHeader}>Cost (in NZ)*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Undergraduate degree</td>
              <td style={styles.tableCell}>20,500 - 25,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Master's degree</td>
              <td style={styles.tableCell}>19,000 - 29,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>Doctoral Degree</td>
              <td style={styles.tableCell}>6,500 - 9,000 annually</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>MBA</td>
              <td style={styles.tableCell}>31,000 - 50, 000 annually</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *Please note that all figures are indicative
        </p>

        <h2 style={styles.sectionTitle}>
          Scholarships to study in New Zealand
        </h2>
        <p style={styles.paragraph}>
          Here are some popular scholarship programs you can apply to as a
          Nepalese student:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name of scholarship</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>
                New Zealand International Doctoral Research Scholarships
                (NZIDRS)
              </td>
              <td style={styles.tableCell}>
                Funded by the New Zealand government, these scholarships are for
                Nepalese students who wish to pursue a PhD in New Zealand.
                Inclusions under this award are university tuition fees,
                associated student levies, living stipend (up to NZ25,000
                tax-free) and health insurance coverage (up to NZ600 annually)
                for three years. (However, it may vary as per different
                education providers)
                (Source:https://www.findaphd.com/study-abroad/aus-nz/phd-study-in-new-zealand.aspx)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                New Zealand Commonwealth Scholarships
              </td>
              <td style={styles.tableCell}>
                Nepalese students who apply for a master’s degree or PhD can try
                for the Commonwealth Scholarship and Fellowship Plan (CSFP). The
                plan will cover tuition fees, living, travel and health
                insurance, and establishment allowance. This scholarship offers
                many benefits such as: Full tuition fees An allowance of NZ 491
                per week for living expenses For covering, setup costs an
                established allowance of NZ 3,000 Medical and travel insurance
                and research cost for postgraduate students (Sources:
                *https://www.mfat.govt.nz/en/aid-and-development/new-zealand-government-scholarships/
                *https://www.auckland.ac.nz/en/study/international-students/scholarships-loans-and-funding/development-scholarships/commonwealth-scholarships.html)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                New Zealand Excellence Awards (NZEA){" "}
              </td>
              <td style={styles.tableCell}>
                NZEA features scholarships across all eight universities,
                offering an opportunity for Nepalese students to experience New
                Zealand excellence in various fields. This scholarship is funded
                by Education New Zealand (ENZ) and New Zealand universities
                catering to Nepalese students. The number of scholarships in PG
                programs is 28 and in UG is 3. The value of this scholarship is
                NZ 5,000 each for the PG course and NZ 10,000 each for the UG
                course.
                (Source:https://www.studyinnewzealand.govt.nz/how-to-apply/scholarship/)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                NZ-GRADS New Zealand Global Research Alliance Doctoral
                Scholarship
              </td>
              <td style={styles.tableCell}>
                The Global Research Alliance on Agricultural Greenhouse Gas
                Emissions has launched a new NZ-GRADS program if you aspire to
                complete your PhD in agriculture emission science. It covers the
                following expenses for 36 months (3 years): Tuition fees up to
                NZD 10,000 per year An annual stipend for covering expenses of
                NZD 28,000 per year (tax-free) Medical insurance up to NZD 700
                per year Visa application costs do not exceed up to 1,000
                Airfare upon returning to New Zealand up to a maximum amount of
                6,000 Research allowance up to 1,500 Feel free to reach out to
                your IDP international education expert for the application
                process (
                Source:https://www.studyinnewzealand.govt.nz/how-to-apply/scholarship/)
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>SEG Scholarship</td>
              <td style={styles.tableCell}>
                This scholarship program is funded by the Soshi Educational
                Group. It encourages the study of geophysics and related
                geosciences for undergraduate (A and B scholarships) and other
                programs (C scholarships) Value of the scholarships a)
                Scholarship A: NZD 7,000 annually b) Scholarship B: NZD 5,000
                annually c) SEG Scholarship C: NZD 3,000 annually The length of
                the award is one year Sources:
                *https://www.careers.govt.nz/scholarship/
                https://www.studyinnewzealand.govt.nz/how-to-apply/scholarship/
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Palmerston North City Mayor's Goodwill Ambassador Scholarship
              </td>
              <td style={styles.tableCell}>
                It is sponsored by the City Council of Palmerston North for
                promoting Palmerston North as a favourable location for
                international students. It is provided for
                career-based/vocational, undergraduate, and postgraduate
                courses. Value of the scholarship: NZD 1,000 towards the first
                year's tuition (Source: https://www.studyinnewzealand.govt.nz/)
              </td>
            </tr>
          </tbody>
        </table>
        <h2 style={styles.sectionTitle}>Top courses to study in New Zealand</h2>
        <p style={styles.paragraph}>
          New Zealand offers a wide range of courses and programs for
          international students. Here are some of the top courses:
        </p>
        <ul style={styles.courseList}>
          <li>Business and Management</li>
          <li>Information Technology</li>
          <li>Engineering (Electrical, Mechanical, Civil, Software)</li>
          <li>Health Sciences (Nursing, Medicine, Dentistry)e</li>
          <li>Environmental Science</li>
          <li>Tourism and Hospitality</li>
          <li>
            Creative Arts and Design (Graphic Design, Animation, Film, Fashion)
          </li>
          <li>Agriculture and Agricultural Sciences</li>
          <li>Education</li>
          <li>
            Social Sciences (Psychology, Sociology, International Relations)
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>
          Top universities to study New Zealand
        </h2>
        <p style={styles.paragraph}>
          New Zealand is home to several reputable universities known for their
          academic excellence and research contributions. Here are some of the
          top universities in New Zealand according to the QS World University
          Rankings 2024:
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
              <td style={styles.tableCell}>The University of Aucklan</td>
              <td style={styles.tableCell}>68</td>
              <td style={styles.tableCell}>87</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>University of Otago</td>
              <td style={styles.tableCell}>206</td>
              <td style={styles.tableCell}>217</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                Victoria University of Wellington
              </td>
              <td style={styles.tableCell}>241</td>
              <td style={styles.tableCell}>275</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>University of Canterbury</td>
              <td style={styles.tableCell}>256</td>
              <td style={styles.tableCell}>284</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>Massey University</td>
              <td style={styles.tableCell}>239</td>
              <td style={styles.tableCell}>292</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>6</td>
              <td style={styles.tableCell}>University of Waikato</td>
              <td style={styles.tableCell}>250</td>
              <td style={styles.tableCell}>331</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>7</td>
              <td style={styles.tableCell}>Lincoln University</td>
              <td style={styles.tableCell}>362</td>
              <td style={styles.tableCell}>368</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>8</td>
              <td style={styles.tableCell}>
                Auckland University of Technology
              </td>
              <td style={styles.tableCell}>407</td>
              <td style={styles.tableCell}>486</td>
            </tr>
          </tbody>
        </table>
        <h2 style={styles.sectionTitle}>
          Job prospects in New Zealand for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          New Zealand offers favourable job prospects for Nepalese students.
          Graduates can apply for post-study work visas, and the country
          periodically highlights skill shortages, making it easier to find
          employment in those areas. Quality education, work experience
          opportunities, and networking can enhance job prospects. Proficiency
          in English is crucial, and familiarity with the New Zealand work
          culture is essential. Explore diverse job opportunities in sectors
          like healthcare, IT, engineering, and more, and consider long-term
          residency options if desired.
        </p>
        <h2 style={styles.sectionTitle}>
          Cost of living in New Zealand for Nepalese students
        </h2>
        <p style={styles.paragraph}>
          The cost of living in New Zealand can vary depending on factors such
          as location, lifestyle, and personal preferences. Generally, New
          Zealand is considered to have a moderately high cost of living. Here
          are some key expenses to consider when estimating the cost of living
          in New Zealand:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Expense category</th>
              <th style={styles.tableHeader}>Estimated monthly cost (NZD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Accommodation</td>
              <td style={styles.tableCell}>1,200 - 2,500+</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Food (Groceries)</td>
              <td style={styles.tableCell}>300 - 500</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Dining Out</td>
              <td style={styles.tableCell}>150 - 300</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Transportation (Public)</td>
              <td style={styles.tableCell}>150 - 250</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Transportation (Car Ownership)</td>
              <td style={styles.tableCell}>150 - 250 + additional expenses</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Healthcare (Basic Public Coverage)
              </td>
              <td style={styles.tableCell}>Covered by taxation</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Private Health Insurance</td>
              <td style={styles.tableCell}>50 - 200+</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Utilities (Electricity, Water, Heating)
              </td>
              <td style={styles.tableCell}>150 - 250</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Internet</td>
              <td style={styles.tableCell}>70 - 100</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Education (Tuition and Educational Expenses for International
                Students)
              </td>
              <td style={styles.tableCell}>Varies by institution</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Entertainment and Leisure</td>
              <td style={styles.tableCell}>100 - 300+</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Insurance (Rental, Car, etc.)</td>
              <td style={styles.tableCell}>Varies based on coverage</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Miscellaneous</td>
              <td style={styles.tableCell}>100 - 200+</td>
            </tr>
          </tbody>
        </table>

        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>

        <p style={styles.section}>
          Ques 1: What are the requirements to study in New Zealand for
          international students?
        </p>
        <p style={styles.paragraph}>
          Ans:To study in New Zealand as an international student, you'll
          typically need to secure admission from a New Zealand institution,
          demonstrate adequate financial resources, meet English language
          proficiency requirements, obtain a student visa , maintain health and
          travel insurance, pay tuition fees, provide academic records, and meet
          character and health criteria. It's essential to fulfil these
          requirements and provide any additional documents requested by the
          institution or immigration authorities for a smooth application and
          successful enrolment in a New Zealand educational institution.
        </p>
        <p style={styles.section}>
          Ques 2: How much gap is accepted for study in New Zealand?
        </p>
        <p style={styles.paragraph}>
          Ans: A student can apply to a university in New Zealand even with a
          10-year gap in their education. However, in such cases, the student
          may need to demonstrate their credentials and qualifications
          thoroughly.
        </p>

        <p style={styles.section}>
          Ques 3:Can I work and study in New Zealand simultaneously?
        </p>
        <p style={styles.paragraph}>
          Ans: Yes, as an international student in New Zealand, you can work
          while studying, subject to certain conditions. Typically, you can work
          up to 20 hours per week during the academic year and full-time during
          scheduled breaks, such as summer or winter vacations. However, it's
          essential to check the specific conditions and limitations of your
          student visa, as they may vary based on the type of visa you hold and
          your program of study. Additionally, some research or postgraduate
          programs may have different work rights. Be sure to comply with New
          Zealand's immigration regulations to maintain your legal status while
          working and studying.
        </p>

        <Exploreinnewzeland />
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

export default Studyinnewzeland;
