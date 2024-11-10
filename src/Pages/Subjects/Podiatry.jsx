import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Podiatry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle content visibility
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

  const statisticsWrapper = {
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
    color: "#4CAF50", // Attractive icon color
    marginBottom: "10px",
  };

  const faqSection = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqItem = {
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

  const faqDetailsStyle = {
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
      title: "About Podiatry",
      content1:
        "Podiatry refers to the medical care and treatment of the feet, also known as Chiropody. It is a branch of medicine dedicated to diagnosing and treating disorders affecting the foot, ankle, and lower extremities.",
      content2:
        "A Podiatrist, or Doctor of Podiatric Medicine (DPM), is a healthcare professional who diagnoses and treats conditions related to the foot, ankle, and lower leg structures. They address mobility issues, relieve pain, and treat infections, injuries, and complications like diabetes-related foot problems.",
      content3:
        "Podiatrists perform a range of tasks, including surgery, resetting broken bones, prescribing medications, and ordering lab tests or X-rays. They often collaborate with other specialists when dealing with foot or leg problems. In the US, podiatrists are licensed and regulated by state authorities.",
      content4:
        "Podiatrists work in various settings, such as podiatry offices, clinics, hospitals, outpatient care centers, and other healthcare facilities.",
    },
    {
      title: "Is Podiatry the right field for me?",
      content:
        "To be a podiatrist, one needs to be compassionate with strong critical thinking skills to accurately diagnose and treat patients. Podiatrists interact with patients frequently, so good listening and communication skills are essential. If this sounds like you, Podiatry may be a great fit.",
    },
    {
      title: "Study options and costs",
      content1:
        "To become a Podiatrist, you must first complete graduate school and then pursue a Doctor of Podiatric Medicine (D.P.M.) degree. The first two years focus on classroom instruction and laboratory work in basic medical sciences, while the last two years emphasize clinical sciences and patient care. The program lasts for 4 years and typically costs around $207,984 in the US.",
      content2:
        "After completing podiatric medical school, students enter residency training, which varies by country. Residency allows podiatrists to gain specialized training through rotations in fields like anesthesiology, internal medicine, infectious disease, surgery, emergency room care, and pediatrics.",
    },
    {
      title: "Job Outlook",
      content:
        "With an increase in working hours, there is a rise in foot and ankle injuries from prolonged standing. Therefore, podiatrists are in demand. According to the U.S. Bureau of Labor Statistics, the employment of podiatrists is expected to grow by 2% this decade. Approximately 900 job openings for podiatrists are projected each year. Podiatry is a highly specialized field with rewarding career opportunities.",
    },
    {
      title: "Career Opportunities for Podiatry Graduates",
      subtitle1: "Specialist Podiatrist",
      content1:
        "As a specialist podiatrist, you will diagnose foot and ankle diseases and perform various procedures. You will also treat sports-related injuries such as fractures and use advanced podiatric techniques to address deformities. The average annual salary for a podiatrist in the US is $95,000.",
      subtitle2: "Advanced Podiatrist",
      content2:
        "As an advanced podiatrist, you will consult with patients, review their medical histories, perform X-rays and physical scans of lower extremities, and treat sports-related injuries.",
      subtitle3: "Podiatry Researcher",
      content3:
        "As a podiatry researcher, you will assess different types of injuries and conduct studies on their causes and effects. You will contribute to advancements in the field and educate future podiatrists about the discipline's various aspects.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Podiatry abroad</h1>
        <p>
          Podiatry is the study of feet and their medical conditions. If you are passionate about making a difference 
        </p>
        <p>in people's lives by helping them stand on their feet (literally), then Podiatry is an excellent career choice!</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsWrapper}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>900</strong> projected job openings for podiatrists annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Average Salary:</strong> Annual earnings of a podiatrist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>12,100</strong> jobs for podiatrists in 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>2%</strong> projected job growth for podiatrists this decade
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSection}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItem}>
            <div style={faqTitleStyle} onClick={() => toggleContent(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqDetailsStyle}>
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

export default Podiatry;
