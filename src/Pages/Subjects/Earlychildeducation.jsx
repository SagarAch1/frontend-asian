import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const EarlyChildhoodEducation = () => {
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
      title: "About Early Childhood Education",
      content1:
        "Early Childhood Education degrees equip students to work with children from two to eight years old. Learn about the major developmental phases that children go through and how you may help young pupils develop important cognitive, emotional, and physical skills.",
      content2:
        "Early Childhood Education programmes will allow you to study early childhood education curriculum theories and pedagogies, child development, health and wellness, diversity and inclusion, professional studies, and teaching and learning in the areas of literacy, mathematics, science, and the arts.",

    },
    {
      title: "Is Early Childhood Education right for me?",
      content1:
        "If you are someone who believes in the power of activity-based learning, this field will teach you how to harness the power of activities to advance learning in tiny humans at an age where they are most receptive. Early childhood educators design classes around play and hands-on activities, which are the major ways that young children learn. Games, music, artwork, videos, literature, and, increasingly, computers will be used by early childhood teachers.",
      content2:"You'll discover inventive methods to assist young children master the skills they need for their intellectual, emotional, and physical growth. If this is something you find yourself drawn to, then this field is the right choice for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "There are 4 main types of degrees being offered when it comes to Early Childhood Education: associate’s degree which lasts for 2 years, bachelor’s degree which lasts for 4 years, master’s degree which lasts 2 years and doctoral degrees which last anywhere from 3 to 6 years.",
      content2:"The 2-year associate degree equips you for a variety of entry-level positions in Early Childhood Education. It is the least expensive degree to obtain, and it may often be used to replace the first two years of a bachelor's degree programme if you choose to pursue one. This degree will qualify you for entry-level teaching and teaching support roles, but may not be sufficient for development within a school or organisation.",
      content3:"A bachelor’s in Early Childhood Education will cost you on average anywhere between $29,000-$65,000 depending on the length of the programme and the institute.",
      content4:"If you want to apply for more complex positions or want to go for research, a master’s and PhD is recommended. With a master's degree, you can also begin your profession at a higher level and rise more swiftly. An online master's degree in Early Childhood Education generally costs less and total tuition should range between $11,000 and $24,000. Depending on their preferences, students often specialise in curriculum and instruction, technological application in learning, educational administration, or organisational leadership.",
    },
    {
      title: "Future outlook",
      content1:
        "Kindergarten and early primary teachers are expected to gain 86,000 new jobs over the next decade, while preschool instructors will gain over 50,000 new positions, according to the U.S. Bureau of Labor Statistics.",
      content2:"This translates to a job growth rate of 7% to 10%, which is comparable to the national average for all other occupations. With abounding employment opportunities, competent applicants may look forward to a rewarding career in Early Childhood Education, where they will spend their days assisting young children in realising their full potential.",
    },
    {
      title: "Career pathways for Early Childhood Education graduates",
      subtitle1: "Early Childhood Education Teacher",
      content1:
        "Early childhood educators focus on the learning, development, and social and physical needs of children. These educators create a secure and comfortable atmosphere in which children may develop social, physical, and adaptive skills in addition to early academics.",
      subtitle2: "Childcare Centre Director",
      content2:
        "Directors of preschools and day-care centres monitor and lead personnel, create programme plans, supervise daily activities, and prepare budgets. They are in charge of the whole programme at their facility, which may include before- and after-school care. This is a role that you can apply for with more advanced degrees such as a master’s or PhD.",
      subtitle3: "Early Childhood Education Teacher",
      content3:
        "Early childhood researchers study and analyse services and practises that have an influence on the outcomes of young children and the early childhood programmes that support them and their families.",
    
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Early Childhood Education abroad
        </h1>
        <p>
        Early Childhood Education is the field of study that deals with learning for children from birth till the age of eight. There are many different early education programmes you can choose from offering bright career advancement opportunities.



        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $480 billion estimated worth of the global Early Childhood Education market by 2026


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average annual salary of a pre-school teacher 


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 124,300 job openings for kindergarten and early elementary teachers over the decade


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 7% job growth rate for kindergarten and early elementary teachers


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

export default EarlyChildhoodEducation;
