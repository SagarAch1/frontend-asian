import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const AlliedHealthScience = () => {
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
      title: "About Allied Health Science",
      content1:
        "Allied Health Science prepares professionals to provide complementary support to primary healthcare providers for 360-degree healthcare. Allied Health Science encompasses the several types of diagnostic techniques which are being used in the medical sector (e.g., blood analysis, histopathology, pathological analysis, and radiography). The allied health industry includes a wide range of healthcare professionals who utilise their expertise to help patients avoid contracting diseases and those recovering from illnesses. Allied Health Science professionals also apply management and administrative skills to support healthcare systems and evidence-based practices to assist patients.",
        content2:"The curriculum is based on a thorough study of biology, anatomy, physiology, chemistry, and psychology. Other subjects include biostatistics, diagnostic techniques, public health, and genetics, immunology, environmental health, ergonomics, health administration, and nutrition.",
      
    },
    {
      title: "Is studying Allied Health Science right for me?",
      content1:
        "A degree in Allied Health Science can help you keep your options open for in-demand health careers, whether those include direct patient interaction roles or the administrative facet of the healthcare industry. This degree allows you to pursue a profession in healthcare without becoming a doctor or dentist. Of course, there are several allied health professions and if you’re not yet sure what branch you want to specialise in, then majoring in Allied Health Science can provide you with a lot of flexibility.",
        content2:"This degree will enable you to make a positive difference in the lives of others while exploring various aspects of the healthcare industry. Most schools require students to gain real-world experience before graduating, usually through internships at local hospitals, physical therapy clinics, and athletic training clinics.",
      
    },
    {
      title: "Study options and costs",
      content1:
        "If you want to become an allied health professional, your undergraduate major doesn’t have to be a placeholder. It can be the key that provides hands-on experience and helps you fast-track your career. Pursuing a bachelor’s in Allied Health Science will provide you with a robust education, plus a potential spot on the shortlist for graduate programmes in athletic training, occupational therapy, and speech-language pathology to name a few.",
        content2:"A bachelor of Allied Health Science focuses on health, including social aspects of health, to provide students with an interdisciplinary background and skill set. Students develop the knowledge and prerequisites necessary for entry into health-related careers. This degree provides you with quick employment opportunities in a variety of health fields including case management/patient care coordination, health education, medical billing and account management, health marketing and sales, laboratory research, and health insurance administration. The completion time is 3 to 4 years and costs vary from $25,294 to $75,984, depending upon the institution.",
        content3:"Although there are master’s and PhD programmes available in Allied Health Science, a bachelor’s degree remains the most popular choice.",




    },
    {
      title: "Future outlook",
      content1:
        "Allied health careers can be an ideal option for those who would like a stable and well-paying career while contributing to societal welfare. According to the U.S. Bureau of Labor Statistic (BLS), healthcare, since 2017, has held the largest share of jobs compared to any other sector, and this is only expected to continue.",
        content2:"There are five million allied health care providers in the US alone! There are more than 80 unique allied health professions and these form approximately 60% of all healthcare providers. The number of allied healthcare providers is expected to grow. In fact, 11,400 job openings are projected for Allied Health Science professions every year!",
       
    },
    {
        title: 'Career Pathways for Allied Health Science graduates',
        subtitle1: 'Speech-language pathologist',
        content1: 'The role of speech-language pathologists, also known as speech therapists, is to assess, diagnose, and treat patients with problems related to communication and swallowing. According to the BLS, this field is expected to expand by as much as 18%, this decade. Speech-language pathologists earn on average $80,480 per year.',
        subtitle2: 'Respiratory Therapist',
        content2: 'Respiratory therapists, also known as respiratory care practitioners, provide respiratory therapy and diagnostic tests. Respiratory therapy is a high-paying job. You’ll will work with patients with an array of respiratory disease and help them recover. The average annual salary of a respiratory therapist is $62,810.',
        subtitle3: 'Healthcare Office Assistant ',
        content3: 'If you like working in office environments, then becoming a healthcare office assistant will suit you. Healthcare office assistant perform duties ranging from data entry to appointment setting. The average annual salary of a healthcare office assistant is $37,350.',
        subtitle4:'Physician Assistant',
        content4:'This is one of the fastest-growing professions in Allied Health Science. According to the BLS, the expected growth rate for physician’s assistants is a whopping 31%. The role of a physician’s assistant is to work alongside doctors in treating, diagnosing, and helping patients. The average annual salary of a physician’s assistant is $115,390.',
      
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Allied Health Science abroad      </h1>
        <p>
        If you are fascinated by science and interested in pursuing a career in the healthcare sector, a degree in allied health science may be the right fit for you. Allied health professions focus primarily on prevention and recovery methods for patients.




      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>$59.7 billion estimated worth of the allied health industry








          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average annual salary of allied health professionals

          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>Average annual salary of top sports scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>11,400 job openings projected each year
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

export default AlliedHealthScience;