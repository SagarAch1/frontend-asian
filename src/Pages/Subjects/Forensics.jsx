import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Forensics = () => {
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
      title: "Forensic Science",
      content:
        "Forensic science is an essential field that bridges law enforcement with scientific inquiry, particularly within criminal investigations. It meticulously analyzes crime scenes and uncovers crucial evidence, such as in cases of homicide or assault. In civil matters, forensic experts help determine guilt or innocence in cases like pollution. Unlike traditional science fields, forensic science directly supports legal proceedings. The key areas within forensic science include:",
      subtitle1: "Forensic Anthropology",
      content1: "Analyzing skeletal remains for investigative purposes.",
      subtitle2: "Digital and Computer Forensics",
      content2: "Focused on retrieving digital evidence, like traces in data systems.",
      subtitle3: "Forensic Pathology",
      content3: "Examining bodies to determine causes of death using biology and chemistry.",
      subtitle4: "Toxicology",
      content4: "Studying trace elements in the body, such as substances found after a crime.",
      subtitle5: "Forensic Engineering",
      content5: "Investigating product or structural failures in legal contexts.",
    },
    {
      title: "Is Forensic Science right for me?",
      content:
        "To pursue a career in forensic science, consider if you have an analytical mindset, an interest in solving complex problems, and the ability to interpret data and evidence. While a natural aptitude for science and mathematics is helpful, much of the knowledge can be acquired during training. Critical thinking, problem-solving, and communication skills are key to excelling in this field. If you enjoy working through puzzles and uncovering hidden truths, forensic science might be the ideal career for you.",
    },
    {
      title: "Forensic Science study options and costs",
      content1:
        "When considering a forensic science program, make sure to evaluate factors such as the duration, curriculum, internship opportunities, and accreditation of the institution. These considerations will help you select the best fit for your professional goals and interests.",
      content2:
        "Tuition fees for forensic science programs typically range between $10,000 and $20,000 annually in the U.S. While not a strict requirement, a strong academic record is often necessary to enter a program. Alternatively, a Forensic Science Technician can pursue a shorter, more affordable training program costing between $8,000 and $15,000.",
    },
    {
      title: "Future outlook",
      content:
        "Forensic science continues to grow as a field due to the increasing need for skilled professionals to solve complex legal and criminal investigations. In the U.S., the demand for forensic experts is expected to rise by over 14%. As crime evolves, particularly with the rise of cybercrime, forensic science adapts to address emerging challenges. The demand for professionals is particularly high in urban areas in countries like the U.S., India, and China, where physical and digital crimes are more prevalent.",
    },
    {
      title: "Career pathways for Forensic Science graduates",
      subtitle1: "Forensic Technicians",
      content1:
        "Forensic technicians work with law enforcement agencies to conduct lab tests and field analysis of evidence, such as fingerprints, blood, and toxic substances, to help solve crimes. Their work can range from determining the time of death to identifying traces of drugs in a suspect's system.",
      subtitle2: "Digital Forensic Investigator / Information Security Analyst",
      content2:
        "Specializing in the digital realm, these professionals test and evaluate cybersecurity systems to identify vulnerabilities and trace cybercrimes. They work to uncover digital footprints left behind during security breaches or cyberattacks.",
      subtitle3: "Researcher",
      content3:
        "Researchers in forensic science focus on advancing knowledge in their specific area of interest. Their work may involve theoretical or practical research in labs to develop new methodologies and contribute to the academic and practical aspects of forensic science.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Forensic Science Abroad</h1>
        <p>
        Forensic science is perfect for those with a curious mind and strong problem-solving skills,  
        </p>
        <p> especially if you enjoy uncovering hidden truths and analyzing details.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>16,640</strong> forensic scientists were employed in the US in 2020.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$60,590</strong> is the median salary for forensic technicians.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>14%</strong> growth is projected for forensic science careers in the US.
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

export default Forensics;
