import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SystemsEngineering = () => {
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
      title: "About System Engineering",
      content1:
        "Systems Engineering is a branch of industrial engineering focused on the design, developing and implementation of integrative systems. Systems engineers are found in virtually every major industry, including health care, transportation, manufacturing, and software. It's a job that lets you solve problems, research answers, and create systems to solve an issue or achieve a goal.",
      content2: "From the initial design of a complex system to the production and management of the end product or solution, systems engineers develop and oversee all aspects of a complex system to solve a problem.",
      content3:"Products, people, services, information, natural components, or processes—or a combination of them—can all be part of a system, depending on the role. As a systems engineer, you're responsible for troubleshooting and communicating with all parties involved in the system's implementation and use.",
    },
    {
      title: "Is System Engineering right for you?",
      content:
        "A systems engineer needs a diverse set of skills. to understand what needs to happen within a process, develop a system to make that process live, implement the system, and make sure it works while monitoring and problem-solving along the way. Since systems engineers work with other engineers and programmers, as well as end-users and other stakeholders, excellent communication is essential. You also need a beginner level proficiency in physics, calculus, statistics and a knack for project management to be a successful systems engineer. If you feel you have all these skills, studying Systems Engineering is a great option for you!",
    },
    {
      title: "System Engineering Study Options and Costs",
      content:
        "A bachelor's degree in Systems Engineering is the basic requirement if you want to become a systems engineer. Further study options in this field focusing on specialised disciplines require enrolment in master’s programs. The average tuition and fees for a bachelor's program in systems engineering in the US is $37,251.",
    },
    {
      title: "Future outlook",
      content:
        "The U.S. Bureau of Labor Statistics (BLS) predicts a 9 percent increase in employment opportunities for systems engineers. Systems engineers may be found in practically every major business, including health care, transportation, manufacturing, and software. Systems engineers earn an average of $92,380 a year, according to the BLS. It's a profession that lets you solve problems, research answers, and create systems to solve an issue or achieve a goal.",
    },
    {
      title: "Career Pathways for System Engineering graduates",
      subtitle1: "System Administrator",
      content1:
        "System administrators are in charge of organising, installing, and maintaining a company's computer systems. Local area networks (LAN), wide area networks (WAN), and other data communication systems within their company, such as intranets or internet cafes, are examples.",
      subtitle2: "System Engineer",
      content2:
        "Systems engineers are in charge of evaluating systems, identifying problems, providing solutions to issues that arise, designing systems, upgrading systems, maintaining systems, and brainstorming future system improvements.",
      subtitle3: "Engineering Consultant",
      content3:
        "Engineering consultants give technological solutions and engineering advise to their clients. These highly skilled consultants meet with clients to discuss their technical requirements before project-managing the implementation of technical solutions in accordance with industry standards.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Systems Engineering abroad</h1>
        <p>
          Systems Engineering is an interdisciplinary course concerned with
          design, integration, and management of complex systems throughout
          their life cycles. Students will be taught engineering and science
          principles needed to help optimise and implement systems.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $90,107: average annual salary of system engineers


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Projected job openings</strong> Job openings projected for industrial engineers every year this decade


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected employment growth for system engineers this decade


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average annual salary of industrial engineers


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

export default SystemsEngineering;
