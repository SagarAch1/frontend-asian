import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Politicalscience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle to show or hide FAQ section
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "1900px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
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
    color: "#4CAF50", // Use an attractive color for icons
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
      title: "Overview of Political Science",
      content1:
        "Politics is a critical part of our everyday existence. Political Science examines political discourse, governance, and behavior, offering insights into these key aspects. It is an expansive field covering sub-disciplines such as political theory, comparative politics, international relations, political history, public policy, and political methodology.",
      content2:
        "This discipline provides a comprehensive view of how power and resources are distributed within societies, the development of political ideologies, comparisons of political regimes, and global politics. A Political Science education will equip you with skills to analyze political matters, including studying public policy and applying empirical methods to address political issues.",
      content3:
        "Political scientists, recognized for their strong analytical abilities, have excellent career prospects. Graduates in this field often find opportunities in governmental agencies, legislative bodies, political administrations, NGOs, international organizations, public service bodies, think tanks, and journalism.",
    },
    {
      title: "Is Political Science the Right Choice for Me?",
      content:
        "If you frequently reflect on global challenges and consider how the world can improve, or if you ponder on issues such as migration, authoritarianism, freedom of speech, laws, populism, and globalization, Political Science might be a suitable field. Analytical skills are crucial in this discipline, as political scientists must evaluate both qualitative and quantitative data, demonstrating creativity to offer original perspectives on complex political issues.",
    },
    {
      title: "Study Options and Costs in Political Science",
      content1:
        "Students can begin their Political Science studies with a bachelor's degree, typically a four-year program. During this time, students will be introduced to the core elements of politics, government structures, and legislation. Common courses include public policy, populism, qualitative research methods, identity politics, democracy vs authoritarianism, and gender and politics. This degree can lead to entry-level positions like policy analyst, legislative assistant, political campaign worker, or public relations specialist. The cost for an international student's bachelor’s degree in Political Science in the US averages around $29,457 per year.",
      content2:
        "Students can then opt for a master’s degree in Political Science, focusing more on research methodologies and specific areas of political science. A master’s degree in Political Science typically costs between £23,000 and £30,000 in the UK.",
      content3:
        "For those with some experience, pursuing a PhD in Political Science can be an excellent career booster, leading to senior research roles or university teaching positions.",
    },
    {
      title: "Job Outlook in Political Science",
      content1:
        "As the world becomes more politically polarized, there is a growing need for policy analysts in both the private sector and government. Political scientists are being hired to evaluate policies and improve public services. According to the US Bureau of Labor Statistics, the demand for political scientists is expected to grow by 9% from 2020 to 2030.",
      content2:
        "Political parties, lobbyists, labor unions, and various other political organizations rely on the insights of political scientists to make informed decisions. Many international companies are also employing political scientists to advise on policies affecting their industries, such as food regulations for food chains or pharmaceutical policies for healthcare companies.",
    },
    {
      title: "Career Opportunities for Political Science Graduates",
      subtitle1: "Policy Analyst",
      content1:
        "Policy analysts use their critical thinking and analytical skills to assess the effects of public policies. They propose new policies and write in-depth reports to support their recommendations, suggesting improvements to existing policies.",
      subtitle2: "Legislative Assistant",
      content2:
        "Legislative assistants work for political representatives to support them in their legislative duties. They assist in writing speeches, drafting legislation, tracking political issues, and managing public concerns.",
      subtitle3: "Public Relations Specialist",
      content3:
        "Political organizations or figures often hire PR specialists to help shape public opinion. They write press releases, arrange media coverage, and organize events to promote their client’s image and ideas.",
      subtitle4: "Diplomat",
      content4:
        "Diplomats represent their country's interests abroad. They are responsible for safeguarding their nation's citizens, maintaining diplomatic relations, and influencing foreign policies to align with national goals.",
      subtitle5: "Political Scientist",
      content5:
        "Political scientists research political theories, analyze political behavior, and forecast future political trends. They provide advice on policy-making, utilizing both historical data and current political scenarios to help shape decisions.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Political Science Abroad</h1>
        <p>
          Political Science involves studying political structures, policies, and practices. 
        </p>
        <p>It provides a solid foundation for engaging in community organizations and  </p>
        <p>preparing for future roles in policy-making, international relations, and media.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 9% increase in political science job opportunities
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $125,350: the average yearly income for political scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 50% of political scientists in the US work for the federal government
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $170,800: the top annual salary for leading political scientists
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
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
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

export default Politicalscience;
