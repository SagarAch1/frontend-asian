import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const CurriculumandEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  // Style for the top section with a background image
  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/religious.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "1900px",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
  };

  // Style for the statistics section
  const statisticsSection = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  // Style for individual statistic items
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

  // Style for the icons in the statistics section
  const iconStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Vibrant green color
    marginBottom: "10px",
  };

  // Style for the FAQ section
  const faqSectionStyle = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  // Style for each FAQ item
  const faqItemStyle = {
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  // Style for the FAQ title
  const faqTitleStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
  };

  // Style for the FAQ content text
  const faqContentStyle = {
    padding: "10px 0",
    fontSize: "14px",
    color: "#666",
  };

  // Style for the FAQ subtitles
  const faqSubtitleStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  // FAQ items array with content
  const faqItems = [
    {
      title: "About Curriculum and Education Studies",
      content:
        "Curriculum and Education Studies involves a range of courses aimed at helping students design effective teaching methods and curricula. It enables students to channel their creativity into developing strategies that engage learners and foster growth in both academic and professional realms. This subject is available at the bachelor’s, master’s, and doctorate levels. Common courses explore topics like educational trends, psychology, group dynamics, and human development.",
    },
    {
      title: "Is Curriculum and Education right for me?",
      content:
        "This degree is ideal for individuals with a nurturing and patient personality, as it helps students develop essential skills like critical thinking, communication, organization, and creativity. It enhances writing skills and computer literacy, offering numerous career opportunities. If you're passionate about the educational field or aim to develop these key attributes, this is the perfect field for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "After high school, students can begin a 4-year bachelor's degree in Curriculum and Education Studies. Core subjects include Pedagogy, Educational Psychology, Leadership, Lesson Planning, Special Education, and more. The average tuition for this program is $21,000-$28,000 per year in the US.",
      content2:
        "At the master’s level, this program lasts 2 years and includes a thesis. Core subjects include Counsellor Education, Higher Education, Adult Education, and Media Technology. Students can also focus on curriculum development or educational psychology. The average cost is $25,000-$28,000 per year in the US.",
      content3:
        "At the doctoral level, which lasts 3-4 years, students focus on research and teaching roles. Topics include Educational Administration, Psychology, Language Studies, Early Childhood Education, and more. The typical cost for a doctoral degree is around $111,900 in the US.",
    },
    {
      title: "Future outlook",
      content:
        "Employment in education and training occupations is projected to grow by 10% from 2020 to 2030, adding approximately 920,500 jobs due to higher student enrollment and a demand for education professionals. This trend suggests a bright future for graduates in Curriculum and Education Studies.",
    },
    {
      title: "Career pathways for Curriculum and Education Studies graduates",
      subtitle1: "Career Counsellor",
      content1:
        "Career counsellors help individuals develop career paths by analyzing their skills, values, and interests. They guide students, graduates, and professionals toward achieving their career goals. Average salary: $47,250 per year in the US.",
      subtitle2: "Curriculum Specialist",
      content2:
        "Curriculum specialists support teachers by designing lesson plans, analyzing student performance, and developing instructional materials. Average salary: $70,260 per year in the US.",
      subtitle3: "Education Consultant",
      content3:
        "Education consultants advise schools and educational organizations on trends, technologies, and student performance. Average salary: $76,000 per year in the US.",
      subtitle4: "Instructional Designer",
      content4:
        "Instructional designers develop and assess teaching materials and guide teachers in implementing new techniques. Average salary: $82,000 per year in the US.",
      subtitle5: "Psychologist",
      content5:
        "Psychologists work to understand cognitive and emotional behaviors, offering counseling services to students and teachers to support mental health. Average salary: $81,000 per year in the US.",
    },
  ];

  return (
    <div>
      {/* Header Section with Background Image */}
      <div style={sectionStyle}>
        <h1>Study Curriculum and Education Abroad</h1>
        <p>
          If you're passionate about fostering creativity and growth in others, pursuing Curriculum 
        </p>
        <p>and Education Studies might be for you. This field focuses on developing strong </p>
        <p>pedagogical skills and designing curricula that support effective learning.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>$78.7 billion estimated revenue of the US education industry in 2021</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>$57,220: average annual salary for education and training occupations</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>920,500 projected job openings this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>10% estimated employment growth in education occupations this decade</p>
        </div>
      </div>

      {/* FAQ Section */}
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
                {/* Display subtitles and content */}
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
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

export default CurriculumandEducation;
