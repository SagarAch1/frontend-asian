import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Radiography = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/radio.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "100%",
    color: "white",
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
      title: "About Radiography",
      content1:
        "Radiographers are professionals trained to interpret images that aid in diagnosing and treating patients. A degree in Radiography equips you with the necessary skills to become a certified radiographer. You'll master various imaging techniques such as X-Ray, CT (Computed Tomography), Ultrasound, and MRI (Magnetic Resonance Imaging). During your course, you will have hands-on experience applying these methods, and may choose to specialize in one or more of these fields upon completion.",
      content2:
        "Diagnostic radiographers play a critical role in healthcare. Accurate imaging tests are vital for doctors to diagnose illnesses effectively. As most patients undergo a diagnostic assessment before treatment, you'll contribute significantly to their health improvement and recovery.",
    },
    {
      title: "Is Radiography right for me?",
      content:
        "If you have a passion for human anatomy and technology and want to apply them for the greater good, Radiography could be an excellent career choice. The degree program will teach you to operate advanced medical equipment while integrating knowledge from Biology, Physics, and Technology. You’ll gain expertise in performing and interpreting tests like MRIs, X-rays, CT scans, and angiographs. Many courses include clinical placements, offering you valuable real-world experience alongside healthcare professionals. The Radiography degree can be demanding, as there is substantial material to cover, but it’s manageable with an average of 17 hours per week spent in lectures and seminars.",
    },
    {
      title: "Radiography study options and costs",
      content1:
        "Radiography can be pursued at various academic levels, with a bachelor's degree typically sufficient for entry into the field. Some individuals may choose to advance their education by enrolling in a master’s program after completing their undergraduate studies.",
      content2:
        "High school students interested in Radiography should focus on Math and Science courses. After graduation, they can pursue a Bachelor's degree in Radiography. During the program, students will learn to administer X-rays and operate medical imaging equipment for diagnosing and treating injuries and diseases. Coursework covers patient care, including proper positioning and radiation safety, as well as medical subjects like Pathology, Anatomy, and Physiology. A typical bachelor’s degree lasts four years and costs up to $48,510.",
      content3:
        "A master’s in Radiography offers a blend of hands-on training and academic coursework, providing an in-depth understanding of the radiology imaging field. Courses may include Health Physics, Radiobiology, Pathophysiology, and Patient Assessment. This degree generally takes two years to complete and costs around $32,425 in the US.",
    },
    {
      title: "Future outlook",
      content1:
        "As doctors increasingly rely on diagnostic imaging, the demand for Radiography professionals continues to grow. There is substantial on-the-job learning, and as your career progresses, you may take on additional responsibilities, such as management or teaching roles.",
      content2:
        "Employment in the field of Radiography is projected to grow by 9% this decade, with an expected 20,800 job openings each year. These promising statistics highlight the strong career prospects for graduates in this field.",
    },
    {
      title: "Career pathways for Radiography graduates",
      subtitle1: "Radiology Practitioner Assistant",
      content1:
        "Upon qualification, you can work as a registered radiographer, assisting with diagnostic tests to support illness and injury diagnoses. The average annual salary for a radiology practitioner assistant is $85,923.",
      subtitle2: "Advanced Practitioner",
      content2:
        "Advanced practitioners are experts in diagnostic imaging and radiotherapy. They analyze and solve complex issues across various settings. The average annual salary for an advanced practitioner is $97,500.",
      subtitle3: "Consultant",
      content3:
        "Consultants focus on research, developing professional practices, and integrating education, clinical, and research findings. The average annual salary for a radiographer consultant is $90,490.",
      subtitle4: "Educator",
      content4:
        "As an educator, you will typically work in the academic sector, designing and delivering programs to train future radiographers. The annual salary for a radiology educator ranges between $35,500 and $79,000.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Radiography abroad</h1>
        <p>
          Radiography is both an art and science involving the use of radiation
          to capture images
        </p>
        <p>
          of the body’s internal structures,including tissues, bones, organs,
          and vessels.
        </p>
        <p>
          {" "}
          This discipline focuses on visualizing the body's interior using
          techniques like X-rays.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $12.4 billion: the estimated worth of the
            radiography industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> The average annual salary of a radiographer
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $99,281: the average annual salary of an
            experienced radiographer
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
