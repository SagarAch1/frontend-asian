import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const CropScience = () => {
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
      title: "About Crop Sciences",
      content:
        "Crop sciences emphasise the development and application of innovative technologies in order to provide a secure and sustainable food supply as well as a healthy agro-ecosystem. This field of study aims to improve various agricultural systems and analyse different cropping methods used in various farming systems. An education in crop sciences will give you a thorough understanding of the farming system and its differences. This will allow you to identify and innovate best practices in agriculture to boost food production in an eco-friendly manner. This course is aimed to improve your ability to appraise the disadvantages and benefits of various agricultural systems, including organic farming, as well as prepare to analyse different cropping methods utilised in various farming systems. Finally, it aspires to investigate future agricultural techniques for a world population on the rise.",
    },
    {
      title: "Is Crop Sciences right for me?",
      content:
        "Crop sciences emphasise the development and application of innovative technologies in order to provide a secure and sustainable food supply as well as a healthy agro-ecosystem. This field of study aims to improve various agricultural systems and analyse different cropping methods used in various farming systems. An education in crop sciences will give you a thorough understanding of the farming system and its differences. This will allow you to identify and innovate best practices in agriculture to boost food production in an eco-friendly manner. This course is aimed to improve your ability to appraise the disadvantages and benefits of various agricultural systems, including organic farming, as well as prepare to analyse different cropping methods utilised in various farming systems. Finally, it aspires to investigate future agricultural techniques for a world population on the rise.",
    },
    {
      title: "Crop Sciences study options and costs",
      content:
        "A degree in crop science or an agriculture-related discipline is typically required to work as a crop scientist. You need to complete high school/A-Levels before you can enrol in these courses. A large number of Australian institutions offer degrees in crop sciences. The average length of an agriculture related undergraduate degree is 4 years and costs around AUD $38,000 per year on average while in the US it costs around USD 14,510 per year on average.",
    },
    {
      title: "Future outlook",
      content:
        "A qualification in crop sciences offers a wide number of work options. Public food agencies, food processing firms, insurance companies, as well as businesses that deal with farm supplies, fertilisers and agriculture all require crop science majors in various positions.With a growing global focus on sustainability, more and more funds are being allocated by international organisations like the US Agency for International Development and the World Bank to recruit and fund crop scientists. The job market for crop scientists is projected to grow considerably in the upcoming decade as more advanced crop production and protection techniques are sought after to conserve land and safeguard the environment. Graduates with advanced degrees are also offered teaching and research positions in community colleges and universities. ",
    },
    {
      title: "Career pathways for Crop sciences graduates",
      subtitle1: "Crop Advisor ",
      content1:
        "Crop advisors are experts in the fields of plants and soil. They offer advice on everything from seed to fertiliser, as well as pest management and disease treatment. Their key responsibilities include collaborating with other consultants in the region to understand disease and pest outbreaks better, and providing advice to farmers about what countermeasures they should take if pest outbreaks occur. ",
      subtitle2: "Biotechnologist ",
      content2:
        "Biotechnologists employ biological organisms to produce and improve agricultural, medical, and conservation products and processes. They look into the genetic, chemical, and physical characteristics of cells, tissues, and organisms to find commercial uses. Biotechnologists are on the front end of technology and explore new ways to optimise the farming process. Biotechnology is one of the fastest-growing fields in the world today. As a biotechnologist, you may be able to contribute significantly to fields like pest management, food security, soil preservation and disease control. ",
      subtitle3: "Farm Manager ",
      content3:
        "A farm owner hires a farm manager to oversee a farm or a group of farms. What distinguishes a farmer from a farm manager is the unique expertise they bring to the table when caring for crops and livestock. Their job entails livestock management, increasing crop yield, planning farming tasks, managing farmworkers, crop protection, harvesting, and marketing the produce. Moreover, they are responsible for documenting  farm activities, and keeping track of all financial elements and strategic planning. ",
      subtitle4: "Soil Fertility Specialist",
      content4:"Soil fertility specialists are responsible for boosting agricultural output by regulating nutrients, crop rotations and cover crops. They provide advice on maximising yield by deploying commercial fertilisers and manure to provide nutrients and organic matter to the soil.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Crop sciences abroad</h1>
        <p>
          Are you an advocate of sustainable development and
          environment-friendly subsistence practices? Do you have a passion for
          innovating new ways of crop cultivation? You’d be hard-pressed to find
          a field of study more engaging than Crop Sciences. 
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>10,500 </strong>: certified crop advisers currently working in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$200</strong>  average hourly rate charged by private crop consultants.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>8% </strong> expected growth in the demand of qualified crop scientists.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>$50,000</strong>  average pay for a certified crop advisor in the US
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

export default CropScience;
