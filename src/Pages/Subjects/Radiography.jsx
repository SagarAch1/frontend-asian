import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Radiography = () => {
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
      title: "About Radiography",
      content1:
        "Radiologists are professionals who have had special training in interpreting images that facilitates the diagnosis and treatment of a patient. A degree in Radiography provides you with the skills and experience to become a registered radiographer. You will learn how to use different medical imaging techniques including X-Ray, Computed Tomography (CT), Ultrasound and Magnetic Resonance Imaging (MRI). During your course, you will have the opportunity to learn and apply these techniques, and you may then decide to specialise in one or more of them when you are qualified.",
      content2:
        "Diagnostic radiographers are very important in the world of healthcare. Doctors need accurate radiography tests to diagnose diseases. Most patients undergo a diagnostic assessment before getting treatment, so you’ll play an essential role in improving their health and wellbeing.",
    },
    {
      title: "Is Radiography right for me?",
      content:
        "If you are interested in the human anatomy and technology and want to utilise it for the benefit of humankind then getting a degree in Radiography can be a good choice for you. During the degree, you’ll be taught how to use modern equipment and bring together aspects of Biology, Physics and Technology. You’ll be able to use your expertise across the medical sciences to perform and analyse tests such as MRIs, x-rays, CT scans and angiographs. Most courses include plenty of clinical placement time, so you'll gain real-world experience working alongside NHS and other clinical professionals. A degree in Radiography can be quite intensive. The material is not extremely difficult to learn - however, there is a huge amount of it to get through. You may spend an average of 17 hours per week attending lectures and seminars on a Radiography degree.",
    },
    {
      title: "Radiography study options and costs",
      content1:
        "You can study Radiography at a range of different levels and attain various qualifications. However a bachelor’s degree is usually sufficient to work as a radiological technician. Some individuals may use their bachelor's degree as a stepping-stone to further their education and enter a master’s programme.",
      content2:
        "High school students interested in Radiography should take courses that focus on Math and Science. After high school, they can enrol for a Bachelor’s in Radiography. During the program, they will learn to administer X-rays and use other medical imaging equipment to help assess, diagnose, and treat injuries/ diseases. Coursework in the bachelor’s Radiography program will cover patient care, such as proper patient positioning and radiation safety, and pertinent medical subjects such as Pathology, Anatomy, and Physiology. A bachelor’s degree spans four years and costs up to $48,510.",
      content3:
        "A master’s in Radiography will have hands-on training and coursework. Individuals in this program gain an understanding of the ins and outs of the radiology imaging field, methods used and radiologic procedures. Courses may include Health Physics, Radiobiology, Pathophysiology, and Patient Assessment. This degree programme spans two years and costs around $32,425 in the US.",
    },
    {
      title: "Future outlook",
      content1:
        "The reliance of doctors on diagnostic imaging has increased the demand for experts in Radiography. There’s a lot of on-the-job learning in this career, and as your career progresses, you can take on further responsibilities, like managing or teaching.",
      content2:
        "The overall employment of radiographers is projected to grow 9% in this decade and projected job openings are 20,800 every year. These statistics are strong indicators of the strong career prospects for Radiography graduates.",
    },
    {
      title: "Career pathways for Radiography graduates",
      subtitle1: "Radiology Practitioner Assistant",
      content1:
        "Once qualified, you can work as a registered radiographer at the practitioner level. As a diagnostic radiographer, you generally work with departments within the hospital, conducting diagnostic tests that help in the diagnosis of illnesses and injuries. The average annual salary of a radiology practitioner assistant is $85,923.",
      subtitle2: "Advanced practitioner",
      content2:
        "These practitioners are regarded as experts when it comes to delivering care in diagnostic imaging or radiotherapy. They can analyse and synthesise complex problems in many settings so that innovative solutions can be established. The average annual salary of an advanced practitioner is $97,500.",
      subtitle3: "Consultant",
      content3:
        "As a consultant, you’ll undertake a lot of research to develop professional practice and promote the need for ongoing research within radiography. You’ll be directly involved with the integration of clinical, education and research findings in practice. The average annual salary of a radiographer consultant is $90,490.",
      subtitle4: "Educator",
      content4:"As an educator, you’ll generally work in the higher education sector as a lecturer, helping to develop and deliver education programs for aspiring radiographers. The annual salary of a radiology educator ranges from $35,500 to $79,000.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Radiography abroad </h1>
        <p>
          Radiography is the art and science of using radiation to provide
          images of the tissues, organs, bones, and vessels that comprise the
          human body. The study involves the visualisation of the internal parts
          of the body using x-ray techniques.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $12.4 billion: estimated worth of the radiography
            industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary of a radiographer
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $99,281: average annual salary of an experienced
            radiographer
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Projected employment growth every year
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

export default Radiography;
