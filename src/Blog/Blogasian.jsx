import React from "react";
import Footer from "../Pages/Homepage/Footer";
import FormPage from "../Pages/Homepage/FormPage";
import "./BlogList.css"; // Link to the updated CSS for styling

const BlogList = () => {
  const handleNavigation = (route) => {
    window.location.href = `/${route}`;
  };

  return (
    <div className="blog-list-container">
      {/* Header Section */}
      <div className="header-section">
        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`} alt="Consultancy" className="blog-header-image" /> */}
      </div>

      {/* Top Section with 4 Items */}
      <div className="blog-row">
        <div
          className="blog-item small"
          onClick={() => handleNavigation("whywearethebest")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/1b.webp`}
            alt="whywearethebest"
          />
          <div className="blog-item-content">
            <h2>Why We Are The Best Consultancy</h2>
            <p>Studying abroad is a dream? | Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("howtochoosetheright")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/blog2.jpg`}
            alt="Business Man"
          />
          <div className="blog-item-content">
            <h3>How To Chose The Right University</h3>
            <p>
              Studying abroad is a dream for many Nepali students, | Mar 17,
              2016
            </p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("testprepfornepalistudents")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/3b.webp`}
            alt="Cars Waiting"
          />
          <div className="blog-item-content">
            <h3>Test Preparation For Nepali Studentst</h3>
            <p> For Nepali students aspiring to | Mar 17, 2016</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("createbalanceinfestival")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a.jpeg`}
            alt="Tablet on Table"
          />
          <div className="blog-item-content">
            <h3>Create Balance Between Festivals And Studies</h3>
            <p>
              How to Balance Study During Dashain and Tihar Festival: Tips for
              Nepali Students | Mar 17, 2016
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with 4 Items */}
      <div className="blog-row">
        <div
          className="blog-item small"
          onClick={() => handleNavigation("choosingthebest")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a1.webp`}
            alt="howtochoosethe"
          />
          <div className="blog-item-content">
            <h3>Choosing The Best Consultancy In Nepal</h3>
            <p>
              A good consultancy doesn’t just stop at university applications |
              Mar 17, 2016
            </p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("chooseusforyourstudy")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a2.webp`}
            alt="Choose Us For Your Study Plan"
          />
          <div className="blog-item-content">
            <h3>Choose Us For Your Study Plan</h3>
            <p>Deciding to study abroad is a | Mar 17, 2016</p>
          </div>
        </div>

        <div
          className="blog-item small"
          onClick={() => handleNavigation("whyyoushoulsstudyinaustralia")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`}
            alt="Why You Should Study In Australia"
          />
          <div className="blog-item-content">
            <h3>Why You Should Study In Australia</h3>
            <p>Australia has become one of the | Mar 17, 2016</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("howtogetbetterscore")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`}
            alt="The Best Consultancy In Nepal"
          />
          <div className="blog-item-content">
            <h3>How To Get A Better IELTS Score 2024</h3>
            <p>Achieving a high IELTS | Mar 17, 2016</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("thebestcounsaltancyinnepal")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`}
            alt="The Best Consultancy In Nepal"
          />
          <div className="blog-item-content">
            <h3>The Best Consultancy In Nepal</h3>
            <p>The International English Language  | Mar 17, 2016</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("ieltstipsfornepalistudents")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`}
            alt="Ielts tips"
          />
          <div className="blog-item-content">
            <h3>The IELTS: Tips for Nepali Students</h3>
            <p>The International English Language  | Mar 17, 2016</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("improveyourvocabulary")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`}
            alt="Ielts tips"
          />
          <div className="blog-item-content">
            <h3>Improve Your Vocabulary For TOEFL 2024</h3>
            <p>Achieving proficiency in English, as measured by   | Mar 17, 2016</p>
          </div>
        </div>
        
        <div
          className="blog-item small"
          onClick={() => handleNavigation("howtostaymotivated")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`}
            alt="Ielts tips"
          />
          <div className="blog-item-content">
            <h3>How To Stay Motivated While Studying 2024
            </h3>
            <p>Stay Motivated During Long Study Sessions:   | Mar 17, 2016</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("essentialstudymaterial")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Essential Study Materials In 2024
            </h3>
            <p>Studying abroad is an exciting opportunity| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("creatingbestschedule")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="creatingbestschedule"
          />
          <div className="blog-item-content">
            <h3>
            Creating The Best Schedule For 2024
            </h3>
            <p>Creating a Study Schedule That Works:| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("howgoodarepractice")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            How Good Are Practice Tests In 2024?
            </h3>
            <p>The Role of Practice Tests in SAT and GRE| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("howtodealwithtest")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            How To Deal With Test Anxiety 2024
            </h3>
            <p>Overcoming Test Anxiety: Strategies | Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("ieltsortofel")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            IELTS vs TOEFL Which Is Best In 2024?
            </h3>
            <p>IELTS vs. TOEFL: Choosing the Right English Proficiency Test for Nepali Student| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("visarequirementfornepalistudents")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Visa Requirements For Nepali Students 2024
            </h3>
            <p>Visa Requirements and Immigration Tips for Nepali Students| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("satvsact")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            SAT vs ACT Which is the best in 2024?
            </h3>
            <p>SAT vs. ACT: Which Test Should Nepali Students Take?| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("bestprogramfornepalistudent")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Best Program For Nepali Students In 2024
            </h3>
            <p>Selecting The Right Program The selection of the right| Dec 05, 2015</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("balancingjobsandstudy")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Balancing Jobs And Studies in 2024
            </h3>
            <p>Balancing Studies and Part-Time Work: Study| July 26, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("managingfinance")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Managing Finances For Further Studies
            </h3>
            <p>The Finances and Financial Planning Concerning Nepali Students | July 25, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("tenbestcourse")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            10 Best Courses to Study in 2024
            </h3>
            <p>Best Courses for Nepali Students to Study Abroad for 2024/2025    | July 22, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("whystudyabroadin2024")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Why Study Abroad in 2024?
            </h3>
            <p>Opening Doors to Global Education: Your Gateway from    | July 21, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("studingabroadindepthlook")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Studying Abroad: An Indepth Look
            </h3>
            <p>  Beyond Borders: Study Abroad In many students’ lives, studying    | July 21, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("feeincreaseforaustralia")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Fee increase for Australian international students
            </h3>
            <p>The Rising Costs of Student Visa Recently    | July 21, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("navigatingenglishproficiency")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            Navigating English Proficiency Tests
            </h3>
            <p>Navigating English Proficiency Tests Guidelines for Achieving High Grades in IELTS   | July 21, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("whatisgoodforsat")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            What Is A Good Score For The SAT?
            </h3>
            <p>What Is A Good Score For The SAT?  | July 21, 2024</p>
          </div>
        </div>
        <div
          className="blog-item small"
          onClick={() => handleNavigation("ieltsmocktest")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`}
            alt="essentialstudymaterial"
          />
          <div className="blog-item-content">
            <h3>
            IELTS Mock Tests in Kathmandu: Boost Your Score with Practice
            </h3>
            <p>The International English Language Testing System (IELTS)  | July 21, 2024</p>
          </div>
        </div>
      </div>

      <FormPage />

      <Footer />
    </div>
  );
};

export default BlogList;
