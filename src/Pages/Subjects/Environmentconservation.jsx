import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Environmentconservation = () => {
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
      title: "About Environmental Conservation",
      content1:
        "Conservation is the academic disciple concered with the appropriate use of natural resources to protect the environment. It is an important field of study because it informs us about what we need to do to protect our planet and resources.",
        content2:"In today’s world, as human population continues to grow rapidly, the demand for energy sources is also increasing. The alarming rates at which our natural resources continue depleting necessitates an urgent need to broaden the effort for sustainable practices which is why studying Conservation as a subject has gained immense popularity recently.",
    },
    {
      title: "Is Environmental Conservation right for me?",
      content:
        "Conservation scientists are involved in extensive research and data mining, hence must possess good analytical skills, critical thinking and sound reasoning. Since they mostly work collaboratively with teams of field staff and analysts, a high level of team work and good interpersonal skills are a must. If this sounds like you, then a career in Conservation might be a good choice for you.",
    },
    {
      title: "Conservation study options and costs",
      content:
        "A bachelor’s degree is typically the minimum education required for entry level jobs in environmental conservation. It takes 4 years to complete and costs around $14,000-$38,000 per year. Further specialise can be pursued with a master's degree which takes about 1-2 years to complete and costs around $32,000 in the US.",
    },
    {
      title: "Future outlook",
      content:
        "The importance of Conservation studies has never been higher. With the effects climate change more evident than ever before, there is an increasing demand for qualified conservation professionals. According to U.S. Bureau of Labor Statistics, overall employment of conservation scientists and foresters is projected to grow 7 percent from 2020 to 2030, about as fast as the average for all occupations. About 40,000 new openings for conservation scientists and foresters are projected over the decade. ",
    },
    {
      title: "Career Pathways for Environmental conservation graduates",
      subtitle1: "Conservation Scientist",
      content1:
        "Conservation scientists play a critical role in helping to manage land, mines, farms, rivers, and forests with the aim to minimise the wastage of natural resources. They make plans that take into account current and future needs and see them all the way through till execution.",
      subtitle2: "Forester",
      content2:
        "Foresters are in charge of planting, caring for, and managing trees and forests. They work within assigned territories and are responsible for afforestation or reforestation efforts that are critical to our future needs.",
      subtitle3: "Horticulturist",
      content3:
        "Horticulturists are experts of growing plants, fruit, flowers and vegetables in a garden environment. With a conservation specialisation, they can provide environmental advice to communities, breed and experiment with various plants to learn about their growth patterns and disease susceptibility.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Environmental Conservation abroad</h1>
        <p>
          Environmental Conservation refers to protecting and saving the world’s
          natural resources so our future generations can enjoy them too. If you
          care about the environment and sustainability, then this field of
          study will be an excellent choice.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 40,000 estimated openings for conservation
            scientists and foresters this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Median annual pay of conservation scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Currently employed conservation scientists and
            foresters in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7% projected employment growth of conservation
            scientists by 2030
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

export default Environmentconservation;
