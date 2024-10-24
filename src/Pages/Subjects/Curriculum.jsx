import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const CurriculumandEducation = () => {
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
      title: "About Curriculum and Education Studies",
      content:
        " Curriculum and Education Studies encompasses a wide variety of courses. This study enables students to channel their creativity into developing curricula and methods of teaching that engage students and help them grow academically and professionally. This subject can be studied at the bachelor’s, master’s and doctorate level. The usual course work focuses on educational trends, educational psychology, group dynamics and human development.",
     
    },
    {
      title: "Is  CurriculumandEducation right for me?",
      content:
        "Pursuing Curriculum and Education Studies is an ideal fit for someone with a nurturing personality. This degree will imbue students with qualities of patience, communication, critical thinking, discipline, creativity and organisation. All of these qualities help academics bond with their students and help them convey their lessons with more clarity. Other key competencies students can expect to develop are writing skills and computer literacy skills. These skills ensure that a wide variety of career opportunities will be available to the students of this programme. If you are inclined towards the educational sector or just want to foster the aforementioned qualities in yourself, then this field of study is apt for you.",
     
    },
    {
      title: " Study options and costs",
      content1:
        "After completing high school, students can enrol in a Curriculum and Education Studies programme at the bachelor’s level. The duration of this programme is 4 years. The general coursework for a bachelor’s in Curriculum and Education Studies contains the following core subjects: Pedagogy, Educational Psychology, Educational Policy and Leadership, Lesson Planning, Social Justice, Special Education, Instructional Technology, Foundations of Curriculum, Theory and Practice in Teaching Diverse Populations, and Teachers as Leaders and Learners. The average cost of this degree is $21,000-$28,000 per year in the US.",
      content2:
        "This subject can also be studied at the master’s level. The duration of this programme is 2 years and usually culminates with a thesis. The general coursework includes the following core areas of study: Counsellor Education, Higher Education and Student Affairs, Adult Education, Religious Education, Media and Technology. Students leaning towards curriculum development will focus on advanced educational psychology, adolescent development, and the teaching of composition and foreign education. Students may also choose any of the above-mentioned areas as the focal point of their thesis. The average cost of this degree is $25,000-$28,000 per year in the US.",
        content3:"Pursuing this degree on a doctoral level will prepare students for research and positions of professors in universities. The duration of this programme is 3-4 years. This degree is research-based and any of the following subjects can be chosen: Educational Administration and Policy, Educational Psychology, Language and Linguistics, Early Childhood Education and Special Education. The curriculum development programme may also include classes on STEM Education, Instructional Leadership and Adult Education. The total cost of pursuing this degree at the doctoral level on average is $111,900 in the US.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, employment in education and training occupations is expected to increase by 10% from 2020 to2030, adding an estimated 920,500 jobs. This increase is expected due to higher enrolment of students in schools, colleges and universities, leading to an overall demand for education professionals. The high demand for education professionals promises a bright future for Curriculum and Education Studies graduates.",
    },
    {
      title: "Career pathways for Curriculum and Education Studies graduates",
      subtitle1: "Career Counsellor",
      content1:
        "A career counsellor identifies factors that influence career development and advises people on reaching their career goals. They can work with students, recent graduates and professionals who need help understanding their abilities, values and interests. They also help to locate appropriate career resources and develop strategies unique to each person they assist. Their average salary in the US is $47,250 per year.",
      subtitle2: "Curriculum Specialist",
      content2:
        "A curriculum specialist collaborates and guides classroom teachers in their lesson planning. They analyse student performance and may develop new curricula like workbooks, textbooks and lesson structures based on analysis of student data. Their average salary in the US is $70,260 per year.",
      subtitle3: "Education Consultant",
      content3:
        "They serve as advisors in education-related matters. They train different members of the educational community on new educational trends, new technologies and student achievements. Education consultants analyse curricula, conduct resource inventory and look at how student and teacher performances align with their goals. Their average salary in the US is $76,000 per year.",
        subtitle4: "Instructional designer",
      content4:"Instructional designers develop and evaluate curricula as they have a robust understanding of principles of pedagogy and help develop new methods to keep the students engaged and interested. They also guide other teachers on how to implement these techniques in their classes. Their average salary in the US is $82,000 per year.",
        subtitle5: "Psychologist",
        content5:"Psychologists study cognitive, emotional, and social processes and behaviour by observing, interpreting, and recording how individuals relate to one another and to their environments. In an educational setup, they work closely with students and teachers to provide them counselling for the betterment of their mental health. Their average salary in the US is $81,000 per year.",
    }
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Curriculum and Education abroad</h1>
        <p>
          If you have an innovative mind that appreciates ingenuity and you want
          to help others grow, then pursuing Curriculum and Education Studies
          might be right for you. This subject focuses on acquiring better
          pedagogical skills and designing improved curricula.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $78.7 billion estimated revenue of the US
            education industry in 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>$57,220: average annual salary for education and
            training occupations
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>920,500 projected job openings this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 10% estimated employment growth in education and
            training occupations this decade
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
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
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

export default CurriculumandEducation;
