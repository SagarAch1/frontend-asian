import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Writtencommunication = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    color: "#4CAF50",
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
      title: "About Written Communication",
      content:
        "The Written Communication program provides a foundation in skills essential to being a proficient writer, communicator, and storyteller in professional contexts. It covers fields like marketing, corporate communication, and technical writing, and imparts not only strong writing skills but also an understanding of key communication theories and tools. This program hones your ability to present complex information in an accessible and engaging way.",
    },
    {
      title: "Is Written Communication right for me?",
      content1:
        "Pursuing a degree in Written Communication can lead to roles in marketing, technical writing, content creation, and document design. The program emphasizes rhetoric, audience engagement, and diverse writing formats, including proposals, reports, and case studies. Students will learn to communicate effectively across varied audiences, working both individually and in teams.",
      content2:
        "Assignments evaluate specific writing skills with clear expectations from instructors. If you’re drawn to writing, research, and critical thinking, this program could be a great fit.",
    },
    {
      title: "Study options and costs",
      content1:
        "A Bachelor's degree in Written Communication typically takes four years and costs between $14,842 and $28,741 annually, depending on the institution. The curriculum focuses on developing writing and communication skills for both public and private sector roles.",
      content2:
        "A Master's degree in this field provides advanced research and writing skills. This two-year program costs around $42,672 on average and prepares students to apply their expertise in various professional contexts.",
    },
    {
      title: "Future outlook",
      content:
        "With the rise of technology and complex products, demand for writers who can explain technical information is growing. Fields like pharmaceuticals, electronics, and research often hire written communication specialists. Job growth in this area is expected to reach 12% over the next decade, adding over 55,000 jobs.",
    },
    {
      title: "Career Pathways for graduates",
      subtitle1: "Editor",
      content1:
        "Editors guide the development of written content, from draft to publication, focusing on structure, tone, and style. Editors earn around $53,520 per year on average.",
      subtitle2: "Content Marketing Manager",
      content2:
        "These professionals lead content creation strategies for companies, often specializing in certain types of content. They typically earn about $68,395 per year.",
      subtitle3: "Communications Manager",
      content3:
        "Managing internal and external company communications, these managers earn around $65,852 annually. They handle strategy and ensure consistency in messaging.",
      subtitle4: "Curriculum Developer",
      content4:
        "Curriculum developers create educational content, including textbooks and course materials, and often work in educational institutions or corporations. They average $63,750 per year.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Written Communication abroad</h1>
        <p>
          Students in Written Communication study the art of rhetoric, grammar,
          and communication, 
        </p>
        <p>preparing for roles in digital, copy, and content writing
        across multiple sectors.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p><strong></strong> $60,340: average yearly salary of a written communication specialist</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p><strong></strong> 11,200 projected job openings for editors annually this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p><strong></strong> Average salary of technical writers</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p><strong></strong> 12% projected employment growth for written communication specialists</p>
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
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

export default Writtencommunication;
