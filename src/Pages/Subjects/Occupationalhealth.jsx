import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const OccupationalHealth = () => {
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
      title: "About Occupational Health and Safety",
      content:
        "Occupational Health &Safety is the study of practices that ensure that workplaces are safe for both employees and employers. It focuses on identifying and minimising workplace hazards and risks that may cause physical, emotional, or social harm to employees. Occupational Health &Safety also protects employers from liabilities of having an unsafe work environment and reduces their risk of property damage. A degree in Occupational Health & Safety will prepare students to create healthier communities and workplaces, create and promote sustainable workplace environments, and develop emergency response and disaster planning. Students learn to apply risk management principles and how to examine management tools to implement effective safety management systems. ",
    },
    {
      title: "Is Occupational Health & Safety right for me?",
      content1:
        "Earning an Occupational Health & Safety degree can prepare you for a fulfilling career in practically every industry. Safety is a principal foundation of public and private workplaces. Consequently, every industry stands in need of professionals that can analyse occupational risks and implement solutions.",
      content2:"Pursuing this type of degree can familiarises a student to the rigors of working in a real-world environment. Students often attain the skills to lead, to manage time effectively, and to make decisions regarding workplace safety standards. These skills can greatly enhance your marketability when seeking employment. Not to mention, this is a rewarding career as you help create a safer work environment for both employee and employers.",
    },
    {
      title: "Occupational Health and Safety study options and costs",
      content1:
        "A bachelor’s in Occupational Health & Safety usually takes 3 to 4 years to complete. This degree prepares students to evaluate the safety conditions of different kinds of workplaces and provide advice. Some common course modules students can expect to study are Industrial Hygiene, Safety Laws, Ergonomics, and Toxicology Materials. This degree prepares students to evaluate and report health concerns, giving them the tools they need to make informed recommendations. The average annual tuition cost for an Occupational Health & Safety undergraduate programme is $13,822.",
      content2: "A master’s degree in Occupational Health & Safety can prepare you to work towards ensuring a safe working environment. Some of the topics typically included in this field of study are Construction Safety, Industrial Technology, Hazardous Materials Management, and Accident Investigation. The average annual tuition cost of a master’s program in occupational health and safety is $18,705",
    },
    {
      title: "Future outlook",
      content1:
        "Each year, thousands of individuals are injured or die from work-related accidents. Both government and private businesses are highly motivated to reduce this number. Governments are developing strict occupational health safety (OHS) regulations, and businesses are hiring professionals who can help them meet these regulations. ",
      content2: "There are Occupational Health & Safety career opportunities in almost every sector of the economy. Health and safety professionals work in both the private and public sector. Wherever there are workplaces to be inspected and workers to be protected, you will find OHS jobs. In fact, more than 9,600 jobs for Occupational Health & Safety specialists and technicians are projected each year in the US alone! The prospects of Occupational Health & Safety are no doubt bright.",
    },
    {
      title: "Career pathways for Occupational Health and Safety graduates",
      subtitle1: "Occupational Health & Safety specialists",
      content1:
        "Occupational Health & Safety specialists inspect workplaces for adherence to regulations on safety, health, and the environment. Occupational Health & Safety specialists and technicians collect data and analyse various types of work environments and work procedures. These individuals earn on average $77,560 per year.",
      subtitle2: "Ergonomist",
      content2:
        "Ergonomists ensure that the designs of systems, equipment and facilities provide the highest efficiency, comfort and safety for anyone using them. Ergonomists are also known as Human Factors specialists. Their role involves ensuring that equipment and products are as safe and easy to use as possible. The average annual salary of an ergonomist is $74,564.",
      subtitle3: "Occupational Health & Safety Inspectors",
      content3:
        "An Occupational Health & Safety inspector inspects and identifies all possible forms of hazards in a work environment. They ensure compliance with OHS and check equipment to ensure it is in working condition and does not pose any hazard to the operator or the environment. Their annual average income is around $152,768.",
        subtitle4:"Environmental Health Technician",
        content4:"An environmental health technician is someone who works in the public sector to identify and correct various environmental health issues. They examine the environment and its impact on the population, determine what issues may exist within it, and then work to find a way to tackle those problems. The average annual salary of an environmental health technologist is $54,000.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Occupational Health & Safety abroad</h1>
        <p>
          Occupational Health & Safety is the science of making the workplace a
          healthy and safe environment. Students of this discipline develop a
          breadth of technical knowledge, critical thinking and problem-solving
          skills making them highly employable.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $14.2 billion estimated worth of the occupational
            health & safety industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of an occupational health &
            safety specialist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 9,600 projected job openings for each year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7% projected employment growth for occupational
            health & safety specialists
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

export default OccupationalHealth;
