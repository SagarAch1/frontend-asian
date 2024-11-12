import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const BusinessAdministration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
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
      title: "About Business Administration",
      content1:
        "Business administration focuses on optimizing a company's operations to boost efficiency and revenue. It teaches methods to improve internal workflows and ensure external market success.",
      content2: 
        "In simple terms, business administrators handle various tasks from overseeing daily operations like customer service to making strategic decisions like setting goals and policies.",
    },
    {
      title: "Is Business Administration right for me?",
      content:
        "If you thrive in a fast-paced environment and are skilled at managing multiple responsibilities simultaneously—such as meeting targets, resolving issues, and streamlining processes—business administration could be the perfect fit for you.",
    },
    {
      title: "Study Options and Costs",
      content:
        "Business administration is a widely offered program, with both bachelor's and master's degrees available. In the US, a bachelor’s degree costs $30,000-35,000 per year, and an MBA typically ranges from $20,000-40,000 annually. In the UK, the cost of a bachelor’s program can range from £13,000 to £15,000 per year.",
    },
    {
      title: "Future Outlook",
      content:
        "The demand for business professionals remains high. In the US, job growth for business professionals is expected to increase by 8% over the next decade, indicating strong career prospects for those with a business degree.",
    },
    {
      title: "Career pathways for Business Administration graduates",
      subtitle1: "Sales Executive",
      content1:
        "A sales executive drives revenue by generating leads, managing client relationships, and meeting sales targets.",
      subtitle2: "Human Resource Executive",
      content2:
        "An HR executive handles recruitment, payroll, employee relations, and strategies to boost organizational productivity.",
      subtitle3: "Market Research Analyst",
      content3:
        "A market research analyst studies market trends, competition, and opportunities, providing insights to support business decisions.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Business Administration Abroad</h1>
        <p>
          Business administration is key to running successful businesses, and professionals with expertise in this
        </p>
        <p>  field are always in demand. This degree remains one of the most popular choices among students globally.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>750,000</strong> new jobs are expected in business administration in the US this decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Entry-level pay</strong> for business administration professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Annual salary</strong> for business administration professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>8%</strong> job growth in business administration roles expected this decade.
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

export default BusinessAdministration;
