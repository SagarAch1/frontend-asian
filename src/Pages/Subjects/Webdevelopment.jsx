import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const WebDevelopment = () => {
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
      title: "About Web Development",
      content1:
        "Web Development refers to the process of writing the code that powers a website. The aim is to build user-friendly websites, which means they should be easy to navigate for users. Web developers also build important functions within websites, such as paywalls or newsletter sign-up forms, to help businesses meet their objectives.",
        content2:"From static web pages to complex apps, web developers create a variety of solutions and tools that we all rely on every day. As more and more businesses pop up around the world, the demand for Web Development skills will only continue to grow, meaning it’s a great avenue to consider pursuing.",
    },
    {
      title: "Is Web Development right for me?",
      content1:
        "Web Development is ideal for technically-minded people with strong coding skills. You’ll often work independently but may sometimes need to collaborate with other developers or designers to work on all elements of a website together. On a day to day basis, you’ll communicate with clients, plan layouts, write code and test websites, ensuring an all-round positive user experience. Your end objective is to develop a product that meets the client’s goals as well as the user’s needs.",
        content2:"Aside from communication and technical skills, web developers are also organised people with a detail-oriented mindset. You should also be a creative problem-solver and have a patient attitude in order to tackle pesky bugs!",
        content3:"Many web developers work in office environments, but it’s also possible to work remotely or in a freelance capacity. This means you can live in a low-cost area but still rake in a fantastic salary!",
    },
    {
      title: "Web Development study options and costs",
      content1:
        "17% of web developers hold a Computer Science degree, with other common degrees including Computer Engineering, Web Design and Information Technology. 50% of professional web developers hold a Bachelor’s degree, which costs an average of AUD$34,400 per year in Australia, CAD$38,000 in Canada and USD$50,000 in America. If you already have some transferable skills or are looking for a shorter course, consider an Associate’s degree or a certificate.",
        content2:"Web developers also tend to study throughout their careers, picking up new certifications or taking short courses to keep their skills in line with evolving technologies. Certificates in up-and-coming programming languages or the latest web security measures are smart investments to make.",
    },
    {
      title: "Future outlook",
      content:
        "Web developers are in high demand, with job opportunities in the US being expected to grow 13% by 2028. Among all IT skills, Web Development is also one of the most sought-after. Web applications are a huge part of our lives, with advancements in big data, cloud computing and more requiring the assistance of talented web developers. Java and app developers are in particularly high demand, which means it can be smart to specialise in these areas.",
    },
    {
        title: 'Career pathways for Web Development graduates',
        subtitle1: 'Front-End Developers',
        content1: 'Front-end developers code the front end of the website, i.e. what the user can see. Using markup languages, scripts, frameworks and designs, front-end developers create the environment that the end-users will eventually interact with. This includes the layout, fonts, menus, contact forms and colours, all dictating the user experience and reinforcing the brand aesthetic.',
        subtitle2: 'Back-End Developers',
        content2: 'Back-end developers build the components that allow a website to function. Their back-end code adds functionality to everything that appears on the front-end, while also boosting the overall performance of the website. By communicating with the front end, data is able to be stored efficiently and the website will continue to run smoothly. You’ll also be responsible for testing websites, identifying bugs and implementing fixes.',
        subtitle3: 'Full-Stack Developers',
        content3: 'Full-stack developers are the all-rounders of the Web Development world, working across the entire Web Development process. Taking the back end data, full-stack developers use HTML, Javascript and CS to bring this data to life. Due to their ability to look at the big picture, full-stack developers are sure to see high demand.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Web Development abroad
        </h1>
        <p>
        As technology continues to take up a bigger role in our lives, web Development presents a great pathway for technically-minded people with a creative streak, enabling them to build websites and tools for a variety of purposes.



        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong>The average salary for US web developers is USD$69,038


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Top-level web developers make USD$126,373


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>9% projected job growth</strong> Demand is expected to grow 14.9% by 2026


          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 72.8% of web developers report high job satisfaction


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

export default WebDevelopment;
