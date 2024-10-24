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
      title: "About Sociology",
      content1:
        "Sociology focuses on societal aspects such as social interaction, social behavior, social change, and the social correlation and causations of human behavior. This field of study explores and evaluates all the characteristics which makes a society whole. For example, primary institution, secondary institutions, beliefs, values, and norms.",
      content2:
        "A degree in this branch of study will provide you with insights that help understand the choices an individual makes, and how those choices shape their lives along with the society they’re living in. Sociology graduates also gain the ability to critically think about social topics and problems that occur in our society. Sociology enriches student lives while also preparing them for employment in a world that is becoming increasingly diverse.",
      content3:
        "A program in sociology will teach you skills such as critical thinking, problem-solving, interpersonal communication, and fieldwork skills, which will not only benefit you academically, but wherever you may decide to go.",
    },
    {
      title: "Is Sociology right for me?",
      content1:
        "Have you ever wondered why a criminal commits crime? Why teenagers resort to deviant behavior? Or how the building blocks of a culture are set in place? If yes, then this is the field of study you’ve been in search of.",
      content2:"Before diving into Sociology, you need to make sure you can express your thoughts, relate everyday experiences to what you’re studying, and analyse data effectively. This will enable you to formulate and test hypotheses. Your job would demand you to think critically, improvise, and find quick but effective solutions. If you think you have these character traits, then this field of study is well suited to you.",
    },
    {
      title: "Sociology study options and costs",
      content1:
        "The cost of a bachelor’s of Sociology is on average $27,488 for international students. A master’s in this degree is about 1-2 years in duration. If you’re planning on doing master’s full-time, it would cost you around $21,000 per year and if you decide to do it half-time, that will cost around $11,000 per year. Since masters is an advanced degree as compared to bachelors, this will incorporate subjects such as politics of environment, qualitative and quantitative data analysis, social research, social change leading to political order, sociology of violence, power structures, cultural norms, and sociology of religion.",
      content2:"After having a bachelors and master’s degree, if your passion for Sociology perseveres, put your best foot forward to enroll yourself in a PhD programme. A PhD in Sociology would mean spending another three years of your life, six if you’re doing it half time, studying. A PhD in Sociology costs around $20,500 per year. This is perhaps the most challenging programme due to the extensive fieldwork you are required to do, on any topic of your choice.",
    },
    {
      title: "Future outlook",
      content:
        "After all the hassle one might go through, the future outlooks of this course are bright. Because sociology is the study of society and all cultural aspects that make a society, your expertise find employment in a variety of sectors. The academic rigour of a Sociology degree equips you with transferrable skills such as critical thinking, analytical and research skills which increase your market worth. This coupled with the steady growth in employment opportunities for Sociology careers ensure a good future outlook for students.",
    },
    {
      title: "Career pathways for Sociology graduates",
      subtitle1: "Human Resources Manager",
      content1:
        "As a HR manager you oversee tasks such as interviewing candidates and developing strategies to optimise productivity. You are responsible for talent acquisition and organisational cultural development. Those in charge of this job are seen as the bridge between the organisation and its employees.",
      subtitle2: "Guidance Counselor",
      content2:
        "Guidance counsellors work in educational institutes. They help students make smart choices regarding their academics and careers. They provide support to students and help they see things from new perspectives.",
      subtitle3: "Social Worker",
      content3:
        "Social workers assist people in overcoming obstacles in their lives, such as problems with family, health, finances, or employment. Counselling services, such as financial support, client data processing, individual progress tracking, and more can also be included in your duties.",
    
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Sociology abroad</h1>
        <p>
          Want to get a better understanding of how societies build, evolve and
          operate? Want to know the reasons for differences in social
          behaviours? Then studying Sociology might just be what you’re looking
          for.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $93,420: average annual wage of a sociologist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>5% growth in employment opportunities for
            sociologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $135,420: average annual income of top
            sociologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 37% Sociology jobs are research and fieldwork
            based
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

export default Sociology;
