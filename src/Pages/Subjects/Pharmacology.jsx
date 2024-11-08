import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Pharmacology = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ visibility
  };

  const heroSectionStyle = {
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

  const statsSectionStyle = {
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
    color: "#4CAF50", // Attractive color
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
      title: "What is Pharmacology?",
      content:
        "Pharmacology is the study of how drugs interact with the body. This includes researching new chemicals and their effects, whether beneficial or harmful. It merges multiple fields like toxicology, biology, chemistry, and physiology, making it applicable to various life sciences careers. A degree in Pharmacology can lead to opportunities in academia, industry, or government.",
    },
    {
      title: "Is Pharmacology the right fit for me?",
      content1:
        "To succeed in Pharmacology, you'll need strong research skills, technical expertise, and the ability to stay organized. Communication is also key, ensuring your findings are clear and accessible to others.",
      content2:
        "Pharmacology is a versatile career, offering various specializations. You could work in product management, marketing, or medical information, bridging the gap between pharmaceutical companies, doctors, and patients.",
    },
    {
      title: "Pharmacology study options and costs",
      content1:
        "A graduate degree is essential to become a pharmacologist. This can be in fields like Life Sciences, Chemistry, Pharmacy, or Biology. Many pharmacologists pursue a Master's or Doctorate to deepen their knowledge of toxicology. As a general guide, tuition for a Bachelor of Science in the US is around USD$40,000 per year, and in Australia, it's about AUD$40,000 annually.",
      content2:
        "Pharmacology programs typically involve classroom and laboratory coursework, along with clinical practice or research. Check if any licenses or certifications are required for practicing Pharmacology in your chosen country.",
      content3:
        "When choosing your course, be mindful of the distinction between Pharmacology and Pharmacy. While Pharmacy focuses on dispensing medication, Pharmacology is centered on researching chemical compounds and medical advancements.",
    },
    {
      title: "Career prospects in Pharmacology",
      content:
        "The demand for medical scientists is expected to rise by 8% by 2028. As the global population grows, so will the need for new medical solutions. Pharmacology graduates can pursue careers in diverse sectors like academia, industry, or healthcare.",
    },
    {
      title: "Career opportunities for Pharmacology graduates",
      subtitle1: "Pharmacologist",
      content1:
        "As a pharmacologist, you'll research and develop substances to treat diseases. You'll modify compounds to minimize side effects, conduct experiments on drug absorption and metabolism, and provide scientific insights to healthcare professionals and the public.",
      subtitle2: "Pharmacist",
      content2:
        "Pharmacists dispense medications and offer advice to patients. They also administer vaccines and conduct health tests. Pharmacists may also work in pharmaceutical companies, testing and developing new medicines.",
      subtitle3: "Toxicologist",
      content3:
        "Toxicologists analyze bodily fluids and tissues to detect toxic substances. They work in laboratories and use advanced techniques to identify and measure drugs, poisons, or toxins in the body.",
      subtitle4: "Biomedical Scientist",
      content4:
        "Biomedical scientists investigate diseases, focusing on diagnosis, treatment, and prevention. By studying human health, they contribute to new therapeutic methods and cures.",
      subtitle5: "Analytical Chemist",
      content5:
        "Analytical chemists study the chemical properties of substances, conduct research, and develop instruments for testing. Their work ensures that products are safe for use in the medical and consumer industries.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={heroSectionStyle}>
        <h1>Study Pharmacology Abroad</h1>
        <p>
        Pharmacology combines science and pharmacy to develop treatments, 
        </p>
        <p>offering a rewarding career with a significant global impact. </p>
      </div>

      {/* Statistics Section */}
      <div style={statsSectionStyle}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>8%</strong> projected growth in medical scientist jobs by 2028.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            The average salary for pharmacologists is <strong>USD$99,000</strong>.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            Pharmacologist salaries in the US range between <strong>USD$71,000 and USD$214,000</strong>.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            The pharmaceutical industry's global revenue is <strong>USD$1.27 trillion</strong>.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSectionStyle}>
        <h2>Course Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleFaq(index)}>
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
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
                {item.content5 && <p>{item.content5}</p>}
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

export default Pharmacology;
