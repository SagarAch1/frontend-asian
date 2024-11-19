import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const CropScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/crop.jpeg)`,
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
    color: "#4CAF50", // Color for icon to enhance appearance
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
      title: "About Crop Sciences",
      content:
        "Crop sciences focus on developing and applying new technologies to secure sustainable food production and a healthy agro-ecosystem. This field seeks to enhance agricultural practices and analyze different cropping systems. Studying crop sciences will provide you with a deep understanding of farming systems, allowing you to identify best practices to increase food production sustainably. The course will enhance your ability to evaluate pros and cons of various farming systems, such as organic farming, and analyze cropping methods across different farming setups. It ultimately aims to explore future farming techniques for a growing global population.",
    },
    {
      title: "Is Crop Sciences right for me?",
      content:
        "Crop sciences focus on the development and application of innovative technologies to ensure a sustainable food supply and a healthy agro-ecosystem. The field aims to improve agricultural systems and evaluate cropping methods in different farming systems. With a degree in crop sciences, you will gain a thorough understanding of diverse farming systems, enabling you to identify and implement the best agricultural practices to boost sustainable food production. This course prepares you to assess the advantages and limitations of various agricultural approaches, including organic farming, and analyze cropping techniques used in diverse farming systems.",
    },
    {
      title: "Crop Sciences study options and costs",
      content:
        "A degree in crop sciences or a related agricultural field is generally required to become a crop scientist. Completion of high school or A-Levels is necessary to enroll in these programs. Numerous Australian universities offer degrees in crop sciences. The average duration of an undergraduate agriculture-related degree is 4 years and costs about AUD $38,000 per year, while in the US, the average annual cost is around USD 14,510.",
    },
    {
      title: "Future outlook",
      content:
        "A crop sciences degree opens up a variety of career opportunities. Employers include public food agencies, food processing firms, insurance companies, and companies dealing with farm supplies, fertilizers, and agriculture. With a growing global focus on sustainability, organizations like USAID and the World Bank are allocating more funds for crop scientists. Job prospects for crop scientists are expected to rise significantly over the next decade, driven by the need for advanced crop production techniques to conserve land and protect the environment. Graduates with advanced degrees may also pursue teaching and research roles at colleges and universities.",
    },
    {
      title: "Career pathways for Crop Sciences graduates",
      subtitle1: "Crop Advisor",
      content1:
        "Crop advisors are specialists in plants and soil, offering guidance on seeds, fertilizers, pest management, and disease control. They collaborate with other local consultants to understand and address pest and disease outbreaks, providing recommendations to farmers on countermeasures.",
      subtitle2: "Biotechnologist",
      content2:
        "Biotechnologists utilize biological organisms to develop and improve agricultural, medical, and conservation products and methods. They examine genetic, chemical, and physical properties of cells and tissues to identify commercial applications, helping optimize farming processes. Biotechnology is one of the fastest-growing fields, contributing to pest control, food security, soil health, and disease management.",
      subtitle3: "Farm Manager",
      content3:
        "A farm manager oversees a farm or group of farms, bringing expertise in crop and livestock management. Responsibilities include livestock care, crop yield enhancement, task planning, worker management, crop protection, harvesting, and marketing. Additionally, they maintain farm records, track finances, and manage strategic planning.",
      subtitle4: "Soil Fertility Specialist",
      content4:
        "Soil fertility specialists focus on boosting crop yields by managing nutrients, crop rotation, and cover crops. They advise on how to maximize yield by applying commercial fertilizers and manure to enrich soil with nutrients and organic matter.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Crop Sciences Abroad</h1>
        <p>Interested in sustainable development and eco-friendly practices?</p>
        <p> Passionate about innovating crop cultivation methods? </p>
        <p>Crop Sciences could be the perfect field for you.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>10,500</strong>: certified crop advisors currently working
            in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$200</strong>: average hourly rate charged by private crop
            consultants
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>8%</strong>: projected increase in demand for crop
            scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>$50,000</strong>: average annual salary for certified crop
            advisors in the US
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
                {/* Display subtitles and content */}
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

export default CropScience;
