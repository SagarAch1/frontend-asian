import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUserApi } from "../../apis/Api";
import Footer from "../Homepage/Footer";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    let isValid = true;

    setFullNameError("");
    setPhoneError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (fullName.trim() === "") {
      setFullNameError("Full name is required");
      isValid = false;
    }
    if (phone.trim() === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Phone number is invalid");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    }

    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and Confirm password do not match");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      fullName: fullName,
      phone: phone,
      email: email,
      password: password,
    };

    try {
      const res = await registerUserApi(data);
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        navigate("/login"); // Navigate to login page after successful registration
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Register</h2>
          <p style={styles.subheading}>
            Create your account. It's quick and easy.
          </p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={styles.formControl}
                placeholder="Enter your full name"
                required
              />
              {fullNameError && <p style={styles.errorText}>{fullNameError}</p>}
            </div>
            <div style={styles.formGroup}>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.formControl}
                placeholder="Enter your phone number"
                required
              />
              {phoneError && <p style={styles.errorText}>{phoneError}</p>}
            </div>
            <div style={styles.formGroup}>
              <input
                type="email"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.formControl}
                  placeholder="Enter your password"
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
            <div style={styles.formGroup}>
              <div style={styles.passwordContainer}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={styles.formControl}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  style={styles.eyeButton}
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {confirmPasswordError && (
                <p style={styles.errorText}>{confirmPasswordError}</p>
              )}
            </div>
            <button type="submit" style={styles.submitButton}>
              Register
            </button>
          </form>
          <div style={styles.additionalLinksCenter}>
            <span style={styles.additionalText}>Already have an account? </span>
            <Link to="/login" style={styles.link}>
              Login
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
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  additionalLinksCenter: {
    marginTop: "1rem",
    textAlign: "center",
  },
  additionalText: {
    color: "#333",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Register;
