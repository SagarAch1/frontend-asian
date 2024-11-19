import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HoriCulture = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggles between open and close states
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/plant.jpg)`,
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
    color: "#4CAF50", // Adjusted color for better aesthetics
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
      title: "About Horticulture and Viticulture",
      content:
        "Horticulture is the science of growing, refining, and commercializing flowers, fruits, vegetables, and plants for decorative purposes, while viticulture focuses on grape cultivation, primarily for wine production. Organic viticulture entails all grape-growing activities up until harvest.",
    },
    {
      title: "Are Horticulture and Viticulture right for me?",
      content:
        "If you have a passion for gardening and a desire to deepen your knowledge in cultivating various plants, horticulture and viticulture could be ideal career paths. Horticulture contributes to environmental sustainability by enhancing quality of life with greenery and beauty, while viticulture specializes in grape cultivation, offering a niche in the wine industry. Viticulture is particularly suitable if you're interested in winemaking and can work well under the pressure of a once-yearly grape harvest season.",
    },
    {
      title: "Horticulture and Viticulture - study options and costs",
      content:
        "In Australia, a degree in horticulture or a related field like parks and gardens is generally required for careers in horticulture. The Bachelor's in Horticulture is a three-year program, costing approximately 20,000-25,000 AUD per year at public universities, with private institutions charging between 20,000-45,000 AUD. A Bachelor’s degree is also common in viticulture, which shares similar costs, with options for further specialization in a graduate diploma or master’s program.",
    },
    {
      title: "Future outlook",
      content:
        "Horticulture offers a variety of job prospects in institutions, plantations, vegetable farms, and orchards. Technological advancements, increasing demand, and rising exports make it an attractive field. The greenhouse horticulture sector, projected to reach $43.85 billion by 2027, illustrates this growth. Similarly, viticulture offers strong career potential, with the global wine market valued at USD 339.53 billion in 2020.",
    },
    {
      title: "Career pathways for Horticulture and Viticulture graduates",
      subtitle1: "Assistant Winemaker",
      content1:
        "This role involves overseeing vineyard operations and winemaking processes, such as bottling, fermentation, labeling, and inventory management. Responsibilities include grounds maintenance, vine care, and assisting with vineyard tasks.",
      subtitle2: "Grower Liaison Officer",
      content2:
        "This role combines multiple duties, including stock monitoring, yield assessments, sampling, quality testing, and harvest planning. Ideal for individuals who enjoy data analysis over hands-on fieldwork.",
      subtitle3: "Horticulturist",
      content3:
        "Horticulturists focus on maximizing plant health, growth, and quality across various species, including vegetables, nuts, shrubs, and fruits. They may also coordinate research projects on crop production.",
      subtitle4: "Plant Pathologist",
      content4:
        "Plant pathologists study plant diseases through lab analysis and fieldwork, often traveling to affected regions. Their work contributes to developing disease-resistant plant varieties, playing a crucial role in global food production.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Horticulture and Viticulture Abroad</h1>
        <p>
          Are you interested in gaining knowledge and skills in the art and
          science
        </p>
        <p>
          {" "}
          of cultivating gardens? A career in horticulture might be perfect for
          you.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>As of 2020,</strong> the global greenhouse horticulture
            market was valued at $25.2 billion.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Looking ahead,</strong> the market is projected to grow at
            an approximate 5% CAGR between 2021 and 2026.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>In 2019,</strong> USDA reported horticulture sales of about
            $14 billion.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>From 2019-2020,</strong> over 60,000 people were employed in
            the horticulture sector.
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
                {/* Display subtitles and content */}
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

export default HoriCulture;
