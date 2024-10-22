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
        "Forensic science is a field that majorly applies to both civil law and criminal law, tilting towards the latter. It is used to figure out how a crime scene has gone about, nitpicking every single detail, and gathering evidence from it. Cases such as sexual abuse and murder depend critically on forensic scientists to piece together all elements for the investigators to bring about justice. On the civil law side, forensic scientists are helpful in determining whether a person charged with a civil offense such as willingly polluting the air or a water source is guilty of the crime or not. The major difference between the traditional sciences and forensic science is that the practitioners of the latter apply it in legal matters. The following are the major fields in forensics:",
        subtitle1: "Forensic anthropology",
        content1:"relating to skeletal remains for evidence and data collection and analytics.",
        subtitle2: "Digital and Computer forensics",
        content2:"as the name suggests, it deals with electronics and data in digital form, particularly concerned with finding a “digital fingerprint”.",
        subtitle3: "Forensic pathology ",
        content3:"as always, the victim can tell everything even after they have passed. The human body can always be studied via laboratory analysis implementing mainly chemistry and biology.",
        subtitle4: "Toxicology ",
        content4:" this particular field deals with all types of traces elements in the human body and understands how they impact its functioning. For example, the ‘date-rape drug’ can be found in the victim’s body after the crime has occurred to establish evidence for the case.",
        subtitle5: "Forensic engineering ",
        content5:" this field deals with the investigation of failures as they relate to law and legal matters. They are meant to find out why a certain structure, product, etc. failed to function and what might be the cause behind it, leading to the entity on which the blame falls.",
    },
    {
      title: "Is Forensic Science right for me?",
      content:
        "If you are looking for a career in forensic sciences, you need to ask yourself if you have an aptitude for this field. The things you need to be good at are data collection, analysis of data and evidence, a grip on mathematics and statistics, along with natural sciences, and mainly a problem-solving mind. However, this natural ability in all is not a must, aside from a problem-solving, analytical mind, almost all else can be learned along the way. The main focus and success factor is the motivation for choosing this field. If solving complex issues, finding a needle in the haystack, connecting the dots, and extracting information from data where others fail to do so is your thing, this field can be very well suited for your abilities. In short, thinking, solving, and writing are your friends.",
    },
    {
      title: "Forensic Science study options and costs",
      content1:
        "When opting for a forensic science program, always look at several factors such as the length of the programs, course requirements, concentration options, requirement and provision of internships, whether the coursework is in-line with your professional choices and interests, and is the school you are applying to accredited. Researching these things will help you make the best decision of where you want to go and how you want to go about it if you decide to pursue a career in this field.",
      content2:"The average tuition fee per year in a forensic science program is between $10,000-$20,000 in the U.S. While not mandatory, a high GPA in this is usually required to enroll in a forensic science program. However, if someone already has a bachelor’s degree or doesn’t want to enroll in a 4-year program, they can also opt to become a Forensic Science Technician. In the U.S., the cost to become a Forensic Science Technician would be between $8000-$15,000.",
    },
    {
      title: "Future outlook",
      content:
        "Since the advent of forensics, it has been a growing field as there is always a need for good minds to solve complex problems. The demand for forensic scientists is predicted to increase by over 14% in the United States alone. With growing populations and a move towards the digital realm in the 21st century, the future of forensics is expanding from helping in investigations of homicides, data leaks, financial misappropriations, and cybersecurity among others. The need in highly populated metropolitans of the U.S., India, and China are more and more in need of skilled forensic scientists due to high physical and digital crime rates. The expected demand for forensic experts has been predicted to grow for the decade (the 2020s)",
    },
    {
      title: "Career pathways for Forensic Science graduates",
      subtitle1: "Forensic technicians:",
      content1:
        "You will be working with law enforcement agencies providing expertise in criminal cases by performing lab and field tests to analyze data and evidence collected to bring more light as to what may have happened at the crime scene. Finding fingerprints at the crime scene, determining the time of death of a murder victim, or finding out if a person has been a victim of drug abuse would be part of the job. From working with blood to dead bodies can be part of the daily work along with dealing with the substance of critical nature such as toxins.",
      subtitle2: "Digital forensic investigator / information security analyst:",
      content2:
        "Your job will be in the digital world of the computers. You will have to constantly test the cybersecurity systems of your employers and find out where the weak link in the chain exists and how it can be improved. As an investigator, you will be working to find out how a security breach has occurred, and where your job comes to finding that digital fingerprint that someone has left somewhere in the system.",
      subtitle3: "Researcher:",
      content3:
        "As a researcher, you can become an expert on the theoretical/practical side of the subject depending on what you’re interested in. This would see you doing lab work the majority of the time to understand your specific field in-depth and be approached by those that are in need of your expert knowledge.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Forensics Science abroad</h1>
        <p>
          Forensic science is best suited for people with an inquisitive mind.
          If you enjoy problem-solving and have a knack for looking into the
          finer details of things, studying forensics may be good career choice
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: 16,640 forensic scientists in the US in 2020
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $60,590: median salary of a forensics technician
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 14% growth in demand for forensics experts in US alone
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

export default Forensics;
