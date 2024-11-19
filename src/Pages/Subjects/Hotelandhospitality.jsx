import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Hotelandhospitality = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/hotel.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
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
      title: "About Hotel and Hospitality",
      content1:
        "Hotel and Hospitality is a comprehensive field that covers every aspect of guest services in hotels. While hotel management focuses on the operational side of hotels, hospitality is a broader concept. Hospitality and tourism management are connected, covering areas such as food and beverage services, accommodation, and event management.",

      content2:
        "This field also examines how public health issues relate to service delivery and how healthcare systems are affected. Students typically study subjects like epidemiology, environmental health, health policies, and biostatistics. Public health offers many opportunities, including financial rewards and the chance to contribute to community well-being. Hotel and Hospitality remains a broad sector, with a focus on various service aspects, including tourism, food, and accommodation management.",

      content3:
        "Hospitality management is an expansive field involving the management of day-to-day activities across different sectors of the hospitality industry. These tasks range from commercial operations to administrative duties. Hospitality managers often oversee areas like housekeeping, concierge services, in-room dining, and even spa or front desk operations. This area of study prepares students for roles in hotels, resorts, conference centers, spas, and tourism consultancies.",
    },
    {
      title: "Is Hotel and Hospitality right for me? ",
      content1:
        "Do you possess strong management abilities? Do you thrive in dynamic, fast-paced environments? If yes, Hotel and Hospitality may be the ideal career path for you. This field offers numerous opportunities across various specializations, catering to different skill sets and strengths.",

      content2:
        "Hospitality managers are sociable, possessing excellent interpersonal skills, and are adaptable to client needs. They must work collaboratively with their teams to create positive customer experiences. If you excel in these areas, this industry could be a perfect match for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "An associate degree in Hotel and Hospitality typically takes 2 years to complete and prepares students for entry-level positions in hotels, restaurants, and tourism industries.",

      content2:
        "For more in-depth knowledge, a bachelor's degree, which takes 3 to 4 years, is a great next step. The average tuition fee for such programs in the US is between $20,615 and $43,413 per year. To expand career opportunities, a master's degree in Hospitality Management, taking about 1 year to complete, can cost anywhere from $24,750 to $60,879.",
    },
    {
      title: "Future outlook",
      content1:
        "Hotel and Hospitality studies provide fantastic career opportunities across diverse industries. Graduates not only earn competitive salaries but also enjoy substantial growth prospects. A career in hospitality offers freedom, mobility, and the chance to interact with people from various backgrounds.",

      content2:
        "The global hospitality market is projected to increase from $3486.77 billion in 2020 to $4132.5 billion in 2021, indicating continued expansion and a promising future for those in the field.",
    },
    {
      title: "Career pathways for Public Health graduates",
      subtitle1: "Front Office Manager ",
      content1:
        "As a front office manager, your responsibilities will include managing employees, overseeing guest accounts, and coordinating hotel sales.",
      subtitle2: "Directors of Housekeeping ",
      content2:
        "Directors of housekeeping ensure that the hotel maintains cleanliness and aesthetic standards, manage labor costs, and maintain supplies.",

      subtitle3: "Catering Assistant",
      content3:
        "A catering assistant handles bookings and supervises meal preparations, working within catering companies or at hotels and restaurants.",

      subtitle4: "Sous Chef",
      content4:
        "In the food and beverage sector, a sous chef is the second-in-command in a kitchen, overseeing meal preparations and daily kitchen operations.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Hotel and Hospitality abroad</h1>
        <p>
          Hotel and Hospitality is the art and science of managing services
          within
        </p>
        <p>
          the hospitality industry. This field will equip you with the skills
          required{" "}
        </p>
        <p>
          to succeed in various roles, such as hotel management or
          entrepreneurial ventures.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $78.22 billion projected revenue in hotel segments
            in 2022 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of a hotel manager 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 41,400 projected job openings for food services
            managers each year 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 9% projected employment growth for lodging
            managers this decade 
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

export default Hotelandhospitality;
