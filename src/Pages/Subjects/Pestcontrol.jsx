import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const PestControl = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/Agriculture.jpg)`,
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
      title: "About Pest and Weed Control",
      content:
        "Crop failures are often due to pests and weeds attacking crops. To mitigate this, farmers need to apply techniques that protect crops from insects, pests, and weeds. Pest and Weed Control studies equip professionals to develop integrated pest management methods that are both cost-effective and eco-friendly.",
    },
    {
      title: "Is Pest and Weed Control right for me?",
      content:
        "A career in Pest and Weed Control requires comfort with outdoor work. Entomologists must be unafraid of insects and able to handle them and their waste. Observation skills are crucial, as specialists often need to record insect behavior, appearance, and habitat. Strong communication and critical thinking skills are also essential to convey findings and draw conclusions. If this fits your interests, Pest and Weed Control could be a great choice.",
    },
    {
      title: "Pest and Weed Control study options and costs",
      content:
        "A bachelor's program in Pest and Weed Control typically takes 4 years in the US, costing $7,408-$18,634 per year. Master's programs last 1-3 years, depending on specialization, with tuition ranging from $10,067 to $25,468 annually.",
    },
    {
      title: "Future outlook",
      content:
        "With population growth, crop production demands have risen, increasing plant disease risks. Pest and Weed Control experts are essential to maintain high yields and prevent crop losses. According to the U.S. Bureau of Labor Statistics, agricultural and food scientist jobs are projected to grow 9% from 2020 to 2030, with about 4,400 annual job openings.",
    },
    {
      title: "Career pathways for Pest and Weed Control graduates",
      subtitle1: "Entomologist",
      content1:
        "Entomologists study insects and pests, conducting research in natural or controlled settings. They gather and analyze data to understand insect relationships, habitats, reproduction, and migration patterns.",
      subtitle2: "Crop Consultant",
      content2:
        "Crop consultants advise on crop management, covering seeding, fertilization, pest control, and plant disease treatment, helping growers worldwide increase productivity.",
      subtitle3: "Horticulturist",
      content3:
        "Horticulturists work on growing crops, fruits, herbs, flowers, and trees, aiming to boost plant yield, strength, size, and flavor. They also coordinate crop research projects, requiring broad plant knowledge.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Pest and Weed Control Abroad</h1>
        <p>
          Pest and Weed Control improves crop yield through pest management,
        </p>
        <p>
          leading to careers in agri-business, resource management, and crop
          production.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$74,160</strong> Average annual salary for agricultural
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
            <strong>9% projected job growth</strong> for agricultural scientists
            by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Projected job openings</strong> for ground maintenance
            workers every year
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

export default PestControl;
