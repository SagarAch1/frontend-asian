import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const IndustrialDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
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
    color: "#4CAF50", // Updated color for attractiveness
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
      title: "About Industrial Design",
      content1: "Study the fundamentals of visual art, design, and modelling. Gain hands-on skills in 3D structuring, CAD, prototyping, and design management.",
      content2: "You’ll learn how to communicate product ideas using CAD software, and how to develop and market functional prototypes.",
    },
    {
      title: "Is Industrial Design Right for Me?",
      content1: "If you love product design and problem-solving, this field could be for you. It’s about combining creativity with practical solutions.",
      content2: "Industrial design focuses on designing products that are both functional and appealing, requiring problem-solving and creativity.",
    },
    {
      title: "Industrial Design - Study Options and Costs",
      content1: "In the US, tuition fees average $35,000 per year. For top schools like Carnegie Mellon, expect around $58,000 annually.",
      content2: "Other countries like Australia and the UK offer similar costs of around $30,000–40,000 per year for undergraduate programs.",
    },
    {
      title: "Future Outlook",
      content1: "With a 6% employment growth, the demand for industrial designers is rising. Companies are investing more in product design due to global competition and customer satisfaction.",
      content2: "New job openings are expected to grow, with salaries for experienced designers reaching upwards of $118,000 annually.",
    },
    {
      title: "Career Pathways for Graduates",
      subtitle1: "Industrial Designer",
      content1: "Design user-friendly products through market research, 3D modelling, and consumer-focused designs. Average salary: $58,200.",
      subtitle2: "Package Designer",
      content2: "Create packaging solutions for various industries. Average salary: $51,000.",
      subtitle3: "Furniture Designer",
      content3: "Design custom furniture, collaborate with clients, and use CAD tools. Average salary: $51,400.",
      subtitle4: "Automotive Designer",
      content4: "Work with car manufacturers to design ergonomic, stylish vehicles. Average salary: $80,700.",
    },
  ];

  return (
    <div>
      {/* Top Section */}
      <div style={sectionStyle}>
        <h1>Study Industrial Design Abroad</h1>
        <p>Industrial designers make products both functional and visually appealing.</p>
        <p> Learn to design innovative solutions for everyday products.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p><strong>40,000</strong> industrial designers in the US</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p><strong>6%</strong> average job growth</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p><strong>$71,440</strong> median salary</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p><strong>$118,440+</strong> for top designers</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleFAQ(index)}>
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

export default IndustrialDesign;
