import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Pharmacology = () => {
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
      title: "About Pharmacology",
      content:
        "Pharmacology refers to the study of drugs and how they affect the body. This involves developing new chemical substances and studying their effects on the body, whether positive or negative. In this way, Pharmacology combines toxicology, biology, chemistry and physiology, which means it’s a skill set that can be relevant to many different jobs within life sciences. In fact, studying Pharmacology can lead you down a pathway into academia, industry or even civil service.",
    },
    {
      title: "Is Pharmacology right for me?",
      content1:
        "To thrive in Pharmacology, you should have strong research skills and technical expertise as well as the ability to manage yourself and stay organised. It’s also important to be able to communicate clearly and professionally, ensuring your findings are understood by all.",
      content2:"Pharmacology is a flexible career path, which means it’s possible to hone into a specialisation that best suits your aptitude and temperament. For example, you could work in product management, marketing or medical information, using your knowledge of Pharmacology to facilitate communication between pharmaceutical companies, doctors and patients.",
    },
    {
      title: "Pharmacology study options and costs",
      content1:
        "At a minimum, pharmacologists require a graduate degree. This can be in Life Sciences, Chemistry, Pharmacy, Biology or a variety of other relevant fields. Some budding pharmacologists choose to study a Master’s or even a Doctorate to improve their understanding of toxicology. As a general guide, a Bachelor of Science might cost around USD$40,000 a year in the US and around AUD$40,000 a year in Australia.",
      content2:"In most countries, you’ll be required to complete coursework in a classroom or laboratory setting as well as clinical practice or practical research. It’s also worth looking into whether you need any licenses or accreditations to work as a Pharmacologist in the country of your choice.",
      content3:"Bear in mind the difference between Pharmacology and Pharmacy courses when you go to choose your study path. Pharmacy courses are focused on the dispensing of prescription medicines, while Pharmacology is more about the research of chemical compounds and medical innovations.",
    },
    {
      title: "Future outlook",
      content:
        "Jobs for medical scientists in general are expected to grow 8% by 2028. As the world population grows, the need for innovative new medicines will also continue to grow. Pharmacology students also have a variety of opportunities to pursue in workplaces as diverse as academia, industry and hospitals.",
       
    },
    {
      title: "Career pathways for Pharmacology graduates",
      subtitle1: "Pharmacologist",
      content1:
        "As a pharmacologist, you’ll be responsible for developing and analysing substances that will be used to treat disease. This involves modifying substances to minimise side effects, carrying out experiments to determine how drug concentrations change in the body over time and studying what happens to the body after a drug has been administered. You’ll also test new substances, write scientific reports on your research, and provide advice to healthcare workers, politicians and the general public.",
      subtitle2: "Pharmacist",
      content2:
        "Pharmacists work within the community to dispense prescription medication and offer advice. As a pharmacist, you will also provide vaccinations and conduct basic medical tests on patients or customers. Pharmacists can also work in industrial settings, developing and quality testing new medicines.",
      subtitle3: "Toxicologist",
      content3:
        "Toxicologists test bodily fluids and tissue samples during the autopsy process to identify any chemicals or toxins that may be present. Typically working in laboratories, they are well-versed in a variety of methods required to determine the precise amount of drugs, poisons or toxins within a person’s body.",
        subtitle4: "Biomedical scientist",
        content4:"Biomedical scientists work to better understand human diseases, including diagnosis, treatment and prevention. By studying the human body, biomedical scientists help to find new ways to cure or treat diseases.",
        subtitle5:"Analytical chemist",
        content5:"Analytical chemists investigate the chemical nature of substances, conduct laboratory research, design instruments and participate in the product development process. In this way, they help to ensure that products are safe for human usage.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Pharmacology abroad</h1>
        <p>
          Pharmacology combines science and pharmacy to develop new medicines
          and treat diseases. Studying Pharmacology offers you a chance to make
          a real difference in the world as well as explore a multifaceted,
          ever-changing career path
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>:Demand for medical scientists will grow 8% by 2028
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> The median salary for pharmacologists is USD$99,000
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Pharmacology salaries in the US range between USD$71,000 and $214,000
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> The global revenue of the pharmaceutical industry is USD$1.27 trillion
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

export default Pharmacology;
