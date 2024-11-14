import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const TaxAccounting = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/20160618084847-TaxExemption.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "350px",
    width: "1900px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    marginTop: "82px",
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
    color: "#4CAF50",
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
        "Tax accounting, as the name suggests, centers on a client’s taxes instead of their overall finances. As a tax professional, you'll follow applicable laws when handling taxes for clients and aim to maximize the deductions they can claim. Tax accountants also offer tax planning and remain updated with evolving tax laws.",
      content2: "Tax accountants serve at all levels of the economy, from individuals to large corporations.",
    },
    {
      title: "Is Tax Accounting right for me?",
      content1:
        "Tax accounting is perfect for detail-oriented individuals who enjoy problem-solving. Strong numerical, time management skills, and adaptability to new technology are also valuable.",
      content2: "You’ll likely work standard hours most of the year, but during tax season, expect long hours, including weekends, to meet deadlines.",
      content3: "When starting in tax accounting, it’s helpful to first complete an Accounting course to grasp business administration, accounting theory, and basic finance concepts.",
    },
    {
      title: "Tax Accounting study options and costs",
      content1:
        "There are multiple paths to becoming a tax accountant based on your commitment and prior credentials. Most professional tax accountants hold a Bachelor’s in Accounting or Accounting and Finance, though a two-year Diploma is also an option.",
      content2: "Each country has unique tax professional regulations, which may require approved coursework, board registration, or relevant experience.",
      content3: "Analyzing the education cost-benefit is crucial. Accountants with a Bachelor’s degree typically earn a median salary of USD $69,000, while those with a Master’s earn around USD $91,000. Most international students can expect to pay at least $30,000 for an accounting degree.",
      content4: "You’ll also need to account for certification or registration costs specific to your country. For instance, Australians register with the Tax Practitioners Board, while UK accountants register with HMRC.",
    },
    {
      title: "Future outlook",
      content1: "Tax accountants earn an above-average salary; US accountants make around $70,500, while UK accountants earn £62,042 annually. Those who establish their own firms or work with high-value clients have considerable earning potential.",
      content2: "Accounting jobs are expected to grow by 10-11% over the next five years, adding roughly 139,900 positions. With complex tax regulations, demand for tax accountants is unlikely to wane.",
    },
    {
      title: "Career pathways for Tax Accounting graduates",
      subtitle1: "Financial Manager",
      content1:
        "Financial managers oversee an organization’s financial health, preparing reports and strategies to meet financial objectives. A relevant Bachelor’s in Accounting, Finance, Economics, or Business Administration is beneficial.",
      subtitle2: "Financial Analyst",
      content2:
        "Financial analysts analyze data to identify opportunities and assess business decisions to ensure favorable results for clients. A Bachelor’s in Mathematics or Finance is generally required.",
      subtitle3: "Budget Analyst",
      content3:
        "Budget analysts help allocate financial resources through budgets. A Bachelor’s in Accounting, Finance, Business, or Economics is typical for this role.",
      subtitle4: "Financial Adviser",
      content4:
        "Financial advisers assist individuals in achieving financial goals. They create strategies and offer professional advice, usually requiring an approved degree, such as those accredited by bodies like Australia’s Financial Adviser Standards and Ethics Authority (FASEA).",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Tax Accounting abroad</h1>
        <p>
        Tax accountants manage taxes for individuals, businesses, and governments,
        </p>
        <p> offering both financial impact and stable, high-earning career opportunities.</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>The median annual salary</strong>: for accountants is USD $73,560
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>The top 10%</strong> of accountants earn about USD $122,840 annually
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>Tax accountants</strong> generally earn above the median for other jobs
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>Jobs</strong> in this field are projected to grow by 7% over the next decade
          </p>
        </div>
      </div>

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
                {/* Render subtitles and content */}
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
