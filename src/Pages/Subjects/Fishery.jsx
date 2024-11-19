import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Fishery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggles FAQ sections open/closed
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fish.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
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
      title: "About Fishery studies",
      content:
        "Fisheries science focuses on the social, biological, and environmental study of fish production. Students gain a foundational understanding of freshwater and marine systems and the factors influencing sustainability. Various undergraduate and graduate programs are available to foster expertise in aquaculture.",
    },
    {
      title: "Is Fishery studies right for me?",
      content:
        "A biology background is beneficial, as fishery studies require a comprehensive grasp of aquatic ecosystems and animal behavior. Communication skills are also crucial, given the need to collaborate across departments, field teams, and supply networks.",
    },
    {
      title: "Fishery studies study options and costs",
      content:
        "Associate (2 years), Bachelor (4 years), and Master (1-3 years) degrees in fishery sciences are common. Undergraduate programs in Australia average $23,804 annually, while graduate programs cost around $24,648. Leading institutions include James Cook University, Flinders University, and the University of Tasmania.",
    },
    {
      title: "Future outlook",
      content:
        "With fisheries as a major income source for millions, the demand for fishery science professionals is set to grow 2.3% between 2016 and 2026.",
    },
    {
      title: "Career pathways for Fishery studies graduates",
      subtitle1: "Fisheries Biologist",
      content1: "Studies trends and stock levels in aquatic environments.",
      subtitle2: "Fisheries Officer",
      content2: "Manages resource activities to protect threatened species.",
      subtitle3: "Fishery Manager",
      content3:
        "Oversees all fishery operations, including cultivation, growth monitoring, and equipment maintenance.",
      subtitle4: "Fishery Technician",
      content4:
        "Handles daily operations such as feeding, care, and facility upkeep.",
      subtitle5: "Fishery Observer",
      content5:
        "Acts as the eyes and ears on fishing vessels, gathering industry data.",
      subtitle6: "Fisheries Development Officer",
      content6:
        "Provides technical support and training in modern fishing practices, vessel operations, and safety.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Fishery studies abroad</h1>
        <p>
          Fishery studies equip students with knowledge in fish breeding,
          rearing,
        </p>
        <p> and harvesting, laying a foundation for a career in aquaculture.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>More than 26 colleges</strong>: offer fishery science
            degrees in the U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>8% growth</strong> projected in fishery sciences.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>High earnings</strong> for U.S. fishery graduates.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>527% increase</strong> in global aquaculture production.
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
                {item.subtitle6 && (
                  <div style={faqSubtitleStyle}>{item.subtitle6}</div>
                )}
                {item.content6 && <p>{item.content6}</p>}
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

export default Fishery;
