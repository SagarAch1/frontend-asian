import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Vediogame = () => {
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
      title: "About Video game development",
      content1:
        "A program in video game development teaches a number of game engines, stylistic techniques to create immersive gameplay environment, 3D modelling, programming languages and the industry ethics.",
      content2:"The video-gaming industry has been on the rise since the start of the century and is currently worth over $85billion. The rapid advancements in technology have allowed video game developers to create life like games with high fidelity graphics, which has been a key driver for its increased popularity for video games around the world.",
        
    },
    {
      title: "Is Video game development right for me?",
      content:
        "To become a video game developer you should have an analytical frame of mind coupled with a passion for video games. Creative individuals are most likely to enjoy and excel in this field. Storytelling talent and a wide ranging knowledge of gaming trends in the industry are also a big plus. Additionally, video game developers work in teams so you must be cooperative and a team player.",
    },
    {
      title: "Video game development study options and cost",
      content1:
        "Video game development is offered as a bachelor’s degree in many universities worldwide. The cost might vary depending on the country you choose to apply. In the US, an average bachelor’s degree in Video Game Development costs on average approximately $38,000 to $80,000. Universities also offer Graduate programs in video game developments, such as Master’s in Game Design.",
      content2:"Due to the rapid innovation in technology, certifications offer an easy alternative to get up to speed on emerging tools being used in video game development. The cost for such certifications also varies depending on the level of specialisation. On average, a certification will cost around $1000 to $10,000, depending on the level of specialisation.",
    },
    {
      title: "Future outlook",
      content1:
        "The need for more crop production and better plant life has increased now more than ever before. A large part of reason is the booming population. With increased demand, the risk and complications of plant diseases has also increased. Thus, we need Pest and Weed Control specialists to help us keep productions high and prevent crop failures. According to U.S. Bureau of Labor Statistics, from 2020 to 2030, new jobs for agricultural and food scientists are expected to grow at a rate of 9%. Moreover, agricultural and food scientists are expected to have about 4,400 job opportunities each year this decade.",
      content2:"Conservative estimates suggest an 8% increase in revenue for the video game industry in the next 5 years! With a rapidly growing user base, a career in video game development is likely to be a lucrative and rewarding field.",

    },
    
    {
      title: "Career pathways for Video game development graduates",
      subtitle1: "Video Game Artist",
      content1:
        "A video game artist is responsible for the front-end visual aspect of gaming. This covers areas such as animation, 3D modelling, creating concept-art etc. The video game artist is responsible for creating a seamless gameplay experience for users.",
      subtitle2: "Video Game Programmer",
      content2:
        "A video game programmer handles the back-end programming side of gaming. This means being aware of technical aspects and different programming languages used in gaming such as Python, C++, Java etc. Programmers often work with an entire team and coordinate different game functions such as coordinating with the visual artist to make sure the project scope is aligned.",
      subtitle3: "AI Programmer",
      content3:
        "An AI programmer in video game development is a new but important specialisation. As experts in machine learning, they are responsible for integrating user data to create a more personalised user experience.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Video game development abroad</h1>
        <p>
          There are an estimated 2.5 billion gamers around the globe, a figure
          that is the result of consistent growth over the past two decades. As
          the industry is expected to further grow, studying video game
          development offers exciting career prospects.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>Total size of video gaming industry was $8 billion in 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Expected growth of 14.5% by 2026 in U.S. alone
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 5% job growth in video game development last year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $71,000 average salary of video game developer
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

export default Vediogame;
