import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Cosmetology = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ open/close state
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
    color: "#4CAF50", // Add a pop of color
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
      title: "About Cosmetology",
      content1:
        "Cosmetology focuses on beauty techniques for enhancing hair, nails, and skin. It includes makeup, scalp care, skin treatments, and more.",
      content2:
        "A licensed cosmetologist applies their skills to help clients feel confident by achieving aesthetic goals. They work in salons, spas, hotels, and more, enjoying a creative career with the potential to make a positive impact on people's lives.",
      content3:
        "Typical coursework might cover areas like Makeup Techniques, Aesthetics, Safe Chemical Practices, Salon Management, Digital Marketing, and Product Promotion.",
    },
    {
      title: "Is Cosmetology right for me?",
      content1:
        "This field is ideal for individuals who are creative, enjoy beauty practices, and are outgoing. Passion for aesthetics and skill are key traits.",
      content2:
        "Successful cosmetologists combine creativity with a client-focused approach. Strong interpersonal skills and a keen eye for color and style enhance this role. If you are driven to help others look and feel their best, cosmetology could be a good fit.",
    },
    {
      title: "Study options and costs",
      content1:
        "To enter cosmetology, you must complete high school before attending a licensed cosmetology school. Programs can range from 9 to 15 months, with associate degrees taking about 2 years, costing around $15,000 to $20,000 in the U.S.",
      content2:
        "Graduates complete required training hours (1,000-2,300) and must pass a state licensing exam to practice cosmetology professionally.",
    },
    {
      title: "Future outlook",
      content1:
        "The global cosmetology market is growing, with its value projected to reach $716 billion by 2025. Beauty influencers are a key driver of this expansion.",
      content2:
        "The U.S. job market for cosmetologists and hairstylists is expected to grow by 19% by 2030, with about 85,300 openings each year. This demand highlights the promising career potential in this field.",
    },
    {
      title: "Career Pathways for Cosmetology graduates",
      subtitle1: "Hairstylist",
      content1:
        "Hairstylists provide haircuts, styling, and coloring services. They work in salons, spas, or for individuals, including high-profile clients.",
      subtitle2: "Consultant",
      content2:
        "Beauty consultants offer expertise to clients and businesses, helping them improve service quality and grow. They may work independently or in firms.",
      subtitle3: "Technician",
      content3:
        "Nail technicians specialize in manicures and pedicures, enhancing the appearance of clients' hands and feet. They stay updated on trends to meet diverse client needs.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={sectionStyle}>
        <h1>Study Cosmetology Abroad</h1>
        <p>
          Cosmetology encompasses the science and art of enhancing beauty 
        </p>
        <p>for skin, hair, and nails, offering a creative career in a thriving industry.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 19% projected job growth in Cosmetology by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average yearly salary for cosmetologists and stylists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Estimated global industry value in Cosmetology
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 85,300 projected openings yearly in cosmetology
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
                {/* Render subtitles and content if available */}
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

export default Cosmetology;
