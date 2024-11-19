import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const OccupationalTherapy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close state
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/rehabi.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
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
    color: "#4CAF50", // Adjusted color for visual appeal
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
      title: "Overview of Occupational Therapy",
      content1:
        "Occupational Therapy focuses on assisting individuals with disabilities to regain the ability to perform essential tasks. Rather than relying on surgical procedures or medications, occupational therapists emphasize teaching patients functional skills and integrating them into daily activities.",
      content2:
        "Typical course modules include Kinesiology, Physiotherapy, Human Movement, Psychology, Biology, Anatomy, and Cell Biology.",
    },
    {
      title: "Is Occupational Therapy a Suitable Career for Me?",
      content1:
        "If you’re passionate about understanding human movement and the impact of physical activities on the body’s function, this field may be a good fit. A major aspect of the curriculum includes fieldwork, where students will gain practical experience under the supervision of a licensed occupational therapist.",
      content2:
        "Occupational Therapy, like most healthcare fields, requires continuous learning. It is common for practitioners to pursue postgraduate education and continually update their expertise throughout their careers.",
      content3:
        "If you are empathetic, possess strong interpersonal skills, and are driven to help others, Occupational Therapy could be the perfect field for you.",
    },
    {
      title: "Educational Options and Costs",
      content1:
        "A Bachelor’s degree in Occupational Therapy typically takes 3 to 4 years to complete, providing a thorough understanding of both theoretical principles and practical applications in this field.",
      content2:
        "Graduates may continue their studies with a Master’s degree in Occupational Therapy. There are no strict undergraduate degree prerequisites, although degrees in education or healthcare are favored. Advanced programs like a Master of Occupational Therapy (MOT) or a Doctor of Occupational Therapy (OTD) are available and can cost between $65,000 and $200,000.",
    },
    {
      title: "Career Prospects",
      content1:
        "The demand for Occupational Therapy professionals is on the rise. According to the U.S. Bureau of Labor Statistics, employment opportunities for Occupational Therapists are projected to increase by 17% from 2020 to 2030. The field will also see over 10,000 new job openings annually during this period.",
      content2:
        "Occupational therapists primarily work in hospitals (29%), rehabilitative settings (25%), and other locations like schools, home healthcare, and nursing homes (46%). The field offers diverse job opportunities in various settings, with competitive salaries.",
    },
    {
      title: "Career Opportunities for Occupational Therapy Graduates",
      subtitle1: "Pediatric Occupational Therapist",
      content1:
        "Pediatric Occupational Therapists specialize in working with children, identifying causes of delays or limitations, especially in fine motor skills, cognitive abilities, social development, and daily routines.",
      subtitle2: "Occupational Therapy Assistant",
      content2:
        "Occupational Therapy Assistants support therapists by helping patients with exercises and activities, tracking progress, and promoting independence.",
      subtitle3: "Rehabilitation Director",
      content3:
        "Rehabilitation Directors oversee rehabilitation programs in healthcare facilities, managing physical therapy, occupational therapy, and speech therapy departments.",
    },
  ];

  return (
    <div>
      {/* Banner section with background image */}
      <div style={sectionStyle}>
        <h1>Study Occupational Therapy Abroad</h1>
        <p>
          Occupational Therapy (OT) is a healthcare discipline focused on
          helping
        </p>
        <p>
          individuals regain the ability to perform tasks essential to daily
          life,such as{" "}
        </p>
        <p>
          {" "}
          dressing,eating, moving around, and engaging in productive activities.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average yearly salary for an occupational
            therapist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Estimated value of the occupational therapy market
            in 2022
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected 17% growth in employment for
            occupational therapists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 10,100 annual job openings for occupational
            therapists
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Course Insights</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => handleToggle(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {/* Display subtitles and content if available */}
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

export default OccupationalTherapy;
