import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SocialJustice = () => {
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
      title: "About Social Justice",
      content:
        "A Social Justice degree focuses on the social disparity in the human society and the ways to fix them. Students learn about the political and ethical contexts of social work while working to eradicate problems like inequity, poverty, discrimination and injustice. Social Justice can be pursued on the bachelor’s, master’s and doctoral levels. This degree will also introduce students to the concept of social welfare as they will interact with the marginalised communities and advocate for their rights.",
   
    },
    {
      title: "Is studying Social Justice right for me? ",
      content:
        "A Social Justice degree will imprint admirable skills such as those of patience, building of trust, open-mindedness, an appreciation for diversity, active listening, report writing, a sense of humour, communication skills and most importantly, empathy. Majority of these skills are useful and transferable to the professional sector. Thus, this degree might be right for students who aim to become better versions of themselves by aiding in the innovation, reformation and advancement of society.",
    
    },
    {
      title: "Study options and costs ",
      content1:
        "Students seeking to do practical work in the field of Social Justice must have a bachelor’s degree. The duration of this programme is 4 years and it lays out the entire foundation of community and social work. The general core modules offered in this degree are social service systems, statistics for social workers, human behaviour and social environment, theoretical principles of social justice, diversity and persecution in a social work context, and social movements. The average cost of this degree in the US is $28,000-35,350 per year, depending upon the university you choose.",
      content2:
        "Students who wish to engage critically in research and theory on issues pertaining to Social Justice might aim for a masters in it. The duration of this programme is 2 years and it involves the selection of your desired subject of specialisation. Some of the core and optional modules offered for this degree are: sociology of gender, sexuality and race, rights of minorities and immigrants, child welfare, mental and physical disability, critical race studies and contemporary issues in Social Justice. The degree will reach completion with a thesis, which is based on original research. The cost of pursuing this degree in the University College London, UK is $32,000-34,000 for international students.",
      content3:
        "The doctoral level of Social Justice is based on independent research on a particular course of the student’s interest followed by a dissertation. The duration of this programme is usually 3-5 years. The diverse community of scholars unites students and faculty across academic boundaries to strategically create social change that is democratic and just. The interdisciplinary doctoral program in social justice prepares future scholars and change agents to address complex social problems and become tomorrow's leaders. Some of the core courses usually available are data analysis for social justice research, justice research methodology, theoretical perspectives on Social Justice and criminal justice. The average cost of a doctoral degree in this subject in the US is $40,000-120,000 per year, depending upon the university you choose.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, employment in community and social service occupations is projected to grow 12 percent from 2020 to 2030, faster than the average for all occupations, adding about 346,900 jobs. This increase will result due to a spike in the demand for social workers in schools, homes and healthcare centres. Hiring of social workers is estimated to expand as more people seek treatment for mental illness, substance and domestic abuse along with the ageing population that needs to be cared for.",
      
    },
    {
      title: "Career pathways for Social Justice graduates",
      subtitle1: "Journalist",
      content1:
        "The main responsibilities of a journalist include researching, interviewing, reporting and writing to inform the public of current events. Journalists that focus on social justice share stories of vulnerable populations, expose injustices and work to ensure that societal powers are accountable for their actions. Their average salary in the US is $48,370 per year.",
      subtitle2: "Community developer",
      content2:
        "Community developers work with marginalised communities by designing projects, assisting in funding distribution and uniting members of the community. Responsibilities include assessing community needs, researching local trends, working with shareholders, understanding legal regulations and developing plans. Their average salary in the US is $61,835 per year.",
      subtitle3: "Analyst",
      content3:
        "Policy analysts research about local and national trends as it relates to social, economic, international and other political issues. Through this research, they are able to raise public awareness, influence public policy and political events. They also evaluate current policies and draft reviews based on their research to help with policy development and the implementation of new programmes for the betterment of the community. Their average salary in the US is $83,380 per year.",
        subtitle4: "Social worker",
      content4:"A social worker is a professional who works with individuals and families with the goal of improving their lives by teaching mechanisms to overcome abuse, unemployment, mental illness, abuse, addiction and trauma. Their average salary in the US is $50,400 per year.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Social Justice abroad</h1>
        <p>
          If you believe that helping the community and being a beacon for
          change is your calling, then studying Social Justice may be the right
          choice for you. It focuses on social policy, politics, welfare and
          mental health.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Median annual wage of social and community service
            workers in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 15% increase in employment of social and community
            service workers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> projected employment of social workers in the US
            from 2020-2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> High satisfaction rate among social justice
            workers
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

export default SocialJustice;
