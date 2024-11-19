import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const EnvironmentConservation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const headerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/plant.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
  };
  const statsSection = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statBox = {
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
    color: "#4CAF50",
    marginBottom: "10px",
  };

  const faqContainer = {
    padding: "40px",
    backgroundColor: "#f1f1f1",
  };

  const faqBox = {
    backgroundColor: "white",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const faqHeader = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
  };

  const faqContent = {
    padding: "10px 0",
    fontSize: "14px",
    color: "#666",
  };

  const subtitleStyle = {
    fontWeight: "bold",
    marginTop: "10px",
    color: "#333",
  };

  const faqData = [
    {
      title: "About Environmental Conservation",
      content1:
        "Conservation studies focus on the sustainable use of natural resources to preserve the environment. As populations grow and resource demand increases, conservation provides knowledge on protecting our planet.",
      content2:
        "With rising environmental challenges, the need for sustainable practices has led to an increased interest in conservation as a subject.",
    },
    {
      title: "Is Environmental Conservation Right for Me?",
      content:
        "Conservation scientists require analytical, critical thinking, and teamwork skills. If you possess these and have an interest in environmental preservation, this field could be a great fit.",
    },
    {
      title: "Study Options and Costs",
      content:
        "A bachelor’s degree is typically the minimum requirement for entry-level conservation roles. It usually spans 4 years, with annual costs between $14,000-$38,000. Master’s degrees, taking 1-2 years, offer further specialization and cost around $32,000 in the U.S.",
    },
    {
      title: "Future Outlook",
      content:
        "With climate change impacts growing, demand for conservation experts is on the rise. Employment for conservation scientists and foresters is projected to grow by 7% by 2030, with around 40,000 new roles expected in this decade.",
    },
    {
      title: "Career Pathways for Conservation Graduates",
      subtitle1: "Conservation Scientist",
      content1:
        "Conservation scientists work to manage natural resources effectively. They plan and execute conservation initiatives to balance present and future needs.",
      subtitle2: "Forester",
      content2:
        "Foresters oversee tree and forest care in designated areas, focusing on reforestation efforts vital for the environment.",
      subtitle3: "Horticulturist",
      content3:
        "Horticulturists specialize in cultivating plants, vegetables, and flowers. Conservation-focused horticulturists study plant growth and provide environmental guidance.",
    },
  ];

  return (
    <div>
      {/* Top Section */}
      <div style={headerStyle}>
        <h1>Study Environmental Conservation Abroad</h1>
        <p>
          Environmental Conservation involves preserving natural resources to
          benefit future generations.
        </p>
        <p>If sustainability matters to you, this field could be ideal.</p>
      </div>

      {/* Statistics Section */}
      <div style={statsSection}>
        <div style={statBox}>
          <div style={iconStyle}>🌟</div>
          <p>40,000 projected openings for conservation roles this decade</p>
        </div>
        <div style={statBox}>
          <div style={iconStyle}>📈</div>
          <p>Median annual pay for conservation scientists</p>
        </div>
        <div style={statBox}>
          <div style={iconStyle}>💼</div>
          <p>
            Current number of employed conservation professionals in the U.S.
          </p>
        </div>
        <div style={statBox}>
          <div style={iconStyle}>🔧</div>
          <p>7% projected job growth for conservation scientists by 2030</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqContainer}>
        <h2>Subject Overview</h2>
        {faqData.map((item, index) => (
          <div key={index} style={faqBox} onClick={() => toggleContent(index)}>
            <div style={faqHeader}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContent}>
                {item.subtitle1 && (
                  <div style={subtitleStyle}>{item.subtitle1}</div>
                )}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && (
                  <div style={subtitleStyle}>{item.subtitle2}</div>
                )}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && (
                  <div style={subtitleStyle}>{item.subtitle3}</div>
                )}
                {item.content3 && <p>{item.content3}</p>}
                {item.content && <p>{item.content}</p>}
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

export default EnvironmentConservation;
