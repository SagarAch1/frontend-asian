import React, { useEffect, useState } from "react";
import {
  getOrdersApi,
  getProductsApi,
  getSlidersApi,
  getEventApi,
} from "../../../apis/Api";

import Myorder from "../../Homepage/Myorder"; // Ensure Myorder is imported
import Message from "../../Message/Message";

import Slider from "../../Coupon/Sliderfetch";
import Event from "../../Events/EventList";

const AdminDashboard = () => {
  const [page, setPage] = useState("dashboard");
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [slider, setSlider] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
    fetchSliders();
    fetchEvent();
  }, []);

  const fetchProducts = () => {
    getProductsApi()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const fetchOrders = () => {
    getOrdersApi()
      .then((res) => {
        setOrders(res.data.orders);
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
      case "product":
        return (
          <div>
            <h2>Add Product</h2>
          </div>
        );

      case "message":
        return (
          <div>
            <h2>Message</h2>
            <Message /> {/* Render the Message component */}
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
      case "order":
        return (
          <div>
            <h2>Orders</h2>
            <Myorder orders={orders} />
          </div>
        );
      case "offer":
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
      padding: "40px",
      backgroundColor: "#f7f8fc", // Soft background color for contrast
    },
    sidebar: {
      backgroundColor: "#1f2937", // Dark gray for sidebar
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for a floating effect
      height: "100%",
    },
    sidebarHeader: {
      color: "#fff",
      marginBottom: "25px",
      fontSize: "1.5rem",
      fontWeight: "bold",
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
      padding: "12px 0",
      borderRadius: "6px",
      backgroundColor: "#1f2937",
      color: "#fff",
      border: "none",
      transition: "background 0.3s ease",
      cursor: "pointer",
    },
    buttonActive: {
      backgroundColor: "#00aaff", // Active button color
    },
    mainContent: {
      backgroundColor: "#fff",
      color: "#333",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Smooth shadow for depth
      marginLeft: "15px", // For better separation from the sidebar
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
    },
    activeButton: {
      backgroundColor: "#00aaff", // Bright color for the active page
      color: "#fff",
    },
  };

  return (
    <div className="container-fluid" style={styles.container}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div style={styles.sidebar}>
            <h2 style={styles.sidebarHeader}>Admin Dashboard</h2>
            <ul style={styles.sidebarList}>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${
                    page === "dashboard" ? styles.buttonActive : ""
                  }`}
                  onClick={() => setPage("dashboard")}
                  style={
                    page === "dashboard"
                      ? { ...styles.button, ...styles.activeButton }
                      : styles.button
                  }
                >
                  Dashboard
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${
                    page === "product" ? styles.buttonActive : ""
                  }`}
                  onClick={() => setPage("product")}
                  style={
                    page === "product"
                      ? { ...styles.button, ...styles.activeButton }
                      : styles.button
                  }
                >
                  Product
                </button>
              </li>

              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${
                    page === "slider" ? styles.buttonActive : ""
                  }`}
                  onClick={() => setPage("slider")}
                  style={
                    page === "slider"
                      ? { ...styles.button, ...styles.activeButton }
                      : styles.button
                  }
                >
                  Slider
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${
                    page === "event" ? styles.buttonActive : ""
                  }`}
                  onClick={() => setPage("event")}
                  style={
                    page === "event"
                      ? { ...styles.button, ...styles.activeButton }
                      : styles.button
                  }
                >
                  Event
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${
                    page === "message" ? styles.buttonActive : ""
                  }`}
                  onClick={() => setPage("message")}
                  style={
                    page === "message"
                      ? { ...styles.button, ...styles.activeButton }
                      : styles.button
                  }
                >
                  Message
                </button>
              </li>
              <li style={styles.sidebarItem}>
                <button
                  className={`btn ${
                    page === "order" ? styles.buttonActive : ""
                  }`}
                  onClick={() => setPage("order")}
                  style={
                    page === "order"
                      ? { ...styles.button, ...styles.activeButton }
                      : styles.button
                  }
                >
                  Order
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
