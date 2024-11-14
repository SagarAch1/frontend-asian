import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const TheoreticalPhysics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Switch between open and closed states
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/idesign.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "1900px",
    color: "black",
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
    color: "#4CAF50", // Alter color to enhance appeal
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
        "Theoretical physics utilizes mathematical models, hypotheses, and simulations to create theories that explain natural phenomena. This field develops strong mathematical, research, and critical thinking skills. The coursework covers topics like quantum mechanics, astrophysics, thermodynamics, and cosmology. A degree in theoretical physics is demanding but respected, opening up various career possibilities.",
    },
    {
      title: "Is Theoretical Physics right for me?",
      content1:
        "A theoretical physics career is best suited for an analytical and open-minded individual who can think creatively and analyze complex ideas at a higher level.",
      content2:
        "Patience and determination are essential for success in this field. Students with strong backgrounds in subjects such as mathematics, algebra, and physics are well-positioned for this degree. Those curious about the world around them and driven to find answers should consider this field.",
    },
    {
      title: "Study options and costs",
      content1:
        "Theoretical physics is taught at bachelor’s level and beyond. A bachelor’s degree typically lasts four years, with average tuition fees of AUD 39,800 in Australia. The course covers topics like Newtonian laws, thermodynamics, calculus, and quantum physics. Graduates can work as research assistants or physics teachers.",
      content2:
        "After completing a bachelor’s, students can gain research experience to prepare for a master's or postgraduate degree, which is research-intensive and requires a thesis. Tuition fees for a master’s range from AUD 36,000 to AUD 60,000, with a typical duration of two years.",
      content3:
        "Following a master's, a PhD takes four to six years and requires submitting a dissertation. The average tuition fee for a PhD in the UK is around $30,000. A PhD opens the door to becoming a university physicist and applying for research grants.",
    },
    {
      title: "Future outlook",
      content:
        "Graduates with a theoretical physics degree can pursue careers as lecturers, researchers, nuclear physicists, medical physicists, astrophysicists, and cosmologists. Employment in the field is expected to grow by 9% in the coming decade, with high earning potential. The field’s continuous advancements ensure job security and a promising career trajectory.",
    },
    {
      title: "Career Pathways for Theoretical Physics graduates",
      subtitle1: "Research Scientist",
      content1:
        "Research scientists work in public or private sectors, conducting experiments to explore natural phenomena and testing hypotheses. The average annual salary is $83,490.",
      subtitle2: "Astrophysicist",
      content2:
        "Astrophysicists study celestial objects like stars and planets, often working for agencies like NASA. Their average salary is $117,220 per year.",
      subtitle3: "Medical Physicist",
      content3:
        "Medical physicists focus on the effects of radiation on the human body and work alongside medical professionals in treatment procedures. Their average salary is $129,183 per year.",
      subtitle4: "Aerospace Engineer",
      content4:
        "Aerospace engineers design aircraft and spacecraft. They may be employed by space agencies or private companies, analyzing flight data to improve designs. The average salary is $89,195 annually.",
      subtitle5: "Cosmologists",
      content5:
        "Cosmologists use telescopes to study the universe, including black holes and galaxies. They gather data on various astronomical objects. The average annual salary is $87,818.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Theoretical Physics Abroad</h1>
        <p>
          Theoretical physicists explore and analyze everything from subatomic particles to vast galaxies. 
        </p>
        <p>
        This field is both exciting and vast—just the beginning of an incredible journey in science.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 9% projected growth in physicist job opportunities this decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary for physicists.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 21,100 new physicist positions projected in the US this decade.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $987,240 estimated worth of physicists in various industries.
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
