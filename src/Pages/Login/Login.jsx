import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is empty or invalid");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter password");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const res = await loginUserApi(data);
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        localStorage.setItem("token", res.data.token);
        const convertedData = JSON.stringify(res.data.user);
        localStorage.setItem("user", convertedData);

        if (res.data.user.isadmin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/homepage");
        }
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || "Login failed. Please try again."
        );
      } else if (error.request) {
        toast.error("No response from the server. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Sign in</h2>
          <p style={styles.subheading}>
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.formGroup}>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.formControl}
                placeholder="Enter your email"
                required
              />
              {emailError && <p style={styles.errorText}>{emailError}</p>}
            </div>
            <div style={styles.formGroup}>
              <div style={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.formControl}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={styles.eyeButton}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {passwordError && <p style={styles.errorText}>{passwordError}</p>}
            </div>
            {/* <div style={styles.additionalLinks}>
              <Link to="/forgot-password" style={styles.link}>
                Forgot password?
              </Link>
            </div> */}
            <button type="submit" style={styles.submitButton}>
              Sign in
            </button>
          </form>
          <div style={styles.additionalLinksCenter}>
            <span style={styles.additionalText}>Don't have an account? </span>
            <Link to="/register" style={styles.link}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#dce1f9",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "Arial, sans-serif",
    justifyContent: "space-between",
    paddingTop: "100px",
  },
  formWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
  formContainer: {
    backgroundColor: "#f6941c",
    backgroundImage: "url('your-image-url.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  subheading: {
    color: "#777",
    fontSize: "1rem",
    marginBottom: "1.5rem",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  formControl: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  eyeButton: {
    position: "absolute",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.25rem",
  },
  errorText: {
    marginTop: "0.25rem",
    fontSize: "0.875rem",
    color: "red",
  },
  submitButton: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1.125rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  additionalLinks: {
    marginTop: "1rem",
    textAlign: "right",
  },
  additionalLinksCenter: {
    marginTop: "1rem",
    textAlign: "center",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  additionalText: {
    fontSize: "0.875rem",
  },
};

export default Login;
