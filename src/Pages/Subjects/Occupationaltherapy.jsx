import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const OccupationalTherapy = () => {
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
      title: "About Occupational Therapy",
      content1:
        "Occupational Therapy is a type of rehabilitation that assists people with disabilities in resuming important everyday activities. Instead of depending on medications or surgical procedures, occupational therapists focus on patient education, functional skill training, and involvement in everyday activities.",
      content2:"Some common course modules that student can expect to study are Kinesiology, Physiotherapy, Human Movement, Psychology, Biology, Anatomy, and Cell Biology.  ",
    },
    {
      title: "Is Occupational Therapy right for me?",
      content1:
        "If you enjoy studying the fundamentals of human movement and how exercise and physical activity affect the physiology of human movement then you are likely to certainly excel in this field. Another exciting part about studying Occupational Therapy is the fieldwork that it entails. During your Occupational Therapy degree, you will most likely spend a considerable amount of time under a licensed occupational therapist.",
      content2: "Another important thing to keep in mind is that Occupational Therapy, like most healthcare professions, requires lifelong education. Chances are you will most likely pursue a postgraduate education to get a good job and even then, most occupational therapists keep upgrading their knowledge and skills.  ",
      content3:"If you are an empathetic individual and are motivated by the desire to help others and have strong interpersonal skills, then this field of study is the right fit for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "A bachelor’s in Occupational Therapy is 3 to 4 years in duration. It provides you with comprehensive knowledge of all the theoretical underpinnings and best practices of Occupational therapy.",
        content2:"Students who have completed their bachelor’s can opt to pursue a master’s degree in Occupational Therapy. There is no specific undergraduate degree requirement. However students with education and healthcare degrees are preferred. A Master of Occupational Therapy (MOT) or a Doctor of Occupational Therapy (OTD) degree is also offered by a number of top universities in the developed world. Occupational Therapy programmes can cost anywhere from $65,000 to $200,000.",
    },
    {
      title: "Future outlook",
      content1:
        "Occupational Therapy jobs are on the rise. According to the U.S. Bureau of Labor Statistics (BLS), the employment for occupational therapists is expected to increase by 17% from 2020 to 2030. More than 10,100 job openings are also projected each year from 2020 to 2030. ",
        content2:"Occupational therapists work in hospitals around 29% of the time, while 25% work in rehabilitative offices with physical therapists, audiologists, and speech therapists. The remaining 46% work in places like schools, home health care, skilled nursing institutions, and other places. These figures show that occupational therapists are in high demand and that the specialty pays well in a variety of settings.",
    },
    {
      title: "Career pathways  for Occupational Therapy graduates",
      subtitle1: "Paediatric Occupational Therapist",
      content1:
        "Paediatric occupational therapists provide occupational therapy to children. They identify the causes of delays or limitations, particularly in the areas of fine motor abilities, cognitive skills, social development, and self-care routines.",
      subtitle2: "Occupational Therapy Assistant",
      content2:
        "Occupational therapy assistants provide assistance to occupational therapists. They help patients complete therapeutic activities such as stretches and exercises. They keep track of patient progress and help patients become independent.",
      subtitle3: "Director of Rehabilitation",
      content3:
        "Hospitals, nursing homes, and long-term care institutions have Directors of Rehabilitation who manage rehabilitation programmes and employees. Directors of Rehabilitation are responsible for managing processes and activities in physical therapy, occupational therapy, and speech therapy programmes at healthcare facilities.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Occupational Therapy abroad</h1>
        <p>
          Occupational Therapy (OT) is a branch of healthcare that focuses on
          resolving issues that limit a person's ability to do the things that
          matter to them, such as getting dressed, eating, moving around the
          house, and being productive.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of an occupational therapist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Estimated worth of the occupational therapy market
            in 2022
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 17% projected growth in employment for
            occupational therapists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 10,100 openings for occupational therapists every
            year
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

export default OccupationalTherapy;
