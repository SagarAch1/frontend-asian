import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createNewsApi } from "../../apis/Api";

const Createnews = () => {
  const navigate = useNavigate();

  // Define state for form fields
  const [newsName, setNewsName] = useState("");
  const [newsLink, setNewsLink] = useState(""); // Keep this for the select dropdown
  const [newsDate, setNewsDate] = useState("");
  const [newsImage, setNewsImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Handle file input
  const handleImage = (news) => {
    const file = news.target.files[0];
    setNewsImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("newsName", newsName);
    formData.append("newsLink", newsLink);
    formData.append("newsDate", newsDate);
    formData.append("newsImage", newsImage);

    try {
      const response = await createNewsApi(formData);
      if (response.status === 201) {
        toast.success("News created successfully!");
        window.open(newsLink, "_blank"); // Redirect to the external site
      }
    } catch (error) {
      toast.error("Failed to create news.");
      console.error(error);
    }
  };

  // Styling
  const containerStyle = {
    fontFamily: "'Roboto', sans-serif",
    marginTop: "50px",
  };

  const formContainerStyle = {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    fontWeight: 700,
    color: "#343a40",
    marginBottom: "30px",
    fontSize: "1.8rem",
  };

  const labelStyle = {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#495057",
    display: "block",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ced4da",
    borderRadius: "5px",
    fontSize: "1rem",
    marginBottom: "15px",
  };

  const fileInputStyle = {
    display: "block",
    marginBottom: "15px",
    padding: "10px 0",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Create New News</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newsName" style={labelStyle}>
              News Name
            </label>
            <input
              type="text"
              id="newsName"
              placeholder="Enter news name"
              value={newsName}
              onChange={(e) => setNewsName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label htmlFor="newsLink" style={labelStyle}>
              News Link
            </label>
            <input
              type="text"
              id="newsLink"
              placeholder="Enter news link"
              value={newsLink}
              onChange={(e) => setNewsLink(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="newsDate" style={labelStyle}>
              News Date
            </label>
            <input
              type="date"
              id="newsDate"
              value={newsDate}
              onChange={(e) => setNewsDate(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label htmlFor="newsImage" style={labelStyle}>
              News Image
            </label>
            <input
              type="file"
              id="newsImage"
              accept="image/*"
              onChange={handleImage}
              style={fileInputStyle}
              required
            />
          </div>

          {previewImage && (
            <div>
              <h5 style={{ marginBottom: "10px" }}>Image Preview:</h5>
              <img
                src={previewImage}
                alt="News Preview"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
          )}

          <button type="submit" style={buttonStyle}>
            Create News
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createnews;
