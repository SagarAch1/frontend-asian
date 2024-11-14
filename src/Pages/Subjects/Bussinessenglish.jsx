import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const BusinessEnglish = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle section visibility
  };

  const headerStyle = {
    
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/idesign.jpeg)`,
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
  const statsContainer = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statBox = {
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

  const faqContainerStyle = {
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

  const faqHeaderStyle = {
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

  const subtitleStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  const faqItems = [
    {
      title: "About Business English",
      content1:
        "Business English is focused on terminology and language used in business, as well as understanding business fundamentals and different writing styles.",
      content2: "This course will enhance your skills for academic, communication, and independent research in today’s job market.",
    },
    {
      title: "Is Business English right for me?",
      content1:
        "If you want to improve communication skills and gain insights into business, Business English may be ideal. It improves vocabulary, syntax, and articulation.",
      content2: "This program requires extensive reading and research outside class.",
    },
    {
      title: "Study options and costs",
      content1:
        "A high school diploma is needed to enroll. Bachelor’s in Business English focuses on international business, developing communication skills, and internships.",
      content2:
        "A master’s program in Business English builds advanced communication skills and can cost around $32,472.",
    },
    {
      title: "Future outlook",
      content1:
        "English is essential in today’s interconnected world. Effective communication and cultural awareness are highly valued in job markets.",
      content2:
        "Many universities partner with companies to offer graduates promising career prospects.",
    },
    {
      title: "Career pathways for Business English graduates",
      subtitle1: "Digital Copywriter",
      content1:
        "As a digital copywriter, create engaging online content to drive reader action, earning an average salary of $53,288.",
      subtitle2: "Editorial Assistant",
      content2:
        "Support publication processes for printed and online content with an average salary of $39,126.",
      subtitle3: "Newspaper Journalist",
      content3:
        "Report on various topics, with an average salary of $60,393.",
      subtitle4: "Web Content Manager",
      content4:
        "Manage website content to ensure user-friendliness, with an average salary of $85,972.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={headerStyle}>
        <h1>Study Business English abroad</h1>
        <p>
          A Business English program prepares students for English-speaking business environments, enhancing global marketability.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statsContainer}>
        <div style={statBox}>
          <div style={iconStyle}>🌟</div>
          <p><strong></strong> $10 billion estimated worth of the ESL online industry</p>
        </div>
        <div style={statBox}>
          <div style={iconStyle}>📈</div>
          <p><strong></strong> Top salary for Business English graduates</p>
        </div>
        <div style={statBox}>
          <div style={iconStyle}>💼</div>
          <p><strong></strong> Average yearly salary for Business English graduates</p>
        </div>
        <div style={statBox}>
          <div style={iconStyle}>🔧</div>
          <p><strong></strong> 7,400 job openings each year for Business English graduates</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqContainerStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqHeaderStyle} onClick={() => handleToggle(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {/* Render subtitles and content */}
                {item.subtitle1 && <div style={subtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={subtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={subtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={subtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
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

export default BusinessEnglish;
