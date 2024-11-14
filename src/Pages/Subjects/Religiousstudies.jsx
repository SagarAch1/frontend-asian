import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const ReligiousStudies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ open/close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/religious.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "1900px",
    color: "black",
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
      title: "Overview of Religious Studies",
      content1:
        "Religious Studies examines beliefs, rituals, and traditions across religions, exploring how religion shapes societies. Studying this field offers insight into how religion impacts cultural and social interactions and promotes a critical, analytical worldview.",
      content2:
        "This degree emphasizes skills in critical thinking, reasoning, information analysis, and presentation. Religious Studies programs require substantial knowledge retention, providing a foundation in the ethical, political, and philosophical questions associated with different religions.",
    },
    {
      title: "Is Religious Studies right for me?",
      content1:
        "If you often wonder about life’s origins, the existence of divine beings, or the universe’s purpose, this field may be for you.",
      content2:
        "For example, if you're curious about why Muslims circumambulate the Kaaba, why Sikhs visit the Golden Temple, or why Christians believe in the Trinity, this program provides insights while helping you appreciate religion's role in society.",
      content3:
        "To excel, you should be prepared for extensive reading and have strong memory skills. With dedication, this degree opens broad career possibilities.",
    },
    {
      title: "Study options and costs in Religious Studies",
      content1:
        "Religious Studies programs include a 3-4 year bachelor’s, a 2-year master’s, and a 3-4 year PhD, which may take up to 7 years part-time.",
      content2:
        "Specializations cover areas like anthropology, history, and philosophical approaches to religion.",
      content3:
        "A bachelor’s costs around $28,584 per year in the US, while master’s programs range from $30,000 to $40,000. PhDs, with their intensive research demands, average around $38,600 annually.",
    },
    {
      title: "Future outlook",
      content1:
        "Religion plays a significant role in today’s world. Religious Studies graduates contribute to society in various impactful ways, offering career paths with a steady demand for theologians, clergy, and community workers.",
      content2:
        "In the US, 387,740 people are employed in religious vocations, with steady job growth expected.",
    },
    {
      title: "Career pathways for Religious Studies graduates",
      subtitle1: "Teachers",
      content1:
        "Religious teachers educate students on the foundations of religion, requiring patience and effective storytelling skills. The average salary is $43,450.",
      subtitle2: "Missionary",
      content2:
        "Missionaries dedicate themselves to spreading faith, often requiring travel. The average income is $44,566.",
      subtitle3: "United Nations Diplomacy",
      content3:
        "This prestigious role involves working with faith-based and non-governmental organizations, with an approximate income of $95,000.",
      subtitle4: "Chaplain",
      content4:
        "Chaplains provide religious services for people in isolated locations, like prisons or hospitals, with an average salary of $50,397.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Religious Studies abroad</h1>
        <p>
          Explore various religious beliefs and understand the importance of sacred sites like 
        </p>
        <p>Jerusalem, Makkah, and the Golden Temple. Religious Studies can lead to a meaningful career!</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $73,130: average annual salary of a theologist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>82% of Religious Studies graduates are employed or
            pursuing higher education within six months of graduation
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>387,740 Theologists currently employed in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $52,370: average annual salary of Religious
            Studies graduates
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
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
                {item.content4 && <p>{item.content4}</p>}
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

export default ReligiousStudies;
