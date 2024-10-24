import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Politicalscience = () => {
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
      title: "About Political Science ",
      content1:
        "The significance of politics in our daily lives is undeniable. Political Science is the scientific study of politics, helping us better understand political discourse, governance and political behaviour. Political Science has many sub-disciplines including political theory, comparative politics, international relations, history of politics, public policy and political methodology.",
      content2: "Political Science provides us with a holistic understanding of power and resource distribution in society, evolution of political thought, comparative analysis of political regimes, and politics at the international stage. An education in Political Science will teach you how to critically analyse politics. You will also learn about public policy and empirical methodology to solve political challenges.",
      content3:"Political scientists, due to their piercing analytical capabilities, have superb career advancement opportunities. Political science graduates find plentiful opportunities in government institutions, legislative bodies, political administration, NGOs, international organisations, public service organisations, thinktanks and journalism.",
    },
    {
      title: "Is Political Science right for me?",
      content:
        "Some indicators that you are well suited to this field are that you often think deeply about the world and how it can be made better. Or you think about topics like migration, authoritarianism, freedom of speech, laws, populism and globalisation. Furthermore, Political Science requires one to have strong analytical skills. Political scientists must be able to gather and evaluate both qualitative and quantitative data and possess a great deal of ingenuity, which is essential to produce original and groundbreaking papers. Creativity allows political scientists to think about old political issues through novel viewpoints and draw new conclusions.",
     
    },
    {
      title: "Political Science study options and costs",
      content1:
        "Students can pursue a bachelor’s degree in Political Science which is typically a four-year programme. During your bachelor’s you will be familiarised with the fundamentals of politics, legislation and government. Some course modules students can expect to study are public policy, populism, qualitative research methods, identity politics, democracy and authoritarianism, and gender and politics. This degree will qualify you for some entry-level positions such as policy analyst, legislative assistant, political campaign worker or public relations specialist. A bachelor’s degree in Political Science in the US costs around $29,457 for international students.",
      content2:
        "Next up, students can choose to pursue a master’s degree in Political Science which will enable them to work as political scientists. This degree will emphasise research methodology and tend to be more specific in nature compared to a bachelor’s degree. A master’s degree in Political Science costs around £23,000 to £30,000 in the UK.",
      content3:
        "A PhD can be an excellent acquisition for political scientists who have some experience under their belt allowing them to advance in their careers. A PhD degree in Political Science qualifies you for senior research positions as well as to teach at the university level.",
     
    },
    {
      title: "Future outlook",
      content1:
        "In today’s politically partisan world, there is an increasing demand for public policy analysts in the private sector. Similarly, governments are recruiting more and more political scientists to assess government policies and improve public service. According to the US Bureau of Labor Statistics, employment opportunities for political scientists is expected to increase by 9% from 2020 to 2030.",
      content2:
        "Political parties, lobbying firms, labour unions and other political entities rely on the insights provided by political scientists to navigate political straits. This is expected to drive the demand for Political Science graduates even higher. Many international firms are hiring political scientists to analyse and advise regarding policies pertaining to their fields such as food policies for food chains or drug policies for pharmaceutical companies.",
    },
    {
      title:
        "Career pathways for Political Science graduates",
      subtitle1: "Policy Analyst",
      content1:
        "Policy analysts utilise their critical thinking and analytical skills to evaluate the impact of public policies. They draft proposals for policies and write detailed reports in support of their proposed policy. They also suggest improvements to current policies.",
      subtitle2: "Legislative Assistant",
      content2:
        "Assembly members and other political representatives hire legislative assistants to help them conduct their duties. Legislative assistants use their communication skills to help legislators write and speak better. They also assess the demands of the constituents regarding developmental and political issues. Furthermore, legislative assistants will keep tabs on senate or national assembly happenings and policy issues.",
      subtitle3: "Public Relations Specialist",
      content3:
        "Public relations specialists are often hired by political organisations or leaders to help sway public opinion in their favour. Public relations specialists write persuasive press releases and use media to highlight the positive work of their client.Other responsibilities of a PR specialist may include organizing press conferences, garnering media attention and organising campaign events.",
      subtitle4: "Diplomat",
      content4:
        "Simply put, diplomats represent their country’s interests in foreign lands. They are tasked with defending their country and its citizens, repairing relationships with other countries, and forging long-term bonds in order to shape sound foreign policy.",
      subtitle5: "Political Scientist",
      content5:
        "A political scientist studies political theory and research political phenomena. They analyse the current political climate and proffer advice on policymaking. Political scientists rely on qualitative research, historical trends and their own experience to predict the future political scenario and help their clients navigate dire political straits.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Political Science abroad</h1>
        <p>
          Political Science is the study of political structures, policies and
          practices. Studying political science gives you a firm footing to
          participate in community organisation and prepares you for future
          roles in policy, international affairs and media.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 9% growth in employment opportunities for
            political scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $125,350: the average annual salary of political
            scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 50% of all political scientists are employed by
            the federal government in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>$170,800: the average annual salary of top
            political scientists
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

export default Politicalscience;
