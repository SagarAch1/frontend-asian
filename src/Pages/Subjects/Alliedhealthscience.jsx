import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const AlliedHealthScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the FAQ section open or closed
  };

  const headerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/health.jpeg)`,
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

  const statsSectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statCardStyle = {
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
    color: "#4CAF50", // Green for a fresh, attractive look
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Allied Health Science",
      content1:
        "Allied Health Science prepares professionals to support primary healthcare providers in delivering 360-degree care. It covers a variety of diagnostic methods in the medical field like blood tests, histopathology, and radiography. Allied Health Science professionals also use management and administrative skills to assist healthcare systems, promoting better health outcomes.",
      content2:
        "The curriculum includes biology, anatomy, physiology, chemistry, and psychology, as well as biostatistics, public health, genetics, immunology, environmental health, ergonomics, and nutrition.",
    },
    {
      title: "Is studying Allied Health Science right for me?",
      content1:
        "A degree in Allied Health Science opens doors to in-demand careers in healthcare, whether directly interacting with patients or managing healthcare systems. This flexible degree lets you explore various healthcare professions without needing to become a doctor or dentist.",
      content2:
        "This program will enable you to make a positive impact on others' lives while offering real-world experience through internships at hospitals or clinics.",
    },
    {
      title: "Study options and costs",
      content1:
        "An undergraduate degree in Allied Health Science doesn’t just prepare you for work but gives you hands-on experience and accelerates your career. A bachelor’s degree in this field also prepares you for graduate studies in areas like athletic training or occupational therapy.",
      content2:
        "A bachelor’s degree provides a comprehensive education on health-related topics and equips you for various health careers. You can pursue careers in patient care coordination, health education, medical billing, laboratory research, and more. The course duration is 3 to 4 years, and costs range from $25,294 to $75,984 depending on the institution.",
      content3:
        "While master’s and PhD programs are available, the bachelor's degree remains the most popular choice.",
    },
    {
      title: "Future outlook",
      content1:
        "Allied health careers offer stable, well-paying opportunities while contributing to societal health. Healthcare has held the largest share of job sectors in the U.S. since 2017 and is expected to grow even further.",
      content2:
        "In the U.S. alone, there are over 5 million allied health providers, and these roles make up about 60% of all healthcare providers. Job openings for allied health professionals are projected to be 11,400 annually!",
    },
    {
      title: 'Career Pathways for Allied Health Science graduates',
      subtitle1: 'Speech-language pathologist',
      content1:
        'Speech-language pathologists assess and treat patients with communication and swallowing difficulties. This field is expected to grow by 18% this decade. Average salary: $80,480.',
      subtitle2: 'Respiratory Therapist',
      content2:
        'Respiratory therapists provide therapy and diagnostic services for patients with respiratory conditions. Average salary: $62,810.',
      subtitle3: 'Healthcare Office Assistant',
      content3:
        'Healthcare office assistants handle administrative tasks like data entry and scheduling. Average salary: $37,350.',
      subtitle4: 'Physician Assistant',
      content4:
        'One of the fastest-growing professions, physician assistants work closely with doctors in patient care. Projected job growth: 31%. Average salary: $115,390.',
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={headerStyle}>
        <h1>Study Allied Health Science Abroad</h1>
        <p>
          If you're passionate about science and healthcare, pursuing a degree in allied  </p>
          <p>health science could be the perfect career path. Allied health professions 
          </p>
          <p>focus on prevention and recovery for patients.</p>
      </div>

      {/* Statistics section */}
      <div style={statsSectionStyle}>
        <div style={statCardStyle}>
          <div style={iconStyle}>🌟</div>
          <p>$59.7 billion estimated worth of the allied health industry</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>📈</div>
          <p>Average annual salary of allied health professionals</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>💼</div>
          <p>Average annual salary of top sports scientists</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>🔧</div>
          <p>11,400 job openings projected each year</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
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

export default AlliedHealthScience;
