import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Acupuncture = () => {
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
      title: "About Acupuncture ",
      content1:
        "Acupuncture is an integral part of a larger medical system which is derived from traditional Chinese medicine. This is a comprehensive system of philosophy that approaches an individual’s total health and is used to treat various physical, emotional and mental issues that an individual faces. ",
      content2:"An acupuncturist is a healthcare professional who specialises in the study of acupuncture and treats health complications by stimulating certain points on the body. This process is done by sterile needles or similar techniques that involve pressure, heat or electric current. The treatment is known to redirect the flow of energy or ‘qi’ throughout the body to restore balance. Acupuncturists use more than just needles for instance, they might help patients improve their health by making dietary recommendations and suggesting healthier lifestyle changes. ",
      content3:"An acupuncturist can gain expertise in a specific field such as treating fertility issues, PTSD for veterans, elderly, cancer patients, hospice patients and athletes etc. Acupuncturists play a major role in pain management of patients and in regulating their mood. They work in a number of settings including chiropractic offices, massage therapy practices, hospitals, hospices, and athletic facilities. ",
    },
    {
      title: "Is Acupuncture right for me?",
      content1:
        "If you like the idea of providing hands-on treatment to people and relieving pain for patients, then acupuncture is a field that you should consider. A good acupuncturist has good listening and communication skills; moreover, he is adaptable allowing him to cater to the idiosyncratic needs of his client’s. ",
        content2:"An acupuncturist must pay attention to detail while handling fine needles. Furthermore, being empathetic is a big plus as this provides intrinsic motivation to do your best to relieve patients of their pain. If you believe you possess the aforementioned traits, then Acupuncture might be the right career choice for you. ",
    },
    {
      title: "Acupuncture study options and costs",
      content1:
        "The first step towards pursuing your career as an acupuncturist is to earn your bachelor’s degree. The bachelors does not need to be in the field of acupuncture, rather it can be in any field. The bachelor’s programme in Acupuncture is a 5-year programme and costs around $17,939 per year.",
      content2:"After completing your undergraduate degree, you also have the option to enroll in a master’s programme which must be accredited from the Accreditation Commission for Acupuncture and Oriental Medicine, for you to professionally practice acupuncture. It usually takes 2 to 3 years to complete a master’s degree in Acupuncture and costs around $30,000-$40,000 on average. The cost varies based upon the programme type and the institution you attend.",
      content3:"After the completion of your graduate programme, you must clear your state approved license exam to professionally practice acupuncture. In some cases, acupuncturists may opt to pursue a PhD programme to explore themes in Acupuncture. A PhD programme involves an in-depth study of the various aspects of traditional Chinese medicine including Acupuncture. A PhD in Acupuncture is usually a 3-year programme with an average cost of $76,542. ",
    },
    {
      title: "Future outlook",
      content1:
        "The field of acupuncture is a rapidly growing field with many people turning to ancient pain-relieving methods rather than allopathic medication. The field of acupuncture is expected to grow as much as 32% by 2022!",
        content2:"With the ongoing opioid painkiller crisis, Acupuncture serves as an effective way to manage pain. It has become increasingly popular due to its effectiveness, and it seems as if its demand will continue to increase in the future.  ",
    },
    {
      title: "Career pathways for Acupuncture graduates",
      subtitle1: "Associate Acupuncturist ",
      content1:
        "As an associate acupuncturist, you will be responsible to diagnose, treat, and prevent disorders by stimulating specific acupuncture points within the body using acupuncture needles. You may also use cups, nutritional supplements, therapeutic massage, acupressure, and other alternative health therapies. You will be working under supervision of an acupuncturist. ",
      subtitle2: "Hospital Acupuncturist",
      content2:
        "As a hospital acupuncturist, your role would be to integrate acupuncture with other therapeutic techniques like yoga, massage, mindfulness-based stress reduction, and nutrition. You will work with other healthcare providers in a dynamic and interprofessional environment. ",
      subtitle3: "Acupuncture Teacher  ",
      content3:
        "As the acupuncture field grows, so does the need for passionate teachers of the practice. As an acupuncture teacher, you will be required to use your expertise in the field to train prospective acupuncturists and teach them the rudiments of acupuncture. You will provide them feedback on their technique and method.  ",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Acupuncture  abroad</h1>
        <p>
          Acupuncture is an alternative medicine system in which fine needles
          are inserted in the skin at various points, known as energy lines, to
          treat patients. Studying Acupuncture can be your gateway to a bright
          and lucrative career in healthcare. 
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $71,770: average annual wage of acupuncturists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> $103,600: average annual pay of acupuncturists in
            specialty hospitals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 32% projected growth in job market of acupuncture
            by 2022
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> $203 million: estimated worth of the global
            acupuncture market
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

export default Acupuncture;
