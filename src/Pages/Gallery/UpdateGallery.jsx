import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateGallery = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [galleryData, setGalleryData] = useState({
        galleryName: "",
        galleryType: "",
        galleryImages: [],
    });
    const [selectedImages, setSelectedImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);

    const imageUrl = "https://api.asian.edu.np";
    const url = "https://api.asian.edu.np";
    // const url="http://localhost:5000"

    useEffect(() => {
        axios.get(`${url}/api/gallery/single-gallery/${id}`)
            .then((response) => {
                setGalleryData(response.data.gallery);
            })
            .catch((error) => {
                console.error("Error fetching gallery:", error);
            });
    }, [id]);

    // Handle file selection and generate previews
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);

        // Create image previews
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    const handleDeleteImage = (imageToDelete) => {
        setGalleryData((prev) => ({
            ...prev,
            galleryImages: prev.galleryImages.filter((img) => img !== imageToDelete),
        }));
    };

    const handleDeletePreviewImage = (indexToDelete) => {
        setSelectedImages((prev) => prev.filter((_, index) => index !== indexToDelete));
        setPreviewImages((prev) => prev.filter((_, index) => index !== indexToDelete));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("galleryName", galleryData.galleryName);
        formData.append("galleryType", galleryData.galleryType);
    
        // Append existing images (as names/paths)
        galleryData.galleryImages.forEach((image) => {
            formData.append("existingImages", image); // New key for existing images
        });
    
        // Append new images
        for (let i = 0; i < selectedImages.length; i++) {
            formData.append("galleryImages", selectedImages[i]);
        }
    
        try {
            await axios.put(`${url}/api/gallery/update-gallery/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate("/admin/dashboard");
        } catch (error) {
            console.error("Error updating gallery:", error);
        }
    };
    

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <div style={{ padding: "20px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Update Gallery</h2>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={inputContainerStyle}>
                        <label style={labelStyle}>Gallery Name:</label>
                        <input
                            type="text"
                            value={galleryData.galleryName}
                            onChange={(e) => setGalleryData({ ...galleryData, galleryName: e.target.value })}
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputContainerStyle}>
                        <label style={labelStyle}>Gallery Type:</label>
                        <input
                            type="text"
                            value={galleryData.galleryType}
                            onChange={(e) => setGalleryData({ ...galleryData, galleryType: e.target.value })}
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={inputContainerStyle}>
                        <label style={labelStyle}>Current Images:</label>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                            {galleryData.galleryImages.map((image, index) => (
                                <div key={index} style={imageWrapperStyle}>
                                    <img src={`${imageUrl}/gallery/${image}`} alt={`Gallery image ${index + 1}`} style={imageStyle} />
                                    <button type="button" onClick={() => handleDeleteImage(image)} style={deleteButtonStyle}>
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={inputContainerStyle}>
                        <label style={labelStyle}>Upload New Images:</label>
                        <input type="file" multiple onChange={handleImageChange} style={fileInputStyle} />
                    </div>

                    {/* Preview of new images */}
                    {previewImages.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                            {previewImages.map((src, index) => (
                                <div key={index} style={imageWrapperStyle}>
                                    <img src={src} alt={`Preview ${index}`} style={imageStyle} />
                                    <button type="button" onClick={() => handleDeletePreviewImage(index)} style={deleteButtonStyle}>
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <button type="submit" style={submitButtonStyle}>
                        Update Gallery
                    </button>
                </form>
            </div>
        </div>
    );
};

// Styles
const formStyle = {
    maxWidth: "900px", // Increased width
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
};

const inputContainerStyle = {
    marginBottom: "20px",
};

const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "bold",
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
};

const fileInputStyle = {
    width: "100%",
    padding: "10px",
};

const imageWrapperStyle = {
    position: "relative",
    display: "inline-block",
    width: "100px",
    height: "100px",
};

const imageStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
};

const deleteButtonStyle = {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px",
    cursor: "pointer",
    fontSize: "12px",
};

const submitButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
};

export default UpdateGallery;
