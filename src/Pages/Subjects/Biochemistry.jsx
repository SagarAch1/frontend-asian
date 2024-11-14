import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Biochemistry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles FAQ sections between open and closed
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Switch between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/ve.webp)`,
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
    color: "#4CAF50", // Icon color to make it visually appealing
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
      title: "About Biochemistry",
      content1:
        "Biochemistry examines the chemical processes that drive living organisms. It is a broad field encompassing the study of viruses, the development of cures, and the investigation of how macromolecules like proteins, nucleic acids, carbohydrates, and lipids interact and function within cells.",
      content2:
        "Biochemistry is divided into three main branches: 1. Structural Biology, which explores the molecular structure of macromolecules and their relevance to diseases like Alzheimer’s, Parkinson’s, and diabetes. 2. Enzymology, focused on understanding the role of enzymes as biological catalysts. 3. Metabolic Biochemistry, studying energy conversions that occur within organisms to sustain life.",
    },
    {
      title: "Is Biochemistry right for me?",
      content:
        "If you're fascinated by lab work, experimenting with microscopic organisms, and understanding chemical reactions at the molecular level, biochemistry is an excellent choice. The field is ideal for individuals passionate about exploring how chemistry applies to biology.",
    },
    {
      title: "Biochemistry study options and costs",
      content:
        "The United States is a prime destination for biochemistry studies due to its prestigious universities like MIT, Caltech, and Harvard. The average cost for studying biochemistry in the U.S. is around $35,000 annually. The UK also offers renowned institutions such as Oxford University, where the average tuition is £39,010 per year. Japan, with its state-of-the-art labs, offers a more affordable alternative, with biochemistry degrees costing around $12,000 per year.",
    },
    {
      title: "Future outlook",
      content:
        "Biochemistry is expected to grow by 5% over the next decade, reflecting an expanding role in drug development, disease prevention, and technological advances. Biochemists will be in high demand in fields like biomedical research, genetic research, and environmental protection.",
    },
    {
      title: "Career pathways for Biochemistry graduates",
      subtitle1: "Biomedical Scientists",
      content1:
        "Biomedical scientists focus on understanding and treating human diseases, contributing to advancements in medicine.",
      subtitle2: "Microbiologists",
      content2:
        "Microbiologists specialize in microorganisms, conducting experiments and analyzing results to enhance scientific knowledge.",
      subtitle3: "Biotechnologists",
      content3:
        "Biotechnologists apply biological organisms to develop products and processes in agriculture, medicine, and conservation.",
      subtitle4: "Academia",
      content4:
        "In academia, biochemists engage in teaching and research, training the next generation of scientists while contributing to the field's development.",
    },
  ];

  return (
    <div>
      {/* Section with background image */}
      <div style={sectionStyle}>
        <h1>Study Biochemistry Abroad</h1>
        <p>
        Biochemistry studies living organisms at the cellular, molecular, and 
        </p>
        <p> atomic levels to understand the biological processes that sustain life, </p>
        <p> offering research opportunities to enhance health and the environment.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: $94,270: Median annual salary for biochemists and biophysicists.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 5% projected growth in biochemistry employment.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 3,200 biochemistry job openings expected annually.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Biochemists enjoy higher job satisfaction than 56% of other professions.
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
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

export default Biochemistry;
