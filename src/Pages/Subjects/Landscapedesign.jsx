import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const LandscapeDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/arti.jpg)`,
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
    color: "#4CAF50", // Attractive color for the icons
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
      title: "Overview of Landscape Design and Architecture",
      content1:
        "Landscape design and architecture focuses on creating outdoor spaces like parks, resorts, and monuments. Landscape architects collaborate with construction teams to plan these spaces, ensuring they are functional and aesthetically pleasing.",
      content2:
        "The growing demand for eco-friendly designs and public outdoor areas has led to an increased need for landscape architects. Private businesses also seek professionals to design their outdoor workspaces.",
    },
    {
      title: "Is Landscape Design and Architecture suitable for me?",
      content1:
        "Landscape architecture requires a collaborative approach, often involving construction managers, engineers, and architects. The role demands problem-solving skills and the ability to visualize how an outdoor area will look once completed.",
      content2:
        "If you possess creativity, teamwork, analytical skills, and the ability to visualize designs, landscape architecture might be a perfect fit for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "Top universities in Europe, America, and Australia offer both undergraduate and graduate programs in landscape design and architecture. Graduate programs tend to be more competitive and attract higher application numbers.",
      content2:
        "In the U.S., international students typically pay between $30,000 and $40,000 annually for undergraduate programs, while graduate programs cost around $27,000-$35,000 annually. In Australia, undergraduate programs cost around $20,000-$25,000 per year, with graduate programs ranging from $20,000-$30,000 annually.",
    },
    {
      title: "Job Outlook",
      content1:
        "With the global emphasis on sustainability and eco-friendly designs, landscape architects are in high demand. Both the public and private sectors need professionals to design outdoor spaces such as parks and monuments.",
      content2:
        "In the U.S., around 16,000 new jobs are expected for landscape architects in the coming decade. The demand for professionals, along with their competitive salaries, makes this a promising field.",
    },
    {
      title: "Career opportunities for Landscape Design and Architecture graduates",
      subtitle1: "Urban Design",
      content1:
        "Urban designers focus on planning and designing outdoor urban spaces. They often work with government agencies and construction teams to create maps and oversee the development of outdoor spaces in urban areas.",
      subtitle2: "Landscape Planning and Management",
      content2:
        "Landscape planners develop designs for outdoor spaces and collaborate with construction teams to ensure that the designs are implemented accurately. They also provide feedback and make on-site adjustments as needed.",
      subtitle3: "Academia",
      content3:
        "In academia, landscape architects may conduct research and offer solutions to improve the efficiency of outdoor design processes. They focus on methods to conserve resources and increase sustainability in landscape design.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Landscape Design and Architecture Abroad</h1>
        <p>
          Have you ever wondered how outdoor spaces like parks, resorts, and monuments  are designed?
        </p>
        <p> Landscape architects make it happen. If you're creative and love working outdoors, this could be your ideal career path.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>Median Salary</strong>: Average annual income of landscape architects
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Current Employment</strong>: Landscape architects currently employed in the U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Public Sector</strong>: Median salary of landscape architects in the public sector
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Job Growth</strong>: 3% increase in employment for landscape architects expected
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

export default LandscapeDesign;
