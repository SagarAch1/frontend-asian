import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Podiatry = () => {
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
      title: "About Podiatry",
      content1:
        "Podiatry is defined as the medical care and treatment of the human foot. It is also known as Chiropody. Podiatry or Podiatric Medicine is a branch of medicine devoted to the study, diagnosis and medical/ surgical treatment of disorders of the foot, ankle, and lower extremities. ",
      content2:"A podiatrist or Doctor of Podiatric Medicine (DPM), is a healthcare professional who diagnoses and treats conditions affecting the foot, ankle, and structures of the leg. They can help people deal with a range of mobility issues, relieve any existing pain and treat infections of the feet and lower legs. They can also treat injuries as well as complications from ongoing health issues like diabetes. You might hear them called a podiatric physician or doctor of podiatric medicine. ",
      content3:"Podiatrists perform multiple roles; they can do surgery, reset broken bones, prescribe drugs, and order lab tests or X-rays. They often work closely with other specialists when a problem affects your feet or lower legs. In the US, podiatrists are licensed and regulated by state governments.  ",
      content4:"Podiatrists work in several professional settings, ranging from offices of podiatry to clinics of physicians or specialists. They also provide their expertise in hospitals, outpatient care centres and other health care facilities.",
    },
    {
      title: "Is Podiatry right for me?",
      content:
      "A podiatrist needs to be a compassionate individual who has exceptional critical thinking skills to correctly diagnose a patient and determine the best course of treatment. Because podiatrists spend much of their time interacting with patients, they should be good listeners and be able to communicate effectively. Thus they must possess great interpersonal skills. If this sounds like you, then Podiatry is the right career field for you.",
      
    },
    {
      title: "Study options and costs",
      content1:
        "After the graduate school course, you must enrol in college for a degree of Doctor of Podiatric Medicine (D.P.M.). The first two years concentrate on classroom instruction and laboratory work in the basic medical sciences. The third and fourth years of study focus on the clinical sciences and patient care. The degree spans 4 years and costs around $207,984 in the US.",
        content2:"After completing podiatric medical school, you move on to residency training the duration of which may vary from country to country. A residency provides podiatrists with the chance to get specialised training through rotations, such as an aesthesiology, internal medicine, infectious disease, surgery, ER and paediatrics.",
    },
    {
      title: "Future outlook",
      content:
        "As the number of working hours on the job have increased, so have ankle and foot injuries, due to continuous standing. Hence, podiatrists are in demand. According to the U.S. Bureau of Labor Statistics, employment of podiatrists is projected to grow 2% in this decade. About 900 openings for podiatrists are projected each year, on average, over the decade. Podiatry is a highly specialised field with lucrative career opportunities.",
    },
    {
      title: "Career Pathways for Creative writing graduates",
      subtitle1: "Specialist Podiatrist",
      content1:
        "As a specialist podiatrist, you will be responsible for examining patients' legs to diagnose diseases as well as for performing foot and ankle procedures. You will also treat sports-related foot and leg injuries, like fractures and use various podiatric techniques to treat deformities and ailments. The average annual salary for a podiatrist in the US is $95,000",
      subtitle2: "Advanced Podiatrist",
      content2:
        "As an advanced podiatrist, you will consult with patients in a clinic or hospital after reviewing a patient’s medical history. You will also be responsible for performing X-rays and physical scans of a patient’s lower extremities and for treating sport-related leg or foot injuries.",
      subtitle3: "Specialist Podiatrist",
      content3:
        "As a podiatry researcher, you will assess different types of injuries and work with various people to study the effects and causes of their medical conditions related to podiatry. Being a researcher, you will introduce new advancements in the field of podiatry that will open new doors for further research and knowledge. Your role will also include educating young aspiring podiatrists about the different aspects and implications of the field.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Podiatry abroad</h1>
        <p>
          The study of feet and their ailments is called Podiatry. If you have a
          passion to make a change in people’s lives which would help them stand
          on their feet (literally), then, Podiatry is a good career choice for
          you!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 900 projected employment opportunities for
            podiatrists every year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of podiatrists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 12,100 jobs for podiatrists in the year 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 2% projected employment growth for podiatrists in
            this decade
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

export default Podiatry;
