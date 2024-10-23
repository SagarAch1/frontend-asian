import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const QualitativeEconomics = () => {
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
      title: "About Qualitative Economics",
      content:
        "Qualitative Economics is a type of economics through which data is collected using questionnaires, interviews, or observation, and frequently appears in narrative form. For example, it could be notes taken during a focus group on the quality of the food at a cafe, or responses from an open-ended questionnaire. The data may be in the form of descriptive words that can be examined for patterns or meaning, sometimes through the use of coding. This degree will prepare students in theories, methodologies, and methods of qualitative research. Graduates will be poised to be leaders in their respective fields and to share with others, through future scholarship, the efficacy of Qualitative Economics.",
    },
    {
      title: "Is Qualitative Economics right for me?",
      content:
        "Qualitative Economics uses subjective judgment to analyse a company's value or prospects based on non-quantifiable information, such as management expertise, industry cycles, strength of research and development, and labour relations. You will study economics with a qualitative research focus. If understanding how economic agents and economies work is interesting to you, then Qualitative Economics is the right choice for you.",
    },
    {
      title: "Study options and costs",
      content:
        "Following a bachelor in economics, you can choose opt for a Master's degree in Qualitative Economics. This degree focuses on gaining a deep understanding of current economic theory along with economic analysis and modeling methods. It prepares graduates for a career path in economics, banking and finance. A master's in Qualitative Economics usually takes about two years to complete and the cost is around $15,400 per year in the US.",
    },
    {
      title: "Future outlook",
      content:
        "Qualitative Economics graduates are highly sought after in a variety of sectors as most large scale enterprises utilise economic analysis and quantitative data to forecast and plan for business. In fact, the employment growth for economists is 13% which is substantially faster than the average of all other occupations. ",
    },
    {
      title: "Career pathways for Qualitative Economics",
      subtitle1: "Economic Consultant",
      content1:
        "Economic consultants use analytical and research skills to carry out studies regarding economic scenarios. They analyse industry trends to help organisations improve their performance. They might work for organisations in a variety of industries, including business, finance, healthcare, education, the government, and more. The average annual salary for an economic consultant is $76,487.",
      subtitle2: "Credit Analyst",
      content2:
        "Credit analysts conduct analyses of prospective clients to assess the risks involved with loaning funds to those people or businesses. They take into account economic trends and factors impacting the region, industries, and competitors of prospective clients. Credit analysts earn an average annual salary of $73,650.",
      subtitle3: "Business Reporter",
      content3:
        "Business reporters research, write and broadcast stories about business leaders, companies, industry trends, economic developments, and financial markets. The capitalise on their unique insight into economics to write compelling and lucid articles. The average annual salary for business reporters is $61,862.",
      subtitle4: "Research Analyst",
      content4:"Research analysts tap knowledge of industry trends to assess how products or services might fare under various economic conditions. These analysts apply many of the skills that economics majors develop, such as the use of presentation software and graphical representation, as well as writing skills. The average annual salary of a research analyst is $63,790.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Qualitative Economics abroad</h1>
        <p>
          Qualitative Economics is a vibrant blend of the contemporary economics
          and qualitative methods. The subject is designed to help students
          analyse economic data in a quantitative manner, equipping them with a
          unique skills to succeed in the job market.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 13% projected employment growth of economists this
            decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>$105,630: average yearly salary of an qualitative
            economist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> The salary of top qualitative economists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 16,000 job openings projected for economists this
            decade
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

export default QualitativeEconomics;
