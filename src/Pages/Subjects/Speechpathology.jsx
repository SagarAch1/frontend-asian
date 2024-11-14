import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SpeechPathology = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle content visibility
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
    color: "#4CAF50", // Attractive color change
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
      title: "About Speech Pathology",
      content1:
        "Speech pathology is a healthcare profession focused on evaluating, diagnosing, and treating speech, language, cognitive communication, and swallowing disorders in both children and adults. This includes conditions like stuttering, speech difficulties, and dysphagia.",
      content2:
        "This field offers a rewarding career not only in financial terms but also in terms of positively impacting lives. Speech pathologists assist individuals with speech disorders and also those looking to improve their communication abilities. You will study subjects like anatomy, linguistics, acquired language disorders, clinical practice, and engage in speech pathology research.",
      content3:
        "Speech pathologists can work in diverse settings, including research, education, and healthcare. They often collaborate with other professionals, such as physicians, teachers, mental health experts, and audiologists.",
    },
    {
      title: "Is Speech Pathology right for me?",
      content1:
        "If you have a strong sense of empathy and excellent communication skills, you might find speech pathology to be a fulfilling career. This profession requires curiosity and ethical standards. As speech pathologists work with people of all ages facing unique challenges, adaptability and compassion are essential.",
      content2:
        "Clients may struggle to express themselves fully due to their speech impairments. It is the speech pathologist's role to be patient, listen carefully, and show empathy. Every patient has their own set of challenges, so flexibility is required in their approach.",
      content3:
        "This field demands excellent interpersonal communication. As a speech pathologist, you will work closely with clients one-on-one to provide personalized therapy. Extroverted individuals who enjoy interactive roles tend to thrive in this career.",
    },
    {
      title: "Study options and costs",
      content1:
        "To pursue a career in speech pathology, the first step is obtaining a bachelor's degree in Speech Pathology or a related field. Typically, a bachelor's degree takes 3 to 4 years and costs approximately $30,000 per year for international students in the US.",
      content2:
        "After completing your undergraduate degree, you can enroll in a master's program in Speech Pathology, which typically takes 2 years to complete. The cost for the master's program ranges from $23,000 to $75,000 per year in the US, depending on the institution.",
      content3:
        "For those wishing to further their expertise, pursuing a PhD in Speech Pathology is an option. The PhD program takes 4 to 6 years to complete and includes a clinical fellowship of at least 1,260 hours. This is necessary to obtain state licensure.",
    },
    {
      title: "Future outlook",
      content1:
        "Speech Pathology is a growing field with increasing demand. Many healthcare and rehabilitation facilities hire speech pathologists to help patients with speech disorders. A significant number also work in schools as counselors. Some specialize in pediatric speech pathologies and work in primary education settings.",
      content2:
        "According to the U.S. Bureau of Labor Statistics, employment in speech pathology is expected to grow by 29% by 2030, much faster than the average growth rate across all professions. There will be approximately 15,200 job openings each year for speech pathologists.",
      content3:
        "Speech Pathology is one of the most secure and rewarding career paths due to its high demand, excellent salary prospects, and flexible work environment.",
    },
    {
      title: 'Career paths for Speech Pathology graduates',
      subtitle1: 'Voice Coach',
      content1:
        'Some speech pathologists choose to work as voice coaches, helping clients such as actors, singers, and executives improve their vocal techniques, reduce accents, and prevent voice strain.',
      subtitle2: 'Temporary Speech Language Pathologist',
      content2:
        'Temporary speech language pathologists take on short-term assignments in various clinical and non-clinical settings, both locally and internationally. Experience in a clinical setting is required for these roles.',
      subtitle3: 'Researcher or Professor',
      content3:
        'Experienced speech pathologists can transition into academic roles, either as professors or researchers. Teaching future speech pathologists and conducting research are typical roles in academia. A doctoral degree is generally required for most faculty positions.',
    },
  ];

  return (
    <div>
      {/* Main Section with background image */}
      <div style={sectionStyle}>
        <h1>Study Speech Pathology Abroad</h1>
        <p>
          Speech pathologists help individuals overcome speech and language difficulties. 
        </p>
        <p>The field focuses on diagnosing and treating issues related to communication, </p>
        <p>swallowing, and speech, aiming to improve the lives of those affected.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $79,060: median annual salary of speech pathologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 29% projected job growth in the field
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $125,560: average salary of top speech pathologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 15,200 job openings expected annually
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleContent(index)}>
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
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
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

export default SpeechPathology;
