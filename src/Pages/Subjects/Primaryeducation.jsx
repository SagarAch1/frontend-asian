import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const PrimaryEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/speech.jpg)`,
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
      title: "About Primary Education",
      content:
        "Primary Education is an essential phase in early development. The lessons we absorb during this stage greatly influence our growth and shape our future. Primary Education programs are designed to equip future teachers with the latest methodologies and techniques to optimize learning and retention among young learners. These courses aim to provide a broad understanding across various contexts, focusing heavily on the core principles of the primary school curriculum. As part of your studies, you will also gain hands-on experience working in primary schools.",
    },
    {
      title: "Is Primary Education suitable for me?",
      content:
        "Do you remember your favorite teacher from primary school? Maybe they inspired you, introduced you to new ways of thinking, or made a lasting impact on your life. You can become that teacher and inspire future generations. Choosing to study Primary Education gives you the chance to empower young minds and contribute positively to their development. This course will enhance your critical thinking, decision-making, and problem-solving skills, all of which are essential qualities for a successful primary teacher.",
    },
    {
      title: "Study options and fees",
      content:
        "To pursue a career in Primary Education, you must first complete high school. Then, you can enroll in a Bachelor’s program in Primary Education, which prepares you with the knowledge and skills to become an effective elementary school teacher. A Bachelor’s degree typically takes four years to complete and costs approximately $12,083 per semester. You can further specialize by pursuing a Master’s degree in Primary Education, which usually lasts two years and costs around $21,300 per year in the U.S.",
    },
    {
      title: "Job outlook",
      content:
        "The education sector is expanding rapidly, with an estimated 66,400 job openings for kindergarten and elementary school teachers each year! There is a constant demand for qualified educators to deliver quality education to younger generations. The average annual salary for elementary and kindergarten teachers is around $45,000. With an expected 7% increase in employment opportunities, graduates in Primary Education have promising career prospects.",
    },
    {
      title: "Career opportunities for Primary Education graduates",
      subtitle1: "Primary Teacher",
      content1:
        "As a primary teacher, you will develop teaching plans, organize learning materials, and create a positive and engaging learning environment. You will work directly with students to support their academic and personal growth. The average annual salary for a primary school teacher is approximately $45,000.",
      subtitle2: "Curriculum Designer",
      content2:
        "Curriculum designers collaborate with teachers and educational organizations to develop and implement effective learning programs. They may work in schools, colleges, or other institutions and may need specialized knowledge in particular subjects. The average salary for a curriculum designer is $73,795 per year.",
      subtitle3: "Principal Teacher",
      content3:
        "Principal teachers oversee departments, ensuring everything runs smoothly while maintaining high academic standards. Their leadership is crucial for the success of the department. The average annual salary for a principal teacher is $90,055.",
      subtitle4: "Education Research Officer",
      content4:
        "Education research officers manage research projects from start to finish, ensuring tasks stay on track. They analyze data and assess the outcomes of various education programs. The average annual salary for an education research officer is $59,749.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Primary Education abroad</h1>
        <p>
          Primary educators play a vital role in shaping the lives of young children. If you are passionate 
        </p>
        <p> about helping others grow and enjoy working with children, this could be an ideal career for you.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated value of the Primary Education sector
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average salary for primary education teachers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average salary for experienced primary educators
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 66,400 annual job openings for primary educators
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Program Overview</h2>
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

export default PrimaryEducation;
