import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Technology = () => {
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
      title: "About Technology",
      content1:
        "This field of study is designed to help students foster technical and professional competence in the field of technology. You are groomed for technology-leadership roles by undergoing a blend of technology, leadership, communication and research courses.",
      content2:
        "There is massive global demand for technologists who can lead in culturally diverse teams. Studying Technology formally can help you identify gaps in your knowledge and equip you with strategies needed to excel in the contemporary technological world.",
    },
    {
      title: "Is Technology right for me? ",
      content1:
        "A career in technology is best suited for a problem-solving mind. If you are detail-oriented and like a structured work environment, then you have the ideal mindset to flourish in the technology industry.",
      content2:
        "Students who excelled in algebra, pre-calculus, geometry and physics during their high school have a solid foundation for technology studies. However, since the degree is relatively skill-focused, transitioning from other fields of study to technology will not be too troublesome. The only key ingredient to succeed in this field is a profound belief in the transformative capability of technology to make our lives and societies better.",
    },
    {
      title: "Study options and costs",
      content1:
        "There are an array of options when it comes to studying Technology. You can begin with a two-year associate degree which is sufficient for some entry-level jobs in the industry. Many institutes even offer the chance to progress an associate degree into a four-year bachelor’s degree. Note, several institutes provide apprenticeship opportunities, so be sure to check for this before choosing what college you apply to for your degree.",
      content2:
        "A bachelor’s degree in Technology is offered as a BTech or BSc Tech or BEng. Technology degree. The key difference between these programmes is that a BSc program focuses mainly on the theoretical understanding of technology whereas BEng or BTech degrees emphasises more on the technical and applied aspect of technology.",
      content3:
        "The next stage in Technology education after a bachelor’s degree is a master’s degree. This degree can help you grab leadership and managerial positions in the tech industry.",
      content4:
        "International students can expect their bachelor’s degree to cost around $11,000-30,000 in annual tuition. Whereas a master’s degree in Technology will cost on average about $38,000 annually. Additional charges apply for apprenticeships, books and other resource material.",
    },
    {
      title: "Future outlook",
      content1:
        "Worldwide there is a massive industry demand for cutting-edge technologists. If you have a robust understanding of technological theories and technical skills paired with critical thinking abilities, then you will be highly prized in the job market.",
      content2:
        "The conglomeration of tech giants has allowed them to rapidly expand and hire people across the globe. This has increased global demand for skilled labour in the field of cloud computing, big data and technology management. The employment opportunities in the technology industry according to the U.S. Bureau of Labor Statistics are expected to expand by 13% this decade! This equates to a whopping 667,000 new jobs being created.",
    },
    {
      title: "Career pathways for Technology graduates",
      subtitle1: "Network and Systems Administrators",
      content1:
        "Network and systems administrators work with physical computer networks and are responsible for the day-to-day operation and maintenance of these networks. You’ll need to inspect these networks for problems and quickly address them. You are required to be scrupulous and display an in-depth understanding of computer networks. The average annual salary of a network and computer systems administrator is $84,810.",
      subtitle2: "Information Security Analysts",
      content2:
        "Your responsibilities will be to plan and execute security measures to safeguard the integrity of your organisation's computer networks. This could mean installing protective software and preventing cyberattacks. The average annual salary for an information security analyst is $103,590.",
      subtitle3: "Computer Support Specialists",
      content3:
        "Computer support specialists are an important ancillary role in large companies that are computer related. As a computer support specialist, you will help computer users resolve computer-related problems and proffer helpful advice. You’ll be analysing and troubleshooting technology-related issues for employees or may help external customers of an organisation. The average annual salary for a computer support specialist is $65,450. ",
      subtitle4: "Database Administrators",
      content4:
        "Database administrators work in sectors with large and sensitive data like insurance and finance companies. They manage the systems in which the data is stored. As a database administrator, you’ll be responsible for capacity planning, configuration and troubleshooting of these databases. The average annual salary of a database administrator is $98,860.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Technology abroad</h1>
        <p>
          Looking for a pragmatic and skill-focused degree? For all you
          tinkerers, studying Technology could be your gateway to a fulfilling
          career! Technology education emphasizes on practical learning and
          application and opens you up to an array of opportunities.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: 13% expected increase in employment opportunities
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $91,250: average annual salary for tech
            occupations
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 667,600: new tech jobs projected in the US this
            decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>72% Tech workers feel appreciated on the job
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

export default Technology;
