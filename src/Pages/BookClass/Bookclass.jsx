import React, { useState } from "react";
import { toast } from "react-toastify";
import { createBookApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";
import WhyChooseAiec from "../Homepage/WhyChooseAiec";
import Youshouldknow from "../Homepage/YouShouldknow";

const Bookclass = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    languageclass: "",
    time: "",
    payment: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

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
      backgroundColor: "rgba(0, 0, 0, 0.7)",
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
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "none",
      border: "none",
      color: "red",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    paymentImage: {
      width: "100%",
      maxWidth: "300px",
      marginBottom: "20px",
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
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    // Check if the user selects "Online Payment" and trigger the pop-up
    if (name === "payment" && value === "Online Payment") {
      setShowPaymentPopup(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBookApi(formData);
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        languageclass: "",
        time: "",
        payment: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to book class");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowPaymentPopup(false);
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
            <input
              style={styles.input}
              type="text"
              name="phone"
              placeholder="Enter your number"
              value={formData.phone}
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
              <option value="IELTS (Rs 3000)">IELTS (Rs 7500)</option>
              <option value="PTE (Rs 4000)">PTE (Rs 7500)</option>
            </select>
            <select
              style={styles.select}
              name="payment"
              value={formData.payment}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Payment
              </option>
              <option value="Will Pay In Office">Will Pay In Office</option>
              <option value="Online Payment">Online Payment</option>
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
              <option value="7:00 AM - 8:00 AM">7:00 AM - 8:00 AM</option>
              <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
              <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
              <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
              <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
             
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

        {/* Payment Pop-up */}
        {showPaymentPopup && (
          <div style={styles.popupOverlay}>
            <div style={styles.popup}>
              <button style={styles.closeButton} onClick={handleClosePopup}>
                ×
              </button>
              <img
                style={styles.paymentImage}
                src={`${process.env.PUBLIC_URL}/assets/images/qrfinal.jpg`}
                alt="Payment Option"
              />
              <h3>Complete Your Payment</h3>
              <button style={styles.popupButton} onClick={handleClosePopup}>
                Done
              </button>
            </div>
          </div>
        )}

        {/* Success Pop-up */}
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
