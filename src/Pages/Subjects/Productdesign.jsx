import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Productdesign = () => {
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
      title: "About Product design",
      content1:
        "Product design is essentially a merger of arts and engineering. A product designer creates new products while keeping the artistic value of the product for the consumer in mind, along with making sure the experience/convenience for the user remains intact.",
      content2:"As a product designer, you create a product by working on 3 main components of the product design process i.e. User Experience (UX), User Interface (UI), and Product Design. All three elements create a complete user experience with regards to the product; the looks, the functionality, and the problem it resolves.",
    },
    {
      title: "Is Product design right for me?",
      content:
        "If you find critiquing and studying the product outlook and details on your every shopping trip then you might find the field of product design just right for you. A product designers’ job is to combine the product utility and aesthetics in such a way that not only does the product become a source of interest for the buyer but also provides the ultimate utility that it was designed for. So if you find yourself spending time studying and breaking down a product to its utility and function in your mind then you will find this field as challenging and interesting to pursue as your career. A product designer not only has to be good in the artistic side of design but must have a good grip in the area of design aesthetics and consumer functionality of the product. If you are interested in arts and have a practical mind for problem-solving then this is definitely the field for you.",
    },
    {
      title: "Product design study options and costs",
      content1:
        "The field of product design is ever-expanding. With changing technological and economic scenarios it is imperative to remember that job titles or roles might evolve in the future but the key skill requirement and knowledge within the field will always remain the same at its core.",
        content2:"In the U.S., an average bachelor’s degree in product design costs around $15000-20000 per year. While it might be lower in European countries excluding the U.K., most western countries such as Australia might charge the same. Each degree focuses on teaching its students different skills within product design from Computer-aided design (CAD), 3D printing, multimedia design, product design within various software, retail design, and designing marketing strategies.",
    },
    {
      title: "Future outlook",
      content1:
        "The field of product design is vast, as it encompasses industrial manufacturing to developing consumer products. The duties and job roles might change from industry to industry but the key skill required for a good product designer remains the same. Each role requires a designer to harness creativity and critical thinking in problem-solving.",
        content2:"An undergraduate degree in arts or product design is a prerequisite for building the knowledge base for the field. Furthermore, deep knowledge of CAD design is a prerequisite in any product design job post. With annual growth of 86% in product design within the USA, a product designer could work in any of the following job roles as a Materials Engineer, Consumer product designer, Furniture designer, Exhibition designer, CAD technician, Product designer, Interior, and spatial designer, etc.",
    },
    {
      title: "Career pathways for Product design graduates",
      subtitle1: "The User Experience (UX) designer",
      content1:
        "The User Experience (UX) designer where you would focus on is the functionality and usability of the product for the user. A UX designer tests and research product and becomes a bridge between the company and the consumer.",
      subtitle2: "User Interface (UI) designer",
      content2:
        "User Interface (UI) designer works on designing the product in terms of how it looks and feels to the consumer. Thereby assisting the organization in creating true value for its customer.",
      subtitle3: "UX researcher",
      content3:
        "UX researcher's key skill is to conduct research survey with the consumers to create a clear understanding for the company to how the product should be designed this saves the company from wasting money on designing an excessive prototype which then can be tested in the market.",
      subtitle4: "UX strategist",
      content4:"UX strategist is someone who has the ability to look at the final picture of the whole process in his mind thereby assisting the teams to focus on user utility and product fit in the market.",
    },

  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Product design abroad</h1>
        <p>
          People love buying things that look good. Studying product design
          teaches you to create functional utility for the end-user, by
          designing visual layouts that creates maximum convenience.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$50,757</strong>:The annual median salary for an entry-level product designer in the United States.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> According to LinkedIn product design field shows 86% growth in job opening over the year.


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Businesses that focus their resources on product design generate 30% more revenue on average
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Businesses that focus their resources on product design generate 30% more revenue on average
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

export default Productdesign;
