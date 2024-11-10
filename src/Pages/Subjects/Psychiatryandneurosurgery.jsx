import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const PsychiatryandNeurosurgery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing
  };

  const headerSectionStyle = {
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

  const statsSectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statCardStyle = {
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
    color: "#4CAF50", // Adjust color for visual appeal
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
      title: "Overview of Psychiatry and Neurosurgery",
      content1:
        "Psychiatry involves diagnosing, preventing, and treating mental health disorders, which affect mood, behavior, cognition, and perception. Psychiatrists work in a variety of environments like hospitals, clinics, and private practices.",

      content2:
        "Neurosurgery is a medical field dedicated to diagnosing and treating neurological disorders, including brain, spinal cord, and peripheral nerve conditions. Neurosurgeons provide surgical treatments in hospitals and clinics and are also involved in research into neurological conditions and treatment techniques.",
      content3:
        "Psychosurgery is a rare form of surgery involving the treatment of psychiatric disorders by performing cerebral surgery to remove or damage small areas of the brain causing the symptoms. It is usually considered for severe cases of depression when other treatments fail.",
    },
    {
      title: "Is Psychiatry or Neurosurgery suitable for me?",
      content1:
        "If you are passionate, empathetic, and have a strong desire to help others, Psychiatry and Neurosurgery could be a great career choice for you. Neurosurgeons must be highly detail-oriented, able to multitask, and work as part of a team during surgeries.",

      content2:
        "Psychiatrists should be inquisitive, empathetic, and excellent communicators. They need strong research skills to address complex mental health issues and effectively discuss cases with patients. If you're eager to learn and grow continuously, Psychiatry and Neurosurgery could be a fulfilling path for you.",
    },
    {
      title: "Psychiatry and Neurosurgery education and costs",
      content:
        "Becoming a psychiatrist or neurosurgeon requires extensive education. It starts with earning a bachelor's degree, followed by 4 years of medical school. In the U.S., tuition for medical school ranges from $250,222 to $330,180. Afterward, you can apply for residency in either Neurosurgery or Psychiatry.",
    },
    {
      title: "Future career prospects",
      content:
        "The U.S. Bureau of Labor Statistics projects a 12.5% employment growth for psychiatrists and a 14.4% growth for neurosurgeons over the next decade.",
    },
    {
      title: "Career opportunities for Psychiatry and Neurosurgery graduates",
      subtitle1: "Neurosurgeon",
      content1:
        "A neurosurgeon specializes in surgeries to treat disorders affecting the brain, spinal cord, and nerves. They are responsible for performing intricate surgeries and assisting in patient rehabilitation. The average salary for a neurosurgeon in the U.S. is $580,362.",
      subtitle2: "Neurologist",
      content2:
        "A neurologist diagnoses and treats disorders of the nervous system. They perform physical exams, conduct tests, and analyze spinal fluid. The average salary for a neurologist is $267,660.",
      subtitle3: "Psychosurgeon",
      content3:
        "Psychosurgeons conduct functional neurosurgeries to treat psychiatric disorders by targeting and removing small portions of the brain tissue involved in the symptoms.",
      subtitle4: "Child Psychiatrist",
      content4:
        "As a child psychiatrist, you would work with children facing mental, emotional, or behavioral disorders. You could work in various settings such as schools, hospitals, and private practices. The average annual salary for a child psychiatrist is $270,867.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={headerSectionStyle}>
        <h1>Study Psychiatry and Neurosurgery abroad</h1>
        <p>
          Psychiatrists and neurosurgeons both focus on brain-related disorders, with psychiatrists treating emotional 
        </p>
        <p>and cognitive conditions, while neurosurgeons address physical conditions affecting the brain and nervous system.</p>
      </div>

      {/* Statistics section */}
      <div style={statsSectionStyle}>
        <div style={statCardStyle}>
          <div style={iconStyle}>🌟</div>
          <p>14.4% projected growth for neurosurgeons this decade</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>📈</div>
          <p>Projected growth for psychiatrists this decade</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>💼</div>
          <p>$637,201: average annual salary for a neurosurgeon in the U.S.</p>
        </div>
        <div style={statCardStyle}>
          <div style={iconStyle}>🔧</div>
          <p>Average salary for a psychiatrist in the U.S.</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleFaq(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
                {item.subtitle4 && <div style={faqSubtitleStyle}>{item.subtitle4}</div>}
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

export default PsychiatryandNeurosurgery;
