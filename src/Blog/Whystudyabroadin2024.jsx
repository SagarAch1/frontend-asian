import React from "react";
import FormPage from "../Pages/Homepage/FormPage";
import "./Blog.css"; // Link to updated CSS styles
const Whystudyabroadin2024 = () => {
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
          <h2>Opening Doors to Global Education: Your Gateway from Nepal</h2>
          <p>
            Globally, people give their best to look for quality education due to
            global interaction and integration. For Nepali students who want to come
            out of their comfort zone and achieve their dream of studying abroad it
            may be highly thrilling as well as challenging to know the way. Our
            consultancy, Asian Education, deals with helping and providing services
            to Nepali students for getting into their choice educational
            institutions in foreign countries.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
            alt="Blog image"
            className="blog-main-image"
          />
        </div>

        {/* Additional Content - Inserted Section */}
        <div className="additional-section">
          <h3>Why Study Abroad?</h3>
          <p>
            Actually learning in another country is not just getting a degree but it
            is a process in which a person changes for the better while expanding
            his or her horizon on culture and career paths. Students acquire useful
            information, create strong connections all over the world and acquire
            competencies that are in high demand in the modern world in the process
            of studying at a new academic institution.
          </p>

          <h3>Access to World-Class Education</h3>
          <p>
            The fact remains that the majority of the notable universities of the
            world are not in Nepal. From prestigious Ivy League universities in the
            USA to the world’s oldest universities in Europe and state-of-the-art
            universities in Asia, education abroad gives access to unimaginable
            education possibilities. These institutions proffer various
            ecclesiastical programs, current infrastructures, and contacts with
            prominent scholars across the numerous disciplines.
          </p>

          <h3>Why Choose Asian Education?</h3>
          <p>
            The entire process of admission in another country, visa formalities,
            and accustoming with different cultures is often a daunting task.
            Therefore, Asian Education’s team of professional counselors is always
            ready to assist learners during application and even before they apply.
            In fact, starting from choosing the proper university, writing powerful
            application essays, or simply searching for the scholarships, we
            personally strive for students’ successful academic dreams.
          </p>

          <h3>Ongoing Support for Students</h3>
          <p>
            The Partnerships for posterity with other educational institutions
            across the globe remain extensive. Today you and I are fortunate to be
            learning from one of the world’s top universities. Thanks to the
            described network, it is possible to provide students with all necessary
            information about each institution, including courses and programs,
            admission criteria, and student life, with the focus on their further
            career choice.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a6.Webp`}
            alt="Additional image"
            className="bottom-image"
          />
          <h3>Our Services</h3>
          <ul>
            <li>Tailored Consultation Services</li>
            <li>Visa and Documentation Support</li>
            <li>Pre-departure Orientation</li>
          </ul>
        </div>
        <div className="additional-section">
          <h3>Success Stories</h3>
          <p>
            This is one of the confirmations that the true test of the success is
            the successes of the graduates. Listen to testimonials from a few Nepali
            students who have been successful in their respective foreign
            universities with the help of us. They are living examples and success
            stories thanks to the international education provided by Asian
            Education.
          </p>
          <h3>Conclusion</h3>
          <p>
            At Asian Education, there is a vision to provide the international
            standard education facility to every Nepali student. With our
            professional assistance, individualized approach, and our core mission
            of students’ success, we strive to help each student to open the doors
            to success and become a leader of tomorrow. Be a part of a new world
            vision by being a student in an international school.
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

export default Whystudyabroadin2024;
