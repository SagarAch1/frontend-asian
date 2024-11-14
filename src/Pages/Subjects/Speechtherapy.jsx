import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SpeechTherapy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/speech.jpg)`,
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
      title: "About Speech Therapy",
      content1:
        "Speech Therapy, also known as Speech-Language Pathology, is often associated with overcoming speech challenges. However, it encompasses much more than that. Speech therapists evaluate, diagnose, and treat a range of issues including fluency, articulation, comprehension, and even swallowing disorders.",
      content2:
        "A degree in Speech Therapy blends counselling and therapy fundamentals with communication science. You will gain the skills needed to excel in the field. Additionally, part of your education will be clinical, meaning you'll likely complete internships or clinical rotations to gather practical experience, which typically occurs as part of your master's program.",
    },
    {
      title: "Is Speech Therapy right for you?",
      content:
        "If you are empathetic, possess strong interpersonal abilities, and are passionate about a career in counselling or therapy, this degree could be an excellent match. There are many career options in this field, and due to the increasing demand for speech therapists, securing a job is highly probable during your final year of training.",
    },
    {
      title: "Speech Therapy study options and cost",
      content1:
        "After high school, a bachelor’s degree in Speech Therapy offers a solid theoretical foundation for the field. A typical bachelor's program lasts four years and may cost up to $39,000 in the U.S.",
      content2:
        "After the undergraduate degree, students pursue a master's in Speech Therapy. These programs are often paired with clinical experiences to ensure students gain practical, hands-on knowledge. Master's programs usually last two years and can cost as much as $75,000.",
    },
    {
      title: "Future outlook",
      content:
        "Job opportunities for speech therapists are expected to grow significantly in the coming years. The U.S. Bureau of Labor Statistics projects a 27% increase in employment for speech therapists over the next six years, which is notably higher than the national average.",
    },
    {
      title: "Career Pathways for Speech Therapy graduates",
      subtitle1: "Speech Therapist",
      content1:
        "Speech therapists, also known as speech-language pathologists (SLPs), specialize in improving communication skills and addressing swallowing disorders across all age groups. The average annual salary for a speech therapist is $79,120.",
      subtitle2: "Special Education Teacher",
      content2:
        "Special education teachers assist children with physical, auditory, or visual disabilities, along with emotional, behavioral, and learning challenges. They may also use specialized teaching methods like sign language and interactive games. Many of these teachers hold a degree in Speech Therapy, along with other certifications. The average salary for a special education teacher is $82,500 per year.",
      subtitle3: "Paediatric Speech Pathologist",
      content3:
        "Paediatric speech pathologists work with children to address speech and communication challenges like stuttering, lisping, or delayed speech. They help children develop both verbal and non-verbal communication skills. The average salary for a pediatric speech pathologist is $77,510 annually.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Speech Therapy abroad</h1>
        <p>
          Speech Therapy involves the assessment and treatment of communication issues  
        </p>
        <p>and speech disorders.This field is vital for addressing speech problems in children   </p>
        <p>or speech difficulties in adults caused by injuries or illnesses like strokes or brain injuries.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary for speech therapists in the
            U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $6.08 billion: estimated market value for speech
            therapy
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected annual job openings for speech therapists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 27% projected growth in employment over the next six years
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

export default SpeechTherapy;
