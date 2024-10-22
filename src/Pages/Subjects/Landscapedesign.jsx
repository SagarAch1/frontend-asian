import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Landscapedesign = () => {
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
      title: "About Landscape Design and Architecture",
      content1:
        "Landscape Design and Architecture is a sub-domain of architecture concerned with the design of outdoor spaces. Landscape architects plan and collaborate with the construction to design outdoor areas such as parks, resorts, monuments and other related spaces that are to be inhabited by people.",
      content2:"Today, environmental concerns and a general push for governments to promote outdoor planning and better designs of public areas has created a growing demand for landscape architects. Not only that, but private organizations also look for landscape architects to create workspaces that includes outdoor spaces, as well.",
    },
    {
      title: "Is Landscape Design and Architecture right for me?",
      content1:
        "Landscape design is a collaborative field. A professional in this field usually works alongside construction managers, other architects, engineers and planners to make sure the intended design is translated into the physical structure accurately. Not only that, but a landscape architect must have a creative problem-solving approach to tackle unanticipated challenges as they typically arise when working in outdoor spaces. To solve such problems, the landscape architect must also have an analytical approach, along with possessing the ability to visualise how a certain outdoor landscape will turn out.",
      content2:"So, if you believe you believe you have skills such as teamwork, creativity and an analytical approach, visualisation, then perhaps landscape design and architecture is the right field for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "A number of universities across Europe, America and Australia are renowned for their undergraduate and graduate programs in landscape design and architecture. Typically, graduate programs have a higher number of applicants and are more competitive.",
      content2:"In the US, international students typically pay an average of $30-40,000 annually to enrol in a landscape design and architecture program. The fee structure for graduate programs is similar, costing around $27,000-$35,000 annually. In Australia, the fee for a 4-year program in Landscape Design costs an average of $20-25,000. For graduate programs, students will be paying anywhere between $20-30,000 annually.",
    },
    {
      title: "Future outlook",
      content1:
        "Over the past decade or more, there has been a global effort by governments worldwide towards environmental sustainability. This effort includes a need for private and public sector organisations to developmore sustainable designs for outdoor spaces. Not only that, but more and more counties realise that the economic importance of tourism is closely tied to creating sustainable and aesthetic outdoor environments. In this regard, the need for and importance of landscape designers for projects such as public parks, monuments and other related spaces have increased dramatically.",
        content2:"In the US alone, around 16,000 new jobs for landscape architects are expected this decade! Landscape Architects earn higher salaries than the average US citizen. Given all this, the future prospects for landscape architects look bright.",
    },
    {
      title: "Career pathways  for Landscape Design and Architecture graduates",
      subtitle1: "Urban Design",
      content1:
        "An urban designer has the responsibility of planning, creating and designs related to outdoor urban spaces. They often work with government organisations to coordinate the design and building of outdoor spaces in urban areas in this regard. This might include creating maps, coordinating with construction teams and on-site review of the urban area.",
      subtitle2: "Landscape Planning and Management",
      content2:
        "A landscape planner has the responsibility of creating designs for outdoor spaces, and further collaborating with the construction teams to review and provide feedback throughout the building process. They are often contracted to act as the final authority to pass or reject outdoor areas being worked on by construction crews. They provide their insights, suggest on-site changes, and decide whether the constructed area is in accordance with the original design or not.",
      subtitle3: "Academia",
      content3:
        "A landscape architect working in academia would typically be collecting data and presenting a unique analysis on specific approaches that can be undertaken by field workers to maximise efficiency. For example, an academic could research and suggest methods that can be implemented in the outdoor designing process to save resources and increase environmental sustainability.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Landscape Design and Architecture abroad</h1>
        <p>
          Ever wondered how outdoor spaces such as parks, resorts and monuments
          are built? Landscape architects work behind the scenes to design it
          all. If you are someone creative and have a love for outdoors, this
          could be the career path for you.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: Median annual wage of landscape architects
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>s</strong> Currently employed landscape architects in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Landscape architects in the public sector have a
            median annual pay of $83,800
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 3% expected growth in employment for landscape
            architects
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

export default Landscapedesign;
