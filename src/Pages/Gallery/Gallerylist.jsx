import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getGalleryApi } from "../../apis/Api"; // Update this to your actual API function for fetching galleries

const GalleryList = () => {
  const navigate = useNavigate();
  const url=process.env.API_URL || "http://localhost:5000"; // Update this to your actual API URL

  const handleClick = () => {
    navigate("/gallerycreate"); // Redirect to the route for adding a new gallery
  };

  // State for storing fetched galleries
  const [galleries, setGalleries] = useState([]);

  // Call the API to fetch all galleries initially (Page Load)
  useEffect(() => {
    getGalleryApi()
      .then((res) => {
        // Set the fetched galleries to state
        setGalleries(res.data.gallery); // Adjust according to your response structure
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "40px",
            marginLeft: "20px",
            borderRadius: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          New Gallery
        </button>
      </div>

      <table
        className="table mt-2"
        style={{
          marginTop: "20px",
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: "0",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid black", // Set border color of the table
        }}
      >
        <thead
          className="table-primary"
          style={{ backgroundColor: "#343a40", color: "black" }}
        >
          <tr>
            <th style={tableHeaderStyle}>Gallery Name</th>
            <th style={tableHeaderStyle}>Gallery Type</th> {/* Added Gallery Type */}
            <th style={tableHeaderStyle}>Gallery Images</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {galleries.map((gallery) => (
            <tr key={gallery._id}>
              <td>{gallery.galleryName}</td>
              <td>{gallery.galleryType}</td> {/* Display Gallery Type */}
              <td>
                {/* Display gallery images */}
                {gallery.galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={`${url}/gallery/${image}`} // Adjust the URL according to your setup
                    alt={`Gallery image ${index + 1}`}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginRight: "5px",
                      borderRadius: "4px",
                    }}
                  />
                ))}
              </td>
              <td>
                <Link
                  to={`/admin/update-gallery/${gallery._id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Style object for table headers and cells
const tableHeaderStyle = {
  padding: "12px",
  border: "1px solid black", // Set border color of table headers
  textAlign: "left",
};

export default GalleryList;
