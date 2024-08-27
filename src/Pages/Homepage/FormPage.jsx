import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: "40px 0",
  minHeight: "100vh",
};

const formWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start", // Align items to the start to handle increased form length
  maxWidth: "1200px",
  width: "100%",
};

const formStyle = {
  backgroundColor: "#e0f7fa", // Set background color for the form
  padding: "60px", // Padding for form content
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px", // Increased width for the form
  width: "100%", // Ensure the form takes up the full width of its container
  height: "auto", // Height is automatically adjusted based on content
  minHeight: "800px", // Minimum height to ensure enough length above the footer
  fontSize: "15px",
};

const formContentStyle = {
  flex: 1,
  marginRight: "20px",
};

const imageStyle = {
  width: "500px",
  height: "1141px",
  objectFit: "cover",
  marginLeft: "20px", // Add a gap between the form and image
};

const inputStyle = {
  width: "100%",
  padding: "12px", // Slightly increased padding
  margin: "12px 0", // Slightly increased margin
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const selectStyle = {
  width: "100%",
  padding: "12px", // Slightly increased padding
  margin: "12px 0", // Slightly increased margin
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const checkboxStyle = {
  marginRight: "12px", // Slightly increased margin
};

const buttonStyle = {
  backgroundColor: "#ff6600",
  color: "#fff",
  padding: "14px", // Slightly increased padding
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
  fontSize: "16px",
};

const FormPage = () => {
  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <form style={formStyle}>
          <div style={formContentStyle}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h3>AIEC can help you</h3>
              <p>
                Enter your details and get a free counselling session with our
                experts so they can connect you to the right course, country,
                university – and even scholarships!
              </p>
            </div>

            <input
              type="text"
              placeholder="First name*"
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Last name*"
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email address*"
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Mobile number*"
              required
              style={inputStyle}
            />

            <select required style={selectStyle}>
              <option value="">Your preferred study destination*</option>
              <option value="abc">ABC</option>
              <option value="cde">CDE</option>
              <option value="fgh">FGH</option>
            </select>

            <select required style={selectStyle}>
              <option value="">When do you plan to study?*</option>
              <option value="abc">ABC</option>
              <option value="cde">CDE</option>
              <option value="fgh">FGH</option>
            </select>

            <select required style={selectStyle}>
              <option value="">Nearest AIEC Office*</option>
              <option value="abc">ABC</option>
              <option value="cde">CDE</option>
              <option value="fgh">FGH</option>
            </select>

            <select required style={selectStyle}>
              <option value="">Preferred mode of counselling*</option>
              <option value="abc">ABC</option>
              <option value="cde">CDE</option>
              <option value="fgh">FGH</option>
            </select>

            <select required style={selectStyle}>
              <option value="">How would you fund your education?*</option>
              <option value="abc">ABC</option>
              <option value="cde">CDE</option>
              <option value="fgh">FGH</option>
            </select>

            <select required style={selectStyle}>
              <option value="">Preferred study level*</option>
              <option value="abc">ABC</option>
              <option value="cde">CDE</option>
              <option value="fgh">FGH</option>
            </select>

            <div style={{ marginTop: "30px" }}>
              <input type="checkbox" required style={checkboxStyle} />
              <label>
                I agree to AIEC <a href="#">Terms and privacy policy</a>
              </label>
            </div>

            <div style={{ marginTop: "15px" }}>
              <input type="checkbox" style={checkboxStyle} />
              <label>
                Please contact me by phone, email, or SMS to assist with my
                enquiry
              </label>
            </div>

            <div style={{ marginTop: "15px" }}>
              <input type="checkbox" style={checkboxStyle} />
              <label>
                I would like to receive updates and offers from AIEC
              </label>
            </div>

            <button type="submit" style={buttonStyle}>
              Enquire now
            </button>
          </div>
        </form>

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/girl.avif`}
          alt="Logo"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default FormPage;
