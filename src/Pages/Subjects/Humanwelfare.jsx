import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HumanWelfare = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and closed
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
    color: "#4CAF50",
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
      title: "About Human Welfare Studies and Services",
      content:
        "Human Welfare Studies and Services cover topics like social justice, human rights, child welfare, psychology, and general education. The diverse subjects aim to cultivate critical thinking for intercultural work environments. This field teaches students about the social, governmental, and economic frameworks in which social policies are developed and implemented. It also involves learning how to plan welfare programs and manage resources to address individual and community needs.",
    },
    {
      title: "Is Human Welfare Studies and Services Right for Me?",
      content1:
        "Those passionate about making a meaningful impact often find human welfare studies fulfilling. It’s ideal for individuals open to new experiences and ready to engage with diverse cultural ethics. Graduates work in non-profit, private, and public organizations, including family services, education, healthcare, and elderly care.",
      content2:
        "Strong self-awareness and familiarity with current models are essential to addressing new challenges effectively, as is honing analytical and inquiry skills.",
    },
    {
      title: "Study Options and Costs in Human Welfare Studies and Services",
      content:
        "There are several study options in this field: a 4-year bachelor’s degree in Human Services, post-graduate certificates, or a 2-year master's in Social Welfare. Typical annual tuition for a bachelor’s degree is around AUD 28,640 in Australia, CAD 35,000 in Canada, and USD 30,300 in the US.",
    },
    {
      title: "Future Outlook",
      content1:
        "The demand for social workers is expected to grow 12% over the next decade, faster than average. A shortage of qualified professionals is anticipated, especially for higher-level positions in human services. With aging populations and global health issues, human welfare is becoming one of the most stable fields.",
      content2:
        "In fact, a shortage of one million social care professionals is expected in the US by 2025 due to aging populations and increasing health needs.",
    },
    {
      title: "Career Paths for Graduates in Human Welfare Studies and Services",
      subtitle1: "Family Services Advocate",
      content1:
        "Family Services Advocates work with families of incarcerated individuals, helping maintain healthy parent-child relationships through community resources.",
      subtitle2: "Substance Abuse Counselor",
      content2:
        "Substance Abuse Counselors assist individuals in recovering from addiction, offering guidance and support. Many counselors have personal connections to addiction and work to help others in a compassionate, non-judgmental way.",
      subtitle3: "Child Welfare Specialist",
      content3:
        "Child Welfare Specialists assess home environments to ensure child safety and connect families to community resources. They may work independently or as part of caseworker teams.",
      subtitle4: "Community Outreach Worker",
      content4:
        "Community Outreach Workers focus on specific demographics, linking residents to community programs. Youth outreach workers, for example, work with children and teens in schools and youth centers.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Human Welfare Studies and Services Abroad</h1>
        <p>
          Considering a career dedicated to improving others' lives? Human Welfare
        </p>
        <p>
         Studies and Services offer the knowledge to do that and more!
        </p>
       
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>12%</strong> expected growth rate for social work employment over the next decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$51,760</strong> median annual salary for social workers.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Substance Abuse Counselors</strong> can earn up to AUD 100,000 annually.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>78,000</strong> projected annual job openings for social workers.
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
