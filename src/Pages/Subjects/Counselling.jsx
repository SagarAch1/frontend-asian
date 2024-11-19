import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Counselling = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between opening and closing the FAQ
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/coun.png)`,
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
    color: "#4CAF50", // Adjusted color for better appeal
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
      title: "About Counselling",
      content1:
        "Counselling is a professional field where individuals can seek help from trained professionals in a secure and impartial environment. Though its definition can vary, the central idea of Counselling is communication between a client and a counsellor aimed at assisting the client to overcome challenges or gain insight into their thoughts. These challenges may include career planning, personal relationships, stress, and mental health issues.",
      content2:
        "Counselling programs provide students with both theoretical knowledge and practical skills in the field. Students will acquire essential skills to explore career opportunities in Counselling services. Upon completing their training, students can become certified counsellors, though some may opt for postgraduate studies.",
      content3:
        "A Counselling degree emphasizes practical experience, with students expected to engage in practical training and clinical sessions under supervision. Some universities also require placements as part of the curriculum.",
      content4:
        "Areas of specialization within Counselling include group therapy, addiction therapy, high-intensity therapy, eating disorders, grief counselling, mental health issues, homelessness, family therapy, adoption, decision-making therapy, trauma recovery, post-offending therapy, and even specialized counselling services in certain industries.",
    },
    {
      title: "Is Counselling right for me?",
      content:
        "A Counselling program is intellectually stimulating, exploring human psychological development from infancy to adulthood, including the challenges of aging and illness. The degree helps develop interpersonal skills such as communication, self-reflection, conflict resolution, and negotiation. These competencies enhance social interactions and increase employment opportunities across many fields. Ideal candidates for this program are empathetic individuals who have a strong desire to help others. If this describes you, Counselling might be the right path for your studies.",
    },
    {
      title: "Study options and costs",
      content1:
        "Individuals with post-secondary education can enroll in Counselling programs.",
      content2:
        "A Counselling diploma can typically be completed in less than two years of full-time study. This qualification prepares individuals for work in Counselling and allied healthcare sectors. Some of the courses in this program include Human Development, Learning Disabilities, Professional Ethics, Interpersonal Communication, and Mental Health. The diploma equips students with essential skills such as communication, organization, and critical thinking. The average cost for a Counselling diploma is around $18,600 in the United States.",
      content3:
        "A Bachelor's degree in Counselling offers a thorough foundation in human behavior and counselling methods. Students will develop the skills needed to effectively provide counselling services. Course modules may include Child Development, Ethics, Psychotherapy, and Group Dynamics. Graduates typically find employment in schools, career counselling firms, research, or mental health organizations, or they may pursue further postgraduate education. A bachelor's degree typically takes 3 to 4 years to complete and costs around $48,000 in total tuition.",
    },
    {
      title: "Future outlook",
      content1:
        "Counselling as a profession continues to grow as technology advances. With the proper qualifications and knowledge, Counselling professionals will remain integral to healthcare systems.",
      content2:
        "The Counselling industry is expanding rapidly due to increased awareness, advancements in technology, and greater focus on mental health.",
      content3:
        "Becoming a counsellor offers both stability and flexibility. The demand for counsellors is high, with full-time and part-time opportunities readily available. The average annual salary for a counsellor is approximately $73,847. Employment in the field is projected to grow significantly, with an estimated 38,000 new counsellor jobs expected by 2025.",
    },
    {
      title: "Career Pathways for Counselling graduates",
      subtitle1: "Mental Health Counsellors",
      content1:
        "Mental health counsellors help individuals struggling with mental, emotional, or behavioral health issues, such as anxiety, depression, and stress. The average annual salary for this role is $44,938.",
      subtitle2: "School Counsellors",
      content2:
        "School counsellors assist students with their academic, personal, and social development while collaborating with teachers, administrators, and parents. Their average annual salary is $58,120.",
      subtitle3: "Career Counsellors",
      content3:
        "Career counsellors help individuals make informed decisions about their career paths, education, and personal goals. The average annual salary for career counsellors is $45,656.",
      subtitle4: "Child Counsellors",
      content4:
        "Child and adolescent counsellors support children and teens with emotional, behavioral, or mental obstacles. Their average annual salary is $187,200.",
      subtitle5: "Rehabilitation Counsellors",
      content5:
        "Rehabilitation counsellors assist individuals with physical, mental, or developmental disabilities to live independent and successful lives. The average annual salary for rehabilitation counsellors is $37,530.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Counselling Abroad</h1>
        <p>
          Counselling is a field dedicated to assisting individuals in
          overcoming emotional and professional
        </p>
        <p>
          obstacles. A Counselling program equips students with critical
          thinking abilities and a deep{" "}
        </p>
        <p>understanding of counselling theories and practices.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>1,300 job openings for counsellors each year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average annual salary of a counsellor
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>Estimated worth of the Counselling industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>Top counsellors have an average annual salary of
            $83,503
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

export default Counselling;
