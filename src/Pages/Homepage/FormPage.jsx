import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { createFormApi } from "../../apis/Api";

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
  alignItems: "flex-start",
  maxWidth: "1200px",
  width: "100%",
};

const formStyle = {
  backgroundColor: "#e0f7fa",
  padding: "60px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  width: "100%",
  height: "auto",
  minHeight: "800px",
  fontSize: "15px",
};

const formContentStyle = {
  flex: 1,
  marginRight: "20px",
};

const imageStyle = {
  width: "500px",
  height: "1170px",
  objectFit: "cover",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "12px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  margin: "12px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

const checkboxStyle = {
  marginRight: "12px",
};

const buttonStyle = {
  backgroundColor: "#ff6600",
  color: "#fff",
  padding: "14px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  width: "100%",
  fontSize: "16px",
};

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    preferredDestination: "",
    studyDate: "",
    office: "",
    counsellingMode: "",
    fundingSource: "",
    studyLevel: "",
    agreeToTerms: false,
    contactBy: false,
    receiveUpdates: false,
  });

  const studyDates = [
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
    "February 2025",
    "March 2025",
    "April 2025",
    "May 2025",
    "June 2025",
    "July 2025",
    "August 2025",
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
    "January 2026",
    "February 2026",
    "March 2026",
    "April 2026",
    "May 2026",
    "June 2026",
    "July 2026",
    "August 2026",
    "September 2026",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      preferredDestination,
      studyDate,
      office,
      counsellingMode,
      fundingSource,
      studyLevel,
      agreeToTerms,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobileNumber ||
      !preferredDestination ||
      !studyDate ||
      !office ||
      !counsellingMode ||
      !fundingSource ||
      !studyLevel ||
      !agreeToTerms
    ) {
      toast.error(
        "Please enter all fields and agree to the terms and privacy policy."
      );
      return;
    }

    try {
      const response = await createFormApi(formData);
      console.log("Form submission response:", response);
      toast.success("Form submitted successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        preferredDestination: "",
        studyDate: "",
        office: "",
        counsellingMode: "",
        fundingSource: "",
        studyLevel: "",
        agreeToTerms: false,
        contactBy: false,
        receiveUpdates: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      if (error.response) {
        toast.error(
          `Failed to submit form: ${
            error.response.data.message || error.message
          }`
        );
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error(`Request setup error: ${error.message}`);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={formContentStyle}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h3>AIEC can help you</h3>
              <p>
                Fill in your details to book a free counseling session with our
                experts, who will guide you to the perfect course, country,
                university, and even scholarships!
              </p>
            </div>

            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              required
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile number*"
              required
              value={formData.mobileNumber}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <select
              name="preferredDestination"
              required
              value={formData.preferredDestination}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="">Your preferred study destination*</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="New Zealand">New Zealand</option>
              <option value="South Korea">South Korea</option>
              <option value="Dubai">Dubai</option>
              <option value="Denmark">Denmark</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Norway">Norway</option>
              <option value="Finland">Finland</option>
              <option value="Malta">Malta</option>
            </select>

            <select
              name="studyDate"
              required
              value={formData.studyDate}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="">When do you plan to study?*</option>
              {studyDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>

            <select
              name="office"
              required
              value={formData.office}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="">Nearest AIEC Office*</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Chitwan">Chitwan</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Sydney">Sydney</option>
            </select>

            <select
              name="counsellingMode"
              required
              value={formData.counsellingMode}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="">Preferred mode of counselling*</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Face-to-Face">Face-to-Face</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Zoom Call">Zoom Call</option>
            </select>

            <select
              name="fundingSource"
              required
              value={formData.fundingSource}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="">How will you fund your studies?*</option>
              <option value="Self-funded">Self-funded</option>
              <option value="Partially funded by family">
                Partially funded by family
              </option>
              <option value="Seeking Scholarships">Seeking Scholarships</option>
              <option value="Bank Loan">Bank Loan</option>
            </select>

            <select
              name="studyLevel"
              required
              value={formData.studyLevel}
              onChange={handleInputChange}
              style={selectStyle}
            >
              <option value="">Your preferred level of study*</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Vocational Education and Training">
                Vocational Education and Training
              </option>
              <option value="Doctorate">Doctorate</option>
              <option value="School">School</option>
              <option value="English Language Course">
                English Language Course
              </option>
            </select>

            <div style={{ marginTop: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  style={checkboxStyle}
                />
                I agree to the Terms & Conditions and Privacy Policy*
              </label>
            </div>

            <div style={{ marginTop: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  name="contactBy"
                  checked={formData.contactBy}
                  onChange={handleInputChange}
                  style={checkboxStyle}
                />
                I would like to receive further communication from AIEC via
                Phone, Email, and SMS
              </label>
            </div>

            <div style={{ marginTop: "20px" }}>
              <label>
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleInputChange}
                  style={checkboxStyle}
                />
                I would like to receive relevant information and updates from
                AIEC via Email
              </label>
            </div>

            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>

        <div style={{ flex: 1 }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/OIP.jpeg`}
            alt="Logo"
            style={imageStyle}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormPage;
