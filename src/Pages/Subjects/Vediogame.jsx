import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const VideoGameDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the FAQ section visibility
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Style settings for different sections
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
      title: "About Video Game Development",
      content1:
        "Video game development programs teach about game engines, design techniques, immersive gameplay environments, 3D modeling, programming languages, and industry ethics.",
      content2:
        "The gaming industry, worth over $85 billion, has experienced significant growth due to advancements in technology, which allows for the creation of highly realistic games.",
    },
    {
      title: "Is Video Game Development right for me?",
      content:
        "To succeed as a video game developer, you need a strong analytical mind, creativity, passion for gaming, storytelling abilities, and knowledge of gaming trends. Collaboration is key, as developers work in teams.",
    },
    {
      title: "Study Options and Costs for Video Game Development",
      content1:
        "Video game development is available as a bachelor's degree in many universities worldwide, with costs ranging from $38,000 to $80,000 in the US. Graduate programs like a Master's in Game Design are also available.",
      content2:
        "Certifications are an alternative to university degrees and can help developers learn emerging tools. The cost of certification courses ranges from $1,000 to $10,000, depending on specialization.",
    },
    {
      title: "Future Outlook",
      content1:
        "The video game industry is expected to continue its growth, with job opportunities expanding rapidly. By 2026, the US video game industry alone is projected to grow by 14.5%.",
      content2:
        "Overall, the video game industry is set for an 8% revenue growth in the next five years, making this a promising career path.",
    },
    {
      title: "Career Paths for Video Game Development Graduates",
      subtitle1: "Video Game Artist",
      content1:
        "Video game artists focus on the visual aspects, such as animation, 3D modeling, and concept art, to ensure a smooth and engaging user experience.",
      subtitle2: "Video Game Programmer",
      content2:
        "Programmers handle the technical programming aspects of games, including different coding languages and collaborating with artists to ensure proper integration of visual elements.",
      subtitle3: "AI Programmer",
      content3:
        "AI programmers specialize in using machine learning to personalize user experiences by integrating data into the game environment.",
    },
  ];

  return (
    <div>
      {/* Main section with background image */}
      <div style={sectionStyle}>
        <h1>Study Video Game Development Abroad</h1>
        <p>
          With an estimated 2.5 billion gamers globally, the industry continues to expand,
        </p>
        <p>  presenting exciting career opportunities in video game development.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>8 Billion USD:</strong> Total size of the video gaming industry in 2021.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>14.5% Growth:</strong> Expected growth in the U.S. by 2026.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>5% Job Growth:</strong> Video game development saw a 5% job increase last year.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$71,000:</strong> Average salary of a video game developer.
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
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

export default VideoGameDevelopment;
