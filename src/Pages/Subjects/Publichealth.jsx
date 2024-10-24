import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Publichealth = () => {
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
      title: "About Public Health",
      content1:
        "The field of Public Health focuses on maintaining the physical and psychological health of the public. This field is also concerned with the prevention of illnesses and healthcare disparities. The key difference between the field of Public Health and general medicine is that Public Health focuses on promoting health and preventing disease while general medicine is concerned with the diagnosis and treatment of health issues once they have occurred.",
      content2: "The discipline focuses on providing students a solid foundation related to issues that affect health of the masses and healthcare systems. Common course module you can expect to study are epidemiology, environmental health science, health policy, health communication, biostatistics, health communication, and social and behavioral aspects of health. Public health is a great field which has lots to offer, ranging from good monetary benefits to a sense of service to the community.",
    },
    {
      title: "Is Public Health right for me?",
      content1:
      "A public health worker has many responsibilities in various fields of the healthcare system. Moreover, a public health worker is responsible for addressing crucial health issues and raising awareness regarding them. If you are motivated by serving the community and you identify yourself as an empathetic individual, then this field might by a good fit for you.",
      content2:"A public health worker needs to deal with public and hospital administrators on a daily basis. Therefore, it is essential to have good communication skills. These skills will also play a pivotal role in health communication during health crises such as virus outbreaks. As mentioned earlier, empathy is a key characteristic needed to excel in this field. Empathy will help you better understand the suffering of the afflicted people and spur you into action. If you think you check all these boxes, then you are well suited to this field.",
    },
    {
      title: "Public Health study options and costs",
      content1:
        "If you intend on pursuing a career in Public Health, then earning a bachelor’s degree in Public Health can be your first step. The undergraduate programme usually takes 3 to 4 years to complete and costs between $10,032 to $25,935 in the US.",
        content2:"After the completion of your undergraduate degree, you can opt to pursue a master’s degree in Public Health. It usually takes 2 years to complete in US. It usually costs around $11,000-$57,000.",
        content3:"After having completed you master’s you have the opportunity to study Public Health at the doctoral level. A PhD programme usually takes 3 to 5 years of full-time study to complete. Original research and a dissertation on a sub-topic of Public Health is required to earn your doctoral degree.",
      
    },
    {
      title: "Future outlook",
      content1:
      "The future of Public Health field seems very promising with its diverse implications in healthcare fields. More policy analysts and professional policy makers are being brought in to devise public health strategies. Public health workers are playing a leading role in fighting against pandemics like the corona virus and endemics such as malaria.",
      content2:"According to U.S. Bureau of Labor Statistics, the job market for healthcare occupations is expected in increase by 16%! This is double the average rate of employment growth for all other occupations. An employment change of 21,100 is also estimated by year 2030. This field seems to be a highlighted interest for many prospective professionals and for all the right reasons!",
    },
    {
      title: "Career pathways for Public Health graduates",
      subtitle1: "Public Health Educators",
      content1:
        "Public health educators are also known as ‘health promotion specialist’ and ‘community health consultant’. The key responsibility of a public health educator is to raise awareness and educate people about the practices that enhance well-being. Public health educators work directly with public, in healthcare facilities. As a public health educator, you will be responsible to plan strategies for promoting well-being and for communities at greater risk of health conditions.",
      subtitle2: "Public Health Nurses",
      content2:
        "Public health nurses are also known as community nurses. They are registered nurses who educate the public about health concern and how to prevent them. They also administer healthcare services and advocate for healthcare betterment.",
      subtitle3: "Epidemiologist",
      content3:
        "An epidemiologist gather data using qualitative and quantitative methods. They then analyse this data to investigate health and disease in populations. Epidemiologists draw conclusions from their data to help formulate health policies that restrict the spread of diseases and help treat them.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Public Health abroad</h1>
        <p>
          Public health is the field concerned with the improvement of health
          and wellness of populations worldwide. If leading a meaningful life in
          service to the community is your raison d'être, then Public Health
          might be the right fit for you.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $48,860: the average annual salary of public
            health workers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 16%: the projected job growth for healthcare
            occupations
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Estimated employment change by year 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 125,200 people employed in public health in 2020
            in the US alone
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

export default Publichealth;
