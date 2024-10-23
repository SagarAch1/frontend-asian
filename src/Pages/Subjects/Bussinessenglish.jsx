import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Bussinessenglish = () => {
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
      title: "About Business English",
      content1:
        "Business English is focused on the terminology and phraseology of business language, understanding the fundamentals of business, as well as mastering the principles, forms and styles of various writings used in business. A Business English programme emphasises reading, writing, speaking and listening in English while taking into account the nuanced context that they are presented within.",
      content2: "This course will help you to develop the academic and communication skills you will need to thrive in today’s job market. You will develop business acumen, cultural awareness, language ability, and the ability to conduct independent research projects.",
    },
    {
      title: "Is Business English right for me?",
      content1:
        "If you want to improve your communication skills and learn about business so that you can capitalise on the opportunities available in today’s interconnected job market, then pursuing Business English is a good idea. This programme will help you improve your vocabulary and syntax making you more articulate. More articulate individuals are better able to express their ideas and lead others.",
        content2:"Those looking to study Business English can expect a large chunk of their time being dedicated to reading and researching outside of class.",
    },
    {
      title: "Study options and costs",
      content1:
        "A minimum of high school education is required to enrol in a Business English programme. A bachelor’s in Business English is a popular major worldwide and is offered in several renowned colleges. These programmes are designed with the international business landscape in mind. The course material generally focuses on the context of international business and involves utilising communication strategies. Depending on the programme, students may culminate their studies with an internship to fully develop their skills in a practical environment. A bachelor’s in Business English will not only sharpen their oral and written communication but also develop an array of business skills. Decision making, collaboration, leadership, entrepreneurship, planning and research are some examples of the skills students will develop. This is a three- to four-year programme and costs around $13,493 per year.",
        content2:"Students who have received an undergraduate degree in Liberal Arts and wish to advance in a particular field of study often go on to study in a master’s programme. A master’s in Business English is an advanced degree which helps graduates improve their ability to communicate in the English language and be attentive to the nuances of business communication. Students learn effective organisational communication, research methodology, analysis, and critical thinking skills. This degree is usually awarded after one to two years of study and the total tuition fee is around $32,472."
    },
    {
      title: "Future outlook",
      content1:
        "We live in a hyperconnected age, where global and instantaneous communication is a defining characteristic. The emergence of English as a global lingua franca has made it more important than ever before to gain competency in the English language. Today, employees are expected to communicate closely with their peers, seniors, juniors and company employees of other departments for improving workflow. This had made effective communication and cultural awareness key traits that employers search for when recruiting.",
        content2:"Many universities cooperate with recruitment companies, offering specialists to companies and institutions inside and outside the country. The rapid expansion of the ELS industry as well as cross-border expansion of companies suggests that the future of Business English graduates is nothing short of promising.",
    },
    {
      title: "Career pathways for Business English graduates",
      subtitle1: "Digital Copywriter",
      content1:
        "As a digital copywriter you'll produce the written content for webpages, either working in an employed position or as a freelancer. Your job will be to engage the reader and persuade them to act, such as to buy a product or service. You may also write copy designed to convey valuable information about a brand, industry or issue. The average annual salary for a digital copywriter is $53,288.",
      subtitle2: "Editorial Assistant",
      content2:
        "An editorial assistant provides support at all stages of the publication of printed material and online content. This includes book, journals, magazines, and publicity materials. In this role they support senior editorial staff in all aspects of the administration, commissioning, planning, and producing of different publications. The average annual salary for an editorial assistant is $39,126.",
      subtitle3: "Newspaper journalist",
      content3:
        "Newspaper journalists research and write stories for the local, national, and international press. They report on a large array of topics including politics, business, sports, arts, culture, science, and technology. They also cover national and local events, entertainment and human interest stories. The average annual salary for a journalist is $60,393.",
        subtitle4: "Web content manager",
        content4:"As a web content manager, you'll ensure all necessary content is included on a website and is laid out in a user-friendly manner. You'll also keep everything up to date and accurate. The content you'll manage may include web pages, images, videos, blog posts, guest articles, reviews and occasionally social media and marketing copy. The average annual salary for a web content manager is $85,972.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Business English abroad</h1>
        <p>
          A Business English programme aims to equip students with the skills
          necessary to excel in an English-speaking business environment. This
          field of study will develop your communication and language skills,
          making you more employable in the global market.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $10 billion estimated worth of the ESL online
            industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Salary of a top Business English graduate
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average yearly salary of Business English graduate
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7,400 job openings projected each year for
            Business English graduates
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

export default Bussinessenglish;
