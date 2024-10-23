import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SpeechTherapy = () => {
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
      title: "About Speech Therapy",
      content1:
        "When most people think of Speech Therapy, also known as Speech-Language Pathology, they think of overcoming speech impairments. However, Speech Therapy is much more than that. Speech therapists analyse, diagnose, and treat difficulties including fluency, the capacity to articulate thoughts and ideas, comprehension, and even swallowing disorders.",
      content2:"A degree in Speech Therapy will skillfully combine the fundamentals of counselling and therapy with the science of communication, to help you excel. It is also important to note that a part of your training and education will be clinical, meaning you will likely be doing some form of supervised intern work or clinical rotations to gain experience. This usually comes as part of your master’s degree programme.",
    },
    {
      title: "Is Speech Therapy right for you?",
      content:
        "If you are empathetic, have strong interpersonal skills and want to build a career in the field of counselling or therapy this degree is an excellent choice for you. You will have a myriad options to choose from and most likely will secure a job during your final year of training as the shortage of speech therapists continues to rise.",
    },
    {
      title: "Speech Therapy study options and cost",
      content1:
        "After completing high school, a bachelor's degree in Speech Therapy will provide you with a comprehensive theoretical understanding of the field. A bachelor’s degree in Speech Therapy may span four years and costs up to $39,000 in the US.",
        content2:"An undergraduate degree is followed by a master's degree. To ensure that students have a well-rounded and practical learning experience, master's degrees are frequently combined with clinical or internship experiences. A master’s degree may span two years and costs up to $75,000.",
    },
    {
      title: "Future outlook",
      content:
        "Employment opportunities for speech therapists are expected to rise in this decade. According to the U.S. Bureau of Labor Statistics, in the next six years, the employment rate is expected to be 27%, which is significantly higher than the national average.",
    },
    {
      title: "Career Pathways for Speech Therapy graduates",
      subtitle1: "Speech Therapist",
      content1:
        "Speech therapists or speech-language pathologists (SLPs) are specialists who, among other things, deal with people of all ages to enhance communication skills and treat swallowing issues. The average annual salary of a speech therapist is $79,120.",
      subtitle2: "Special Education Teacher",
      content2:
        "Children with physical, hearing or visual challenges are served by special education instructors. They also have to deal with emotional, behavioural, and learning issues. Special teaching methods and resources, such as sign language and interactive games, may be used. These professionals often have a degree in Speech Therapy along with other forms of training. The average annual salary of a special education teacher is up to $82,500.",
      subtitle3: "Paediatric Speech Pathologist",
      content3:
        "Communication problems amongst children are not uncommon. As children grow, speech impediments such as stuttering, lisping, muteness, or a delay surface. A paediatric speech pathologist helps children develop their verbal and nonverbal communication abilities. Pediatric speech pathologists help children with communication issues by preventing, evaluating, diagnosing, and treating them. The average annual salary of a paediatric speech pathologist is up to $77,510.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Speech Therapy abroad</h1>
        <p>
          The screening and treatment of communication issues and speech
          abnormalities is known as Speech Therapy. It may be required for
          childhood speech abnormalities or adult speech difficulties caused by
          an injury or disease, such as a stroke or brain injury.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Average annual salary of a speech therapist in the
            US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>$6.08 billion: estimated worth of the speech
            therapy market
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Projected job openings for speech therapists every
            year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 27% projected employment growth in next six years
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

export default SpeechTherapy;
