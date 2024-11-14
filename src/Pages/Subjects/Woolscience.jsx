import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const WoolScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggles open/close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/wool.jpg)`,
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
      title: "About Wool Science",
      content1:
        "Wool Science educates on wool production, harvesting, preparation, marketing, and processing, tailored to industry needs.",
      content2:
        "The curriculum provides skills in wool classification and processing techniques, aimed at maximizing value in the wool supply chain.",
      content3:
        "Graduates can pursue roles in consulting, regulation, and research across sectors, from large-scale farming to intensive grazing operations.",
    },
    {
      title: "Is Wool Science Right for Me?",
      content1:
        "Wool Science explores wool fiber's structure, chemistry, and physics, relating them to wool product properties.",
      content2:
        "Students learn wool science fundamentals, industry structure, and market factors that affect the wool industry.",
    },
    {
      title: "Study Options and Costs",
      content:
        "Bachelor’s degrees in wool science, particularly in Australia, cost around $31,600 annually, with postgraduate studies costing about $34,000 per year.",
    },
    {
      title: "Future Outlook",
      content1:
        "Wool industry roles cover areas like logistics, management, and more, with technology enhancing production.",
      content2:
        "Population growth and urbanization drive wool industry demand, presenting wide career opportunities.",
    },
    {
      title: "Career Pathways",
      subtitle1: "Wool Classer/Storekeeper",
      content1:
        "Classers manage wool handling, storage, stocktaking, and dispatching.",
      subtitle2: "Operations Coordinator",
      content2:
        "Coordinators focus on wool sales advice and partnerships with wool farmers.",
      subtitle3: "Wool Buyer",
      content3:
        "Buyers assess wool at auctions and marketplaces, purchasing bulk class bales.",
      subtitle4: "Supply Coordinator",
      content4:
        "Supply coordinators oversee wool shipments, requiring strong communication skills.",
    },
  ];

  return (
    <div>
      <div style={sectionStyle}>
        <h1>Study Wool Science Abroad</h1>
        <p>
          Wool is a globally traded commodity with a dynamic market. Studying wool science offers promising career options.
        </p>
      </div>

      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>Global wool market growth</strong>: expected CAGR of 4.8% (2021-2026)
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Operations Coordinator</strong> earns approximately $70,000 yearly.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Assistant Wool Buyer</strong> salary: around $60,000 annually.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>200,000+</strong> employed in Australian wool production and export.
          </p>
        </div>
      </div>

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

export default WoolScience;
