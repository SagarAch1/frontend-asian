import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const RehabilitationTherapy = () => {
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
      title: "About Rehabilitation Therapy",
      content1:
        "Rehabilitation Therapy is defined as care that helps enhance or recover functional ability of individuals enabling them to lead normal lives, after an accident or injury. It also helps individuals improve their lifestyles by adopting new habits or eliminating old ones.One of the biggest reasons of crop failure is pest and weed attacking the crops. It is necessary for farmers to apply techniques that keep these insects, pest and weed away from their crops. For this purpose, the study of Pest and Weed Control holds great importance. Pest and Weed Control studies enable professional to prepare integrated pest management approaches that combine strategies for pest control that are both cost-effective and environmentally friendly.",
      content2:
        "Rehabilitation Therapy is provided to any individual who has been, or is, chronically ill or injured and has health complications which hinder adequate functioning in their everyday life. Many individuals require Rehabilitation Therapy because they lose or impair their physical or mental abilities as a result of prior medical treatment.",
      content3:
        "Rehabilitation therapists work in several settings including hospitals, mental health clinics, physiotherapy clinics, nursing homes and other healthcare facilities. They may further choose to specialise as occupational therapists, physical therapists or speech therapists etc.",
    },
    {
      title: "Is Rehabilitation Therapy right for me?",
      content1:
        "IAre you a determined individual full of optimism and empathy? If so, then Rehabilitation Therapy may appeal to you. Rehabilitation counsellors work directly with the client; hence they must possess good interpersonal and communication skills. Rehabilitation Therapy usually takes time so the therapist must be patient and determined to improve the client’s condition.f you want a career in Pest and Weed Control, you must be comfortable working outdoors. Entomologists must not be afraid of insects and must be ready to handle them and their waste. Pest and weed specialists need high observation skills because their work often needs them to observe and record facts about insect behaviour, appearance, and habitat. Aside from that, depending on the work, Pest and Weed Control specialists must have good communication skills to convey their findings in writing to academics, students, policymakers, and other stakeholders. They must be able to draw conclusions from data gathered through research, observation, and experiments, which necessitates strong critical thinking abilities. If this sounds like you, then Pest and Weed Control might be a good choice for you.",
      content2:
        "Driven by compassion and desire to serve the community, rehabilitation therapists play an important role in improving the lifestyles of injured or ill individuals. If this sounds exciting to you, then a career in Rehabilitation Therapy might be a good choice for you.",
    },
    {
      title: "Rehabilitation Therapy study options and costs",
      content:
        "The first step in becoming a rehabilitation therapist is to earn a bachelor’s degree in a related field such as Social Sciences. It usually takes 4 years to complete the undergraduate programme. Aspecialisation in rehabilitation therapy  can be achieved by undertaking a master’s programme that spans two years and costs up to $60,000 in the US.  .",
    },
    {
      title: "Future outlook",
      content:
        "The demand for rehabilitation therapists is increasing day by day with the growth in the elderly population and the continuous rehabilitation requirements of individuals with special care needs. Rehabilitation therapists play a role in helping them live independently and adapt to new changes effectively. According to the U.S Bureau of Labor Statistics, the projected employment growth of rehabilitation therapists in this decade is up to 10%. This shows that this professional field is, and will be, in demand in the future as well..",
    },
    {
      title: "Career Pathways for Rehabilitation Therapy graduates",
      subtitle1: "Disability Specialist",
      content1:
        "The role of a disability specialist is to make sure that individuals with physical or mental disabilities receive the help they need to properly function in their everyday life. As a disability specialist, you will determine your client’s eligibility status to receive services and accommodation. You will also keep track of your client’s progress to make changes in their services according to their needs. The average annual salary of a disability specialist is up to $53,500..",
      subtitle2: "Program coordinator",
      content2:
        "A program coordinator plans and oversees the activities for a particular organisation, usually in healthcare, education or nonprofit settings. Your role as a program coordinator in rehabilitation clinics and hospitals will be to organise activities to raise awareness about different health complications and strategies to avoid or overcome them. You will also manage office operations and records. The average annual salary of a programme coordinator is up to $43,582..",
      subtitle3: "Rehabilitation Nurse",
      content3:
        "A rehabilitation nurse’s main role is to assist patients with disabilities and chronic illnesses to adapt to their altered life. They will help clients to reach their health goals and ensure they follow the proper treatment plans. They will also teach them new life skills that they could use in their everyday life. The average annual salary of a rehabilitation nurse is up to $67,162..",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Rehabilitation Therapy abroad </h1>
        <p>
          Rehabilitation Therapy involves a set of interventions and strategies,
          designed to minimise disabilities and better the functioning of
          individuals with health complications in their everyday interactions
          with the environment.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of rehabilitation
            counsellors in 2021
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 10% projected employment growth of rehabilitation
            counsellors in this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected job openings for rehabilitation
            counsellors
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 104,500: current number of rehabilitation
            counsellors employed in the US
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

export default RehabilitationTherapy;
