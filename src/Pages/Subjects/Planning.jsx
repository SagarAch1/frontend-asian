import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Planning = () => {
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
      title: "About Planning",
      content:
        "The study of planning has its roots in geography, social welfare, landscape architecture, engineering, law, and government reform studies. Planning encompasses several disciplines from the social sciences. The discipline emphasises the development of people in society. In planning studies, the focus areas include environmental planning and management, land development planning, and urban design. During your degree, you’ll learn about the management of cities growth, transportation systems, recreational parks, and more. ",
    },
    {
      title: "Is Planning right for me?",
      content:
        "First and foremost, you must have a knack solve problems. Secondly, you should have a strategic mindset that enables you to see the bigger picture and come up with long-term strategies. If you think you have these two traits, you have the required ingredients to become a successful strategic planning professional. ",
    },
    {
      title: "Planning study options and costs",
      content1:
        "There are a number of different programs being offering in planning including Community development, long-range planning, economic development, natural resources planning, food systems planning, disaster recovery planning, housing, land use and code enforcement, parks and recreation, transportation planning, and urban design are a few to name. You may opt for a bachelor or master’s program. Some institutions also offer diploma programs in planning.",
        content2:"A 4 year bachelor’s program in planning on average costs $28, 216 per year. As for a master’s degree, the average tuition fee per year is $18,751.",
    },
    {
      title: "Future outlook",
      content:
        "A career in the field of planning is promising in terms of career growth. The demand for planning professionals is projected to increase by 11% over the next 6 years! Because it is a perennially in-demand profession, there are a number of universities programs offering post-graduate studies in this field. Just make sure to acquire industry experience during your degree through internships and you’re on a career trajectory for success.",
    },
    {
      title: "Career pathways for Planning graduates",
      subtitle1: "Project Manager",
      content1:
        "Those who serve as urban planners have a transformational impact on society. Urban planners or city planners are responsible for helping communities to use land and resources as effectively as possible. They are hired to advise and help plan different infrastructure projects and manage the growth of communities in a certain vicinity. They find abundant job opportunities to work in both the public and private sectors.",
      subtitle2: "Urban Planner",
      content2:
        "A crop consultant or advisor provides advice on crop management, including seed planting, fertilisation, pest management, and treatment for plant diseases. Crop consultants can assist growers all around the globe increase crop productivity.",
      subtitle3: "Operations Manager",
      content3:
        "An operation manager performs higher-level human resource duties. Their responsibilities include hiring, productivity, quality control and so on. Operations managers work closely with the project director to design an operational budget for a firm. They also manage performance audits and create reports to track the quality of their service. They must be technology savvy to make their work efficient.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Planning abroad </h1>
        <p>
          Before starting any project, it is critical to list down the scope and
          objectives and make a detailed plan on the activities involved in the
          successful execution of the project. With a degree in planning, you
          could outline the plan for your organisation!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: $44,579-$104,030: annual income range of planning
            professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 7% growth in employment rate expected for planners
            this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>44% of planners work private sector, while 56%
            works in the public sector
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Planning professionals currently working in the US
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

export default Planning;
