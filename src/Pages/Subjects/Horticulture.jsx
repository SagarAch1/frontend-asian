import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const HoriCulture = () => {
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
      title: "About Horticulture and Viticulture",
      content:
        "Horticulture is the discipline of growing, improving, and commercialising flowers, fruits, vegetables, and plants for decorative purposes. The science, production and study of grapes on the other hand is known as viticulture. Viticulture is the cultivation of grapes to produce wine. Before the grapes are picked, organic viticulture encompasses all sorts of grape growth.",
    },
    {
      title: "Are Horticulture and Viticulture right for me?",
      content:
        "If you enjoy gardening and want to increasing your knowledge in growing new stuff, then Horticulture and Viticulture is a great career option for you. Professionals in this sector have a broad and in-depth understanding of the subject. Horticulture contributes to the long-term sustainability and rehabilitation of our environment by providing beauty, greenery, and a higher quality of life to our lives. On the other hand, viticulture is such a specialist degree; you'll almost certainly end up working with grapes and wine. If you have a love for fine wine and have a genuine interest in becoming a winemaker then a degree in viticulture is just the thing for you. If you have the capacity to work under pressure, this is a fantastic career option for you: Because grapes take around a year to develop, or one growing season, winemakers only get one chance every year to brew a new wine.",
    },
    {
      title: "Horticulture and Viticulture - study options and costs",
      content:
        "In Australia, a degree in horticulture or parks and gardens is normally necessary to work as a horticulturalists. Bachelors of Horticulture is around a 3-year degree following which you can start your career in the field. The cost of these degrees in a public Australian university is around 20,000-25,000 AUD/year while for private universities it is around 20,000-45,000 AUD/year. In the case of Viticulture, you can do a graduate diploma in Australia, a bachelor’s degree similar to Horticulture with roughly the same cost, and later opt for a master’s degree.",
    },
    {
      title: "Future outlook",
      content:
        "Horticulture is a broad area with a lot of potential. Horticulturists might work at horticultural institutions, plantations, vegetable farms, and fruit groves. Horticultural technological advancements, rising product demand, and a growingexports make this a very attractive employment choice. The Greenhouse Horticulture industry is expected to reach US$ 43.85 billion by 2027. Similarly, viticulture is a highly rewarding profession. In 2020, the worldwide wine market was valued at USD 339.53 billion.",
    },
    {
        title: 'Career pathways for Horticulture and Viticulture graduates',
        subtitle1: 'Assistant Winemaker',
        content1: 'This job comprises managing the vineyard and winemaking techniques including bottling wine from barrels, fermentation of wine, racking & labeling them, and inventory control. You will also be responsible for keeping track of grounds care, such as spraying vines for pests, mowing lawns, trimming hedges, and composting or otherwise disposing of garbage. You would  essentially be a winerys errand boy.',
        subtitle2: 'Grower Liaison Officer',
        content2: 'This one integrates several different responsibilities into a single role. You will be in charge of monitoring the vineyards stock portfolio, comparing actual crop yields to anticipated yields, sample collection, quality testing, and grape harvest planning are all part of the process. If you dont want to get your hands dirty and have a knack for numbers, this may be a great option.',
        subtitle3: 'Horticulturist',
        content3: 'Horticulturists are responsible for boosting plant output, vigor, size, and flavor. They also coordinate certain crop research initiatives. Horticulturists must be well-versed in a wide range of plants, including trees, flowers, vegetables, nuts, shrubs, and fruits.',
        subtitle4: 'Plant Pathologist',
        content4: 'Plant pathologists study plant materials in the lab and conduct tests to discover the features of diseases that affect plants. This work may allow you to go to areas where plant disease is rampant, where you will most likely conduct soil composition tests and collect samples. Furthermore, you may be able to create new varieties of disease-resistant plants that will make a significant contribution to society, notably in the field of food production.',
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Horticulture and Viticulture abroad</h1>
        <p>
        Do you wish to gain knowledge and expertise about the art & discipline of nurturing gardens? Studying horticulture may be a great career option for you.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>In 2020,</strong>:  the worldwide greenhouse horticulture industry will be worth $25.2 billion.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>In the years ahead,</strong>  the market is estimated to increase at a CAGR of roughly 5% between 2021 and 2026.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>According to a USDA </strong> estimate from 2019, horticulture sales were approximately $14 billion.
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>In the years 2019-2020,</strong>  the horticulture industry employed over 60,000 people.
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

export default HoriCulture;
