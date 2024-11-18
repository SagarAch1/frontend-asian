import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#01649A",
        color: "#fff",
        paddingTop: "40px",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          className="row text-center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Contact Us */}
          <div className="col-md-3" style={{ marginBottom: "20px", flex: "1" }}>
            <div style={{ padding: "10px" }}>
              <h6 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                Contact Us
              </h6>
              <p>+977-01-5908881 / 5908882</p>
              <p>WhatsApp: +977 9801048957</p>
            </div>
          </div>
          {/* About and Social Media */}
          <div className="col-md-6" style={{ marginBottom: "20px", flex: "2" }}>
            <p style={{ marginBottom: "20px" }}>
              AIEC-GLOBAL offers updated information on overseas studies and
              provides comprehensive support for students' education and
              settlement abroad.
            </p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "15px" }}
            >
              <a
                href="https://www.facebook.com/asian.edu.np"
                style={{ color: "#fff" }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/asian.edu.np/"
                style={{ color: "#fff" }}
              >
                <FaInstagram />
              </a>
              <a href="https://x.com/asianedunp" style={{ color: "#fff" }}>
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/asianedunp1"
                style={{ color: "#fff" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@asian.edu.np1"
                style={{ color: "#fff" }}
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@asian.edu.np"
                style={{ color: "#fff" }}
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          {/* Location */}
          <div className="col-md-3" style={{ marginBottom: "20px", flex: "1" }}>
            <div style={{ padding: "10px" }}>
              <h6 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                Our Location
              </h6>

              <p>ADBL Bank's Building, AL3, Putalisadak-30, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        {/* Additional Information */}
        <div
          className="row text-center mt-4"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {/* Quick Links */}
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <h6 style={{ marginBottom: "15px", fontWeight: "bold" }}>
              Quick Links
            </h6>
            <p>
              <a href="#!" style={{ color: "#fff", textDecoration: "none" }}>
                About Us
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "#fff", textDecoration: "none" }}>
                Blogs
              </a>
            </p>
            <p>
              <a href="#!" style={{ color: "#fff", textDecoration: "none" }}>
                Privacy Policy
              </a>
            </p>
            <p>
              <a
                href="ourteam"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Our Team
              </a>
            </p>
          </div>
          {/* Branches */}
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <h6 style={{ marginBottom: "15px", fontWeight: "bold" }}>
              Branches
            </h6>
            <p>Chitwan, Nepal</p>
            <p>Pokhara, Nepal</p>
            <p>Sydney, Australia</p>
          </div>
          {/* Head Office */}
          <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <h6 style={{ marginBottom: "15px", fontWeight: "bold" }}>
              Head Office
            </h6>
            <p>Putalisadak, Kathmandu</p>
            <p>Phone 1: +977-01-5908881</p>
            <p>Phone 2: +977-01-5908882</p>
            <p>Email: info@asian.edu.np</p>
          </div>
        </div>
        {/* Footer Bottom */}
        <div
          className="text-center mt-3"
          style={{
            borderTop: "1px solid #fff",
            paddingTop: "10px",
            marginTop: "20px",
          }}
        >
          <p>Copyright © 2024 AIEC Global. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
