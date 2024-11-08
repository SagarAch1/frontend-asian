import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
import { sub } from "date-fns";

const Farmandagribusiness = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open and close of sections
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
    color: "#4CAF50", // Make the icons more appealing
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
      title: "What is Agribusiness Management?",
      content:
        "Agribusiness management involves the application of business principles and practices to the agricultural sector. It covers topics such as supply chain management, value addition, marketing, and entrepreneurship in the farming industry. Professionals in this field manage farms, agricultural product processing, and distribution, aiming to bring agricultural goods to a larger market.",
    },
    {
      title: "Is Agribusiness Management a good fit for me?",
      content:
        "If you are organized, financially savvy, and enjoy working in teams, agribusiness management could be a great career path. The degree prepares you with the knowledge needed to manage agricultural businesses effectively, combining your interest in farming or food production with essential business skills.",
    },
    {
      title: "What are the study options and costs for Agribusiness Management?",
      content:
        "Universities generally offer three-year undergraduate programs in agribusiness management, which include studies in agricultural entrepreneurship and product marketing. Master’s programs usually span two years. In Australia, a four-year undergraduate degree costs around AUD 13,200 per year, while in the US, it typically ranges from USD 12,000 to 14,000 annually.",
    },
    {
      title: "What is the future outlook for Agribusiness Management?",
      content:
        "Agribusiness professionals are in high demand due to factors like an aging workforce, fewer young people with agricultural experience, and increasing urbanization. The agribusiness sector is largely underdeveloped, offering opportunities for quick career advancement. Innovations in precision agriculture, sustainable practices, and ag-tech are driving growth. Employment in agribusiness management is expected to grow by 9% from 2020 to 2030.",
    },
    {
      title: "Career opportunities for Agribusiness Management graduates",
      subtitle1: "Grain Merchandiser",
      content1:
        "Grain merchandisers are responsible for buying and selling grain, determining when to buy based on market trends and storing or processing it until it’s time to sell. They work with grain elevators, processors, and grain storage companies.",
      subtitle2: "Agricultural Bank Manager",
      content2:
        "Agricultural bank managers oversee the operations of farm estates, including planning, organizing, and managing budgets and financial records.",
      subtitle3: "Agricultural Advisor",
      content3:
        "Agricultural advisors provide technical and business guidance to farmers, landowners, and conservation organizations. They may work as consultants or with government agencies to promote sustainable agricultural practices.",
      subtitle4: "Commodity Trader",
      content4:
        "Commodity traders deal with tangible products like grains, oil, and other natural resources. They anticipate market trends and engage in buying and selling based on future market conditions, often using futures contracts.",
      subtitle5: "Farm Management Specialist",
      content5:
        "Farm management specialists develop efficient farming methods to maximize production and profitability. They assess costs, manage land use, and advise on labor and capital investments, particularly in dry regions.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Agribusiness Management Abroad</h1>
        <p>
          If you're interested in combining agricultural science with business strategy, agribusiness management 
        </p>
        <p>is the perfect field. This program will prepare you for managing businesses in the agricultural sector.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>USD 108,000</strong>: Average salary for an agriculture marketing manager
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>84,000</strong>: Number of openings for agribusiness managers annually in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>USD 145.7 billion</strong>: Total size of US agri-exports in 2020
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>28%</strong>: Percentage of the global population engaged in agriculture
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleSection(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
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

export default Farmandagribusiness;
