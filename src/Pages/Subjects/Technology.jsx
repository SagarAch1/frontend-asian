import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Technology = () => {
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
      title: "About Technology",
      content1:
        "The study of technology helps students develop technical and leadership skills, preparing them for roles in the tech industry. It combines technology with communication, research, and leadership courses.",
      content2:
        "There is a significant global demand for technologists who can lead diverse teams. A formal technology education helps identify knowledge gaps and provides strategies for success in the tech world.",
    },
    {
      title: "Is Technology right for me? ",
      content1:
        "A career in technology suits problem-solvers with a structured mindset. If you have an interest in algebra, geometry, and physics, technology studies could be a natural fit for you.",
      content2:
        "While students from other fields can transition into technology studies, a strong belief in the potential of technology to transform lives and societies is essential for success.",
    },
    {
      title: "Study options and costs",
      content1:
        "Technology studies offer various paths, including two-year associate degrees and four-year bachelor's degrees. Many institutions also provide apprenticeships, so check for these options when selecting a college.",
      content2:
        "Bachelor's degrees in Technology are offered as BTech, BSc Tech, or BEng degrees, with the key difference being that BSc focuses on theory, while BEng and BTech emphasize practical application.",
      content3:
        "After a bachelor's degree, a master's degree in technology can open opportunities for leadership and management roles.",
      content4:
        "The average annual tuition for a bachelor's degree in Technology ranges from $11,000 to $30,000, while a master's degree costs around $38,000 annually. Additional costs apply for apprenticeships, books, and resources.",
    },
    {
      title: "Future outlook",
      content1:
        "The demand for skilled technologists is growing globally, with high-value roles in cloud computing, big data, and technology management. Critical thinkers with strong technical skills are highly sought after.",
      content2:
        "Employment in the technology industry is expected to grow by 13% over the next decade, creating 667,000 new jobs.",
    },
    {
      title: "Career pathways for Technology graduates",
      subtitle1: "Network and Systems Administrators",
      content1:
        "Network and systems administrators maintain and troubleshoot computer networks. The average annual salary for this role is $84,810.",
      subtitle2: "Information Security Analysts",
      content2:
        "These professionals plan and implement security measures to protect computer networks. The average salary is $103,590 annually.",
      subtitle3: "Computer Support Specialists",
      content3:
        "Computer support specialists help users resolve technology-related issues. Their average annual salary is $65,450.",
      subtitle4: "Database Administrators",
      content4:
        "Database administrators manage data storage systems in sectors like finance and insurance. The average salary for this role is $98,860 annually.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Technology abroad</h1>
        <p>
          Interested in a practical, skill-based degree? Studying Technology could 
        </p>
        <p>be your pathway to a rewarding career, with a focus on hands-on learning </p>
        <p>and wide-ranging opportunities.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: 13% expected increase in employment opportunities
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $91,250: average annual salary for tech
            occupations
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 667,600: new tech jobs projected in the US this
            decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>72% Tech workers feel appreciated on the job
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

export default Technology;
