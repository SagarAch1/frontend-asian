import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SportsScience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the expansion
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/sport.jpeg)`,
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
    color: "#4CAF50", // Color to attract attention
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Sports Science",
      content:
        "Sports Science is a multidisciplinary field integrating Physiology, Psychology, Bioengineering, Chemistry, and Anatomy. Though it is relatively new, it has rapidly gained popularity as sports and fitness are increasingly taken seriously. With technological and medical advancements shaping the sports world, it continues to receive substantial investment.",
    },
    {
      title: "Is Studying Sports Science right for me?",
      content:
        "A degree in Sports Science covers the body's and mind's response to exercise. Upon graduation, you'll apply this expertise across various careers. Expect hands-on practical work, lab sessions, and theoretical lessons, where you'll critically assess information, design studies, gather data, and interpret the results.",
    },
    {
      title: "Study options and costs",
      content1:
        "To pursue Sports Science, you need to have completed a high school diploma from an accredited institution. Afterward, you can apply for a bachelor’s degree in Sports Science.",
      content2:
        "A Bachelor's degree in Sports Science typically spans 130-140 credit hours over four years (8 semesters) and costs up to $126,240.",
      content3:
        "Some sports careers may require postgraduate study. For instance, becoming a sports and exercise psychologist requires relevant accredited psychology qualifications. To become a sports coach, you'll need to complete a coaching certification from your sport's national governing body.",
      content4:
        "A Master's degree can also enhance your expertise in specific areas, such as Sports Biomechanics or Musculoskeletal Sports Science.",
    },
    {
      title: "Future outlook",
      content:
        "Graduates in Sports Science often work in sports, fitness, coaching, and education. However, they also have opportunities in various other sectors. Management is another common career choice. A degree in Sports Science develops transferable skills like communication, teamwork, time management, and leadership. Employers hiring sports scientists include gyms, sports clubs, educational institutions, and hospitals.",
    },
    {
      title: 'Career Pathways for Sports Science graduates',
      subtitle1: 'Sports Coach',
      content1: 'As a coach, you’ll guide athletes of all ages and skill levels across different sports. Whether at schools, nurseries, or sports teams, you could work in a variety of settings.',
      subtitle2: 'Sport Nutritionist',
      content2: 'Sports nutritionists work with elite athletes, teams, and the general public to optimize their health and performance. This job is highly varied, involving diet planning, body composition assessments, and nutrition education. The average salary for a sports nutritionist is $60,427.',
      subtitle3: 'Sport Therapist',
      content3: 'As a therapist, you will prevent, assess, treat, and rehabilitate musculoskeletal injuries, working with professional or amateur athletes, or in private practice. The average annual salary for a sports therapist is $78,054.',
      subtitle4: 'Personal Trainer/Conditioning Coach',
      content4: 'Personal trainers help clients achieve health and fitness goals, whether its performance enhancement for athletes or assisting with rehabilitation. Trainers monitor fitness progress, conduct fitness testing, and create recovery plans. The average salary is $63,961.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Sports Science Abroad</h1>
        <p>
          Sports Science examines how the body responds during exercise and how physical activity 
        </p>
        <p>promotes overall health. It integrates Physiology, Psychology, Biomechanics, and Nutrition.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Current estimated worth of the global sports industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average salary of sports scientists: $83,535
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Top sports scientists' annual salary
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 1,500 job openings projected for sports scientists annually
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
                {item.subtitle4 && (
                  <div style={faqSubtitleStyle}>{item.subtitle4}</div>
                )}
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

export default SportsScience;
