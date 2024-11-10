import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Sociology = () => {
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
      title: "Understanding Sociology",
      content1:
        "Sociology explores societal dynamics, including human behavior, social interactions, changes in society, and the relationships between individuals and society. It investigates the structures and elements that hold society together, such as family, institutions, values, norms, and belief systems.",
      content2:
        "A sociology degree helps you understand why people make certain choices, and how these choices affect both individuals and the broader community. Students also develop critical thinking skills, enabling them to analyze societal problems and topics that shape our daily lives. Sociology provides valuable knowledge to thrive in a diverse and evolving world.",
      content3:
        "Studying sociology teaches you essential skills like critical thinking, problem-solving, communication, and field research—skills that are useful not only academically but also in various career fields.",
    },
    {
      title: "Is Sociology a good fit for you?",
      content1:
        "Have you ever wondered what drives criminal behavior, why teenagers act rebelliously, or how cultural norms are established? If you find these questions intriguing, sociology may be the right field for you.",
      content2:
        "Before diving into sociology, it's important to be able to express your ideas, connect your daily experiences with theoretical concepts, and analyze data effectively. If you possess strong analytical skills, creativity, and the ability to find practical solutions, this discipline could be a perfect match for you.",
    },
    {
      title: "Sociology program options and costs",
      content1:
        "The average cost of a bachelor's degree in Sociology for international students is around $27,488. A master’s degree typically lasts 1-2 years, and the tuition fees for full-time students range from $21,000 per year, while part-time students can expect to pay around $11,000 annually. Graduate studies delve into specialized topics such as environmental politics, data analysis, social research, and cultural studies.",
      content2:
        "For those who wish to continue studying, a PhD in Sociology can take about 3 years full-time (or 6 years part-time), with an average cost of $20,500 annually. This advanced degree involves extensive field research and a focus on your chosen area of interest.",
    },
    {
      title: "Future Career Prospects in Sociology",
      content:
        "Sociology graduates enjoy a promising future due to the increasing demand for their skills across various industries. The knowledge and research capabilities gained through a sociology degree, such as critical thinking and problem-solving, enhance employability. The diverse nature of sociology offers job opportunities in various sectors, including academia, research, social services, and government, ensuring a positive career outlook.",
    },
    {
      title: "Career Opportunities for Sociology Graduates",
      subtitle1: "Human Resources Manager",
      content1:
        "HR managers oversee hiring, interviewing, and developing strategies to enhance employee productivity. They manage talent acquisition and help shape the organizational culture, serving as a bridge between management and employees.",
      subtitle2: "Guidance Counselor",
      content2:
        "Guidance counselors work in educational institutions, helping students make informed decisions regarding their academic and career paths. They offer support and assist students in gaining new perspectives on their challenges.",
      subtitle3: "Social Worker",
      content3:
        "Social workers assist individuals and families in overcoming challenges related to family issues, health, finances, or employment. They provide counseling, track client progress, and offer financial or legal assistance when needed.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Sociology Abroad</h1>
        <p>
          Are you interested in understanding how societies form, evolve, and operate? 
        </p>
        <p>Do you want to explore the reasons behind variations in social behavior? </p>
        <p>If so, Sociology may be the perfect field for you.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $93,420: Average annual salary for a sociologist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 5% increase in job opportunities for sociologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $135,420: Top annual salary for experienced sociologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 37% of sociology jobs involve research and fieldwork
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

export default Sociology;
