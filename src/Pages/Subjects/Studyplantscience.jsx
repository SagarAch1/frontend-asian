import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";
import { connect } from "mongoose";
import { sub } from "date-fns";

const PlantScience = () => {
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
      title: "About Plant sciences",
      content1:
        "Plants are provider of our essential requirements, from oxygen to food. As a result, understanding the mechanisms that drive plant production and their responses to changing environments is critical. ",
      content2:
      "Plant Science studies how plants are used to make food, change the environment, restore damaged landscapes, promote human health and well-being, improve communal surroundings, and provide leisure and practical benefits to the general public. This research is critical to the preservation of the environment. ",
      content3:
      "The application of science soil management and agricultural and horticulture crop production is the focus of Plant Sciences. It also covers pesticides, hydroponics, fertilizers, and supplements, as well as biological and chemical pest management. ",

    },
    {
      title: "Is Plant sciences right for me?",
      content:
        "Plant scientists are driven by their curiosity and desire to protect the environment, and they are often involved in activities that help them explore more about plants and preservation. They are critical thinkers and good at problem-solving. Moreover, they have efficient data analysis skills to collect and interpret data using a variety of methods and are able to communicate their findings effectively for others to benefit from it. If you believe you have the aforementioned qualities, then Plant Sciences might be a good choice for you.",
    },
    {
      title: "Study options and costs",
      content:
        "Plant scientists typically need a bachelor's degree in agriculture or a related field, such as biology or chemistry. Undergraduate coursework for plant scientists typically includes biology, chemistry, botany, and plant conservation. A bachelor’s programme usually takes 4 years to complete and costs around $8,218-$20,790 in US. A master’s programme takes around 1-3 years to complete depending on the specialisation you opted for. The average tuition for a graduate programme in US is $23,902 per year.",
    },
    {
      title: "Future outlook",
      content:
        "With increasing global population, the need for efficient crop production and better plant management has increased more than ever before. According to the U.S. Bureau of Labor Statistics, from 2020 to 2030, employment of agricultural scientists is expected to grow at a rate of 9%. Agricultural and food scientists are expected to have about 4,400 job opportunities every year this decade.",
    },
    {
        title: 'Career pathways  for Plant sciences graduates',
        subtitle1: 'Agronomist',
        content1: 'As an agronomist, you will be in charge of evaluating and increasing the farms agricultural productivity, as well as conducting laboratory tests on soil, seed, and crop samples. Youll also maintain records of study, testing, and outcomes, as well as perform quality control for seed caliber and soil standards.',
        subtitle2: 'Horticulturist',
        content2: 'Horticulturists are responsible for boosting plant output, vigor, size, and flavour. They also coordinate certain crop research initiatives. Horticulturists must have good knowledge in a wide range of plants, including trees, flowers, vegetables, nuts, bushes, and fruits.',
        subtitle3: 'Entomologist',
        content3: 'An entomologist is a "bug expert" who researches how to protect crops from pests by coming up with innovative approaches pest management.',
        subtitle4: 'Crop Consultant',
        content4: 'A crop consultant or advisor provides advice on crop management, including seed planting, fertilisation, pest management, and treatment for plant diseases. Crop consultants can assist farmers all around the globe increase crop yield.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Plant Sciences abroad</h1>
        <p>
        Plant sciences is the study of plants and how they live, including structure, physiology, development, and classification. It can help you make the world a better place through a hands-on understanding of plants for food, fiber, medicine, and fuel.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$72,762</strong>: Average annual salary for agricultural
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
            <strong>9% projected job growth</strong>  of agricultural and food scientists in job market this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Estimated job openings</strong> of agricultural and food scientists this cade


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

export default PlantScience;
