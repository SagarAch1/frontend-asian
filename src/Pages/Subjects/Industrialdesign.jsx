import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const Industrialdesign = () => {
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
      title: "About Industrial design",
      content1:
        "During the course of your study, you will be familiarised with fundamental concepts of visual art, design and modelling. You will also analyse how design and art evolved in relation to societal and historical changes to best fit the contextual needs. Furthermore, you can expect a lot of credit hours to be spent in the studio, drilling skills like 3D structuring, prototyping, CAD rendering, 3D printing and design management.",
      content2: "By the end of your study, you will be able to communicate ideas about products as varied as medical instruments, mobile apps, furniture and electronic appliances, often using powerful computer modelling software. Industrial design teaches you not only how to conduct market research and develop your concept but also how to make a working prototype and effectively market it.",
        },
    {
      title: "Is Industrial design right for me?",
      content1:
        "If you’re someone who is drawn to the visual design of products around you, who pays attention to detail about how each specific part is placed on everyday products around you and think of ways how you would go about designing a product yourself, then industrial design just might be the right choice for you.",
        content2:"Industrial design is distinct from other design fields in that it greatly emphasises problem-solving. This field of study allows you to combine your creative nature with your knack for problem-solving to design products that add significant value to the lives of others.",
        content3:"In some ways, this is far more challenging than being any other artist because here you have to design products that are not only appealing but also functional. So, if you’re wondering if this field is right for you, just ask yourself this question, and you will know the answer: Am I creative and good at problem-solving?",
    },
    {
      title: "Industrial design - study options and costs",
      content1:
        "In the US, any aspiring candidates will need to pay an average of $35,000 per year in terms of tuition fees and other living costs. Top universities in this field, such as Carnegie Mellon, charge far higher annual tuition fees at around $58,000. For graduate programs, the average cost annually for specialisation in industrial design is around $30-40,000.",
        content2:"In other countries such as Australia or the UK, the annual cost comes out to be roughly the same at an average of $30,000-$40,000 for undergraduate programs.",
    },
    {
      title: "Future outlook",
      content1:
        "The 6% growth in the employment rate for the field foreshadows the promise industrial design will hold in the coming years. Over the past decade, companies have increasingly become aware of the requirement for an industrial designer and are now more willing than ever before to allocate capital towards innovation and product design. This has occurred due to several factors such as increased global competition, increased focus on customer satisfaction, and so on.",
        content2:"On average, around 3100 new job opportunities are estimated to open each year in the US alone! Not only that, but many new companies globally are revamping their entire product focus to create products for mass use that tie in with maximising customer satisfaction. According to the Bureau of Labour Statistics (BLS), industrial designers can earn upward of $118,000 after acquiring experience in the field, which is indicative of the growing awareness of the importance of industrial designers.",
    },
    {
      title: "Career Pathways for Industrial design graduates",
      subtitle1: "Industrial Designer",
      content1:
        "Industrial designers draw on their blend of engineering and creative skillset to develop products that meet the client's demands while being user-friendly and aesthetically appealing. This means conducting market research on consumer behaviour, testing different product concepts (3D design/illustrations/CAD drawings), and designing products that appeal to the client’s target audience. The average annual income of an industrial designer is USD 58,200.",
      subtitle2: "Package Designer",
      content2:
        "Packaging designers are employed in a variety of institutions ranging from the toy and electronics industry to the healthcare and hardware industry. The responsibility of a package designer is to develop and test different packaging solutions for his company. They achieve their goal by researching various types of materials that are better alternatives for packaging and creating standardised packaging designs for massed produced goods. The average annual income of a package designer is USD 51,000.",
      subtitle3: "Furniture Designer",
      content3:
        "Furniture designers work in furnishing companies or furniture manufacturing firms. They design custom furniture based on the individualised needs of their clients. Their responsibilities included constantly communicating with their client during the designing process to tailor the furniture to their client's needs and want. They use computer-aided design software to experiment with a variety of elements until they find what works best. They also estimate the cost of the materials and manufacturing process. The average annual income of a furniture designer is USD 51,400.",
      subtitle4: "Automotive Designer",
      content4:"As the name suggests, they work for automobile manufacturers. There rely on their understanding of physics and creative flair to design ergonomic vehicles that are simultaneously aerodynamic and visually appealing. Their work naturally involves a lot of sketching and modelling to decide what design works best. They usually work in teams, each assigned to a particular vehicle part. The average annual income of an automotive designer is USD 80,700.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Industrial design abroad</h1>
        <p>
          Industrial designers make sure products not only more functional but
          also appealing. Studying industrial design is the perfect way to make
          this world a better place for everyone, one product at a time.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>40,000</strong>:  industrial designers employed in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>6% </strong> estimated average employment growth industrial designers
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>$71,440</strong>  median salary for an Industrial Designer
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong></strong>Top industrial designers can earn upwards of $118,440 annually
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

export default Industrialdesign;
