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
    height: "350px",
    width: "1900px",
    color: "white",
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
      title: "Overview of Secondary Education",
      content1:
        "Secondary Education encompasses both middle and high school levels, ranging from grades 7 to 12. Those seeking a teaching qualification in secondary education will find that the major provides a comprehensive Bachelor’s of Science (BS) degree in Secondary Education that covers both middle and high school education.",
      content2:
        "Students pursuing a degree in Secondary Education will be trained to teach in both middle and high schools. They will also specialize in specific subjects, such as Mathematics, Science, or Language, depending on their certification focus.",
    },
    {
      title: "Is Secondary Education suitable for me?",
      content:
        "High school teachers are typically sociable and possess qualities such as empathy, creativity, patience, and communication skills. A degree in Secondary Education will refine these traits, providing a deep understanding of the subject matter and teaching methodology. The program includes general education courses, content courses for knowledge building, and professional education courses that help bridge theory with real-world teaching practice. Additionally, students will complete placements in local schools for hands-on classroom experience.",
    },
    {
      title: "Study options and tuition",
      content1:
        "Secondary Education degrees are available at various levels, including bachelor's, master's, and PhD programs. A bachelor’s degree in Secondary Education typically spans four years, allowing students to specialize in the subject they wish to teach. The average cost for international students is about $56,512 per year.",
      content2:
        "Postgraduate degrees in Secondary Education can be pursued as a Master’s of Science (MSc) or Master’s of Arts (MA), depending on the desired area of specialization. These programs usually take two years, with an average annual tuition fee of $18,548 in the US.",
      content3:
        "For those interested in further research in education, PhDs are available, or a Doctor of Education (EdD), which focuses more on administrative topics like curriculum development and policy.",
    },
    {
      title: "Job prospects in Secondary Education",
      content:
        "The demand for secondary education teachers is expected to grow by 8% over the next decade, which is on par with the average growth for all occupations. The projected annual job openings for high school teachers will reach approximately 77,400. This growth is driven by an increase in student enrollment and the continued need for qualified educators. The average annual salary for secondary education teachers is $61,820, reflecting the promising career opportunities available in this field.",
    },
    {
      title: "Career options in Secondary Education",
      subtitle1: "High School Teacher",
      content1:
        "High school teachers are responsible for instructing, guiding, and evaluating students in subjects such as Mathematics, History, or Science. To become a high school teacher, a bachelor's degree in Secondary Education or a related field is required. Some states may require additional specialization in subjects like Language or Mathematics. The average annual salary for high school teachers is $62,870.",
      subtitle2: "Instructional Coordinator",
      content2:
        "Instructional coordinators manage and develop educational materials, curricula, and teaching standards. They evaluate existing programs and train teachers on new teaching strategies. A master’s degree in education is typically required, along with teaching experience. Instructional coordinators earn an average salary of $61,603 annually.",
      subtitle3: "Middle School Teacher",
      content3:
        "Middle school teachers typically teach students in grades 6 to 8, often specializing in one or more subjects, such as Science or English. A bachelor's degree in Secondary Education is commonly required for this role. The average annual salary for middle school teachers is $49,690.",
      subtitle4: "Teacher Assistant",
      content4:
        "Teacher assistants support classroom teachers by assisting with grading, monitoring, and teaching students. Typically, an associate's degree or two years of college coursework is needed. Teacher assistants with a bachelor’s degree in Secondary Education can gain valuable experience to advance to higher teaching positions. The average annual salary for teacher assistants is $28,900.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Secondary Education Abroad</h1>
        <p>
          A degree in Secondary Education prepares you to teach in middle or high school, 
        </p>
        <p>usually specializing in a specific subject such as Math, History, Science, or Languages.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated value of the secondary education sector
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $61,820: average salary for secondary school teachers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary for top secondary school teachers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 77,400 job openings projected annually over the next decade
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

export default SecondaryEducation;
