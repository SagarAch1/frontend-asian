import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HigherEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/higheredu.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
  };

  const statisticsSection = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statItemStyle = {
    width: "22%",
    textAlign: "center",
    fontSize: "16px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#333",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Change color to make it attractive
    marginBottom: "10px",
  };

  const faqSectionStyle = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqItemStyle = {
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const faqTitleStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
  };

  const faqContentStyle = {
    padding: "10px 0",
    fontSize: "14px",
    color: "#666",
  };

  const faqSubtitleStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  const faqItems = [
    {
      title: "About Higher Education",
      content1:
        "A degree in Higher Education offers a deep understanding of educational theories and effective teaching practices. This qualification prepares individuals for roles in higher education management, policy development, and research. You'll collaborate with an inspiring community of students, professors, and alumni. Depending on whether you pursue a bachelor's or master's, your career prospects will differ. Some individuals pursue a Higher Education degree to become educators themselves!",
      content2:
        "Throughout this program, you will engage in courses such as Education Policy, Educational Leadership, Human Development in Education, Adolescent Psychology, Learning Design, and Curriculum Design.",
    },
    {
      title: "Is Higher Education right for me?",
      content1:
        "Are you passionate about enhancing the quality of higher education and fostering student success? If so, this field may be a perfect fit for you. A Bachelor of Science in Higher Education offers numerous benefits, including flexible schedules and job security for those opting to teach. Administrators enjoy lucrative compensation and robust job growth.",
      content2:
        "If you believe in the power of education to transform lives and want to influence the quality of education in higher institutions, this field will equip you with the skills to realize your goals.",
    },
    {
      title: "Study options and costs",
      content1:
        "After completing your secondary education, you can choose to pursue either a bachelor’s or a master’s degree in Higher Education. Many students pursue a Bachelor of Science in Higher Education, which comes with specific coursework requirements. After completing these, you can focus on a subject related to your career aspirations, such as Higher Education itself. Typically, a bachelor’s degree takes around 4 years to complete. Some universities offer a one-year master's program with various specializations in Higher Education.",
      content2:
        "A master's degree in Higher Education combines practical teaching techniques with advanced coursework. This allows students to explore specific areas within the broader field of higher education.",
      content3:
        "On average, the cost of a master’s program ranges from $20,000 to $25,000. In the United States, international students typically pay around $30,000 annually for a four-year bachelor’s degree. The cost of a master's degree in Higher Education varies based on the specialization chosen.",
    },
    {
      title: "Future outlook",
      content:
        "The demand for higher education professionals is expected to rise due to increasing student enrollments in colleges and universities. More individuals are pursuing higher education to enhance their career prospects. Studies show that individuals with a master’s degree earn higher salaries, and the Department of Education forecasts that by 2020, two-thirds of job openings will require postsecondary education. According to the US Bureau of Labor Statistics, positions for postsecondary education administrators are expected to grow by 10%, faster than the average for most other jobs.",
    },
    {
      title: "Career Pathways for Higher Education graduates",
      subtitle1: "Dean",
      content1:
        "Deans are academic leaders responsible for overseeing all aspects of a school's academic, administrative, and financial operations. They manage recruitment, admissions, and academic development, ensuring high-quality education and academic integrity. Deans play a key role in strategic decisions, representing faculty interests in broader institutional planning.",
      subtitle2: "Higher Education Administrator",
      content2:
        "Higher Education Administrators manage various aspects of university departments, staff, programs, and curriculum. They provide support to faculty and ensure the smooth functioning of the institution by overseeing financial and administrative matters.",
      subtitle3: "Training and Development Manager",
      content3:
        "A Training and Development Manager is responsible for improving the productivity of an institution's staff, including faculty and administrative personnel. This role involves evaluating staff development needs and implementing training programs to enhance technical and behavioral skills.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Higher Education Abroad</h1>
        <p>
          A Higher Education degree prepares individuals to lead academic
          institutions or work
        </p>
        <p>
          in non-profit organizations and government bodies shaping national
          education policies.
        </p>
        <p>
          {" "}
          Alternatively, you can choose to become an educator. The possibilities
          are endless!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>14,500 projected openings for postsecondary
            education administrators annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average salary for a chief academic officer in the
            US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>10% projected growth in postsecondary education
            administrator jobs from 2016-2026
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>Two-thirds of job openings in the coming decade
            will require postsecondary education or training
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => handleToggle(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {item.subtitle1 && (
                  <div style={faqSubtitleStyle}>{item.subtitle1}</div>
                )}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && (
                  <div style={faqSubtitleStyle}>{item.subtitle2}</div>
                )}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && (
                  <div style={faqSubtitleStyle}>{item.subtitle3}</div>
                )}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
                {item.content && <p>{item.content}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      <FormPage />
      <Footer />
    </div>
  );
};

export default HigherEducation;
