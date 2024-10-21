import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HumanWelfare = () => {
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
      title: "About Human welfare studies and services",
      content:
        "Human Welfare studies and services comprise the study of social justice, human rights, social empowerment, child welfare along with psychology and general education courses. The eclectic mix of subjects makes for a well-rounded education that emphasises critical thinking abilities, which are indispensable when working in intercultural environments at the international level. The main goal of this specialised field of study is to learn more about the societal, governmental, and financial contexts in which social policy is established, directed, and applied. Furthermore, it includes learning how to plan and manage welfare programs, as well as coordinating resources to meet the needs of individuals and communities.",
    },
    {
      title: "Is Human welfare studies and services right for me?",
      content1:
        "People with a desire to pursue meaningful work find human welfare studies and services a rewarding field. Individuals whose passion for meaningful work is coupled with an openness to new experiences find this field satisfying since you’ll be exposed to multiple disciplines and various cultural ethics during your work.",
      content2:"You will need a high degree of self-awareness and know-how of existing models to effectively address emerging challenges. Thus, to excel in this field of study, you are expected to nurture your inquiry and analytical skills.",
      content3:"Graduates of this subject can expect to find jobs in a variety of non-profit, private and public sectors organisations like family, substance abuse, child welfare, education, health care, criminal justice, elderly care and differently-abled.",
    },
    {
      title: "Human welfare studies and services - study options and costs",
      content:
        "A wide array of study options are available for individuals pursuing Human welfare studies. Students can enrol in a 4-year bachelor’s degree in Human Services, opt for a post-graduate certificate or diploma in Social Welfare, or later do a master’s degree in Social Welfare, a 2-year program. A Bachelor’s degree in Human Services usually costs around AUD 28,640 in Australia, CAD 35,000 in Canada and USD 30,300 in the US.",
    },
    {
      title: "Future outlook",
      content1:
        "The employment rate of social workers is projected to increase by 12% in the next decade, faster than the average rate for all other occupations. The odds are particularly stacked in favour of those possessing post-secondary education as human services is one of the fastest-growing sectors, and there is a huge demand for qualified individuals to fill higher-level posts.",
      content2:"In fact, by 2025, there is an expected shortage of one million social care professionals in the US! Ageing populations, decreasing global fitness levels and virus outbreaks like the COVID-19 pandemic have reinforced the need for human welfare and services as one of the most secure career paths with plenty of scaling opportunities in the coming years.",
    },
    {
      title: "Career pathways for Human welfare studies and services graduates",
      subtitle1: "Family Services Advocate",
      content1:
        "The Family Services Advocate identifies, supports, and advocates for the special needs and rights of children whose parents are imprisoned. These individuals assist families and caregivers in establishing and maintaining healthy parent-child interactions by connecting them with existing community resources.",
      subtitle2: "Substance Abuse Counsellor",
      content2:
        "Addiction counsellors, often known as substance abuse counsellors, play an essential role in assisting people in recovering from substance use disorders and other harmful behaviours. These experts provide continuing treatment, counselling, and direction to their clients and families. Many addiction counsellors have personal experience with addiction, either in their own life or in the lives of their loved ones. Addiction counsellors must be compassionate, non-judgmental people who desire to help others.",
      subtitle3: "Child Welfare Specialist",
      content3:
        "Child welfare professionals assess living circumstances and safeguard children from harm by visiting homes and other residential settings. They might work alone or as part of a group of caseworkers. Child welfare experts can direct parents and guardians towards community services and provide counselling to guardians regarding their child’s care plan. They can assess foster and potential adoptive parents’ homes and resources in order to establish appropriateness for child placement.",
      subtitle4: "Community Outreach Worker",
      content4:"Workers who work in outreach might specialise in a variety of disciplines depending on their talents and experience. An outreach worker’s concentration might be on a particular population, such as the elderly, or a specific topic, such as health, safety, or education. Community outreach employees, for example, serve as a link between local residents and community groups. Youth outreach workers primarily work with teenagers and children in settings such as youth centres and schools.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Human welfare studies and services abroad</h1>
        <p>
          Interested in a career where you could help make the lives of others
          better? An education in human welfare studies and services equips you
          with the knowledge to do all that and much more!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>12% </strong>expected employment growth rate of social workers this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$51,760</strong>  median annual wage for social workers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Substance Abuse Counsellors</strong>  can earn up to AUD 100,000 per annum.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>78,000</strong>  employment opportunities are projected for social workers every year.
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

export default HumanWelfare;
