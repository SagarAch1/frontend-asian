import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Masscommunication = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggles the accordion item open and close
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
    color: "#4CAF50", // Adds a visually appealing color to icons
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
      title: "About Mass Communication",
      content1:
        "Mass Communication refers to the dissemination of messages to large audiences at once. On a broader scale, it involves the widespread distribution of information across regions and globally. The field covers the use of print and digital media to communicate effectively through platforms like social media, books, newspapers, magazines, television, or radio.",
      content2:
        "Mass Communication studies mainly explore how content influences or impacts the behaviors, attitudes, opinions, and emotions of recipients.",
    },
    {
      title: "Is Mass Communication right for me?",
      content:
        "Mass Communication suits students who are creative, spontaneous, and possess strong social and communication skills. Throughout their studies, students will become familiar with media laws and ethics and the intricacies of modern communication tools. Qualities like curiosity, persistence, and dedication can further enhance success in this field.",
    },
    {
      title: "Study options and costs",
      content1:
        "After completing high school, students can pursue a bachelor’s degree in Mass Communication, covering topics such as global media, journalism, film production, publishing, visual communication, and international politics. The degree typically spans four years and costs up to $68,000.",
      content2:
        "Graduates may continue to a master’s in Mass Communication, which usually involves research culminating in a thesis. Core areas include Media Ethics, Communication Research, Digital Production, and Strategic Communications in a Global Environment. The program generally lasts two years, with costs up to $48,900 in the US.",
      content3:
        "Students seeking further specialization or career advancement may consider a PhD in Mass Communication, requiring coursework, seminars, and theoretical classes. Many programs require comprehensive exams, research projects, and sometimes teaching assignments. The degree typically takes three to five years, costing up to $45,000 in the US.",
    },
    {
      title: "Future outlook",
      content:
        "Media and communication jobs are expected to grow by 14% in this decade, which is faster than the average for all fields. The Mass Communication industry is projected to add 151,500 new jobs by 2030, driven by demand to create, edit, translate, and distribute information across various platforms, including social media.",
    },
    {
      title: "Career Pathways for Mass Communication graduates",
      subtitle1: "Director of Communications",
      content1:
        "A Director of Communications manages the flow of information from an organization to the public. They oversee communications teams, develop campaigns, and lead public relations and marketing strategies. The average annual salary is around $90,000 in the US.",
      subtitle2: "Public Relations Specialist",
      content2:
        "These specialists work on maintaining a positive public image for clients and businesses, requiring strong problem-solving and media skills. The average annual salary is $62,800 in the US.",
      subtitle3: "Journalist",
      content3:
        "Journalists research, gather, and present news on a variety of events. They build contacts, investigate leads, and conduct both first-hand and secondary research. Journalists earn an average of $48,370 per year in the US.",
      subtitle4: "Film Editor",
      content4:
        "Film editors manipulate images to produce movies and shows, ensuring images are properly sequenced. The average annual salary is $60,360 in the US.",
      subtitle5: "Media Planner",
      content5:
        "Media planners work with advertising and PR agencies to develop and manage advertising campaigns. The average annual salary is $60,319 in the US.",
      subtitle6: "Event Manager",
      content6:
        "Event managers oversee the planning, execution, and follow-up of various public and private events. They handle venue selection, permits, sponsor negotiation, and coordination with suppliers. The average salary is $55,550 per year in the US.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Mass Communication abroad</h1>
        <p>
          Mass Communication is the study of relaying information to a large audience through both traditional and 
        </p>
        <p>modern media. Graduates may find employment in news agencies, television, film, or digital media companies.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $54,000: average annual salary for those with a degree in communications
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Number of employees with a communications degree in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Job openings for media and communication professionals by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 14% projected job growth in media and communication fields
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
                {/* Render subtitles and content */}
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
                {item.content5 && <p>{item.content5}</p>}
                {item.subtitle6 && <div style={faqSubtitleStyle}>{item.subtitle6}</div>}
                {item.content6 && <p>{item.content6}</p>}
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

export default Masscommunication;
