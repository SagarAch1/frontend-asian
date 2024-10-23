import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SpeechPathology = () => {
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Speech Pathology",
      content1:
        "Speech pathology is an allied health profession that is concerned with the evaluation, assessment, diagnosis and prevention of speech, language, social communication, cognitive communication and swallowing disorders in children as well as in adults. It deals with issues like stuttering, lisping or dysphagia.",
        content2:"Speech pathology is a rewarding career, both in terms of the financial aspect and community bonding. The work you do as a speech pathologist leaves a positive mark on the lives of the people you work with. Speech pathologists do not only work with people who are suffering from speech disorders but also work with people who aspire to improve their communication skills. Common course modules you can expect to study are anatomy and physiology of speech, linguistics and phonetics, acquired language disorders, clinical practice, speech pathology research and multiple speech pathology practicums.",
        content3:"Speech pathologists work in different environments depending on their various job roles. It could be research, educational and/or health care facility. Often speech pathologists work as a part of collaborative team which includes physicians, teachers, mental health specialists and audiologists.",
      
    },
    {
      title: "Is Speech Pathology right for me?",
      content1:
        "If you believe yourself to be empathetic and possess good communication skills, you may find speech pathology a rewarding field. A speech pathologist is driven by curiosity and is a strong adherent of ethics. As speech pathologists have to work with people of varying ages, all of them, with unique problems, they must be adaptable and compassionate.",
        content2:"Often the client will not be able to express himself completely due to their speech impediment. It is, then, the responsibility of the speech pathologist to deal with them patiently, listen carefully and display compassion. Every patient will come with their distinct set of speech complications; therefore, a speech pathologist must be flexible in his approach towards different clients.",
        content3:"Speech pathology requires a lot of verbal communication so one should have outstanding interpersonal skills to become a speech pathologist. It also requires dealing with clients on one-on-one basis to provide appropriate therapy and exercise for their speech problem. Extroverted people who enjoy interactive jobs tend to feel most at home in this field.",
    },
    {
      title: "Study options and costs",
      content1:
        "If you plan on becoming a speech pathologist, the first step is to complete bachelors in Speech Pathology or in a related field. A bachelor’s degree usually take 3 to 4 years to complete and costs around $30,000 per year for international students in the US.",
        content2:"After earning your undergraduate degree, you can apply for a master’s programme in Speech Pathology. The master’s programme paves the way for securing good jobs in this field. It takes 2 to complete and costs around $23,000-$75,000 per year in the US depending on the institute.",
        content3:"If you wish to earn a doctoral degree, you can pursue a PhD in Speech Pathology which usually takes 4 to 6 years. You need to complete a clinical fellowship of a minimum of 1260 hours, after completing your graduate programme in order to obtain state licensure.",
      
    },
    {
      title: "Future outlook",
      content1:
        "Speech Pathology is a promising career with demand on the rise. Many healthcare and rehabilitation facilities hire speech pathologists to work with patients experience speech disorders. A large number of speech pathologists work in schools as counsellors. Some Speech pathologists might specialise in children speech pathologies and find occupation in primary education institutes.",
        content2:"According to U.S. Bureau of Labor Statistics, the employment rate of speech pathologists is expected to grow by 29% by year 2030. It is a much faster growth rate compared to the average of all other occupations. Around 15,200 job openings are projected each year for speech pathologists!",
        content3:"Speech pathology is one of the most secure and rewarding career fields due to its high demand, financial benefits, and flexibility in work.",
      
    },
    {
        title: 'Career pathways  for Speech Pathology graduates',
        subtitle1: 'Voice Coach',
        content1: 'Many speech pathologists who do not wish to work in a clinical setting opt to become voice coaches. As a voice coach, it is your job to train different actors, singers, executives and other clients to reduce their accents, adapt new dialects and prevent voice injuries by using their voice properly.',
        subtitle2: 'Temporary Speech Language Pathologist',
        content2: 'Temporary speech language pathologists take on temporary assignments in a variety of clinical and domestic settings locally and internationally. In order to secure a travelling position, you must have experience working in a clinical setting.',
        subtitle3: 'Researcher or Professor ',
        content3: 'Speech language pathologists can choose to become professors once they have secured sufficient experience. Speech Pathology professors train other prospective speech pathologists and conduct new research. A doctoral degree is a typical requirement for most teaching positions in Speech Pathology.',
      
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Speech Pathology abroad       </h1>
        <p>
        Many people suffer from speech and language difficulties. This is where a speech pathologist steps in and helps. Speech pathology deals with the scientific study and treatment of disorders, defects and problems of speech, language and communication.





      </p>
      </div>

      {/* Statistics section */}
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
            <strong>

</strong>29% projected growth in employment opportunities
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>$125,560: average annual salary of top speech pathologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>15,200 projected career and job openings every year
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
          {item.subtitle4 && (
            <div style={faqSubtitleStyle}>{item.subtitle4}</div>
          )}
          {item.content4 && <p>{item.content4}</p>}
          {item.subtitle5 && (
            <div style={faqSubtitleStyle}>{item.subtitle5}</div>
          )}
           {item.content5 && <p>{item.content5}</p>}
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

export default SpeechPathology;