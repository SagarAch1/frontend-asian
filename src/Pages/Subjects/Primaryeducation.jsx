import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const PrimaryEducation = () => {
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
      title: "About Primary Education",
      content:
        "Primary Education is a critical stage during the formative years of our lives. The knowledge and skills we learn during these years play a key role in our development as individuals. Primary Education studies are designed to help aspiring teachers to learn innovative new methods and techniques that foster, enable and maximise delivery of knowledge and its retention among young students. The aim of these studies is to provide you with knowledge across a range of contexts. The learning is largely practical-oriented and centres heavily on the principles and concepts relating to the primary school curriculum. During your studies, you will also be expected to gain professional experience in primary schools.",
      
    },
    {
      title: "Is Primary Education right for me?",
      content:
        "Do you remember your favourite teacher from primary school? Perhaps she/ he was someone you learned a lot from, and they taught you new ways of thinking or inspired you in some way. You could be that special teacher for future generations. It is an opportunity to empower the next generation and influence positive change. Studying a primary education course will further enhance your ability to think clearly, act decisively and exercise intelligence, traits much needed by a primary teacher.",
      
    },
    {
      title: "Study options and costs",
      content:
        "To undertake a course in primary education you must complete high school first. Thereafter you can enrol for a Bachelor’s in Primary Education, that is designed to help you gain the knowledge, skills, and expertise to succeed as an elementary school teacher. Abachelor’s degree spans four years and costs around $12,083 per semester. You can choose to specialise in any subject area of your choice by pursuing a Master’s degree in primary education. These programs span two years and cost around $21,300 per year in the US.",
     
    },
    {
      title: "Future outlook",
      content:
        "The education sector is growing rapidly, with 66,400 projected job openings for kindergarten and elementary school teachers every year! A large number of qualified educators are required to impart quality education to our younger generations. The average annual salary for elementary and kindergarten school teachers is $45,000.With a 7% growth in employment opportunities the prospects for Primary Education graduates are bright.",
    },
    {
      title: "Career pathways  for Primary Education graduates",
      subtitle1: "Primary teacher",
      content1:
        "As a primary school teacher, you'll develop schemes of work and lesson plans in line with curriculum objectives. You'll facilitate learning by establishing a relationship with pupils, keeping your learning resources organised and creating a positive learning environment in the classroom. The average annual salary for a primary school teacher is $45,000.",
      subtitle2: "Curriculum designer",
      content2:
        "Curriculum designers work with teachers, organisations, and clients to create and implement educational programmes. They can work in schools, offices, universities and other organisations, and may require specialised subject knowledge and skills. They also create appropriate learning materials. The average annual salary for a curriculum designer is $73,795.",
      subtitle3: "Principal teacher",
      content3:
        "Principal teachers usually work as department head with the responsibility of ensuring the smooth running of the department and maintaining the standards. The average annual salary for a principal teacher is $90,055.",
        subtitle4:"Education research officer",
        content4:"Education research officers supervise research projects from the early planning stages until the final project completion. They communicate with team members and verify that all projects and tasks are on schedule. During the research project, officers usually review gathered research and analyse various sets of data. The average annual salary for an education research officer is $59,749.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Primary Education abroad</h1>
        <p>
          Primary school teachers instruct children through the formative years
          of their lives. If you are passionate about educating the next
          generation and enjoy interacting with children, this may be a great
          career option for you.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated worth of the primary education industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average annual salary of primary education teacher
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary of an experienced primary
            education teacher
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 66,400 projected employment growth every year
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

export default PrimaryEducation;
