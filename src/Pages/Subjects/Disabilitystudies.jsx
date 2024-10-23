import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const DisabilityStudies = () => {
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
      title: "About Disability Studies",
      content1:
        "Disability Studies is a vibrant field of study, developed over the past 40 years. It is both interdisciplinary and multi-disciplinary, informed by scholarships in History, Sociology, Literature, Political Science, Law, Policy Studies, Economics, Cultural Studies, Anthropology, Geography, Philosophy, Theology, Gender Studies, Media Studies and the arts.",
        content2:"Disability Studies challenges the way in which disability is understood in our society by developing new research and educational models. These help to remove the physical, legal, political, and attitudinal barriers that exclude people from society. Disability Studies programmes challenge conventional and medicalised understandings of the body and mind in order to recognise and promote a more diverse spectrum of humanity.",
      
    },
    {
      title: "Is Disability Studies right for me?",
      content1:
        "Disability Studies students have the opportunity to study disability rights and culture through courses in the humanities, arts, and social sciences. Disability Studies investigates, critiques, and enhances societal understandings of disability. The field of study will introduce you to a critical framework for recognising how people with disabilities have experienced disadvantages and exclusion because of personal and societal responses to impairment. If you are an empathetic individual who is motivated to work for the minoritised and otherised section of the society, then this field is a good fit for you.",
        content2:"Graduates are currently employed in positions with state and regional disability advocacy organisations, community agencies, independent living centres, higher-education disability resource offices, local government in civil rights policy, K-12 education, and the state medical association in legislative and regularly affairs. Some have also gone on to law school and to graduate school in diverse disciplines, including Public Policy and Administration, Psychology, Speech and Hearing Sciences, Communication, Education, and social work. Disability Studies provide the opportunity to find meaningful work",
    },
    {
      title: "Disability Studies study options and costs",
      content1:
        "Students can pursue a programme in Disability Studies after completing their secondary education.",
        content2:"An associate degree in Disability Studies is a good choice for students who are looking to build a career in disability or human service management. This associate degree also acts as a pathway course to a bachelor’s in Disability Studies. During the course, students will develop a holistic view of disability and the social structures that influence learning and development for people with special needs. The main areas of study will be inclusive education, social justice, disabled empowerment, advocacy, disability and learning, social dynamics and positive behaviour support. The associate degree is 1 to 2 years in duration and costs around $11,894.",
        content3:"Next up, you have the option to enrol in a bachelor’s in Disability Studies which allows students to gain in-depth knowledge of physical, mental and developmental disabilities which affect the way people live their lives. Students who enrol in one of these programmes study both impairments and treatment methods. Generally, programme participants focus on a specific type of disability, taking courses in Psychology, Nursing, Physical Therapy, Counselling, Social Work and other related subjects. Students also usually study general education topics, such as Language, Math and Science. Those who graduate in Disability Studies often acquire counselling, project-planning and time-management skills. These skills help students find gainful employment and better handle personal tasks. Obtaining a bachelor’s degree in Disability Studies typically allows graduates to compete for exciting careers in disability care, advocacy and social work fields. The duration of this programme is 3 to 4 years and its cost can be around $28,345.",
    },
    {
      title: "Future outlook",
      content:
        "The field of Disability Studies is showing considerable growth. In fact, the U.S. Bureau of Labor Statistics expects a strong 10% growth in this field. As more people elect this academic discipline, we are likely to see more focused concentrations and specialisations available to the students pursuing this career.",
      
    },
    {
        title: 'Career pathways for Disability Studies graduates',
        subtitle1: 'Rehabilitation Counsellor',
        content1: 'Areas where rehabilitation counsellors have the biggest impact on the lives of the disabled are in advocacy, job training and job support, case management, and helping the disabled find social and leisure services. Their pay averages between $29,000 and $35,000, but that varies according to specific job responsibilities, geographic areas and college degrees earned.',
        subtitle2: 'Occupational Therapist',
        content2: 'Teaching the disabled to function well in everyday activities, despite their injuries, illnesses or other factors that caused them to become disabled, is the biggest responsibility of an occupational therapist. Professional therapists help those with disabilities develop new skills and to recover skills that may have been lost when they became disabled. Occupational therapists with a master’s degree in Disability Studies can expect earnings of up to $80,000.',
        subtitle3: 'Human Services Professional',
        content3: 'Human services professionals help disabled clients find helpful community service. They also help to find emotional and financial support for the disabled as well as their families. The focus of this career is usually to help those with disabilities to be able to live independently. Human service workers might be tasked with directing disabled people to organisations that provide help, and they may also help employers who are interested in hiring disabled individuals to design a workplace where they can thrive. Their salaries can range from the low $30,000 range to over $42,000.',
        subtitle4: 'Special Education Teacher',
        content4: 'Special education teachers work with students who are mentally and physically disabled in various degrees to help them achieve their full potential. Lessons may be specially adapted to help students learn in ways that best suit them. Teachers focus on basic skills such as reading, writing and communication techniques, as well as specialised focuses. Each child is given special attention and individual focus. Students are equipped with skills that promote life-long learning. Special education teachers can expect to make up to $57,000 with a bachelor’s degree.',
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Disability Studies abroad       </h1>
        <p>
        Disability Studies provides an incisive insight into the world of disability through various social and cultural perspectives. A programme in Disability Studies will help you broaden your understanding of disability and boost your employment opportunities.





      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated worth of the disability sector





          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average yearly salary of disabilities specialists/professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Salary of top disabilities specialists/professionals
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>1,200 job openings projected each year
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

export default DisabilityStudies;