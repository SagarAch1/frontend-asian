import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const InformationTechnology = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close for FAQ items
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/systemen.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "white",
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
    color: "#4CAF50", // Makes the icon attractive with a green color
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
      title: "What is Information Technology?",
      content:
        "Information Technology (IT) is integral to modern life, influencing how we work, communicate, and live. IT professionals who are skilled and passionate about technology can thrive in a fast-paced, ever-evolving field. If you're eager to make an impact in the digital world, studying IT is a key starting point.",
    },
    {
      title: "Is Information Technology the right fit for me?",
      content1:
        "IT is perfect for those who enjoy solving problems and tackling complex challenges. It requires strong attention to detail and organizational skills. Furthermore, IT professionals often work in collaborative environments, so good communication skills and a positive attitude are essential.",
      content2:
        "Many IT professionals work in office settings, but remote opportunities or self-employment are also available. While a typical 9-to-5 schedule is common, certain areas such as cybersecurity or database management might require after-hours work for urgent matters. A strong work ethic is crucial in these situations.",
    },
    {
      title: "What are the study options and costs for Information Technology?",
      content1:
        "To pursue a career in IT, most professionals have at least a diploma, though a Bachelor's degree is now the industry standard. In Australia, a Bachelor's in IT can cost around AUD$30,000 per year, while an Associate's degree in the US costs approximately USD$18,000. Given the high earning potential in IT, the investment in education often pays off.",
      content2:
        "Additionally, many IT roles require specific certifications, such as Google Professional Cloud Architect or CompTIA, depending on your career goals.",
    },
    {
      title: "What is the future outlook for Information Technology?",
      content:
        "IT careers are projected to grow by 13% by 2030, which is faster than the average for all occupations. IT professionals are in high demand not only within the tech industry but also in sectors like education, healthcare, and government. As technology evolves, the need for skilled IT professionals will continue to expand, particularly as new cybersecurity threats and performance standards emerge.",
    },
    {
      title: "Career paths for Information Technology graduates",
      subtitle1: "Cybersecurity Specialist",
      content1:
        "Cybersecurity specialists protect computer systems and networks from threats. They develop and test security measures and respond to cyber incidents. With an expected 31% job growth over the next decade, this career is perfect for those passionate about technology and security.",
      subtitle2: "Data Analyst",
      content2:
        "Data analysts interpret data to help organizations make data-driven decisions. They often come from backgrounds in computer science, statistics, or economics and need to be strong communicators to present their findings effectively.",
      subtitle3: "IT Manager",
      content3:
        "IT Managers supervise IT teams, ensure networks and systems meet requirements, and oversee the security and maintenance of company data. This senior role includes responsibilities like software updates and staff training.",
      subtitle4: "Software Developer",
      content4:
        "Software developers write programs, using their expertise in coding languages to create software solutions. They are responsible for both developing new software and maintaining existing systems.",
      subtitle5: "Web Developer",
      content5:
        "Web developers design and build websites, utilizing both coding and design skills. They ensure websites are functional and user-friendly, regularly updating them to adhere to best practices.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={sectionStyle}>
        <h1>Study Information Technology Abroad</h1>
        <p>
          The Information Technology (IT) field includes a wide range of
          careers, all with exciting growth prospects.
        </p>
        <p>
          As digital technologies become more integral to everyday life, the
          demand for skilled IT professionals has skyrocketed.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Median salary for IT professionals: USD$91,250
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> IT job growth projected at 13% from 2020 to 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 245,500 new IT jobs created in the US in 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> US tech industry contributes USD$2 trillion to the
            economy
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleFaq(index)}>
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

export default InformationTechnology;
