import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Environmentconservation = () => {
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Creative Writing",
      content:
        "A Creative Writing program is geared towards helping students develop competencies in writing compelling narratives. Students pursuing Creative Writing courses will study written works such as novels and plays, as well as courses on how to enhance their writing skills. These skills will enhance your employability in a wide array of sectors especially marketing and advertising.",
    },
    {
      title: "Is Creative Writing right for me?",
      content:
        "If you are good with words and love to put your thoughts into writing, then creative writing is the right field for you. Creative Writers are driven by their creativity to develop interesting characters, plots and ideas. They have exceptional critical thinking skills to have an in-depth understanding of other writer’s work. They must be good at time management to meet multiple deadlines. They also possess the quality of being persuasive as they, especially in advertising and media business, have to persuade a mass audience to feel a certain way about a service or product. They have deep social perceptiveness to understand how readers react to ideas to connect with their audience. Last but not the least, they have exceptional writing skills to be able to write clearly and effectively to convey feelings and emotion. If this sounds interesting to you, then an pursuing a degree in Creative Writing might be a great idea.",
    },
    {
      title: "Creative Writing study options and costs",
      content:
        "The undergraduate programme in Creative Writing takes about 3-4 years of full-time study to complete and costs around $13,296 in the US and £9,250 in the UK. Students who choose to go for a graduate programme to advance their careers can expect 1 year full-time or a 2-year part-time master’s programme. The cost of a master's in Creative Writing in the UK is around £9300-£13,000. In the US, it takes around 2 years to complete a master’s degree with an average tuition around $30,000-$40,000.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, employment of writers and authors is projected to grow 9 percent from 2020 to 2030. Moreover, about 15,400 openings for writers and authors are projected every year! The data also shows that employment in media and communication occupations (including creative writers) is projected to grow 14 percent from 2020 to 2030.",
    },
    {
        title: 'Career Pathways for Creative writing graduates',
        subtitle1: 'Advertising Copywriter',
        content1: 'As an advertising copywriter, youll collaborate with an art director at an advertising, media, or digital marketing agencys creative department. Youll create, develop, and generate gripping advertising campaigns based on client briefs. The tasks of an advertising copywriter include identifying the target demographic, as well as liaising with clients and interpreting their mandates. They also come up with creative concepts and ideas, typically in collaboration with the art director.',
        subtitle2: 'Lexicographer',
        content2: 'As a lexicographer, youll look for evidence of a word or phrases meanings and usages in specialist databases containing thousands of pieces of language from a variety of sources (known as the corpus) which may include literature, newspapers, online journals, blogs, discussion groups, and transcripts of television and radio. Youll analyse entries and examine potential new entries based on this data and your own judgment.',
        subtitle3: 'Magazine Journalist',
        content3: 'Consumer titles that cover both common interest and expert areas such as customer magazines and trade magazines, are among the publications that magazine journalists analyse and compose news articles and features for. As a magazine journalist, you may be involved with the publications production, such as sub-editing and design, in addition to writing.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Creative Writing abroad
        </h1>
        <p>
        Creative Writing is the art of capturing the audience's attention and conveys a narrative. A degree in Creative Writing will help you understand the publishing industry and polish your writing skills.



        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 15,400 estimated job openings for writers and authors every year


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 9% projected employment growth of writers and authors this decade


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Median annual income of writers and authors


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 14% projected growth in employment of creative writers this decade


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

export default Environmentconservation;
