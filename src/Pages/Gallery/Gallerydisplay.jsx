import React, { useEffect, useState } from "react";
import { getGalleryApi } from "../../apis/Api"; // Adjust the API function for fetching galleries
import "./gallery.css"; // Create your custom CSS for this component

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

  const handleViewMore = (galleryId) => {
    setExpandedGallery(galleryId === expandedGallery ? null : galleryId); // Toggle view more
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
                  {/* Display the first (cover) image */}
                  <img
                    src={`http://localhost:5000/gallery/${gallery.galleryImages[0]}`}
                    className="gallery-image"
                    alt="Gallery Cover"
                  />
                </div>
                <div className="gallery-card-body">
                  <h5 className="gallery-title">{gallery.galleryName}</h5>

                  {/* Display View More button if there are more than 1 images */}
                  {gallery.galleryImages.length > 1 && (
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleViewMore(gallery._id)}
                    >
                      {expandedGallery === gallery._id ? "View Less" : "View More"}
                    </button>
                  )}

                  {/* Show additional images in rows of three if the gallery is expanded */}
                  {expandedGallery === gallery._id && (
                    <div className="gallery-more-images mt-3">
                      <div className="row row-cols-1 row-cols-md-3 g-3">
                        {gallery.galleryImages.slice(1).map((image, index) => (
                          <div className="col" key={index}>
                            <img
                              src={`http://localhost:5000/gallery/${image}`}
                              className="gallery-image-full"  /* Updated CSS class */
                              alt={`Gallery Image ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
