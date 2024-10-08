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
      style={{ backgroundColor: "#01649A", color: "#fff", paddingTop: "40px" }}
    >
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3">
            <div style={{ padding: "20px" }}>
              <h6>Contact Us</h6>
              <p>+977-01-5908881 / 5908882</p>
              <p>WhatsApp: +977 9801048957</p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://asian.edu.np/wp-content/uploads/elementor/thumbs/new-logo-footer-qnlq1cjtwddgp0mduco1alft6pg7aqz42y3lcne8bk.png"
              alt="Logo"
              style={{ width: "200px", marginBottom: "20px" }}
            />
            <p>
              AIEC-GLOBAL offers updated information on overseas studies and
              provides comprehensive support for students' education and
              settlement abroad.
            </p>
            <div>
              <a
                href="https://www.facebook.com/asian.edu.np"
                style={{ color: "#fff", marginRight: "10px" }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/asian.edu.np/"
                style={{ color: "#fff", marginRight: "10px" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/asianedunp"
                style={{ color: "#fff", marginRight: "10px" }}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/asianedunp1"
                style={{ color: "#fff", marginRight: "10px" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@asian.edu.np1"
                style={{ color: "#fff", marginRight: "10px" }}
              >
                <FaYoutube />
              </a>
              <a href="https://www.tiktok.com/@asian.edu.np" style={{ color: "#fff" }}>
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div style={{ padding: "20px" }}>
              <h6>Our Location</h6>
              <p>Putalisadak, Kathmandu</p>
              <p>ADBL Bank's Building, AL3, Putalisadak-30, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-3">
            <h6>Quick Links</h6>
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
              <a href="#!" style={{ color: "#fff", textDecoration: "none" }}>
                Our Team
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <h6>Branches</h6>
            <p>Chitwan, Nepal</p>
            <p>Pokhara, Nepal</p>
            <p>Sydney, Australia</p>
          </div>
          <div className="col-md-3">
            <h6>Head Office</h6>
            <p>Putalisadak, Kathmandu</p>
            <p>Phone 1: +977-01-5908881</p>
            <p>Phone 2: +977-01-5908882</p>
            <p>Email: info@asian.edu.np</p>
          </div>
        </div>
        <div
          className="text-center mt-3"
          style={{ borderTop: "1px solid #fff", paddingTop: "10px" }}
        >
          <p>Copyright © 2024 AIEC Global. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
