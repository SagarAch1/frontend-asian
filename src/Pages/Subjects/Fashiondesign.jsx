import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FashionDesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between expanding and collapsing
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fashion.jpg)`,
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
    color: "#4CAF50", // Added a vibrant color for emphasis
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
        "Fashion design refers to the art of creating clothes and accessories, combining aesthetic appeal with the functionality required by consumers. It involves the crafting of apparel while ensuring both style and practical use are maintained.",
      content2:
        "Fashion designers must understand their clients' preferences and needs to deliver products that resonate with them. Thus, they need not only creativity but also business skills to optimize resources and create value.",
    },
    {
      title: "Is Fashion Design a good fit for me?",
      content1:
        "The fashion industry continues to grow rapidly, and the demand for fashion designers has surged over the years. While tools and equipment evolve, the core skills of creativity and innovation remain essential. Fashion design allows you to express your creativity while also developing business and management capabilities.",
      content2:
        "As a designer, your role extends beyond conceptualizing new products. You’ll also be involved in marketing and producing designs efficiently. Fashion design isn't just about sketching—it involves overseeing the entire process from idea generation to production and promotion.",
    },
    {
      title: "Fashion Design study options and expenses",
      subtitle1: "Bachelor's in Fashion Design",
      content1:
        "Pursuing a bachelor's in fashion design will introduce you to the fundamentals, such as the history of fashion, clothing textiles, sketching techniques, and fashion event management. The tuition for such a program ranges from $10,000 to $35,000 per year.",
      subtitle2: "Bachelor's in Visual Arts",
      content2:
        "A visual arts degree, which may cost around $35,000 per year, covers design principles and techniques, including fashion merchandising, professional photography, and digital imaging. You can specialize in fashion design within this field.",
      subtitle3: "Bachelor's in Graphic Design with Fashion Focus",
      content3:
        "A graphic design degree with a focus on fashion equips you with a strong understanding of design tools and image manipulation software. This program typically costs about $25,000 per year.",
    },
    {
      title: "Career Outlook",
      content:
        "The employment outlook for fashion design graduates is highly positive, with a 22% projected growth in the retail industry. As businesses continue to emphasize personalization, new and inventive approaches to wearable fashion will be in demand.",
    },
    {
      title: "Career paths for Fashion Design graduates",
      subtitle1: "Senior Fashion Designer",
      content1:
        "Senior fashion designers work in dynamic environments where staying updated on the latest trends is crucial. Key skills include communication and understanding consumer behavior, in addition to creative talent. Job opportunities include roles such as technical designer or apparel and visual merchandise designer.",
      subtitle2: "Creative Director",
      content2:
        "Creative directors bridge the gap between designers and business managers. They ensure that the creative concepts from the design team are effectively translated into commercial products.",
      subtitle3: "Product Designer",
      content3:
        "Product designers with a fashion background are highly sought after in the retail sector. They possess expertise in design concepts and tools, enabling them to create prototypes for fashion products.",
    },
  ];

  return (
    <div>
      {/* Main section with background image */}
      <div style={sectionStyle}>
        <h1>Study Fashion Design Abroad</h1>
        <p>
        Creative with a passion for design and trends?
        </p>
        <p>
        Fashion design could be the perfect career for you!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Fashion designers rate their job satisfaction at
            3.66 out of 5.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Entry-level fashion graduates earn a median salary
            of $53k, with potential for bonuses and overtime.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> The retail fashion industry is projected to grow
            by 22% over the next decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> The industry created 27,800 new jobs in 2021
            alone.
          </p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Program Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => handleToggle(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {/* Display subtitles and content */}
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

export default FashionDesign;
