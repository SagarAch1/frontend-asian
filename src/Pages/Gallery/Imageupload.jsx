import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { createGalleryApi } from "../../apis/Api";

const Gallerycreate = () => {
  const navigate = useNavigate();

  const [galleryName, setGalleryName] = useState("");
  const [galleryType, setGalleryType] = useState("");
  const [galleryImage, setGalleryImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setGalleryImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("galleryName", galleryName);
    formData.append("galleryType", galleryType);
    formData.append("galleryImage", galleryImage);

    createGalleryApi(formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
          navigate("/admin/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 500) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to add gallery");
        }
      });
  };

  const containerStyle = { fontFamily: "'Roboto', sans-serif" };
  const headingStyle = {
    fontWeight: 700,
    marginBottom: "20px",
    textAlign: "center",
  };
  const labelStyle = {
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#333",
    display: "block",
    marginBottom: "5px",
  };
  const formControlStyle = { fontSize: "1rem", marginBottom: "15px" };
  const buttonStyle = { fontWeight: 700 };
  const textCenterStyle = { textAlign: "center" };
  const imgStyle = { height: "250px", objectFit: "cover", width: "100%" };

  return (
    <div className="container mt-5" style={containerStyle}>
      <h2 style={headingStyle}>Add Gallery</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleAdd}>
            <div className="mb-3">
              <label htmlFor="galleryName" style={labelStyle}>
                Gallery Name
              </label>
              <input
                value={galleryName}
                onChange={(e) => setGalleryName(e.target.value)}
                className="form-control"
                type="text"
                id="galleryName"
                placeholder="Enter your gallery name"
                style={formControlStyle}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="galleryType" style={labelStyle}>
                Gallery Type
              </label>
              <select
                value={galleryType}
                onChange={(e) => setGalleryType(e.target.value)}
                className="form-select"
                id="galleryType"
                style={formControlStyle}
              >
                <option value="">Select a gallery</option>
                <option value="Our Sucess"> Our Sucess </option>
                <option value="Events"> Events </option>
              
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="galleryImage" style={labelStyle}>
                Choose Gallery Image
              </label>
              <input
                onChange={handleImage}
                type="file"
                className="form-control"
                id="galleryImage"
                style={formControlStyle}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={buttonStyle}
            >
              Add Gallery
            </button>
          </form>
        </div>
        <div className="col-md-6" style={textCenterStyle}>
          {previewImage && (
            <>
              <h5
                style={{
                  ...labelStyle,
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Gallery Image Preview
              </h5>
              <img
                src={previewImage}
                alt="Gallery"
                className="img-fluid rounded"
                style={imgStyle}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallerycreate;

