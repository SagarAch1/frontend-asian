import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Foodandhspitality = () => {
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
      title: "About Food and Hospitality",
      content1:
        "Food and Hospitality degree programmes will prepare you for positions in hotels and resorts, restaurants, meeting and event planning, club management, agritourism, and other related sectors. Hotel Operations, Food and Beverage Management, and Meeting and Event Planning are among the most common specialisations available to students. Keep in mind that like any other fast-paced industry, Food and Hospitality is cut-throat and you will constantly have to learn new things and maybe even pursue further education to keep growing.",

      content2: "You'll study subjects like Finance, Administration, Marketing, Human Resource Management and Strategy, as well as other classic hotel management subjects. Elective courses such as sustainable food production, food science and safety or food policy can be taken to enhance your hospitality education.",
    },
    {
      title: "Is Food and Hospitality right for me?  ",
      content1:
        "Typically, bachelor's degree programmes in hospitality management provide tracks focused toward specific parts of the sector, such as Food and Beverage Management. These courses will equip you to work in hotels, restaurants, resorts, and other businesses with large Food and Beverage operations. A hotel management curriculum with a Food and Beverage Management specialisation teaches you both the business and culinary sides of managing bars and restaurants, as well as other related businesses.",
        content2:"Research, academia, regulatory agencies, quality assurance, quality control, product development, sensory science, flavour chemistry, higher education, hospitality, tourism management, and agricultural systems technologies are all common places for graduates of the Food and Hospitality programme to work. If any of these are a part of your end goals and you have a passion for the culinary arts, then you are on the right track!",
    },
    {
      title: "Study options and costs ",
      content1:
        "Depending on location and region, a bachelor's in Food and Hospitality is followed by a more advanced degree in the form of a master’s or PhD. You can also opt for diplomas in case of entry-level positions. A diploma will cost you on average $25,000. Most universities offer undergraduate degrees in Food and Hospitality under the title of Bachelor of Science in Food and Hospitality or Bachelor of Science in Food and Beverage Industry Management. It’s advisable you go over the curriculum closely before making decisions so you know exactly what you will be offered.",
        content2:"The cost of a bachelor’s is anywhere around $90,000 - $120,000 but scholarships are available from most universities. Also, the cost of the programme depends on the institute itself and the location. For example, in Australia a bachelor’s in Food and Hospitality costs around $40,000 to$50,000 so is relatively cheaper.",
        content3:"Postgraduate degrees in Food and Hospitality usually focus on more in-depth knowledge of food science and offer different tracks of specialisation such as Food Science, Hospitality Management, Agricultural Systems Technology, and Food Supply Chains.",
    },
    {
      title: "Future outlook",
      content1:
        "Food and beverage specialists with a bachelor's degree in Food and Hospitality are equipped to ensure that an organisation's restaurant and bar divisions profit and function efficiently. Food and Beverage Directors make on average $70,883 per year while top earners make as much as $104,000 or more.",
        content2:"Hotels prefer candidates with bachelor's degrees in Food and Hospitality due their comprehensive understanding of the culinary and hospitality field. The rapid 15% projected employment growth of Food Services Managers is a testament to the bright outlook of this degree. ",
    },
    {
      title: "Career Pathways for Food and Hospitality graduates",
      subtitle1: "Food and Beverage Manager",
      content1:
        "Restaurants, bars, cafeteria, and other enterprises that provide food and beverage have food and beverage managers who plan, organise, direct, regulate, and analyse their operations.  ",
      subtitle2: "Restaurant Manager",
      content2:
        "Restaurant managers are responsible for a variety of tasks, including hiring and managing personnel, monitoring operations, dealing with client complaints, and preparing financial reports. A restaurant manager's responsibilities also include following health and safety regulations. They may also budget and be responsible for managing inventories.",
      subtitle3: "Director of Hospitality in Food and Beverage",
      content3:
        "A food and beverage director is in charge of all areas of an organisation's food and beverage planning and service. This includes menu planning and costs, food and beverage preparation and presentation, and maintaining quality and safety standards.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Food and Hospitality abroad</h1>
        <p>
          Today, people seek a culinary experience that encompasses cuisines
          from around the world, a distinct environment, and distinguishing
          qualities that set one place apart from the other. This is what a
          degree in Food and Hospitality is all about! 
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 41,400 openings projected for food service
            managers each year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of a food and beverage
            director  
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>15% projected employment growth for food service
            managers 
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 1.6 million new restaurant jobs expected by 2028 
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

export default Foodandhspitality;
