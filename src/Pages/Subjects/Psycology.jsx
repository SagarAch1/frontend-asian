import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Psycology = () => {
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
      title: "About Psychology",
      content1:
        "Psychology is the study of the mind: how people think, feel and behave. Due to its immense scope psychology extends into both natural and social sciences. Students of Psychology learn everything from mental illnesses and memory to personality and brain anatomy.",
      content2:"Psychologists research the processes involved in thinking, decision making, learning and behavioural change. Furthermore, they strive to find treatments for mental health issues.",
      content3:"Some courses students can expect to study are developmental psychology, cognition, learning and memory, sensation and perception, psychometrics, organisational psychology, personality, and health psychology.",
      content4:"Psychology graduates develop skills that are highly coveted by companies and organisations, including critical thinking skills, a research-based approach and strong interpersonal skills. These attributes allow psychology graduates to find occupation in a variety of career pathways.",
    },
    {
      title: "Is Psychology right for me?",
      content1:
        "Humans face a lot of struggles in their day-to-day lives, both internal and external. It is often the internal struggles that are easily set aside as trivial. But they are pernicious and if left unattended can become overbearing.",
        content2:"To be a successful psychologist one must be empathetic. Individuals high in empathy are better able to understand the internal struggles of others and consequently more effectively treat them. Moreover, empathetic individuals find intrinsic reward by helping those in dire need; this trait helps psychologists stay motivated even during challenging times. Last but not least, good psychologists are patient as they understand that both treatment and research can take years to bear fruit.",
        content3:"If you’re empathetic and have a passion for research, then a Psychology degree may be a good fit for you. Psychology researchers help expand the knowledge of the field enabling more efficacious therapy regimens to be devised.",
    },
    {
      title: "Psychology study options and costs",
      content1:
        "A bachelor’s in Psychology is one of the most popular degree programmes around the world. A bachelor’s degree is typically four years long. Although you can’t become a certified psychologist with just a bachelor’s degree, you can find internships and research assistant level posts. A bachelor’s degree in Psychology can cost anywhere from $25,000 to 60,000 per year in the US.",
        content2:"After their bachelor’s students can pursue a master’s degree in Psychology. Master’s degrees in Psychology are usually specialised in counselling, organisational, educational, family or forensic psychology. A master’s degree will qualify you to practice in some countries while others require a doctoral degree. Most industrial-organisational psychologists only have a master’s degree. A master’s degree is typically 2 years in duration and can cost on average AUD 32,000-54,000 per year in Australia and £20,000-50,000 in the UK.",
        content3:"There are two doctoral degree options available for Psychology: a PhD in Psychology or a Doctor of Psychology (PsyD). A PhD degree student must conduct original research and write a dissertation. The coursework for a PhD degree in Psychology focuses on experimental methodology and statistics. On the other hand, a PsyD degree is more geared towards clinical practice: Students will learn about clinical practice and most programmes will require an extended internship in a health service setting. Both degrees can take on average 4-6 years to complete. It should be noted that admission into a PhD degree in Psychology will be more competitive than for a PsyD degree.",
    },
    {
      title: "Future outlook",
      content:
        "The growing awareness of mental health issues over the last decade has allowed Psychology to grow at a rapid pace. There has been a significant upswing in the demand for psychological professionals in education, health and social services organisations. Furthermore, the link between learning and mental health will lead to more employment opportunities for school psychologists. Similarly, organisations are increasingly recruiting industrial-organisational psychologists to select, retain, increase productivity and motivative employees. In fact, the overall employment growth rate for psychologists this decade is 8%. According to the U.S. Bureau of Labor Statistics, more than 13,400 jobs are expected every year for psychologists in the US alone!",
    },
    {
      title: "Career pathways for Psychology graduates",
      subtitle1: "Clinical psychologists",
      content1:
        "Clinical psychologists diagnose and treat mental health issues and behavioural disorders. They tailor their treatment approach to best serve their clients. Clinical psychologists foster relationships with their patients and help them navigate through psychological challenges such as depression, low self-esteem and anxiety. They also administer psychometric tests to assess a patient's progress through the recovery process. Clinical psychologists make on average $79,000 per year.",
      subtitle2: "Forensic psychologists",
      content2:
        "These professionals apply their psychological insights to aid the legal and criminal justice system. They help the judiciary grasp the psychological dimension of a given case. They evaluate the mental state of individuals such as criminals, witnesses and the jury. They may also testify in court as expert witnesses. Forensic psychologists make on average $77,000 per year.",
      subtitle3: "Industrial–organizational psychologists",
      content3:
        "This is one of the fastest-growing professions worldwide. These experts apply psychology principles to the workplace to optimize work life. They study workplace productivity, management, employee morale, employee personality and employee work style to optimise organisational efficiency. They also help devise organisational policies and screen candidates for hiring. Industrial-organisation psychologists make on average $100,000 per year.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Psychology abroad </h1>
        <p>
          Are you intrigued by human behaviour? Why do people get angry or
          upset? What drives the actions of individuals? Studying Psychology can
          help you satisfy your curiosity and set you up for success in a
          variety of careers, both in psychology and beyond.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>:$82,140: the average annual salary of a
            psychologist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 13,400 job openings expected each year for
            psychologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 8% employment growth expected this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $137,590: the average annual salary of top 10% of
            psychologists
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

export default Psycology;
