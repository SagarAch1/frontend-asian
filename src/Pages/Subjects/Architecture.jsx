import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Architecture = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/arti.jpg)`,
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
    color: "#4CAF50", // Enhance color for visual appeal
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
      title: "About Architecture",
      content:
        "Architecture involves designing and planning structures such as buildings, homes, bridges, and even cities. Architects play a key role in both the creative and practical aspects of construction, ensuring structural integrity and safety while creating aesthetically pleasing designs.",
    },
    {
      title: "Is Architecture right for me?",
      content:
        "Architects require skills in analysis, planning, and collaboration, along with a creative mindset to solve challenges that may arise during construction. Professionals in this field must visualize and outline detailed blueprints for various structures. If you’re skilled at planning and visualizing spaces, architecture could be an excellent choice for you.",
    },
    {
      title: "Architecture study options and cost",
      content1:
        "Architecture programs are offered in many countries. Bachelor’s degrees in architecture usually span 5 years, while master’s programs last 2-3 years.",
      content2:
        "In the U.S., a bachelor’s degree in architecture typically costs between $30,000 and $60,000 per year, although some prestigious institutions, such as Cornell and Harvard, may charge more. In Australia and the UK, yearly tuition for a bachelor’s program in architecture averages $40,000 to $50,000.",
    },
    {
      title: "Future outlook",
      content:
        "Architecture has a promising future with steady growth expected in the coming years. Job opportunities in this field are projected to grow by around 4% over the next five years, driven by ongoing global infrastructure projects. Architecture graduates can consider careers as town planners, building architects, and interior designers, among others.",
    },
    {
      title: "Career pathways for Architecture graduates",
      subtitle1: "Building Architect",
      content1:
        "Building architects design everything from houses to skyscrapers, preparing blueprints and coordinating with construction teams. They also create feasibility reports, manage budgets, and set timelines to guide the project’s progression.",
      subtitle2: "Interior Designer",
      content2:
        "Interior designers enhance spaces within buildings, focusing on aesthetic appeal and functionality. They evaluate space, plan furniture layout, estimate costs, and bring their vision to life within a given budget and theme.",
      subtitle3: "Town Planner",
      content3:
        "Town planners focus on creating sustainable designs that cater to the needs of communities while considering population, transportation, and green spaces. They conduct site research, consult with developers, enforce regulations, and provide progress reports.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Architecture abroad</h1>
        <p>
        Architecture blends art and science to design functional, visually appealing spaces, 
        </p>
        <p>turning abstract ideas into environments for living, working, and interaction.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$88,000</strong> average salary of an architect in the U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>9000</strong> projected new jobs annually for architects
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>4%</strong> anticipated growth in the field of architecture
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>120,000</strong> architects currently employed in the U.S.
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

export default Architecture;
