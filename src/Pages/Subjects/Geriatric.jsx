import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const GeriatricStudies = () => {
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
      title: "About Geriatric Studies",
      content1:
        "Ageing and the science behind it will be the primary subject of focus of Geriatric Studies. Geriatrics, often known as Geriatric Medicine, is a medical speciality that focuses on the care of the aged. Its goal is to improve the health of the aged by preventing and treating illnesses and impairments. Nurses, physician assistants, pharmacists, social workers, and a variety of other geriatric health professionals frequently collaborate with geriatricians.",
        content2:"Some common course modules students can expect to study are Anatomy, Psychology, Physiology, Nutrition, Exercise, Pain Management, and the study of age-related diseases such as Dementia, Heart Failure, Frailty, Arthritis, Cataracts, and Osteoporosis.",
      
    },
    {
      title: "Is Geriatric Studies right for me?",
      content1:
        "Obtaining a bachelor's degree is the first step towards becoming a geriatrician. Students will pursue an undergraduate degree after the completion of their secondary education. The bachelor’s degree is recommended to be in a science field such as Biology, Chemistry, or Psychology. After this you will clear your medical college entrance exam to secure admission into a medical school. A four-year medical school programme is followed by a three-year residency. Following residency, a doctor can either work for a period or apply to a geriatric medicine fellowship programme right away.",
        content2:"Geriatric Studies can lead you to multiple career paths such as becoming a geriatric doctor, public health official that specialises in ageing, researcher, educator, geriatric nurse, or even a pharmacist. If you love studying medicine and are interested in healthcare as a field, a degree in Geriatric Studies could unfold a very fulfilling career for you. If you are an empathetic individual who wants to help others lead a better life, particularly the elderly, then this degree might be the right fit for you!",
    },
    {
      title: "Study options and costs",
      content1:
        "The first step towards pursuing Human Movement as a professional field is earning a bachelor’s degree. A bachelor’s in Human Movement science usually takes 3 to 4 years to complete and costs around $24,228 to $59,970 per year in the US.",
        content2:"In most cases, you will also have to apply for a license to practice as a medical professional and this is usually done right before applying for a residency. You can also opt for a career in research or education and can pursue a PhD after medical school. Clinical research in Geriatric Studies will allow you to research the different pathways and the science behind the ageing process. You can also work on drugs used to prevent or treat ageing-related issues.",


        content3:"In the UK, international undergraduate tuition rates range from$14,130 for undergraduate degrees to $53,700 or more for geriatric related studies.",
    },
    {
      title: "Future outlook",
      content1:
        "The job prospects for Geriatric Studies is highly encouraging. The need for geriatricians is predicted to rise in the coming years, owing to the necessity of physicians to care for an ageing population. In fact, the geriatric care service market is expected to grow at the rate of 10% between 2021 and 2027!",
        content2:"Geriatricians are learning new treatment techniques and working in an area that is both expanding in demand and techniques. Geriatricians may now treat diseases and injuries in novel ways because of developments in medical technology and research that are enhancing treatment choices for the elderly. Laparoscopic surgery, for example, now allows elderly patients to undergo a variety of surgical procedures that were previously thought too dangerous.",
    },
    {
        title: 'Career Pathways for Geriatric Studies graduates',
        subtitle1: 'Geriatric Doctor',
        content1: 'Geriatric doctors, often known as geriatricians, are doctors who specialise in caring for elderly people who have a variety of medical problems. They are concerned with helping the elderly lead a functional and high-quality life. Geriatric doctors are familiar with the responsibilities of carers and work closely with family members.',
        subtitle2: 'Geriatric Pharmacist',
        content2: 'Geriatric pharmacists, sometimes known as consultant pharmacists, specialise in delivering drugs to elderly patients and providing medication guidance. While all pharmacists label drugs and administer them according to a physicians or other health professionals prescription, some geriatric pharmacists do not.',
        subtitle3: 'Geriatric Researcher',
        content3: 'Geriatric researchers promote clinical and translational research on ageing-related health and illness. They also study ageing across a lifespan, including its effects on health. They concentrate on the creation of innovative therapies for age-related disorders, as well as the prevention and treatment of a variety of chronic illnesses in the aged.',
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Geriatric Studies abroad        </h1>
        <p>
        Geriatrics is a sub-discipline of medicine dealing with the prevention and treatment of illnesses in the elderly. Geriatric Studies graduates can expect to find abundant opportunities in social work, health administration and occupational therapy.






      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 164% increase in job advertisements for geriatrics in the last decade 




          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average annual salary of a geriatric doctor

          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 55,400: projected job openings for geriatric physicians between 2018-2028

          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 10% annual growth rate of the geriatric care services market between 2021-2027
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

export default GeriatricStudies;