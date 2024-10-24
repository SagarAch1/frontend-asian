import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Policestudies = () => {
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
      title: "About Police Studies",
      content1:
        "The subject is specially designed to prepare students for a career in law enforcement. It will provide you a better understanding of law, management, crime analysis and investigation techniques. Police studies encompass a wide range of subjects including criminology, forensic sciences, community police, criminal justice. This subject will refine your critical thinking and improve your ability to analyse complex situations and make quick decisions.",
      content2:
        "No matter which police or criminal justice department you chose to work in, Police Studies will provide you the knowledge and expertise for policing solutions in the real world. The subject will also provide you practical experience as most of the universities collaborate with police organisations to provide students internship opportunities.",
    },
    {
      title: "Is Police Studies right for me?",
      content1:
        "If you are someone who aspires to make a change in the world and has critical thinking than this subject is for you. Police Studies requires discipline, diligence and physical fitness as the subject includes practical training with professionals.",
      content2:
        "Some courses will require extra critical research and analytical thinking to understand legal theories and case studies. Practical training will include collaborations with field professionals and will provide you basic field experience.",
      content3:"If you think you are capable of putting in the hard work and wish to serve the people than this field of study is definitely for you.",
    },
    {
      title: "Police Studies study options and costs",
      content1:
        "In United States, 529 colleges are offering Police Studies programmes. You can do a bachelor’s, master’s as well as a PhD degree in Police Studies in the US. Most of doctorate holders are either senior ranking police executives or from the academia.",
      content2:
        "During your degree you can expect to study course modules such as community policing, forensic science, human kinetics for policing, policing and society, youth crime, investigation practices, police governance, organised crime and cybercrime.",
      content3:
        "On average a bachelor’s of Police Studies costs $9,636 for in-state students and $23,568 for out-of-state students in the US. In UK, an average annual tuition fee of a bachelor’s in Police Studies is between £9250- £15576 per year.",
    },
    {
      title: "Future outlook",
      content1:
        "According to the U.S. Bureau of Labor Statistics, a whopping 67,100 job openings are expected each year over the decade for police and detectives in the US alone! The lion’s share of employment opportunities are from federal and state governments.",
      content2:
        "With the changing socio-political situations globally and an increase in crime rate, both government and private sector is looking to recruit more and more people that are professionally trained in policing and can help take effective decisions in emergency situations. The demand for more trained police professionals to maintain public safety is expected to rise even further in the future.",
    },
    {
      title: "Career Pathways for Police Studies graduates",
      subtitle1: "Police officer",
      content1:
        "A police officer is responsible to prevent crime in the society. They patrol and respond to emergency situations in aid of the general public. Police officers also collect evidence and file reports of their cases. They can also arrest and detain people if required.",
      subtitle2: "Parole Officer",
      content2:
        "A parole officer or a probation officer is responsible to monitor and supervise a convicted felon when released on a parole. They facilitate a parolee’s re-entry into society. Parole officers are expected to have professional expertise and a diverse approach so they can communicate well with convicted felons.",
      subtitle3: "Emergency Relief Officer",
      content3:
        "Emergency response officers are the first ones to response in an emergency situation. They work with different organisations and help them deal with emergency situations. They respond to local emergency calls and assess the situation.",
      subtitle4: "Detective",
      content4:"Detectives are investigators that work for law enforcement agencies. They conduct investigations to solve crimes cases by collecting evidence, recording witness statements and running background checks.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Police Studies abroad</h1>
        <p>
          Police Studies give you a thorough understanding of police
          investigation, criminal law, criminal justice and law enforcement.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $113,860: average annual salary of top policemen and detectives


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 7% projected growth in employment opportunities


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 67,100 job openings projected for police and detectives each year


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $67,290: average annual salary of police and detectives


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

export default Policestudies;
