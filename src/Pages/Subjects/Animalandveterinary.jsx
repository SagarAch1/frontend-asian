import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const AnimalandVeterinarySciences = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/cat.webp)`,
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
      title: "About Animal and Veterinary Sciences",
      content1:
        "Veterinarians are professionals who examine and treat animals. They diagnose illnesses and are skilled in prescribing medication and performing surgeries when required. Becoming a Doctor of Veterinary Medicine involves completing a four-year bachelor's program followed by four years of medical school, making the process a total of eight years. This concludes with obtaining a license from an accredited institution.",
      content2:
        "Students in this field can expect to study various subjects like animal husbandry, genetics, veterinary anatomy, surgery, radiology, and parasitology.",
    },
    {
      title: "Is Animal and Veterinary Sciences right for me?",
      content:
        "If you're passionate about animals and have qualities such as compassion, patience, and good manual skills, veterinary science could be an ideal field for you. It's well-suited for individuals interested in serving the community and making a positive impact on animals' health.",
    },
    {
      title: "Study options and costs",
      content1:
        "The first step to pursuing a career in animal and veterinary sciences is to complete a bachelor's degree after high school, with a focus on subjects like biology, physics, and chemistry.",
      content2:
        "Many veterinary schools recommend taking business and communication courses to enhance your soft skills such as leadership, teamwork, and emotional intelligence. Prerequisite courses such as biochemistry, genetics, microbiology, and social sciences are required to be eligible for veterinary school. For the 2021-2022 academic year, the average tuition for a bachelor's degree in this field is $7,276 for in-state colleges and $25,928 for out-of-state colleges.",
      content3:
        "After completing your bachelor’s degree, you can participate in internships and volunteer work to strengthen your application for veterinary school. Graduate schools may require GRE or MCAT scores.",
      content4:
        "Veterinary school typically takes four years. The first three years consist of coursework on subjects like anatomy, pharmacology, radiology, and community practice. The final year includes clinical rotations where students gain hands-on experience under the supervision of licensed professionals. Tuition fees for veterinary school can range from $160,000 to $288,000.",
      content5:
        "After obtaining a veterinary degree, you can pursue specialization in fields like small animals, large animals, or zoo veterinary medicine. This usually requires an additional three to four years of training.",
    },
    {
      title: "Future outlook",
      content:
        "According to the U.S. Bureau of Labor Statistics, the demand for veterinarians is expected to grow by 17%, much faster than the average for other professions. This growth is driven by an increase in pet-related spending and advancements in veterinary medicine. Veterinary science can now cure many diseases and perform complex procedures such as kidney transplants and cancer treatment. With 4,400 job openings annually, the field offers strong prospects.",
    },
    {
      title: "Career pathways for Animal and Veterinary Sciences graduates",
      subtitle1: "Military Veterinarian",
      content1:
        "Military veterinarians care for animals, like military dogs, on training bases. They also conduct research on behalf of the federal government. The average salary for military veterinarians in the U.S. is $121,014 annually.",
      subtitle2: "Zoo Veterinarian",
      content2:
        "Zoo veterinarians maintain the health of exotic animals in zoos. They monitor health, administer medications, and provide medical treatment when necessary. The average salary in the U.S. is $126,558 per year.",
      subtitle3: "Professor of Veterinary Medicine",
      content3:
        "Veterinary professors teach and supervise students in clinical training and provide academic knowledge in veterinary medicine. Their average annual salary in the U.S. is $166,350.",
      subtitle4: "Veterinary Surgery Specialist",
      content4:
        "Board-certified veterinary surgeons specialize in performing complex surgeries beyond general veterinary care. They also diagnose illnesses. Their average annual salary is $266,908.",
      subtitle5: "Regulatory Medicine Veterinarian",
      content5:
        "Regulatory veterinarians conduct inspections of animal meat for human consumption, ensuring livestock health and food safety. They earn an average annual salary of $83,781.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Animal and Veterinary Sciences abroad</h1>
        <p>
          Animal and Veterinary Sciences involve diagnosing and treating animal
          ailments. If you're passionate
        </p>
        <p>
          {" "}
          about animal care and want to contribute to the community, this field
          is a great fit for you.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 4,400 predicted job openings each year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average salary for top veterinarians
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Average salary for veterinarians
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 17% projected growth in veterinary employment
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
                {item.subtitle5 && (
                  <div style={faqSubtitleStyle}>{item.subtitle5}</div>
                )}
                {item.content5 && <p>{item.content5}</p>}
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

export default AnimalandVeterinarySciences;
