import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Graphicanddesign = () => {
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
      title: "About Graphic and Design studies",
      content:
        "Graphic designers communicate through the content they create. From making simple marketing advertisements to crafting the interface of applications, the skill of a graphic designer always remains in high demand. You will study a wide range of different subjects in a graphic designing program including visual identity graphic design, art and illustration, motion graphic design, packaging graphic design, marketing and advertising graphic design, publication graphic design, user interface graphic design, and environmental graphic design.",

    },
    {
      title: "Is Graphic and Design studies right for me?",
      content:
        "Graphic design is for creative minds that can think out of the box to bring forward new and innovative ideas. If you see an advertisement and think of better ways to get the same message across, you probably have an aptitude for graphic design. Or if you are using an application or website interface and have ideas on how it can be more user-friendly, you are an ideal fit for this field.",
    },
    {
      title: "Graphic and Design Studies study options and costs",
      content1:
        "Bachelor of Arts in Graphic Design is 3-4 years long undergraduate degree course that deals with conceptualization, designing and execution of an idea. The course includes subjects such as color theory, typography and layout theory. Diploma in Graphic Design course is a 1-year diploma which focuses on topics such as multimedia, animation, and 3D modelling.",
      content2:"The average tuition fees of bachelor’s in graphics and design studies is around $50,000 annually in the US. The learning is course and practice based with internships and mentorships.",
    },
    {
      title: "Future outlook",
      content:
        "Graphic designers are traditionally associated with the media, advertising and PR industry but there is huge demand in a wide range of industrial sectors. According to the New York Institute of Art and Design, the average salary for entry-level graphic designers is $49,806 per annum. Employment of graphic designers is projected to grow 3 percent from 2020 to 2030. In computer systems design services, the need for graphic designers is expected to grow as companies continue to increase their digital presence.",
    },
    {
      title: "Career pathways for Graphic and Design studies graduates",
      subtitle1: "Creative designer",
      content1:
        "As a creative designer, you will be required to conceptualize and visualize new ideas. Working together with copywriters and art directors, a creative designer uses his skill with different graphic design tools to bring new ideas to life. Commercial creative designers make graphic design art for businesses that need design elements for logos, product packages or marketing materials. In the electronic arena, creative designers create banners for web pages or graphics for television broadcasts. In the advertising and publishing industries, creative designers make graphics used to complement or illustrate articles or ad layouts.",
      subtitle2: "Web designer",
      content2:
        "A web designer, as the name suggests, designs websites. Having an in-depth understanding of website layouts, a web designer knows how to maneuver any issues that can present themselves and keep the smooth functioning of the website at all times. The task is to present the brand of the website, through the experience of the website itself. A web designer studies user traffic to craft a user-friendly experience.",
      subtitle3: "User experience (UX) and User interface (UI) designer",
      content3:
        "UX-UI designers are generally responsible for collecting, researching, investigating and evaluating user requirements. Their responsibility is to deliver an outstanding user experience providing an exceptional and intuitive application design.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Graphic and Design studies abroad</h1>
        <p>
          Consumer behavior has shown that people react more positively towards
          visual content than other formats such audio or text. This has led to
          a growth in demand for graphic and design professionals who are
          trained to produce such content.
        </p>
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
            <strong>23,900</strong>  jobs projected to open each year for new graphic designers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Digital categories in graphic design to rise by 24%
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong> 5% </strong>projected increase in employment
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

export default Graphicanddesign;
