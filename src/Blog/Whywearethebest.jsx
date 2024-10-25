import React from "react";
import "./Blog.css"; // Link to updated CSS styles
import FormPage from "../Pages/Homepage/FormPage";
import Footer from "../Pages/Homepage/Footer";
const Blog = () => {
  return (
    <div className="blog-container">
      {/* Top Section */}
      {/* <div className="header-section">
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
      </div> */}

      {/* Blog Section */}
      <div className="blog-content">
        <div className="blog-date">
          <span>October 16, 2024</span>
        </div>

        <div className="blog-main">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`}
            alt="Blog image"
            className="blog-main-image"
          />
          <h2>Studying Abroad</h2>
          <p>
            Studying abroad is a dream for many Nepali students, offering a
            pathway to global opportunities and advanced education. However, the
            journey from dreaming to reality requires careful planning, test
            preparation, and the right guidance. Asian Education stands out as
            one of the best consultancies in Nepal for students who aspire to
            study in top universities worldwide. Here’s how Asian Education can
            help you achieve your study abroad goals and make the process
            smoother and more effective.
          </p>
        </div>

        {/* Additional Content - Inserted Section */}
        <div className="additional-section">
          <h3>Expert Guidance on Study Abroad</h3>
          <p>
            Asian Education provides expert advice on every step of the study
            abroad process. From choosing the right country and university to
            submitting your application, our counselors guide you in making
            informed decisions based on your career goals and academic
            interests.
          </p>

          <h3>Comprehensive Test Preparation</h3>
          <p>
            Preparing for standardized tests like the IELTS, TOEFL, and GRE is
            essential for students aiming to study abroad. Asian Education
            offers comprehensive test preparation programs with personalized
            coaching, mock tests, and tips to improve your scores, ensuring you
            meet the requirements for top global universities.
          </p>

          <h3>Tailored University Applications</h3>
          <p>
            The university application process can be overwhelming, but with
            Asian Education’s experienced counselors, you can ensure that your
            application stands out. We help you with writing personal
            statements, gathering recommendation letters, and submitting
            applications on time.
          </p>

          <h3>Visa and Financial Assistance</h3>
          <p>
            Securing a student visa and managing finances can be complex aspects
            of studying abroad. Asian Education helps students with visa
            guidance, financial aid applications, and scholarships, making the
            process stress-free.
          </p>

          <h3>Ongoing Support for Students</h3>
          <p>
            Our support doesn’t end once you’ve secured admission. Asian
            Education continues to assist students even after they’ve arrived at
            their chosen destination, offering help with accommodation, settling
            in, and adapting to a new academic environment.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/a6.Webp`}
            alt="Additional image"
            className="bottom-image"
          />
          <h3>Why Choose Asian Education?</h3>
          <ul>
            <li>
              Years of Experience: With decades of expertise in education
              consultancy, Asian Education has built a reputation as a trusted
              advisor for Nepali students.Expert Guidance for University
              Applications
            </li>

            <li>
              High Success Rate: Our students have gained admission to top
              universities in the USA, UK, Australia, Canada, and many more.
            </li>

            <li>
              Personalized Service: Each student receives tailored advice and
              support to meet their unique needs and aspirations.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <FormPage />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
