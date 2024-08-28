import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
              to="/find-us"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Find us
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
            <div className="dropdown mx-3">
              <button
                className="btn btn-secondary dropdown-toggle d-flex align-items-center"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                <i className="fas fa-user me-2"></i> Welcome, {user.firstName}!
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">
                    Report
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/userorder">
                    My Order
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-primary mx-3"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
