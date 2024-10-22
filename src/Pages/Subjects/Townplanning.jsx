import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Townplanning = () => {
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
      title: "About Town Planning",
      content1:
        "Town planning is an interdisciplinary field that draws upon fields like planning, architecture, surveying, landscape architecture and construction engineering to help address the global challenge of land resource management in an integrated fashion. Town planning also includes strategy planning, which is imperative in order to manage the future requirement of land.",
      content2:
        "It is important to note that the needs and requirements of managing land will depend greatly on the policies, development proposals, as well as the needs of the locals. Such dynamics are essential in order to ensure a balance between the demands of the land that is being developed, as well as meeting the needs of the locals.",
    },
    {
      title: "Is Town Planning right for me?",
      content:
        "Town planners are skilled at analysing information, resources, conducting market research and management skills. Because town planners will have to manage resources, specifically land resources, they are highly skilled at planning assignments and decision-making. They combine creativity and realism to execute a plan or action. Town planners are also skilled communicators as they interact with different officials, interest groups, and locals presenting them with proposals. If you possess the above-mentioned qualities, then you are a great fit for this profession.",
      
    },
    {
      title: "Town Planning study options and cost",
      content1:
        "There are various study options that could help you become a town planner including bachelors and masters degrees. If we look at the cost of a bachelor’s degree in town planning, it can cost you anywhere between $20,000 to $40,000 per year in the US. However, if you go for a Bachelor’s degree in the UK or Australia, it can cost you between $17,000 to $25,000 per year and $15,000 to $33,000 per year, respectively.",
      content2:
        "The next step in your education would be a master’s degree in town planning. Of course, which master’s program you will go for will vary according to the electives, coursework, as well as geographical and environmental location of the school. You can further specialise in a subfield, such as environmental planning or city design. A master’s degree in town planning in the US will cost you anywhere between $10,000 to $30,000. As for the UK and Australia, a master’s degree in the same field will cost you £9,000 to £30,000 and AUD15,400 to AUD26,600, respectively.",
    },
    {
      title: "Future outlook",
      content1:
        "Town Planning in the future is expected to continue being a promising career, as more town planners are needed in order to accommodate the growing population. As far as growth is concerned, reports by the US Bureau of Labor Statistics have estimated a 7% job growth between 2020-2030, which is as fast as the average for most occupations in the market.",
      content2:
        "It is further estimated that around 3,700 job openings for regional and town planners are projected each year over the decade.",
    },
    {
      title: "Career pathways for Town Planning graduates",
      subtitle1: "Estate’s manager",
      content1:
        "Estate’s managers are responsible for managing land resources, as well as property for organisations in the public, heritage and private sectors. The core duty of an estates manager is to ensure an estate runs as smoothly as possible.",
      subtitle2: "Local government Officer",
      content2:
        "Local government officers have the responsibility to make decisions regarding the local government policy made by local councils. They ensure these policies are put into action, and local services are provided in the correct manner. Local government officers are also responsible for the practical development of council policies and procedures and ensuring that local services are delivered efficiently and cost-effectively.",
      subtitle3: "Civil service administrator",
      content3:
        "Civil service administrators are responsible for executing government policies and delivering basic services to the public. They also ensure the smooth day-to-day running of the town. Because civil service administrators directly interact with the community members, they have a chance to make positive change at the grassroots level of government. Of course, the job title will vary according to which department you will work in.",
      subtitle4: "Environmental Manager",
      content4:"Environmental managers have the responsibility to oversee private, public or non-governmental organisations, to ensure that the environmental standards and legislation are met, according to the environmental guidelines and targets that have been set. Environmental managers analyse various sorts of corporate activities, in order to determine where improvements can be made. They are also responsible for devising and implementing environmental strategies to promote sustainable development.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Town Planning abroad</h1>
        <p>
          Town planning helps create liveable communities. It refers to
          optimising urban land resources to cater to growing populations. Enrol
          in a town planning program to open doors for exciting career
          opportunities!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>$70,760: average annual salary for a town planner
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 7%: expected employment growth rate of town
            planners this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 3,700: job opening project each year for town
            planners
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 92.6% : growth rate in the number of town planners
            from 2018 to 2019
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

export default Townplanning;
