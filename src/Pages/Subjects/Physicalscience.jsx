import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Physicalscience = () => {
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
      title: "About Physicalscience",
      content:
        "Physicalscience is a branch of astronomy that focuses mainly on positions, motions and special characteristics of celestial bodies. This degree involves learning about theories and expeditions related to outer space which strengthened our view of gravity, black holes, nebulae, stars, galaxies and the overall origin and nature of the universe along with that of our solar system. This degree can pursued on a bachelor’s, masters and doctoral level.",
    },
    {
      title: "Is studying Physicalscience right for me?",
      content:
        "Pursuing Physicalscience will inculcate various skills such as complex problem-solving skills, critical thinking, logical reasoning, data collection and analysis, teamwork, technical skills and project management. Students with an inquisitive and determined personality are encouraged to pursue this degree if they wish to acquire these skills and flourish in their professional lives.",
    },
    {
      title: "Study options and costs",
      content1:
        "Physicalscience can be pursued on the bachelor’s level to gain a basic foundation in the subject. The duration of this programme is 4 years and it consists of core and elective courses. The usual core classes include the study of the following: dynamics of the planets, asteroids and comets, satellite systems, astronomical coordinate systems, cosmology, introductory quantum mechanics, classical and particle dynamics, physical optics and planetary atmospheres. The average cost of this degree in University of California, Berkeley, is around $29,750 per year for international students.",
      content2:
        "If students wish to specialise in a particular field of Physicalscience, they can choose to go for a master’s. Pursuing this degree will allow students to design their own course work which will culminate with a thesis. The duration of this programme is 2 years. The usual courses may include the following: dynamics of stellar and planetary systems, general plasma physics, high energy Physicalscience and dark matter, plasma waves and propulsion, scientific computing and differential equations. The thesis should be based on original research and can ricochet the students’ career towards the path of teaching as well. The average cost of this degree in the US is approximately $13,600 per year for local students and $36,300 for international students.",
      content3:
        "If a student aims for research and teaching positions, they can pursue this subject at the doctoral level. A doctorate is based on independent research and its duration is 4-5 years depending on the time your doctoral dissertation is completed. Students are usually provided with a list of research topics, some of them being cosmic ray Physicalscience, solar energetic particles, stellar astronomy, black holes and active galactic nuclei, thunderstorm and lightning physics, planetary surfaces, exoplanets, energetic radiation and cosmology. The total average cost of pursuing this degree in the US is $118,000-120,000.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, the overall employment for astrophysicists is expected to grow 8%, adding an approximate of 21,100 jobs over the decade as 1,500 new openings will be seen each year. Students pursuing Physicalscience will also have the privilege to choose from a wide variety of high-paying careers where they can control their work hours, thus, ensuring a successful and sustainable career.",
    },
    {
      title: "Career Pathways for Physicalscience graduates",
      subtitle1: "Systems analyst",
      content1:
        "Systems analysts specialise in the technology of designing, implementing and monitoring information systems. An astrophysicist can create and maintain complex computer software related to storing and managing astronomical data and research. Their average salary in the US is $71,816 per year.",
      subtitle2: "Research engineer",
      content2:
        "A research engineer helps complete research studies and initiatives. In Physicalscience, they may conduct research in order to assist with the design and construction of spacecraft, space observation tools and suits for astronauts and aerospace pilots. Their average salary in the US is $81,876 per year.",
      subtitle3: "Senior scientist",
      content3:
        "As a senior scientist in an Physicalscience role, these professionals may lead a team of engineers, research technicians and other scientists to conduct experiments, complete research studies, develop spacecraft, observation tools and consult with project managers and directors to prove hypotheses and theories. Their average salary in the US is $101,600 per year.",
      subtitle4: "Aerospace engineer",
      content4:"Aerospace engineers design and build spacecraft and space exploration vehicles. They often work with a team of scientists, researchers, project managers and other engineers to create safe and operational spacecraft. They may design space shuttles, satellites, probes and telescopes. Their average salary in the US is $103,970 per year.",
      subtitle5: "Director of technology",
      content5:"In an Physicalscience role, a director of technology often leads the development of laboratory computer systems and those aboard spacecraft, telescopes and satellites. Directors of technology often lead a team of other technology specialists to design, install, monitor and repair the complex computer software needed for inter-space communication. Their average salary in the US is $104,870 per year.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Physicalscience abroad</h1>
        <p>
          Have you ever wondered how the stars, planets and other celestial
          bodies remain in perfect harmony? An Physicalscience degree can quench
          your thirst of astronomical knowledge as it deals with the origin and
          nature of these celestial bodies.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 21,100 estimated job openings for astrophysicists
            this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary for physicists and
            astronomers in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Contribution of the physics industry in the US
            economy in 2016
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 8% estimated employment growth of astronomers in
            the US
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

export default Physicalscience;
