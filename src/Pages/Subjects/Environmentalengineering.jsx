import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const EnvironmentalEngineering = () => {
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
      title: "About Environmental Engineering",
      content1:
        "Environmental Engineering is interdisciplinary degree, which intergrates environmental science, mechanical engineering, chemistry, civil engineering and ecology. Students learn how to design, develop and produce tools, devices and systems that mitigate pollution and help preserve the environment.",
      content2:
        "As an Environmental Engineering student, you will research water, soil, and air pollution issues and develop technical solutions compatible with legislative, economic, social, and political concerns to solve, mitigate, or control these issues.",
      content3:"Environmental Engineering is geared towards making societal growth and the utilisation of water, land, and air resources as sustainable as possible. This objective is attained by managing these resources in such a way that pollution and deterioration of the environment are minimised.",
      content4:"Some core subject areas may include air pollution control, industrial hygiene, hazardous waste management, toxic materials control, risk assessment, environmental chemistry, wastewater management, solid waste disposal, public health, and land management.",
    },
    {
      title: "Is Environmental Engineering right for me?",
      content1:
        "Environmental Engineering blends both environmental science and engineering together. Therefore, a thorough understanding of both the sciences and mathematics are pre-requisites to excel in this programme. However, don't be taken aback since the mathematics involved is not as advanced as in other engineering programmes.",
      content2:
        "An intrinisic motivation to help preserve the environment is a strong indicator of your interest in this subject. Classroom lectures, laboratory science work, and fieldwork will all be part of your education. Moreover, students who have analytical minds and have a gift for problem-solving tend to perform best. If you believe you possess the aforementioned qualities, then you're an ideal fit for Environmental Engineering.",
    },
    {
      title: "Environmental Engineering study options and costs",
      content1:
        "A bachelor's in Environmental Engineering is the ideal education for those looking to become environmental engineers. Typically you must have have a background in similar education such as chemical, civil, or general engineering.",
      content2:
        "You can also enrol in a 5-year programme that leads to both a bachelor's and a master's degree at several institutions and universities. An engineer with a master's degree can also teach at colleges and universities or conduct research and development.",
      content3:
        "The average tuition cost of Environmental Engineering courses in the US is $10,000 to $30,000 per year.",
    },
    {
      title: "Future outlook",
      content1:
        "Employment opportunities for environmental engineers is expected to expand by 7% this decade. Environmental engineers will see the majority of their job growth in professional, scientific, and technical services, as state and local governments turn to the industry for help with water efficiency concerns.",
      content2:
        "Environmental engineers are expected to have roughly 40,000 job openings this decade. Plentiful career opportunities, handsome salary packages and the sense of preserving the environment make environmental engineering an increasingly popular branch of study.",
    },
    {
      title: "Career pathways for Environmental Engineering graduates",
      subtitle1: "Environmental Engineer",
      content1:
        "Environmental engineers use knowledge of engineering, soil science, chemistry, and biology to solve problems in the environment. They tackle a variety of issues, and their concerns include pollution control, recycling, and public health issues. They help bring public and non-public bodies bring their activities in conformity with environmental standards mandated by legislation. Environmental engineers may find work in consulting firms, municipalities, government agencies, industries, non-governmental organisations.",
      subtitle2: "Civil Engineer",
      content2:
        "Civil engineers plan, design, and supervise the construction and maintenance of building structures and infrastructure such as roads, railways, airports, bridges, harbours, dams, irrigation projects, power plants, and water and sewerage systems, among other things.",
      subtitle3: "Hydrologist",
      content3:
        "Hydrologists investigate the flow of water over and through the Earth's crust. They investigate how precipitation such as rain and snow affect river flows and groundwater levels, as well as how surface and groundwater evaporate back into the atmosphere or eventually reach the oceans.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Environmental Engineering abroad</h1>
        <p>
          Environmental Engineering is the branch of engineering concerned with
          applying engineering principles to provide solutions to environmental
          challenges. Global opportunities paired with the chance to serve the
          environment help make this subject popular.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of an environmental engineer
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Jobs openings project for environmental engineers
            this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>7% expected growth in employment opportunities for
            environment engineers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average annual salary of top environmental
            engineers
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

export default EnvironmentalEngineering;
