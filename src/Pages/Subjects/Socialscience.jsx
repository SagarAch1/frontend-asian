import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SocialScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/huma.jpeg)`,
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
    color: "#4CAF50", // Attractive color
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
      title: "What is Social Science?",
      content1:
        "Social Science is a broad field that includes disciplines like psychology, economics, politics, law, linguistics, history, anthropology, and sociology. Emerging in the 18th century, it helps in understanding society as a whole. It allows you to examine societal progress and challenges. As a subject, it strengthens critical thinking, analytical, and problem-solving abilities.",
      content2: "Social Science gives you the opportunity to study various areas such as psychology, economics, and political systems. Economics allows you to explore the relationship between production and consumption, while also covering micro and macroeconomics. It opens career paths as an analyst, helping shape economic policies. Similarly, political studies help understand and analyze a country's political trends.",
      content3: "Various careers in law, politics, counseling, and social services require a background in Social Science. Salaries in these fields range from USD 50,000 to over USD 100,000. One of the advantages of studying Social Science is the flexibility in choosing from a range of career paths that align with your skills and interests.",
    },
    {
      title: "Is Social Science suitable for me?",
      content:
        "To excel in Social Science, strong communication, research, writing, interpersonal, and listening skills are essential, along with a deep curiosity. If you possess these qualities, this field will foster your professional growth.",
    },
    {
      title: "Study options and costs for Social Science",
      content1:
        "In the United States, 529 colleges offer Social Science programs. You can pursue both undergraduate and postgraduate degrees. To enroll, there’s no specific prerequisite degree required. A Bachelor's degree in Social Science allows you to select a major and minor to guide your career decisions. The average cost for a bachelor's in Social Science in the US is around USD 17,000 per year, while in Australia it’s about AUD 30,000 annually.",
    },
    {
      title: "Future prospects for Social Science",
      content:
        "As the world evolves, new challenges and solutions arise in fields like economics and sociology. This has led to a growing demand for Social Science experts who can study the impact of these challenges and evaluate the effectiveness of solutions. The field is expected to thrive, with job opportunities rising by 13%. Salaries in Social Science will remain competitive and high over the years.",
    },
    {
      title: "Career opportunities for Social Science graduates",
      subtitle1: "Sociologist",
      content1:
        "Sociologists analyze social patterns and cultural development. Their work involves conducting interviews, gathering and analyzing data, and drawing conclusions based on their findings.",
      subtitle2: "Legal and Justice Careers",
      content2:
        "Social Science graduates can pursue careers in law as lawyers, paralegals, or legal assistants. Career options within this field include becoming a counselor or judge.",
      subtitle3: "Economist",
      content3:
        "Economists play a crucial role in strategic government planning by analyzing data and forecasting economic trends. Their analysis influences legislation and policymaking.",
      subtitle4: "Social Worker",
      content4:
        "Social workers help people overcome challenges like addiction, poverty, and disabilities. To practice, a Bachelor's degree is required, and they are essential in both healthcare and non-profit sectors.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Social Science abroad</h1>
        <p>
          If you are interested in understanding human behavior and the interactions 
        </p>
        <p>between people from various backgrounds and how this influences the  </p>
        <p>economy and culture, studying Social Science is the perfect choice for you.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 13% increase in employment opportunities in the Social Science job market
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $85,847: average annual earnings of a social scientist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $105,630: average yearly salary of economists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average salary of data analysts
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
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
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

export default SocialScience;
