import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#01649A",
    color: "#fff",
    paddingTop: "40px",
    paddingBottom: "20px",
    fontFamily: "'Roboto', sans-serif",
  };

  const sectionStyle = {
    flex: "1",
    marginBottom: "20px",
    padding: "10px",
  };

  const linkListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "21px",
    lineHeight: "1.8",
    display: "block",
    fontWeight: "bold",
  };

  const titleStyle = {
    marginBottom: "15px",
    fontWeight: "bold",
    fontSize: "22px",
  };

  const contactStyle = {
    fontSize: "21px",
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        {/* Footer Links Section */}
        <div
          className="footer-links"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {/* Quick Links */}
          <div style={{ ...sectionStyle, flex: "1", textAlign: "left" }}>
            <h6 style={titleStyle}>Quick Links</h6>
            <ul style={linkListStyle}>
              <li>
                <Link to="/aiecglobal" style={linkStyle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/bloglist" style={linkStyle}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="#!" style={linkStyle}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div style={{ ...sectionStyle, flex: "1", textAlign: "left" }}>
            <h6 style={titleStyle}>Branches</h6>
            <ul style={linkListStyle}>
              <li>
                <Link to="/chitwanoffice" style={linkStyle}>
                  Chitwan, Nepal
                </Link>
              </li>
              <li>
                <Link to="/pokharaoffice" style={linkStyle}>
                  Pokhara, Nepal
                </Link>
              </li>
              <li>
                <Link to="/sydneyoffice" style={linkStyle}>
                  Sydney, Australia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div style={{ ...sectionStyle, flex: "1", textAlign: "left" }}>
            <h6 style={titleStyle}>Contact Us</h6>
            <p style={contactStyle}>+977-01-5908881 / 5908882</p>
            <p style={contactStyle}>WhatsApp: +977 9801048957</p>
          </div>

          {/* Our Location */}
          <div style={{ ...sectionStyle, flex: "1", textAlign: "left" }}>
            <h6 style={titleStyle}>Head Office</h6>
            <p style={contactStyle}>
              ADBL Bank's Building, AL3, Putalisadak-30, Kathmandu, Nepal
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div
          className="footer-social"
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <p style={{ marginBottom: "20px", fontSize: "14px" }}>
            AIEC-GLOBAL offers updated information on overseas studies and
            comprehensive support for students' education and settlement abroad.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <a
              href="https://www.facebook.com/asian.edu.np"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/asian.edu.np/"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/asianedunp"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/asianedunp1"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@asian.edu.np1"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@asian.edu.np"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid #fff",
            marginTop: "20px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            Copyright © 2024 AIEC Global. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
