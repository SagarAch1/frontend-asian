import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FoodScience = () => {
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
      title: "About Food Science",
      content:
        "Food science is a diverse field that combines a wide range of subjects including chemistry, microchemistry, nutrition, microbiology and engineering. It is a relatively new field of study that aims to provide a wholly transformed understanding of food nutrition, biochemistry, microbiology and engineering so companies can develop food products that last longer, are safe and more nutritious. If you are interested in learning how food production, processing, packaging, marketing and distribution work than food science may be a good option.",
    },
    {
      title: "Is Food Science right for me?",
      content1:
        "If you have an interest in the science behind food production, its relation to the human body and how it can help develop healthier and happier communities, then food science could be the perfect fit for you!",
      content2:"Being a food scientist involves working in a lab, since the field is still relatively new and evolving, there are plenty of opportunities to make breakthroughs in the industry by delving into new and exciting research. On the other hand, plenty of fieldwork can be expected. It usually involves extensive travel across multiple sites to perform food testing in different regions.",
    },
    {
      title: "Food Science study options and costs",
      content1:
        "Within Australia, colleges offer a wide range of programs in Food Science, including undergraduate degrees such as Food science and Microbiology, Food and Human Nutrition and Food Science.",
        content2:"Within these programs, a wide range of modules are covered that range from nutrient analysis, agri-food supply chain, quality assurance to new food product development, food taste and food sustainability.",
        content3:"Cost of studying food science courses varies depending on the country and institution. For example, the cost of Bachelors of Food Science in Australia ranges from AUD 100,000 to 140,000 annually. While the expense of studying a Bachelors degree in the US ranges from USD 120,00 to 150,00.",
        },
    {
      title: "Future outlook",
      content1:
        "With the world population increasing day by day, a better understanding of food science is essential. As such, recent advancements in Food Science have allowed scientists to make progress in meeting the food demand of the global population.",
        content2:"Further development in this field could pave the way for a reduction in diet related health conditions, improved quality of food, diversification of food items, better preservation techniques, and less food wastage.",
    },
    {
      title: "Career pathways for Food Science graduates",
      subtitle1: "Food Technologist",
      content1:
        "A food technologist is primarily responsible for ensuring food safety standards and refining the food development process. As a food technologist, you will be expected to modify existing products and processes, and develop new ones.",
      subtitle2: "Food and Drug Inspector",
      content2:
        "As a food and drug inspector, you will be responsible for sampling food, drugs and cosmetic items and ensure proper documentation of production and storage of all items involved in the production process.",
      subtitle3: "Food Manufacturing Specialist",
      content3:
        "A food manufacturing specialist is an exciting role for anyone interested in supply chain and food science. A food manufacturing specialist oversees the various processes involved with food production in order to ensure quality and nutritional standards are maintained.",
      subtitle4: "Food Safety Analyst",
      content4:"A food safety analyst is responsible for the supervision and maintenance of safety standards in food. They conduct and implement all food safety checks to ensure the highest quality standards.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Food Science abroad</h1>
        <p>
          As global population continues to expand, scientists are constantly
          innovating new ways to ensure ample availability of food resources to
          cater to a growing demand. An education in food science equips you
          with the knowledge to drive this change.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>$73,450: average annual income of food scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9% projected growth in employment rates
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 2000+ students enrolled in food science courses in
            Australia last year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> The food market is expected to expand 8.3% by 2025
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

export default FoodScience;
