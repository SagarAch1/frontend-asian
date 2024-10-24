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
      title: "About Bakery",
      content1:
        "Baking is the culinary arts field that mainly focuses on the production of baked goods including breads, cakes, chocolates, pastries and pies. It differs from other culinary arts in several ways, one being that most bakery items are prepared beforehand and sold to customers later that day or next day of their preparation while culinary arts cooking is done in real time while customers wait on the table.",
      content2:
        "Baking requires diligence and patience to get the best results possible. The career options in baking are endless with its growing demand. A baker or pastry chef is employed in various settings including restaurants, cafés and bakery shops.",
        content3:"There are different courses offered to pursue a career in baking throughout the world. These courses usually provide a detailed introduction about baking terminology, commodities and equipment. They teach students how to maintain hygiene and sanitation, and adopt safety measures. However, the principal focus is on baking practices.",
    },
    {
      title: "Is studying Bakery right for me?",
      content1:
        "If you are a detail-oriented individual who has a passion for baking, then this might be the right field for you. Since baking recipes must be followed strictly, attention to detail and exactitude is vital.",
      content2:
        "Driven by creativity and curiosity to experiment with different ingredients, bakery chefs introduce delicious new recipes to the menu. If you think you can work under pressure and want a career in the culinary arts, then baking could be a right career choice for you.",
    },
    {
      title: "Public Health study options and costs",
      content1:
        "There are multiple online courses as well as in-person courses and diplomas available for baking majors. In Canada, online diploma courses in Baking and Pastry Arts are available for full-time study. These courses usually take around 2 years to complete and tuition costs around CAD$2,721 per year.",
      content2:
        "In the US, many bachelor’s programmes are offered in culinary arts but for specifically baking- related education, you could earn an associate degree in Baking and Pastry Arts which usually takes less than 2 years to complete and costs around $6,333-$16,000 per semester.",
      content3:
        "In the UK, it usually takes 3 years to complete a BSc (Hons) in Bakery and Patisserie and costs around £9,250 per year.",
    },
    {
      title: "Future outlook",
      content1:
        "Baking is currently seeing a meteoric rise in its popularity. Low sugar and gluten free bakery products are frequenting more in bakeries and supermarket stores. In addition, social media has further contributed to the eminence of bakery as people snap and share their diets and meals.",
      content2:
        "Baking is currently seeing a meteoric rise in its popularity. Low sugar and gluten free bakery products are frequenting more in bakeries and supermarket stores. In addition, social media has further contributed to the eminence of bakery as people snap and share their diets and meals.",
    },
    {
      title: "Career Pathways for Bakery graduates",
      subtitle1: "Baker",
      content1:
        "As a baker, you can work in a restaurant or run your own bakery. Either way, you will be responsible for preparing all the bakery items on the menu. Your duties may include making bread and sandwiches, and pastries. You will also be responsible for managing employees, experimenting with new recipes, receiving orders, and ensuring their timely delivery.",
      subtitle2: "Specialty Baker",
      content2:
        "A specialty baker focuses on a particular branch of baking. Specialty bakers might find a niche in catering to a specific dietary restriction, like vegan, gluten-free, or plant-based baking. Others may specialise in baked goods from a certain country or cultural heritage. You can also specialise in a certain type of baked food. It could be macarons, bread or pastries.",
      subtitle3: "Pastry Chef",
      content3:
        "Pastry refers to a broad range of desserts which also includes baking. Pastry chefs may work in bakeries — making tarts, pies, and laminated doughs like croissants or puff pastries. As a pastry chef you will oversee the pastry department as well as prepare the menu for the dessert section. Pastry chefs might either be the only person in the pastry department or may lead a team of chefs.",
      subtitle4: "Chocolatier",
      content4:"A chocolatier is a specialist who makes desserts and confections out of various types of chocolate. These could include truffles, fudge, bonbons, chocolate bars, and more. As a chocolatier, you may also make intricate centrepieces of chocolate moulded into animals, flowers, and fruits. A chocolatier must know how to perfectly temper and mould different types of chocolate. Chocolatiers may work in a bakery, pastry shop, restaurant, or specialty chocolate shop.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Bakery abroad</h1>
        <p>
          Baking is a part of the wider professional culinary arts field. It is
          the culinary branch that deals in baked goods and desserts ranging
          from different types of breads and pastries to cakes and pies and
          other savoury baked foods.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong></strong> $507.38 billion is the estimated value of global
            bakery products market in 2020
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong></strong> 28,300 projected job openings for bakers every
            year
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong></strong> $574.05 billion expected value of global bakery
            goods market by 2026
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong> 10% projected employment growth of bakers by 2030
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

export default Bakery;
