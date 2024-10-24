import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const  Counselling = () => {
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
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  };

  const faqItems = [
    {
      title: "About Counselling",
      content1:
        "Counselling is a psychological specialty that allows people to discuss their problems with trained professionals in a safe and non-judgmental ambiance. The exact meaning of Counselling might vary but broadly it is the process of communication between a client and a counsellor with the intent to help the client overcome challenges or explore their thoughts comprehensively. These challenges can range from career planning, and relationship problems to stress, and health issues.",
        content2:"Counselling programmes are aimed at providing students with a comprehensive understanding of theoretical and experimental understanding of practical Counselling. During their studies, students will develop skills needed to explore and secure a profession in the contemporary Counselling services landscape. Their vocational training prepares them to become a certified counsellor, though some graduates might choose to pursue post-graduate education.",
        content3:"A Counselling degree has a strong practical focus and you can expect a healthy dose of practicums year-round. Once a strong theoretical foundation is set, students may also spend a decent amount of time in clinical sessions under supervision. Some universities require students to complete placements as part of their programme",
        content4:"Areas of expertise you might encounter during your degree in counselling include group therapy, addiction, high intensity therapy, eating disorders, bereavement, mental health, homelessness, family therapy, adoption, decision counselling, trauma therapy, post-offending therapy, or even counselling associated with specific industries.",
      
    },
    {
      title: "Is Counselling right for me?",
      content:
        "A Counselling programme is designed to be intellectually immersive as it is an explorative experience of the human psyche. You’ll learn about the development of humans – from infant development, to tumultuous adolescence, the coming of adulthood – culminating in the experience of older age, illness. The degree gives you the opportunity to learn interpersonal competencies, including communication, self-reflection, negotiation, interpersonal skills and conflict resolution skills. These skills will not only make you more socially-skilled but also boost your employment opportunities in a wide array of sectors. Students who tend to do best in Counselling are empathetic individuals with a strong desire to help others. If this sounds like you, then you are well-suited to this field of study.",
      
    },
    {
      title: "Study options and costs",
      content1:
        "Students with a post-secondary education can enrol in a Counselling programme.",
        content2:"A diploma in Counselling can be earned in less than two years of full-time schooling. This educational programme qualifies individuals to work in Counselling professions, allied healthcare specialties and client support fields. Some of the courses offered are Human Development, Learning Disabilities, Professional Ethics, Interpersonal Communication, and Mental Health. These subjects are taught to provide graduates with a wide breadth of knowledge that will help prepare them for the challenges they may face while working in the healthcare industry. By earning a diploma in Counselling, graduates develop strong communication, organisation, and critical-thinking skills. The cost of receiving a diploma in Counselling is around $18,600 in the US.",
        content3:"A bachelor’s of Counselling will provide students with a solid foundation of human behaviour and counselling methodology. Students will develop the skills necessary to effectively provide counselling services. Some course modules include Child Development, Ethics, Psychotherapy, and Group Dynamics. Graduates with a bachelor’s in Counselling often go on to work in schools, career counselling firms, research, mental health and well-being organisations, or pursue postgraduate education. This programme is three to four years in duration and students can expect to pay around $48,000 in total tuition.",




    },
    {
      title: "Future outlook",
      content1:
        "Counsellors have, and will continue to experience, an ongoing career development as technology advances. With the right knowledge and qualifications, the Counselling profession will continue to be indispensable for the healthcare industry.",
        content2:"Due to increased awareness, technology advancements and general education about the importance of mental healthcare, the Counselling industry is booming.",
        content3:"Working as a counsellor is a strong career choice if you want to earn a stable yet flexible living. Both full time and part-time opportunities are in abundance, with the current workforce split down the middle. The average annual salary of a counsellor sits at approximately $73,847. Not to mention employment for counsellors is expected to grow rapidly — about 38,000 counsellors are predicted to be employed by 2025.",
      
    },
    {
        title: 'Career Pathways for Counselling graduates',
        subtitle1: 'Mental Health Counsellors',
        content1: 'Mental health counsellors provide therapeutic support to clients facing mental, emotional or behavioural health issues, such as anxiety, depression, stress, and low self-esteem. Their average annual salary is $44,938 per year.',
        subtitle2: 'School Counsellors',
        content2: 'Professional school counsellors provide services to students to support their academic, personal, and social development while working with teachers, administrators, and parents. Their average annual salary is $58,120.',
        subtitle3: 'Career Counsellors',
        content3: 'Career counsellors help individuals understand themselves and their needs to make solid occupational, education, and life decisions. Their average annual salary is $45,656.',
        subtitle4:'Child Counsellors',
        content4:'Child and adolescent counsellors help children and teens with physical, emotional, or mental roadblocks that impede healthy development. Their average annual salary is $187,200.',
        subtitle5:'Rehabilitation Counsellors',
        content5:'Rehabilitation counsellors assist individuals with physical, mental, developmental, or emotional disabilities in leading fulfilling and successful independent lives. Their annual average salary is $37,530.',
      
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Counselling abroad      </h1>
        <p>
        Counselling is the field of study concerned with helping people overcome emotional and professional challenges in their lives. A Counselling programme fosters strong critical thinking skills and in-depth understanding of Counselling theories and concepts.
      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>1,300 job openings projected for Counsellors each year






          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average annual salary of counsellors

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
            <strong></strong>$83,503 is the average annual salary of top counsellors
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
          {item.subtitle5 && (
            <div style={faqSubtitleStyle}>{item.subtitle5}</div>
          )}
           {item.content5 && <p>{item.content5}</p>}
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

export default Counselling;