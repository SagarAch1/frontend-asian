import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Publichealth = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/health.jpeg)`,
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
      title: "About Public Health",
      content1:
        "Public Health is focused on improving the physical and mental well-being of communities. This field emphasizes disease prevention and tackling healthcare inequities. Unlike general medicine, which diagnoses and treats illnesses, Public Health aims to enhance overall health and avert potential health problems.",
      content2:
        "Students in Public Health gain a broad understanding of key issues affecting population health and healthcare systems. Typical course topics include epidemiology, health policy, environmental health science, biostatistics, and social factors in health. This discipline offers both a rewarding career path and the opportunity to contribute positively to society.",
    },
    {
      title: "Is Public Health right for me?",
      content1:
        "A public health professional has diverse responsibilities within the healthcare system. They address critical health concerns and promote awareness. If you are passionate about community service and are empathetic, this field could be a perfect fit for you.",
      content2:
        "Public health workers often collaborate with both the public and healthcare administrators. Strong communication skills are essential, particularly during health crises like epidemics. Empathy is also vital, as it allows you to better understand the needs of those affected and motivates action. If you possess these qualities, Public Health might be your ideal career choice.",
    },
    {
      title: "Public Health study options and costs",
      content1:
        "To begin a career in Public Health, pursuing a bachelor’s degree is the first step. Typically lasting 3 to 4 years, the undergraduate program can cost between $10,032 and $25,935 in the United States.",
      content2:
        "Upon completing your bachelor's degree, you can continue with a master’s program in Public Health, which typically takes 2 years to finish and costs between $11,000 and $57,000, depending on the institution.",
      content3:
        "After obtaining your master’s degree, you may choose to pursue a PhD in Public Health, which involves 3 to 5 years of full-time study, including original research and a dissertation on a specialized topic within Public Health.",
    },
    {
      title: "Future outlook",
      content1:
        "The future of Public Health is bright, with increasing demand for policy makers and analysts to shape effective health strategies. Public health professionals are at the forefront of combating pandemics like COVID-19 and addressing ongoing health crises like malaria.",
      content2:
        "According to the U.S. Bureau of Labor Statistics, employment in healthcare occupations is expected to grow by 16%, double the average for all occupations. This indicates a growing interest in Public Health as a career and the increasing importance of its role in global healthcare.",
    },
    {
      title: "Career pathways for Public Health graduates",
      subtitle1: "Public Health Educators",
      content1:
        "Public Health Educators, also called health promotion specialists or community health consultants, are responsible for educating the public on practices that improve health. They work in communities and healthcare facilities to create strategies for enhancing well-being, especially for high-risk populations.",
      subtitle2: "Public Health Nurses",
      content2:
        "Public Health Nurses, also known as community nurses, educate individuals on health issues and preventive measures. They provide care and advocate for improved healthcare standards.",
      subtitle3: "Epidemiologists",
      content3:
        "Epidemiologists use both qualitative and quantitative methods to gather and analyze data on health trends and diseases in populations. Their research helps shape health policies aimed at preventing the spread of diseases and improving treatment methods.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Public Health abroad</h1>
        <p>
          Public Health is dedicated to enhancing the health and well-being of 
        </p>
        <p>people around the world.If you’re looking for a meaningful career  </p>
        <p>in service to society, Public Health might be the perfect choice for you.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $48,860: the average yearly income for public health professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 16%: projected job growth for healthcare roles
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Employment change estimate by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 125,200 public health professionals working in the US by 2020
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

export default Publichealth;
