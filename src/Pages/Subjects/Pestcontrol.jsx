import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const PestControl = () => {
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
      title: "About Pest and Weed Control",
      content:
        "One of the biggest reasons of crop failure is pest and weed attacking the crops. It is necessary for farmers to apply techniques that keep these insects, pest and weed away from their crops. For this purpose, the study of Pest and Weed Control holds great importance. Pest and Weed Control studies enable professional to prepare integrated pest management approaches that combine strategies for pest control that are both cost-effective and environmentally friendly.",
    },
    {
      title: "Is Pest and Weed Control right for me?",
      content:
        "If you want a career in Pest and Weed Control, you must be comfortable working outdoors. Entomologists must not be afraid of insects and must be ready to handle them and their waste. Pest and weed specialists need high observation skills because their work often needs them to observe and record facts about insect behaviour, appearance, and habitat. Aside from that, depending on the work, Pest and Weed Control specialists must have good communication skills to convey their findings in writing to academics, students, policymakers, and other stakeholders. They must be able to draw conclusions from data gathered through research, observation, and experiments, which necessitates strong critical thinking abilities. If this sounds like you, then Pest and Weed Control might be a good choice for you.",
    },
    {
      title: "Pest and Weed Control study options and costs",
      content:
        "A bachelor’s program in Pest and Weed Control takes about 4 years to complete and costs around $7,408-$18,634 per year in the US. The master’s program is 1-3 years long depending on your area of specialisation. The average tuition & fees of the Plant Protection and Integrated Pest Management programme are between $10,067 to $25,468 in the US.",
    },
    {
      title: "Future outlook",
      content:
        "The need for more crop production and better plant life has increased now more than ever before. A large part of reason is the booming population. With increased demand, the risk and complications of plant diseases has also increased. Thus, we need Pest and Weed Control specialists to help us keep productions high and prevent crop failures. According to U.S. Bureau of Labor Statistics, from 2020 to 2030, new jobs for agricultural and food scientists are expected to grow at a rate of 9%. Moreover, agricultural and food scientists are expected to have about 4,400 job opportunities each year this decade.",
    },
    {
        title: 'Career pathways for Pest and Weed Control graduates',
        subtitle1: 'Entomologist',
        content1: 'Entomologists are scientists who study insects and pests. They conduct experimental research with insects in controlled or naturalistic settings. They also gather and evaluate biological data and specimens to learn more about insect traits, such as relationships with other species, habitat, reproduction, population dynamics, illnesses, and migratory patterns.',
        subtitle2: 'Crop Consultant',
        content2: 'A crop consultant or advisor provides advice on crop management, including seed planting, fertilisation, pest management, and treatment for plant diseases. Crop consultants can assist growers all around the globe increase crop productivity.',
        subtitle3: 'Horticulturist',
        content3: 'Growing crops, fruits, nuts, seeds, herbs, sprouts, mushrooms, flowers, grass, and ornamental trees in gardens is the role of a horticulturist. Horticulturists are responsible for boosting plant output, vigour, size, and flavour. They also coordinate certain crop research initiatives. Horticulturists need good knowledge in a wide range of plants, including trees, flowers, vegetables, nuts, bushes, and fruits.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Pest and Weed Control Abroad</h1>
        <p>
          Pest and Weed Control is the science of utilizing tools and tactics to
          assess and manage pests for greater crop yield. Students of this
          programme find employment in sectors such as agri-business, natural
          resource management, and crop production.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$74,160</strong> Average annual salary for agricultural
            scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Projected job openings</strong> for agricultural workers
            every year this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>9% projected job growth</strong> for agricultural scientists
            by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Projected job openings</strong> for ground maintenance
            workers every year
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

export default PestControl;
