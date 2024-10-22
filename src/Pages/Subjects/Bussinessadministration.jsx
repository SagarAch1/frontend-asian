import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const BusinessAdministration = () => {
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
      title: "About Business Administration",
      content1:
        "Businesses administration is concerned with the efficient management of a business, with the end goal of maximising revenue for the company. The study of business administration includes involves learning processes and methods to increase the organization’s internal efficiency (such as workforce productivity) so that it can perform well externally in the market.",
      content2:"In simple words, business administrators assume a wide variety of roles in a business to grow the business. This can range from managing day-to-day operations such as ensuring good customer service or making high-value decisions such as developing policies and quarterly goals.",
    },
    {
      title: "Is Business Administration right for me?",
      content:
        "In any business, a person in a management role has to juggle multiple responsibilities. You might have to meet sales personnel to discuss sales targets that might not have been met, deal with customer related issues, respond to e-mails, deliberate marketing strategies all the while streamlining the business processes to reduce costs. If you believe you have the ability to manage multiple operations simultaneously, perform well under pressure, adapt to changing situations easily, have an analytical mindset and can collaborate and work with teams easily, then a business administration degree may be a good pick for you. .",
    },
    {
      title: "Study Options and Costs",
      content:
        "A business administration degree is one of the most popular degrees with most universities offering both bachelor and masters programs. In the US, the average cost of a business degree is $30-35,000 per year. For a Master’s in Business Administration (MBA), which is typically a 2-year program, the average annual cost can be anywhere around $20,000-40,000. In the UK, the average cost of a bachelor program in business administration can cost anywhere between £13,000-15000 annually.",
    },
    {
      title: "Future outlook",
      content:
        "The world will always need professionals who can run and manage businesses. Of course, the ability to do this successfully requires more than just a business degree, as the right soft skills are also crucial. In the US alone, there is an estimated 8% growth in jobs for business professionals expected over the next decade. It is safe to say that the future outlook for individuals with a business degree is bright.",
    },
    {
      title: "Career pathways for Pest and Weed Control graduates",
      subtitle1: "Sales Executive",
      content1:
        "A sales executive is required to maintain and grow a company’s sales so that the business can keep on generating revenue. This usually includes generating leads, communicating with clients, meeting sales targets, etc.",
      subtitle2: "Human Resource Executive",
      content2:
      "A human resource executive is responsible for the hiring and selection process of new employees, managing the payroll of existing employees, communicating with employees to resolve organisational issues and creating strategies to boost productivity.",
      subtitle3: "Market Research Analyst",
      content3:
        "A market research analyst is concerned with scanning the external environment to create insightful reports for the company regarding market competition, potential risks, potential opportunities and conducting surveys for company products/services.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Business Administration abroad</h1>
        <p>
          Businesses drive economies and skilled professionals and managers who
          can help run businesses effectively will always be in demand globally.
          That’s why a business degree continues being a popular choice among
          students.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>750,000</strong> news jobs to be created in business
            administration this decade in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> Median pay for entry-level positions in business
            administration
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> Median annual pay of a business administration
            professional
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 8% growth in business administrations job expected
            this decade
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

export default BusinessAdministration;
