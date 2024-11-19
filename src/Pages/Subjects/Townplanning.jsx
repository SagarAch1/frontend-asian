import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Townplanning = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ visibility
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/productdesign.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
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
    color: "#4CAF50", // Making the icon visually appealing
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
      title: "What is Town Planning?",
      content1:
        "Town Planning is a multidisciplinary field that integrates areas such as architecture, engineering, surveying, and landscape design. The goal is to effectively manage land resources while addressing challenges like population growth, environmental sustainability, and community needs.",
      content2:
        "It involves strategic planning that ensures the land is used efficiently and effectively, keeping in mind the policies, development proposals, and local requirements. These factors help create balanced environments that meet both developmental and social needs.",
    },
    {
      title: "Is Town Planning the right field for me?",
      content:
        "A career in town planning requires strong analytical skills, effective communication, and the ability to make well-informed decisions. Town planners work with a variety of stakeholders, including government bodies, interest groups, and local communities, to ensure that plans meet both the technical and social needs of a community. If you possess skills in research, problem-solving, and coordination, town planning could be the perfect profession for you.",
    },
    {
      title: "Town Planning study options and costs",
      content1:
        "To pursue a career in town planning, you can opt for a bachelor's or master's degree. In the US, a bachelor's degree in town planning can cost between $20,000 to $40,000 annually. In the UK and Australia, tuition fees typically range from $17,000 to $25,000 and $15,000 to $33,000, respectively.",
      content2:
        "For a master's degree, which allows for specializations in areas like environmental planning or city design, the costs vary by country. In the US, expect to pay between $10,000 to $30,000 annually. In the UK, tuition fees for a master's program are typically between £9,000 and £30,000, while in Australia, the cost is between AUD 15,400 and AUD 26,600.",
    },
    {
      title: "What is the job outlook for Town Planners?",
      content1:
        "The demand for town planners is expected to grow as urbanization increases and more professionals are needed to accommodate expanding populations. According to the US Bureau of Labor Statistics, the job growth for town planners is projected at 7% from 2020 to 2030, which is faster than the average growth rate for most occupations.",
      content2:
        "Additionally, around 3,700 job openings for town and regional planners are projected each year over the next decade, creating abundant career opportunities in the field.",
    },
    {
      title: "Career paths for Town Planning graduates",
      subtitle1: "Estate Manager",
      content1:
        "Estate managers are responsible for managing and overseeing land and property resources, ensuring the smooth operation of estates in public, private, or heritage sectors.",
      subtitle2: "Local Government Officer",
      content2:
        "Local government officers are tasked with implementing policies set by local councils and ensuring that community services are provided efficiently. They play a key role in ensuring that urban planning is aligned with government objectives.",
      subtitle3: "Civil Service Administrator",
      content3:
        "Civil service administrators help implement government policies and ensure the smooth running of public services. They have the opportunity to influence local development and contribute to the well-being of the community.",
      subtitle4: "Environmental Manager",
      content4:
        "Environmental managers oversee the implementation of sustainable practices in public, private, or non-governmental organizations. They ensure compliance with environmental standards and help develop strategies for sustainable development.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Town Planning Abroad</h1>
        <p>
          Town planning is key to creating livable communities by efficiently
          using urban
        </p>
        <p>
          Enroll in a town planning program to unlock land for growing
          populations.
        </p>
        <p>exciting career opportunities in this evolving field</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$70,760:</strong> Average annual salary for a town planner
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>7%:</strong> Expected employment growth rate for town
            planners
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>3,700:</strong> Projected job openings for town planners
            annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>92.6%:</strong> Growth in town planners' numbers from 2018
            to 2019
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

export default Townplanning;
