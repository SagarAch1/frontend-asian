import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Politicalscienceandpolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing the FAQ
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/graphicdesign.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "black",
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
    color: "#4CAF50", // Attractive color
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
        "Political Science focuses on how societies manage conflict, seek justice, and make collective decisions for the common good. It involves studying government structures, political procedures, and how communities influence governments through political parties, elections, interest groups, and public opinion. Policy Studies, a branch of Political Science, focuses on the policymaking process and policy analysis, including areas like health or education policy, programme evaluation, and policy design.",
    },
    {
      title: "Is Political Science and Policy Studies Right for Me?",
      content1:
        "If you’re interested in understanding government theories, power structures, and the distribution of resources, and if you’re curious about how legislation is created and why some policies work better than others, then Political Science and Policy Studies could be the perfect fit for you.",
      content2:
        "This field typically attracts those who enjoy abstract thinking and want to pursue careers in government, law, or nonprofit sectors. If you’re passionate about current affairs and enjoy engaging in public discussions, this major offers the right tools to help you shape political processes and impact policy decisions.",
    },
    {
      title: "Political Science and Policy Studies Study Options and Costs",
      content1:
        "Political Science and Policy Studies are available at the bachelor's, master's, and doctoral levels.",
      content2:
        "A Bachelor’s degree in this field includes core courses in government, politics, public policy, international relations, and law. You’ll study the complexities of global political dynamics, race relations, social justice movements, and foreign policy. The tuition fees for a bachelor’s program vary, ranging from $10,560 at public in-state colleges to $37,650 at private institutions.",
      content3:
        "A Master’s degree allows you to specialize in a specific area, focusing your research and publishing your findings. The average cost for in-state students is $8,950, while private colleges may charge up to $42,030.",
      content4:
        "A PhD program generally involves advanced coursework, a dissertation, teaching experience, and comprehensive exams. This option is for those passionate about academic research. Tuition costs for doctoral programs can range from $11,440 for in-state students to $44,910 at private universities.",
    },
    {
      title: "Future Outlook",
      content1:
        "Graduates with a deep understanding of political systems, institutions, and policies are highly sought after. The job market for Political Science and Policy Studies professionals is expected to grow by 9%, faster than the average growth rate for other fields.",
      content2:
        "Political Science and Policy Studies graduates can earn between $60,000 and $90,000 in roles such as research analysts, program managers, and marketing professionals. The U.S. Bureau of Labor Statistics predicts around 700 job openings for political scientists annually in the next decade. The critical thinking skills gained from this degree make it highly valuable in today’s globalized economy.",
    },
    {
      title:
        "Career Pathways for Political Science and Policy Studies graduates",
      subtitle1: "Political Scientist",
      content1:
        "Political Scientists analyze current events, policy decisions, and other relevant issues. Their research on global topics helps inform public and private sector decisions.",
      subtitle2: "Campaign Director",
      content2:
        "Campaign Directors manage political campaigns, overseeing strategy, fundraising, advertising, and public polling to garner support for candidates.",
      subtitle3: "City Administrator",
      content3:
        "City Administrators manage city government operations, report to the mayor, and oversee office functions. They are responsible for policy creation, implementation, and ensuring the effective operation of the city’s administration.",
      subtitle4: "Diplomat",
      content4:
        "Diplomats represent their countries abroad, protect national interests, foster international relations, and influence foreign policy decisions.",
      subtitle5: "Political Analyst",
      content5:
        "Political Analysts evaluate the impact of existing policies, propose new programs, and raise public awareness on the consequences of policy decisions, shaping political and social events.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Political Science and Policy Studies Abroad</h1>
        <p>
          If you’re curious about how politics shape global dynamics and
          influence foreign policy,
        </p>
        <p>
          pursuing a degree in Political Science and Policy Studies could be the
          answer.{" "}
        </p>
        <p>
          This field opens doors to rewarding career opportunities and
          intellectual growth.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            9% projected growth in employment opportunities for political
            scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>Average annual salary of political scientists</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>7,400 job openings expected by 2029</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>Average annual salary of top earners in political science</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleFAQ(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
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

export default Politicalscienceandpolicy;
