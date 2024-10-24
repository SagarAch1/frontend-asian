import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const  HigherEducation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage:    `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
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
      title: "About Higher Education",
      content1:
        "A degree in Higher Education provides broad knowledge about education theory and pedagogical best practices. This degree will prepare you for positions in higher education administration, policymaking, and research. You'll get to work alongside, and learn from, an intellectually stimulating community of students, professors, and alumni. Depending on whether you choose to do a bachelor's or master’s, your career options will vary. Some people opt for a degree in Higher Education to become great teachers!",
        content2:"Some common course modules that you will likely come across during this degree programme will be Education Policy, Educational Leadership, Analysis, Human Development, and Education, Adolescent Psychology, Learning Design, and Curriculum Design.",
      
    },
    {
      title: "Is Higher Education right for me?",
      content1:
        "If you are passionate about ensuring the success of higher education and improving student learning, then the answer to this field of study is “yes”. For example, a Bachelor of Science in Higher Education offers several advantages. If you decide to become a teacher, you will benefit from a flexible schedule and a secure job. If you choose to become an administrator, lucrative pay packages and job growth are just some of its pros.",
        content2:"If you believe in the transformative power of education and want to see better learning in higher education institutes, then this field provides you with the necessary tools and paraphernalia needed to execute your vision.",
      
    },
    {
      title: "Study options and costs",
      content1:
        "You have the option to either go for a bachelor’s or a master’s in Higher Education after you have completed your secondary education. Many individuals get a Bachelor of Science degree in Higher Education as an undergraduate degree. There are normally particular coursework requirements for this degree. Students can pursue a specific subject relating to their future job ambitions, such as Higher Education, after completing these courses. A bachelor’s degree will take on average 4 years to complete whereas different options for masters are available depending on the university you choose. There are some universities that offer a one-year master’s in Higher Education with different specialisation programmes to choose from.",
        content2:"A master's degree in Higher Education blends perspectives on classroom management and education with specialised coursework. Individuals participating in the programme have the freedom to delve into their areas of interest within the larger field of higher education.",
        content3:"On average a master’s programme will cost you around $20,000to $25,000. In the US, the average yearly tuition and fees for a four-year bachelor's degree is $30,000 for international students. The cost of your master’s in Higher Education will vary depending on the specialisation you opted for.",




    },
    {
      title: "Future outlook",
      content:
        "Increased student enrolment in colleges and universities is predicted to drive growth. Furthermore, people will continue to pursue higher education in order to achieve their employment objectives. According to studies, master's degree holders earn more, and the Department of Education projects that, by 2020, two-thirds of employment vacancies will require post-secondary education or training. In fact, the US Bureau of Labor Statistics states that post-secondary education administrator jobs are expected to rise by 10%, faster than the average for all other occupations.",
      
    },
    {
        title: 'Career Pathways for Higher Education graduates',
        subtitle1: 'Dean',
        content1: 'Deans are academic leaders who oversee a schools academic programmatic administrative and financial operations Deans oversee recruiting admissions and academic advancement as well as maintain a high quality of education and monitor academic integrity They are responsible for academic leadership with the faculty, faculty strategic decision making, to represent the faculty in important college fora, and to incorporate the facultys interests into the broader college plan.',
        subtitle2: 'Higher Education Administrator',
        content2: 'Administrators in Higher Education are in charge of college or university departments, teachers, staff, programmes of study, curriculum, finances, and buildings. They assist instructional personnel and ensure that universities function efficiently by managing administrative and financial responsibilities and initiatives.',
        subtitle3: 'Training and Development Manager ',
        content3: 'A training and development manager is in charge of increasing the productivity of a companys personnel, such as faculty, higher education authorities, and administrative staff. This job evaluates developmental requirements in order to drive training efforts for staff. They help provide a platform and a framework for the development of technical and behavioural skills in human resources at higher education institutes.',
      
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Higher Education abroad      </h1>
        <p>
        A degree programme in Higher Education prepares educators who can lead colleges as well as non-profit organisations and government agencies that affect national higher education policy, or you can opt to become an educator. The options are endless! 



      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>14,500 projected openings for postsecondary education administrators each year







          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>Average annual salary of a chief academic officer in the US

          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong>10% projected employment growth for postsecondary education administrators from 2016-2026
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>Two-thirds of job openings will require postsecondary education or training in the next decade
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

export default HigherEducation;