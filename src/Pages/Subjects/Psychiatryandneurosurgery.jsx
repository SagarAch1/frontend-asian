import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Psychiatryandneurosurgery = () => {
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
      title: "About Psychiatry and Neurosurgery",
      content1:
        "Psychiatry is the medical science that focuses on the diagnosis, prevention and treatment of mental disorders. These disorders consist of various maladaptations related to mood, behaviour, cognition, attention and perception. Psychiatrists treat a wide variety of mental health disorders and may choose to specialise in a specific sub-field. Psychiatrists work in several settings including hospitals, mental health clinics, outpatient centres, non-profit organisations and private practices.",

      content2:"Neurosurgery is the medical speciality concerned with the diagnosis and treatment of injuries and diseases, or disorders, of the brain, spinal cord and spinal column, and peripheral nerves within all parts of the body. Neurosurgeons work at hospitals and surgery centres to provide surgical care to neurological conditions. They are often also involved in research related to brain trauma, neurological disorders and surgical techniques used to treat these disorders.",
      content3:"A collaboration of the above-discussed disciplines is known as Psychosurgery, which is not a well-known type of surgery as it is performed in very rare cases when all other treatment options have failed. Psychosurgery is the treatment of psychiatric disorders through Cerebral Neurosurgery in which a small piece of brain that seems to be causing the symptoms of the psychiatric disorder is destroyed or removed. It is usually used to treat severe depression. Psychosurgery is also known as Neurosurgery for Mental Disorders.",
    },
    {
      title: "Is Psychiatry or Neurosurgery right for me?",
      content1:
        "If you are a determined individual with empathy, enthusiasm and an aptitude to serve others, then Psychiatry and Neurosurgery is a good career choice for you. Neurosurgeons perform detail-oriented procedures requiring vasts amount of experience and dedication. Neurosurgeons must be able to perform multiple tasks at once such as keeping an eye on a patient’s vitals as well as performing the surgery. They must have a sense of teamwork and collaboration as a successful surgery needs a multi-disciplinary team.",
        content2:"Psychiatrists are driven by their thirst for knowledge and curiosity which aids them research and when they face an unusual mental health complexity. They must have empathy and good communication skills to discuss the patient’s case. If you want to experience and learn something new every day, then Psychiatry and Neurosurgery could be the right career choice for you.",
    },
    {
      title: "Psychiatry and Neurosurgery study options and costs",
      content:
        "Becoming a psychiatrist or a neurosurgeon require extensive education. The first step is to earn a bachelor’s degree with prerequisite courses. The undergraduate program usually takes 4 years to complete. If you want to study neurosurgery, you need to apply to a medical college for post-graduation study. Studies in medical school span 4 years and cost around $250,222 to $330,180 in the US. After medical school, you could apply for a residency in Neurosurgery or Psychiatry.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, the projected employment growth of psychiatrists is 12.5% in this decade whereas the estimated employment ofneurosurgeons in the same period is14.4%.",
    },
    {
      title: "Career Pathways for Psychiatry and Neurosurgery graduates",
      subtitle1: "Neurosurgeon",
      content1:
        "A neurosurgeon is a medical doctor who performs surgeries on the brain, spinal cord and nerves as a treatment option for nervous system disorders. As a neurosurgeon, you will be responsible for treating and managing conditions that affect the flow of blood to the brain. Additionally, you may be involved in a person’s rehabilitation after they have received treatment. The average annual salary of a neurosurgeon is $580,362.",
      subtitle2: "Neurologist",
      content2:
        "A neurologist is responsible for examining and treating patients who experience disorders affecting nerves, spinal cord and brain. As a neurologist, you will conduct physical examinations, collect spinal fluid and other samples, and run neurological tests to identify problems. The average annual salary of a neurologist is $267,660.",
      subtitle3: "Psychosurgeons",
      content3:
        "A psychosurgeon performs functional neurosurgery for the treatment of psychiatric disorders. You will be responsible for destroying tiny bits of tissue by heat, in the brain of the patient to eliminate the symptoms of his psychiatric disorder.",
      subtitle4: "Child Psychiatry",
      content4:"As a child psychiatrist, you will be responsible for the study and treatment of mental, emotional and behavioural health disorders in children. You may work in schools, courts, hospitals, non-profit organisations and private practices to provide treatment to children. The average annual salary of a child psychiatrist is $270,867.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Psychiatry and Neurosurgery abroad</h1>
        <p>
          Psychiatrists and neurosurgeons both deal with brain disorders. The
          former diagnoses and treats a maladaptation in mood behaviour and
          cognition while the latter diagnoses and treats central, peripheral
          and autonomic nervous system disorders.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 14.4% projected growth for neurosurgeons in this
            decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Projected growth for psychiatrists in this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $637,201: average annual salary of a neurosurgeon
            in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average annual salary of a psychiatrist in the US
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

export default Psychiatryandneurosurgery;
