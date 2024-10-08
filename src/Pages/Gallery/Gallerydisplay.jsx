import React, { useEffect, useState } from "react";
import { getGalleryApi } from "../../apis/Api";
import "./gallery.css";

const GalleryDisplay = () => {
  const [galleries, setGalleries] = useState([]);
  const [expandedGallery, setExpandedGallery] = useState(null); // To track which gallery is expanded

  useEffect(() => {
    getGalleryApi()
      .then((res) => {
        setGalleries(res.data.gallery || []); // Fetch the galleries
      })
      .catch((error) => {
        console.error("Failed to fetch galleries:", error);
      });
  }, []);

  const handleImageClick = (galleryId) => {
    setExpandedGallery(galleryId === expandedGallery ? null : galleryId); // Toggle full screen mode
  };

  const closeFullScreen = () => {
    setExpandedGallery(null); // Close the full screen mode
  };

  return (
    <div className="gallery-container mt-5 pt-5 p-3 bg-light text-center">
      <h2>Gallery</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {galleries.length > 0 ? (
          galleries.map((gallery) => (
            <div className="col" key={gallery._id}>
              <div className="gallery-card">
                <div className="gallery-card-header">
                  <img
                    src={`http://localhost:5000/gallery/${gallery.galleryImages[0]}`}
                    className="gallery-image"
                    alt="Gallery Cover"
                    onClick={() => handleImageClick(gallery._id)} // Now clicking the image expands it
                  />
                </div>
                <div className="gallery-card-body">
                  <h5 className="gallery-title">{gallery.galleryName}</h5>
                </div>
              </div>

              {/* Full screen mode for the clicked gallery */}
              {expandedGallery === gallery._id && (
                <div className="full-screen-overlay" onClick={closeFullScreen}>
                  <div className="full-screen-gallery">
                    {gallery.galleryImages.map((image, index) => (
                      <img
                        key={index}
                        src={`http://localhost:5000/gallery/${image}`}
                        className="gallery-fullscreen-image"
                        alt={`Gallery Image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No galleries available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default GalleryDisplay;
