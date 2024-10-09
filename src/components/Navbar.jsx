import React from "react";
import { Dropdown } from "react-bootstrap"; // Import Dropdown from react-bootstrap if using react-bootstrap
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa"; // Import social media icons

const Navbar = () => {
  const navigate = useNavigate();
  const user = (() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  })();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Successfully logged out");
    navigate("/login");
  };

  // Social media URLs
  const socialLinks = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#1376bc", minHeight: "80px" }} // Adjusted background color and height
    >
      <div className="container-fluid d-flex justify-content-end">
        <ul className="navbar-nav flex-row">
          {/* Right Aligned Menu Items */}
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/Homepage"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/aiecworkshop"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              AIEC Learning Center
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/bookclass"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Book Class
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/upcommingnews"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              News and Articles
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/upcommingevents"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Events
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/aiecglobal"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              About us
            </Link>
          </li>

          {/* Social Dropdown */}
          <li className="nav-item mx-3">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="nav-link text-white"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Social
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href={socialLinks.facebook}
                  target="_blank"
                  className="d-flex align-items-center social-item"
                >
                  <FaFacebook className="me-2" /> Facebook
                </Dropdown.Item>
                <Dropdown.Item
                  href={socialLinks.instagram}
                  target="_blank"
                  className="d-flex align-items-center social-item"
                >
                  <FaInstagram className="me-2" /> Instagram
                </Dropdown.Item>
                <Dropdown.Item
                  href={socialLinks.twitter}
                  target="_blank"
                  className="d-flex align-items-center social-item"
                >
                  <FaTwitter className="me-2" /> Twitter
                </Dropdown.Item>
                <Dropdown.Item
                  href={socialLinks.linkedin}
                  target="_blank"
                  className="d-flex align-items-center social-item"
                >
                  <FaLinkedin className="me-2" /> LinkedIn
                </Dropdown.Item>
                <Dropdown.Item
                  href={socialLinks.youtube}
                  target="_blank"
                  className="d-flex align-items-center social-item"
                >
                  <FaYoutube className="me-2" /> YouTube
                </Dropdown.Item>
                <Dropdown.Item
                  href={socialLinks.tiktok}
                  target="_blank"
                  className="d-flex align-items-center social-item"
                >
                  <FaTiktok className="me-2" /> TikTok
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/gallerydisplay"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Gallery
            </Link>
          </li>
        </ul>

        {/* Language Selector and User Options */}
        <div className="d-flex align-items-center">
          {user ? (
            <Dropdown className="mx-3">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <i className="fas fa-user me-2"></i> Welcome, {user.fullName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/contact">
                  Report
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/userorder">
                  My Order
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary mx-3"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
