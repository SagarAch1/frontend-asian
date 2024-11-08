import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Fashion = () => {
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
      title: "About Fashion Merchandising",
      content1:
        "Fashion merchandising covers the business side of fashion, including buying, selling, and marketing. It ensures fashion products are available at the right time, place, price, and quantity. Fashion merchandisers connect designers with the market, which includes both retailers and consumers.",
      content2:
        "A degree in fashion merchandising equips students with skills for the fast-growing fashion retail industry. The curriculum includes studying fashion trends, forecasting, and managing fashion products. Students learn how to develop, promote, and market fashion items while gaining analytical business skills to identify trends and design product lines.",
    },
    {
      title: "Is Fashion Merchandising Right for Me?",
      content:
        "Pursuing a career in fashion merchandising requires a keen eye for detail and a strong sense of current fashion trends. Essential skills include communication, interpersonal abilities, time management, and organizational skills for effective interaction with designers and other stakeholders.",
    },
    {
      title: "Fashion Merchandising Study Options and Costs",
      content:
        "Undergraduate options include degrees like Bachelor of Business Administration (BBA) in Fashion Merchandising, Bachelor of Science in Fashion Merchandising, and Consumer Studies, or a Bachelor of Arts in Fashion Buying and Merchandising. These programs typically last 3-4 years. Associate degrees are also available. Postgraduate options include Master of Science (MSc) or Master of Arts (MA) in Fashion Buying and Merchandising Management. In the U.S., the average cost for an undergraduate degree in fashion merchandising is around $22,172.",
    },
    {
      title: "Future Outlook",
      content:
        "Fashion merchandising careers are expected to grow, with the U.S. Bureau of Labor Statistics predicting a 4% job growth rate for fashion merchandising roles by 2029.",
    },
    {
      title: "Career Pathways for Fashion Merchandising Graduates",
      subtitle1: "Visual Merchandiser",
      content1:
        "Visual merchandisers design and set up storefronts, catalogs, and point-of-sale displays to attract customers. Average salaries can reach up to $62,997 annually.",
      subtitle2: "Retail/Fashion Buyer",
      content2:
        "Retail or fashion buyers manage store merchandise orders, work with vendors, and attend trade shows to identify trending items. A strong sense of fashion trends is essential.",
      subtitle3: "Marketing Specialist",
      content3:
        "Marketing specialists promote fashion brands through various channels, using their knowledge of fashion trends to create and implement effective marketing campaigns.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Fashion Merchandising Abroad</h1>
        <p>
          Interested in a career that combines fashion and business management?  Passionate about
        </p>
        <p>
         marketing fashion items? If so, a career  in Fashion Merchandising may be right for you!</p>
        
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of a fashion merchandiser
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>11.5 million</strong> people work in Fashion Merchandising
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>4%</strong> industry growth in fashion merchandising
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Size of the global fashion industry
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

export default Fashion;
