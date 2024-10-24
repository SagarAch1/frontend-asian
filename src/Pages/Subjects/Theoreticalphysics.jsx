import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const TheoreticalPhysics = () => {
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
      title: "About Theoretical Physics",
      content:
        "Theoretical physics employs mathematical models, hypotheses and systems of different abstractions, experiments and simulations to formulate theories that explain natural phenomena. This branch of physics will inculcate advanced mathematical and research skills in you along with developing strong critical thinking and problem-solving skills. The coursework for theoretical physics includes quantum mechanics, astrophysics, thermodynamics, cosmology and much more. A theoretical physics degree, although requires a lot of study, is a respected profession and can lead you to exciting career opportunities. ",
    },
    {
      title: "Is Theoretical Physics right for me? ",
      content1:
        "A career in theoretical physics is best suited for an analytical and agile mind which is capable of thinking outside the box and can perceive ideas on a higher level to “look at the bigger picture”.",
      content2:
        "Determination and patience are qualities that will serve you well in this degree. Students who excel in subjects like mathematics, algebra, statistical mechanics, pre-calculus and physics during high school have a solid foundation for a degree in theoretical physics. Students who like to question the environment around them and are eager to find answers are encouraged to go for this degree. ",
    },
    {
      title: "Study options and costs ",
      content1:
        "Due to the advanced nature of the subject theoretical physics is only taught at the bachelor’s level and beyond. The duration of a bachelor’s degree in Theoretical Physics is four years and the average tuition and fees is variable according to the university of your choice. However, the average annual tuition fee is AUD 39,800 in Australia. A bachelor’s degree will prepare the students’ basic foundation for theoretical and applied physics. Newtonian laws, thermodynamics, calculus and electronics along with the basics of nuclear and quantum physics are common coursework. After this, students can secure jobs such as research assistants and high school physics teachers.",
      content2:
        "After the students have finished their bachelor’s, it is beneficial to go for research positions as it familiarises them with the practical aspects of their subject. Getting a master’s or postgraduate degree is also easier with research experience.",
      content3:
        "Postgraduate degrees are highly-research oriented and an original thesis must be submitted in order to graduate. Tuition fees can vary depending on multiple factors, like specialisation, length of study, university and city. The duration of a master’s degree is two years and the average tuition costs between AUD 36,000-60,000.",
      content4:
        "Following the completion of the master’s degree, acquiring a doctorate is the next step. Its duration is usually four to six years and ends with a dissertation. The average total tuition fee is around $30,000 in the UK. Completing a PhD will allow students to become physicists in universities and can apply for grants for further research.",
    },
    {
      title: "Future outlook",
      content:
        "People with a theoretical physics degree can be employed as lecturers, federal or private researchers, nuclear physicists, medical physicists, astrophysicists and cosmologists. According to the US Bureau of Labor Statistics, the growth in employment opportunities at 9% coupled with lucrative salaries make this a secure and desirable career. Rapid technological breakthroughs and the need to address crucial questions about the nature of the universe are likely to see large amounts of grants and investment being channelled in the field of theoretical physics. Undoubtedly, Theoretical physics is one of the most stable and ideal career paths going into the future.",
    },
    {
      title: "Career Pathways  for Theoretical Physics graduates",
      subtitle1: "Research Scientist",
      content1:
        "Research scientists are hired by both public and private sector organisations. Their primary role is to conduct research on natural phenomena. They work on theories, design experiments to prove their hypotheses and document their findings for publication. The average salary of a research scientist is $83,490 per year.",
      subtitle2: "Astrophysicist",
      content2:
        "Astronomers observe the stars, planets and other celestial entities in the universe. NASA and The Department of Defense are their major employers in the US. However, they work in close association with research scientists and meteorologists. Their average base salary for an astrophysicist is $117,220 per year.",
      subtitle3: "Medical Physicist",
      content3:
        "Medical physicists use their knowledge in the field of radiology. They study the effects and treatments of radiation on the human body and are often consultants along with medical professionals to oversee operative procedures that require radiation. Their average salary is $129,183 per year. ",
      subtitle4: "Aerospace Engineer",
      content4:
        "Aerospace engineers design air crafts and space crafts like satellites, jets and rockets. They may be recruited by space exploration and travel companies or by governments with space programmes. They analyse and interpret flight data to design efficient projects. Their average annual salary is $89,195.",
      subtitle5: "Cosmologists",
      content5:
        "A cosmologist is a scientist who uses space-based and ground-based telescopes and satellites to study the properties of the universe, including planets, black holes and galaxies. They obtain data and observe certain aspects of astronomical objects, including distance, size, motion and brightness The average annual salary of a cosmologist is $87,818. ",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Theoretical Physics abroad</h1>
        <p>
          Theoretical physicists study and research natural phenomena and
          entities ranging from sub-atomic particles to celestial systems like
          galaxies and black holes. Sounds cool? This is just scratching the
          surface of the field.  
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>9% project growth in employment opportunities for
            physicists this decade 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary for physicists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 21,100 projected jobs for physicists in the US
            this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $987,240 - total estimated worth of theoretical
            physicists in various industries 
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

export default TheoreticalPhysics;
