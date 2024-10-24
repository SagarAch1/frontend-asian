import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Earthscience = () => {
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
      title: "About Earth Sciences",
      content:
        "Earth sciences contribute greatly towards knowledge regarding how society can cope with the changing environment in different ways. The study of the atmosphere, water flowing on or beneath continental surfaces, and oceans and seas are all components of earth sciences. Knowledge regarding earth sciences helps learn about the planet's structure, processes, and features. The stratigraphy, structure of the earth and its knowledge not only enlightens us regarding the chemical composition of the earth’s structure but also enables us to improve the quality of life for the communities we operate in.",

    },
    {
      title: "Is studying Earth Sciences right for you?",
      content:
        "If you have a keen interest in studying how to preserve the earth’s resources and have a passion to be an environmentalist, earth sciences can prove to be a rewarding field of study for you. It is also a good choice if you want to carry out fieldwork and engage in inspiring geological research.",
     
    },
    {
      title: "Earth Sciences Study Options and Cost",
      content:
        "Earth Sciences degrees are usually offered as a Bachelor of Science (BSc in Earth Sciences) as well as Bachelors of Arts (BA). They are typically 4-year programs. After completing the undergraduate program, students can opt for a masters in earth sciences, which is typically a 2-year program. The average cost of pursuing an earth science degree is AUD 35,000per year in the US. ",

      content3:
        "After having completed you master’s you have the opportunity to study Public Health at the doctoral level. A PhD programme usually takes 3 to 5 years of full-time study to complete. Original research and a dissertation on a sub-topic of Public Health is required to earn your doctoral degree.",
    },
    {
      title: "Future outlook",
      content:
        "As the world’s natural resources continue declining at alarming rates, the need for environmental conservation has gained importance more than ever before. Issues such as atmospheric warming, melting glaciers and rising sea levels pose significant challenges which means earth science professionals will be in demand in the coming years. According to the US Bureau of Labor Statistics, a 7% growth in employment opportunities for geoscientists is projected over the next decade. ",

    },
    {
      title: "Career Pathways for Earth Science graduates",
      subtitle1: "Project Geologist",
      content1:
        "A project geologist assesses a site and gathers geological data in preparation for drilling, mining, or excavation operations. Their jobs involve testing of ground for composition, geological formations, and conducting and reporting critical surveys that might impact mining operations.",
      subtitle2: "Field Geologist",
      content2:
        "A field geologist researches the chemical makeup of the Earth's crust, as well as other earth processes (earthquakes, landslides and volcanic eruptions) and the changes that the earth undergoes. They are responsible for gathering samples from the ground, mapping geological formations, investigating natural disasters, interpreting data, and producing presentations for other professionals and the general public.",
      subtitle3: "Land Planning Agent",
      content3:
        "A land planning agent mostly works for the government and are hired on a project basis. The main job responsibility is to ensure how efficiently and effectively land is used and developed.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Earth Sciences abroad</h1>
        <p>
          Earth sciences deal with the study of the physical composition of the
          earth. With an aim to have a deeper understanding of the earth,
          studying earth sciences can broaden your horizons, raise your
          employability and give you new perspectives to view life!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $40,000 to $70,000 average income of for earth
            science PhD holders
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9,400 openings predicted for careers related to
            earth sciences in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $92,000 is the median annual salary of geologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7% growth rate in employment opportunities for
            geoscientists
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

export default Earthscience;
