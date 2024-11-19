import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Earthscience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggles the FAQ item open and closed
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/rehabi.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
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
    color: "#4CAF50", // Color to enhance icon visibility
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
      title: "About Earth Sciences",
      content:
        "Earth sciences provide a deeper understanding of our planet, focusing on areas like atmospheric studies, geology, hydrology, and oceanography. This field reveals the Earth’s composition, structure, and the processes shaping it, offering insights that improve life and aid environmental sustainability.",
    },
    {
      title: "Is studying Earth Sciences right for you?",
      content:
        "If you're passionate about conserving the Earth's resources, enjoy fieldwork, and are drawn to environmental studies, Earth Sciences may be a rewarding field for you. This area is ideal for those eager to contribute to environmental preservation and scientific research.",
    },
    {
      title: "Earth Sciences Study Options and Cost",
      content:
        "Earth Sciences degrees are available as Bachelor of Science (BSc) or Bachelor of Arts (BA), typically lasting four years. Afterward, students can pursue a two-year master's in Earth Sciences. In the US, the average cost for an Earth Sciences degree is approximately AUD 35,000 annually.",
      content3:
        "For those interested in advanced studies, a PhD in Public Health is available, typically requiring three to five years. It involves original research and a dissertation focused on a specific public health topic.",
    },
    {
      title: "Future outlook",
      content:
        "With rising environmental challenges like climate change and resource depletion, Earth Science expertise is increasingly vital. Geoscientists, who address these issues, are expected to see a 7% growth in job opportunities over the next decade, according to the US Bureau of Labor Statistics.",
    },
    {
      title: "Career Pathways for Earth Science graduates",
      subtitle1: "Project Geologist",
      content1:
        "Project Geologists assess sites, collect geological data, and conduct surveys to inform mining, drilling, or excavation projects. They analyze ground composition and geological formations to support safe, effective operations.",
      subtitle2: "Field Geologist",
      content2:
        "Field Geologists study Earth processes like earthquakes, volcanoes, and erosion. They collect ground samples, map geological formations, investigate natural disasters, and present their findings to professionals and the public.",
      subtitle3: "Land Planning Agent",
      content3:
        "Land Planning Agents, often employed by government agencies, ensure land is utilized efficiently. They are typically involved in project planning, resource management, and development oversight.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Earth Sciences Abroad</h1>
        <p>
          Earth sciences explore the Earth's physical properties. Studying this
          field can deepen your understanding
        </p>
        <p>
          of our planet, boost your career prospects, and offer new perspectives
          on environmental issues.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $40,000 to $70,000 average income for Earth
            Science PhD holders
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9,400 predicted openings for Earth Sciences
            careers in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $92,000 median annual salary for geologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7% projected growth in geoscientist employment
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

export default Earthscience;
