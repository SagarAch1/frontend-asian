import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Planning = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/idesign.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
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
      title: "What is Planning?",
      content:
        "Planning is a multidisciplinary field that draws from geography, social welfare, law, and government reform. The discipline focuses on improving the functioning of society by managing urban growth, land use, transportation systems, and more. Through planning studies, students learn to develop strategies for the sustainable management of cities and communities.",
    },
    {
      title: "Is Planning the Right Career for Me?",
      content:
        "If you have a natural problem-solving ability and a knack for seeing the bigger picture, planning could be the perfect career. Those with a strategic mindset, capable of devising long-term solutions, will find success in the field of planning.",
    },
    {
      title: "What Are the Study Options and Costs for Planning?",
      content1:
        "Planning covers various fields such as community development, urban design, economic development, and transportation. You can pursue either a bachelor's or master's degree, or opt for a diploma program. The cost of studying planning is around $28,216 annually for a bachelor's program, and $18,751 annually for a master's degree.",
    },
    {
      title: "What is the Job Outlook in Planning?",
      content:
        "The demand for planning professionals is expected to grow by 11% in the next six years. This field remains in demand across both the public and private sectors, with many universities offering postgraduate programs. Internships during your degree will provide valuable industry experience and help pave the way for career success.",
    },
    {
      title: "Career Opportunities for Planning Graduates",
      subtitle1: "Project Manager",
      content1:
        "Urban planners help shape communities by guiding land and resource usage for infrastructure projects. They play a key role in both public and private sector planning, ensuring the efficient growth of urban areas.",
      subtitle2: "Urban Planner",
      content2:
        "Urban planners advise on the use and management of land, including zoning, housing, and infrastructure projects. This career offers abundant opportunities to influence the design and development of cities.",
      subtitle3: "Operations Manager",
      content3:
        "Operations managers in planning oversee project execution and ensure quality control. They handle administrative duties such as budgeting, hiring, and performance audits, often working alongside project directors.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Planning Abroad</h1>
        <p>
          Planning is essential for organizing and managing projects
          effectively. By earning
        </p>
        <p>
          a degree in planning, you'll gain the skills to strategically plan and
          execute{" "}
        </p>
        <p>large-scale projects, ensuring their success.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: $44,579-$104,030: annual salary range for
            planning professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 7% expected job growth for planners this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>44% of planners work in the private sector, 56% in
            the public sector
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Growing number of planning professionals currently
            employed in the US
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

export default Planning;
