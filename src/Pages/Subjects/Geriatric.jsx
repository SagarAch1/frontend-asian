import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const GeriatricStudies = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleSection = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index); // Toggle section visibility
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ge.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
  };

  const statsSectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statBoxStyle = {
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

  const faqContainerStyle = {
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

  const faqTextStyle = {
    padding: "10px 0",
    fontSize: "14px",
    color: "#666",
  };

  const faqSubtitleStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  const faqDetails = [
    {
      title: "About Geriatric Studies",
      content1:
        "Geriatric Studies focuses on aging and its scientific aspects. This medical field is dedicated to treating and preventing ailments in the elderly. The goal is to enhance the health and quality of life for older adults through coordinated care provided by healthcare professionals including nurses, pharmacists, and social workers.",
      content2:
        "Typical course topics include Anatomy, Psychology, Physiology, Nutrition, Exercise, Pain Management, and diseases such as Dementia, Arthritis, Heart Disease, and Osteoporosis.",
    },
    {
      title: "Is Geriatric Studies right for me?",
      content1:
        "The journey to becoming a geriatrician starts with an undergraduate degree in a science field, followed by medical school and a residency. After residency, a geriatric fellowship can be pursued. Alternatively, you can specialize in geriatrics directly after medical school.",
      content2:
        "A career in Geriatric Studies opens doors to various roles, including geriatric doctor, researcher, educator, or even a pharmacist. If you're empathetic and want to improve the lives of the elderly, this could be a fulfilling career choice for you!",
    },
    {
      title: "Study options and costs",
      content1:
        "A bachelor's degree in Geriatrics typically spans 3-4 years, costing between $24,228 and $59,970 annually in the US. Clinical experience or further studies like a PhD in Geriatrics is often required for specialized roles.",
      content2:
        "In the UK, tuition for international undergraduate programs can range from $14,130 to $53,700 or more depending on the course and institution.",
    },
    {
      title: "Future outlook",
      content1:
        "The demand for geriatricians is expected to increase as the population ages. The geriatric care market is projected to grow at a rate of 10% annually between 2021 and 2027.",
      content2:
        "Advances in medical technology, such as laparoscopic surgery, have expanded treatment options for the elderly, making previously risky procedures safer and more effective.",
    },
    {
      title: "Career Pathways for Geriatric Studies graduates",
      subtitle1: "Geriatric Doctor",
      content1:
        "Geriatricians specialize in treating elderly patients with various health issues. They focus on enhancing the quality of life for older adults through personalized care, often working closely with caregivers and families.",
      subtitle2: "Geriatric Pharmacist",
      content2:
        "Geriatric pharmacists manage medications for elderly patients, ensuring appropriate dosing and avoiding drug interactions. Some also offer consultations and help adjust medications based on patient needs.",
      subtitle3: "Geriatric Researcher",
      content3:
        "Researchers in geriatrics study aging processes and related diseases, seeking new treatments and preventative strategies to improve the health of aging populations.",
    },
  ];

  return (
    <div>
      {/* Hero section with background image */}
      <div style={sectionStyle}>
        <h1>Study Geriatric Studies Abroad</h1>
        <p>
          Geriatrics is a specialized branch of medicine focused on the health
          of the elderly.
        </p>
        <p>
          Graduates in Geriatric Studies can expect diverse career opportunities
          in healthcare{" "}
        </p>
        <p>administration, social work, and other related fields.</p>
      </div>

      {/* Statistics section */}
      <div style={statsSectionStyle}>
        <div style={statBoxStyle}>
          <div style={iconStyle}>🌟</div>
          <p>164% increase in job postings for geriatrics in the last decade</p>
        </div>
        <div style={statBoxStyle}>
          <div style={iconStyle}>📈</div>
          <p>Average annual salary of a geriatric doctor</p>
        </div>
        <div style={statBoxStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            55,400 projected job openings for geriatric physicians between
            2018-2028
          </p>
        </div>
        <div style={statBoxStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            10% annual growth rate in geriatric care services market (2021-2027)
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqContainerStyle}>
        <h2>Subject Overview</h2>
        {faqDetails.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleSection(index)}>
              <span>{item.title}</span>
              <span>{selectedIndex === index ? "-" : "+"}</span>
            </div>
            {selectedIndex === index && (
              <div style={faqTextStyle}>
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

export default GeriatricStudies;
