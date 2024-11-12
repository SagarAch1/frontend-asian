import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SystemsEngineering = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ sections open and closed
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
    color: "#4CAF50", // Changing color for visual appeal
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
      title: "What is Systems Engineering?",
      content1:
        "Systems Engineering is an area of industrial engineering dedicated to the design, development, and implementation of integrated systems. This role is common in industries such as healthcare, transportation, manufacturing, and technology. It allows engineers to resolve challenges, investigate solutions, and create systems to address a problem or reach a goal.",
      content2:
        "From the conception of a system to the management and production of the final solution, systems engineers oversee every phase, ensuring that everything operates smoothly and effectively.",
      content3:
        "A system can encompass a wide range of elements such as products, services, data, or people—each serving a specific role. Systems engineers collaborate with various stakeholders to ensure the system is successfully implemented and operational.",
    },
    {
      title: "Is Systems Engineering the right fit for me?",
      content:
        "A systems engineer needs a versatile skill set, including an understanding of how processes work, the ability to build and implement systems, and the capacity to ensure their functionality while resolving any issues. Strong communication is key, as systems engineers often work alongside programmers, engineers, and stakeholders. A basic foundation in physics, calculus, statistics, and project management is essential. If these qualities resonate with you, pursuing Systems Engineering could be an excellent choice!",
    },
    {
      title: "Education and Costs in Systems Engineering",
      content:
        "To pursue a career in Systems Engineering, a bachelor's degree is essential. Further specialization is possible through master's programs. In the United States, the average tuition for a Systems Engineering undergraduate program is $37,251 annually.",
    },
    {
      title: "Job Outlook for Systems Engineers",
      content:
        "According to the U.S. Bureau of Labor Statistics (BLS), employment opportunities for systems engineers are expected to grow by 9%. These engineers play a critical role across many industries like healthcare, transportation, and software. The average salary for a systems engineer is $92,380 per year, making it an attractive profession for those looking to solve complex problems and create impactful systems.",
    },
    {
      title: "Career Paths for Systems Engineering Graduates",
      subtitle1: "System Administrator",
      content1:
        "System administrators manage, organize, and maintain an organization's computer networks and systems. This includes overseeing LAN, WAN, and other communication infrastructures like intranets or internet cafes.",
      subtitle2: "Systems Engineer",
      content2:
        "Systems engineers evaluate, troubleshoot, design, and upgrade systems. They are responsible for solving problems, enhancing system performance, and ensuring the smooth operation of all technical components.",
      subtitle3: "Engineering Consultant",
      content3:
        "Engineering consultants offer their expertise to businesses, providing technical solutions and advice. They collaborate with clients to understand technical needs and then manage the execution of solutions based on industry standards.",
    },
  ];

  return (
    <div>
      {/* Banner section with background image */}
      <div style={sectionStyle}>
        <h1>Study Systems Engineering Abroad</h1>
        <p>
        Systems Engineering focuses on designing, integrating, and managing complex 
        </p>
        <p>systems using engineering and scientific principles to optimize solutions.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>Average salary for systems engineers</strong> is $90,107 annually.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Projected job openings</strong> for systems engineers in the coming decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Growth in employment</strong> for systems engineers is anticipated.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Annual salary</strong> for industrial engineers is also noteworthy.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSectionStyle}>
        <h2>Course Overview</h2>
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

export default SystemsEngineering;
