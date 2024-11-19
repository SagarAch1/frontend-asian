import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const PlantScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/plantscience.jpg)`,
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
      title: "About Plant sciences",
      content1:
        "Plants are essential to providing our fundamental needs, from oxygen to sustenance. Thus, understanding plant growth mechanisms and how they respond to environmental shifts is crucial.",
      content2:
        "Plant Science explores how plants are leveraged for food, environmental changes, landscape restoration, and benefits for human health, community environments, and recreation. This study is vital to environmental preservation.",
      content3:
        "Plant Sciences focus on the scientific study of soil management, crop production, pest control, hydroponics, fertilizers, and biological/chemical pest management.",
    },
    {
      title: "Is Plant sciences right for me?",
      content:
        "Plant scientists are inquisitive, environmentally conscious individuals, often involved in exploring plant behavior and conservation. They have strong problem-solving skills, critical thinking abilities, and are skilled in data analysis and effective communication. If these traits resonate with you, Plant Sciences may be a good fit.",
    },
    {
      title: "Study options and costs",
      content:
        "Plant scientists generally require a bachelor’s degree in agriculture or related fields, with courses in biology, chemistry, botany, and conservation. Undergraduate programs last about 4 years, costing approximately $8,218-$20,790 in the US. A master’s program can range from 1-3 years, with average tuition around $23,902 annually.",
    },
    {
      title: "Future outlook",
      content:
        "With global population growth, efficient crop production and improved plant management are increasingly important. According to the U.S. Bureau of Labor Statistics, employment in agricultural sciences is expected to grow by 9% from 2020 to 2030, with about 4,400 annual job openings projected.",
    },
    {
      title: "Career pathways for Plant sciences graduates",
      subtitle1: "Agronomist",
      content1:
        "Agronomists focus on analyzing and enhancing agricultural productivity through soil, seed, and crop testing. They maintain research records, ensure quality control, and set standards for seeds and soil.",
      subtitle2: "Horticulturist",
      content2:
        "Horticulturists improve plant growth, quality, and flavor, coordinating specific crop research projects and having expertise in a range of plant species, including trees, flowers, and vegetables.",
      subtitle3: "Entomologist",
      content3:
        "Entomologists, often called 'bug experts,' devise innovative pest management methods to protect crops from insects.",
      subtitle4: "Crop Consultant",
      content4:
        "Crop consultants advise on crop management techniques, including seeding, fertilization, pest control, and disease treatment, aiding farmers globally in boosting crop yields.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Plant Sciences Abroad</h1>
        <p>Plant sciences study plant life, focusing on structure, function,</p>
        <p> and growth, with applications in food, medicine, and fuel. </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$72,762</strong>: Average annual salary for agricultural
            scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Projected job openings</strong> for agricultural workers
            every year this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>9% projected job growth</strong> for agricultural and food
            scientists this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Estimated job openings</strong> for ground maintenance
            workers annually
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

export default PlantScience;
