import React from "react";

const StudyAbroadSteps = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh", // Decreased height to bring the content up
    padding: "20px",
    textAlign: "center",
    marginTop: "-50px", // Adjust this value to move content higher
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
  };

  const imageStyle = {
    width: "400px",
    height: "450px",
  };

  const stepsContainerStyle = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const stepItemStyle = {
    padding: "15px 20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const steps = [
    "Why study abroad?",
    "Where and what to study?",
    "How do I apply?",
    "After receiving an offer",
    "Prepare to depart",
    "Arrive and thrive",
  ];

  return (
    <div style={containerStyle}>
      <h2>Your study abroad steps</h2>
      <div style={contentStyle}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/girl.avif`}
            alt="Study Abroad Steps"
            style={imageStyle}
          />
        </div>
        <div style={stepsContainerStyle}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={stepItemStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e6e6e6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f9f9f9")
              }
            >
              <span>{step}</span>
              <span>&#x279C;</span> {/* This represents the arrow */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadSteps;
