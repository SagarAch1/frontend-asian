import React, { useState } from "react";
import Footer from "../Homepage/Footer";
import FormPage from "../Homepage/FormPage";

const DigitalProduction = () => {
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
      title: "About Digital Production",
      content1:
        "Digital Production is a new and interdisciplinary field that lies at the cross-section of film production, sound production, design, screenwriting, communication and film theory. It entails transforming creative ideas and assets such as text, images and interactive apps into a variety of digital media, and includes the production of digital music, streaming video, and other widely distributed content.",
      content2: "Students learn how to assess and comprehend the media in their environment, create media in a variety of formats, and manage the commercial and technological demands of working in the media industry. The program teaches compelling storytelling for fiction and nonfiction genres using a variety of media. Students can provide a voice to their community and their stories by using and adapting to evolving technologies and critical thinking abilities.",
      content3: "This course mandates hands-on learning and your university is likely to provide you access to high-power digital cameras, dolly systems, recording rooms, studios and technical assistance to prepare you for the real world. Could you be the next big production star?",
        },
    {
      title: "Is Digital Production right for me?",
      content1:
        "Students looking to break into a digital production school typically need to demonstrate an aptitude for creative arts and media. Through the course of these studies, students are trained on a variety of different production software. They are taught latest video production techniques and trends. Digital production master's programs are particularly hands-on and project-based, with a strong emphasis on creativity and personal expression. Courses emphasise creativity and teaching emerging video concepts, as well as individual and group project work.",
      content2: "If you are passionate about production and see yourself as a future content producer, then digital production will ratchet you up quickly in the field of filmmaking, music production and much more.",    },
    {
      title: "Digital Production study options and costs",
      content1:
        "A bachelor's degree in Digital Production could cost anywhere between $20,000-$30,000 per year in the US. A bachelor's degree typically takes three to four years to complete. On the other hand, the cost of a master's degree ranges from $30,000 to $40,000 in the US and generally is two years long.",
      content2:"Digital production certificate programs normally run one year and can be completed before or after earning a degree. Some certificate programs follow the same curriculum as associate's degree programs, but they only teach the essential technical elements such as digital video technology, multimedia, and editing. These programs are appropriate for those seeking employment in the digital production area as well as those working in other fields (such as broadcasting) who would benefit from digital media abilities. Other certificate programs may concentrate on a single aspect of digital production, such as image editing or the use of a certain software application, in order to help students enhance their skills.",
    },
    {
      title: "Future outlook",
      content:
        "As the frontiers of technology continue to expand, the concept of digital media production evolves. In many cases, it relates to the creation of visual media, such as digitally improved animation, or new media, such as website development, multimedia authoring, and computer game development. As the field continues to expand, there are more job opportunities available. For example, the employment rate for video editors is predicted to increase by a whopping 18% this decade! It is safe to say that the future of digital production is full of potential and opportunities.",
    },
    {
      title: "Career pathways for Digital Production graduates",
      subtitle1: "Digital Media Strategist",
      content1:
        "They analyse consumer behaviour and industry trends in order to devise and implement media strategies (e.g., ad campaigns, online media content) to raise brand awareness, sell products, and so on.",
      subtitle2: "User Experience Designer (UX designer)",
      content2:
        "A crop consultant or advisor provides advice on crop management, including seed planting, fertilisation, pest management, and treatment for plant diseases. Crop consultants can assist growers all around the globe increase crop productivity.A UX designer studies and assesses how customers perceive technology applications (e.g., websites, apps, and software), and then uses that information to organise information and system interactions to constantly improve user experience.",
      subtitle3: "Graphic Designer",
      content3:
        "They draft layouts and create graphics for a variety of applications in both print and online mediums, using creative and design talents.",
      subtitle4: "Digital illustrator",
      content4:
        "As a self-employed designer or in-house for a corporation or other organisation, a digital illustrator creates drawings and illustrations for books, advertisements, product packaging, and more.",
      subtitle5: "Video Game Designer",
      content5:
        "Video game designers use computer animation tools to develop characters, stage layouts, cut scenes, and other aspects of video games' visual style and art concepts.",
    },
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Digital Production abroad</h1>
        <p>
          Want to deliver riveting stories that grab viewer attention?.
          ThisDigital production is an ideal field of study for those looking to
          develop their storytelling abilities to move the world!
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p>
            <strong>4.79%</strong>:  projected expansion of the global animation market
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p>
            <strong>$93,940</strong>  median annual salary for digital production managers in the US
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p>
            <strong>4%</strong>  expected growth of employment opportunities for multimedia arts this decade
          </p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p>
            <strong>$77,700</strong>  medium annual salary for multimedia artists
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

export default DigitalProduction;
