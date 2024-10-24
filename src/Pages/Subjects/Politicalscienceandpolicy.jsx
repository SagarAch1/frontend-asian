import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Politicalscienceandpolicy = () => {
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
      title: "About Political Science and Policy Studies",
      content1:
        "Political science seeks to understand how communities deal with conflict, seek various forms of justice, and make collective decisions for the greater good. It is the study of the structure, procedure, and policies of governments, as well as how communities impose conditions on governments through political parties, elections, interest group advocacy, and public opinion outlets. Policy studies is a subcategory of political science that examines the process of policymaking (the policy process) as well as the contents of policy (policy analysis). Policy study focuses on understanding substantive area research (such as health or education policy), programme evaluation and impact studies, as well as policy design.",
     
    },
    {
      title: "Is Political Science and Policy Studies Right for Me?",
      content1:
        "Are you interested in theories about government, power structures and resource distribution? Do you wonder how legislation is done and what makes some policies more effective than others? If this is the case, then Political Science and Policy Studies might be the right major for you.",
        content2:"Political Science and Policy Studies tend to appeal most to abstract thinkers and to those who want to work in government or the nonprofit sector, as well as those who want to pursue law. Students who are interested in current affairs and enjoy public discourse may be interested in the major. You'll be well-equipped to understand the forces that shape political processes if you major in Political Science and Policy Studies. If you want to play your role as an active citizen and help steer the direction of policy and legislation, then this degree may lead you to empowering career paths.",
    },
    {
      title: "Political Science and Policy Studies Study Options and Costs",
      content1:
        "Political Science and Policy Studies is offered at the bachelor's, master's and doctoral level.",
        content2:"The bachelor of Political Science and Policy Studies degree combines fundamental concepts with standard courses in government, politics, public policy, international relations, and law. You’ll learn about the emergence of complex global political dynamics, race relations, social justice movements, and foreign policy. A bachelor's degree in Political Science and Policy Studies can cost anywhere between $10,560 for public in-state colleges and $37,650 for private schools.",
        content3:"A master's degree allows you to specialise in an area of special interest to you. You are expected to gain mastery of the subject by narrowing your focus and publishing your findings for wider consumption. A master's degree typically costs $8,950 for in-state students and can cost up to $42,030 for private colleges.",
        content4:"The PhD degree typically requires advanced coursework, including the submission of a book-length dissertation, teaching programmes, and comprehensive examinations. Clearly, these are suited to students who are naturally drawn to classic scholarship and have a passion for the subject. A doctoral degree may cost $11,440 for in-state students and $25,0083 for out-of-state students. The average tuition fee for a doctoral degree in a private school is $44,910.",
    },
    {
      title: "Future outlook",
      content1:
        "Political Science and Policy Studies graduates with extensive knowledge of political systems, institutions, and policies are in high demand.",
        content2:"Political Science and Policy Studies majors can be found at the highest echelons of both public and private organisations, with a job outlook of 9%, which is faster than the national average of all other occupations. Political Science and Policy Studies graduates can earn $60,000-$90,000 as research analysts, program and account managers, and marketing professionals. According to the U.S. Bureau of Labor Statistics, on average, 700 openings for political scientists are expected each year over the next decade. In today’s globalised economy the critical thinking skills developed by the academic rigour of a Political Science and Policy Studies degree is invaluable making the future outlook for this degree welcoming.",
    },
    {
      title: "Career Pathways for Political Science and Policy Studies graduates",
      subtitle1: "Political Scientist",
      content1:
        "As a political scientist you will be expected to analyse current events, policy pronouncements, and other related issues. You will be expected to conduct research on international issues and present your findings to public and private stakeholders.",
      subtitle2: "Campaign Director",
      content2:
        "Campaign directions, as the name suggests, manage campaigns for political candidates. They are in charge of key operations such as strategising, fundraising, political advertising, polling, and other activities aimed at rallying support and votes.",
      subtitle3: "City Administrator",
      content3:
        "As a city administrator, you work for the government and report to the mayor. You will be responsible for monitoring, coordinating, and supervising office activities and functions. You are also authorized to create and implement internal policies and procedures governing the city's administrative activities. In additional, you are responsible to evaluate city employees, and to take the necessary steps to improve city administration operations.",
      subtitle4: "Diplomat",
      content4:
        "Simply put, diplomats represent their country’s interests in foreign lands. They are tasked with defending their country and its citizens, repairing relationships with other countries, and forging long-term bonds in order to shape sound foreign policy.",
      subtitle5: "Political Analyst",
      content5:"Policy analysts assess the effectiveness of existing policies and propose new programmes and legislation to modify and improve them. They raise public awareness of the consequences of policies while also influencing political and social events.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Political Science and Policy Studies abroad</h1>
        <p>
          Interested in understanding how politics shapes global dynamics and
          foreign policies of different countries? Studying Political Science
          and Policy Studies can address these questions and open doors to
          rewarding career opportunities!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 9% projected growth in employment opportunities
            for political scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of political scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 7,400: the number of predicted job openings by
            2029
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>Average annual salary of top earners
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
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
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

export default Politicalscienceandpolicy;
