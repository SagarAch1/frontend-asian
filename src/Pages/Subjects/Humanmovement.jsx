import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HumanMovement = () => {
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Human Movement",
      content1:
        "Human Movement is the field of study concerned with how humans move, its various aspects and recovery. Human Movement is focused on applying knowledge about mechanisms and methods of restoring and maximising human functional capacity and well-being across a lifespan. It also focuses on the abilities of humans to perform in sport activities. The new insights and knowledge of this field are used in physical education, athletic training, physical therapy, orthopedics, and physical medicine.",
        content2:"The study of human movement provides key insights about how to prevent illnesses that hinder the body’s capabilities to move normally. Additionally, it also investigates physiological, neural and psychological adaptations to exercise, the role regular physical activity plays in chronic disease prevention and management, and how the brain controls and coordinates everyday movements.",
        content3:"The expertise in this field spans the fields of biophysical, behavioral and socio-cultural enquiry to extend and apply knowledge and understanding about human movement and sports science.",
        content4:"Some common course modules students can expect to study are Exercise Physiology, Biomechanics, Motor Control, Exercise Programming and Prescription, Anatomy, Biomechanics, and Sports Psychology.",
    },
    {
      title: "Is Human Movement right for me?",
      content1:
        "If you have good leadership skills as well as an interest in the aspects of exercise, then the field of Human Movement is right for you. A human movement professional is patient with his clients, collaborative in terms of implementing different strategies to help his clients, and determined to help his clients to the maximum limit and to bring a positive change in their lives.",
        content2:"Human movement professionals are intrigued by the details and complexities of muscle coordination in human body. They constantly focus on the intricate coordination of muscles, ligaments and joints. An expert in Human Movement ought to be realistic in his goals in terms of his client’s progress and must consider the client’s limits of performing according to the strategies. Therefore, human movement professionals are adaptable and have strong ethical values. If this sounds like you, then to seek a degree leading to a professional career in this field is right for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "The first step towards pursuing Human Movement as a professional field is earning a bachelor’s degree. A bachelor’s in Human Movement science usually takes 3 to 4 years to complete and costs around $24,228 to $59,970 per year in the US.",
        content2:"After the completion of your bachelor’s program, you could enroll in a master’s programme to enter the field professionally. The master’s programme usually takes 1 to 2 years to complete and costs around $53,900 in the US.",


        content3:"Furthermore, you could apply for a doctorate programme to contribute to the research of Human Movement. A PhD in Human Movement takes around 4 to 5 years to complete and costs around $35,530 to $64,600.",
    },
    {
      title: "Future outlook",
      content:
        "As sports become more competitive and awareness about the importance of nutrition increases, Human Movement graduates have a massive job market. According to the U.S. Bureau of Labor Statistics, the exercise physiologists job market is projected to grow by 13% which is faster than the average. Additionally, a whopping 69,100 jobs are projected each year for fitness instructors and trainers! This all provides a clear indicator that the expertise of Human Movement is in high demand in a rapidly expanding job market.",
    },
    {
        title: 'Career pathways for Human Movement graduates',
        subtitle1: 'Trainers and Fitness Instructors',
        content1: 'As a fitness instructor, you will be required to lead groups in structured exercise routines, usually at gyms and other fitness centres. As a personal trainer, you will develop and oversee exercise routines for individuals. You might also work at rehabilitation centers, hospitals, or retirement homes assisting people to regain their mobility or help them improve physical performance.',
        subtitle2: 'Physical Education Teachers ',
        content2: 'As a physical education teacher, you will be required to help students exercise, and teach related subjects such as Personal Fitness. In addition to coaching students in various sports, you might also teach students about the connections between education, nutrition and health. ',
        subtitle3: 'Occupational Therapist',
        content3: 'Being an occupational therapist, you will help patients with injuries or disabilities in their everyday lives and in common settings such as in school or at work. In some cases, this means developing rehabilitative exercise routines, while some patients may need adaptive equipment. ',
        subtitle4: 'Physical Therapists',
        content4:'Physical therapists help patients, who have been injured regain their strength and abilities, a process that often takes months. Physical therapists also help patients complete exercise regimens tailored to their specific needs.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Human Movement abroad        </h1>
        <p>
        Human Movement is the academic study of how human beings move, in various contexts, especially in sports. This is an interdisciplinary field integrating aspects of social, natural and health sciences concerning physical activity. 






      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $47,940: average annual salary of exercise physiologists



          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong> 69,100 projected job openings for fitness instructors and trainers each year 



          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 39% projected growth in employment opportunities for fitness instructors and trainers  


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 13% projected growth of exercise physiologists in job market by year 2030 

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

export default HumanMovement;