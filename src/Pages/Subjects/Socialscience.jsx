import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SocialScience = () => {
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
      title: "About Social Science",
      content1:
        "Social Science is an interdisciplinary field that includes numerous subjects such as psychology, economics, politics, law, linguistics, history, anthropology, and sociology. This field is known to be developed in the 18th century. Social Science helps you perceive society and quantify it as a whole. This aids in viewing the progression of a society’s decline as well as its enhancement. It will as a subject, enhance your ability to think critically, analyse and develop your problem-solving skills.",
      content2: "Social Science, being an umbrella term, can lead you to study psychology that will allow you to study and explore the mind and behavior of people. Another subject that this domain offers is economics which will let you examine the relationship between the process of producing as well as exchanging of good and the individual handling the two. It will also allow you to understand the microeconomics and macroeconomics in detail. You can become an analyst who plays an integral role in shaping the economic policies of the country. Similarly, it opens door for you to study the political scene of a country and understand different political trends.",
      content3: "Many careers ranging from legal services, political occupations, counseling, and many other human services require you to study this field of academia. The salary bracket varies from USD 50,000 to USD 100,000+ for these careers. The best part about studying this particular subject is the flexibility of career paths. With varied choices, you can choose the best one suited for your personality and skillset.",
        },
    {
      title: "Is Social Science right for me?",
      content:
        "If you want to pursue social sciences, you must have good communication skills, research skills, writing ability, interpersonal skills, listening skills and most of all curiosity. If you have all these, this field of study will only make you shine professionally.",
    },
    {
      title: "Social Science study options and costs",
      content1:
        "In United States, 529 colleges are offering Social Science programmes. You can do a bachelor’s, master’s as we To get into a Social Sciences programme, you do not require a pre-requisite degree. You can begin by simply enrolling in a Bachelor’s degree programme. The perk that also follows this degree is that you can set your majors as well as a minor subject that can help shape your career choices. In the US, a bachelor’s in Social Science will cost around USD 17,000 a year while in Australia it might average AUD 30,000 a year.",
     
    },
    {
      title: "Future outlook",
      content:
        "In our dynamic world, new challenges as well as innovative solutions are emerging every day in every field ranging from economics to sociology. There is thus a large demand for Social Science majors to help research the impact of challenges faced in various fields and the efficacy of our solutions. In the coming years, this field will not only grow but also prosper. In addition to a steady demand for social scientists, the salaries will also be competitive and remain high over time. Employment opportunities are expected to increase by 13% in the near future for Social Science majors.",
    },
    {
      title: "Career pathways for Social Science graduates",
      subtitle1: "Sociologist",
      content1:
        "Sociologists study the societal patterns involving human interaction and cultural growth. This is a research-based profession, which involves interviewing people, collecting data, analysing data, and drawing conclusions.",
      subtitle2: "Law and Justice Professional",
      content2:
        "Social Science majors can opt to work as lawyers, paralegals or as legal assistants. Within this domain, you will find various career paths that pay well and are fulfilling. You may also take the road to being a counselor or a judge.",
      subtitle3: "Economists",
      content3:
        "Economists have a very important role to play in the strategic planning of a government. Their primary role is to analyse data and forecast economic trends. They do this by analysing vast amounts of data related to work productivity, wages, supply and demand and so on. Findings of economists play a role in legislation and policy making.",
      subtitle4: "Social worker",
      content4:
        "Social workers play an important role in the healthcare systems as well as non-profit organisations. Their help people overcome challenges such as drug addiction, poverty, disability and so on. Social workers must have at least a bachelor’s degree to practice.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Social Science abroad</h1>
        <p>
          If you want to learn about the behaviours and interactions of people
          belonging to different backgrounds and how this behavior influences
          the development of culture and economy, then pursuing Social Science
          will help you satiate your intellectual thirst.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 13% growth in employment opportunities in the
            Social Science job market
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $85,847: average annual earning of a social
            scientist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $105,630: average annual pay of economists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Average annual income of data analysts
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

export default SocialScience;
