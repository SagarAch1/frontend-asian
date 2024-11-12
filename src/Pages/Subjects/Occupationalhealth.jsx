import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const OccupationalHealth = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle content visibility
  };

  const headerStyle = {
    
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
  const statisticsWrapperStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statBlockStyle = {
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

  const iconWrapperStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Icon color change for attractiveness
    marginBottom: "10px",
  };

  const faqWrapperStyle = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqBlockStyle = {
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

  const faqDetailsStyle = {
    padding: "10px 0",
    fontSize: "14px",
    color: "#666",
  };

  const faqSubheadingStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  const faqList = [
    {
      title: "About Occupational Health and Safety",
      content:
        "Occupational Health & Safety focuses on ensuring workplaces are safe for employees and employers alike, reducing risks and potential harm. The degree prepares students to develop healthier work environments, implement emergency response strategies, and understand safety management systems.",
    },
    {
      title: "Is Occupational Health & Safety right for me?",
      content1:
        "An Occupational Health & Safety degree opens up a wide range of career opportunities in various industries, helping to analyze workplace risks and find solutions. The program equips students with leadership, decision-making, and time management skills, which enhance employability and career prospects.",
      content2:
        "In addition, the degree offers rewarding experiences as it helps create safer workplaces for both employees and employers.",
    },
    {
      title: "Occupational Health and Safety study options and costs",
      content1:
        "A bachelor’s degree in Occupational Health & Safety typically spans 3 to 4 years, covering subjects like Industrial Hygiene, Safety Laws, and Ergonomics. Tuition costs on average are $13,822 annually.",
      content2:
        "Master’s programs build on these foundations, with a focus on Construction Safety, Hazardous Materials Management, and Accident Investigation. The average annual tuition for a master’s is $18,705.",
    },
    {
      title: "Future outlook",
      content1:
        "With an increasing focus on workplace safety, governments and businesses are hiring specialists to meet health and safety regulations. Occupational Health & Safety professionals are in demand as the need for workplace safety increases globally.",
      content2:
        "The job market is expanding with over 9,600 annual job openings for specialists and technicians in the U.S. alone, indicating strong prospects for those in the field.",
    },
    {
      title: "Career pathways for Occupational Health and Safety graduates",
      subtitle1: "Occupational Health & Safety specialists",
      content1:
        "These professionals inspect workplaces to ensure compliance with safety regulations, earning an average salary of $77,560 annually.",
      subtitle2: "Ergonomist",
      content2:
        "Ergonomists focus on designing efficient, safe, and comfortable systems and equipment, with an average salary of $74,564.",
      subtitle3: "Occupational Health & Safety Inspectors",
      content3:
        "Inspectors ensure that workplaces meet health and safety standards, earning an average annual salary of $152,768.",
      subtitle4: "Environmental Health Technician",
      content4:
        "Environmental health technicians work to identify and address public health issues, earning an average salary of $54,000 per year.",
    },
  ];

  return (
    <div>
      {/* Header Section with Background Image */}
      <div style={headerStyle}>
        <h1>Study Occupational Health & Safety abroad</h1>
        <p>
          Occupational Health & Safety ensures a healthy and safe workplace environment. Graduates gain 
        </p>
        <p>technical expertise, critical thinking, and problem-solving abilities that make them highly employable.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsWrapperStyle}>
        <div style={statBlockStyle}>
          <div style={iconWrapperStyle}>🌟</div>
          <p>
            <strong>$14.2 billion</strong> estimated worth of the occupational health & safety industry
          </p>
        </div>
        <div style={statBlockStyle}>
          <div style={iconWrapperStyle}>📈</div>
          <p>
            <strong>Average annual salary</strong> of an occupational health & safety specialist
          </p>
        </div>
        <div style={statBlockStyle}>
          <div style={iconWrapperStyle}>💼</div>
          <p>
            <strong>9,600 projected job openings</strong> annually
          </p>
        </div>
        <div style={statBlockStyle}>
          <div style={iconWrapperStyle}>🔧</div>
          <p>
            <strong>7% projected growth</strong> in employment for specialists
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqWrapperStyle}>
        <h2>Subject Overview</h2>
        {faqList.map((item, index) => (
          <div key={index} style={faqBlockStyle}>
            <div style={faqHeaderStyle} onClick={() => toggleContent(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqDetailsStyle}>
                {/* Check for subtitles and content */}
                {item.subtitle1 && <div style={faqSubheadingStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubheadingStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubheadingStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubheadingStyle}>{item.subtitle4}</div>}
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

export default OccupationalHealth;
