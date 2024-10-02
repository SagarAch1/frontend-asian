import React, { useEffect, useState } from "react";
import { getEventApi, getSlidersApi } from "../../../apis/Api";

import Book from "../../BookClass/Book";
import Slider from "../../Coupon/Sliderfetch";
import Event from "../../Events/EventList";
import Message from "../../Message/Message";
import Form from "../../Homepage/Form";

const AdminDashboard = () => {
  const [page, setPage] = useState("dashboard");

  const [slider, setSlider] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchSliders();
    fetchEvent();
  }, []);

  const fetchSliders = () => {
    getSlidersApi()
      .then((res) => {
        setSlider(res.data.coupons);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchEvent = () => {
    getEventApi()
      .then((res) => {
        setEvent(res.data.coupons);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderPageContent = () => {
    switch (page) {
      case "dashboard":
        return (
          <div>
            <h2>Welcome Home Admin</h2>
          </div>
        );
      case "book":
        return (
          <div>
            <h2>Book</h2>
            <Book />
          </div>
        );
      case "message":
        return (
          <div>
            <h2>Message</h2>
            <Message />
          </div>
        );
      case "slider":
        return (
          <div>
            <h2>Slider</h2>
            <Slider />
          </div>
        );
      case "event":
        return (
          <div>
            <h2>Event</h2>
            <Event />
          </div>
        );
        case "form":
        return (
          <div>
            <h2>Form</h2>
            <Form />
          </div>
        );

      default:
        return (
          <div>
            <h2>Welcome to Admin Dashboard</h2>
          </div>
        );
    }
  };

  const styles = {
    container: {
      paddingTop: "100px", // Adjust this value to match or slightly exceed the height of your navbar
      backgroundColor: "#007BFF", // Solid blue background
      minHeight: "100vh",
      color: "#fff",
      marginTop: 80, // Remove any margin around the container
      padding: 0, // Remove any padding inside the container
      width: "100%", // Ensure the container takes the full width of the page
      boxSizing: "border-box", // Make sure padding is included in the width calculation
    },
    sidebar: {
      backgroundColor: "green",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
    sidebarHeader: {
      color: "#fff",
      marginBottom: "25px",
      fontWeight: "bold",
      fontSize: "24px",
    },
    sidebarList: {
      listStyle: "none",
      padding: "0",
    },
    sidebarItem: {
      marginBottom: "15px",
    },
    button: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      background: "#00B4DB", // Add a more modern button color
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      boxShadow: "0 4px 12px rgba(0, 180, 219, 0.4)",
      transition: "background 0.3s ease, box-shadow 0.3s ease",
    },
    buttonActive: {
      background: "#0083B0",
      boxShadow: "0 8px 16px rgba(0, 131, 176, 0.5)",
    },
    mainContent: {
      backgroundColor: "#F9FAFB",
      color: "#333",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="container-fluid" style={styles.container}>
      {" "}
      {/* Changed from 'container' to 'container-fluid' */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div style={styles.sidebar}>
            <h2 style={styles.sidebarHeader}>Admin Dashboard</h2>
            <ul style={styles.sidebarList}>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${page === "dashboard" ? "active" : ""}`}
                  onClick={() => setPage("dashboard")}
                  style={
                    page === "dashboard"
                      ? { ...styles.button, ...styles.buttonActive }
                      : styles.button
                  }
                >
                  Dashboard
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${page === "form" ? "active" : ""}`}
                  onClick={() => setPage("form")}
                  style={
                    page === "form"
                      ? { ...styles.button, ...styles.buttonActive }
                      : styles.button
                  }
                >
                  Form
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${page === "book" ? "active" : ""}`}
                  onClick={() => setPage("book")}
                  style={
                    page === "book"
                      ? { ...styles.button, ...styles.buttonActive }
                      : styles.button
                  }
                >
                  Book
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${page === "slider" ? "active" : ""}`}
                  onClick={() => setPage("slider")}
                  style={
                    page === "slider"
                      ? { ...styles.button, ...styles.buttonActive }
                      : styles.button
                  }
                >
                  Slider
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${page === "event" ? "active" : ""}`}
                  onClick={() => setPage("event")}
                  style={
                    page === "event"
                      ? { ...styles.button, ...styles.buttonActive }
                      : styles.button
                  }
                >
                  Event
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${page === "message" ? "active" : ""}`}
                  onClick={() => setPage("message")}
                  style={
                    page === "message"
                      ? { ...styles.button, ...styles.buttonActive }
                      : styles.button
                  }
                >
                  Message
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div style={styles.mainContent}>{renderPageContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
