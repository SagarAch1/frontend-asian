import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Dietetics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      title: "About Dietetics",
      content1:
        "Dietetics studies the effects of food and nutrition on health. Dietitians and nutritionists guide people to make healthier choices and balance diet with physical activity.",
      content2:
        "Dietetics programs cover food management, medical nutrition, metabolism, and include relevant sciences like anatomy, biology, chemistry, and physiology.",
    },
    {
      title: "Is Dietetics Right for Me?",
      content1:
        "In dietetics, students learn the impact of different foods on health, and how to advise patients on diets tailored to their needs. Unlike other health fields, dietetics emphasizes disease prevention through nutrition.",
      content2:
        "If you’re passionate about health, nutrition, and the science of food, a dietetics degree could offer you a rewarding career path.",
    },
    {
      title: "Study Options and Costs",
      content1:
        "A bachelor’s degree in dietetics, lasting 3-4 years, requires a high-school education with recommended subjects like biology, chemistry, and psychology. Some students may need foundation courses.",
      content2:
        "After a bachelor’s, students can pursue a master’s in specialties like public health, clinical nutrition, sports dietetics, or pediatric nutrition. Internships or professional experience are often required.",
      content3:
        "In the US, a bachelor’s in dietetics costs about $16,000 annually. In the UK, the average cost is approximately $20,000 per year.",
    },
    {
      title: "Future Outlook",
      content1:
        "Demand for dietitians and nutritionists is growing, with job opportunities expected to rise 11% between 2016 and 2026, driven by a focus on health and wellness.",
      content2:
        "Factors like the increase in metabolic diseases and healthcare spending contribute to the growth of clinical nutrition. Around 5,900 job openings are projected annually in the U.S. alone.",
    },
    {
      title: "Career Pathways for Dietetics Graduates",
      subtitle1: "Clinical Nutritionist",
      content1:
        "Clinical nutritionists assess diets to help manage health issues or prevent diseases, enabling patients to live healthier lives. Common cases include managing diets for diabetes.",
      subtitle2: "Public Health Nutritionist",
      content2:
        "Public health nutritionists design strategies to improve community health through population-wide nutrition programs, informed by health data and social sciences.",
      subtitle3: "Dietitian",
      content3:
        "Dietitians create personalized dietary plans based on medical or nutritional needs. They provide one-on-one support, diagnosing and treating nutrition-related health issues.",
    },
  ];

  return (
    <div>
      {/* Hero section with background image */}
      <div style={sectionStyle}>
        <h1>Study Dietetics Abroad</h1>
        <p>
          Dietetics examines how diet and nutrition affect human health, 
        </p>
        <p>with a focus on educating the public about healthy eating.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>Projected Market:</strong> $51,128 million in global clinical nutrition by 2028
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Average Salary:</strong> $61,650 annually for dietitians and nutritionists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Annual Job Openings:</strong> 5,900 for dietitians and nutritionists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Market Growth Rate:</strong> 6.1% annually in clinical nutrition
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
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

export default Dietetics;
