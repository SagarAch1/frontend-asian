import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Pharmaceutical = () => {
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
      title: "About Pharmaceutical Science",
      content1:
        "Pharmaceutical science is a branch of science concerned with the development and synthesis of new medications and new drug therapies, and their testing in biological systems.",
      content2:
        "Pharmaceutical scientists contribute to the discovery and development of innovative drug therapies that save lives and improve the quality of people’s lives. Drug development includes developing therapies with natural or synthetic ingredients, investigating new ways to use existing drugs to treat other diseases, or determining the most effective formulation of specific compounds. Common course modules you can expect to study are pathology, pharmaceutical analysis, pharmacology, biostatistics, medicinal chemistry, microbiology, immunology, cellular biochemistry and biosafety.",
    },
    {
      title: "Is Pharmaceutical Science right for me?",
      content:
       " Pharmaceutical science is a good study option for students who want to shape the future of healthcare in a laboratory or research setting, or who want to apply to medical school in the future. Given the inquisitive nature of the work, curious minded individuals are naturally drawn to this field. To be successful in this field, you should be talented in math and science and have a keen interest in medicine, including drug discovery and development.",

    },
    {
      title: "Pharmaceutical Science study options and costs",
      content1:
        "You can pursue pharmaceutical science at the bachelor’s, master’s and doctorate level. A Bachelor’s of Science in Pharmaceutical Science will prepare you for entry-level research positions. Following an undergraduate degree, possible careers include drug analysis, drug manufacturing, medicine marketing, and pharmaceutical sales. The average cost of a bachelor’s degree in pharmaceutical science is $34,000.",
      content2:
      "Gaining a master's degree in pharmaceutical science—or a similar field such as pharmacology, medicinal chemistry, or biomedical science—is an excellent way to gain the skills and experience required for a career in pharmaceutical science. According to the American Association of Colleges of Pharmacy, tuition for a master's degree in pharmacy in the US ranges from 22,400 USD to 103,000 USD.",
      content3:"A PhD in Pharmaceutical Sciences can be obtained with a focus on one of three research cores: drug discovery, drug action, or drug delivery. The Doctor of Pharmacy (PharmD) degree prepares pharmacists for careers in hospitals, outpatient ambulatory care settings, community pharmacies, nursing homes, managed care, academic institutions, research, industry, federal agencies, and other advanced clinical pharmacy settings. Its tuition cost can vary from $31,141 to $41,831.",
    },
    {
      title: "Future outlook",
      content1:
        "After the coronavirus outbreak, there has been a surge in demand for professionals in the medicine and healthcare industry and related sectors. Medical scientists' (including pharmaceutical researchers') employment is expected to grow by 13%.",
        content2:"According to the US Bureau of Labor Statistics, those working in pharmaceutical and medicine manufacturing earn the most ($115,450), followed by those working in research and development ($90,910). According to BLS data, medical scientists working in academia earn the lowest median annual salary of $61,270. Employment in this field is expected to grow at a faster rate than the national average from 2018 to 2028.",
        content3:"The handsome pay packages and brilliant employment growth opportunities is a testament to the bright prospects of studying pharmaceutical science.",
    },
    {
      title: "Career pathways for Pharmaceutical Science graduates",
      subtitle1: "Pharmaceutical Scientist",
      content1:
        "A pharmaceutical scientist's work encompasses biotechnology, clinical pharmacology, pharmacokinetics, pharmacoepidemiology, regulatory sciences, and other related disciplines. They can specialize in areas such as drug discovery, formulation and delivery, and toxicology testing.",
      subtitle2: "Associate in Clinical Research",
      content2:
        "Clinical research associates are responsible for the development and implementation of clinical protocols, data collection, and quality control in clinical trials. They ensure that plans and practices adhere to regulatory and contractual requirements. Monitoring and evaluating the conduct and progress of studies, identifying potential problems and issues, and checking on-site records are all part of this.",
      subtitle3: "Biomedical Researcher",
      content3:
        "Biomedical researchers study the causes and progression of diseases, as well as develop therapeutics and treatments to improve human health. This could include developing new treatments for chronic conditions, better understanding cancer metastasis, and improving early detection techniques.",
        subtitle4: "Regulatory Affairs Specialist",
        content4:"Regulatory affairs specialists are in charge of ensuring that a product complies with government and industry regulations. They collaborate with researchers and scientists to carry out drug trials, apply for regulatory approvals and permits, and submit the necessary data for a drug's approval and release.",
        subtitle5: "Pharmaceutical Sales Representative",
        content5:"Meeting with physicians and other medical professionals to promote prescription medications is part of a career in pharmaceutical sales and marketing. The job necessitates in-depth knowledge of products as well as medical issues, industry updates, and scientific breakthroughs.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Pharmaceutical Science abroad</h1>
        <p>
          Pharmaceutical Science is the study of designing and developing new
          medicine. Pursuing this field will tremendously boost your
          employability and open you up to rewarding career opportunities
          worldwide.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>4.49 million</strong>:  people employed in the pharmaceutical science industry (growing by 4.83%)
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$77,002</strong>  average salary of pharma science professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>62.5%</strong>  female professionals in the pharma workforce
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>14% </strong> projected employment growth rate in the industry
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

export default Pharmaceutical;
