import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Biochemistry = () => {
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
      title: "About Biochemistry",
      content1:
        "The subject of study in biochemistry is living beings and the various chemical processes that underpin their existence. From studying viruses to engineering their cures, the field of biochemistry is vast. It is a field that requires critical thinking and a deep understanding of how key concepts relate to one another. Much of biochemistry deals with the structures, bonding, functions, and interactions of biological macromolecules, such as proteins, nucleic acids, carbohydrates, and lipids. ",

      content2:"Biochemistry has three major branches 1.Structural Biology overlaps with molecular biology and biophysics as it moves to understand the structure of biological macromolecules and their functions. Structural biologists have made significant contributions towards understanding the molecular components associated with Alzheimer's disease, Parkinson's disease, and type II diabetes. 2. Enzymology is the study of enzymes. Developing an understanding of how these biological catalysts affect chemical reactions allows us to understand the relationship of different chemical groups. Enzymes are used in the chemical industry and other industrial applications when extremely specific catalysts are required. 3.Metabolic biochemistry is the field in which the life-sustaining chemical reactions taking place inside an organism are studied: the conversion of the energy in food to energy available to run cellular processes.",
    },
    {
      title: "Is Biochemistry right for me?",
      content:
        "If you’re interested in working in labs doing research on microscopic organisms and chemical solutions, then biochemistry is an ideal choice for you. Students with a childhood interest in science tend to form the bulk of biochemistry students. You will enjoy studying biochemistry if you have a special interest in studying the application of chemistry to the study of biological processes at the cellular and molecular levels.",
    },
    {
      title: "Biochemistry study options and cost",
      content:
        "The US is the top choice for studying biochemistry for a number of reasons. It has world-renowned universities, joint programs, Nobel laureate professors, and opportunities for scholarships. It has been the go-to choice for a large number of international students. There are universities such as Caltech, Harvard, and MIT that offer the best blend of courses to be well versed in the theoretical and applied aspects of the field. The average cost of studying biochemistry in the US is around is $35,000 per annum for a 3 or 4-year program.Another popular destination for studying biochemistry is the United Kingdom. The average annual cost of studying biochemistry in the UK for an international student is £39,010 per annum. UK’s world renowned Oxford University houses the largest biochemistry department in Europe. The university’s 4-year undergrad program is renowned for cultivating some of the most outstanding biochemists in the world.Japan is also a popular destination for a degree in biochemistry, because of its experimental focus and state-of-the-art laboratories. The country is considered a powerhouse in biochemistry research. Students can apply to top universities like the University of Tokyo, Kyoto University, and Tohoku University. The average cost of a biochemistry degree in Japan is $12,000 per annum. ",
    },
    {
      title: "Future outlook",
      content:
        "Biochemistry is touted as the science of the future. There is 5% growth forecast in the field of biochemistry for the next ten years. Techniques, tools, and applications of biochemistry are expanding as technology and knowledge progresses. There is increased demand for new drugs and procedures to cure and to prevent disease, in turn, increasing demand for biochemists involved in biomedical research, genetic research, clean energy, efficient food production, and environmental protection.",
    },
    {
      title: "Career pathways for Pest and Weed Control graduates",
      subtitle1: "Biomedical scientists",
      content1:
        "Biomedical scientists are responsible for better understanding, diagnosing, treating and preventing human diseases. They not only study the human body and gain knowledge of how it works, but are responsible for finding new ways to cure or treat diseases.",
      subtitle2: "Microbiologists",
      content2:
        "Microbiologists study microorganisms such as bacteria, viruses, algae, fungi, and some types of parasites. Microbiologists work in laboratories and offices, where they conduct scientific experiments and analyze the results.",
      subtitle3: "Biotechnologists",
      content3:
        "Biotechnologists create and improve products and processes for agriculture, medicine and conservation using biological organisms. They study the genetic, chemical and physical attributes of cells, tissues and organisms, and identify industrial uses for them. ",

      subtitle4: "Academia",
      content4:"Research opportunities abound in biochemistry. In addition, there are lots of career opportunities in academia for biochemists to impart their knowledge to the next generation of biochemistry professionals. Most biochemistry academics are involved in both teaching and research work simultaneously.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Biochemistry abroad</h1>
        <p>
          Biochemistry is the study of all living things at a cellular,
          molecular, and atomic level to understand the biological processes and
          functions that govern life. This field is research intensive and
          explores new applications to understand and improve life.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: $94,270: median annual wage for biochemists and biophysicists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 5% project employment growth for biochemistry professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 3,200 openings projected every year in Biochemistry field
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Higher job satisfaction than 56% other careers
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

export default Biochemistry;
