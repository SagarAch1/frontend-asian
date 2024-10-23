import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Statistics = () => {
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
      title: "About Statistics",
      content1:
        "Statistics refers to the application of mathematical methods for gathering, dividing, presenting, analysing, and interpreting quantitative data. The collection and analysis of numerical data to arrive at precise inferences is what statistics is all about. This academic discipline has applications in a variety of fields.",
        content2:"Without statistics, we couldn't imagine economics. Statistics has helped make smarter decisions regarding the economy. Quantitative expression, policy formation, and economic equality are some of the economic benefits of Statistics.",
    },
    {
      title: "Is Statistics right for me?",
      content:
        "Statisticians are individuals with great mathematical ability and computer literacy to develop their models and analyses. They possess exceptional analytical skills to analyse problems and come up with solutions. Students with a knack for mathematics and problem-solving tend to perform best in this field of study. If you believe you possess the aforementioned qualities, then Statistics might be the ideal fit for you.",
    },
    {
      title: "Statistics study options and costs",
      content:
        "The first step towards a career in Statistics is to earn a bachelor’s degree in Statistics which has powerful applications in disciplines such as biology, medicine, sociology, chemistry, agriculture, education, engineering, economics, psychology, and quality control. It takes approximately 4 years to complete and tuitions costs around $35,807 per year in the US. A Statistics undergraduate programme in UK takes 3-4 years to complete depending on your specialisation and costs around £32,480 for overseas students. Students could also advance their careers by opting for a master’s degree in Statistics which usually takes 1-2 years to complete and costs around $28,891 in US. The master’s programme in UK costs around £14,000 per annum and takes 1 year (full-time) to complete.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, employment growth for statisticians is projected at 31% from 2021-2031. On average, 5,200 mathematicians and statisticians’ jobs will be available per year over the next decade.",
    },
    {
      title: "Career Pathways for Statistics graduates",
      subtitle1: "Financial Analyst",
      content1:
        "Financial analysts use their statistical skills to acquire and evaluate pertinent financial data to assess the performance of stocks and bonds and estimate future market outcomes.",
      subtitle2: "Cost Estimator",
      content2:
        "Cost estimators collect and analyse information in order to anticipate the total cost of completing a project, manufacturing a product, or providing a service. Cost estimators often incorporate more than just monetary costs in their assessments. To generate a comprehensive analysis, these professionals take into account factors such as time and labor. They usually specialise in certain marketplaces and use statistics to enhance the work of sales teams, product engineers and account managers.",
      subtitle3: "Statistician",
      content3:
        "When studying and solving organisational difficulties, statisticians and mathematicians analyse data and apply business models. They collect data through surveys and experiments after establishing the data they require to address a problem. In their assessments, these experts may use well-established notions, but they may also develop new theories, rules, and models. Following the completion of their analysis, statisticians write reports to assist their firms in making decisions and pursuing answers.",
      subtitle4: "Economist",
      content4:"Economists study issues such as the manufacturing and distribution of resources, services, and goods in a market. They are experts at researching market trends, gathering data, and drawing conclusions using statistical models. These specialists frequently work with corporations and government agencies, providing answers to a wide range of economic issues.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Statistics abroad</h1>
        <p>
          Statistics is concerned with the collection, analysis and
          interpretation of data. You will not only learn the theoretical
          aspects of statistics but in-demand skills such as statistical
          modelling, boosting your employability in a variety of industries.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary for agricultural scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 33% projected employment growth of mathematicians
            and statisticians this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary of top statisticians
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 52,000 projected job openings for mathematicians
            and statisticians this decade
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
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
                {item.content4 && <p>{item.content4}</p>}
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

export default Statistics;
