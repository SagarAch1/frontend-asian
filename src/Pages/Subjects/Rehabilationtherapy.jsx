import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const RehabilitationTherapy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility of FAQ sections
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
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
    color: "#4CAF50", // Attractive green color
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
      title: "About Rehabilitation Therapy",
      content1:
        "Rehabilitation Therapy is a practice that aims to help individuals regain their ability to function after an injury or illness. It also supports people in improving their overall quality of life by adopting healthier habits or removing harmful ones.",
      content2:
        "This therapy is essential for individuals who experience chronic illness or injury that hampers their ability to carry out day-to-day activities. Many people benefit from rehabilitation therapy due to the loss or impairment of physical or mental abilities caused by medical treatments.",
      content3:
        "Rehabilitation therapists work in a variety of environments such as hospitals, mental health clinics, physiotherapy centers, nursing homes, and other healthcare settings. They can also specialize as occupational therapists, physical therapists, or speech therapists, among other roles.",
    },
    {
      title: "Is Rehabilitation Therapy right for me?",
      content1:
        "Do you have the compassion, patience, and determination to help others? If so, rehabilitation therapy could be a great career path for you. Therapists work closely with clients, so good interpersonal and communication skills are essential. Since therapy can take time, a therapist needs to remain dedicated to improving their client’s condition.",
      content2:
        "If you're driven by empathy and a desire to help others, a career in rehabilitation therapy might be fulfilling for you as it plays a key role in improving the lives of those who are ill or injured.",
    },
    {
      title: "Rehabilitation Therapy study options and costs",
      content:
        "To become a rehabilitation therapist, you’ll typically need to earn a bachelor’s degree in a related field like Social Sciences, which takes about four years. Specializing in rehabilitation therapy can be done by completing a master’s program, typically lasting two years and costing up to $60,000 in the U.S.",
    },
    {
      title: "Future outlook",
      content:
        "The demand for rehabilitation therapists is growing as the aging population increases and more people require rehabilitation services. Therapists help individuals live independently and adapt to new life changes. According to the U.S. Bureau of Labor Statistics, the employment growth for rehabilitation therapists is expected to rise by 10% in this decade, indicating a strong demand for this profession.",
    },
    {
      title: "Career Pathways for Rehabilitation Therapy graduates",
      subtitle1: "Disability Specialist",
      content1:
        "A disability specialist ensures that individuals with physical or mental disabilities receive the appropriate services and accommodations to function in everyday life. Your job will involve determining eligibility for services and tracking progress. The average annual salary for a disability specialist is up to $53,500.",
      subtitle2: "Program Coordinator",
      content2:
        "A program coordinator plans and manages activities for an organization, often within healthcare, education, or nonprofit sectors. As a coordinator in rehabilitation clinics, you’ll organize events to raise awareness about health issues and manage records. The average salary for a program coordinator is up to $43,582.",
      subtitle3: "Rehabilitation Nurse",
      content3:
        "Rehabilitation nurses help patients with chronic illnesses or disabilities adjust to their new circumstances. They assist clients in achieving their health goals and following treatment plans, while also teaching them new life skills. The average salary for a rehabilitation nurse is up to $67,162.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={sectionStyle}>
        <h1>Study Rehabilitation Therapy abroad</h1>
        <p>
          Rehabilitation Therapy focuses on interventions that help people manage
        </p>
        <p> disabilities and improve their functioning in everyday interactions.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>Average annual salary for rehabilitation counselors in 2021</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>10% expected growth in rehabilitation counselor employment in this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>Projected job openings for rehabilitation counselors</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>104,500 rehabilitation counselors employed in the U.S.</p>
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

export default RehabilitationTherapy;
