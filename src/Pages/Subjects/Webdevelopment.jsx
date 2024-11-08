import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const WebDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility of content
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
      title: "About Web Development",
      content1:
        "Web Development is the creation of websites. It focuses on building user-friendly sites that are easy to navigate. Developers also add necessary features like paywalls or signup forms to help businesses achieve their goals.",
      content2:
        "From basic static pages to complex applications, web developers create numerous solutions we rely on daily. As businesses continue to grow, the demand for web development expertise is expanding, making it a promising career option.",
    },
    {
      title: "Is Web Development right for me?",
      content1:
        "Ideal for those with a technical mindset and strong coding abilities, web developers often work independently but also collaborate with designers and other developers to create complete websites. Daily tasks include communicating with clients, planning layouts, coding, and testing sites.",
      content2:
        "In addition to strong communication and technical skills, web developers should be detail-oriented, creative, and patient when solving problems or debugging issues.",
      content3:
        "Web developers can work in offices, remotely, or freelance, offering the flexibility to live in affordable locations while earning a great salary.",
    },
    {
      title: "Web Development study options and costs",
      content1:
        "17% of web developers have a Computer Science degree, with other common degrees in Computer Engineering, Web Design, and Information Technology. A Bachelor's degree is held by 50% of professionals, costing an average of AUD$34,400 in Australia, CAD$38,000 in Canada, and USD$50,000 in the US.",
      content2:
        "Web developers often continue their education by obtaining certifications or taking short courses to stay current with new technologies. Learning up-to-date programming languages or web security practices is a valuable investment.",
    },
    {
      title: "Future outlook",
      content:
        "Web developers are in high demand, with job opportunities expected to increase by 13% in the US by 2028. As web applications become more integrated into our daily lives, the need for skilled developers continues to grow, especially in Java and app development.",
    },
    {
      title: "Career pathways for Web Development graduates",
      subtitle1: "Front-End Developers",
      content1:
        "Front-end developers focus on the visible parts of websites that users interact with, such as layouts, fonts, and navigation menus. They use markup languages and scripts to shape the user experience and brand identity.",
      subtitle2: "Back-End Developers",
      content2:
        "Back-end developers create the functionality behind the website’s interface. They ensure that data is stored efficiently and that the website runs smoothly, including fixing bugs and testing the site.",
      subtitle3: "Full-Stack Developers",
      content3:
        "Full-stack developers are versatile, working across the entire web development process. They combine their back-end knowledge with front-end skills to create functional, interactive websites. Their broad expertise makes them highly sought after.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Web Development abroad</h1>
        <p>
          Web development offers an exciting opportunity for creative, tech-savvy individuals to create digital 
        </p>
        <p>solutions  that shape our daily experiences. It’s an ideal career for those passionate about technology.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>The average salary for web developers in the US</strong> is USD$69,038.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Top-level web developers</strong> can earn USD$126,373.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>9% job growth</strong> is expected in web development by 2026.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>72.8% of web developers</strong> report high job satisfaction.
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

export default WebDevelopment;
