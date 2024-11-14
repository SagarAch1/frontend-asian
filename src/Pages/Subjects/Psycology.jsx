import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Psychology = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/psy.jpeg)`,
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
      title: "About Psychology",
      content1:
        "Psychology involves studying the human mind and behavior, exploring topics like memory, mental health, and personality. Students explore various aspects, from psychological disorders to cognitive processes.",
      content2:
        "Psychologists research decision-making, learning, and behavior. They also look for treatments for mental health challenges.",
      content3:
        "Students can expect to study fields like developmental psychology, sensation, cognition, and health psychology.",
      content4:
        "Psychology graduates are highly valued for skills like critical thinking, research ability, and communication, leading to diverse career paths.",
    },
    {
      title: "Is Psychology the right choice for me?",
      content1:
        "People often face internal struggles that are overlooked, but these can have profound effects. If you're empathetic and enjoy helping others, psychology could be an excellent fit for you.",
      content2:
        "Empathy and patience are vital traits for a psychologist, as understanding and treating others' struggles is at the core of the profession.",
      content3:
        "If you're driven by research and have a passion for understanding the human mind, psychology might be the perfect career for you.",
    },
    {
      title: "Psychology study options and costs",
      content1:
        "A Bachelor's in Psychology, usually lasting four years, is the first step toward a career in the field. While not enough for certification, it opens doors to internships and research assistant positions. In the U.S., this degree can cost between $25,000 and $60,000 per year.",
      content2:
        "After a Bachelor's, students can pursue a Master's in Psychology, specializing in areas like counseling, organizational, or forensic psychology. A Master's typically costs $32,000-54,000 AUD in Australia and £20,000-50,000 in the UK.",
      content3:
        "For further specialization, a PhD or PsyD is available. While a PhD focuses on research and academic work, a PsyD is more practice-oriented. Both take 4-6 years to complete, with PhD programs being more competitive.",
    },
    {
      title: "Future Outlook",
      content:
        "The demand for psychologists has grown significantly in recent years, particularly in education, health, and social services. The field's growth is expected to continue, with an 8% employment growth rate this decade and over 13,000 new jobs in the U.S. annually.",
    },
    {
      title: "Career pathways for Psychology graduates",
      subtitle1: "Clinical psychologists",
      content1:
        "Clinical psychologists diagnose and treat mental health disorders, tailoring treatment to individual needs. They make an average salary of $79,000 annually.",
      subtitle2: "Forensic psychologists",
      content2:
        "Forensic psychologists apply their expertise to the legal system, evaluating the mental state of individuals involved in legal proceedings. They earn an average salary of $77,000.",
      subtitle3: "Industrial-organizational psychologists",
      content3:
        "These psychologists work to improve productivity and employee satisfaction in the workplace. They make an average of $100,000 annually.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Psychology Abroad</h1>
        <p>
        Curious about human behavior? Studying Psychology helps you understand emotions,
        </p>
        <p> actions, and thoughts, with various career opportunities both in and beyond the field.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>Average annual salary of a psychologist: $82,140</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>13,400 job openings expected annually</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>8% employment growth expected this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>Top 10% of psychologists earn $137,590 annually</p>
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

export default Psychology;
