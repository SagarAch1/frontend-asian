import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Cosmetology = () => {
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
      title: "About Cosmetology",
      content1:
        "Cosmetology is the discipline that explores and implements different ways to beautify hair, nails and skin of individuals. It primarily focuses on enhancing beauty through different cosmetic procedures and therapies. The field of Cosmetology includes makeup application, scalp care, facial treatments, hair styling, and manicures and pedicures.",
      content2:
        "A cosmetologist is a certified professional who has completed their training in the field of Cosmetology. A cosmetologist helps clients meet their unique aesthetic goals, helping them feel more confident. Cosmetologists work in barbershops, salons, spa, hotels and even resorts that offer spa and salon services. Cosmetology offers a lot of career flexibility, plenty of creative freedom, and above all the opportunity to impact the lives of others in a meaningful way.",
        content3:"Common course modules students may expect to study include Makeup Application, Cosmetology Fundamentals, Aesthetics, Contemporary Design, Safe Chemical Processes, Cosmetology Entrepreneurship, Digital Marketing, Salon Management, Professional Imaging, and Product Marketing.",
    },
    {
      title: "Is Cosmetology right for me?",
      content1:
        "If you consider yourself to be creative, have a strong inclination towards beauty practices and are gregarious, then you are well suited to this field. A cosmetologist is driven by his passion for beauty, creativity and professional skills.",
      content2:
        "Students that possess a knack for creativity and aesthetics tend to do best in this field. The best cosmetologists have their own unique artistic vision but at the same time are adaptable to the client’s needs. As a cosmetologist directly interacts with customers, he must have good communication and interpersonal skills. A good colour and style perception just adds to the charms of a good cosmetologist. If you are passionate about helping others feel more beautiful and confident, then this field is a good fit for you.",
    },
    {
      title: "Study options and costs",
      content1:
        "In order to pursue Cosmetology as a professional degree, you must have completed your high school education. Only after this can you enrol in a state-licensed Cosmetology school. The duration of courses and programmes varies considerably, based on the institute you attend. It takes almost 9 to 15 months to complete most certification programmes. An associate degree in Cosmetology usually takes 2 years to complete and costs approximately $15,000 to $20,000 in the US.",
      content2:
        "After the completion of their Cosmetology programme, students complete their required training hours which range from 1,000 to 2,300 hours, including the time spent in classroom. The final step is to clear the state licensing exam. You must graduate from a Cosmetology programme that is approved by state and clear the state licensing exam to professionally practice cosmetology.",

    },
    {
      title: "Future outlook",
      content1:
        "The Cosmetology industry has been growing rapidly for many years. In fact, the estimated global worth of the global cosmetology industry is predicted to jump to $716 billion in 2025 from $511 billion in 2021. The beauty influencer and blogging industry is playing a significant role in driving this rapid growth.",
      content2:
        "According to the U.S. Bureau of Labor Statistics, the projected growth of cosmetologists’ and hairstylists’ employment in the job market is 19% by 2030, which is much faster than the average of all other occupations. Moreover, on average almost 85,300 openings for barbers, hairstylists, and cosmetologists are projected each year. Incredible and numerous job opportunities are available for cosmetologists making this programme an attractive choice for many.",
    },
    {
      title: "Career Pathways for Cosmetology graduates",
      subtitle1: "Hairstylist",
      content1:
        "As a hairstylist, you will cut, style and dye hair of your customers. Hairstylist works in spas, salons, and barbershops to cater to the hair needs of their clients. As a stylist, not only will you provide regular haircuts, you will also fix your client’s hair with unique styles. Hairstylists may also be employed by individuals as part of their entourage such as political figures, celebrities, influencers, and athletes.",
      subtitle2: "Consultant",
      content2:
        "As a beauty consultant, you share insight and knowledge about the beauty industry with your clients, who are seeking advice. You will provide information to beauty Cosmetology es to enhance their quality of services and help them formulate strategies to grow their Cosmetology es. Beauty consultants may either choose to establish their own practice or work as part of a large beauty consultancy firm.",
      subtitle3: "Technician",
      content3:
        "As a nail technician, you will be primarily focused on enhancing the look of customer’s hands and feet by shaping, cutting and colouring their nails. Responsibilities of nail technicians also include giving manicures and pedicures to customers. You will be required to stay up to date on latest trends and learn artistic techniques to meet the varied stylistic needs of clients.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Cosmetology abroad</h1>
        <p>
          Cosmetology is the study and application of beauty treatment. Pursuing
          Cosmetology can help you land a flexible and creative career path in a
          blooming beauty industry. Cosmetology is the science and art of
          beautifying skin, hair and nails.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> 19% projected growth of Cosmetology professions by
            2030
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong>Average annual salary of cosmetologists and
            hairstylists
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Estimated global worth of the Cosmetology industry
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 85,300 projected job opening for cosmetologists,
            barbers and hairstylists each year
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

export default Cosmetology;
