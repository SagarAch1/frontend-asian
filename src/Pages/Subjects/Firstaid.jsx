import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const FirstAid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close state
  };

  const headerStyle = {
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

  const statsContainer = {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const statCard = {
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
    color: "#4CAF50", // Green color for attraction
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About First Aid",
      content1:
        "First Aid involves immediate care given to an injured or sick person, aiming to reduce injury effects and avoid further complications. In critical cases, it can save lives by performing CPR, managing incidents, using AEDs, controlling bleeding, and immobilizing fractures.",
      content2:
        "Workplaces often mandate First Aid training for employees depending on hazards and the availability of medical assistance.",
      content3:
        "First Aid courses provide certifications that prepare individuals to deliver lifesaving care until medical professionals arrive. Key modules include Injury Assessment, Wound Care, Skeletal and Circulatory Systems, Spinal Injuries, CPR, and Limb Emergencies.",
    },
    {
      title: "Is First Aid right for me?",
      content:
        "A First Aid officer must have excellent analytical, communication, and leadership skills, with the ability to stay calm and provide reassurance during emergencies. If you are calm under pressure and compassionate, this role might be suitable for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "Diploma courses in First Aid are available globally and can be completed in flexible timeframes. Training is available online or in-person, often through institutions like the American Red Cross in the US, offering a two-year certification.",
      content2:
        "In Australia, to become a First Aid trainer, you must hold a TAE40116 Certificate IV in Training and Assessment or an equivalent qualification. These credentials allow you to teach basic life support, CPR, and other emergency courses.",
      content3:
        "The costs for First Aid training vary by country, but they are generally affordable compared to other fields. Always check with local institutions for specific fees.",
    },
    {
      title: "Future outlook",
      content1:
        "First Aid professionals will always be in demand across both public and private sectors. The field is expected to grow by 11% in the US by 2028, ensuring a promising future for certified professionals.",
    },
    {
      title: 'Career pathways for First Aid graduates',
      subtitle1: 'First Aid Trainer',
      content1: 'As a trainer, you will lead First Aid courses, ensure lesson plans are followed, and assess students according to set criteria.',
      subtitle2: 'Firefighters',
      content2: 'Firefighters often respond first to emergencies, providing crucial care before medical teams arrive.',
      subtitle3: 'Flight Attendants',
      content3: 'Flight attendants must know CPR and First Aid to handle in-flight emergencies, ensuring passenger safety.',
      subtitle4: 'Construction Workers',
      content4: 'In construction, workers must be trained in First Aid due to the high-risk nature of the job.',
      subtitle5: 'Lifeguards',
      content5: 'Lifeguards must be prepared for emergencies like drowning or cardiac arrest, making CPR and First Aid essential skills.',
    },
  ];

  return (
    <div>
      <div style={headerStyle}>
        <h1>Study First Aid Abroad</h1>
        <p>
          First Aid is the immediate medical assistance provided after an injury, offering
        </p>
        <p> critical skills to handle emergency situations until professional help arrives.</p>
      </div>

      <div style={statsContainer}>
        <div style={statCard}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>11%</strong> projected growth in First Aid employment by 2028.
          </p>
        </div>
        <div style={statCard}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>155,000</strong> new job openings in First Aid by 2028.
          </p>
        </div>
        <div style={statCard}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>First Aid Instructor</strong> average annual salary details.
          </p>
        </div>
        <div style={statCard}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>£36,930</strong> average salary for a paramedic.
          </p>
        </div>
      </div>

      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => toggleActiveIndex(index)}>
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
                {item.subtitle5 && <div style={faqSubtitleStyle}>{item.subtitle5}</div>}
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

export default FirstAid;
