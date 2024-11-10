import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Generalhistory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open or closed state
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
    color: "#4CAF50", // Attractively styled icon color
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
      title: "About General History",
      content1:
        "Students pursuing a General History degree learn to critically examine the past, enabling them to interpret present geopolitical and cultural events with historical context. Those enrolled in this major often study ancient world civilizations and are required to participate in seminars to refine their historical analysis skills. These courses teach students to engage with original documents, review historical texts, and engage in debates surrounding diverse perspectives.",
      content2:
        "Many history programs require students to take courses that cover various chronological periods and geographical regions, ensuring exposure to the premodern era and a global view of history.",
    },
    {
      title: "Is General History right for me?",
      content:
        "A General History degree is ideal for those who are always asking deeper questions about topics like politics, war, or culture and are unsatisfied with simple explanations. Given the breadth of the subject, students must specialize in a particular region or culture. Expect significant reading and writing, and be prepared to engage with conflicting viewpoints.",
    },
    {
      title: "General History study options and costs",
      content1:
        "The path you take in studying General History depends on your career goals. For example, a bachelor's degree is required to pursue a career as a historian. Afterward, many historians go on to complete a master's or PhD, conducting research and writing a thesis in their chosen area of study. Your first year of study typically includes introductory courses in history, and you may also take electives or pursue a second major. By your senior year, history courses will comprise approximately 40% of your classes, and you may need to complete a capstone project that involves substantial research writing.",
      content2:
        "To become a historian, you first need to complete high school and then pursue a history degree in college. After earning a bachelor's degree, you must attend graduate school in your specific field. Some historical career paths, such as academic or advanced research roles, require a PhD. In a competitive field like history, experience in research is often essential.",
      content3:
        "According to the Bureau of Labor Statistics (BLS), most historians with a bachelor's degree work in teaching and research roles, while some also pursue positions as museum technicians. If not pursuing a career in education, history graduates may find opportunities in fields like media, law, or business. However, most serious historians require a graduate degree (master's or PhD) to advance in the field.",
    },
    {
      title: "Future outlook",
      content:
        "The BLS projects that employment for historians will grow at an average rate of 6%, in line with other professions. Technological advancements in how museums display their collections have created new opportunities in the museum sector, providing greater demand for qualified historians. The archival field is expected to see more growth compared to other areas in historical professions.",
    },
    {
      title: "Career pathways for General History graduates",
      subtitle1: "Historian",
      content1:
        "Historians are responsible for locating and analyzing historical documents, records, photographs, videos, letters, books, and other artefacts to understand and explain changes over time. They gather data from various sources, develop hypotheses based on their findings, and draw conclusions about historical events and eras.",
      subtitle2: "History Researcher",
      content2:
        "History researchers conduct in-depth studies of historical figures, events, places, and objects to gain a better understanding of the past. They organize data, collaborate with other researchers, write papers detailing their findings, and ensure the accuracy of the information they present. Daily tasks include analyzing historical documents, identifying key facts, and creating exhibits or films to showcase their discoveries.",
      subtitle3: "History Professor",
      content3:
        "A history professor teaches students about both general history and specific historical topics, helping students analyze events and their long-term impacts on society and later developments.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study General History abroad </h1>
        <p>
          General History majors explore significant historical events that have 
        </p>
        <p>shaped our world. They investigate human experiences from the </p>
        <p>past and develop critical thinking, research, and communication skills.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average yearly earnings of historians
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average yearly earnings for museum workers and conservators
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 5% projected increase in historian job opportunities this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average annual income of leading historians
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

export default Generalhistory;
