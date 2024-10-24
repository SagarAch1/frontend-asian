import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Philosophyandreligious = () => {
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
      title: "About Philosophy and Religious Studies",
      content1:
        "Philosophy and Religious Studies help students learn “how to think”. Students develop critical thinking skills, an appreciation for cultural diversity, a reading habit, and the ability to articulate themselves.",
      content2:
        "Philosophy and Religious Studies address questions like, what does it mean to be human? How do people make sense of the world? How does the individual relate to society? These questions are addressed under topics such as class, power, identity, nationality, ethics and gender.",
      content3:"This subject will help you understand other people's beliefs and values and why they do things a certain way. It enables you to reflect on your own beliefs and ideals.",
    },
    {
      title: "Is Philosophy and Religious Studies subject right for me?",
      content1:
        "This subject is for students who are curious about the ideologies and belief structures that act as the glue of our social structures. Students who tend to excel in this field are avid readers and have an insatiable curiosity. They enjoy asking challenging questions and are able to think more abstractly than others. Students must be able to connect ideas in novel ways to draw their own conclusions about a topic.",
      content2:
        "If you think you have all the aforementioned qualities, then this degree is a good fit for you.",
    },
    {
      title: "Philosophy and Religious Studies study options and costs",
      content1:
        "Philosophy and Religious Studies degrees are offered in 1,193 schools in the United States. Most universities are offering four degrees in Philosophy and Religious Studies i.e. associate degree which is for 2 years, a bachelor`s degree of 4 years, a master’s degree of 1-3 years depending on the college and a Doctorate degree of 4-7 years.",
      content2:
        "The tuition fee for an undergraduate programme on average is $28,740 and $20,411 for a graduate program.",
      content3:
        "In the UK, the average tuition fee for Philosophy and Religious Studies degree is £18,950 per year for international students. Whereas the average tuition fee for a master’s degree is £21,000 per year. A doctorate degree costs between £15,000 to £30,000 per year depending upon the university.",
    },
    {
      title: "Future outlook",
      content1:
        "An education in Philosophy and Religious Studies prepares you to find employment in a variety of career paths. Due to the very nature of the subject students develop strong analytical and critical thinking skills making them highly effective in a number of occupations.",
      content2:
        "As more and more jobs become automated there is a massive need for critical and creative thinkers. In the academic year 2019-2020 Philosophy and Religious Studies was the 29th most popular major. However, this number is expected to rise in relation to the increased demand in the job market for Philosophy and Religious Studies graduates. In fact, there is a 10.5% projected growth in employment opportunities for Philosophy and Religious Studies graduates.",
    },
    {
      title: "Career Pathways for Philosophy and Religious Studies graduates",
      subtitle1: "Community Development worker",
      content1:
        "As a community development worker, you will help communities make appropriate changes and help improve the living standards of people. You will also ensure that people have a say in community matters and that their issues are properly addressed by the concerned authorities. A community development worker also proposes strategies for the development of the community.",
      subtitle2: "Editorial Assistant",
      content2:
        "A degree in philosophy and religious studies enhances your ability to articulate yourself well. If you have good grammar and writing skills, then you can easily score a job as an editorial assistant. As an editorial assistant, you’ll summarise and edit manuscripts, texts, articles and scripts.",
      subtitle3: "Journalist",
      content3:
        "As a journalist, you’ll research and report different issues affecting the society. Journalists make news accessible to the public by reporting the affairs of the day in an easily understandable manner. Additionally, you will also attend conferences with political leaders and thought leaders and ask questions regarding the betterment of society.",
      subtitle4: "Youth Worker",
      content4:"A youth worker helps and guides young people to understand themselves and supports them in their social and educational development. As a youth worker, you’ll get to work in schools, colleges and youth centres, and conduct training programs with young people as well as their parents.",
      subtitle5: "Chaplain",
      content5:"Chaplains are people of faith or philosophical beliefs who provide guidance and counselling to those in need. A career in chaplaincy would suit you if you're interested in helping people, are a good listener and have the capacity to deal with a range of challenges presented by individuals seeking pastoral care.",
      subtitle6: "Lecturer",
      content6:"As a lecturer, you will need expertise in your subject be it metaphysics, epistemology, logic, theology or comparative religion to teach students. Teaching methods include lectures, seminars, tutorials, practical demonstrations, fieldwork and e-learning. Multimedia technologies are increasingly being used by lecturers to complement and substitute in-class learning.",
        },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Philosophy and Religious Studies abroad</h1>
        <p>
          Religion and philosophy are fundamental parts of how people express
          their understanding of the purpose of life, the foundations of
          individual and social behaviour. This field of study explores the
          frameworks people use to interpret and navigate the world.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>70% of the students get an employment opportunity
            immediately after graduation
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 10.5% increase in employment opportunities for
            Philosophy and Religious Studies related careers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $6600: average annual salary of a Philosophy and
            Religious Studies graduate
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> Increase in the number of students enrolled in
            Philosophy and Religious Studies programmes
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

export default Philosophyandreligious;
