import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Masscommunication = () => {
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
      title: "About Mass Communication",
      content1:
        "The transmission of messages to many recipients at a time is called Mass Communication. At a larger level, it can be understood as an extensive circulation of information within regions and across the globe. It is a field of study which involves the use of print and digital media to effectively impart and disseminate news/ information using social media, books, newspapers, magazines, televisions or radio.",
      content2:"The studies in Mass Communication chiefly focus on how the content persuades or affects the behaviours, attitudes, opinions and emotions of the people receiving the information. ",
    },
    {
      title: "Is Mass communication right for me? ",
      content:
        "Students who are creative, spontaneous and have good social and communication skills may pursue studies or a profession in Mass Communication. During the studies, students will develop a keen awareness of media laws and ethics along with an understanding of modern communication means. Inquisitiveness, perseverance and determination are a few more qualities which will enable you to do well in the field. ",
     
    },
    {
      title: "Study options and cost ",
      content1:
        "After completion of high school, students may pursue a bachelor’s degree in Mass Communication. The course work includes the introduction to global media, journalism, film production, the publishing industry, visual communication and international politics. The degree spans four years and may cost up to $68,000.",
      content2:
        "Graduates in Mass Communication may further pursue their studies at the level of master’s in Mass Communication. The course work is mostly based on research which culminates with the submission of a thesis. Students usually focus on Media Ethics, Communication Research, Digital Production, Media Laws and Ethics along with Strategic Communications in a Global Environment. The degree may span a period of two years and cost up to $48,900 in the US.",
        content3:"Students who want to further specialise in the field or endeavour to improve career progression may undertake a PhD in the field. Students are expected to finish course work which usually comprises of seminars and theoretical classes. A comprehensive examination is also held in many universities where the students are supposed to conduct and submit a field survey, dissertation and take up an oral examination along with submitting a research paper and teaching a class, depending on the requisites of your certification. The degree may span over three to five years and cost up to $45,000 in the US. ",
    },
    {
      title: "Future outlook",
      content:
        "Employment in media and communication occupations is projected to grow by 14% in this decade, faster than the average for all occupations. There are likely to be 151,500 new jobs in the Mass Communication industry by the year 2030. Demand for media and communication occupations is expected to arise from the need to create, edit, translate, and disseminate information through a variety of different platforms, including social media.",
    },
    {
      title: "Career Pathways for Mass Communication graduates",
      subtitle1: "Director of Communications",
      content1:
        "A director of communications is responsible for monitoring the information that flows from an organisation to the public. They oversee a communications team and develop communication campaigns, direct public relations drives and marketing strategies. The average annual salary of a director of communications is $90,000 in the US. ",
      subtitle2: "Public Relations Specialist",
      content2:
        "These specialists are involved in maintaining a good public image for their clients and businesses. They need to be adept at problem-solving and media handling to project a good image of the clientele. The average annual salary of a public relations specialist is $62,800 in the US. ",
      subtitle3: "Journalist ",
      content3:
        "The principal task of a journalist is to investigate, gather and deliver newsworthy information on various past, current and upcoming events. They look for leads, build contacts and sources for first-hand research and undertake second-hand research. The average annual salary of a journalist is $48,370 per year in the US. ",
      subtitle4: "Film Editor ",
      content4:
        "Film or video editors are involved in manipulating images on a screen for the production of movies and shows. They ensure that images are in proper order and synchronous. The average annual salary of a film editor is $60,360 in the US. ",
      subtitle5: "Media planner ",
      content5:"Media planners work with advertising agencies, PR firms and businesses to plan, implement and oversee advertising and marketing campaigns for various promotional purposes. The average annual salary for a media planner is $60,319 in the US. ",
      subtitle6: "Event Manager ",
      content6:"They undertake the planning, handling, implementing and monitoring of various private and public events.  Event managers meet with clients to understand event objectives, specifications and budget. Their work involves finding and booking venues, getting permits, negotiating with sponsors and liaising with suppliers. The average annual salary of an event manager is $55,550 in the US.  ",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Mass Communication abroad</h1>
        <p>
          Mass Communication deals with the transmission of information to a
          large number of people through legacy and modern media. After
          completing your studies, you may work for a news agency, television
          channel, film industry or a web company, amongst others.  
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $54,000: average annual salary for employees with a communications degree


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
            <strong></strong> Job openings for media and communication workers by year 2030


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 14% projected employment growth in field of media and communications  


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

export default Masscommunication;
