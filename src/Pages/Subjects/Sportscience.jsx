import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const SportsScience = () => {
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
      title: "About Sports Science",
      content:
        "Sports Science is an interdisciplinary field and draws upon fields like Physiology, Psychology, Bioengineering, Chemistry, and Anatomy. It is a relatively new academic discipline but has gained immense popularity, as sports and fitness are approached more and more seriously in the modern world. There are groundbreaking advances in technology and medicine that affect the world of sports daily and it receives significant funding.",
        
      
    },
    {
      title: "Is Studying Sports Science right for me?",
      content:
        "In a Sports Science degree you’ll study how the body and mind function during exercise and, after graduating, you can apply your specialist knowledge to a range of careers. You can expect practical sessions and lab work but be prepared to ditch the trainers and learn the theory that you can then apply to sports and exercise. During studies you’ll become accustomed to critically evaluating information, designing research studies, collecting data and dissecting the results.",
    
    },
    {
      title: "Study options and costs",
      content1:
        "If you want to study Sports Science, then you should have earned a high school diploma from an accredited educational institution. Thereafter you can apply for a bachelor’s degree in Sports Science.",
        content2:"The bachelor’s of Sports Science programme comprises 130 to 140 credit hours. The degree spans four years (8 semesters) and costs up to $126,240.",


        content3:"Some sport-related careers require further study at the postgraduate level. For example, if you want to become a sports and exercise psychologist you'll need to complete relevant accredited psychology qualifications. To get a job as a sports coach, you'll need to gain the appropriate coaching qualification that's offered by the national governing body of your chosen sport.",
        content4:"It's also possible to attain a master’s degree to increase your knowledge in a particular area of interest, such as Sports Biomechanics or Musculoskeletal Sports Science.",
    },
    {
      title: "Future outlook",
      content:
        "While Sports Science graduates tend to get jobs specifically in sports and fitness or coaching and teaching, they also find employment in a multitude of sectors. Management is also a popular option for graduates of this subject. Through a degree in Sports Science, you will also learn transferable skills including communication, team-working, time management, and leadership. Employers that recruit sports scientists include gyms, fitness centres, sports clubs, educational institutes and hospitals.",
      
    },
    {
        title: 'Career Pathways for Sports Science graduates',
        subtitle1: 'Sports Coach',
        content1: 'This is one of the most common careers you could go into and one with the most horizontal career mobility. Sports coaches are required across a range of different sports and ages, which means you could specialise in a sport you love and work in a variety of organisations too, such as schools, nurseries, sports teams.',
        subtitle2: 'Sport Nutritionist',
        content2: 'Sports nutritionists work with elite athletes, professional sports teams and with the general public to help them achieve their performance or health goals. Whether you choose to work with athletes or the public, your role will be highly varied and could include creating, designing and evaluating diet plans, assessing body composition and educating your clients about nutritional value. The average annual salary of a sports nutritionist is $60,427.',
        subtitle3: 'Sport Therapist',
        content3: 'As a sports therapist, you will have the knowledge and clinical skills needed to effectively prevent, assess, treat, and rehabilitate musculoskeletal injuries. You may choose to work in professional, semi-professional, or amateur sports. Alternatively, you may wish to work in private practice, treating a wide variety of individuals in a sports injury clinic. The average annual salary of a sports therapist is $78,054.',
        subtitle4: 'Personal Trainer/ Conditioning Coach',
        content4: 'Many sports students develop a passion for helping people achieve their health-related goals, coaching young performers or contributing towards optimising the performance of high-level athletes The role of a personal trainer or a conditioning coach is often varied, and can include monitoring athletes, fitness testing, and implementing recovery protocols and assisting with the rehabilitation of injured athletes. The average annual salary of a personal trainer is $63,961.',
      
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Sports Science abroad       </h1>
        <p>
        Sports Science is the study of how the human body works during exercise, and how sports or physical activity promote health physically, mentally, and socially. This field focuses on areas like Physiology, Psychology, Biomechanics, and Nutrition.





      </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> Estimated worth of the sports industry now



          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>

</strong>$83,535: average annual salary of sports scientists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Annual salary of top sports scientists

          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 1,500 projected job openings for sport scientists every year
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

export default SportsScience;