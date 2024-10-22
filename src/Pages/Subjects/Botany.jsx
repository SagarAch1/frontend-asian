import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Botany = () => {
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
      title: "About Botany",
      content1:
        "Botany is the branch of biology that deals with the study of the structure, form and biochemical processes involved in plant life. The scope of this study also includes the classification of plants and the study of plant interaction with its natural environment. Botanists draw upon their understanding of plant biology to contribute to a variety of organisations like the chemical industry, pharmaceutical corporates, oil and seed companies and biotechnology firms. Furthermore, as environmental concerns come to the forefront of the global consciousness more and more botanists will find opportunities in the public sector to help reverse environmental degradation",
      content2: "By studying the biology, evolution and behaviour of plants, botanists expand the scope of plant knowledge and apply it to solve different challenges in horticulture, agriculture, horticulture and other allied fields.",
        },
    {
      title: "Is Botany right for me?",
      content:
        "To be a botanist, aspirants are required to possess multiple skills. Apart from an interest in biology or plants, candidates must have a keen interest and ability to take part in research activities. If you are someone who has strong analytical and communication skills, odds are you will be successful in this field. As a botanist, you will mostly be required to work outdoors and in labs, with patience and persistence. You also need to have a knack for computers and teamwork skills. If you think you possess these qualities, then botany may be a rewarding field for you.",
    },
    {
      title: "Botany study options and costs",
      content:
      "The need for more crop production and better plant life has increased now more than ever before. A large part of reason is the booming population. With increased demand, the risk and complications of plant diseases has also increased. Thus, we need Pest and Weed Control specialists to help us keep productions high and prevent crop failures. According to U.S. Bureau of Labor Statistics, from 2020 to 2030, new jobs for agricultural and food scientists are expected to grow at a rate of 9%. Moreover, agricultural and food scientists are expected to have about 4,400 job opportunities each year this decade.",
    },
    {
      title: "Future outlook",
      content1:
      "Botanical sciences hold a bright future for aspirants. Students who pursue botany as a career can opt to work in educational institutions and private as well as public sector organisations. And because of the interdisciplinary nature of botany, plant scientists can pursue a career in affiliated fields like ecology, conservation, agriculture, forestry and biotechnology",
    content2:"The average growth in employment opportunities for botanists is 14%, which is much higher than the average for all other occupations.",
    },
    {
      title: "Career pathways for Botany graduates",
      subtitle1: "Naturalist",
      content1:
        "A naturalist studies the impact of different living species on the environment, and how they interact with each other. Their job is generally research-based. Hence, they are always assisting and implementing research programs. The purpose of all such work is to gather scientific information and analyse which conditions may work in favour of certain environments or species. And considering that, a naturalist develops a plan to protect them, in case of damage.",
      subtitle2: "Florist",
      content2:
        "A florist works with flowers. They may either grow their own flowers or acquire them through a wholesaler. They will then arrange these flowers into bouquets and baskets for customers. They have sufficient knowledge of which flowers bloom in which season, and what’s the impact of different environments on them. They also provide people with information about their products.",
      subtitle3: "Forester",
      content3:
        "Their primary duties include managing, planting, and caring for trees in the forest. The job of a forester is associated with geologists and wildlife biologists. Therefore, they often find themselves collaborating with other experts in biological and conservation sciences. Protection of wilderness areas, facilitating public recreation, managing forest fires, and developing strategies to enhance habitats for different species in the woods are some of the responsibilities of a forester.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Botany abroad</h1>
        <p>
          The study of botany encompasses more than three hundred thousand
          species of plants ranging from ground-hugging mosses to giant redwood
          trees. It studies various aspects of plant biology including their
          structure, properties, and biochemical processes.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: $78,523: average annual salary of a botanist in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9% expected rise in the average annual salaries of botanists in the UK
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 14%: rate of growth of employment opportunities for botanists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 3,200 job openings for botanists every year in the US
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

export default Botany;
