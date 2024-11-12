import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Bakery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
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
    color: "#4CAF50", // Attractive color change
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
      title: "About Bakery",
      content1:
        "Baking is a specialized area in culinary arts that focuses on creating baked goods such as breads, cakes, pastries, pies, and chocolates. Unlike other forms of cooking, baking usually involves preparing products ahead of time, with many items being sold on the same day or the next day after they're made, while other culinary dishes are prepared fresh to order.",
      content2:
        "Baking requires great care and precision to ensure the best outcomes. With the increasing demand for baked goods, career opportunities in the field are expanding. Bakers and pastry chefs are employed in a wide range of settings, including restaurants, cafes, and bakeries.",
      content3:
        "Various courses around the world offer education in baking. These programs cover essential topics such as baking terminology, ingredients, and tools. Students learn about sanitation, hygiene, and safety procedures, but the main emphasis is on mastering baking techniques.",
    },
    {
      title: "Is studying Bakery right for me?",
      content1:
        "If you are detail-oriented and have a passion for baking, this field might be a great fit for you. Since baking requires following precise recipes, paying attention to detail is essential.",
      content2:
        "If you enjoy experimenting with ingredients and want to introduce creative recipes, bakery chefs often innovate new treats. If you're comfortable working under pressure and have a passion for the culinary arts, a career in baking could be a perfect choice.",
    },
    {
      title: "Study options and costs",
      content1:
        "There are many options for studying baking, both online and in person. In Canada, online diploma courses in Baking and Pastry Arts typically take 2 years and cost about CAD$2,721 annually.",
      content2:
        "In the United States, while many culinary arts programs are offered, you can pursue an associate degree in Baking and Pastry Arts. This program generally takes under 2 years to complete and costs between $6,333 and $16,000 per semester.",
      content3:
        "In the UK, students can pursue a BSc (Hons) in Bakery and Patisserie, a 3-year course that costs around £9,250 per year.",
    },
    {
      title: "Future outlook",
      content1:
        "Baking is gaining immense popularity, particularly with the increasing demand for low-sugar and gluten-free baked goods. These products are becoming more common in both bakeries and supermarkets. Additionally, social media plays a significant role in boosting the popularity of baking, as people share photos of their meals and treats.",
      content2:
        "Baking's popularity is surging, with trends like low-sugar and gluten-free options becoming more prevalent. Social media has helped make baking even more popular as people showcase their culinary creations online.",
    },
    {
      title: "Career Pathways for Bakery graduates",
      subtitle1: "Baker",
      content1:
        "As a baker, you can work in various settings, from restaurants to independent bakeries. Your responsibilities will include preparing a variety of bakery items, such as breads, pastries, and sandwiches. You may also manage staff, develop new recipes, handle orders, and ensure timely deliveries.",
      subtitle2: "Specialty Baker",
      content2:
        "Specialty bakers focus on specific niches in baking, such as gluten-free, vegan, or plant-based products. Some specialize in baked goods from certain cultural traditions or regions, while others may focus on a particular type of baked product, such as macarons or artisan bread.",
      subtitle3: "Pastry Chef",
      content3:
        "Pastry chefs are experts in creating a variety of desserts, including tarts, pies, and puff pastries. They may work independently or lead a team in a bakery. Pastry chefs are responsible for preparing and overseeing the dessert menu and managing the pastry department.",
      subtitle4: "Chocolatier",
      content4:
        "A chocolatier specializes in making chocolate-based confections such as truffles, bonbons, and chocolate bars. They may also create decorative chocolate pieces for events. A chocolatier must be skilled in tempering and molding chocolate. They often work in bakeries, specialty chocolate shops, or restaurants.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Bakery abroad</h1>
        <p>
          Baking is a branch of the culinary arts that focuses on producing a variety of baked 
        </p>
        <p> goods, such as breads, cakes, pastries, and pies, along with savory baked products</p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $507.38 billion is the estimated value of the global bakery products market in 2020.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 28,300 projected job openings for bakers every year.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $574.05 billion expected value of the global bakery goods market by 2026.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 10% projected employment growth for bakers by 2030.
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
                {item.subtitle1 && <div style={faqSubtitleStyle}>{item.subtitle1}</div>}
                {item.content1 && <p>{item.content1}</p>}
                {item.subtitle2 && <div style={faqSubtitleStyle}>{item.subtitle2}</div>}
                {item.content2 && <p>{item.content2}</p>}
                {item.subtitle3 && <div style={faqSubtitleStyle}>{item.subtitle3}</div>}
                {item.content3 && <p>{item.content3}</p>}
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

export default Bakery;
