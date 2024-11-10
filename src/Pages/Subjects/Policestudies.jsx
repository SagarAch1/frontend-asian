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
    color: "#4CAF50", // Attractive color
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
        "This field is specifically crafted to prepare students for careers in law enforcement. It provides a deeper understanding of law, crime management, investigative techniques, and analysis. Police Studies covers a broad range of topics, including criminology, forensic sciences, community policing, and criminal justice. Students will enhance their ability to think critically and analyze complex situations, equipping them with the skills to make informed decisions.",
      content2:
        "Regardless of the police or criminal justice department you choose to work in, this program will provide you with the necessary knowledge and expertise for real-world policing. Additionally, the program includes practical experiences, as many universities partner with law enforcement organizations to offer internships.",
    },
    {
      title: "Is Police Studies the right choice for me?",
      content1:
        "If you're motivated by a desire to create positive change and have strong critical thinking skills, this program is a great fit. Police Studies demands discipline, dedication, and physical fitness, as it involves hands-on training with professionals.",
      content2:
        "Some courses require advanced research and analytical thinking to understand legal theories and case studies. Field training opportunities are offered through collaborations with professionals, providing you with essential real-world experience.",
      content3:
        "If you're prepared to work hard and have a passion for serving others, this field is a perfect match.",
    },
    {
      title: "Police Studies programs and costs",
      content1:
        "In the United States, 529 colleges offer Police Studies programs. You can pursue a bachelor's, master's, or even a PhD in this field. Many doctorate holders are senior police officials or academics.",
      content2:
        "Throughout the degree, you'll study subjects such as community policing, forensic science, human kinetics for policing, policing in society, youth crime, investigative practices, police governance, organized crime, and cybercrime.",
      content3:
        "On average, a bachelor's degree in Police Studies costs $9,636 for in-state students and $23,568 for out-of-state students in the U.S. In the UK, tuition fees for a bachelor's degree in Police Studies range from £9,250 to £15,576 annually.",
    },
    {
      title: "Future Outlook",
      content1:
        "According to the U.S. Bureau of Labor Statistics, approximately 67,100 job openings are expected each year over the next decade for police officers and detectives in the U.S. The majority of these job opportunities will be with federal and state governments.",
      content2:
        "Given the changing global socio-political climate and the rising crime rates, both public and private sectors are seeking more professionals trained in law enforcement to make effective decisions in emergencies. The demand for skilled police personnel is expected to grow significantly in the coming years.",
    },
    {
      title: "Career Paths for Police Studies graduates",
      subtitle1: "Police Officer",
      content1:
        "Police officers are responsible for preventing crime in communities. They patrol neighborhoods and respond to emergencies. Officers also gather evidence and file reports related to criminal cases. They have the authority to arrest and detain individuals when necessary.",
      subtitle2: "Parole Officer",
      content2:
        "Parole officers supervise convicted felons who have been released on parole, helping them reintegrate into society. These professionals need a diverse set of skills to communicate effectively with parolees and guide them through their re-entry.",
      subtitle3: "Emergency Relief Officer",
      content3:
        "Emergency relief officers are the first responders during emergencies. They collaborate with various organizations to manage crisis situations and provide immediate assistance to those in need. These officers assess emergencies and take appropriate action.",
      subtitle4: "Detective",
      content4:
        "Detectives are law enforcement agents who investigate crimes by gathering evidence, interviewing witnesses, and conducting background checks to solve criminal cases. Their investigative work plays a crucial role in solving cases.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Police Studies abroad</h1>
        <p>
          Police Studies provide a comprehensive understanding of police work, 
        </p>
        <p>criminal law, criminal justice, and law enforcement procedures.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $113,860: average annual salary for top-ranking police officers and detectives
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 7% expected growth in employment opportunities for police officers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 67,100 projected job openings annually for police officers and detectives
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $67,290: average annual salary for police officers and detectives
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
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
