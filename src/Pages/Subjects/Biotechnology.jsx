import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const BiotechnologyPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle open/close
  };

  const headerSectionStyle = {
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

  const statCardStyle = {
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

  const iconCardStyle = {
    fontSize: "40px",
    color: "#4CAF50", // Green color for icons
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

  const faqItemsData = [
    {
      title: "About Biotechnology",
      content:
        "Biotechnology has evolved over centuries, starting from ancient processes like making cheese and yogurt to modern genetic studies. Today, biotechnology is involved in life-saving innovations like insulin production and gene-level research. This field is vast and offers endless opportunities for new solutions to global challenges.",
    },
    {
      title: "Is Biotechnology right for me?",
      content:
        "If you're passionate about scientific discovery but not inclined towards traditional medicine, biotechnology could be your ideal career path. It requires a detail-oriented mind and a commitment to solving complex biological problems. From vaccine development to genetic engineering, this field promises growth and impact for those with curiosity and dedication.",
    },
    {
      title: "Biotechnology study options and costs",
      content1:
        "Biotechnology degrees cover diverse areas including bioinformatics, gene sequencing, drug development, and the ethical implications of biotechnology. Below are some degrees with approximate costs:",
      content2: "1. Bachelors in Bioinformatics: $17,280/year (USA)",
      content3: "2. Bachelors in Molecular Biology: $34,949/year",
      content4: "3. Bachelor of Biomedicine Biotechnology: $37,122/year",
      content5: "4. BSc in Biotechnology: $17,852/year",
      content6: "5. Diploma in Biotechnology (2 years): $15,000",
      content7:
        "Each of these programs offers a comprehensive foundation in biotechnology, with opportunities for further graduate studies.",
    },
    {
      title: "Future outlook",
      content:
        "The biotechnology industry is expected to grow by 6% from 2020-2030, with 87,000 new jobs projected. As a biotechnologist, you could contribute to advancements in medicine, agriculture, and environmental science.",
    },
    {
      title: "Career paths for Biotechnology graduates",
      subtitle1: "Lab Specialist",
      content1:
        "Lab specialists work in pharmaceutical companies, developing new medicines and vaccines, with an average annual salary of $46,340.",
      subtitle2: "Pathologist",
      content2:
        "Pathologists analyze genetic information to study microbial diseases and viruses.",
      subtitle3: "Forensic Analyst",
      content3:
        "Forensic analysts conduct DNA analysis for criminal investigations, earning around $60,590 per year.",
      subtitle4: "Environmental Consultant",
      content4:
        "Environmental consultants assess pollution levels and environmental impacts, offering services to governments and private organizations.",
      subtitle5: "Genetic Counselor",
      content5:
        "Genetic counselors work in fertility clinics, advising on reproductive health and genetic testing.",
      subtitle6: "Marketing Manager",
      content6:
        "Biotechnologists in marketing advise companies on applying biotechnological innovations in their manufacturing processes.",
      subtitle7: "Food Biotechnologist",
      content7:
        "Food biotechnologists work on developing cost-effective, sustainable food products, earning an average of $68,830 annually.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div style={headerSectionStyle}>
        <h1>Study Biotechnology Abroad</h1>
        <p>
          Biotechnology is an interdisciplinary field studying biological matter at a cellular level, 
        </p>
        <p>including areas like genetics, immunology, microbiology, and plant biotechnology.</p>
      </div>

      {/* Statistics Section */}
      <div style={statisticsSectionStyle}>
        <div style={statCardStyle}>
          <div style={iconCardStyle}>🌟</div>
          <p>The median starting salary for a biotechnologist in the USA is $46,340 annually.</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconCardStyle}>📈</div>
          <p>Genetic counselors can earn up to $85,700 annually.</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconCardStyle}>💼</div>
          <p>The biotechnology field is expected to grow by 6% in the next decade.</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconCardStyle}>🔧</div>
          <p>87,000 new jobs will be created in the biotechnology industry in the next 5 years.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItemsData.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleSection(index)}>
              <span>{item.title}</span>
              <span>{expandedIndex === index ? "-" : "+"}</span>
            </div>
            {expandedIndex === index && (
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

export default BiotechnologyPage;
