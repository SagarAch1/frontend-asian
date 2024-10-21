import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Fashion = () => {
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
      title: "About Fashion merchandising",
      content1:
        "Fashion merchandising deals with the buying, selling, and marketing aspect of fashion. It ensures that fashion goods are available at the right place and time in the right price and quantity. Fashion merchandisers act as intermediaries between fashion designers who want their products available and the market (comprising of retailers and consumers).",
      content2:"A program in fashion merchandising prepares students for exciting career prospects in rapidly growing fashion retail industry. As a Fashion Merchandising student, you will study fashion trends, learn about trend forecasting and learn to manage and marketing fashion goods. It will allow you to learn how to successfully develop, promote and sell fashion products. Furthermore, it will help you develop analytical business skills on fashion to recognize trends, design product lines, and understand the factors that shape buying behavior.",
    },
    {
      title: "Is Fashion merchandising right for me?",
      content:
        "You will need to closely follow fashion trends and have a keen eye for detail if you wish to pursue fashion merchandising as a career.  You will need excellent communication, interpersonal, time management and organizational skills to interact with fashion designers and a wide range of stakeholders. If you have these skills, then you will fit right in the world of fashion merchandising.",
    },
    {
      title: "Fashion merchandising study options and costs",
      content:
        "At the undergraduate level, students can enroll in a Bachelor of Business Administration (BBA) in Fashion Merchandising, Bachelor of Science in Fashion Merchandising and Consumer Studies, or Bachelor of Arts in Fashion Buying and Merchandising. The program duration is between 3-4 years depending on the institute. Besides a bachelor's degree, two-year associate degree options are also available. After completion of undergraduate studies, students can opt for Master of Sciences (MSc) or Master of Arts (MA) in Fashion Buying and Merchandising Management. An undergraduate degree in fashion merchandising on average costs $22,172 in the United States.",
    },
    {
      title: "Future outlook",
      content:
        "Pursuing a fashion merchandising degree in 2022 and beyond is a fine choice since most estimates show that fashion merchandising professionals will be in high demand. The United States Bureau of Statistics (BLS) estimates that the job growth rate for fashion merchandising careers is projected to grow 4% by 2029.",
    },
    {
      title: "Career pathways for Fashion merchandising graduates",
      subtitle1: "Visual Merchandiser",
      content1:
        "A visual merchandiser is creates and installs storefronts and catalogs. They are responsible for point-of-sale displays and stands for exhibitions to attract customers. People in visual merchandising earn up to $62,997 annually.",
      subtitle2: "Retail/Fashion Buyer",
      content2:
        "Retail or fashion buyers primarily order store merchandise, develop buying plans, and deal with vendors. They also work with designers and attend fashion and trade shows to purchase the trendiest fashion pieces. Individuals in this role have a keen eye for fashion trends.",
      subtitle3: "Marketing Specialist",
      content3:
        "A marketing specialist is responsible for promoting fashion brands and products, by deploying a mix of resources and channels to create and implement marketing campaigns. They draw upon their expertise of fashion trends and marketing techniques to formulate a powerful merchandising strategy.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Fashion merchandising abroad</h1>
        <p>
          Do you love the idea of combining fashion and business management? Are
          you also interested in marketing fashion goods? If yes, then Fashion
          Merchandising is a great career path for you!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of a fashion merchandiser
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>11.5 million</strong>  people in the Fashion Merchandising workforce
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>4%</strong>  growth in the fashion merchandising industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Total size of the global fashion industry
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

export default Fashion;
