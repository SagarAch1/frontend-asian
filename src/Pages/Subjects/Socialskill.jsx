import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SocialSkills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the FAQ visibility
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
    color: "#4CAF50", // Attractive green color for icons
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
      title: "About Social Skills",
      content:
        "Social Skills programmes are designed to teach students how to connect with people across various contexts, such as personal, social, and professional settings. It's a multifaceted subject that serves a broad range of society. If you have a passion for communication, emotional intelligence, and empathy, then this field is for you.",
    },
    {
      title: "Is Social Skills right for me?",
      content:
        "Social Skills training is in high demand for behavioral intervention, especially for improving interpersonal skills and enhancing workplace performance. If you struggle with social interactions, this programme will help you develop these important skills.",
    },
    {
      title: "Study options and costs",
      content:
        "Social Skills programmes can be pursued after high school completion. These courses are often incorporated into bachelor’s and master’s degree programs, especially in fields like Business Administration, Workplace Development, and Social Sciences. These programmes typically span four years and may cost up to $50,500.",
    },
    {
      title: "Future outlook",
      content1:
        "Social skills are essential in professions that involve frequent people interaction, particularly in corporate environments. Professionals who can teach these skills at post-secondary institutions are also in demand. These programmes have a significant impact on students' interpersonal relationships and future career success.",
      content2:
        "Soft skill-intensive jobs are expected to grow rapidly, making up two-thirds of all jobs by 2030. Corporate training is also a promising field, with the job outlook for corporate trainers expected to grow by 11% in the next five years.",
    },
    {
      title: "Career pathways for Social Skills",
      subtitle1: "Social Skills Trainer - Autism",
      content1:
        "Social skills trainers working with children on the autism spectrum use reward systems to teach social interactions. A trainer in this field would have specialized in Social Skills during their studies. The average salary for a social skills trainer is $40,281 annually.",
      subtitle2: "Training Coordinator",
      content2:
        "Training coordinators identify training needs, design, and oversee training programs for employees. The role involves creating and conducting training to improve employees’ skills. The average salary for a training coordinator is $52,128 annually.",
      subtitle3: "Child Welfare Trainer",
      content3:
        "Child welfare trainers work for social services, ensuring children live in safe environments. They help children develop social skills necessary for positive relationships in society. The average salary for a child welfare trainer is $52,389 annually.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Social Skills abroad</h1>
        <p>
          Humans use gestures, body language, and appearance to communicate and 
        </p>
        <p> connect with others. Social Skills helps individuals refine these abilities</p>
        <p>  for success in personal and professional environments.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average salary for a social skills facilitator
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Projected 11% growth in corporate trainer jobs in the coming decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Expected annual growth rate of the soft skills market over the next five years
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Social skills-intensive jobs will account for two-thirds of the workforce by 2030
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

export default SocialSkills;
