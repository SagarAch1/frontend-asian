import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SocialJustice = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle section visibility
  };

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

  const statisticsSectionStyle = {
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

  const iconStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Green color for better visibility
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
      title: "About Social Justice",
      content:
        "A degree in Social Justice examines the societal disparities and the solutions to address them. Students explore political and ethical aspects of social work, focusing on issues like inequality, poverty, discrimination, and injustice. It can be pursued at the bachelor’s, master’s, and doctoral levels. The degree also introduces students to social welfare and involves advocacy for marginalized groups.",
    },
    {
      title: "Is studying Social Justice right for me? ",
      content:
        "A degree in Social Justice helps develop valuable skills such as patience, trust-building, empathy, communication, and open-mindedness. These abilities are highly transferable to the professional world, making the degree suitable for those who wish to contribute to societal improvement through reformation and innovation.",
    },
    {
      title: "Study options and costs ",
      content1:
        "A bachelor's degree in Social Justice is essential for those wanting to work practically in the field. The program lasts 4 years and covers essential topics such as social service systems, human behavior, diversity, and social movements. The typical cost in the US ranges from $28,000 to $35,350 annually, depending on the university.",
      content2:
        "For those interested in research and theory, a master's degree lasts 2 years and includes specialization options. Core topics might include gender studies, child welfare, mental health, and critical race studies. The average cost for international students at University College London is around $32,000 to $34,000 per year.",
      content3:
        "A doctoral degree focuses on independent research and takes 3-5 years to complete. The program prepares students to address complex social issues with the aim of creating positive social change. The cost for a doctorate in the US ranges from $40,000 to $120,000 per year, depending on the institution.",
    },
    {
      title: "Future outlook",
      content:
        "The demand for social workers is expected to grow by 12% from 2020 to 2030, with an additional 346,900 jobs. The increasing need for social workers in schools, healthcare, and community settings, particularly due to rising mental health issues and an aging population, is driving this growth.",
    },
    {
      title: "Career pathways for Social Justice graduates",
      subtitle1: "Journalist",
      content1:
        "Journalists specializing in social justice focus on raising awareness about vulnerable groups, exposing injustices, and holding societal powers accountable. The average salary in the US is $48,370 per year.",
      subtitle2: "Community developer",
      content2:
        "Community developers work with marginalized groups to plan projects, manage funding, and foster community unity. Their responsibilities include assessing needs and understanding legal frameworks. The average salary is $61,835 per year.",
      subtitle3: "Analyst",
      content3:
        "Policy analysts research trends related to social, economic, and political issues, influencing public policy and societal changes. They evaluate policies and help develop new programs. The average salary in the US is $83,380 per year.",
      subtitle4: "Social worker",
      content4:
        "Social workers assist individuals and families to overcome challenges such as abuse, addiction, and mental illness. They focus on improving lives through supportive interventions. The average salary in the US is $50,400 per year.",
    },
  ];

  return (
    <div>
      {/* Hero section with background image */}
      <div style={sectionStyle}>
        <h1>Study Social Justice abroad</h1>
        <p>
          If you’re passionate about making a difference and promoting change, 
        </p>
        <p>studying Social Justice could be the right path for you. The field covers  </p>
        <p>areas like social policy, politics, welfare, and mental health.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSectionStyle}>
        <div style={statCardStyle}>
          <div style={iconStyle}>🌟</div>
          <p>Median annual salary of social and community service workers in the US</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>📈</div>
          <p>15% increase in employment of social and community service workers</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>💼</div>
          <p>Projected growth in social worker employment (2020-2030)</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>🔧</div>
          <p>High satisfaction rate among social justice professionals</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleSection(index)}>
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

export default SocialJustice;
