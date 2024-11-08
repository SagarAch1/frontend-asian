import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Productdesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open and close of FAQ
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
    color: "#4CAF50", // Change to an appealing color
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
      title: "What is Product Design?",
      content1:
        "Product design merges art with engineering to create functional and visually appealing products. A product designer focuses on making sure the product not only serves its purpose but also looks good and is user-friendly.",
      content2:
        "As a product designer, you’ll work on three key areas: User Experience (UX), User Interface (UI), and Product Design. Together, these elements create an optimal product experience, combining functionality, aesthetics, and usability.",
    },
    {
      title: "Is Product Design the right field for me?",
      content:
        "If you enjoy analyzing and evaluating products' design and functionality during your shopping, then you might be well-suited for a career in product design. This role requires a blend of creativity and practicality, as product designers must ensure that a product is both attractive to the buyer and serves its intended function efficiently. A keen interest in design, problem-solving skills, and an appreciation for aesthetics are essential for success in this field.",
    },
    {
      title: "Product Design Education & Costs",
      content1:
        "Product design is a growing field. While technological advancements and market trends may shift job roles, the core skills and knowledge required remain steady over time.",
      content2:
        "In the U.S., pursuing a bachelor’s degree in product design typically costs between $15,000 and $20,000 annually. In Europe, excluding the U.K., fees may be lower, though countries like Australia charge similarly. Degree programs offer a range of skills, including CAD (Computer-Aided Design), 3D printing, multimedia design, and retail design.",
    },
    {
      title: "Future Outlook for Product Designers",
      content1:
        "Product design spans many industries, from manufacturing to consumer goods. Job roles may vary across sectors, but the fundamental skills remain the same. Designers must combine creativity with problem-solving abilities to succeed in this field.",
      content2:
        "An undergraduate degree in product design or a related field is essential for building a career in product design. Expertise in CAD design is also vital. With product design seeing an annual growth rate of 86% in the U.S., there are numerous job opportunities in roles such as Materials Engineer, Consumer Product Designer, CAD Technician, and Furniture Designer.",
    },
    {
      title: "Career Paths for Product Design Graduates",
      subtitle1: "UX Designer",
      content1:
        "UX designers focus on how a product works for the user. They test and research products to ensure that the end-user experience is smooth and intuitive, acting as a bridge between the company and its consumers.",
      subtitle2: "UI Designer",
      content2:
        "UI designers work on the look and feel of a product, ensuring it is visually appealing and easy to interact with. They play a vital role in creating products that resonate with users and deliver real value.",
      subtitle3: "UX Researcher",
      content3:
        "UX researchers conduct surveys and user studies to gather insights on product designs, helping companies avoid costly prototype errors. Their work ensures that designs are focused on meeting user needs.",
      subtitle4: "UX Strategist",
      content4:
        "A UX strategist looks at the big picture, helping teams ensure that the final product design aligns with user needs and market demands. Their role focuses on balancing product functionality with the right market fit.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Product Design Abroad</h1>
        <p>
        People prefer products that are functional and visually appealing.  
        </p>
        <p>Product design teaches you to create user-friendly, convenient products. </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$50,757</strong> is the annual median salary for an entry-level product designer in the U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>86%</strong> growth in job opportunities within the product design field, according to LinkedIn.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>30%</strong> more revenue is generated by businesses that prioritize product design.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            Companies focusing on product design see, on average, <strong>30%</strong> higher revenue.
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
                {/* Check for subtitles and content */}
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
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

export default Productdesign;
