import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Generalhistory = () => {
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
      title: "About General History",
      content1:
        "General History majors learn how to critically study the past, allowing them to view the current geo-politcial and socio-cultural events through a historical perspective. Students who seek a General History degree may expect to study about ancient civilisations of the world. Majors at various schools are required to take a seminar where they polish their skills at analysing history. They learn how to interact with original materials, study historical literature, and debate opposing viewpoints in such classes.",
      content2:
        "Many history programmes have chronological and geographic course requirements, requiring students to learn about the premodern era and travel to different parts of the world.",
    },
    {
      title: "Is General History right for me?",
      content:
        "A General History degree can be a good fit for you if you constantly ask questions about issues like politics, war, or culture and aren't content with simple answers. Because history is such a large subject, students will be asked to speciailise in the history of a particular region or culture. Students should also expect to spend a significant amount of time reading and writing, as well as being able to comprehend different, often opposing points of view. ",
      
    },
    {
      title: "General History study options and costs",
      content1:
        "Study options highly depend on the career path you aim to take in the future. For example, you must have a bachelor's degree in General History to work as a historian. After that, most historians pursue a master's or doctorate degree, during which time they conduct research and submit a thesis in their chosen field. Generally, you'll take introductory History courses in the first year of your college degree. You'll also have electives to pursue a second major of your choice in some cases. History courses will make up 40% of your classes in your senior year. History majors may also be required to take a capstone course that requires them to write a large research report.",
      content2:
        "If you plan on becoming a historian, you must first complete high school and then pursue a history degree at college. After earning a bachelor's degree, aspiring historians must enrol in a graduate school in their chosen field of study. Some historical professions require candidates to hold a PhD in their field of study. In such a competitive sector, a history applicant must have research experience in the field of his specialisation.",
      content3:
        "According to the Bureau of Labor Statistics (BLS), historians with a bachelor's degree in general history mostly pursue instructional and research careers. Becoming a museum technician is another popular career. If they do not go into public school teaching, those with bachelor's degrees in history seek jobs in media, law, or business. A master's or doctorate in history is required for most historians to work in the discipline.",
    },
    {
      title: "Future outlook",
      content:
        "The BLS predicts that the occupation of historians will grow at a pace of 6%, which is about average for all occupations. Since technological advancements have offered more opportunities for big changes in how museums will show their collections to the public, there is a greater need in the museum sector. For qualified historians, there will be more development in the archive profession than in other positions.",

    },
    {
      title: "Career pathways for General History graduates",
      subtitle1: "Historian",
      content1:
        "A historian's task is to locate and use historical documents, records, newspapers, pictures, videos, diaries, books, letters, and artefacts to explain and identify changes that occurred through time in the era of study. The historian must first collect data from many sources, formulate hypotheses based on the facts, then proceed to draw conclusions about all of these facets of life at that time and location.",
      subtitle2: "History Researcher",
      content2:
        "To better comprehend the past, a research historian does a significant study on historical individuals, locations, items, and events. Organising data, communicating with other researchers, creating papers with your results, and assuring information accuracy are all part of this job. Their daily responsibilities include reviewing documents and artefacts, locating significant facts, evaluating the data, and presenting the data through exhibitions, films, and other historical programmes.",
      subtitle3: "History Professor",
      content3:
        "A history professor instructs college students on the past in general and on specific issues and can assist students in interpreting events and teachings from different time periods, as well as how they influenced later events.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study General History abroad </h1>
        <p>
          General History majors learn about the key historical events that
          shape our world. They explore the diversity of human experience in the
          past and build competencies in critical-thinking, research and
          communication.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of historians


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average annual salary of museum workers and conservators


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 5% expected growth in employment opportunities for historians this decade


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average annual salary of top historians


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

export default Generalhistory;
