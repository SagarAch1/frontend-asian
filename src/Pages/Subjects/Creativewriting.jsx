import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Creativewriting = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the FAQ item visibility
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
    color: "#4CAF50",
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
      title: "About Creative Writing",
      content:
        "Creative Writing programs help students refine their narrative skills. Students analyze various genres, such as novels and plays, while honing their craft, which is valuable in careers like marketing and advertising.",
    },
    {
      title: "Is Creative Writing right for me?",
      content:
        "If you have a talent for words and enjoy expressing ideas in writing, this field may suit you well. Creative writers leverage critical thinking, creativity, time management, and social perceptiveness to create engaging stories that connect with their audience.",
    },
    {
      title: "Creative Writing study options and costs",
      content:
        "Undergraduate degrees typically take 3-4 years in the US or UK, with tuition costs of approximately $13,296 in the US and £9,250 in the UK. Master’s programs generally last 1-2 years, with tuition in the UK averaging £9,300-£13,000 and in the US around $30,000-$40,000.",
    },
    {
      title: "Future outlook",
      content:
        "The U.S. Bureau of Labor Statistics forecasts a 9% growth for writers and authors by 2030, with 15,400 job openings projected annually. Media and communications roles, including creative writing, are expected to grow by 14% over the same period.",
    },
    {
      title: "Career Pathways for Creative Writing Graduates",
      subtitle1: "Advertising Copywriter",
      content1:
        "An advertising copywriter works with an art director to develop compelling campaigns. This role involves understanding target audiences, interpreting client briefs, and crafting creative ideas.",
      subtitle2: "Lexicographer",
      content2:
        "Lexicographers analyze and document word usage across various media. They evaluate potential new entries for dictionaries based on observed language trends.",
      subtitle3: "Magazine Journalist",
      content3:
        "Magazine journalists write for consumer and trade publications, covering a range of topics. They may also assist with sub-editing and design tasks as part of the production process.",
    },
  ];

  return (
    <div>
      {/* Introductory section with background image */}
      <div style={sectionStyle}>
        <h1>Study Creative Writing Abroad</h1>
        <p>
          A degree in Creative Writing sharpens storytelling abilities, helping
          students 
        </p>
        <p>understand the publishing landscape and develop their unique
        voices.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 15,400 estimated job openings for writers and
            authors annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9% projected employment growth for writers this
            decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Median annual income of writers and authors
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 14% projected employment growth for creative
            writers by 2030
          </p>
        </div>
      </div>

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

export default Creativewriting;
