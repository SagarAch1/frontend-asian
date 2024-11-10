import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Surgery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
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
      title: "About Surgery",
      content1:
        "Surgery refers to medical procedures aimed at altering the human body through incisions. It involves the diagnostic or therapeutic treatment of various conditions using tools such as scalpels, lasers, ultrasound, and even ionizing radiation. Surgery can also include injecting substances into body cavities or organs to treat specific conditions.",
      content2:
        "Surgical procedures fall into four main categories: (1) wound treatment, (2) extirpative surgery, (3) reconstructive surgery, and (4) transplantation surgery. Almost every surgery requires anesthesia to alleviate pain during the procedure.",
      content3:
        "Surgery is a field that is constantly evolving, offering an intellectually stimulating and rewarding career. The satisfaction of performing a life-changing surgery is immense, and surgeons work in a variety of settings, including hospitals, clinics, research centers, and educational institutions.",
    },
    {
      title: "Is Studying Surgery Right for Me?",
      content1:
        "Becoming a surgeon requires exceptional precision, dexterity, and a deep passion for helping people. Surgeons perform intricate, life-saving procedures and need to pay attention to every detail. They must remain aware of their surroundings and work in harmony with their teams. Empathy, communication skills, and leadership are also critical qualities for a surgeon.",
      content2:
        "If you're driven by intellectual curiosity, enjoy learning, and want to make a difference, surgery might be an excellent fit for you. Additionally, surgeons must be empathetic, as they frequently interact with families and counsel them on various treatment options.",
    },
    {
      title: "Study Options and Costs",
      content1:
        "To become a surgeon, one must first obtain a bachelor's degree in subjects like Biology or Chemistry, which typically takes 4 years and costs between $9,410 and $23,890 per year in the US. The undergraduate program includes clinical rotations along with standard coursework and laboratory work.",
      content2:
        "After completing a medical degree, aspiring surgeons undergo 3 to 7 years of residency training. Residency provides hands-on experience in surgical practice, and during this time, the annual salary ranges from $55,000 to $60,000.",
    },
    {
      title: "Future Outlook",
      content:
        "Surgery will remain a vital profession in healthcare, and while techniques will continue to evolve, the need for skilled surgeons is projected to grow. The U.S. Bureau of Labor Statistics estimates that there will be about 22,700 openings for surgeons annually through this decade, ensuring strong prospects for future surgeons.",
    },
    {
      title: "Career Pathways for Surgery Graduates",
      subtitle1: "General Surgeon",
      content1:
        "General surgeons are trained to handle a wide variety of surgeries and treat various organs, including the stomach, intestines, and gallbladder. They also provide care in oncology, trauma, and critical care. The average annual salary for general surgeons is $374,310.",
      subtitle2: "Orthopaedic Surgeon",
      content2:
        "Orthopedic surgeons specialize in treating the musculoskeletal system, including bones, joints, and ligaments. They diagnose and treat conditions through surgical and non-surgical methods. The average salary for an orthopedic surgeon is $463,731.",
      subtitle3: "Neurosurgeon",
      content3:
        "Neurosurgeons focus on disorders related to the nervous system, including the brain and spinal cord. Their surgeries are critical and high-stakes, treating conditions such as tumors, spinal injuries, and nerve disorders. Neurosurgeons earn an average salary of $580,362 annually.",
      subtitle4: "Plastic Surgeon",
      content4:
        "Plastic surgeons perform reconstructive surgeries, such as skin grafts for burn victims, as well as cosmetic surgeries to enhance appearance. Their average annual salary is $464,731.",
      subtitle5: "Cardiothoracic Surgeon",
      content5:
        "Cardiothoracic surgeons specialize in heart and lung surgeries, treating patients with severe cardiac and pulmonary issues. This demanding role comes with a salary of $449,624 per year.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Surgery Abroad</h1>
        <p>
          Surgery is the branch of medicine that treats injuries, diseases, and deformities through 
        </p>
        <p>the physical removal, repair, or adjustment of organs or tissues, often involving incisions.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$208,000</strong>: average annual salary of surgeons in 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Average number of jobs for surgeons in 2020</strong>
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>3% growth in employment</strong> for surgeons this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Annual job openings</strong> for surgeons
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
                {/* Check for subtitles and content */}
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

export default Surgery;
