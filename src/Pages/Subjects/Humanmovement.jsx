import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HumanMovement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open or close
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
    color: "#4CAF50", // Attractive color choice
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
      title: "About Human Movement",
      content1:
        "Human Movement is the study of human motion and its recovery, focusing on restoring and optimizing functionality and well-being across the lifespan. It also covers the performance of humans in sports. This knowledge is utilized in physical education, athletic training, physical therapy, orthopedics, and physical medicine.",
      content2:
        "This field studies how to prevent conditions that impair normal movement. It also explores physiological, neural, and psychological adaptations to exercise, the impact of regular physical activity on chronic disease prevention, and the brain's control of movement.",
      content3:
        "The expertise in this area spans biophysical, behavioral, and socio-cultural knowledge to extend understanding of human movement and sports science.",
      content4:
        "Course modules may include Exercise Physiology, Biomechanics, Motor Control, Exercise Programming, Anatomy, and Sports Psychology.",
    },
    {
      title: "Is Human Movement right for me?",
      content1:
        "If you possess strong leadership skills and an interest in exercise, Human Movement is a fitting field. A human movement expert is patient, collaborative, and committed to achieving positive results for clients.",
      content2:
        "Professionals in this field are fascinated by muscle coordination, focusing on the interactions between muscles, ligaments, and joints. They should be realistic about clients' progress and adaptable in their strategies. If this resonates with you, a degree in Human Movement could be a perfect career path.",
    },
    {
      title: "Study options and costs",
      content1:
        "To enter the field of Human Movement, start with a bachelor's degree, which typically takes 3 to 4 years and costs between $24,228 and $59,970 annually in the US.",
      content2:
        "After completing your bachelor's degree, you may pursue a master's degree, usually taking 1 to 2 years and costing about $53,900 in the US.",
      content3:
        "A PhD in Human Movement, which takes 4 to 5 years to complete, can cost between $35,530 and $64,600.",
    },
    {
      title: "Future outlook",
      content:
        "The job market for Human Movement graduates is growing, driven by the increasing competitiveness of sports and rising awareness of nutrition. According to the U.S. Bureau of Labor Statistics, exercise physiologists' job market is projected to grow by 13%, faster than average. Additionally, 69,100 new jobs for fitness instructors and trainers are expected annually.",
    },
    {
      title: "Career pathways for Human Movement graduates",
      subtitle1: "Trainers and Fitness Instructors",
      content1:
        "Fitness instructors lead group exercise sessions at gyms and fitness centers, while personal trainers design personalized routines. They may also work in rehabilitation centers or hospitals to help patients recover mobility or enhance performance.",
      subtitle2: "Physical Education Teachers",
      content2:
        "As a physical education teacher, you'll teach students fitness and health subjects, coach sports, and connect education, nutrition, and health.",
      subtitle3: "Occupational Therapists",
      content3:
        "Occupational therapists help people with injuries or disabilities improve their daily lives, sometimes by designing adaptive exercises or recommending equipment.",
      subtitle4: "Physical Therapists",
      content4:
        "Physical therapists assist patients in recovering strength and mobility after injuries. They create exercise plans tailored to the specific needs of each patient.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Human Movement abroad</h1>
        <p>
          Human Movement is the academic exploration of human motion in various contexts, especially in sports. 
        </p>
        <p>It integrates the social, natural, and health sciences surrounding physical activity.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $47,940: Average annual salary of exercise physiologists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 69,100 projected job openings annually for fitness instructors and trainers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 39% projected growth in fitness instructor and trainer jobs
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 13% projected job growth for exercise physiologists by 2030
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
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

export default HumanMovement;
