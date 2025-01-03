import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getSlidersApi } from "../../apis/Api";

const Slider = () => {
  const navigate = useNavigate();
  const url = process.env.API_URL || "https://api.asian.edu.np";

  const handleClick = () => {
    navigate("/slider"); // Redirect to the route for adding a new slider
  };

  // State for storing fetched sliders
  const [sliders, setSliders] = useState([]);

  // Fetch all sliders initially (Page Load)
  useEffect(() => {
    getSlidersApi()
      .then((res) => {
        // Set the fetched sliders to state
        setSliders(res.data.sliders);
      })
      .catch((error) => {
        console.error("Error fetching sliders:", error);
        toast.error("Failed to load sliders");
      });
  }, []);

  // Function to delete a slider
  const deleteSlider = async (sliderId) => {
    try {
      await axios.delete(`${url}/api/slider/delete-slider/${sliderId}`);
      toast.success("Slider deleted successfully");
      // Refresh the slider list after deletion
      setSliders(sliders.filter((slider) => slider._id !== sliderId));
    } catch (error) {
      console.error("Error deleting slider:", error);
      toast.error("Failed to delete slider");
    }
  };

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
          New Slider
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
            <th style={tableHeaderStyle}>Slider Name</th>
            <th style={tableHeaderStyle}>Slider Type</th>
            <th style={tableHeaderStyle}>Slider Image</th>
            <th style={tableHeaderStyle}>Slider Actions</th>
          </tr>
        </thead>
        <tbody>
          {sliders.map((slider) => (
            <tr key={slider._id}>
              <td>{slider.sliderName}</td>
              <td>{slider.sliderType}</td>
              <td>
                <img
                  src={`${url}/slider/${slider.sliderImage}`}
                  alt="Slider"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <button
                  onClick={() => deleteSlider(slider._id)}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </button>
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

export default Slider;
