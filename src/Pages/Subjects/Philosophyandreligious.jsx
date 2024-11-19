import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Philosophyandreligious = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/religious.jpg)`,
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
      title: "About Philosophy and Religious Studies",
      content1:
        "Philosophy and Religious Studies focus on helping students develop critical thinking abilities. Students gain insight into various cultures, learn to articulate their thoughts effectively, and build a habit of thoughtful reading.",
      content2:
        "This field addresses profound questions like the meaning of human existence, the nature of the world, and how individuals relate to their society. It explores themes such as class, power, identity, ethics, and gender.",
      content3:
        "This subject allows you to reflect on your own beliefs while understanding why others hold differing views. It encourages a deeper examination of the values that guide human actions.",
    },
    {
      title: "Is Philosophy and Religious Studies right for me?",
      content1:
        "This field is ideal for students who are fascinated by the ideologies and belief systems that shape societies. Successful students are often avid readers, deeply curious, and enjoy tackling abstract problems. They excel at forming connections between different ideas to draw their own conclusions.",
      content2:
        "If you resonate with these characteristics, this course could be a perfect fit for you.",
    },
    {
      title: "Study options and costs for Philosophy and Religious Studies",
      content1:
        "In the United States, Philosophy and Religious Studies programs are available at 1,193 institutions. Most schools offer degrees such as associate (2 years), bachelor's (4 years), master's (1-3 years), and doctoral (4-7 years).",
      content2:
        "Undergraduate tuition for these programs averages around $28,740 per year, while graduate studies cost about $20,411 annually.",
      content3:
        "In the UK, international students pay an average tuition fee of £18,950 annually for a Philosophy and Religious Studies degree. For master's programs, fees average around £21,000, and doctoral programs range from £15,000 to £30,000 per year.",
    },
    {
      title: "Future Outlook for Philosophy and Religious Studies Graduates",
      content1:
        "Studying Philosophy and Religious Studies equips students with strong analytical and critical thinking skills, which are highly valued in numerous careers. The versatility of these skills means that graduates are well-suited for a wide range of professional paths.",
      content2:
        "With increasing automation in many industries, the demand for critical thinkers is on the rise. In the 2019-2020 academic year, Philosophy and Religious Studies ranked as the 29th most popular major, but demand is expected to grow as more opportunities arise for graduates. Employment for Philosophy and Religious Studies graduates is expected to increase by 10.5%.",
    },
    {
      title: "Career Paths for Philosophy and Religious Studies Graduates",
      subtitle1: "Community Development Worker",
      content1:
        "As a community development worker, you'll help communities improve living standards and address social issues. You'll work to ensure that people's voices are heard in decision-making processes and develop strategies for community growth.",
      subtitle2: "Editorial Assistant",
      content2:
        "A degree in this field enhances your communication skills. If you're skilled in writing and grammar, becoming an editorial assistant could be a great career choice. You'll assist in editing and summarizing texts, articles, and scripts.",
      subtitle3: "Journalist",
      content3:
        "Journalists research and report on current events, presenting news in an accessible format. You'll also have the opportunity to engage with leaders and experts to ask questions that aim to improve society.",
      subtitle4: "Youth Worker",
      content4:
        "Youth workers help young people understand their identity and provide support for their social and educational development. You'll work in schools, community centers, and conduct training for both young people and their families.",
      subtitle5: "Chaplain",
      content5:
        "Chaplains offer spiritual guidance and counseling to those in need. If you're empathetic, a good listener, and enjoy helping others navigate personal challenges, a career in chaplaincy may be fulfilling.",
      subtitle6: "Lecturer",
      content6:
        "As a lecturer, you'll teach students in specialized areas like metaphysics, epistemology, logic, or comparative religion. Teaching methods may include lectures, seminars, e-learning, and practical demonstrations, utilizing multimedia tools to enhance the learning experience.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Philosophy and Religious Studies abroad</h1>
        <p>
          Philosophy and Religious Studies explore the fundamental ways people
          interpret life, guiding their actions and behavior.
        </p>
        <p>
          This discipline examines how individuals and societies understand the
          world and the beliefs that shape their interactions.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>70% of graduates find employment right after
            completing their degree.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 10.5% increase in job opportunities for graduates
            in Philosophy and Religious Studies.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $6600 is the average annual salary for graduates
            in this field.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Increase in enrollment in Philosophy and Religious
            Studies programs.
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

export default Philosophyandreligious;
