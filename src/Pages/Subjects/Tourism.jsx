import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Tourism = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Switch between open and close
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
      title: "About Tourism",
      content:
        "Although the tourism sector was severely impacted by the COVID-19 pandemic, it has rapidly recovered as borders reopen globally. The industry continues to thrive, catering to millions of travelers, from airlines and hotels to travel agencies and transport services. Tourism studies prepare students with the necessary skills to create and deliver memorable travel experiences. Students explore the basics of hospitality, as well as more specialized areas like catering, event planning, and gastronomy. If you enjoy traveling and organizing trips, this field could be the perfect fit for you.",
    },
    {
      title: "Is Tourism a good fit for me?",
      content:
        "Tourism professionals need to be highly organized with a sharp attention to detail to cater to every client’s unique needs. Effective communication and interpersonal skills are essential, as is patience, as you will often interact directly with customers. If you feel that you possess these qualities, then pursuing a career in Tourism could be a great option.",
    },
    {
      title: "Tourism education and costs",
      content:
        "An Associate Degree in Tourism typically takes two years to complete in the United States, often followed by a short internship. A bachelor’s degree offers a deeper understanding of the industry and opens the door to more career opportunities, usually taking four years to complete. The average cost for international students to study tourism in the US is around $15,744 annually. For those looking to further their education, a Master’s degree takes approximately two years and costs about $19,848 per year.",
    },
    {
      title: "Job outlook",
      content:
        "Tourism is a $4.7 trillion global industry that provides livelihoods for millions of people worldwide. The U.S. Bureau of Labor Statistics projects a 5% growth in travel agent employment by 2030.",
    },
    {
      title: "Tourism career paths",
      subtitle1: "Tour Guide",
      content1:
        "Tour guides provide visitors with information about historical sites, museums, national parks, and other culturally significant locations, enriching their travel experience.",
      subtitle2: "Travel Agent",
      content2:
        "Travel agents assist clients in planning vacations by researching, organizing, and ensuring that all travel arrangements such as lodging, flights, and visas are in place.",
      subtitle3: "Guest Relations Manager",
      content3:
        "Guest Relations Managers oversee hotel guest services teams, including receptionists and concierges, ensuring high standards of guest satisfaction and evaluating team performance.",
      subtitle4: "Housekeeping Manager",
      content4:
        "Housekeeping Managers ensure that rooms and facilities in hotels are maintained to a high standard. They manage housekeeping staff, procure supplies, and handle customer concerns.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Tourism Abroad</h1>
        <p>
          As a multi-billion-dollar industry that sustains economies worldwide, 
        </p>
        <p>tourism offers countless career opportunities. A formal education in this .</p>
        <p>field can pave the way for an exciting and fulfilling career</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average salary for tour and travel guides annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Median salary for travel agents annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $4.7 trillion: Contribution of travel and tourism to global GDP in 2020
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Projected job openings for travel agents throughout this decade
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Overview of the Subject</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleActiveIndex(index)}>
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

export default Tourism;
