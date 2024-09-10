import React from "react";
import Exploreinusa from "../Homepage/Exploreinusa";
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
            Study in USA from Nepal – Top Universities, Courses, Cost &
            Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <p style={styles.paragraph}>
          The US hosts the greatest number of international students in the
          world. Quality education, a unique curriculum, a multicultural
          environment, and abundant opportunities are just some of the reasons
          why many students want to study in the USA from Nepal.
        </p>
        <h2 style={styles.sectionTitle}>Top 10 reasons to study in the USA</h2>
        <p style={styles.paragraph}>
          The US is renowned for its world-class education system, diverse
          culture, and abundant opportunities for personal and professional
          growth. Here are the top 10 reasons to study in the US:
        </p>

        <ul style={styles.courseList}>
          <li>World-Class Universities</li>
          <li>Diverse Student Community</li>
          <li>Cutting-Edge Research Opportunities</li>
          <li>Global Career Prospects</li>
          <li>Varied Course Options</li>
          <li>Scholarships and Financial Aid</li>
          <li>Cultural Diversity</li>
          <li>Innovation and Technology</li>
          <li>English Language Immersion</li>
          <li>Beautiful Campuses and Scenic Locations</li>
        </ul>

        <h2 style={styles.sectionTitle}>
          Student visa requirements for the US
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Types of student visa</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>F-1 Student Visa</td>
              <td style={styles.tableCell}>
                to study at an accredited US college or university
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>J Exchange Visa (J-1)</td>
              <td style={styles.tableCell}>
                To participation in work and / or study-based exchange program.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>M Student Visa (M1)</td>
              <td style={styles.tableCell}>
                for vocational study or training that are primarily non-academic
                in nature
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Intakes available in the USA</h2>
        <p style={styles.paragraph}>
          Unlike a single intake in Napalese universities, American colleges and
          universities offer three intakes. In some universities, intakes may
          also be referred to as a semester. The three intakes available in the
          US are:
        </p>

        <ul style={styles.courseList}>
          <li>
            Fall: A popular intake among Napalese students, The Fall intake
            starts in the month of September.
          </li>

          <li>
            Spring: Starts in January; it’s best if you miss the Fall intake.{" "}
          </li>

          <li>
            Summer: Available for limited programs and Institutions, the Summer
            intake usually starts around May.{" "}
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>IELTS for studying in the USA</h2>
        <p style={styles.paragraph}>
          When you're applying for a US F1 student visa, you'll usually need to
          take the IELTS Academic exam and get a score of at least 6.5. The
          minimum score can be different for different types of degree programs.
          For undergraduate degrees, they typically look for a score of 6.0,
          while postgraduate programs usually require a 6.5. However, keep in
          mind that specific universities may have their own score requirements.
          Some prestigious schools like Ivy League universities often want a
          higher score, around 7.0, while other schools might ask for 6.0 or
          6.5.
        </p>

        <h2 style={styles.sectionTitle}>Cost to study in the USA</h2>
        <p style={styles.paragraph}>
          The total cost to study in the US for Nepalese students may vary
          because of several factors like institution, location, course, living
          choices, etc. Universities in the US are majorly divided into two
          categories - Public/State and Private. The education cost at a
          public/state university is comparatively less than that of a private
          institution while private universities give more in grants or
          scholarships. Your expenditure on tuition fees depends on the type of
          qualification and university or school you opt for. To cover tuition
          fees, you will need approx. $8,000 to $55,000 (USD) a year
          (indicative).
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Type of Education</th>
              <th style={styles.tableHeader}>
                Tuition fees in USD (indicative) Before Scholarship
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>English language studies</td>
              <td style={styles.tableCell}>$700 to $2,000 a month</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Community colleges</td>
              <td style={styles.tableCell}>$6,000 to $15,000 per year</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Undergraduate bachelor degree</td>
              <td style={styles.tableCell}>$20,000 to $40,000 per year</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Graduate programs</td>
              <td style={styles.tableCell}>$20,000 to $45,000 per year</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Doctoral degree</td>
              <td style={styles.tableCell}>$28,000 to $55,000 per year</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Scholarships to study in the USA</h2>
        <p style={styles.paragraph}>
          If you are wondering how to get a scholarship to study in the US, you
          can contact an IDP expert. They will help apply for eligible
          scholarships. However, the amount of funding available and the type of
          award varies between institutions. Certain research programs may
          provide up to 100% waiver on the tuition fee besides covering a part
          of your living expenditures. Here are some popular scholarship
          programs you can apply to study in the US as a Nepalese student:{" "}
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.No.</th>
              <th style={styles.tableHeader}>Name of the scholarship</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                Fulbright Foreign student program
              </td>
              <td style={styles.tableCell}>
                Applicable for international students who are applying to
                master’s programs; this scholarship covers tuition fees,
                accident and sickness coverage as per US guidelines, airfare,
                and living costs for selected universities.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>
                Fulbright Foreign student programHubert Humphrey Fellowship
                Program (Government-funded)
              </td>
              <td style={styles.tableCell}>
                This program is a part of the Fullbright program and aims to
                bring an accomplished young and mid-career professional from a
                developing country to study in the US for 10 months of
                non-degree graduate study and related practical experience
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                #YouAreWelcomeHere Scholarship (Non-Government scholarship)
              </td>
              <td style={styles.tableCell}>
                It’s a scholarship and social media campaign designed to welcome
                international students into the US higher education system
                irrespective of the subject area
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>
                UEFA (Non-Government scholarship)
              </td>
              <td style={styles.tableCell}>
                This is a summer program sponsored by Abbey Road Inc. which
                grants scholarships to 14-18 aged high school student that shows
                exemplary performance in their academics and extracurricular
                activities
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>
                AAUW International Fellowships (Non-Government scholarship)
              </td>
              <td style={styles.tableCell}>
                These fellowships are awarded to international women students
                for full-time study and research in the US. It supports both
                graduate and post-graduate students for selected universities.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *This is an indicative list, speak with your IDP expert for details
          and the best available options suited to your profile Please note: An
          MBA degree can cost significantly more, as can professional programs
          such as law, medicine, dentistry, some design programs, etc. Most
          doctoral degrees are 100% funded through research/teaching
          assistantships and fellowships. If you want to bring down your
          educational expenses, it is best to apply to various US scholarships
          available for Napalese students.
        </p>

        <h2 style={styles.sectionTitle}>Top courses to study in the US</h2>
        <p style={styles.paragraph}>
          If you are wondering about the best course to study in the US, here
          are the top fields preferred by international students:
        </p>

        <ul style={styles.courseList}>
          <li>Engineering and computer science courses</li>
          <li>Life science courses</li>
          <li>Business management courses</li>
        </ul>
        <h2 style={styles.sectionTitle}>
          Top universities to study in the US (QS Ranking 2024)
        </h2>
        <p style={styles.paragraph}>
          Check where your favourite American university ranks
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.No.</th>
              <th style={styles.tableHeader}>Institution</th>
              <th style={styles.tableHeader}>QS Ranking 2024 (Globally)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>
                Massachusetts Institute of Technology (MIT)
              </td>
              <td style={styles.tableCell}>1</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Stanford University </td>
              <td style={styles.tableCell}>5</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>Harvard University</td>
              <td style={styles.tableCell}>4</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>
                University of California, Berkeley (UCB)
              </td>
              <td style={styles.tableCell}>10</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>University of Chicago</td>
              <td style={styles.tableCell}>11</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>6</td>
              <td style={styles.tableCell}>University of Pennsylvania</td>
              <td style={styles.tableCell}>12</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>7</td>
              <td style={styles.tableCell}>Cornell University</td>
              <td style={styles.tableCell}>13</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>8</td>
              <td style={styles.tableCell}>
                California Institute of Technology (Caltech)
              </td>
              <td style={styles.tableCell}>15</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>9</td>
              <td style={styles.tableCell}>Yale University</td>
              <td style={styles.tableCell}>16</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>10</td>
              <td style={styles.tableCell}>Princeton University</td>
              <td style={styles.tableCell}>17</td>
            </tr>
          </tbody>
        </table>
        <h2 style={styles.sectionTitle}>Job prospects in the USA</h2>
        <p style={styles.paragraph}>
          Owing to a skills shortage across various sectors in the American
          market, international students with skills are in demand and those who
          are willing to settle in America have the option to apply under a
          Skilled Worker Visa and permanently work and reside in the country.
          Graduates are in high demand in the USA, especially in the field of
          healthcare, film production, real estate, agriculture, engineering,
          and computer information technology. There are also various of
          internship programs available that can be taken up by international
          students.
        </p>
        <h2 style={styles.sectionTitle}>Cost of living in the USA</h2>
        <p style={styles.paragraph}>
          In the US, living costs vary by a substantial amount due to the vast
          territory of the country. Usually, urban areas are more expensive (in
          or near a big city) in contrast to smaller towns or suburban areas.
          Therefore, to have a fair view of the general living costs in the US,
          you should also consider these common expenses when creating your
          budget:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}> Expenses</th>
              <th style={styles.tableHeader}>Average yearly cost*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Books and Stationery</td>
              <td style={styles.tableCell}>$500 - $1,000</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Rent & Utilities</td>
              <td style={styles.tableCell}>$5000 - $20,000</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Food</td>
              <td style={styles.tableCell}>$800 - $2000</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>health insurance</td>
              <td style={styles.tableCell}>$800 - $2500</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Miscellaneous expenses</td>
              <td style={styles.tableCell}>$1500 - $2,000</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *Note: All costs are indicative and may vary from region to region
        </p>
        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>
        <p style={styles.paragraph}>
          Beginning the application process may feel like a complicated process,
          so we have answered some commonly asked question about studying and
          living in the USA.
        </p>
        <p style={styles.section}>
          Ques 1: What are the exams you need to take to study in the US?
        </p>
        <p style={styles.paragraph}>
          Ans: Depending on your profile and the university requirements, you
          will need to take English language proficiency test, and standardized
          test (like SAT/ACT/GRE/GMAT, etc.) Consult with an IDP exert to learn
          about your requirements.
        </p>
        <p style={styles.section}>
          Ques 2: What are the popular fields in the US after NEB/PCL diploma?
        </p>
        <p style={styles.paragraph}>
          Ans: Here is a list of popular fields in the US after high school:
        </p>
        <ul style={styles.courseList}>
          <li>Business and Management</li>
          <li>Engineering</li>
          <li>Computer Science and Information Technology</li>
          <li>Health Sciences</li>
          <li>Social Sciences</li>
          <li>Natural Sciences</li>
          <li>Arts and Humanities</li>
          <li>Education</li>
          <li>Environmental Studies</li>
          <li>Criminal Justice and Law</li>
        </ul>
        <p style={styles.section}>
          Ques 3: How much gap is accepted for study in the US?
        </p>
        <p style={styles.paragraph}>
          Ans: Although the US education system is recognised for its stringent
          regulations, most academic institutions typically allow for a one to
          two years gap for undergraduate students. Incases where the gap
          extends beyond his period, it becomes imperative for students to
          provide a well-founded explanation.
        </p>
        <p style={styles.section}>
          Ques4: How much percentage is required to study in the US?
        </p>
        <p style={styles.paragraph}>
          Ans: The percentage/GPA requirement varies with the university you are
          applying to and the level you are applying for. However, a percentage
          of 65% and GPA of 3.0 would be better for your admission to the US
          institutions.
        </p>
        <Exploreinusa />
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
