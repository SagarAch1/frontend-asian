import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Fishery = () => {
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
      title: "About Fishery studies",
      content:
        "Fisheries are social, biological, and geographic entities dedicated to the production of fish for human use. The science comprises studying freshwater, marine, and aquatic systems which involve humans. It studies factors affecting capture and stock sustainability. There are a wide range of fisheries programs you can study at undergraduate and graduate level that will enable you pursue your quest for excellence in aquaculture. ",
    },
    {
      title: "Is Fishery studies right for me?",
      content:
        "A background in biology is ideal, as this field requires developing a complex understanding of aquatic animalbehaviour and their relationship with the natural environment. It also requires constant communication with internal teams, field staff and the supply chain networks, which means you would need strong communication and team building skills. ",
    },
    {
      title: "Fishery studies study options and costs",
      content:
        "An Associate Degree (2 years), Bachelor's Degree (4 years) andMaster's Degree (1-3 years) are the most popular options for students who wish pursue fishery sciences. Theaverage tuition costs are $23,804 per year for undergraduate programs and $24,648 yearly for graduate programs in Australia.James Cook's University, Flinders University, TAFE Western Australia University, University of Wollongong, and the University of Tasmania are some renowned universities offering degree programs in the subject. ",
    },
    {
      title: "Future outlook",
      content:
        "Fisheries are a primary source of income for nearly 250 million people around the world. Between 2016 and 2026, the number of people working in the field of fisheries sciences is projected to increase by 2.3 percent. ",
    },
    {
      title: "Career pathways for Fishery studies graduates",
      subtitle1: "Fisheries Biologist",
      content1:
        "They are wildlife biologists who works with fish stocks in aquatic areas evaluating trends, stocks and changes in the environment.",
      subtitle2: "Fisheries Officer",
      content2:
        "The resource management of a fishery facility is overseen by a fisheries officer. They frequently supervise activities that may have an impact on endangered or threatened species.",
      subtitle3: "Fishery Manager",
      content3:
        "Fishery managers are responsible for overseeing all parts of a fishery, including screening cultivation areas, monitoring the growth of fish, maintaining equipment, preparing food, prescriptions, and collaborating with other fishery managers.",
      subtitle4: "Fishery technician",
      content4:"A fisheries technician oversees and assists with the day-to-day operations of a fishery. They are in charge of feeding and caring for the fish, as well as the overall facility upkeep.",
      subtitle5: "Fishery Observer",
      content5:"Fisheries Observers are the fisheries' eyes and ears on the water and at-sea monitors. They gather information from commercial fishing and processing vessels, as well as shore side processing businesses and receiving vessels.",
      subtitle6: "Fisheries Development Officer",
      content6:"They provide technical help, such as introducing new fishing tactics and planning and conducting training in fish quality and handling practices, vessel operations, at-sea safety, and fishing and fish-finding technology. They impart training for safe fishing operations to fishing captains and crews.",
     
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Fishery studies abroad</h1>
        <p>
          Fishery studies are aimed at imparting academic and practical
          knowledge about rearing, breeding and harvesting fish. A degree in
          Fishery studies is great way to pursue your passion for aquaculture
          and work towards building a rewarding career.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>More than 26 colleges</strong>:  in the US offer degrees in fishery sciences
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Fisheries sciences</strong>  opportunities are projected to grow by 8%
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Fishery graduates</strong>  earn on per year in USA
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>527% </strong> increase in global aquaculture production
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
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
                {item.subtitle6 && (
                  <div style={faqSubtitleStyle}>{item.subtitle6}</div>
                )}
                {item.content6 && <p>{item.content6}</p>}
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

export default Fishery;
