import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const AgricultureScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
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
    color: "#4CAF50", // Adjust color to be more appealing
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
      title: "Introduction to Agriculture Science",
      content:
        "Agricultural Science covers areas like Animal Science, Plant & Soil Science, and Agricultural Engineering. Degrees are available at bachelor's, master's, and doctoral levels. Those studying in this field learn ways to enhance crop sustainability, develop new food items, and address environmental issues affecting agricultural products.",
    },
    {
      title: "Is Agriculture Science Suitable for Me?",
      content:
        "Agricultural Science imparts skills such as adaptability, problem-solving, critical thinking, teamwork, and analytical thinking. It also provides technical and business skills combined with environmental and life science knowledge, preparing students for their careers. If you’re drawn to working close to nature and promoting a green economy, this subject may appeal to you.",
    },
    {
      title: "Agriculture Science Study Choices and Costs",
      content1:
        "After high school, students can begin a bachelor’s degree in Agricultural Science. The courses focus on biological and agricultural sciences, livestock management, and agribusiness. Typical coursework includes livestock biometrics, agricultural research and statistics, agricultural microeconomics, business management, and marketing. The program lasts four years and can cost up to $180,000.",
      content2:
        "After obtaining a bachelor’s degree, students may pursue a master’s degree in a chosen field. This advanced degree also enables independent research and may lead to teaching roles. Coursework typically covers agricultural technology, food chain theory, research methods in agriculture, plant pathology, pest control, water science, preventive veterinary care, biostatistics, and agricultural leadership. Students must submit a research paper at the end. The program spans two years and may cost up to $72,000, depending on the institution.",
      content3:
        "Students wishing to specialize further and conduct research in a specific area of Agricultural Science may pursue a PhD. Typical specializations include environmental risks in agriculture, agricultural statistics, animal management, agribusiness, and soil-plant relationships. This program is research-oriented and concludes with a dissertation. The degree takes three to four years and may cost up to $98,000.",
    },
    {
      title: "Future Job Outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, jobs for agriculture/food scientists and agricultural engineers are expected to grow by 9% and 5%, respectively. Growing population and rising demands for efficient production drive the need for agricultural scientists and engineers, making graduates in Agricultural Science in demand.",
    },
    {
      title: "Career Options for Agriculture Science Graduates",
      subtitle1: "Agricultural Equipment Technician",
      content1:
        "Technicians maintain, install, and repair machinery and tools, including preventive maintenance tasks like refueling, battery replacement, oil changes, and lubrication. The average annual salary is around $64,570.",
      subtitle2: "Crop Manager",
      content2:
        "Crop managers oversee planting, fertilizing, irrigation, and harvesting schedules, coordinating teams of growers and workers. Their responsibilities include managing equipment and supplies, with an average annual salary of $85,380.",
      subtitle3: "Environmental Engineer",
      content3:
        "Environmental engineers analyze soil and water conditions and develop sustainable farm methods. The average salary for this role is $96,820 per year.",
      subtitle4: "Research Scientist",
      content4:
        "Agriculture research scientists, often food scientists, develop processes for food production, packaging, and storage, assess nutrition, and explore new food sources. They earn about $80,650 per year.",
      subtitle5: "Zoologist/Wildlife Biologist",
      content5:
        "Zoologists and wildlife biologists study animals and ecosystems, observing physical traits, behaviors, and human impacts. The average salary for a zoologist is $70,700.",
    },
  ];

  return (
    <div>
      {/* Header with background image */}
      <div style={sectionStyle}>
        <h1>Study Agricultural Science Abroad</h1>
        <p>
          Agriculture has been the backbone of human civilization and a major employment source. 
        </p>
        <p>A degree in agricultural science explores the balance between society and nature.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>Average annual salary for agricultural engineers in the US</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>Average annual salary for agricultural engineers in the US</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>Projected growth for animal, plant, and soil scientists over the next decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>Total value of the global agriculture industry</p>
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
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

export default AgricultureScience;
