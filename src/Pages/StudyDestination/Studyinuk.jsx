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
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/topp.png)`,
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
          Some of the oldest colleges and universities in the world, dating back
          to the 12th and 13th centuries, are located in the United Kingdom.
          Because of its long history, UK education has established itself as a
          standard for other nations.
        </p>
        <h2 style={styles.sectionTitle}>Top 10 reasons to study in the UK</h2>
        <p style={styles.paragraph}>
          Many students from all over the world find the United Kingdom to be an
          incredibly alluring location when considering higher education
          overseas. Known for their superior teaching abilities, a broad and
          varied student body, as well as a rich tapestry of culture and
          history, the UK provides several strong arguments. to decide to go
          there for your studies:
        </p>

        <ul style={styles.courseList}>
          <li>World-Class Universities</li>
          <p style={styles.paragraph}>
            Some of the top-ranked institutions in the world, known for their
            contributions to research and academic quality, are located in the
            United Kingdom.
          </p>
          <li>Diverse Student Community</li>
          <p style={styles.paragraph}>
            Being a member of a multicultural and varied student body can help
            you develop lifelong friendships and cross-cultural understanding.
          </p>
          <li>Rich Cultural Experiences</li>
          <p style={styles.paragraph}>
            There are many opportunities to study history, art, music, and
            various customs thanks to the UK's thriving culture.
          </p>
          <li>Internationally Recognised Degrees</li>
          <p style={styles.paragraph}>
            UK degrees are highly respected worldwide, enhancing your career
            prospects and global mobility.
          </p>
          <li>Career Opportunities</li>
          <p style={styles.paragraph}>
            Your career may be boosted by the UK's robust job market and
            graduate employment opportunities.
          </p>
          <li>Language Proficiency</li>
          <p style={styles.paragraph}>
            Studying in an English-speaking nation like the UK improves your
            English language proficiency, which is a great advantage in the
            global job market of today.
          </p>
          <li>Historic Landmarks</li>
          <p style={styles.paragraph}>
            Experience the rich history of the United Kingdom by seeing famous
            sites such as Stonehenge, Edinburgh Castle, and the Tower of London.
          </p>
          <li>Research Opportunitie</li>
          <p style={styles.paragraph}>
            For postgraduate students in particular, the UK provides
            state-of-the-art research opportunities and resources.
          </p>
          <li>Scholarships and Funding</li>
          <p style={styles.paragraph}>
            International students have access to a wide range of financial aid
            and scholarship opportunities, which increases educational
            accessibility.
          </p>
          <li>Gateway to Europe</li>
          <p style={styles.paragraph}>
            During your studies, you can easily travel and explore a variety of
            European cultures and attractions thanks to your proximity to
            mainland Europe.
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
                Students that have been accepted into a study at a UK
                educational institution and are at least 16 years old
              </td>
              <td style={styles.tableCell}>
                Three months before the start of your course
              </td>
              <td style={styles.tableCell}>
                If your course lasts six months or less, up to one week prior.
                If your course lasts more than six months, up to one month in
                advance
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
          The type of certification you choose and the institution or school you
          attend will determine how much you pay for tuition. In the UK, there
          are numerous prestigious schools and institutions with unique tuition
          policies. The fundamental cost of learning is as follows.
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
          Institutions differ in the sort of award and the amount of money
          provided. In addition to partially supporting your living expenses,
          some research programs may cover all or even all of your tuition
          costs. Here You can apply to a number of well-known government
          scholarship programs. study as a Nepalese student in the United
          Kingdom:
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
                supports gifted professionals who have demonstrated outstanding
                success in their industries and leadership abilities in the
                past. You can apply for a fellowship or scholarship through
                Chevening. of which the high commission makes the selection and
                British diplomatic missions.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>2</td>
              <td style={styles.tableCell}>
                Commonwealth Scholarship and Fellowship
              </td>
              <td style={styles.tableCell}>
                Giving overseas students from Commonwealth nations the
                opportunity to pursue postgraduate degrees in the UK is the goal
                of the Commonwealth scholarship. In essence, the scholarship
                program serves students to study in the UK from Commonwealth
                countries.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>3</td>
              <td style={styles.tableCell}>GREAT Scholarship</td>
              <td style={styles.tableCell}>
                The British Council's Study UK campaign and the UK Government's
                GREAT Britain Campaign are both contributing to the
                scholarship's funding. There are 99 postgraduate scholarships
                available through this program. from 36 universities in the UK
                in a range of fields. But for Twelve UK higher education
                institutions have Nepalese students. 13 postgraduate
                scholarships are available.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>4</td>
              <td style={styles.tableCell}>Scotland Saltire Scholarships</td>
              <td style={styles.tableCell}>
                The Scottish Government, along with Scottish universities,
                offers scholarships through the Scotland's Saltire Scholarships
                program in the fields of technology, creative industries,
                science, health care, medical sciences, and clean and renewable
                vitality.
              </td>
            </tr>
          </tbody>
        </table>
        <p style={styles.paragraph}>
          *This is only a suggested list; for more information and the best
          solutions for your situation, consult your AIEC counsellor.
        </p>

        <h2 style={styles.sectionTitle}>Intakes in the UK</h2>
        <p style={styles.paragraph}>
          In the UK, colleges and universities provide two main intakes, but a
          small number of them also accept international students during the
          summer.
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
          You must take the IELTS Academic if you plan to work in a professional
          organisation in an English-speaking nation or seek higher education at
          the undergraduate or graduate level. test. For UK universities, the
          IELTS score falls between bands 6 and 7.5.
        </p>

        <h2 style={styles.sectionTitle}>
          How much gap is accepted for study in the UK?
        </h2>
        <p style={styles.paragraph}>
          Regarding gap years, UK universities and other educational
          establishments may have their own rules and preferences. Some colleges
          might encourage students to take a year out for employment or personal
          growth. experience, or journey, yet some might favour that pupils go
          into their programs right away following the completion of their prior
          credentials. The majority of UK universities allow a two-year break.
          But it's vital to review the particular entrance standards and
          guidelines of the colleges or classes that interest you, as these can
          differ.
        </p>

        <h2 style={styles.sectionTitle}>Top universities to study in the UK</h2>
        <p style={styles.paragraph}>
          It is essential to consider the global university rankings while
          choosing which university to attend. This aids in comparing and
          comprehending the rankings of universities and how your preferred
          school stacks up. prices on the world map. These are the best
          institutions in the UK based on The 2024 QS World University Rankings
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
          Students from Nepal must generally meet the same eligibility standards
          as students from other nations in order to study in the UK. The
          following are the main requirements for eligibility and actions you
          should think about:
        </p>
        <ul style={styles.courseList}>
          <li>Choose a course and university</li>

          <p style={styles.paragraph}>
            Decide which university and course you wish to enrol in. Verify the
            recognition and accreditation of the university and the particular
            program you are interested in.
          </p>
          <li>English language proficiency</li>
          <p style={styles.paragraph}>
            The majority of UK colleges demand evidence of English language
            competency, usually in the form of standardised examinations like
            the IELTS. Verify the university's and the program's exact English
            language requirements. submitting an application.
          </p>
          <li>Academic qualifications:</li>
          <p style={styles.paragraph}>
            Proof of your academic credentials will be required. Transcripts,
            certificates, and occasionally a diploma are included in this.
          </p>
          <li>Funding</li>
          <p style={styles.paragraph}>
            You will have to prove that you have enough money to pay for living
            expenses, tuition, and any other associated expenditures. Depending
            on the university and your selection, the precise amount may change.
            place in the United Kingdom.
          </p>
          <li>Visa requirements</li>
          <p style={styles.paragraph}>
            To study in the UK, you'll probably need a Student Visa (Tier 4).
            You will require proof of funding, a Confirmation of Acceptance for
            Studies (CAS) from your selected university, and to complete the
            requirements for a student visa. additional requirements for a visa.
            Visit the UK Visa's official website. & Immigration (UKVI) regarding
            the most recent visa specifications and application processes.
          </p>
          <li>Health insurance</li>
          <p style={styles.paragraph}>
            Ensure you have adequate health insurance coverage while studying in
            the UK
          </p>
          <li>Personal statement</li>
          <p style={styles.paragraph}>
            A personal statement or statement of purpose must be included with
            your application at several universities. This essay should outline
            your reasons for wanting to study in the UK and why you're a good
            fit. potential student for the course.
          </p>
          <li>References</li>
          <p style={styles.paragraph}>
            References or letters of recommendation may be requested by some
            universities. Be careful to supply these as needed.
          </p>
          <li>Application deadlines</li>
          <p style={styles.paragraph}>
            Please be sure you check and follow the application deadlines as
            they differ by university and course.
          </p>
          <li>Interviews</li>
          <p style={styles.paragraph}>
            Interviews could be a requirement for some programs or colleges
            during the application process.
          </p>
          <li>Immigration rules</li>
          <p style={styles.paragraph}>
            Keep up with the most recent immigration and visa laws and
            regulations, as they are subject to change.
          </p>
        </ul>
        <h2 style={styles.sectionTitle}>Top courses to study in the UK</h2>
        <p style={styles.paragraph}>
          The UK is a popular choice for overseas students because of its
          top-notch universities, knowledgeable faculty, and numerous chances in
          various disciplines. Recognise every popular course offered in the UK.
          universities to help you choose the finest career path.
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
          For overseas students, the UK is a centre of opportunity. The UK is
          the world's fifth largest economy, according to World Bank data,
          making it an ideal location for establishing a prosperous business.
          profession.
        </p>
        <h2 style={styles.sectionTitle}>Highest-paying degrees in the UK</h2>
        <p style={styles.paragraph}>
          With a thriving employment market, UK colleges provide popular degree
          programs that are in high demand, and those who work in these
          industries earn good salaries. These are the UK's highest-paying
          degrees.
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
          International students studying in the UK have a variety of
          professional options after graduation. You can choose to pursue
          further education in the following common fields:
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
          The following is a list of the lowest monthly living expenses that
          international students in the UK could anticipate:
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
          We have addressed some frequently asked questions regarding studying
          and living in the UK because starting the application process can seem
          like a difficult procedure.
        </p>
        <p style={styles.section}>Ques 1: Is studying in the UK affordable?</p>
        <p style={styles.paragraph}>
          Answer: Although tuition at British colleges is notoriously expensive,
          it's important to remember that there are a number of reasonably
          priced options for students wishing to continue their education in the
          UK.
        </p>
        <p style={styles.section}>
          Ques 2: Is studying in the UK worth it for international students?
        </p>
        <p style={styles.paragraph}>
          In actuality, UK graduates rank among the most in-demand workers
          worldwide, according to the QS Graduate Employability Rankings.
          Additionally, foreign students are permitted to remain in the UK for a
          maximum of two years following graduation (three years if they
          completed a PhD) to find employment or a job.
        </p>

        <p style={styles.section}>Ques 3: How can I come to the UK to study?</p>
        <p style={styles.paragraph}>
          Answer: You can apply for a student visa to study in the UK if you are
          16 years of age or older and fulfil the requirements listed below:
        </p>
        <ul style={styles.courseList}>
          <li>
            got a course offer from a sponsor who is an authorised student.
          </li>
          <li>
            You should have enough money to support yourself and pay for your
            course fees; the exact amount needed will depend on your
            circumstances.
          </li>
          <li>
            Exhibit fluency in the English language in speaking, reading,
            writing, and comprehension.
          </li>
        </ul>
        <p style={styles.section}>Ques4: Is IELTS required for the UK?</p>
        <p style={styles.paragraph}>
          The answer is that you can study in the UK without having to have a
          high IELTS score. You can accomplish this in a number of different
          ways by meeting the standards for English language competency. These
          choices could consist of exhibiting an English proficiency of more
          than 70% in high school, taking part in a university-sponsored online
          interview, or offering proof that the main language of instruction at
          your school was English former educational institution. However, we
          advise you to enquire with the universities for an IELTS waiver, while
          some can make it mandatory.
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
