import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Writtencommunication = () => {
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
      title: "About Written Communication",
      content:
        "Written Communication teaches you a variety of skills that prepare you be a writer, communicator, and storyteller in a professional capacity. The degree is pertinent to multiple fields, including marketing, corporate communications, technical writing, and others. Not only do you learn to write well, you learn the ‘back end’ of writing, too—the fundamentals of good communication, information design, rhetoric, and other useful concepts and tools most people are unaware of. Written Communication means being successful in making complex or unfamiliar concepts easy for others to understand. It also means making those ideas interesting for others.  ",
      
        
    },
    {
      title: "Is Written Communication right for me?",
      content1:
        "Studying Written Communication will lead you to careers like marketing, technical writer, content specialist, procurement specialist, technical analyst, and document designer. The Written Communication programme will teach you the value of rhetoric in both reading and writing techniques.",
      content2:
        "Students will learn to write for diverse audiences, from colleagues and management to customers and clients. Various forms of written communications will be completed in departmental courses, including professional proposals, reports, memos, research papers, and case analyses. Students will have opportunities to write both individually and in a team environment.",
        content3:"Students will be evaluated for specific written communication skills. The instructor will give clear guidance on the requirements of written communication assignments as well as the standards the student will be expected to meet. If you are fascinated with writing, research, critical thinking and design, then this programme is the right fit for you.",
    },
    {
      title: "Written Communication study options and costs",
      content1:
        "A Bachelor's in Written Communication is an undergraduate degree that provides students with valuable skills for writing and presenting in the public and private sector. Generally, coursework takes four years to complete and the cost varies from $14,842 to $28,741 per year depending on the institution.",
      content2:
        "A master's in Written Communication is a postgraduate degree that provides students advanced research, writing, and presenting skills. Students will typically investigate topics based on a broad range of course subject matters that will apply their academic experience to their careers. The length of time it takes to complete coursework towards this advanced degree is two years. The average cost of a master’s program in Written Communication is $42,672.",

    },
    {
      title: "Future outlook",
      content:
        "As technology and electronics become increasingly sophisticated the need for accompanying manuals that can clearly communicate the technical instructions to users clearly is skyrocketing. Written Communication specialists are employed by pharmaceutical, electronics, automobile, scientific research and similar sectors to write journal articles, how-to guides and instruction manuals. Employment growth for written communication specialists is projected to be 12% this decade, which will result in more than 55,000 new jobs! ",

    },
    {
      title: "Career Pathways for Written Communication graduates",
      subtitle1: "Editor",
      content1:
        "It’s an editor’s job to oversee a piece of writing from draft to publication. Depending on the type of writing they’re editing, this can include honing the thesis, framing, and structure. Editors need to have an in-depth understanding of all things writing—including grammar, style, narrative, and structure. Editors earn on average $53,520 per year.",
      subtitle2: "Content Marketing Manager",
      content2:
        "Content marketing managers are the leads when developing and executing content for a company is concerned. While some content marketing managers take a generalist approach, many specialise in creating and overseeing specific types of content. Their annual average income is around $68,395.",
      subtitle3: "Communications Manager",
      content3:
        "Communications managers are in charge of a company’s communications, often both internal and external. Responsibilities could include defining, developing and managing the company’s communication strategy, writing internal guides and resources. The average annual salary of a communication manager is $65,852.",
        subtitle4: "Curriculum Developer",
      content4:"Curriculum developers are responsible for researching and writing academic, educational, and/or training materials, including textbooks, digital and college course materials. Depending on the type of curriculum they specialise in, curriculum developers may work for universities, research institutions, nonprofits, or corporations. The average annual salary of a curriculum developer is $63,750.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Written Communication abroad</h1>
        <p>
          Written Communication students learn about rhetoric, grammar,
          etymology and communication. The study is designed to train them in
          digital, copy and content writing. They are employed in a variety of
          sectors as a technical writer or similar roles.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $60,340: average yearly salary of a written
            communication specialist
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 11,200 projected job openings for editors every
            year this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average annual salary of technical writers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 12% projected employment growth of written
            communication specialists
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

export default Writtencommunication;
