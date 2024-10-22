import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Biotechnology = () => {
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
      title: "About Biotechnology",
      content:
        "The study of biotechnology has been there in formal or informal ways throughout the centuries. In ancient times, humans used to manufacture cheese and yogurt by culturing milk with microbes. Whereas now, we have advances that allow us to study microbes at their genetic level. Thanks to biotechnology, now we have been able to mass-produce insulin as well. From creating lifesaving artificial hormones, a biotechnologist is at the forefront of innovation. The application of the field is immense and wide. Anyone pursuing a career in the field would find themselves constantly being challenged to find new solutions to problems.",
    },
    {
      title: "Is Biotechnology right for me?",
      content:
        "If you keep gravitating towards the scientific section of news but are not interested in pursuing a career in traditional medicine, then pursuing higher education in biotechnology can be the perfect fit for you. It is a lucrative career option for those who are keen researchers and aim to study in the field of biology. The field requires an individual to be detail-oriented and passionate about innovation that can make a difference for humanity in the longer run. From developing new vaccines for humanity to genetically engineering high-yielding crops, the field of biotechnology provides a great opportunity for an individual looking for growth and prosperity. Individuals with greater curiosity to understand living beings at a genetic level will find themselves perfectly fit for this field. It goes without saying that analytical skills and an aptitude for hard work are other key requirements for a biotechnologist.",
    },
    {
      title: "Biotechnology study options and costs",
      content1:
        "Biotechnology degrees focuses on imparting knowledge in a wide range of subjects including bioinformatics, gene understanding and identification, DNA sequencing, drug and biologic development, genetic engineering, biotechnology management, and marketing within the industry, ethical implication of food and human biotechnology. Below are some degree options with associated costs:",
      content2:"1. Bachelors in Bio Informatics can cost up to 17,280 USD/year in the USA",
      content3:"2. Bachelors in Molecular Biology can cost you around $34,949",
      content4:"3. Bachelor Of Biomedicine biotechnology can cost you up to the US $37,122 a year",
      content5:"4. BSc in Biotechnology costs around $17,852 annually.",
      content6:"5. A Diploma in Biotechnology is for two-year max and cost up to $15000",
      content7:"Each area of study offers a broad base knowledge in biotechnology in various fields .while you can also pursue further on as graduate and postgraduate studies in biotechnology for future growth in your career.",
    },
    {
      title: "Future outlook",
      content:
        "There is huge potential within the industry with regard to further growth within the field. According to BLS Occupational Employment and Wage Statistics survey, the market for biotechnologists is expected to grow at 6% from 2020-30. This means that 87000 jobs would be created for new entrants. As a biotechnologist, you would be at the forefront of research and development within medical science, healthcare, agriculture, and environmental development.",
    },
    {
      title: "Career pathways for Biotechnology graduates",
      subtitle1: "Lab specialist",
      content1:
        "You can work in pharmaceutical companies. Where you will be at forefront of developing new medicines and vaccinations. The annual remuneration of lab specialists averages at $46,340 per year",
      subtitle2: "Pathologist",
      content2:
        "You would be working in a medical laboratory in order to understand the genetic coding of microbes and new viral diseases.",
      subtitle3: "Forensic analyst",
      content3:
        "A Forensic Analyst usually works as a criminal investigator and carries out DNA analysis for police. A forensic analyst makes around $60,590 per year.",
      subtitle4: "Environmental consultant",
      content4:"As an environmental consultant, you would be working to assess and monitor viral and polluting contaminations within the environment and its implication on ecology. And provide services to various entities such as government or private institutes.",
      subtitle5: "Genetic Counselor",
      content5: "As a genetic counselor, you would be working within a fertility clinic to research areas such as assistive reproduction and fetus gene therapist.",
      subtitle6: "Marketing manager",
      content6: "A Biotechnologist can also work as a marketing /sales representative, where you will be advising organisations in the application of biotechnical concepts and tools in the company’s manufacturing process.",
      subtitle7: "Food Biotechnologist",
      content7:"You would work in developing food products that are cost-effective and environmentally sustainable for organizations. On average, a food biotechnologist makes around $68,830 annually.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Biotechnology Abroad</h1>
        <p>
          PBiotechnology is an interdisciplinary field that studies biological
          matter at cellular level. It entails the study of cell biology, tissue
          cultures, genetics, immunology, food biochemistry, microbiology, and
          plant biotechnology.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>: The median starting salary for a biotechnologist is $46,340 annually in the USA.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> A Genetic Counselors can make up to $85,700
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>Biotechnology field is projected to grow by 6% in the next decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 87000 new jobs will be created in the industry within the next 5 years
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

export default Biotechnology;
