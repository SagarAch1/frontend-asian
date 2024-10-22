import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
import { sub } from "date-fns";

const Farmandagribusiness = () => {
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
      title: "About Agribusiness Management",
      content:
        "Agribusiness management refers to the study of business skills and topics for people interested in running their own farms or agribusinesses. It encompasses a wide range of topics, including supply chain management, value-addition, marketing, distribution entrepreneurship, microfinance, among other things. Agricultural producers, firms that provide goods and services to farmers, businesses that add value to agricultural commodities, and businesses that make it simpler to sell agricultural products to an ever-growing market are all included in agribusiness management.",
    },
    {
      title: "Is Agribusiness Management right for me?",
      content:
        "If you are good with managing finances and are a team player, you have a solid base to become an agribusiness manager. Agribusiness management studies are designed to equip you with the knowledge and skills required to run an agri-business successfully. Therefore, if you possess a passion and aptitude for farming or food production, studying agribusiness management might be a good option for you.",
    },
    {
      title: "Agribusiness Management study options and cost",
      content:
        "Typically universities offer three-year undergraduate programs in agribusiness management Students are trained on enterprise and innovation in agriculture and agricultural product marketing. Master’s degrees are usually two-year programs. In Australia, the average cost of a four-year undergraduate program in Agribusiness is between AUD 13,200 per year, while in the US, it is USD 12,000-14000 per year on average.",
    },
    {
      title: "Future outlook",
      content:
        "Agribusiness professionals are in great demand. The agriculture sector has a gaping void due to trends such as an ageing workforce, fewer young individuals with agricultural experience, and increasing urbanisation. Consequently, agribusiness management is largely unsaturated, and agribusiness graduates can quickly work up to managerial roles. A lot of exciting development has happened in precision agriculture, urban agriculture, sustainable agriculture, and agricultural technology. Employment of agribusiness management roles is predicted to grow by 9% between 2020 and 2030.",
    },
    {
      title: "Career pathways for Agribusiness Management graduates",
      subtitle1: "Grain Merchandiser",
      content1:
        "Grain merchandisers are those who buy and sell grain. They decide when to acquire grain according to market conditions, which fluctuate depending on supply and demand, and then store or process it until it’s time to sell it. They buy crops from farmers at a harvest price and set the futures price of the procurement, which is the amount a buyer agrees to pay in the future. Merchandisers are employed by grain elevators, processors, and companies that store grain for resale.",
      subtitle2: "Agricultural Bank Manager",
      content2:
        "Agricultural bank managers are in charge of everyday activities on farm estates, including planning, organising, supervising, and administering them. Budgeting and keeping correct financial records are among their key responsibilities.",
      subtitle3: "Agricultural Advisor",
      content3:
        "Agriculture advisors are problem solvers who work in the agricultural industry. They provide business and technical advice to farmers, landowners, and conservation organisations. They can focus on offering agricultural consulting services to individuals, businesses, and organisations. Farmers, growers, landowners, conservation organisations, and government agencies are among their clients.",
      subtitle4: "Commodity Trader",
      content4:"Commodity traders invest in tangible commodities such as oil, gold, and agricultural products. Economic trends that are expected to emerge, as well as opportunities for arbitrage in the commodities markets, have an influence on day-to-day purchasing and selling. Commodity markets are commonly used in the major economic sector, which includes enterprises that profit from natural resource exploitation. Most commodities trading involves buying and selling futures contracts, although physical trading and derivatives are also common. ",
      subtitle5: "Farm Management Specialist",
      content5: "Farm Management Specialists are known for devising the most profitable crop-growing and livestock-raising methods. They calculate the cost of each acre and quintal, as well as the link between farm size, land usage, cropping patterns, capital investment, and labour employment in dry regions.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Agribusiness Management abroad</h1>
        <p>
          Do you wish to blend agricultural science with business management
          education? Agribusiness management helps you achieve just that.  
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> USD 108,000: average salary of an agriculture
            marketing manager
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 84,000 openings every year for agribusiness
            managers in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> USD 145.7 billion: total size of US agri-exports
            in 2020.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 28% of the world’s population is engaged in
            agriculture.
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
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
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

export default Farmandagribusiness;
