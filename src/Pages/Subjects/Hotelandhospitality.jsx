import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Hotelandhospitality = () => {
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
      title: "About Hotel and Hospitality",
      content1:
        "Hotel and Hospitality is a broad field that deals with all aspects of the hotel stay of guests. The two terms ‘hotel’ and ‘hospitality’ are closely related but have a significant distinction. While hotel management specifically deals with all operations within the hotel, hospitality is a more inclusive and broader term. Hospitality and tourism management are closely aligned and involve all the sectors that require service such as food and beverage, accommodation and event management.",

      content2:
        "The discipline focuses on providing students a solid foundation related to issues that affect health of the masses and healthcare systems. Common course module you can expect to study are epidemiology, environmental health science, health policy, health communication, biostatistics, health communication, and social and behavioral aspects of health. Public health is a great field which has lots to offer, ranging from good monetary benefits to a sense of service to the community.Hotel and Hospitality is a broad field that deals with all aspects of the hotel stay of guests. The two terms ‘hotel’ and ‘hospitality’ are closely related but have a significant distinction. While hotel management specifically deals with all operations within the hotel, hospitality is a more inclusive and broader term. Hospitality and tourism management are closely aligned and involve all the sectors that require service such as food and beverage, accommodation and event management.",

      content3:"Hospitality management is a very broad field which involves the overseeing of the day-to-day operations within the hospitality industry. These operations may vary in nature from the operational, commercial, or administrative industry. The departments that fall under the responsibility of a hospitality manager may vary from housekeeping, concierge, in-room dining to spa or front desk. This subject prepares you for employment in organisations such as hotels, resorts, conferences, convention centres, tourism consultancies, spas, and guest services.",
    },
    {
      title: "Is Hotel and Hospitality right for me? ",
      content1:
        "Are you a person with great management skills? Would you enjoy working in a dynamic and challenging work environment? If so, then Hotel and Hospitality is well suited for you. The hospitality sector is massive and has abundant opportunities for individuals with varying strengths and skills.",
      content2:
        "Hotel and Hospitality managers are affable and adept at interpersonal skills. They are adaptive and flexible towards the needs of their clients. Furthermore, they must have excellent collaboration skills as they will be working in tandem with colleagues and staff to deliver a memorable customer experience. If you possess the aforementioned qualities, then this field is the right fit for you. ",
    },
    {
      title: "Study options and costs",
      content1:
        "An associate degree, which usually takes 2 years to complete, is a good choice if you are looking to pursue Hotel and Hospitality as a professional field. An associate in Hotel and Hospitality prepares students to take on entry-level hotel, restaurant, and tourism jobs.",
      content2:
        "The next step to further gain knowledge and expertise will be to earn a bachelor’s degree which usually takes 3 to 4 years to complete. The estimated tuition fee per year for Hotel and Hospitality programme is $20,615 to $43,413 in the US. You could further attend a graduate school to earn a master’s degree in Hotel and Hospitality Management to broaden your job prospects and secure higher ranking job roles. It usually takes 1 year to complete and costs around $24,750 to $60,879.",
     
    },
    {
      title: "Future outlook",
      content1:
        "Hotel and Hospitality courses offer excellent career opportunities in multiple industries. Hotel and Hospitality graduates not only earn good salaries but also have superb growth opportunities. A job in the hospitality industry allows a great deal of freedom and mobility, as well as the rare opportunity to meet, service, and interact with people from all walks of life.",
      content2:
        "The global hospitality market is expected to grow from $3486.77 billion in 2020 to $4132.5 billion in 2021. This trend is likely to continue and become profound in the future making the prospects of the Hotel and Hospitality industry bright.",
    },
    {
      title: "Career pathways for Public Health graduates",
      subtitle1: "Front Office Manager ",
      content1:
        "As a front office manager you will have many day-to-day duties, including overseeing employees, maintaining guest accounts, and coordinating hotel sales. ",
      subtitle2: "Directors of Housekeeping ",
      content2:
        "Commonly seen in hotels, directors of housekeeping can be expected to oversee the cleanliness and appearances of the hotel, control labour costs, and maintain supplies, among other related responsibilities. ",
      subtitle3: "Catering Assistant",
      content3:
        "As a catering assistant you may work directly for a catering company, in-house at a restaurant, or at a hotel to arrange bookings, oversee production and more.",
        subtitle4: "Sous Chef",
        content4:"Another job pertaining to the food and beverage industry is that of a sous chef — second-in-command role within a kitchen. As a sous chef you will report to the head chef and oversee various meal preparations and kitchen operations. ",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Hotel and Hospitality abroad</h1>
        <p>
          Hotel and Hospitality is the science of managing hotel and hospitality
          services.   This subject will provide you with the knowledge needed to
          succeed in the hospitality industry — be it becoming a hotel manager
          or an entrepreneur.  
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
            <strong></strong>Average annual salary of a hotel manager 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>41,400 projected job openings for food services
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

export default Hotelandhospitality;
