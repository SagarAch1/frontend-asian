import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const ReligiousStudies = () => {
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
      title: "About Religious Studies",
      content1:
        "Religious Studies is the in-depth study of what traditions, rituals, and beliefs are attributed to what religion, and how religion has shaped societies. Religion is a major chunk of the lives of people and plays an important social and cultural role. Pursuing Religious Studies will not only help you better understand the influence of religion on social and political interactions but also foster an analytical perspective to view the world.",
      content2:
        "This degree will embed skills, such as critical thinking, logical reasoning, ability to decipher information, and presentation skills, in you. Religious Studies degrees are known for their rigour and vast amounts of information that must be committed to memory. Furthermore, through this degree you will develop an intuition for cultural, ethical, political, and philosophical problems of religions.",

    },
    {
      title: "Is Religious Studies right for me?",
      content1:
        "If you often zone out and wonder about the origin of the world, the existence of a divine creator, and the purpose of this universe, then this degree is well suited to you",
      content2:
        "For example, if you find yourself wondering why Muslims circumambulate the Holy Kaaba seven times, why Sikhs visit the Golden Temple, and why Christians believe in the Holy Trinity, this degree will not only provide you with the answers that you need but help you develop an appreciation of the role religion plays in the life of people.",
        content3:"To excel in this degree programme you must have a good memory, along with being patient. Reading through large textbooks and spending hours on end in the library are some things you must be mentally prepared to do. This might sound like a handful, but if you’re passionate then this degree will significantly broaden your career horizons.",
    },
    {
      title: "Religious Studies study options and costs",
      content1:
        "Religious Study programmes are offered at three levels: A bachelor’s which takes 3-4 years, a master’s which is 2 years, and a PhD which with a full-time study takes around 3-4 years, whereas part-time could take 6-7 years.",
      content2:
        "There are multiple research and specialisation paths when enrolled in a Religious Studies programme. Some of those fields include but are not limited to anthropology of religion, geography of religion, history of religion, origin of religion, and literary and neurological approaches to Religions.",
        content3:"A bachelor’s degree in Religious Studies will educate you about how religion relates to anthropology, what religious aspects make us human, and discuss human experiences of the past, also known as holism. A bachelor’s degree would cost you around $28,584 per academic year in the US. Master’s degrees which are more in-depth compared to undergraduate programs, typically cost around $30,000 to $40,000. Lastly, a PhD will prepare you to conduct independent research on religious questions that hold your interest using a variety of qualitative approaches. Average cost of PhD is $38,600 due to the intense fieldwork and research requirements.",
    },
    {
      title: "Future outlook",
      content1:
        "Religion is one of the largest political and economic drivers in the world today. There is a large demand for formally educated theologians, clergy, and social and community workers. Religious Studies prepare graduates to make rich contributions to their societies. The open-mindedness and analytical mindset of these graduates make them highly effective in several career paths.",
      content2:
        "The employment opportunities for theologians, clergy and religious vocations are expected to steadily grow over the coming decades. In fact, there are 387,740 theologists currently employed in the US!",
    },
    {
      title: "Career pathways  for Religious Studies graduates",
      subtitle1: "Teachers",
      content1:
        "As a religious teacher your responsibilities include educating students about the fundamentals of religion, which include the 5W’s and 1H (who, what, when, where, why and how). This requires storytelling skills and patience because you are expected to get your point across while respecting the student’s point of view. The average annual salary of a religious teacher is $43,450.",
      subtitle2: "Missionary",
      content2:
        "A job like this demands your full-time attention because this is where you dedicate your whole life to educating and informing people about religion, to spread faith. This job also requires you to travel often due to the various platforms you’re asked to talk at. The average annual income of a missionary is $44,566.",
      subtitle3: "United Nations Diplomacy",
      content3:
        "This is an extremely prestigious job opportunity. This allows you to work with faith-based organizations, as well as non-government organizations (NGOs). The approximate income for this vocation is $95,000.",
      subtitle4: "Chaplain",
      content4:"This is the term used to refer to people or representatives who offer religious services for people who are not able to attend normal sermons, in areas such as warzones, prisons, and hospitals. The average annual salary for a chaplain is around $50,397.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Religious Studies abroad</h1>
        <p>
          Have you ever wanted to explore different religious ideologies and
          learn about the significance of holy places such as Jerusalem, Makkah
          and The Golden Temple? Religious Studies could be your ticket to a
          lifetime of fulfilling work!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $73,130: average annual salary of a theologist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>82% of Religious Studies graduates are employed or
            pursuing higher education within six months of graduation
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>387,740 Theologists currently employed in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $52,370: average annual salary of Religious
            Studies graduates
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

export default ReligiousStudies;
