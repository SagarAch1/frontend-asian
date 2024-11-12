import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const DigitalProduction = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle FAQ visibility
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

  const statisticsSectionStyle = {
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
    color: "#4CAF50", // Attractive color
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
      title: "What is Digital Production?",
      content1:
        "Digital Production is a cross-disciplinary field combining film production, sound design, screenwriting, and media theory. It involves turning creative ideas and assets such as images, text, and interactive apps into various forms of digital media, including music, videos, and online content.",
      content2:
        "Students explore how to analyze media, create various types of content, and manage the technological and commercial aspects of working in the media industry. The program teaches storytelling for both fiction and nonfiction, utilizing different types of media.",
      content3:
        "This course emphasizes hands-on learning, offering access to high-end digital cameras, recording rooms, and studios to prepare students for professional work in the industry. Could you be the next production star?",
    },
    {
      title: "Is Digital Production a good fit for me?",
      content1:
        "Prospective digital production students typically need to show a passion for the creative arts and media. The program covers the latest production techniques and tools, with a strong focus on creativity and personal expression. The hands-on nature of the program allows students to work on both individual and group projects, allowing for growth in the field.",
      content2:
        "If you are passionate about content creation and see yourself working in filmmaking, music production, or other media-related fields, Digital Production is a great choice to accelerate your career.",
    },
    {
      title: "Costs and study options for Digital Production",
      content1:
        "A bachelor’s degree in Digital Production in the US costs between $20,000 and $30,000 annually, taking three to four years to complete. Master’s degree programs generally range from $30,000 to $40,000 and take two years.",
      content2:
        "There are also certificate programs, typically lasting one year, that focus on essential production skills such as digital video technology, multimedia, and editing. These programs can be pursued before or after earning a degree and are suited for those looking to enhance their skills or transition into digital production from other industries.",
    },
    {
      title: "Career Outlook for Digital Production Graduates",
      content:
        "As technology advances, the digital production landscape evolves with new media formats, such as animation, multimedia, website development, and gaming. The job market for digital production professionals is expanding, with a predicted 18% increase in employment for video editors over the next decade. The future of this field holds great potential for growth and innovation.",
    },
    {
      title: "Career Opportunities for Digital Production Graduates",
      subtitle1: "Digital Media Strategist",
      content1:
        "A digital media strategist analyzes consumer trends and behaviors to develop media strategies, such as advertising campaigns and online content, aimed at increasing brand awareness and sales.",
      subtitle2: "User Experience Designer (UX)",
      content2:
        "A UX designer studies how users interact with technology (e.g., websites, apps) and uses that information to enhance the user experience by improving usability and design.",
      subtitle3: "Graphic Designer",
      content3:
        "Graphic designers create visual layouts and graphics for both print and digital media, applying their creative and technical design skills.",
      subtitle4: "Digital Illustrator",
      content4:
        "Digital illustrators produce drawings and designs for a variety of applications, such as advertisements, book covers, and product packaging, either independently or as part of a company’s creative team.",
      subtitle5: "Video Game Designer",
      content5:
        "Video game designers develop characters, environments, and visual styles for games, using computer animation tools to create compelling gaming experiences.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={sectionStyle }>
        <h1>Study Digital Production Abroad</h1>
        <p>
          Looking to craft stories that captivate audiences? Digital production is the perfect
         
        </p>
        <p>  field to hone your storytelling skills and bring your creative
        visions to life in the world of media.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsSectionStyle}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>4.79%</strong> expected growth of the global animation market.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$93,940</strong> median annual salary for digital production managers in the US.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>4%</strong> job growth projected for multimedia arts professionals in this decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>$77,700</strong> median salary for multimedia artists annually.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSectionStyle}>
        <h2>Program Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleFaq(index)}>
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
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
                {item.content4 && <p>{item.content4}</p>}
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
                {item.content5 && <p>{item.content5}</p>}
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

export default DigitalProduction;
