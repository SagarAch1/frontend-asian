import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const QualitativeEconomics = () => {
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
      title: "Overview of Qualitative Economics",
      content:
        "Qualitative Economics is a branch that involves collecting data through methods like surveys, interviews, or observations. This data often takes a descriptive form, such as notes from a group discussion about a café's quality or responses to open-ended surveys. By using coding or pattern analysis, this degree equips students with skills to interpret and conduct qualitative research, preparing them to lead in diverse fields and to contribute to future research on the effectiveness of qualitative methods in economics.",
    },
    {
      title: "Is Qualitative Economics suited to my interests?",
      content:
        "Qualitative Economics relies on subjective assessments to evaluate a company's worth or potential, based on non-quantitative factors like leadership quality, market trends, innovation strengths, and employee relations. The program focuses on qualitative economic studies, ideal for those interested in understanding economic dynamics and agent interactions in real-world scenarios.",
    },
    {
      title: "Program pathways and expenses",
      content:
        "After earning a bachelor’s in economics, students may choose to pursue a master’s in Qualitative Economics. This program emphasizes economic theories and modeling techniques, preparing graduates for careers in finance, banking, and economics. Completing this master’s generally takes around two years, with an approximate annual cost of $15,400 in the U.S.",
    },
    {
      title: "Career prospects",
      content:
        "Qualitative Economics graduates are in demand across multiple industries, as many large organizations rely on economic analysis and quantitative data for strategic planning. Employment for economists is expected to grow by 13%, which is significantly faster than the average for other careers.",
    },
    {
      title: "Career paths in Qualitative Economics",
      subtitle1: "Economic Consultant",
      content1:
        "Economic consultants use analytical and research skills to conduct studies on economic scenarios. They analyze industry trends to assist organizations in improving performance across fields like business, finance, healthcare, education, and government. The average salary for an economic consultant is around $76,487 per year.",
      subtitle2: "Credit Analyst",
      content2:
        "Credit analysts assess the risks involved with lending to individuals or businesses by analyzing economic trends and relevant regional or industry-specific factors. The average annual income for a credit analyst is $73,650.",
      subtitle3: "Business Reporter",
      content3:
        "Business reporters investigate, write, and present stories about business leaders, companies, industry developments, and financial markets. They leverage their knowledge of economics to produce clear, engaging reports, with an average annual salary of $61,862.",
      subtitle4: "Research Analyst",
      content4:
        "Research analysts apply industry knowledge to evaluate how various conditions impact products or services. They utilize presentation and writing skills, and the average salary for a research analyst is about $63,790 annually.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Qualitative Economics Abroad</h1>
        <p>
          Qualitative Economics combines contemporary economics and qualitative methods, enabling 
        </p>
        <p>students to analyze data in a narrative form, preparing them with unique skills to excel in various careers.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 13% job growth rate for economists expected this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $105,630: average annual earnings of a qualitative economist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Top-tier salaries for qualitative economists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 16,000 economist job openings projected this decade
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
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
                {item.content4 && <p>{item.content4}</p>}
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

export default QualitativeEconomics;
