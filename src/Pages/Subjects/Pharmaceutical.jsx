import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Pharmaceutical = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Open or close the FAQ item
  };

  const headerSectionStyle = {
    
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/phar.jpeg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "350px",
      width: "1900px",
      color: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "50px",
      marginTop: "82px",
    };

  const statsContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statCardStyle = {
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

  const statIconStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Make icon visually appealing
    marginBottom: "10px",
  };

  const faqContainerStyle = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqItemWrapperStyle = {
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const faqTitleWrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
  };

  const faqContentWrapperStyle = {
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
      title: "About Pharmaceutical Science",
      content1:
        "Pharmaceutical science focuses on creating and testing new medications and drug therapies in biological systems.",
      content2:
        "Pharmaceutical scientists help develop innovative therapies that improve lives. Studies include fields like pharmacology, medicinal chemistry, biostatistics, and more.",
    },
    {
      title: "Is Pharmaceutical Science right for me?",
      content:
        "Pharmaceutical science suits students interested in healthcare innovation or those planning for medical school, particularly if strong in math, science, and drug development.",
    },
    {
      title: "Pharmaceutical Science study options and costs",
      content1:
        "Bachelor’s programs prepare you for entry-level roles, with an average cost of $34,000. Career options include drug manufacturing, analysis, and marketing.",
      content2:
        "A master’s degree enhances expertise, with tuition ranging from $22,400 to $103,000 in the US.",
      content3:
        "PhD and PharmD programs prepare professionals for specialized and advanced roles, with tuition typically between $31,141 and $41,831.",
    },
    {
      title: "Future outlook",
      content1:
        "Healthcare sector demand surged post-COVID-19. Employment in medical sciences is projected to grow by 13%.",
      content2:
        "Top earners in pharmaceutical manufacturing make $115,450, while academia salaries are lower at $61,270.",
      content3:
        "High salary and job growth underscore the value of a career in pharmaceutical science.",
    },
    {
      title: "Career pathways for Pharmaceutical Science graduates",
      subtitle1: "Pharmaceutical Scientist",
      content1:
        "Pharmaceutical scientists work in drug discovery, testing, and regulatory sciences, with specializations like formulation and toxicology.",
      subtitle2: "Associate in Clinical Research",
      content2:
        "Clinical researchers develop protocols, collect data, and monitor trial quality to ensure regulatory compliance.",
      subtitle3: "Biomedical Researcher",
      content3:
        "Biomedical researchers investigate disease causes and treatments, advancing human health and early detection.",
      subtitle4: "Regulatory Affairs Specialist",
      content4:
        "These specialists ensure products meet industry and government standards, overseeing trials and regulatory filings.",
      subtitle5: "Pharmaceutical Sales Representative",
      content5:
        "Sales representatives promote prescription drugs to medical professionals, requiring extensive product and industry knowledge.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={headerSectionStyle}>
        <h1>Pharmaceutical Science abroad</h1>
        <p>
          Pharmaceutical Science involves creating new medications. 
        </p>
        <p>
        This field offers global career opportunities and high employability.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statsContainerStyle}>
        <div style={statCardStyle}>
          <div style={statIconStyle}>🌟</div>
          <p>
            <strong>4.49 million</strong>: people employed in pharmaceutical science (4.83% growth)
          </p>
        </div>
        <div style={statCardStyle}>
          <div style={statIconStyle}>📈</div>
          <p>
            <strong>$77,002</strong> average salary for pharma science professionals
          </p>
        </div>
        <div style={statCardStyle}>
          <div style={statIconStyle}>💼</div>
          <p>
            <strong>62.5%</strong> female representation in the pharma workforce
          </p>
        </div>
        <div style={statCardStyle}>
          <div style={statIconStyle}>🔧</div>
          <p>
            <strong>14%</strong> projected industry employment growth
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqContainerStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemWrapperStyle}>
            <div style={faqTitleWrapperStyle} onClick={() => toggleFaq(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentWrapperStyle}>
                {/* Render content and subtitles */}
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
                {item.content5 && <p>{item.content5}</p>}
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

export default Pharmaceutical;
