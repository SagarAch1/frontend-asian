import React, { useState } from "react";
import { toast } from "react-toastify";
import { createBookApi } from "../../apis/Api"; 
import WhyChooseAiec from "../Homepage/WhyChooseAiec";
import Footer from "../Homepage/Footer";
import Youshouldknow from "../Homepage/YouShouldknow";

const Bookclass = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    languageclass: "",
    time: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility

  const styles = {
    outerBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/aus.jpeg)`,
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat", 
      padding: "50px",
      borderRadius: "15px",
      minHeight: "10vh", 
      marginTop: "80px", 
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark semi-transparent background
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "bold",
      color: "#fff", 
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%", 
      maxWidth: "400px", 
      backgroundColor: "rgba(255, 255, 255, 0.9)", 
      padding: "20px",
      borderRadius: "10px",
    },
    input: {
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    select: {
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      color: "#333",
    },
    textarea: {
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      height: "80px",
      resize: "none",
    },
    button: {
      padding: "12px",
      borderRadius: "5px",
      border: "none",
      backgroundImage: "linear-gradient(to right, #ff00ff, #00ffff)",
      color: "white",
      fontSize: "1rem",
      cursor: "pointer",
      fontWeight: "bold",
    },
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
    },
    popup: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    popupButton: {
      marginTop: "20px",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "1rem",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBookApi(formData);
      setShowPopup(true); // Show pop-up on successful booking
      setFormData({
        name: "",
        email: "",
        languageclass: "",
        time: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to book class");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <>
      <div style={styles.outerBox}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Welcome To AIEC</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <select
              style={styles.select}
              name="languageclass"
              value={formData.languageclass}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Language Class
              </option>
              <option value="IELTS (Rs 3000)">IELTS (Rs 3000)</option>
              <option value="PTE (Rs 4000)">PTE (Rs 4000)</option>
            </select>
            <select
              style={styles.select}
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Class Time
              </option>
              <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
            </select>
            <textarea
              style={styles.textarea}
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              style={{ ...styles.button, marginTop: "20px" }}
              type="submit"
            >
              Submit →
            </button>
          </form>
        </div>

        {/* Pop-up */}
        {showPopup && (
          <div style={styles.popupOverlay}>
            <div style={styles.popup}>
              <h3>Booking Successful</h3>
              <p>Your class has been booked successfully!</p>
              <button style={styles.popupButton} onClick={handleClosePopup}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
      <WhyChooseAiec />
      <Youshouldknow />
      <Footer />
    </>
  );
};

export default Bookclass;
