import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const EnvironmentalEngineering = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close for FAQs
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
    color: "#4CAF50", // Icon color enhancement
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
      title: "Introduction to Environmental Engineering",
      content1:
        "Environmental Engineering is a multi-disciplinary field that combines environmental science, mechanical engineering, chemistry, civil engineering, and ecology. Students learn to design and create solutions to address environmental challenges, helping to reduce pollution and protect natural resources.",
      content2:
        "Students in Environmental Engineering study pollution in water, air, and soil and develop technologies that align with environmental, social, and regulatory needs to solve or manage these issues.",
      content3:
        "The goal of Environmental Engineering is to make societal development and the use of resources like water, air, and land as sustainable as possible by minimizing pollution and environmental damage.",
      content4:
        "Key study areas often include topics like air quality management, industrial hygiene, hazardous waste management, toxic materials control, environmental chemistry, wastewater management, solid waste disposal, public health, and land-use planning.",
    },
    {
      title: "Is Environmental Engineering a Good Fit for You?",
      content1:
        "Environmental Engineering merges environmental science with engineering, requiring a solid grasp of science and mathematics, though it is less mathematically intensive than other engineering fields.",
      content2:
        "A strong desire to protect the environment is a positive indicator of interest in this field. Classroom theory, lab experiments, and field studies are all part of the learning experience. Students with analytical minds and strong problem-solving skills tend to excel. If this sounds like you, Environmental Engineering might be an excellent fit.",
    },
    {
      title: "Education Paths and Costs in Environmental Engineering",
      content1:
        "A bachelor’s degree in Environmental Engineering is the standard qualification for aspiring environmental engineers, typically requiring a background in similar fields like chemical, civil, or general engineering.",
      content2:
        "Some institutions offer a combined 5-year program leading to both a bachelor's and a master’s degree. A master’s degree opens opportunities to teach at universities or engage in research and development.",
      content3:
        "In the US, the average annual cost for Environmental Engineering programs ranges from $10,000 to $30,000.",
    },
    {
      title: "Career Outlook",
      content1:
        "Job opportunities for environmental engineers are expected to grow by 7% over the next decade, with many positions arising in professional, scientific, and technical services as governments seek assistance with water conservation efforts.",
      content2:
        "An estimated 40,000 jobs will open in this field over the next decade, making Environmental Engineering a promising career with attractive salaries and the rewarding aspect of environmental preservation.",
    },
    {
      title: "Career Options for Environmental Engineering Graduates",
      subtitle1: "Environmental Engineer",
      content1:
        "Environmental engineers apply expertise in engineering, soil science, chemistry, and biology to resolve environmental issues. They work in areas like pollution control, recycling, and public health, ensuring compliance with environmental standards. They may work in consulting firms, government agencies, municipalities, or non-governmental organizations.",
      subtitle2: "Civil Engineer",
      content2:
        "Civil engineers design, build, and maintain infrastructure, including roads, airports, bridges, power plants, and water systems, playing a crucial role in sustainable urban development.",
      subtitle3: "Hydrologist",
      content3:
        "Hydrologists study the movement of water through the Earth's crust, including precipitation and river flow patterns, as well as how water interacts with other natural elements before returning to the atmosphere or oceans.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={sectionStyle}>
        <h1>Study Environmental Engineering Abroad</h1>
        <p>
          Environmental Engineering applies engineering knowledge to solve
          environmental problems. 
        </p>
        <p>Global opportunities and the chance to make a
        positive environmental impact make this </p>
        <p>an appealing field of study.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average salary of environmental engineers per
            year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Expected job openings for environmental engineers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 7% anticipated growth in environmental engineering
            jobs
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average salary for top environmental engineers
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
