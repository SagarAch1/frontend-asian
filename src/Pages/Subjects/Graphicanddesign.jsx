import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Graphicanddesign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close functionality
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
    color: "#4CAF50", // Updated color for better visual appeal
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
      title: "About Graphic and Design studies",
      content:
        "Graphic designers communicate through the content they create. From simple marketing advertisements to crafting application interfaces, the skill of a graphic designer remains in constant demand. In a graphic design program, you will study subjects such as visual identity design, art and illustration, motion graphics, packaging design, marketing and advertising, publication design, user interface design, and environmental graphics.",
    },
    {
      title: "Is Graphic and Design studies right for me?",
      content:
        "Graphic design is ideal for creative thinkers who can innovate and bring fresh ideas to life. If you often think of better ways to convey a message when you see an advertisement, or if you have suggestions for improving the user experience of an app or website, graphic design may be the right field for you.",
    },
    {
      title: "Graphic and Design Studies study options and costs",
      content1:
        "A Bachelor of Arts in Graphic Design is a 3-4 year undergraduate program focusing on conceptualization, design, and execution. Subjects include color theory, typography, and layout theory. A Diploma in Graphic Design, on the other hand, is a 1-year course covering topics such as multimedia, animation, and 3D modeling.",
      content2:
        "In the US, the average annual tuition fee for a Bachelor's in Graphic Design is around $50,000. The learning process combines coursework and practical experience, with opportunities for internships and mentorship.",
    },
    {
      title: "Future outlook",
      content:
        "While graphic designers have historically been linked with media, advertising, and PR, their demand is now widespread across various industries. According to the New York Institute of Art and Design, the average salary for an entry-level graphic designer is $49,806 per year. Employment of graphic designers is expected to grow by 3% from 2020 to 2030. Particularly in computer systems design services, the need for graphic designers is anticipated to increase as more companies enhance their digital presence.",
    },
    {
      title: "Career pathways for Graphic and Design studies graduates",
      subtitle1: "Creative Designer",
      content1:
        "Creative designers are responsible for brainstorming and visualizing fresh concepts. They collaborate with copywriters and art directors to transform these ideas into reality using various graphic design tools. Creative designers in the commercial field design logos, product packaging, and marketing materials, while in the electronic domain, they may create web banners or television broadcast graphics. In advertising and publishing, they design graphics to complement or illustrate articles and ads.",
      subtitle2: "Web Designer",
      content2:
        "A web designer's role involves designing websites. They must have a deep understanding of layout design and troubleshoot any issues to ensure smooth website functionality. The web designer’s task is to shape the brand's identity through the design and user experience of the website, analyzing user traffic to improve the overall experience.",
      subtitle3: "UX/UI Designer",
      content3:
        "UX/UI designers focus on researching and evaluating user requirements to deliver an intuitive and exceptional application design that provides an outstanding user experience.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Graphic and Design studies abroad</h1>
        <p>
          Studies have shown that consumers are more responsive to visual content than other formats like text or audio.
        </p>
        <p> As a result, the demand for graphic and design professionals who can create such content is on the rise.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$53,380</strong> average salary of graphic designers in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>23,900</strong> new jobs expected each year for graphic designers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>24%</strong> increase in digital categories in graphic design
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>5%</strong> projected employment increase
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
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

export default Graphicanddesign;
