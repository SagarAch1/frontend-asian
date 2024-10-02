// Popup.js
import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.popup}>
        <h3>{message}</h3>
        <button onClick={onClose} style={popupStyles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Popup;
