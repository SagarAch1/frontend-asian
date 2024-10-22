import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const ArtHistory = () => {
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
      title: "About Art and History",
      content1:
        "Art history is the study of previous works of art that indicates how people regarded themselves and their surroundings, as well as how they wanted to communicate this knowledge to others. It uses art as a means of comprehending cultural history and connecting it to our present cultural existence.",
        content2:"Art history gives us the tools and terminology we need to analyse the vast amount of visual culture that surrounds us, as well as to develop a historical understanding of artistic output in varied social and cultural settings.",
    },
    {
      title: "Is Art and History right for me?",
      content:
        "Art historians must possess exceptional decision-making abilities, art evaluative competence, and a keen sense of detail. It's crucial to have a true interest in studying historical art since it reveals how people regarded themselves and their surroundings, and how they desired to communicate it to others. Furthermore, sense of colour, item arrangement, and a mind good at recognising patterns, are all desirable. If you believe you possess these traits then this course is a good fit for you.",
    },
    {
      title: "Art and History study options and costs",
      content:
        "Unlike some other art professions, being an art historian requires many years of post-secondary education. Most art historians typically pursue Master's or Doctorate degrees in the field. Art historians who desire to teach might want to get teaching certification as well. Art conservation and restoration may also necessitate a fine arts degree. The usual tuition fee for an undergraduate degree of art history in Australia is around AUD 10,000-15,000 annually whereas in Canada it ranges from CAD 9,800 to 17,200.",
    },
    {
      title: "Future outlook",
      content:
        "By the year 2029, the number of job openings in the art history field is predicted to increase by 9%. In the next years, jobs like as archivists, curators, and museum personnel are projected to be in great demand. These industry trends are similar to those of other sectors in that they are predicted to increase slowly and steadily.",
    },
    {
        title: 'Career pathways for Art and History graduates',
        subtitle1: 'Curator',
        content1: 'A curator is in charge of collecting, storing, and displaying artworks, historical objects, digital materials, and artefacts. Curators may be in charge of working with artists, collectors, benefactors, or other organisations to purchase artwork; documentation and storage; original research and publishing; and innovative exhibition of works, depending on the size of the organisation. Curators are traditionally employed by museums, libraries, and other cultural institutions.',
        subtitle2: 'Art History Professor',
        content2: 'Art history professors help foster an analytic frame of mind in the students to identify for themselves the evolution of art in relationship to culture through history. Art history instructors may spend a large amount of time conducting research, managing art artefacts and mentoring students, depending on their organisation, level of audience, and expertise.',
        subtitle3: 'Museum Director',
        content3: 'The ultimate responsibility for furthering a museums goal, creative direction, collections, scholarship, and programming rests with the director. The director is in charge of the museums daily operations. Directors, like curators, have a say in how the museums shows are designed and manage the collection, storage, and presentation of artworks. Museum directors are also in charge of the organizations administration.',
        subtitle4: 'Art Restorer',
        content4:"Art Restorers are experts at preserving, caring for, and restoring works of art. They oversee the safe storage and transit of works, as well as the analysis of the display environment, the documentation and recording of current conditions, and the determination of necessary restoration activities. They usually specialise in a particular substance of art history artefact like paper, textiles, painting or furniture.",
        subtitle5: 'Art Authenticator',
        content5:"Because of the complexity of art forgery, the ubiquity of art theft, and the illegal movement of artworks from war-torn nations, art buyers and dealers frequently seek the authentication services of an art historian. Authenticators usually specialise on a certain artist or style, and they must be well-versed in study and investigation. Authenticators investigate a work's provenance by tracing its ownership history as far back as feasible, consulting with other experts, consulting with artists' foundations, and contracting scientific tests to establish the viability of the materials employed.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Art and History abroad</h1>
        <p>
        Do you have a penchant for creativity? Do you find yourself inspired by historical narratives? Then an Art and History degree is the perfect choice for you!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>$49,873: </strong>:average income of Art Historians in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>9%</strong>  growth for archivists, curators, and museum workers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Art History</strong>  courses are now offered at over 100 institutions worldwide
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>The worldwide arts market</strong>  is expected to be worth over AUD $700 billion by 2025.
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
          {item.subtitle5 && (
            <div style={faqSubtitleStyle}>{item.subtitle5}</div>
          )}
          {item.content5 && <p>{item.content5}</p>}
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

export default ArtHistory;
