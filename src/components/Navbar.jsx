import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown } from 'react-bootstrap';  // Import Dropdown from react-bootstrap if using react-bootstrap

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
              to="/bookclass"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Book Class
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              News and articles
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/events"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Events
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="aiecglobal"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              About us
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              className="nav-link text-white"
              to="/social"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Social
            </Link>
          </li>
        </ul>

        {/* Language Selector and User Options */}
        <div className="d-flex align-items-center">
          {/* Language Selector */}
          <div
            className="mx-3 text-white"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            <i className="fas fa-globe"></i> English
          </div>

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
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/contact">Report</Dropdown.Item>
                <Dropdown.Item as={Link} to="/userorder">My Order</Dropdown.Item>
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
