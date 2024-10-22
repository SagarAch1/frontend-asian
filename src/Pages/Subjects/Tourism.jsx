import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Tourism = () => {
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
      title: "About Tourism",
      content:
        "Despite the setback it received due to COVID-19, the tourism sector has quickly bounced back as countries reopen their borders for international travelers. From airlines, hotels, restaurants and cafes to destination marketers, travel agencies and transport providers, the industry continues catering to millions of business and leisure travelers across the world. Tourism studies are designed to train students with the skills necessary for designing, packaging and delivering memorable tourist experiences. Students learn about the fundamentals of the hospitality industry and deep dive into topics like catering, event management and gastronomy. If you enjoy travelling and planning trips, then Tourism is the right field for you.",
    },
    {
      title: "Is Tourism right for me?",
      content:
        "As a tourism professional, one must be highly organised and have high attention to detail to ensure every client’s individual needs are addressed. They must have good communication and interpersonal skills and a high level of patience as they would need to interact directly with the clients most of the time. If you think this sounds like you, then a career in Tourism could be a good choice.",
    },
    {
      title: "Tourism study options and costs",
      content:
        "An Associate Degree in Tourism usually takes two years to complete in the US and is typically followed up by a short internship or work placement. A bachelor’s degree offers more in depth knowledge of the field and opens you to better job opportunities. It usually takes 4 years to complete in the US. The average cost of studying tourism in the US is $15,744 per year for international students. A master’s degree after the completion of your undergraduate program is a great way to enhance your employment prospects. It usually takes 2 years to complete and costs around $19,848 per year in US.",
    },
    {
      title: "Future outlook",
      content:
        "Tourism is a $4.7-trillion-dollar industry offering livelihoods to millions of people worldwide. According to U.S. Bureau of Labor Statistics, the projected growth of travel agents alone in the job market is 5% by 2030. ",
    },
    {
      title: "Career pathways for Tourism graduates",
      subtitle1: "Tour Guide",
      content1:
        "A tour guide assists and informs visitors about historical places, religious institutes, museums, sanctuaries, national parks, and other culturally significant locations.",
      subtitle2: "Travel Agent",
      content2:
        "A travel agent is someone who conducts research, plans, and organises vacations for individuals and organisations. They are typically responsible for ensuring that customers have comfortable lodging, visas, flights, and foreign exchange, among other things.",
      subtitle3: "Guest Relations Manager",
      content3:
        "A Guest Relations Manager supervises other members of the guest services team in a hotel, such as receptionists, concierges, housekeepers, and wait staff. Guest relations managers also evaluate staff performance.",
      subtitle4: "Housekeeping Manager",
      content4:"Within the hotel they deal with, housekeeping managers guarantee that all rooms and premises are clean and well-organised. Maintaining and procuring supplies, investigating complaints, overseeing housekeepers, training new personnel, and guaranteeing customer happiness are all part of their responsibilities.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Tourism abroad</h1>
        <p>
          A multi-billion dollar industry that offers employment to millions of
          people across the world, tourism is the lifeline of many a country’s
          economy. A formal study in this subject can set you up for an exciting
          and rewarding career.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual pay of tour and travel guides
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Median annual pay of travel agents
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $4.7 trillion: Travel and
            tourism’s contribution to global GDP in 2020
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Projected job openings for travel agents every year this decade


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

export default Tourism;
