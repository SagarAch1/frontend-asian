import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const TaxAccounting = () => {
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
      title: "About Tax Accounting",
      content1:
        "As the name suggests, tax accounting focuses solely on a client’s taxes rather than their overall financial position. As a tax professional, you’ll have to follow the relevant laws when filing taxes on your clients’ behalf and also seek to maximise the tax write-offs they can claim. Tax accountants also provide tax planning advice to their clients and work to stay on top of changing tax laws.",
      content2: "Tax accountants are required across all levels of the economy, from individuals to large-scale corporations.",
    },
    {
      title: "Is Tax Accounting right for me?",
      content1:
        "Tax accounting is ideal for detail-oriented people who enjoy solving problems. Strong numeracy skills, time management skills and a willingness to adopt new technologies will also help you go far.",
      content2: "For most of the year, you’ll likely have a routine work schedule between the hours of 9am and 5pm. At tax time, however, you’ll work long hours and even weekends to keep on top of your duties.",
      content3: "When it comes to a tax accounting course, you should start off with an Accounting course to ensure you have a good understanding of business administration schemes, accounting theory and basic finance.",


    },
    {
      title: "Tax Accounting study options and costs",
      content1:
        "There’s a few different pathways to becoming a tax accountant, depending on the time commitment you’re willing to make and what your existing credentials are. Most professional tax accountants possess a Bachelor of Accounting or a Bachelor of Accounting and Finance. It’s also possible to become a tax professional with a two-year Diploma.",
      content2: "Bear in mind that each country will have its own rules and regulations that tax professionals must abide by. This might include completing a board-approved course, getting registered with the relevant tax board, or completing relevant work experience.",
      content3: "It’s also worth doing a cost-benefit analysis to determine what level of education you’d like to pursue. Accountants who have completed a Bachelor’s degree earn a median salary of USD$69,000 while those with a Master’s degree earn around USD$91,000, so it may be worth pursuing a higher level of education! To give you a general idea, most international students will spend upwards of $30,000 on their accounting degree.",
      content4: "You’ll also have to factor in the cost of any certifications or registrations you need to legally practice in the country you intend to work in. For example, Australians have to register with the Tax Practitioners Board, while UK accountants must register with Her Majesty’s Revenue and Customs (HMRC).",
    },
    {
      title: "Future outlook",
      content1:"Tax accountants tend to have an above-average salary, with US accountants making $70,500 and British accountants earning £62,042 a year. The earning potential in the tax field can be enormous for those who run their own accounting firms or work as a consultant for high-value clients.",
      content2:"In the accounting field more generally, jobs are expected to grow by 10-11% in the next five years, equating to 139,900 jobs. Given how complicated tax laws are, tax accountants are sure to remain in high demand.",
    },
    {
      title: "Career pathways for Tax Accounting graduates",
      subtitle1: "Financial Manager",
      content1:
        "Financial managers monitor the financial health of an organisation, producing reports and developing strategies to meet the organisation’s financial goals. A relevant Bachelor’s degree in Accounting, Finance, Economics and Business Administration will help you get your foot in the door.",
      subtitle2: "Financial Analyst",
      content2:
        "Financial analysts use data to identify opportunities or evaluate business decisions, generating the best possible outcomes for their clients. A Bachelor’s degree in Mathematics or Finance is usually the benchmark for financial analysts.",
      subtitle3: "Budget Analyst",
      content3:
        "Budget analysts help organisations allocate their financial resources through the use of detailed budgets. Budget analysts typically have a Bachelor’s degree in Accounting, Finance, Business or Economics.",
      subtitle4: "Financial Adviser",
      content4:"Financial advisers work with individuals to help them meet their financial goals. As a financial adviser, you’ll create a game plan for your client and provide professional advice along the way. Financial advisers need to possess an approved degree - in Australia, for example, you’ll need to choose a degree that’s been approved by the Financial Adviser Standards and Ethics Authority (FASEA).",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Tax Accounting abroad</h1>
        <p>
          Tax accountants handle the ins and outs of taxes for individuals,
          businesses and government agencies. As well as making a difference in
          people’s lives and finances, tax accountants also have an opportunity
          to earn a great salary and enjoy a stable career.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>The median annual salary</strong>: for accountants is USD$73,560
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>The top 10%</strong>  of accountants earn around USD$122,840 a year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Tax accountants</strong>  make more than the median average for other occupations
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Jobs</strong>  are predicted to grow by 7% in the next ten years
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

export default TaxAccounting;
