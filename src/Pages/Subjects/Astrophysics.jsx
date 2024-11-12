import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Astrophysics = () => {
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
    color: "#4CAF50",
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
      title: "About Astrophysics",
      content:
        "Astrophysics is a branch of astronomy focusing on celestial positions, motions, and unique characteristics. The study involves theories and explorations of space, enriching our understanding of gravity, black holes, nebulae, stars, galaxies, and the origin and structure of the universe and solar system. Degrees can be pursued at the bachelor’s, master’s, and doctoral levels.",
    },
    {
      title: "Is studying Astrophysics right for me?",
      content1:
        "Pursuing Astrophysics builds skills like complex problem-solving, critical thinking, logical reasoning, data analysis, teamwork, technical expertise, and project management. Students with a curious and dedicated personality are encouraged to consider this path if they aim to gain these skills and succeed professionally.",
    },
    {
      title: "Study options and costs",
      content1:
        "Astrophysics at the bachelor’s level provides foundational knowledge. This 4-year program includes core and elective courses. Common core topics are planetary dynamics, asteroids, comets, satellite systems, cosmology, introductory quantum mechanics, classical and particle dynamics, optics, and planetary atmospheres. At the University of California, Berkeley, international students pay around $29,750 annually.",
      content2:
        "Students can specialize by pursuing a master’s degree, allowing custom coursework and a final thesis. This 2-year program might include topics like stellar and planetary systems, plasma physics, high-energy astrophysics, dark matter, plasma waves, propulsion, computing, and differential equations. The thesis may lead to teaching roles. In the US, tuition averages $13,600 per year for locals and $36,300 for internationals.",
      content3:
        "Doctoral studies, ideal for research and teaching, involve 4-5 years of independent research depending on dissertation completion. Topics may include cosmic ray astrophysics, solar particles, stellar astronomy, black holes, thunderstorm physics, planetary surfaces, exoplanets, radiation, and cosmology. The average US cost for a Ph.D. ranges from $118,000 to $120,000.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, astrophysicist employment is expected to grow by 8%, adding approximately 21,100 jobs this decade with 1,500 new openings annually. Astrophysics graduates have diverse career opportunities, with high-paying roles offering flexible work hours and promising careers.",
    },
    {
      title: "Career Pathways for Astrophysics graduates",
      subtitle1: "Systems analyst",
      content1:
        "Systems analysts focus on designing, implementing, and monitoring information systems. An astrophysicist in this role might develop and maintain software for astronomical data and research, with an average US salary of $71,816.",
      subtitle2: "Research engineer",
      content2:
        "Research engineers support studies and initiatives. In astrophysics, they may conduct research to aid spacecraft and tool development. Their US average salary is $81,876.",
      subtitle3: "Senior scientist",
      content3:
        "Senior scientists lead teams in conducting research, experiments, and developing tools and spacecraft, working with managers to validate hypotheses. Their average US salary is $101,600.",
      subtitle4: "Aerospace engineer",
      content4:
        "Aerospace engineers design and build space exploration vehicles. They collaborate on shuttles, satellites, probes, and telescopes. Their US average salary is $103,970.",
      subtitle5: "Director of technology",
      content5:
        "Directors of technology oversee computer systems in labs, spacecraft, and telescopes, leading teams in inter-space communication systems. The average salary in the US is $104,870.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Astrophysics Abroad</h1>
        <p>
          Physical science explores the non-living world, seeking to reveal the fundamental laws of nature. Main 
        </p>
        <p>areas include physics, astronomy, chemistry, and earth sciences, such as meteorology and geology.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>18th most popular major in the 2020-2021 academic year</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>Median annual pay for physical science graduates</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>8% projected job growth in physical sciences this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>Number of physical science graduates employed in the US</p>
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

export default Astrophysics;
