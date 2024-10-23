import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SocialSkills = () => {
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
      title: "About Social Skills",
      content:
        "Social Skills programmes educate students on how to connect effectively with people in a variety of settings, including private, social, and professional. It is a highly diverse subject that caters to different segments of society.  If you are passionate about learning and teaching people the art of effective communication, empathy and emotional intelligence, then Social Skills is the subject for you. ",
    },
    {
      title: "Is Social Skills right for me?",
      content:
        "Social Skills training programmes are high in demand for the behavioural intervention of young individuals and for making people better employees in general. Above all, if you struggle in socialising, it is all the more reason to pick up Social Skills programmes, as it will help you hone these skills.",
    },
    {
      title: "Study options and costs",
      content:
        "Social Skills study programmes may be pursued after completion of high school. Several disciplines and study options in corporate social skills as part of the curriculum in bachelor’s and master’s degree programs. Some of the most common programs that featuring social skills courses are degrees in business Administration, Workplace Development and Social Sciences. All these programs will have social skills development or education as part of the course curriculum. These degrees will span four years and may cost up to $50,500. ",
    },
    {
      title: "Future outlook",
      content1:
        "Social skills are in high demand across all professions involving people-to-people contact, especially in the corporate sector. Professionals who can teach Social Skills training programmes in post-secondary schools are also highly sought after. These programmes will not only assist students in their interpersonal connections, but will also have a significant impact on the self-confidence and future career success of their students.",
      content2: "It is projected that soft skill-intensive occupations will grow significantly in the future and account for two-thirds of jobs in all professions by 2030. Another promising area for people with degrees in Social Skills is a corporate training. According to the U.S. Bureau of Labor Statistics, the job outlook for corporate trainers is expected to grow by 11% in the next five years.",
    },
    {
      title: "Career pathways for Social Skills",
      subtitle1: "Social Skills Trainer - Autism",
      content1:
        "If you are an empathetic individual and want to affect the lives of people with disorders then this job may appeal to you. Social skills trainers use a reward system (reward-motivated behaviour) to educate children with autism on how to recognise and use regular social skills. A trainer who works with these youngsters exclusively would have studied Social Skills as a primary subject during their education. The average annual salary of a social skills trainer is up to $40,281.",
      subtitle2: "Training Coordinator",
      content2:
        "Communication with managers to identify training requirements and drawing outgrowth programmes for teams and individuals are among the tasks of the training coordinator. All training programmes are managed, designed, developed, coordinated, and conducted by the training coordinators. The average annual salary of training coordinators is up to $52,128.",
      subtitle3: "Child Welfare Trainer",
      content3:
        "Social services employ child welfare officers. Child welfare officers are social workers who work for government agencies and are responsible for assessing, investigating, or advising on matters involving kids. They seek to ensure that minors are not living in unhealthy environments. They are also responsible for the rehabilitation of children who have been subjected to such unhealthy environments. A large part of this process involves helping them learn social skills to form positive connections within society and their future relations. The average annual salary of the child welfare trainer is $52,389.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Social Skills abroad</h1>
        <p>
          Humans utilise gestures, body language, and personal appearance to
          communicate and engage with others. Studying Social Skills helps
          individuals develop and refine these skills in order to excel in both
          personal and professional settings.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of a social skills
            facilitator
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 11% projected employment growth for corporate
            trainers in this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected annual growth rate of the soft skills
            market in next five years
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Two thirds of all jobs by 2030 will be social
            skills-intensive
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

export default SocialSkills;
