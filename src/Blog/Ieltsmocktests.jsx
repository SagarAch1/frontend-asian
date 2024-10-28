import React from "react";
import FormPage from "../Pages/Homepage/FormPage";
import "./Blog.css"; // Link to updated CSS styles

const Ieltsmocktest = () => {
  return (
    <div className="blog-container">
      {/* Top Section */}
      <div className="header-section">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
          alt="Consultancy"
          className="blog-header-image"
        />
        <div className="blog-header-text">
          <h1>Why We Are The Best Consultancy</h1>
          <p>
            Asian Education Consultancy - Guiding Students to Their Dream
            Universities Across the Globe
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-content">
        <div className="blog-date">
          <span>October 16, 2024</span>
        </div>

        <div className="blog-main">
          <h2>Studying Abroad</h2>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
            alt="Blog image"
            className="blog-main-image"
          />
        </div>

        {/* Additional Content - Inserted Section */}
        <div className="additional-section">
          <h3>The International English Language Testing System (IELTS)</h3>
          <p>
            The International English Language Testing System (IELTS) plays a
            pivotal role as an initial prerequisite for both Nepalese students
            and professionals aspiring to explore opportunities abroad. The
            escalating demand for proficient IELTS tutoring in Kathmandu
            parallels the necessity to showcase competence in the English
            language.
          </p>

          <h3>The Importance of Mock Tests</h3>
          <p>
            Mock tests resemble the real IELTS experience and have multiple
            benefits:
          </p>
          <ul>
            <li>
              Familiarity: Get acquainted with the test’s structure, time
              limits, and question styles.
            </li>
            <li>
              Self-Assessment: Identify your strengths and weaknesses to better
              focus your preparation.
            </li>
            <li>
              Time management: Work on efficiently managing your time to each
              area.
            </li>
            <li>
              Reduced worry: Familiarize yourself with the format ahead of time
              to alleviate test-day worry.
            </li>
            <li>
              Exposure: To expand your knowledge, experiment with various
              subjects and inquiry formats.
            </li>
          </ul>

          <h3>
            Asian International Education: Your IELTS Partner in Kathmandu
          </h3>
          <p>
            The Asian International Education program exceeds the stipulated
            benchmarks of conventional mock examinations. Our cadre of educators
            not only possesses considerable expertise but also imparts valuable
            insights pertinent to both linguistic nuances and examination
            strategies. Face-to-face feedback sessions facilitate the
            discernment of individual strengths and weaknesses, while our online
            platform furnishes supplementary resources including practice
            materials and expert guidance. Elevate your level of readiness to
            meet and surpass expectations.
          </p>

          <h3>Format of Mock Tests</h3>
          <p>
            <strong>Computer-delivered vs paper-based:</strong>
          </p>
          <ul>
            <li>
              Computer-delivered: With its flexibility and instant grading, this
              is growing in popularity. There’s a chance you’ll find interfaces
              and question kinds that resemble the real test.
            </li>
            <li>
              Paper-based: This is the traditional format, which imitates the
              texture of a real test that takes place on paper.
            </li>
          </ul>

          <h3>Testing All 4 Modules – Listening, Reading, Writing, Speaking</h3>
          <p>
            <strong>Listening:</strong> Take in a variety of listening passages
            with different accents and settings. Practice finding important
            details, finishing chores, and figuring out the speaker’s main
            point.
          </p>
          <p>
            <strong>Reading:</strong> Work through a variety of reading passages
            from scholarly and popular sources. Develop skills in information
            summarization, understanding of diverse writing styles, and response
            to a range of examination varieties.
          </p>
          <p>
            <strong>Writing:</strong> Work on writing assignments using Task 1
            and Task 2 forms, emphasizing proper grammar and vocabulary,
            meaningful topics, and well-organized writing.
          </p>
          <p>
            <strong>Speaking:</strong> To imitate the genuine examination
            experience, do a one-on-one speaking test with a certified examiner.
            Get criticism on your pronunciation, grammar, vocabulary, and
            fluency.
          </p>

          <h3>Per Section Timing and Total Test Duration</h3>
          <p>
            Our mock tests accurately replicate the official IELTS timing
            structure:
          </p>
          <ul>
            <li>Listening: 30+10 = 40 minutes</li>
            <li>Reading: 60 minutes</li>
            <li>
              Writing: 60 minutes (20 minutes for Task 1, 40 minutes for Task 2)
            </li>
            <li>
              Speaking: 11-14 minutes (including introduction, interview, and
              discussion)
            </li>
          </ul>
          <p>
            Total Test Duration: Approximately 2 hours and 45 minutes, including
            short breaks between sections.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a6.Webp`}
            alt="Additional image"
            className="bottom-image"
          />
          <h3>Benefits of Taking an IELTS Mock Test</h3>
          <ul>
            <li>
              Diagnostic performance reports and comments: The Listening,
              Reading, Writing, and Speaking sections of mock examinations give
              you important information about your strengths and shortcomings in
              each area.
            </li>
            <li>
              Experiencing real test conditions: Mock exams replicate the real
              exam atmosphere, complete with time limits, question types, and
              exam pressure.
            </li>
            <li>
              Working on test strategies: You may practice and improve your
              test-taking techniques using mock tests.
            </li>
          </ul>
        </div>

        <div className="additional-section">
          <h3>Conclusion</h3>
          <p>
            Mock tests are essential in preparing for the IELTS, providing
            diagnostic performance reports, real test conditions, and
            opportunities to refine strategies. Choose a reliable IELTS mock
            test provider in Kathmandu to boost your confidence and track
            progress.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <FormPage />
      </div>
    </div>
  );
};

export default Ieltsmocktest;
