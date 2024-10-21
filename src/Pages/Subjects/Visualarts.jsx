import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Visualarts = () => {
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
      title: "About Visual arts",
      content:
        "The term visual arts implies creating a knowledge-base for certain design principles and rules for visual art that hold for any medium that they are applied to, whether it be related to digital graphics, physical oil paintings, creating sculptures etc.",
    },
    {
      title: "Is Visual arts right for me?",
      content:
        "In this specific field, it is important for any aspiring candidate to be passionate about art in general. Not only that, but the candidate needs to be creative. While creativity is somewhat subjective, and it might be hard for any person to judge their own work, the field does require someone who is passionate about the subject, and can approach whatever they are working on in a creative manner.  ",
    },
    {
      title: "Visual arts study options and costs",
      content1:
        "Candidates have a number of options to choose from. But if we consider the U.S. given its popularity, the most expensive art schools costs between $30,000-$35,000 annually. As is evident from the high price tag, art schools are generally known to be expensive all around the world.",
      content2:"The average cost of a visual arts degree in Australia is AUD 126,000 and in Canada is CAD 136,000. Many candidates also secure valuable scholarships and financial aids.",
      content3: "European universities are also famous for their art schools given the rich cultural history. Countries such as France, Italy, U.K., Netherlands are also famous for their visual arts programs as well. Other countries popular for their visual art degree include Japan and South Korea.",
    },
    {
      title: "Future outlook",
      content:
        "There are certain industries such as IT that are experiencing natural growth over the past few decades, which automatically implies that employment growth in such fields will be higher. But for developed and matured fields such as visual arts, the growth is slow but consistent. In the coming decade in the U.S., around 4% growth is expected in this field. While this field is growing, any aspiring candidates should keep in mind that they will be competing in a highly-competitive industry where skill will be required in order to grow. However, career growth and pay-outs in this industry are comparatively far higher for individuals when compared to other industries",
    },
    {
      title: "Career pathways for Visual arts graduates",
      subtitle1: "Set Designer",
      content1:
        "A set designer uses the design principles learned in order to create a visual environment that he/she knows will work with the audience. Certain methods of arranging the set might not be apparent to the normal person, but a set designer knows the devil is in the details. Knowing the principles/rules of visual art will help create a visual environment that connects with the audience without them even realizing it.",
      subtitle2: "Product Design",
      content2:
        "Today, companies spend millions (and even billions in some cases) of dollars on the design of their product. This is because they know that the visual appeal plays a major rule in the sale of their product. This is why they use the massive budget on hand to hire capable product designers who understand where attention detail is necessary, and how to translate it based on the rules of design that they have learned over the years.",
      subtitle3: "Photographer",
      content3:
        "A degree in the visual arts category can land you a career as a photographer. As a photographer, you would take the lessons of design principles, understanding tone and different colours schemes, angles etc. in order to professionally translate it into a visual image.",
      subtitle4: "Graphic Designer",
      content4:"A graphic designer today has a diverse range of opportunities that can be taken advantage of, as almost every company today requires one for their marketing/advertisement. Not only that, but digital graphic designers today are in the spotlight due to the recent NFT boom that has created an entirely new industry and demand for such artists.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Visual arts abroad</h1>
        <p>
          Visually creative content seems to be a preference for viewers whether
          it be in the shape of film, animation paintings or photography. A
          career in visual seems to hold a bright and promising future, with an
          expectancy to further grow over the next decade.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: The median salary for visual arts professionals in the U.S.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>37000</strong>  new jobs projected by 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Increase in jobs in the last decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>4%</strong>  growth is expected in the animation/visual effects sector
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

export default Visualarts;
