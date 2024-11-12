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
    height: "350px",
    width: "1900px",
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
      title: "About Physicalscience",
      content:
        "Physicalscience is a branch of astronomy focusing mainly on positions, motions, and special characteristics of celestial bodies. This degree involves learning theories and expeditions about outer space that strengthen our understanding of gravity, black holes, nebulae, stars, galaxies, and the universe's origin, along with that of our solar system. This degree can be pursued at the bachelor’s, master's, and doctoral levels.",
    },
    {
      title: "Is studying Physicalscience right for me?",
      content:
        "Pursuing Physicalscience fosters various skills such as complex problem-solving, critical thinking, logical reasoning, data collection and analysis, teamwork, technical skills, and project management. Students with an inquisitive and determined personality are encouraged to pursue this degree if they wish to acquire these skills and thrive professionally.",
    },
    {
      title: "Study options and costs",
      content1:
        "Physicalscience can be pursued at the bachelor’s level to gain a foundational understanding. The program duration is four years and includes core and elective courses. Core classes typically cover the study of planetary dynamics, asteroids, comets, satellite systems, astronomical coordinate systems, cosmology, introductory quantum mechanics, classical and particle dynamics, physical optics, and planetary atmospheres. The average cost at the University of California, Berkeley, is about $29,750 per year for international students.",
      content2:
        "For specialization, students can pursue a master's degree in Physicalscience, which allows them to design their coursework culminating with a thesis over two years. Typical courses include dynamics of stellar and planetary systems, general plasma physics, high-energy Physicalscience and dark matter, plasma waves and propulsion, scientific computing, and differential equations. The thesis should involve original research, potentially leading students toward teaching. The average cost in the US is approximately $13,600 per year for local students and $36,300 for international students.",
      content3:
        "For those aiming for research and teaching roles, a doctoral degree in Physicalscience involves independent research, typically spanning 4-5 years, depending on dissertation completion. Research topics may include cosmic ray Physicalscience, solar energetic particles, stellar astronomy, black holes and active galactic nuclei, thunderstorm and lightning physics, planetary surfaces, exoplanets, energetic radiation, and cosmology. The average total cost in the US is between $118,000 and $120,000.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, astrophysicist employment is expected to grow 8%, adding around 21,100 jobs over the decade, with 1,500 new openings annually. Physicalscience graduates will have diverse high-paying career options, often with flexible work hours, promoting a successful and sustainable career.",
    },
    {
      title: "Career Pathways for Physicalscience graduates",
      subtitle1: "Systems analyst",
      content1:
        "Systems analysts specialize in designing, implementing, and monitoring information systems. An astrophysicist may create and maintain complex software for astronomical data management and research, earning an average salary of $71,816 per year in the US.",
      subtitle2: "Research engineer",
      content2:
        "Research engineers support research studies and initiatives. In Physicalscience, they might design and build spacecraft, space observation tools, and suits for astronauts and pilots. Their average US salary is $81,876 per year.",
      subtitle3: "Senior scientist",
      content3:
        "As a senior scientist in Physicalscience, professionals may lead teams to conduct experiments, complete research, develop spacecraft and tools, and consult with project managers to validate hypotheses. The average salary is $101,600 per year in the US.",
      subtitle4: "Aerospace engineer",
      content4:
        "Aerospace engineers design and construct space exploration vehicles. Collaborating with scientists, researchers, and project managers, they may develop shuttles, satellites, probes, and telescopes. The average salary in the US is $103,970 per year.",
      subtitle5: "Director of technology",
      content5:
        "In Physicalscience, a director of technology oversees the development of laboratory and spacecraft computer systems. They often lead teams to design, install, monitor, and repair complex software for inter-space communication. The average US salary is $104,870 per year.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Physicalscience abroad</h1>
        <p>
          Ever wondered how stars, planets, and other celestial bodies stay in harmony?
        </p>
        <p> A Physicalscience degree dives into the origins and nature of these celestial bodies.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p><strong></strong> 21,100 estimated job openings for astrophysicists this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p><strong></strong> Average annual salary for physicists and astronomers in the US</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p><strong></strong> Contribution of the physics industry to the US economy in 2016</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p><strong></strong> 8% estimated employment growth of astronomers in the US</p>
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

export default Physicalscience;
