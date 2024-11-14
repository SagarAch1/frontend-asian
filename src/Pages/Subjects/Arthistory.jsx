import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const ArtHistory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/creative.png)`,
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Art and History",
      content1:
        "Art history is the study of past artworks, reflecting how people viewed themselves, their surroundings, and how they conveyed this knowledge. It connects cultural history with modern-day understanding.",
      content2:
        "Art history equips us with the necessary tools and vocabulary to interpret visual culture and develop an understanding of art within different historical and cultural contexts.",
    },
    {
      title: "Is Art and History right for me?",
      content:
        "Art historians require strong evaluative skills, attention to detail, and a passion for exploring historical art. A true interest in how art reflects human experience, combined with pattern recognition, is key. If these qualities resonate with you, this course could be a great fit.",
    },
    {
      title: "Art and History study options and costs",
      content:
        "Pursuing art history typically requires several years of higher education, often at the Master's or Doctoral level. In Australia, an undergraduate degree in art history costs approximately AUD 10,000-15,000 annually, while in Canada, it ranges from CAD 9,800 to 17,200.",
    },
    {
      title: "Future outlook",
      content:
        "By 2029, job opportunities in art history are expected to grow by 9%. Careers in archiving, curating, and museum roles are projected to see steady demand.",
    },
    {
      title: 'Career pathways for Art and History graduates',
      subtitle1: 'Curator',
      content1: 'Curators are responsible for managing collections, organizing exhibitions, conducting research, and overseeing the preservation of artworks. They may work in museums, galleries, or cultural institutions.',
      subtitle2: 'Art History Professor',
      content2: 'Professors in art history teach students to analyze the evolution of art in cultural contexts. They also engage in research and mentoring, contributing to the academic field.',
      subtitle3: 'Museum Director',
      content3: 'Museum directors oversee the institution’s mission, collections, and operations. They ensure the strategic direction of the museum and handle administrative responsibilities.',
      subtitle4: 'Art Restorer',
      content4: 'Art restorers focus on preserving and repairing artworks. They specialize in materials such as paintings, textiles, or sculptures and ensure safe handling and storage.',
      subtitle5: 'Art Authenticator',
      content5: 'Art authenticators examine artworks to verify their provenance and authenticity. They use research and scientific methods to establish the true origin of art pieces.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Art and History abroad</h1>
        <p>
          Have a passion for creativity and history? 
        </p>
        <p> An Art and History degree is the ideal path for you! </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$49,873:</strong> Average income of Art Historians in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>9%</strong> projected growth for archivists, curators, and museum workers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Art History</strong> courses offered at over 100 global institutions
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Global arts market</strong> expected to reach over AUD $700 billion by 2025
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
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
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

export default ArtHistory;
