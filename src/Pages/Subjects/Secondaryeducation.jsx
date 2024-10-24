import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SecondaryEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
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
      title: "About Secondary Education",
      content1:
        "Secondary Education includes middle and high schools, or grades 7 to 12. For those looking to get a high school teaching degree or a middle school teaching degree, the Secondary Education major covers both high school and middle school with a single Bachelor’s of Science (BS) in Secondary Education.",
      content2:
        "Students who earn a degree in Secondary Education will be able to teach at different levels of education including both middle and high school. Students will specialise in their certification by subject area ranging from Mathematics and Science to Language.",
      
    },
    {
      title: "Is Secondary Education right for me?",
      content:
        "High school teachers tend to be socially active, which means they are empathetic, compassionate, cooperative, patient, tactful, and friendly. They must also possess high levels of creativity and communication skills. A degree in Secondary Education will help you hone your skills. During the programme you will get in-depth knowledge about your field work. You’ll start with general education courses, then pre-professional courses, then content courses in which you’ll build a broad knowledge base for your future classroom, and professional education courses where you’ll connect theory with practice and learn how to teach your future students. Secondary Education programmes will include placements in local schools where you can get real hands-on experience of working in the classroom. ",
    
    },
    {
      title: "Study options and costs",
      content1:
        "You can undertake Secondary Education-focused degrees at most levels of study, including bachelor’s, master’s and PhD. To undertake this degree you must complete high school first. Thereafter you can enroll for a bachelor’s in Secondary Education. As part of a bachelor’s degree, you can major or minor in Secondary Education over four years, with the opportunity to study modules in the subject you want to teach. The program spans four years and typically costs up to $56,512 for international students.",
      content2:
        "Postgraduate degrees can be either an MSc (Master’s of Science) or MA (Master’s of Arts) depending on what area you want to specialise in. Total program duration is two years and the average annual tuition fee is $18,548 in the US.",
        content3:"PhDs are usually designed for teachers who want to conduct further research in education. You could also study for an EdD (Doctor of Education), which tends to focus on administrative topics, like curriculum and policy.",
    },
    {
      title: "Future outlook",
      content:
        "Employment of secondary education teachers is projected to grow by 8% in this decade, about as fast as the average for all occupations. Projected job openings for high school teachers are likely to be 77,400 every year, for next ten years. Rising student enrollment shall also increase demand for secondary education teachers, but employment growth will vary by region. The average annual salary for secondary education teachers is $61,820.These statistics illustrate the bright prospects available to Secondary Education graduates.",
    },
    {
      title: "Career pathways for Secondary Education",
      subtitle1: "High School Teacher",
      content1:
        "High school teachers provide instruction, guidance, and grading to students in high school, helping students to become prepared for their lives after graduation. Teachers are required to have a bachelor's degree in Secondary Education or a related field, and some states also require teachers to have another area of concentration such as Mathematics or Language. The average annual salary for high school teachers is $62,870.",
      subtitle2: "Instructional coordinator",
      content2:
        "Instructional coordinators create and oversee materials used in education, curriculums and standards for teachers. Instructional coordinators also evaluate existing curriculums and methods, as well as train staff and teachers for new or revised programs. Instructional coordinators usually need a master's degree in an educational field along with related work experience, such as teaching. The average annual salary for an instructional coordinator is $61,603.",
      subtitle3: "Middle school teacher",
      content3:
        "Middle school teachers typically work with students in grades sixth, seventh, and eighth. Some middle school teachers may cover a wide variety of subjects, while others may specialise in one or more areas, such as Science. Requirements vary by region/country but most schools accept bachelor's degrees in Secondary Education. The average annual salary for a middle school teacher is $49,690.",
      subtitle4: "Teacher assistant",
      content4:"Teacher assistants work with licensed teachers and monitor, teach, grade, and assist students. These assistants typically need an associate's degree or two years of coursework in college. For individuals who have a bachelor's degree in Secondary Education, a teacher assistant position enables them to gain valuable experience that can help them move up to higher teaching positions. The average annual salary of a teacher assistant is $28,900.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Secondary Education abroad</h1>
        <p>
          A degree in Secondary Education is designed to train you to become a
          high school teacher or a middle school teacher, usually in a specific
          content area such as Mathematics, History, Science or Language.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated worth of the secondary education
            industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>$61,820: average annual salary of a secondary
            school teachers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary of top secondary school
            teachers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>77,400 projected job openings every year over the
            decade
          </p>
        </div>
      </div>

      {/* FAQ section */}
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
                {/* Check for subtitles and content */}
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
                {item.content && <p>{item.content}</p>}

                {/* For items with single content */}
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

export default SecondaryEducation;
