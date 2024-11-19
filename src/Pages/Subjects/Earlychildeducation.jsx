import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const EarlyChildhoodEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/speech.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "black",
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
      title: "What is Early Childhood Education?",
      content1:
        "Degrees in Early Childhood Education prepare students to work with children aged two to eight. The courses explore the key developmental stages that children undergo and how to guide them in developing cognitive, emotional, and physical skills.",
      content2:
        "Programs in Early Childhood Education focus on curriculum theories, child development, health, diversity, inclusion, and the teaching of subjects like literacy, math, science, and the arts.",
    },
    {
      title: "Is Early Childhood Education a good fit for me?",
      content1:
        "If you believe in the power of play-based learning, this field will teach you how to use hands-on activities to help young children learn. Early childhood educators develop lessons based around play, which is the primary way young children absorb new concepts. Activities like games, music, artwork, videos, literature, and increasingly, technology, are key tools used by teachers in this field.",
      content2:
        "You'll discover creative ways to support children's intellectual, emotional, and physical development. If this sounds appealing, this field could be the right choice for you.",
    },
    {
      title: "What are the study options and costs?",
      content1:
        "There are four main types of degrees in Early Childhood Education: a 2-year associate’s degree, a 4-year bachelor’s degree, a 2-year master’s degree, and a doctoral degree, which typically takes 3 to 6 years to complete.",
      content2:
        "An associate’s degree prepares you for entry-level roles in Early Childhood Education. It’s the most affordable option and can often serve as the first two years of a bachelor’s program. This degree qualifies you for teaching support roles but may not be sufficient for career advancement in schools or organizations.",
      content3:
        "A bachelor’s degree in Early Childhood Education typically costs between $29,000-$65,000 per year, depending on the institution and program duration.",
      content4:
        "If you’re aiming for more advanced positions or interested in research, a master’s or PhD is recommended. A master’s degree will allow you to start your career at a higher level and advance more quickly. Online master's programs generally cost between $11,000 and $24,000. You may specialize in areas such as curriculum design, educational leadership, or technology in learning.",
    },
    {
      title: "What is the future job outlook?",
      content1:
        "The U.S. Bureau of Labor Statistics projects that over the next decade, kindergarten and early primary school teachers will see an addition of 86,000 new jobs, while preschool teachers will gain over 50,000 new positions.",
      content2:
        "This corresponds to a job growth rate of 7% to 10%, which is on par with the national average for all occupations. With plenty of job openings, qualified candidates can expect a fulfilling career helping young children achieve their full potential.",
    },
    {
      title:
        "What career paths can I pursue with a degree in Early Childhood Education?",
      subtitle1: "Early Childhood Educator",
      content1:
        "Early childhood educators focus on the academic and social development of young children. They create a safe and supportive environment in which children can develop social, physical, and adaptive skills, alongside their early academic learning.",
      subtitle2: "Childcare Center Director",
      content2:
        "Preschool and daycare directors manage staff, create educational programs, supervise activities, and manage budgets. This role is suitable for individuals with advanced degrees such as a master’s or PhD.",
      subtitle3: "Early Childhood Education Researcher",
      content3:
        "Researchers in this field study the impact of various services and practices on young children’s outcomes, and they analyze the effectiveness of early childhood education programs.",
    },
  ];

  return (
    <div>
      {/* Header section with background image */}
      <div style={sectionStyle}>
        <h1>Study Early Childhood Education Abroad</h1>
        <p>
          Early Childhood Education is the study of how to educate young
          children from birth to age eight.
        </p>
        <p>
          With many different programs available, this field offers excellent
          opportunities for career advancement.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $480 billion projected value of the global Early
            Childhood Education market by 2026
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of a preschool teacher
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 124,300 job openings for kindergarten and early
            elementary teachers over the next decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7% projected job growth rate for kindergarten and
            early elementary teachers
          </p>
        </div>
      </div>

      {/* FAQ Section */}
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

export default EarlyChildhoodEducation;
