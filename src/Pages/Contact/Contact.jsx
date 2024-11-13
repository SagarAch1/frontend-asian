import React, { useState } from "react";
import { toast } from "react-toastify";
import { createContactApi } from "../../apis/Api";
import WhyChooseAiec from "../Homepage/WhyChooseAiec";
import Footer from "../Homepage/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const styles = {
    container: {
      backgroundColor: "#f7f8fc",
      padding: "50px",
      paddingTop: "100px",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    title: {
      color: "#5c20d0",
      fontSize: "32px",
    },
    description: {
      color: "#666",
      fontSize: "16px",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      width: "80%",
      maxWidth: "600px",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      border: "1px solid #ddd",
    },
    formGroup: {
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      padding: "15px",
      backgroundColor: "#5c20d0",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    privacyNotice: {
      fontSize: "12px",
      color: "#999",
      textAlign: "center",
      marginTop: "20px",
    },
    footerContainer: {
      marginTop: "50px",
      padding: "20px 0",
      backgroundColor: "#f0f0f5",
      textAlign: "center",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContactApi(formData);
      toast.success("Message sent successfully");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

 
 

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Have Some Question?</h2>
        <p style={styles.description}>
          Thank you for your interest in our services. Please fill out the form
          below or e-mail us at{" "}
          <a href="mailto:info@asian.edu.np">info@asian.edu.np</a> and we
          will get back to you promptly regarding your request.
        </p>
      </div>
      <div style={styles.content}>
        <div style={styles.box}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <textarea
                style={styles.input}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div style={styles.formGroup}>
              <button style={styles.button} type="submit">
                Send Message
              </button>
            </div>
          </form>
          <p style={styles.privacyNotice}>
            Company Name does not sell, share, or trade customer information.
            Your privacy is very important to us.
          </p>
        </div>
      </div>
      <WhyChooseAiec />
      
    </div>
  );
};

export default Contact;
