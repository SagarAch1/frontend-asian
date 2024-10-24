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
      title: "About Physical science",
      content:
        "Physical science is the study of non-living materials that are found in the natural environment and their qualities. The study of matter and energy is referred to as physical science. It comprises chemistry, which is concerned with matter, and physics, which is concerned with energy. Its advancements allow us to achieve extraordinary feats like flight and space travel. ",
    },
    {
      title: "Is Physical science right for me?",
      content1:
        "For motivated students, this field of study will help you get a good job while also satisfying your intellectual curiosity about the physical world.",
      content2:
        "Physical sciences students must have a solid background in math and science, particularly chemistry and physics. Analytical and critical thinking, communication, problem-solving, and teamwork abilities are also required for a successful career in this sector. This is because scientists frequently collaborate to solve problems, it's critical that accurate information be disseminated quickly, and project needs be fully stated. If as a child you were always inclined towards the sciences, then this degree is a good choice for you.",
    },
    {
      title: "Physical science study options and costs",
      content1:
        "Physical science degrees come at a variety of levels. A two-year Associate Degree in Physical Science is available. A bachelor's degree in physical science is a three to four-year program. A master's degree usually takes 1.5 to 2 years to complete. A doctorate program in physical science, including the thesis or dissertation, takes at least four years.",
      content2:
        "The average tuition prices of colleges providing physical science programs for the academic year 2020-2021 were $17,809 for undergraduate programs and $21,182 for graduate programs.",
    },
    {
      title: "Future outlook",
      content:
        "Overall, the employment of physical science graduates is predicted to grow at an annual rate of 8% from 2020 to 2030, which is about the same as the average for all occupations. Over the next decade, physicists and astronomers will have roughly 1,500 employment openings every year on average. One occupation branching from physical science:astronomers, earned a median annual wage of $119,730.",
    },
    {
      title: "Career pathways for Physical science graduates",
      subtitle1: "Research Assistant",
      content1:
        "A research assistant assists in the execution of a research agenda. They're most commonly found in fieldwork or laboratory settings. They are in charge of conducting research and technical activities in the lab related to sponsored projects, with a focus on equipment maintenance.",
      subtitle2: "Physicist",
      content2:
        "A physicist is a scientist who studies matter, energy and their relationship. His or her work encompasses everything from basic research into nature's most fundamental laws to the invention of practical gadgets and tools. Because of the wide breadth of subject matter, physicists usually specialise in one sub-field of physics at the graduate level for example an astrophysicist or a theoretical physicist.",
      subtitle3: "Geoscientists",
      content3:
        "Geoscientists investigate the Earth's physical characteristics, such as its composition, structure, and processes, in order to understand more about the planet's past, present, and future. They advise senior management on geological factors affecting exploration and produce geological maps and reports for their clients.",
      subtitle4: "Astronomers",
      content4:
        "Astronomers study the planets, stars, galaxies, and other celestial bodies. The responsibilities of an astronomer can comprise anything from collecting and evaluating data from instruments to generating hypotheses about the nature of cosmic objects, as well as practical issues like space flight and navigation, as well as satellite communications.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Physical science abroad </h1>
        <p>
          Physical science involves the study of the non-living world. This
          academic discipline aims to uncover the underlying laws of nature. The
          four main branches are physics, astronomy, chemistry, and the earth
          sciences, which includes meteorology and geology.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 18th most popular major in the 2020-2021 academic
            year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Median annual pay of physical science graduates
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 8% employment rate growth projected for physical
            sciences this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Physical science graduates employed in the US
            alone
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

export default Astrophysics;
