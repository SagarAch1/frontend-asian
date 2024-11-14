import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Visualarts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ items
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/visual.jpeg)`,
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
      title: "What is Visual Arts?",
      content:
        "Visual arts refer to the practice of applying artistic knowledge and design concepts across various mediums, including digital illustrations, traditional painting, sculpture creation, and more.",
    },
    {
      title: "Is a Career in Visual Arts Right for Me?",
      content:
        "In visual arts, a genuine passion for creativity is essential. This field suits those with artistic inclinations who can approach their work innovatively. Success here often requires a creative mindset and dedication to developing unique perspectives.",
    },
    {
      title: "Options and Expenses for Visual Arts Studies",
      content1:
        "There are multiple study pathways, with the U.S. offering some of the priciest art schools, ranging from $30,000 to $35,000 per year. These programs are often costly worldwide.",
      content2:
        "In Australia, the average expense for a visual arts degree is AUD 126,000, while in Canada, it's around CAD 136,000. Scholarships and financial assistance are frequently available.",
      content3:
        "Europe is renowned for its art institutions, notably in countries like France, Italy, the UK, and the Netherlands. Japan and South Korea are also popular for visual arts degrees.",
    },
    {
      title: "Career Prospects in Visual Arts",
      content:
        "Unlike fast-expanding fields like IT, visual arts grows at a steady, modest pace. In the U.S., job growth for visual arts careers is projected at 4% over the next decade. Given the competitive nature of the industry, honing skills and building expertise are key to career advancement.",
    },
    {
      title: "Visual Arts Career Opportunities",
      subtitle1: "Set Designer",
      content1:
        "Set designers craft visually appealing environments, applying design principles to subtly resonate with audiences. A strong grasp of visual art fundamentals enables them to create impactful, detailed settings.",
      subtitle2: "Product Designer",
      content2:
        "Product designers are essential for companies focused on visual appeal, as product aesthetics greatly influence consumer interest. These designers leverage their design training to enhance product attractiveness.",
      subtitle3: "Photographer",
      content3:
        "A visual arts background can lead to a photography career, utilizing knowledge of color, tone, and composition to create striking images.",
      subtitle4: "Graphic Designer",
      content4:
        "Graphic designers have numerous opportunities in today's market, as businesses increasingly rely on them for advertising and branding. Digital design has gained extra prominence due to the rise of NFTs, broadening demand for visual arts expertise.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Explore Visual Arts Abroad</h1>
        <p>
          Visual arts, from film and animation to traditional art, offer promising 
        </p>
        <p>careers with sustained growth expected in the upcoming years.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Median income for visual arts professionals in the U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>37,000</strong> new roles projected by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Job growth over the past ten years
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>4%</strong> growth expected in animation and visual effects
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Course Overview</h2>
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

export default Visualarts;
