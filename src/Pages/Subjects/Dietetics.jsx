import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Dietetics = () => {
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
      title: "About Dietetics",
      content1:
        "Dietetics, a subdiscipline of medicine, is the science that studies food and its impact on human health and general well-being. Dietitians and nutritionists work to enhance people’s health by helping them make better food choices. They also assist patients in striking a balance between healthy food and exercise.",
      content2:"If you choose a programme of Dietetics you will learn about food management, medical nutrition, metabolism, and other related topics. The programme is likely to comprehensively cover nutrition and relevant aspects from the fields of anatomy, biology, chemistry, and physiology.",
    },
    {
      title: "Is Dietetics right for me?",
      content1:
        "Dietetics students learn why and how various eating and nutritional habits affect us, as well as how we may improve our health. You'll also learn how to properly consult with patients and devise nutritional regimens that are tailored to their unique metabolism. Dietetics is unique from other healthcare fields as its core focus lies on preventing diseases even before they occur by developing a strong immune system.",
        content2:"If you are particularly fond of health and nutrition and enjoy the science of healthy eating, a degree in Dietetics will serve you remarkably well in building a rewarding career.",
    },
    {
      title: "Study options and costs",
      content1:
        "To qualify for a bachelor’s in Dietetics, which is 3 to 4 years in duration, you only require a post-secondary level education; however, high-school students are encouraged to study subjects such as Biology, Chemistry, Human Anatomy, Psychology, Nutrition, Statistics or related subjects. Students that do not qualify for college criteria, which is sometimes the case for international students, will be required to take up foundation courses in their first year.",
      content2:"Your bachelor's degree can then be followed by either a master’s in a more specialised field of Dietetics such as public health, clinical nutrition, sports dietetics, paediatric nutrition, gerontological nutrition, corporate nutrition. It’s important to keep in mind that most professional settings will expect to see some form of an accredited internship or experience in addition to your degree.",
      content3:"A bachelor's degree in Dietetics costs around $16,000 per year in the US and prepares students for advanced careers in the field. It is also required for graduate studies in Dietetics specialties. In the UK, a bachelor's in Dietetics can cost on average anywhere between $20,000 per year.",
    },
    {
      title: "Future outlook",
      content1:
        "Dietitians’ and nutritionists’ employment is expected to increase by 11% between 2016 and 2026, faster than the average for all other occupations. The significance of food and nutrition in improving health and wellbeing has come to the fore in recent years. Consequently, its popularity as part of healthcare systems has also skyrocketed.",
      content2:"The rise in the incidence of metabolic diseases, high healthcare spending, and the expansion of the middle class in emerging nations are all driving the worldwide clinical nutrition industry forward. Furthermore, the market is predicted to rise due to the rising number of senior people and the development of therapeutic nutrition products tailored to the needs of the aged. In fact, about 5,900 job openings are projects each year for dietitians and nutritionists in the US alone!",
    },
    {
      title: "Career pathways for Dietetics graduates",
      subtitle1: "Clinical Nutritionist",
      content1:
        "Clinical nutritionists look at a person's diet and medical history to see how their dietary choices might affect their health, prevent disease, or alleviate the symptoms of a chronic condition. In other words, they help patients and individuals lead healthier and more fulfilling lives despite having underlying medical conditions. A very common example of this is the management of diet for people suffering from diabetes.",
      subtitle2: "Public Health Nutritionist",
      content2:
        "The primary role of a public health nutritionist is to improve the health and well-being of targeted groups or the general population. They do this by typically planning and implementing population-based nutrition promotion strategies through careful evaluation of human nutrition, biochemistry, physiology, public health data, behavioural and social sciences, and food systems.",
      subtitle3: "Dietitian",
      content3:
        "A dietitian modifies a person's diet depending on medical issues, body composition, blood composition, or other contributing elements impacting nutrition. On a one-on-one basis, they examine, diagnose, suggest, and treat different medical diagnoses and nutritional disorders. Their main goal is to make sure that the person they're working with is getting the correct amount and type of nutrients.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Dietetics abroad</h1>
        <p>
          Dietetics is the study of the effects of diet and nutrition on human
          health. Dietetics has a heavy focus on public health and is dedicated
          to informing the masses about the significance of eating healthy
          foods.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $51,128 million estimated worth of the global
            clinical nutrition market in 2028
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $61,650: average annual salary of dieticians and
            nutritionists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 5,900 openings projected for dietitians and
            nutritionists each year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 6.1% annual growth rate of the clinical nutrition
            market
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

export default Dietetics;
