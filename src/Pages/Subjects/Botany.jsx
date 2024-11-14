import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Botany = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/plant.jpg)`,
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
      title: "About Botany",
      content1:
        "Botany is the branch of biology that explores plant structure, function, and biochemical processes. It also studies plant classification and interactions with the environment. Botanists contribute to sectors such as agriculture, pharmaceuticals, and biotechnology. As environmental concerns rise, botanists are also needed in the public sector to address issues like environmental degradation.",
      content2:
        "Through studying plant biology, evolution, and behavior, botanists apply their knowledge to solve challenges in areas like agriculture, horticulture, and conservation.",
    },
    {
      title: "Is Botany right for me?",
      content:
        "Botany requires a mix of skills. Beyond an interest in plants and biology, aspiring botanists need strong research, analytical, and communication skills. Field and lab work are common, requiring patience and persistence. Knowledge of computers and teamwork is also important. If these qualities resonate with you, botany could be a fulfilling career.",
    },
    {
      title: "Botany study options and costs",
      content:
        "As the global population grows, the demand for crops and healthy plant life increases, along with the challenges posed by plant diseases. To address these issues, specialists in pest and weed control are essential. Agricultural and food scientists are expected to see a 9% growth in job opportunities from 2020 to 2030, according to U.S. Bureau of Labor Statistics, with around 4,400 job openings annually.",
    },
    {
      title: "Future outlook",
      content1:
        "The future of botany is promising. Graduates can work in educational institutions, private companies, or government organizations. Because botany intersects with many fields, opportunities in ecology, conservation, agriculture, and biotechnology are abundant.",
      content2:
        "Botany-related jobs are expected to grow by 14%, a rate significantly higher than other occupations.",
    },
    {
      title: "Career pathways for Botany graduates",
      subtitle1: "Naturalist",
      content1:
        "Naturalists research the impact of species on the environment and their interactions. They assist in research programs to collect scientific data, aiming to protect species or ecosystems in case of harm.",
      subtitle2: "Florist",
      content2:
        "Florists work with flowers, either growing them or sourcing them from wholesalers. They create bouquets and arrangements, offering advice on plant care and providing customers with product information.",
      subtitle3: "Forester",
      content3:
        "Foresters manage and care for forests, working alongside geologists and biologists. They help protect wilderness areas, manage forest fires, and create strategies to enhance habitats for various species.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Botany abroad</h1>
        <p>
          Botany is the scientific study of plants, covering their structure, processes, and interactions with their environment. 
        </p>
        <p> This field includes the study of over 300,000 plant species, from mosses to towering redwoods.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: $78,523: Average annual salary of a botanist in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9% expected rise in average salaries of botanists in the UK
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 14%: Growth rate of employment opportunities for botanists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 3,200 job openings for botanists every year in the US
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

export default Botany;
