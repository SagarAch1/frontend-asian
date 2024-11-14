import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Acupuncture = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing sections
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/accu.jpeg)`,
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
    color: "#4CAF50", // Bright color for visual appeal
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
      title: "About Acupuncture",
      content1:
        "Acupuncture is a fundamental component of a comprehensive medical approach rooted in traditional Chinese medicine. It’s a holistic system that addresses physical, emotional, and mental health concerns.",
      content2:
        "Acupuncturists are healthcare professionals skilled in acupuncture who address various health issues by stimulating specific body points. This is done using needles or techniques such as pressure, heat, or electric currents. The goal is to balance the flow of energy, or ‘qi,’ in the body. They may also provide lifestyle and dietary advice.",
      content3:
        "Acupuncturists may specialize in areas like fertility treatments, PTSD, elderly care, cancer, hospice care, or sports medicine. They are key players in pain management and emotional regulation, working in settings like hospitals, chiropractic clinics, and athletic facilities.",
    },
    {
      title: "Is Acupuncture right for me?",
      content1:
        "If you enjoy hands-on treatment and alleviating patient pain, acupuncture could be an ideal profession. A successful acupuncturist must have good communication skills and be adaptable to meet each client’s unique needs.",
      content2:
        "Attention to detail is crucial when handling delicate needles. Additionally, empathy plays a significant role in motivating an acupuncturist to provide the best care for patients. If these traits align with your strengths, acupuncture could be a fulfilling career.",
    },
    {
      title: "Acupuncture study options and costs",
      content1:
        "To begin a career in acupuncture, you must first obtain a bachelor’s degree, which doesn’t necessarily need to be in acupuncture. The undergraduate acupuncture program spans five years and typically costs around $17,939 annually.",
      content2:
        "After completing your bachelor’s degree, you can pursue a master’s in acupuncture from an accredited program, usually taking 2 to 3 years. The cost of this program ranges between $30,000 to $40,000, depending on the institution and program type.",
      content3:
        "Upon graduation, passing a state licensing exam is required to practice acupuncture professionally. Some acupuncturists may continue their education with a PhD program, typically lasting 3 years and costing about $76,542. This advanced degree delves deeper into traditional Chinese medicine and acupuncture.",
    },
    {
      title: "Future outlook",
      content1:
        "The demand for acupuncture is growing rapidly, with an expected 32% growth rate by 2022 as more individuals seek natural pain management options over traditional medications.",
      content2:
        "Due to the opioid crisis, acupuncture has gained popularity as a safe and effective way to manage pain. As its effectiveness becomes more recognized, the demand for acupuncture services is projected to continue rising.",
    },
    {
      title: "Career pathways for Acupuncture graduates",
      subtitle1: "Associate Acupuncturist",
      content1:
        "As an associate acupuncturist, you will diagnose and treat disorders by stimulating acupuncture points, using needles, cups, acupressure, and other alternative therapies under the supervision of a senior acupuncturist.",
      subtitle2: "Hospital Acupuncturist",
      content2:
        "In a hospital setting, you will combine acupuncture with other therapies like yoga, massage, and nutrition, working collaboratively with other healthcare professionals.",
      subtitle3: "Acupuncture Teacher",
      content3:
        "As the field expands, teaching opportunities increase. As an acupuncture educator, you will train future acupuncturists, providing feedback and sharing your expertise in the field.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Acupuncture abroad</h1>
        <p>
          Acupuncture is an alternative medicine practice that involves inserting 
        </p>
        <p>fine needles into the skin at specific points to treat various conditions.</p>
        <p> Studying acupuncture opens the door to a rewarding career in healthcare.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $71,770: average annual wage for acupuncturists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $103,600: average salary for acupuncturists in specialty hospitals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 32% projected job growth in acupuncture by 2022
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $203 million: estimated global market value for acupuncture
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

export default Acupuncture;
