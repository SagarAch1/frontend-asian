import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FirstAid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage:    `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
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
      title: "About First Aid",
      content1:
        "First Aid is the emergency care given immediately after an injury to an injured or sick person. The main goal of First Aid is to minimise the consequences of the injury and prevent further health complications. In some cases, First Aid can be crucial in saving a life. It could include placing an unconscious casualty in the recovery position, incident management, performing cardiopulmonary resuscitation (CPR), use of automated external defibrillators (AED), stopping the bleeding using pressure and elevation and, keeping a fractured limb still.",
        content2:"First Aid education is mandatory for employees in many workplaces and organisations worldwide. The type of first aid equipment and training required depends on the number of employees, the types of hazards present in the workplace and, the travel distance to a hospital/availability of professional medical assistance.",
        content3:"An education in First Aid allows you to become a certified first aid officer. Their primary responsibility is to provide immediate lifesaving care before the arrival of proper medical care. Some common course modules students can expect to study are Injury Assessment, Wounds and Bleeding, Introduction to Skeletal System, Introduction to Circulatory System, Head and Spinal Injuries, Medical Emergencies, Introduction to Respiratory System, Casualty Safety, and Limb Emergencies.",
      
    },
    {
      title: "Is First Aid right for me?",
      content:
        "As the initial response to a medical emergency is provided by the first aid officer, he must have good analytical skills and should be able to assess the situation well in order to manage it. Staying calm and providing adequate assurance to the casualty is also a significant part of the role. As the first aid officer deals directly with the casualty, they ought to have good communication and leadership skills. If this sounds like you, then First Aid might be the right choice for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "There are multiple diploma courses in First Aid available that could be accessed throughout the world. These courses are divided into various modules and could be completed over any time period without any limit.",
        content2:"In the US, First Aid certification is provided by American Red Cross and the classes could be taken online, in-person or combined. The training is a few hours long and provides a 2-year certification to the learners.",
        content3:"If you plan to consider certification to become a first aid trainer in Australia, first and foremost, you will need to have an entry-level teaching qualification. Trainers and assessors will be required to hold a TAE40116 Certificate IV in Training and Assessment, or an ASQA recognised equivalent qualification. It is commonly known as the “Train the Trainer” qualification, “Cert IV TAE”, or “Cert IV Training”.",
        content4:"After obtaining teaching qualifications that prove your competence as a trainer, the next step is to match your qualifications with relevant experience. You can hold other vocational qualifications and become an eligible trainer for the following courses: Basic Life Support Training (BLS), CPR, First Aid, Emergency Response in Education Care Setting.",
        content5:"The cost of first aid courses, diplomas and programmes, though relatively affordable compared to other fields, varies from country to country, so it’s best to check with the relevant institutes you are interested in applying at.",
    },
    {
      title: "Future outlook",
      content1:
        "The training industry opens thousands of opportunities for you to work in both the public and private sectors. First Aid is always in demand, which means the demand for First Aid-certified professionals will be omnipresent, and there will always be demand for First Aid trainers.",
        content2:"It is estimated that the professional field of First Aid is expected to grow by 11% by 2028 in the US. This illustrates that the outlook of this professional field is promising.",
      
    },
    {
        title: 'Career pathways for First Aid graduates',
        subtitle1: 'First Aid Trainer',
        content1: 'As a First Aid trainer, you are expected to deliver a high-quality First Aid training programme, ensure that lesson plans are followed in all training courses and, that all student assessment procedures are thoroughly prepared, and that students are aware of assessment requirements beforehand.',
        subtitle2: 'Firefighters',
        content2: 'Firefighters are often the first to arrive at an emergency scene. In addition to dealing with structure fires, firefighters are often called in to rescue people from car accidents and other tragedies where there may be multiple victims.',
        subtitle3: 'Flight Attendants',
        content3: 'Human services professionals help disabled clients find helpful community service. They also help to find emotional and financial support for the disabled as well as their families. The focus of this career is usually to help those with disabilities to be able to live independently. Human service workers might be tasked with directing disabled people to organisations that provide help, and they may also help employers who are interested in hiring disabled individuals to design a workplace where they can thrive. Their salaries can range from the low $30,000 range to over $42,000.At thirty-three-thousand feet, flight attendants must be prepared to deal with whatever comes their way – including cardiac arrest. Having a medical professional on hand is never a guarantee, so flight attendants are required to know CPR, First Aid and how to operate the on-board AED unit.',
        subtitle4: 'Construction Workers',
        content4: 'Construction workers haul heavy materials, work with powerful tools and labour in all types of weather. In this high-risk work environment, life-saving skills are an essential requirement.',
        subtitle5:"Lifeguards",
        content5:"Cardiac arrest and drowning are just two of the life-threatening emergencies a lifeguard may encounter. CPR is an essential skill for lifeguards whether they work at a pool, lake, or beach.",
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study First Aid abroad       </h1>
        <p>
        First Aid is the immediate care provided after an injury to a patient until further medical treatment is available. This field of study equips you with the critical skills needed to effectively respond to and manage emergency situations






      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 11% employment growth of first aid providers by 2028






          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>155,000 expected job openings in first aid field by 2028
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual income of a first aid instructor
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>£36,930 average annual salary of a paramedic
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
          {item.subtitle5 && (
            <div style={faqSubtitleStyle}>{item.subtitle5}</div>
          )}
           {item.content5 && <p>{item.content5}</p>}
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

export default FirstAid;