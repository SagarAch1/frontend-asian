import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Beauty = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
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
      title: "About Beauty Care",
      content1:
        "Studying Beauty Care equips you with the expertise to manipulate the external appearance of clients to enhance their confidence. Students learn a variety of aesthetic and visual techniques they can apply on clients. A Beauty Care programme fosters competencies in the field of skin care, marketing, inner well-being, product management, makeup, cosmetics, and hair styling.",
      content2:
        "A degree in Beauty Care will assist you in developing tools and techniques to maintain healthy skin, eliminate skin and body defects, highlight attractive facial features, and execute the latest cosmetic procedures. During the course of their studies, students learn about human anatomy, human physiology, style factors, chemical properties of cosmetic products, beauty ethics, sale, marketing, product development, and beauty entrepreneurship. Unique courses like thalassotherapy, podiatry, and perfumery, as well as a wide range of optional certified workshops are also offered.",
    },
    {
      title: "Is studying Beauty Care right for me?",
      content1:
        "A degree pertaining to the science of beauty is an excellent choice for you if you have a keen interest in cosmetology, haircare, skincare, and aesthetics. It’s a constantly evolving field with rapid advancements in treatments that cater to a wide range of issues, the most prominent being aging. In order to excel in a Beauty Care programme, you will need to be creative, have a passion for cosmetics, and possess strong interpersonal skills.",
      content2:
        "A programme in Beauty Care will open up doors for you in the fields of cosmetology, beauty parlours, cosmetic industry, wellness sector, beauty copywriting, makeup artists and hairdressers.",
    },
    {
      title: "Study options and costs",
      content1:
        "You can study Beauty Care at various levels: certification, diplomas and bachelor’s. There are also dedicated schools oftentimes referred to as schools of cosmetology that offer training and courses.",
      content2:
        "You can opt for a diploma or certificate which ranges from 6 months to a year. Generally, you will have to have completed high school before you enrol in any type of beauty school or for a bachelor's degree. Beauty school combines both academic and practicums to prepare a student for a career in Beauty Care. The training is extensive and thorough. You are mentored by seasoned professionals in the field of Beauty Care. Both book learning and hands-on training will be part of your education. If you enrol in cosmetology school full-time, you will spend six to eight hours every day in class or training.",
      content3:
        "In contrast to a diploma, a bachelor’s in Beauty Care is more rigorous. After completing this degree graduates can execute a variety of activities and have a thorough understanding of various themes in the beauty business. Only a very few institutes offer degree programmes in Beauty Care.",

      content4:"Though school costs vary, most programmes cost around $10,000. For instance, two-year community colleges cost an average of $3,243 each year ($6,486 total) for in-state students, whereas four-year colleges cost an average of $9,037 per year for in-state students (nearly $36,000 overall). According to the American Association of Cosmetology Schools, aesthetician programmes typically cost between $3,000 and $10,000. (AACS).",

    },
    {
      title: "Future outlook",
      content1:
        "Cosmetic research and development, marketing, makeup artist, product management, and media professional are all career options. Starting wages for beauticians range from £20,000 to over £50,000 per year.",
      content2:
        "Furthermore, by 2028, the worldwide cosmetics market is predicted be worth $415.29 billion.",
      content3:"The projected growth in employment opportunities in the Beauty sector is 13% which is significantly faster than the average employment growth of all other occupations. It is easy to conclude that the minimal entry-barriers and relatively high salaries make this an attractive choice for many individuals.",
    },
    {
      title: "Career pathways for Beauty Care graduates",
      subtitle1: "Cosmetic Scientist",
      content1:
        "Public health educators are also known as ‘health promotion specialist’ and ‘community health consultant’. The key responsibility of a public health educator is to raise awareness and educate people about the practices that enhance well-being. Public health educators work directly with public, in healthcare facilities. As a public health educator, you will be responsible to plan strategies for promoting well-being and for communities at greater risk of health conditions.",
      subtitle2: "Beauty Editor",
      content2:
        "Public health nurses are also known as community nurses. They are registered nurses who educate the public about health concern and how to prevent them. They also administer healthcare services and advocate for healthcare betterment.",
      subtitle3: "Beauty Therapist",
      content3:
        "A beauty therapist provides body treatments to improve and enhance the appearance of the skin, nails, and hair. They also counsel clients on how to maintain the vigour of their skin and nails at home in between sessions. This employment frequently includes persuading clients to purchase things from their salon making interpersonal skills indispensable to the trade. Client’s report feeling more beautiful and confident as a result of their work.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Beauty Care abroad</h1>
        <p>
          Do you find yourself constantly being drawn to subjects like skincare,
          
        </p>
        <p>haircare, or cosmetology? If yes, then a degree in Beauty Care will
          </p>
          <p> help you build a career on what you love. You will learn extensively
          about beauty best-practices and cosmetics.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 670,000 people are employed by the Beauty services
            sector in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Estimated worth of the global Beauty industry by
            2028
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary of a cosmetic scientist in
            the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 13% projected annual growth rate for the beauty
            sector
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

export default Beauty;
