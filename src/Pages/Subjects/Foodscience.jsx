import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FoodScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
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

  const statisticsContainer = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statisticCard = {
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
    color: "#4CAF50", // Highlighted color for icons
    marginBottom: "10px",
  };

  const faqContainer = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqCard = {
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const faqHeaderStyle = {
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

  const subtitleStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  const faqItems = [
    {
      title: "About Food Science",
      content:
        "Food science is a multidisciplinary field combining chemistry, microbiology, and engineering to improve food quality and safety. The field explores food production, processing, and distribution.",
    },
    {
      title: "Is Food Science right for me?",
      content1:
        "If you're passionate about the science of food production and its impact on health, food science could be a great fit.",
      content2:
        "The role often involves lab work and research, with opportunities to make significant advancements. Fieldwork may also be involved, such as food testing in various locations.",
    },
    {
      title: "Food Science study options and costs",
      content1:
        "In Australia, Food Science programs range from undergraduate to postgraduate options, covering topics like nutrition, food safety, and quality assurance.",
      content2:
        "Programs include courses on nutrient analysis, food sustainability, and food chain management. In Australia, a Bachelor’s degree may cost AUD 100,000–140,000, while in the U.S., it ranges from USD 120,000–150,000.",
    },
    {
      title: "Future outlook",
      content1:
        "With a growing population, advancements in food science are essential for sustainable food supply.",
      content2:
        "Future developments could reduce diet-related health issues, improve food quality, and reduce waste.",
    },
    {
      title: "Career pathways for Food Science graduates",
      subtitle1: "Food Technologist",
      content1:
        "Food technologists work on improving food production processes, ensuring quality and safety.",
      subtitle2: "Food and Drug Inspector",
      content2:
        "Inspectors oversee food safety and documentation in food and drug production.",
      subtitle3: "Food Manufacturing Specialist",
      content3:
        "Specialists manage food production, ensuring standards are met throughout the process.",
      subtitle4: "Food Safety Analyst",
      content4:
        "Safety analysts conduct checks to uphold high food safety standards.",
    },
  ];

  return (
    <div>
      {/* Hero section with background image */}
      <div style={sectionStyle}>
        <h1>Study Food Science Abroad</h1>
        <p>
          With population growth, food science is key to ensuring sufficient, safe food supplies.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsContainer}>
        <div style={statisticCard}>
          <div style={iconStyle}>🌟</div>
          <p>$73,450: average salary for food scientists</p>
        </div>
        <div style={statisticCard}>
          <div style={iconStyle}>📈</div>
          <p>9% projected job growth</p>
        </div>
        <div style={statisticCard}>
          <div style={iconStyle}>💼</div>
          <p>2000+ students enrolled in Australia last year</p>
        </div>
        <div style={statisticCard}>
          <div style={iconStyle}>🔧</div>
          <p>Food market projected to grow by 8.3% by 2025</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqContainer}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqCard}>
            <div style={faqHeaderStyle} onClick={() => toggleFAQ(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {item.subtitle1 && <div style={subtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={subtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={subtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={subtitleStyle}>{item.subtitle4}</div>}
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

export default FoodScience;
