import React from "react";
import ExploreinUk from "../Homepage/Exploreinuk";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
const Studyinuk = () => {
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
            Study in UK from Nepal – Top Universities, Courses, Cost &
            Scholarships
          </h1>
          <button style={styles.contactBtn}>Contact Us</button>
        </div>
      </header>
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>
          Let’s know why Nepalese students prefer the UK as a top study
          destination
        </h2>
        <p style={styles.paragraph}>
          The UK is home to some of the world’s oldest universities and colleges
          having their roots in the 12th and 13th centuries. Coming from such a
          strong legacy, education in the UK has become a benchmark for other
          countries.
        </p>
        <h2 style={styles.sectionTitle}>Top 10 reasons to study in the UK</h2>
        <p style={styles.paragraph}>
          When contemplating higher education abroad, the United Kingdom stands
          out as an exceptionally attractive destination for countless students
          around the globe. With a reputation for excellence in education, a
          diverse and inclusive student community, and a rich tapestry of
          culture and history, the UK offers a multitude of compelling reasons
          to choose it as your study destination:
        </p>

        <ul style={styles.courseList}>
          <li>World-Class Universities</li>
          <p style={styles.paragraph}>
            The UK is home to some of the world's top-ranked universities,
            renowned for their academic excellence and research contributions.
          </p>
          <li>Diverse Student Community</li>
          <p style={styles.paragraph}>
            You'll be part of a diverse and multicultural student community,
            fostering cross-cultural understanding and lifelong friendships.
          </p>
          <li>Rich Cultural Experiences</li>
          <p style={styles.paragraph}>
            The UK's vibrant culture offers a plethora of opportunities to
            explore history, art, music, and diverse traditions.
          </p>
          <li>Internationally Recognised Degrees</li>
          <p style={styles.paragraph}>
            UK degrees are highly respected worldwide, enhancing your career
            prospects and global mobility.
          </p>
          <li>Career Opportunities</li>
          <p style={styles.paragraph}>
            The UK's strong job market and graduate employment prospects can
            help kick-start your career.
          </p>
          <li>Language Proficiency</li>
          <p style={styles.paragraph}>
            Studying in an English-speaking country like the UK enhances your
            English language skills, a valuable asset in today's global job
            market.
          </p>
          <li>Historic Landmarks</li>
          <p style={styles.paragraph}>
            Immerse yourself in the UK's rich history, with iconic landmarks
            like the Tower of London, Stonehenge, and Edinburgh Castle.
          </p>
          <li>Research Opportunitie</li>
          <p style={styles.paragraph}>
            The UK offers cutting-edge research opportunities and resources,
            particularly for postgraduate students.
          </p>
          <li>Scholarships and Funding</li>
          <p style={styles.paragraph}>
            Numerous scholarships and financial aid options are available to
            international students, making education more accessible.
          </p>
          <li>Gateway to Europe</li>
          <p style={styles.paragraph}>
            Being in close proximity to mainland Europe allows for easy travel
            and exploration of diverse European cultures and destinations during
            your studies.
          </p>
        </ul>

        <h2 style={styles.sectionTitle}>
          Student visa requirements for the UK
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Visa name</th>
              <th style={styles.tableHeader}>Who it’s for</th>
              <th style={styles.tableHeader}>When to apply</th>
              <th style={styles.tableHeader}>Arrival in the UK</th>
              <th style={styles.tableHeader}>Visa Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Student Visa UK</td>
              <td style={styles.tableCell}>
                Students aged 16 or over who have been offered a place in a
                course at a UK educational institution
              </td>
              <td style={styles.tableCell}>
                Three months before the start of your course
              </td>
              <td style={styles.tableCell}>
                Up to one week before if your course lasts six months or fewer.
                Up to one month before if your course lasts more than six months
              </td>
              <td style={styles.tableCell}>GBP 490</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *For detailed information, please visit the{" "}
          <a
            href="https://www.gov.uk/browse/visas-immigration/work-visas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gov.UK website
          </a>
        </p>

        <h2 style={styles.sectionTitle}>Cost of studying in the UK</h2>
        <p style={styles.paragraph}>
          Your expenditure on tuition fees depends on the type of qualification
          and university or school you opt for. There are many high-ranking
          universities and colleges in the UK with their own fee structures.
          Here’s the basic cost of studying.
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Study Program</th>
              <th style={styles.tableHeader}>Average fee (in Euros*)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Undergraduate bachelor’s degree</td>
              <td style={styles.tableCell}>
                GBP 10,000 to GBP 20,000 per year
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>Postgraduate master's degree</td>
              <td style={styles.tableCell}>
                GBP 10,000 to GBP 20,000 per year
              </td>
            </tr>
            <td style={styles.tableCell}>3</td>
            <td style={styles.tableCell}>Doctoral degree</td>
            <td style={styles.tableCell}>GBP 15,000 to GBP 24,000 per year</td>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *Please note that: all figures are indicative and Ph.D. costs might
          differ as fully funded options are also available in the UK
        </p>

        <h2 style={styles.sectionTitle}>Scholarships to study in the UK</h2>
        <p style={styles.paragraph}>
          The amount of money available and the type of award varies between
          institutions. Certain research programs may provide up to 100% of the
          tuition fee besides covering a part of your living expenditures. Here
          are some popular government scholarship programs you can apply to
          study in the UK as a Nepalese student:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>S.no</th>
              <th style={styles.tableHeader}>Name of the scholarship</th>
              <th style={styles.tableHeader}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>1</td>
              <td style={styles.tableCell}>Chevening Scholarship</td>
              <td style={styles.tableCell}>
                Supports talented professionals who have shown prior leadership
                skills and exceptional performance in their respective fields.
                With Chevening, you can apply for a scholarship or fellowship,
                the selection of which is done by the high commission and
                British embassies.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>
                Commonwealth Scholarship and Fellowship
              </td>
              <td style={styles.tableCell}>
                The Commonwealth scholarship aims to give international students
                from commonwealth countries a chance to pursue postgraduate
                degrees in the UK. Basically, the scholarship scheme caters to
                students from commonwealth nations to study in the UK.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>GREAT Scholarship</td>
              <td style={styles.tableCell}>
                This scholarship is jointly funded by the UK Government’s GREAT
                Britain Campaign and the British Council under the Study UK
                campaign. This program includes 99 postgraduate scholarships
                from 36 UK universities in a variety of subjects. However, for
                Nepalese students, 12 of the UK higher education institutions
                are offering 13 postgraduate scholarships.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>Scotland Saltire Scholarships</td>
              <td style={styles.tableCell}>
                Scotland’s Saltire Scholarships is a scholarship program of the
                Scottish Government in collaboration with Scottish universities
                offered in the areas of creative industries, technology,
                science, medical sciences, healthcare, and renewable and clean
                energy.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *This is an indicative list, speak with your AIEC counsellor for
          details and the best available options suited to your profile.
        </p>

        <h2 style={styles.sectionTitle}>Intakes in the UK</h2>
        <p style={styles.paragraph}>
          Colleges and universities in the UK offer two major intakes, but few
          of the universities also offer summer intakes for international
          students.
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Intakes</th>
              <th style={styles.tableHeader}>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Autumn/Fall intake</td>
              <td style={styles.tableCell}>September to December</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Spring intake</td>
              <td style={styles.tableCell}>January to April</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Summer intake</td>
              <td style={styles.tableCell}>April to June</td>
            </tr>
          </tbody>
        </table>
        <h2 style={styles.sectionTitle}>IELTS for studying in the UK</h2>
        <p style={styles.paragraph}>
          If you intend to pursue higher education at the undergraduate or
          postgraduate level or work in a professional organisation in an
          English-speaking country, you are required to take the IELTS Academic
          exam. The IELTS score for UK universities ranges between band 6 -7.5.
        </p>

        <h2 style={styles.sectionTitle}>
          How much gap is accepted for study in the UK?
        </h2>
        <p style={styles.paragraph}>
          Universities and educational institutions in the UK may have their own
          policies and preferences regarding gap years. Some universities may
          prefer students to take a gap year for personal development, work
          experience, or travel, while others may prefer students to enter their
          programs immediately after completing their previous qualifications.
          Mostly UK universities accept a gap of 2 years. However, it's
          essential to check the specific admission requirements and policies of
          the universities or courses you are interested in, as these can vary.
        </p>

        <h2 style={styles.sectionTitle}>Top universities to study in the UK</h2>
        <p style={styles.paragraph}>
          When deciding which university to study at, it is crucial that you
          also look at the world university rankings. This helps you compare and
          understand where a university ranks and how your desired institution
          fares on the global map. Here are the top UK universities according to
          QS World University Rankings 2024
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
              <td style={styles.tableCell}>University of Oxford</td>
              <td style={styles.tableCell}>3</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>University of Cambridge </td>
              <td style={styles.tableCell}>2</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>Imperial College London</td>
              <td style={styles.tableCell}>6</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>UCL (University College London)</td>
              <td style={styles.tableCell}>9</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>5</td>
              <td style={styles.tableCell}>The University of Edinburgh</td>
              <td style={styles.tableCell}>22</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>6</td>
              <td style={styles.tableCell}>The University of Manchester</td>
              <td style={styles.tableCell}>32</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>7</td>
              <td style={styles.tableCell}>King's College London</td>
              <td style={styles.tableCell}>40</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>8</td>
              <td style={styles.tableCell}>
                London School of Economics and Political Science (LSE)
              </td>
              <td style={styles.tableCell}>45</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>9</td>
              <td style={styles.tableCell}>The University of Warwick</td>
              <td style={styles.tableCell}>67</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>10</td>
              <td style={styles.tableCell}>University of Bristol</td>
              <td style={styles.tableCell}>55</td>
            </tr>
          </tbody>
        </table>
        <h2 style={styles.sectionTitle}>
          Eligibility requirements to study in the UK for students from Nepal
        </h2>
        <p style={styles.paragraph}>
          Eligibility requirements to study in the UK for students from Nepal
          are generally similar to those for students from other countries. Here
          are the key eligibility criteria and steps you should consider:
        </p>
        <ul style={styles.courseList}>
          <li>Choose a course and university</li>

          <p style={styles.paragraph}>
            Select the course and university you want to attend. Ensure that the
            university and the specific program you are interested in are
            recognised and accredited.
          </p>
          <li>English language proficiency</li>
          <p style={styles.paragraph}>
            Most UK universities require proof of English language proficiency,
            typically through standardised tests like IELTS. Check the specific
            English language requirements of the university and program you're
            applying to.
          </p>
          <li>Academic qualifications:</li>
          <p style={styles.paragraph}>
            You'll need to provide evidence of your academic qualifications.
            This usually includes transcripts, certificates, and sometimes a
            diploma.
          </p>
          <li>Funding</li>
          <p style={styles.paragraph}>
            You'll need to demonstrate that you have sufficient funds to cover
            tuition fees, living expenses, and any other related costs. The
            exact amount may vary depending on the university and your chosen
            location in the UK.
          </p>
          <li>Visa requirements</li>
          <p style={styles.paragraph}>
            You'll likely need a Student Visa (Tier 4) to study in the UK. To
            obtain a student visa, you'll need a Confirmation of Acceptance for
            Studies (CAS) from your chosen university, proof of funds, and meet
            other visa requirements. Check the official website of the UK Visa
            and Immigration (UKVI) for the latest visa requirements and
            application procedures.
          </p>
          <li>Health insurance</li>
          <p style={styles.paragraph}>
            Ensure you have adequate health insurance coverage while studying in
            the UK
          </p>
          <li>Personal statement</li>
          <p style={styles.paragraph}>
            Many universities require a personal statement or statement of
            purpose as part of your application. This document should explain
            your motivation for studying in the UK and why you're a suitable
            candidate for the course.
          </p>
          <li>References</li>
          <p style={styles.paragraph}>
            Some universities may ask for references or letters of
            recommendation. Make sure to provide these as required.
          </p>
          <li>Application deadlines</li>
          <p style={styles.paragraph}>
            Different universities and courses have varying application
            deadlines, so be sure to check and adhere to them.
          </p>
          <li>Interviews</li>
          <p style={styles.paragraph}>
            Some universities or programs may require interviews as part of the
            application process
          </p>
          <li>Immigration rules</li>
          <p style={styles.paragraph}>
            Stay informed about the latest immigration and visa rules and
            regulations, which can change over time.
          </p>
        </ul>
        <h2 style={styles.sectionTitle}>Top courses to study in the UK</h2>
        <p style={styles.paragraph}>
          With world-class universities experienced faculties, and multiple
          opportunities in different fields, the UK is a top choice among
          international students. Know all the popular courses at UK
          universities so you can make the best of your career choice.
        </p>
        <ul style={styles.courseList}>
          <li>Business management</li>
          <li>Engineering and technology</li>
          <li>Medicine</li>
          <li>Law Course</li>
          <li>Social Sciences</li>
          <li>Media and communication</li>
        </ul>
        <h2 style={styles.sectionTitle}>Job prospects in the UK</h2>
        <p style={styles.paragraph}>
          The UK is a hub of opportunities for international students. According
          to the data from the World Bank, the UK is the 5th largest economy in
          the world, which makes it a perfect place for building a successful
          career.
        </p>
        <h2 style={styles.sectionTitle}>Highest-paying degrees in the UK</h2>
        <p style={styles.paragraph}>
          With a huge job market, UK universities offer some popular degree
          courses that are in demand in the job market, and professionals in the
          fields are paid well. Here are the highest-paying degrees in the UK.
        </p>
        <ul style={styles.courseList}>
          <li>MBA</li>
          <li>Executive MBA</li>
          <li>Masters in finance</li>
          <li>LLM</li>
          <li>Doctorate</li>
        </ul>

        <h2 style={styles.sectionTitle}>
          Popular sectors with job opportunities in the UK
        </h2>
        <p style={styles.paragraph}>
          There are various career opportunities post-graduation for
          international students studying in the UK. Here are the popular fields
          you can opt for higher education:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}> </th>
              <th style={styles.tableHeader}></th>
              <th style={styles.tableHeader}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Law</td>
              <td style={styles.tableCell}>Pharmaceuticals and Biotech</td>
              <td style={styles.tableCell}>
                Consulting and professional services
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Public sector and education</td>
              <td style={styles.tableCell}>Charity and not profit</td>
              <td style={styles.tableCell}>Apps, web, and e-commerce</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Retail and trade</td>
              <td style={styles.tableCell}>Consumer goods</td>
              <td style={styles.tableCell}>Service, tourism, restaurants</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Sports, culture, and recreation</td>
              <td style={styles.tableCell}>
                Energy, Mining, Chemicals, Environmental
              </td>
              <td style={styles.tableCell}>Transportation and logistics</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Media and communication</td>
              <td style={styles.tableCell}>Health care</td>
              <td style={styles.tableCell}>Construction and real estate</td>
            </tr>
          </tbody>
        </table>

        <h2 style={styles.sectionTitle}>Cost of living in the UK</h2>
        <p style={styles.paragraph}>
          Here’s a list of the minimum monthly amount you should expect for
          living expenses in the UK for International Students:
        </p>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}> Expenses</th>
              <th style={styles.tableHeader}>Monthly cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Bills (electric/ gas/ water)</td>
              <td style={styles.tableCell}>£40 - £50</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Food and housekeeping</td>
              <td style={styles.tableCell}>£160 - £200</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                TV license (mandatory with TV or watching BBC online)
              </td>
              <td style={styles.tableCell}>£12.56 (or £150.50 per year)</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Mobile phone</td>
              <td style={styles.tableCell}>£15 - £50</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Clothes and shoes</td>
              <td style={styles.tableCell}>£25</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Leisure and sports (calculated on membership for the students’
                sports centre)
              </td>
              <td style={styles.tableCell}>£10 - £20</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Books and stationery</td>
              <td style={styles.tableCell}>£21</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Socialising</td>
              <td style={styles.tableCell}>£120</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Travel and transport (based on the monthly cost of a student bus
                pass)
              </td>
              <td style={styles.tableCell}>£32</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Childcare (if needed)</td>
              <td style={styles.tableCell}>£656</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          Please note that all figures are indicative.
        </p>

        <p style={styles.sectionTitle}>Frequently Asked Questions (FAQs):</p>
        <p style={styles.paragraph}>
          Beginning the application process may feel like a complicated process,
          so we have answered some commonly asked question about studying and
          living in the UK.
        </p>
        <p style={styles.section}>Ques 1: Is studying in the UK affordable?</p>
        <p style={styles.paragraph}>
          Ans:British universities are known for their high tuition costs, but
          it's worth noting that there are several affordable options for
          students looking to pursue their education in the UK.
        </p>
        <p style={styles.section}>
          Ques 2: Is studying in the UK worth it for international students?
        </p>
        <p style={styles.paragraph}>
          Ans: Actually, based on the QS Graduate Employability Rankings,
          graduates from the UK are some of the most in-demand employees
          globally. Plus, international students can stay in the UK for up to 2
          years after they graduate (3 years if they did a PhD) to work or find
          a job.
        </p>

        <p style={styles.section}>Ques 3: How can I come to the UK to study?</p>
        <p style={styles.paragraph}>
          Ans: If you are 16 years or older and meet the following criteria, you
          are eligible to apply for a Student visa to study in the UK:
        </p>
        <ul style={styles.courseList}>
          <li>
            Have received an offer for a course from an authorised student
            sponsor.
          </li>
          <li>
            Possess adequate funds to sustain yourself and cover your course
            expenses, with the required amount varying depending on your
            situation.
          </li>
          <li>
            Demonstrate proficiency in speaking, reading, writing, and
            understanding the English language.
          </li>
        </ul>
        <p style={styles.section}>Ques4: Is IELTS required for the UK?</p>
        <p style={styles.paragraph}>
          Ans: Certainly, you can pursue studies in the UK without the need for
          an IELTS score. To do so, you can fulfil English language proficiency
          requirements in several alternative ways. These options may include
          demonstrating a high school English score of over 70%, participating
          in an online interview arranged by the university, or providing
          evidence that English was the primary medium of instruction at your
          previous school. But We suggest you check with the universities for an
          IELTS waiver, as some may require IELTS as a mandate.
        </p>
        <ExploreinUk />
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
    fontWeight: "bold",
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

export default Studyinuk;
