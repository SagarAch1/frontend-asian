import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Architecture = () => {
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
      title: "About Architecture",
      content:
        "Architecture as a field is concerned with the planning and design of structures such as buildings, homes, bridges, and even entire cities. Architects play a central role in the construction and design of any structure and must have a sound understanding of the various facets of construction. It is the responsibility of the architect to design structure creatively while keeping both resource and safety concerns in mind.",
    },
    {
      title: "Is Architecture right for me?",
      content:
        "Architects possess the skill-set to analyse, plan in detail, and collaborate with a diverse range of people when working on any project. A professional in this field also needs to have a creative approach towards real-world problems, as it’s important to adapt and work around problems as they might happen during the construction process. An architect also needs to visualise and detail on the map any building, home, or bridge that needs to be constructed. If you are adept at visualisation and are a scrupulous planner then the field of architecture is the right fit for you.",
    },
    {
      title: "Architecture study options and cost",
      content1:
        "Students aspiring to study architecture have opportunities available to them in a large number of countries. For a bachelor’s degree, candidates should keep in mind that the general duration of a bachelor’s degree in architecture is 5 years, rather than 4 years like in many other bachelor programs. The general duration of a master’s program in architecture is 2-3 years.",
      content2:"In the US, the average cost varies from $30,000 to $60,000 annually for a bachelor’s degree. However, some top-ranking universities such as Cornell, UC Berkley, Harvard and UCLA can cost even more.  In Australia and the UK, the average cost of a bachelor’s degree in architecture is around $40,000-50,000 annually.",

    },
    {
      title: "Future outlook",
      content:
        "Architecture as a career path holds a bright future, with an outlook for a steady and consistent growth trajectory expected in the coming years. Around 4% growth in this area is expected in the next 5 years as global infrastructure development continues being the focus. For those getting a degree in this area, there are several career options to consider such as town planner, building architect and interior designer, etc.",
    },
    {
      title: "Career pathways for Architecture graduates",
      subtitle1: "Building Architecture",
      content1:
        "Skyscrapers, houses and everything in between requires an architect to plan and design the building before the constructions can begin. An architect prepares the blueprint which is to be followed by the construction team to successfully construct the building. Furthermore, the architect creates feasibility reports, manages the budget and determines a timeline to be adhered to by the construction crew.",
      subtitle2: "Interior Designer",
      content2:
        "An interior designer uses the principles of design and architecture in order to create a visually pleasing environment within the interior of a building. Many companies hire professional interior designers to create a visual look for their interior that represents the company’s core values and boosts productivity. Interior designers assess the space available, determine optimal furniture placement, estimate cost and execute their vision for an aesthetically pleasing and functional interior.",
      subtitle3: "Town Planner",
      content3:
        "Town planners create sustainable architecture designs that meet the demands of the residents while keeping population, transport and green infrastructure concerns in mind. Town planners conduct research to determine the best construction location, draft and review construction plans, consult and negotiate with developers, enforce development protocols and prepare progress reports. ",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Architecture abroad</h1>
        <p>
          Architecture is the study of designing structures and buildings that
          not only afford utility but also beauty and comfort. It distinguishes
          itself from other art forms in that it materialises the abstract in
          the form of large buildings and structures! 
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$88,000</strong>  average salary of an architect in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>9000</strong>  new jobs projected each year for architects
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>4%</strong>  projected growth in the Architecture field
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>120,000</strong>  architects currently employed in the U.S
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

export default Architecture;
