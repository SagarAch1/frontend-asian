import React from "react";
import BelowSliderSection from "../Pages/Homepage/BelowSliderSection";
import { useNavigate } from "react-router-dom";

const BlogNavigate = () => {
  const navigate = useNavigate();

  // Handler for navigation based on selection
  const handleNavigation = (selectedCourse, selectedLevel, selectedDestination) => {
    if (
      selectedCourse === "Landscape design and architecture" &&
      selectedLevel === "Undergraduate" &&
      selectedDestination === "Canada"
    ) {
      // Perform specific navigation or logic
      navigate("/bachelorofdesign"); 
    } else {
      // Perform general navigation or logic
      navigate("/general-search");
    }
  };

  return (
    <div>
      {/* Import and render BelowSliderSection with a callback for handling navigation */}
      <BelowSliderSection onSubmit={handleNavigation} />
    </div>
  );
};

export default BlogNavigate;
