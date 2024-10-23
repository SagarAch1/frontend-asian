import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const InformationTechnology = () => {
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
      title: "About Information Technology",
      content:
        "Information Technology is a pivotal force in our society today, dictating the way we work, study, socialise and more. Talented IT professionals can enjoy fantastic stability, growth and opportunities, whether they’re tech-savvy, creatively-minded, or a mixture of both. If you’re looking to make your mark on the digital world, studying Information Technology is the first step to take.",
    },
    {
      title: "Is Information Technology right for me?",
      content1:
        "Information Technology tends to appeal to people who love solving problems and overcoming challenges. You’ll also need to have a keen eye for detail and a knack for organisation. Contrary to what some people might think, IT professionals also work closely with others, so strong communication skills and a positive attitude are key as well.",
      content2:"IT professionals typically work in office environments but are sometimes able to score remote jobs or even work for themselves. While a 9-5 routine is typical, professionals in database management or cybersecurity may also have to work out-of-hours in urgent situations, so it’s important to have a strong work ethic as well.",
    },
    {
      title: "Information Technology study options and costs",
      content1:
        "The majority of IT professionals have at least a diploma, although these days, a Bachelor’s degree is becoming the standard. A Bachelor’s degree in IT can cost around AUD$30,000 a year in Australia, while an Associate’s degree will set you back USD$18,000 in the US. When considering the high salaries IT professionals tend to make, getting a top-notch education can really pay for itself!",
      content2:"It’s also a good idea to figure out the certifications you might need for your desired career path. Some options might include the Google Professional Cloud Architect certification or the CompTIA certification, depending on the role you’re aiming for.",
    },
    {
      title: "Future outlook",
      content:
        "IT jobs are projected to grow by 13% by 2030, which is faster than the average for other occupations. Available jobs are now extending beyond the tech space as well, with educational institutions, government agencies, hospitals and more all requiring IT talent. This means there’s endless potential to switch industries or make a horizontal career change. In fact, as technology continues to evolve, the opportunities for talented tech professionals will only continue to grow. New cybersecurity threats will emerge and a higher standard of organisational performance will need to be met, all of which requires the help of IT professionals.",
    },
    {
      title: "Career pathways for Information Technology graduates",
      subtitle1: "Cybersecurity Specialist",
      content1:
        "Cybersecurity specialists are responsible for maintaining the security of computer systems and networks. This involves proactively developing and testing the effectiveness of security systems, as well as responding to cybersecurity incidents. Cybersecurity roles are growing faster than any other tech occupation, with a 31% increase in available jobs being expected over the next ten years, so it’s the perfect choice for future-minded tech lovers.",
      subtitle2: "Data Analyst",
      content2:
        "Data analysts collect, analyse and interpret data for organisations, helping them identify problems and devise informed solutions. Data analysts typically have a background in computer science, statistics, mathematics or economics, and also need to be strong communicators in order to deliver reports and presentations to stakeholders.",
      subtitle3: "IT Manager",
      content3:
        "IT managers oversee IT teams and electronic networks, ensuring all system requirements are met. In this senior role, you’ll regularly run checks on network and data security, update software and systems, and train staff, to name just a few key responsibilities.",
      subtitle4: "Software Developer",
      content4:"Software developers create and build out software, using their detailed knowledge of programming languages to write guidelines for programmers or even doing the coding themselves. As well as writing new programs, you’ll also be responsible for updating existing software and training other users.",
      subtitle5: "Web Developer",
      content5:"Similar to software developers, web developers are responsible for coding and designing websites. WIth knowledge of both programming and design, web developers create pages, navigation and user interfaces, as well as update websites in line with best practice guidelines.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Information Technology abroad</h1>
        <p>
          The Information Technology (IT) industry encompasses a huge range of
          professions, all with exciting prospects. As digital products and
          services become an increasingly large part of our world, the need for
          IT professionals has also skyrocketed.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> IT professionals earn a median salary of
            USD$91,250
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>IT jobs are predicted to grow by 13% between 2020
            and 2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> 245,500 new IT jobs will emerge in the US in 2021
            alone
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> The US tech industry contributes USD$2 trillion to
            the economy
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

export default InformationTechnology;
