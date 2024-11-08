import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const WoolScience = () => {
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
      title: "About Wool science",
      content1:
        "Wool Science studies are designed to offer individuals skills and expertise in the production, harvesting, preparation, marketing, manufacturing, and processing of wool to the wool industry.",
      content2:
      "The different qualifications assist students in understanding wool categorization, production, and processing abilities and technical knowledge that meet the wool supply chain’s requirements, market, and customer requirements. Students also learn ways to maximize return in the wool supply chain.",
      content3:
      "Wool science graduates can expect to work in consulting, regulatory, and research positions in the commercial and public sectors across the agricultural spectrum. A wide range of occupations are accessible, from large-scale rangeland farming to high-input grazing and feed lotting.",
    },
    {
      title: "Is Wool science right for me?",
      content1:
        "The wool Science studies take an in-depth look at the wool fibre, structure, chemistry and physics. They also explore the implications of the wool fibre’s structure, physics, and chemistry in terms of the properties and benefits of wool products. Students will be taught basic wool science principles, market structure, and domestic and international factors that influence the wool industry in order to expand the student’s knowledge and understanding of proper wool preparation.",
      content2:
      "It is easier to understand the processing of wool and the performance of the subsequent products if you understand the behaviour of the wool fibre from the outset. The purpose of the Wool Science degree is to provide the wool industry with individuals who have the relevant skills and knowledge regarding the production, harvesting, preparation, marketing, manufacturing and processing of wool.",
    },
    {
      title: "Wool Science study options and costs",
      content:
        "Wool science courses are provided as part of many Bachelor degrees especially in Australia. The Bachelor of Science with Honors degrees cost roughly $31,600 per year. Postgraduate study costs roughly $34,000 per year for students. Individual units from the face-to-face training and 4-year specialized degree in animal and wool science are now available online to students around the country",
    },
    {
      title: "Future outlook",
      content1:
        "Jobs in the wool sector can lead to a successful career path in a variety of fields, including warehousing and logistics, management, and more.",
      content2:
        "With the advent of technology in the wool production industry, there has been a rapid development of spinning and weaving tools, resulting in increased apparel sales all over the world. The expansion in the wool market is due to factors such as population growth and urbanization. As a result, students interested in pursuing a career in Wool Sciences have a wide range of opportunities available to them.",
        
    },
    {
      title: "Career pathways for Wool science graduates",
      subtitle1: "Wool Classer/Storekeeper",
      content1:
        "Wool classers / storekeepers are responsible for handling wool properly, safe storage, coring, receiving and dispatching. They also assist with stock take and other store person duties.",
      subtitle2: "Operations Coordinator",
      content2:
        "Wool operations coordinators are primarily involved in wool sale advice and marketing to customers, with a focus on creating partnerships with wool farmers.",
      subtitle3: "Wool Buyer",
      content3:
        "Wool buyers are responsible for inspecting and buying wool at auctions and other marketplaces. They use their knowledge to assess different wool types, process bulk class bales, and purchase wool at the door.",
      subtitle4: "Supply Coordinator",
      content4:"Wool supply coordinators are in-charge of receiving and shipping wool to various locations, which requires them to have excellent communication abilities.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Wool Science abroad</h1>
        <p>
        Wool is an internationally traded commodity with a broad and ever-changing market diversity. A specialised education in wool sciences offers great career prospects.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>The global wool market </strong>:  is expected to grow at a CAGR of 4.8 percent (2021-2026)
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>Wool Operations Coordinator</strong>   earns around $70,000 annually.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Assistant wool buyer </strong>  & exporter earns around $60,000 annually.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>More than 200,000</strong>   people are employed in producing and exporting Australian wool.
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

export default WoolScience;
