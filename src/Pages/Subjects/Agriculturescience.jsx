import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const AgricultureScience = () => {
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
      title: "About Agriculture Science",
      content:
        "Agriculture Science comprises fields like Animal Science, Plant & Soil Science and Agricultural Engineering. Degrees in these fields can be attained at bachelor’s, master’s and PhD levels. People who decide to pursue this subject eventually learn how to improve the sustainability and quality of crops, create new food products and solve environmental problems that directly affect agricultural products.",
    },
    {
      title: "Is Agriculture Science right for me?",
      content:
        "Agriculture Science imbues the skills of adaptability, problem-solving, critical thinking, collaboration, organisation and analytical thinking in the students. It also provides necessary technical and business skills along with the knowledge of environmental and life sciences to prepare the students for their professional life. If you want to lead a life close to nature and desire to promote a green economy, then studying agriculture as a subject may appeal to you.",
    },
    {
      title: "Agriculture Science study options and cost",
      content1:
        "Students may pursue a bachelor’s degree in Agriculture Science after high school. The courses are generally focused on biological and agricultural sciences, management of livestock and agricultural business. The general coursework may include livestock biometrics, agricultural research and statistics, microeconomics in agriculture, business management and agricultural marketing. The degree spans four years and costs up to $180,000.",
        content2:"After a bachelor’s, students may pursue a master’s degree in the discipline of choice. This degree also enables the students to undertake independent research work and teaching as a profession. The general coursework may include disciplines like agriculture technology, food chain theory, research methods in agriculture, plant pathology, pest management, water science, preventive veterinary medicine, biostatistics and agricultural leadership. Upon completion of this degree, students may endeavour to enhance crop management and agricultural development in rural areas of a country. Students must submit a research paper towards the end of their degree. The programme spans two years and may cost up to $72,000, depending on the university you choose.",
        content3:"Students desirous of specialising and carrying out research in a specific sub-field of Agriculture Science may undertake a PhD programme. Specialisations usually include agriculture and environmental risks, agricultural statistics, integrated animal management, agribusiness management and soil/plant relationships. This degree is purely based on research and ends with a dissertation. The degree spans three to four years and may cost up to $98,000."
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, the overall employment of agriculture/food scientists and agricultural engineers is projected to grow by 9% and 5%, respectively. Challenges such as population growth, increased demand for water resources, combating pests and pathogens, changes in climate and weather patterns, and additional demand for agriculture products, such as biofuels, will continue to create demand for research in agricultural efficiency and sustainability. Growing populations and stronger global competition will result in the industry needing more efficient means of production, which will increase the demand for agricultural engineers as well. Thus professionals having a degree in Agriculture Science may well be in demand.",
    },
    {
      title: "Career Pathways for Agriculture Science graduates",
      subtitle1: "Agricultural Equipment Technician",
      content1:
        "They maintain, install and repair machines and implements. They also have expertise in preventive maintenance, which may involve refuelling machines, replacing batteries, changing the oil and lubricating moving parts. The average annual salary of an agriculture equipment technician is up to $64,570.",
      subtitle2: "Crop Manager",
      content2:
        "The professionals who supervise seed sourcing, planting processes and scheduling as well as fertilising, irrigation and harvesting are known as crop managers or farm managers, interchangeably. Crop managers oversee teams of growers, farm workers and other labourers, and they are responsible for maintaining equipment and supplies. The average annual salary of a crop manager is $85,380.",
      subtitle3: "Environmental Engineer",
      content3:
        "Environmental engineers are involved in assessing and analysing soil and water drainage capabilities along with developing methods for the sustainability and efficiency of farms. The average annual salary of an environmental engineer is $96,820.",
      subtitle4: "Research Scientist",
      content4:"Researchers in agriculture often work as food scientists who research and develop processes for manufacturing, packaging and storing food. They also assess the nutritional makeup of ingredients, research new sources of food and determine strategies for making foods healthier or more delicious. The average annual salary of a research scientist is $80,650.",
      subtitle5: "Zoologists/Wildlife Biologists",
      content5:"Zoologists and wildlife biologists study animals and other wildlife and how they interact with their ecosystems. They study the physical characteristics of animals, animal behaviours, and the impacts humans have on wildlife and their natural habitats. The average annual salary of a zoologist is $70,700.",
      },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Agriculture Science abroad</h1>
        <p>
          Agriculture has formed the foundation of human civilisation since its
          beginning and is one of the largest providers of employment. An
          agriculture science degree provides an understanding of the
          interaction between society and nature.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of agricultural engineers in
            the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of agricultural engineers in
            the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected employment growth for animal, plant and
            soil scientists this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Total worth of global agricultural production
            industry
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

export default AgricultureScience;
