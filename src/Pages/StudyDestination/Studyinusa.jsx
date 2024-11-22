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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/flagus.jpeg)`,
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
          The United States has the highest number of international students
          worldwide. Its exceptional education system, unique curriculum,
          diverse cultural environment, and abundant opportunities are just a
          few of the reasons many students from Nepal choose to study in the
          USA.
        </p>
        <h2 style={styles.sectionTitle}>Top 10 reasons to study in the USA</h2>
        <p style={styles.paragraph}>
          The US is renowned for its top-tier educational institutions,
          multicultural society, and vast opportunities for personal and career
          growth. Here are the top 10 reasons why studying in the US is a great
          choice:
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
                For studying at an accredited US college or university
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>J Exchange Visa (J-1)</td>
              <td style={styles.tableCell}>
                For participation in work and/or study-based exchange programs.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>M Student Visa (M1)</td>
              <td style={styles.tableCell}>
                For vocational study or training, generally non-academic in
                nature
              </td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Intakes available in the USA</h2>
        <p style={styles.paragraph}>
          Unlike Nepali universities with a single intake, American institutions
          offer three intakes. Some universities may also refer to these as
          semesters. The three main intakes are:
        </p>

        <ul style={styles.courseList}>
          <li>
            Fall: This is the most popular intake among Nepali students,
            starting in September.
          </li>

          <li>
            Spring: This intake begins in January, and is a good option if you
            miss the Fall intake.
          </li>

          <li>
            Summer: Available for specific programs and institutions, Summer
            intake typically starts in May.
          </li>
        </ul>

        <h2 style={styles.sectionTitle}>IELTS for studying in the USA</h2>
        <p style={styles.paragraph}>
          When applying for an F1 student visa to the US, you usually need to
          take the IELTS Academic exam and score at least 6.5. This minimum
          score may vary depending on the program. Undergraduate programs often
          require a score of 6.0, while postgraduate programs typically need
          6.5. However, individual universities may have their own score
          thresholds. Prestigious institutions such as Ivy League schools may
          ask for a score around 7.0, while other universities may accept 6.0 or
          6.5.
        </p>

        <h2 style={styles.sectionTitle}>Cost to study in the USA</h2>
        <p style={styles.paragraph}>
          The overall cost of studying in the US for Nepali students can vary
          based on several factors such as the institution, location, program,
          and living preferences. US universities are generally categorized into
          two types: Public/State and Private. Tuition fees at public or state
          universities tend to be lower compared to private institutions,
          although private universities may offer more grants or scholarships.
          The amount you'll spend on tuition depends on the program and the
          institution you choose. On average, tuition fees can range from
          approximately $8,000 to $55,000 (USD) per year (subject to variation).
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
          If you're looking for ways to secure a scholarship to study in the US,
          an AIEC-Global expert can assist you with the application process for
          eligible scholarships. The amount of financial aid and the type of
          award differ across institutions. Some research programs may offer up
          to a full tuition fee waiver, along with coverage for part of your
          living expenses. Below are some well-known scholarship programs you
          can apply for as a Nepali student planning to study in the US:{" "}
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
                This scholarship is available for international students
                applying to master's programs. It covers tuition fees, accident
                and sickness insurance as per US guidelines, airfare, and living
                expenses for selected universities.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>
                Fulbright Foreign student programHubert Humphrey Fellowship
                Program (Government-funded)
              </td>
              <td style={styles.tableCell}>
                This program, part of the Fulbright initiative, is designed to
                bring talented young and mid-career professionals from
                developing countries to the US for 10 months of non-degree
                graduate study and relevant hands-on experience.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>
                #YouAreWelcomeHere Scholarship (Non-Government scholarship)
              </td>
              <td style={styles.tableCell}>
                This scholarship and social media campaign is aimed at welcoming
                international students into the US higher education system,
                regardless of their field of study.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>
                UEFA (Non-Government scholarship)
              </td>
              <td style={styles.tableCell}>
                This summer program, sponsored by Abbey Road Inc., offers
                scholarships to high school students aged 14-18 who demonstrate
                outstanding academic and extracurricular achievements.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>
                AAUW International Fellowships (Non-Government scholarship)
              </td>
              <td style={styles.tableCell}>
                These fellowships are granted to international women students
                pursuing full-time study and research in the US. They support
                both graduate and postgraduate students at selected
                universities.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *This is a general list. Consult your AIEC-Global expert for detailed
          guidance and the best scholarship options based on your profile.
          Please note: MBA programs and professional degrees like law, medicine,
          dentistry, and certain design programs tend to have significantly
          higher costs. Most doctoral degrees are fully funded through research
          or teaching assistantships and fellowships. To reduce your educational
          expenses, consider applying for various US scholarships available to
          Nepalese students.
        </p>

        <h2 style={styles.sectionTitle}>Top courses to study in the US</h2>
        <p style={styles.paragraph}>
          If you're curious about the most popular courses to pursue in the US,
          here are the top fields chosen by international students:
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
          Due to a shortage of skilled workers in various industries in the US,
          international students with relevant skills are in high demand. Those
          willing to settle in the US can apply for a Skilled Worker Visa,
          allowing them to live and work permanently in the country. Graduates,
          especially in fields like healthcare, film production, real estate,
          agriculture, engineering, and IT, are highly sought after.
          Additionally, numerous internship opportunities are available for
          international students.
        </p>
        <h2 style={styles.sectionTitle}>Cost of living in the USA</h2>
        <p style={styles.paragraph}>
          Living expenses in the US can vary greatly due to the country's large
          size. Typically, urban areas, particularly those in or near major
          cities, tend to be more expensive compared to smaller towns or
          suburban regions. Therefore, when planning your budget, it's important
          to consider common living costs to get a clear idea of what to expect
          in the US.
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
          Starting the application process might be overwhelming, so we've
          compiled answers to frequently asked questions on studying and living
          in the US to help ease your mind.
        </p>
        <p style={styles.section}>
          Ques 1: What are the exams you need to take to study in the US?
        </p>
        <p style={styles.paragraph}>
          Ans:You may be required to take an English language proficiency
          examination and a standardized test (such as the SAT/ACT/GRE/GMAT) in
          accordance with the university's requirements and your profile. To
          ascertain your requirements, consult with an AIEC-Global exert.
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
          Ans: While the United States education system is acknowledged for its
          rigorous regulations, the majority of academic institutions permit
          undergraduate students to take a one- to two-year hiatus. In
          situations where the delay exceeds his period, it is essential for
          students to offer a well-reasoned explanation.
        </p>
        <p style={styles.section}>
          Ques4: How much percentage is required to study in the US?
        </p>
        <p style={styles.paragraph}>
          Ans: The percentage or GPA requirement is contingent upon the level of
          the university to which you are applying and the application you are
          submitting. However, a percentage of 65% and GPA of 3.0 would be
          preferable for your admission to the US institutions.
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

export default StudyInUsa;
