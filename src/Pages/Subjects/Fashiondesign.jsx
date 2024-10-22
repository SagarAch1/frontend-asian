import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FashionDesign = () => {
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
      title: "About Fashion Design",
      content1:
        "Fashion designing can be defined as the creation of clothes, shoe accessories for consumers keeping both the design aesthetics and functionality of the item or end consumer in mind. In essence it deals with the creation and design of apparel and wearables while keeping utility and function in mind. ",
      content2:"As a fashion designer, it is imperative to understand your customer's needs and requirements so that the end product created would be of value for the customer. Therefore, a fashion designer not only comes up with creative ideas but must be business savvy to be able to save resources.",
    },
    {
      title: "Is Fashion Design right for me?",
      content1:
        "Not only is the fashion industry ever-expanding and changing, but over the last half-century, the need for fashion designers has increased exponentially. Even though tools and equipment within the industry have evolved, key skill requirement i.e. creativity and innovativeness has remained constant over time. As a fashion designer, you would not only be able to explore your creativity and love for the design side but would also be able to develop business management skills.",
      content2:"As a fashion designer, you would just not be coming up with ideas for a new product but should also have the ability to market and produce your idea cost-effectively. Many people assume that the fashion designer just sits in the office and comes up with clothing ideas on a computer. But, this is not the only thing you would do as a designer, from creating an idea on board to manufacturing to the marketing of the product. As a fashion designer, you would be playing a critical role in each step of the process.",
    },
    {
      title: "Fashion Design study options and costs",
      subtitle1: "Bachelors in fashion designing",
      content1:
        " Doing your undergraduate in fashion design would enable you to start with the basics where you will be taught the fashion design history, clothing textiles, sketching and drawing clothes, fashion events, or managing a fashion house. A bachelors in fashion design would cost you around USD 10,000-$35,000 per annum.",
      subtitle2: "Bachelors in visual arts",
      content2:
        "A visual arts degree can cost up to $35000 but it would enable you to understand and interpret design elements you would be taught in fashion merchandising, professional photography, digital imaging. Here you can opt for specialization within fashion design.",
      subtitle3: "Bachelors in graphic design with fashion specialization:",
      content3:
        " An undergraduate in graphic design would inculcate a strong knowledge base in tools and image manipulation in various design software. An undergraduate in graphic design can cost up to $25k per annum.",

    },
    {
      title: "Future outlook",
      content:
        "The employment outlook for future fashion graduates is a project of growing by 22% within the retail industry. As businesses move towards personalization, new and innovative ideas in wearable fashion have to be explored.",
    },
    {
      title: "Career pathways for Fashion Design graduates",
      subtitle1: "Senior fashion designer",
      content1:
        "As a senior fashion designer, you would work in a fast-paced and changing environment where every day as a designer you would have to stay updated with the latest fashion trends. Communication and understanding consumer demand and dynamics are key skills apart from innate creativeness. Future job growth within this specialisation includes a position as a technical designer, apparel, and visual merchandise designer.  ",
      subtitle2: "Creative director",
      content2:
        "This area of fashion design requires you to be able to implement creative ideas of your team within the industry by creating a bridge between designers and the business managers of the organisation. ",
      subtitle3: "Product designer",
      content3:
        "A product designer with a fashion design degree is a highly sought-after individual within the retail business. With a strong grip on design concepts and tools as a product designer within the fashion industry, you would have the ability to create prototypes of designs.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Fashion Design abroad</h1>
        <p>
          Do you consider yourself to be innovative and creative? Do color
          patterns and materials excite you? Your Pinterest feed probably keeps
          popping up with clothing ideas and trends. Then you should definitely
          consider a career in fashion design!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Fashion designers rate themselves at 3.66 out of 5 on the job satisfaction scale .
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average median salary of an entry-level fashion graduate is $53k with a bonus and overtime pay 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> The retail fashion industry is projected to grow by 22% over the next decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 27,800 new jobs in the industry were created in the year 2021 alone
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

export default FashionDesign;
