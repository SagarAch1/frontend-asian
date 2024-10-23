import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Surgery = () => {
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
      title: "About Surgery",
      content1:
        "Surgery deals with medical procedures which are performed to structurally alter the human body by incision. It is the diagnostic or therapeutic treatment of medical conditions by any instruments, causing localised alteration or transportation of live human tissues, which include lasers, ultrasound, ionising radiation, scalpels, probes, and needles. Injection of diagnostic or therapeutic substances into body cavities, internal organs, joints, sensory organs, and the central nervous system is also considered to be surgery.",
        content2:"There are four major categories of surgery: (1) wound treatment, (2) extirpative surgery, (3) reconstructive surgery, and (4) transplantation surgery. Almost all types of surgeries require administering anaesthesia to eliminate any pain that the patient might feel during the surgical procedure.",
        content3:"As surgery is at the forefront of healthcare innovation, it is a challenging, intellectually stimulating and rewarding career. Performing an operation and seeing a patient's life improve almost immediately is incredibly satisfying and a great privilege for many surgeons. A surgeon’s role is not confined to the operating theatre though. Surgeons work in a number of professional settings including clinics, hospitals, healthcare facilities, research and educational institutions.",
        
      
    },
    {
      title: "Is Studying Surgery right for me?",
      content1:
        "Surgeons require extreme precision, dexterity and a passion to serve humanity. They perform complex, life-saving procedures requiring attention to detail. They must be able to maintain situational awareness and lead their team in the theatre, which requires leadership skills and teamwork. They ought to have empathy and good communication skills.",
        content2:"Students who excel in the field of Surgery are driven by intellectual curiosity which allows them to acquire knowledge and remain abreast with latest trends in the field. In addition, surgeons must be empathetic as they must counsel and advise the families on treatment possibilities. If you believe that you possess the aforementioned qualities, then Surgery might be well suited for you.",
    
    },
    {
      title: "Study options and costs",
      content1:
        "Becoming a surgeon requires extensive education. The first step is to earn a bachelor’s degree with the required prerequisite courses to apply to a medical college for postgraduation study. These courses are usually science subjects such as Chemistry and Biology. The undergraduate studies span 4 years and cost around $9,410 to $23,890 per year in the US. The curriculum includes clinical rotations in addition to traditional coursework and time spent in laboratories.",
        content2:"After completing medical school and any pre-requisite certifications, students of Surgery undergo 3 to 7 years of training in residency. If a surgeon desire to specialise further, they apply for fellowships, which are challenging and hold excellent prospects. The annual salary during residency ranges from $55,000 to $60,000.",

    },
    {
      title: "Future outlook",
      content:
        "Surgery is a life-saving profession which will stay; however, the procedures and techniques will evolve. According to the U.S. Bureau of Labor Statistics, on average 22,700 openings for surgeons are projected each year, in this decade. This shows that surgeons are likely to have good prospects in future.",
      
    },
    {
        title: 'Career Pathways for Surgery graduates',
        subtitle1: 'General surgeon',
        content1: 'All surgeons begin training as general surgeons before specialising. They perform procedures to treat organs and tissues such as hernias, appendicitis, gallbladder, stomach and intestines. General surgeons also have the knowledge to deal with critical care, oncology and trauma. The average annual salary of a general surgeon is $374,310.',
        subtitle2: 'Orthopaedic Surgeon',
        content2: 'Diseases and injuries to the musculoskeletal system are treated by an orthopaedic surgeon. The job involves diagnosis and treatment through non-surgical and surgical means. The average annual salary of an orthopaedic surgeon is $463,731.',
        subtitle3: 'Neurosurgeon',
        content3: 'They examine and diagnose disorders or injuries to the nervous system, and perform surgeries on the brain, spinal cord, and peripheral nerves to treat these conditions. The average annual salary of a neurosurgeon is $580,362.',
        subtitle4: 'Plastic Surgeons',
        content4: 'They perform skin grafts for burn patients and those involved in accidents. However, a commonly known facet of their work is performing cosmetic surgical procedures to enhance ones appearance. The average annual salary of a plastic surgeon is $464,731.',
        subtitle5: 'Cardiothoracic Surgeons',
        content5: 'They specialise in the diagnosis, treatment and surgery of patients who have medical issues with their hearts and lungs. Their work is very stressful since they often have to treat patients who are in critical condition. The average annual salary of a cardiothoracic surgeon is $449,624.',
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Surgery abroad       </h1>
        <p>
        Surgery is defined as the branch of medical practice that treats injuries, diseases, and deformities through the physical removal, repair, or readjustment of organs and tissues, often involving cutting into the body.





      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $208,000: average annual salary of surgeons in 2021



          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average number of jobs for surgeons in 2020
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 3% employment growth of surgeons this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Projected job openings for surgeons every year
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

export default Surgery;