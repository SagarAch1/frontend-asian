import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FoodAndHospitality = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close on click
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
    color: "#4CAF50", // Styled to make icons visually appealing
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
      title: "About Food and Hospitality",
      content1:
        "A degree in Food and Hospitality prepares students for roles in hotels, restaurants, event planning, and related sectors. Common specializations include Hotel Operations, Food and Beverage Management, and Event Planning. Expect a competitive, fast-paced environment where continuous learning and potential further education are necessary for growth.",
      content2:
        "Topics covered include finance, administration, marketing, and HR management, alongside hotel management fundamentals. Electives may include sustainable food production, food safety, or food policy for a well-rounded education.",
    },
    {
      title: "Is Food and Hospitality Right for Me?",
      content1:
        "Hospitality management programs often provide paths focused on specific sectors, such as Food and Beverage Management. These courses prepare students for work in hotels, resorts, and other food and beverage-focused businesses, covering both business and culinary management.",
      content2:
        "Graduates frequently find careers in research, academia, regulatory agencies, quality assurance, product development, and tourism. If culinary arts and hospitality are your passions, this field offers many rewarding career paths.",
    },
    {
      title: "Study Options and Costs",
      content1:
        "A bachelor's in Food and Hospitality is often followed by advanced degrees (master’s or PhD) or diplomas for entry-level roles. Diplomas average around $25,000. Bachelor's degrees typically cost between $90,000 - $120,000, with financial aid available. Costs can vary by region; for example, in Australia, the cost ranges from $40,000 to $50,000.",
      content2:
        "Postgraduate programs often dive into food science and offer specializations in Hospitality Management, Agricultural Systems, and Food Supply Chains.",
    },
    {
      title: "Future Outlook",
      content1:
        "Graduates in Food and Hospitality can work as food and beverage specialists to ensure organizational success in restaurant and bar operations. Food and Beverage Directors earn an average of $70,883 annually, with top earners reaching $104,000 or more.",
      content2:
        "Hotels prioritize candidates with hospitality degrees for their comprehensive culinary understanding. A projected 15% growth rate for Food Services Managers highlights the promising career prospects in this field.",
    },
    {
      title: "Career Pathways for Graduates",
      subtitle1: "Food and Beverage Manager",
      content1:
        "Food and Beverage Managers oversee the operations of restaurants, bars, cafeterias, and similar establishments, ensuring efficient management and profitability.",
      subtitle2: "Restaurant Manager",
      content2:
        "Restaurant Managers are responsible for staff management, customer service, health and safety compliance, budgeting, and inventory management.",
      subtitle3: "Director of Hospitality in Food and Beverage",
      content3:
        "The Director of Hospitality oversees all aspects of food and beverage planning, including menu design, food preparation, and quality standards.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={sectionStyle}>
        <h1>Study Food and Hospitality Abroad</h1>
        <p>
          A Food and Hospitality degree is more than just food service—it's about creating 
        </p>
        <p>unique dining experiences and ambiance that set establishments apart.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>41,400 annual job openings expected for food service managers</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>Average annual salary of a food and beverage director</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>15% projected growth for food service manager roles</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>1.6 million new restaurant jobs projected by 2028</p>
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
                {/* Display subtitle and content if available */}
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

export default FoodAndHospitality;
