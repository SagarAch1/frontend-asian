
import Footer from "./Footer";
import FormPage from "./FormPage";
import { useNavigate, } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Counter = ({ endValue, duration, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endValue / (duration / 100);
        const interval = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(interval);
            } else {
                setCount(Math.round(start));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [endValue, duration]);

    // Format the count with K suffix if it's in thousands
    const formattedCount = count >= 900 ? `${(count / 900).toFixed(0)}K` : count;

    return <h2>{prefix}{formattedCount}{suffix}</h2>;
};

const AIECGlobal = () => {
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };
  const navigate = useNavigate();

  const bannerStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "500px",
    objectFit: "cover",
    marginTop:"60px",
  };

  const textContainerStyle = {
    textAlign: "center",
    margin: "20px auto",
    maxWidth: "800px",
    color: "#333",
  };

  const ausImageStyle = {
    width: "800px",
    height: "600px",
    objectFit: "cover",
    margin: "0 auto",
    display: "block",
  };

  const counterContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    gap: "30px",
  };

  const boxStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
    transition: "transform 0.3s ease",
    width: "200px",
  };

  const lineStyle = {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50px",
    height: "3px",
    backgroundColor: "red",
    transition: "width 0.3s ease",
    visibility: "hidden",
  };

  const hoverBoxStyle = {
    transform: "scale(1.05)",
  };

  const hoverLineStyle = {
    visibility: "visible",
    width: "100px",
  };

  const footerStyle = {
    width: "100%",
    position: "relative",
    left: 0,
    right: 0,
  };

  const ceoFrameStyle = {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px",
    border: "2px solid #007BFF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "40px auto",
    maxWidth: "1300px",
    height: "700px",
    backgroundColor: "#f9f9f9",
    position: "relative",
    overflow: "hidden",
  };

  const missionImageStyle = {
    height: "750px", // Height of the frame
    width: "auto", // Maintain aspect ratio
    objectFit: "cover", // Ensure the image covers the area without distortion
    marginLeft: "20px", // Space between image and text
    marginTop: "-50px", // Move the image up, adjust this value as needed
  };
  const missionFrameStyle = {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px",
    border: "2px solid #007BFF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "40px auto",
    maxWidth: "1300px",
    height: "500px",
    backgroundColor: "#f9f9f9",
    position: "relative",
    overflow: "hidden",
  };
  const signupBoxStyle = {
    margin: "40px auto", // Ensures it appears between the frames
    textAlign: "center",
    padding: "20px",
    border: "2px solid #007BFF",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    maxWidth: "600px",
  };


  const ceoImageStyle = {
    height: "750px", // Height of the frame
    width: "auto", // Maintain aspect ratio
    objectFit: "cover", // Ensure the image covers the area without distortion
    marginLeft: "20px", // Space between image and text
    marginTop: "-50px", // Move the image up, adjust this value as needed
  };

  return (
    <>
     <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/abo.jpg`}
          alt="Top Image"
          style={bannerStyle}
        />
      </div>
    <div style={containerStyle}>
     
      <div style={textContainerStyle}>
        <h1 style={{ color: "#007BFF", fontWeight: "bold" }}>
          Committed to Your Visa Success
        </h1>
        <h1 style={{ color: "#28A745" }}>- AIEC Global -</h1>
      </div>
      <div style={textContainerStyle}>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          AIEC-GLOBAL comes up with up-to-date information in the arena of
          overseas studies with the deepest understanding. We have been
          assisting students not only for educational matters but also for their
          settlement in various nations around the world.
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/about1.jpg`}
        alt="Second Image"
        style={ausImageStyle}
      />
      <div style={counterContainerStyle}>
                <div
                    style={{ ...boxStyle }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = hoverBoxStyle.transform;
                        e.currentTarget.querySelector('.line').style.visibility = hoverLineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = hoverLineStyle.width;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.line').style.visibility = lineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = lineStyle.width;
                    }}
                >
                    <Counter endValue={10000} duration={2000} />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Students</p>
                    <div className="line" style={lineStyle}></div>
                </div>
                <div
                    style={{ ...boxStyle }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = hoverBoxStyle.transform;
                        e.currentTarget.querySelector('.line').style.visibility = hoverLineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = hoverLineStyle.width;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.line').style.visibility = lineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = lineStyle.width;
                    }}
                >
                    <Counter endValue={94} duration={2000} suffix="%" />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Successful Visa Process Rate</p>
                    <div className="line" style={lineStyle}></div>
                </div>
                <div
                    style={{ ...boxStyle }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = hoverBoxStyle.transform;
                        e.currentTarget.querySelector('.line').style.visibility = hoverLineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = hoverLineStyle.width;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.line').style.visibility = lineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = lineStyle.width;
                    }}
                >
                    <Counter endValue={22} duration={2000} suffix="+" />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Pro Consultants</p>
                    <div className="line" style={lineStyle}></div>
                </div>
            </div>
      <div style={missionFrameStyle}>
        <div style={{ width: "60%" }}>
          <h2
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "black" }}
          >
            Guiding Your Path with Our Mission
          </h2>
          <p style={{ fontSize: "1.72rem", lineHeight: "1.6" }}>
            At Asian Education, we offer personalized counseling to help
            students choose suitable vocational and higher education paths right
            from high school. Tailored to individual needs, our services guide
            you towards optimal academic and career opportunities, locally and
            abroad. Visit us for expert guidance in realizing your educational
            potential.
          </p>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/about1.jpg`}
            alt="CEO"
            style={missionImageStyle}
          />
        </div>
      </div>
       {/* Signup Box */}
       <div style={signupBoxStyle}>
        <h2 style={{ fontSize: "2.5rem", color: "#007BFF" }}>
          Haven't Signed Up Yet?
        </h2>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            color: "white",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </div>

      <div style={ceoFrameStyle}>
        <div style={{ width: "60%" }}>
          <h2
            style={{ fontSize: "2.9rem", fontWeight: "bold", color: "#007BFF" }}
          >
            Message From Our CEO
          </h2>
          <p style={{ fontSize: "1.3rem", lineHeight: "1.6" }}>
            Greetings from AIEC-Global! We are thrilled to have you visit our
            website. AIEC-Global, your beacon for studying abroad, is dedicated
            to guiding you towards the right educational destination. Our
            mission is to empower the younger generation for a vibrant future by
            offering top-notch services through our experienced experts in
            overseas studies. We pride ourselves on our strong partnerships with
            renowned educational institutions worldwide. Established over a
            decade ago, we started with a vision to support ambitious students
            in their life-changing journey of studying abroad. Our passion has
            evolved into deep-rooted beliefs, driving us to become one of
            Nepal’s leading and fastest-growing educational consultancies. Our
            success stems from the unity, commitment, and dedication of our
            team. We provide free-of-cost counseling services and offer expert
            training for exams like IELTS, PTE, TOEFL, SAT, and GRE through our
            highly competent trainers. As leaders in the field, we value your
            feedback to continually enhance our services and stay current in
            meeting your needs. Our goal is to provide you with comprehensive
            insights into studying abroad right at your fingertips. We extend
            our gratitude for choosing AIEC-Global and encourage you to visit
            our office to learn more about our offerings. Thank you for placing
            your trust in us!
          </p>
        </div>
        <div style={{ width: "40%" }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ceo.jpeg`}
            alt="CEO"
            style={ceoImageStyle}
          />
        </div>
      </div>

      <FormPage />
      
    </div>
    <Footer style={footerStyle} />
    </>
  );
};

export default AIECGlobal;
