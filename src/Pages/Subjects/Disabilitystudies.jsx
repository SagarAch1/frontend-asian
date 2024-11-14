import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const DisabilityStudies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/rehabi.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "1900px",
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
      title: "About Disability Studies",
      content1:
        "Disability Studies is a dynamic and evolving field that has been developing for over four decades. This interdisciplinary area draws on knowledge from various domains, including History, Sociology, Literature, Political Science, Law, Policy Studies, Economics, Cultural Studies, Anthropology, Geography, Philosophy, Theology, Gender Studies, Media Studies, and the Arts.",
      content2:
        "The field of Disability Studies questions the traditional views of disability in society and aims to create new educational frameworks and research methodologies. These efforts seek to dismantle the physical, legal, political, and social barriers that often marginalize people with disabilities. The discipline challenges the conventional, medicalized definitions of the body and mind, fostering a more inclusive understanding of human diversity.",
    },
    {
      title: "Is Disability Studies the Right Choice for Me?",
      content1:
        "Disability Studies students engage with disability rights and culture through a blend of humanities, arts, and social sciences courses. The program critiques and enhances societal perceptions of disability, offering a critical perspective on how people with disabilities have historically faced exclusion and disadvantage. If you're an empathetic person passionate about advocating for marginalized communities, this field may be a perfect fit for you.",
      content2:
        "Graduates of Disability Studies often find employment with disability advocacy organizations, community agencies, independent living centers, academic disability resource offices, civil rights policy divisions of local governments, K-12 education systems, and state medical associations. Some alumni pursue further studies in law or graduate programs in Public Policy, Psychology, Speech and Hearing Sciences, Communication, Education, or Social Work, where they continue to have a significant impact in various fields.",
    },
    {
      title: "Disability Studies Education and Costs",
      content1:
        "Students can begin their journey in Disability Studies after completing their secondary education.",
      content2:
        "An associate degree in Disability Studies is ideal for students aiming to start a career in disability or human services management. This degree also serves as a stepping stone to a bachelor's degree in Disability Studies. Students will explore disability from a social justice and empowerment perspective, covering topics such as inclusive education, social dynamics, advocacy, and positive behavioral support. The program typically takes 1 to 2 years to complete and costs around $11,894.",
      content3:
        "After completing an associate degree, students can pursue a bachelor’s degree in Disability Studies, which provides deeper insights into various physical, mental, and developmental disabilities. The curriculum includes studies in Psychology, Nursing, Physical Therapy, Counseling, Social Work, and related disciplines. Graduates of this program often gain valuable skills in counseling, project management, and time management, making them competitive candidates for jobs in disability care, advocacy, and social work. A bachelor's degree typically takes 3 to 4 years to complete and costs approximately $28,345.",
    },
    {
      title: "Career Outlook",
      content:
        "The field of Disability Studies is expected to experience significant growth. According to the U.S. Bureau of Labor Statistics, employment in this field is projected to grow by 10%. As more students enter this academic discipline, we can expect to see more specialized concentrations and career opportunities emerge.",
    },
    {
      title: "Career Paths for Disability Studies Graduates",
      subtitle1: "Rehabilitation Counselor",
      content1:
        "Rehabilitation counselors play a key role in advocating for people with disabilities, assisting them with job training, case management, and finding appropriate social services. Their average salary ranges from $29,000 to $35,000, depending on their job responsibilities, location, and educational qualifications.",
      subtitle2: "Occupational Therapist",
      content2:
        "Occupational therapists help individuals with disabilities improve their ability to perform daily activities, despite their impairments. These therapists aid in skill development and rehabilitation, ensuring individuals regain functionality. Occupational therapists with a master's degree in Disability Studies can earn up to $80,000 annually.",
      subtitle3: "Human Services Professional",
      content3:
        "Human services professionals assist individuals with disabilities in accessing community resources, emotional support, and financial aid. They focus on helping people with disabilities live independently. Salaries for human services professionals typically range from the low $30,000s to over $42,000 annually.",
      subtitle4: "Special Education Teacher",
      content4:
        "Special education teachers work with students who have physical or mental disabilities, providing tailored lessons to help them reach their full potential. The focus is on basic skills such as reading, writing, and communication, as well as specialized training. Special education teachers can expect to earn up to $57,000 per year with a bachelor's degree.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Disability Studies Abroad</h1>
        <p>
          Disability Studies offers a comprehensive look at disability from various social and  
        </p>
        <p>cultural perspectives. A degree in Disability Studies can enhance your understanding  </p>
        <p>of disability issues and improve your employment prospects.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated value of the disability sector
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Average annual salary for disability professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Top earnings for disability specialists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Projected 1,200 job openings annually
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

export default DisabilityStudies;
