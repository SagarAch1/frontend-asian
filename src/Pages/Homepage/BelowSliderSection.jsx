import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Define styles used in BelowSliderSection
const dropdownStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  margin: "0 5px",
};

const searchButtonStyle = {
  backgroundColor: "#ff6600",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const belowSliderSectionStyle = {
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  width: "fit-content",
  margin: "0 auto",
  marginTop: "-50px",
  border: "2px solid black",
};

const flexContainerStyle = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  alignItems: "center",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "200px",
  marginRight: "5px",
};

const dropdownContainerStyle = {
  position: "relative",
};

const dropdownListStyle = {
  position: "absolute",
  top: "40px",
  left: 0,
  width: "100%",
  maxHeight: "150px",
  overflowY: "auto",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  zIndex: 1,
};

const optionStyle = {
  padding: "10px",
  cursor: "pointer",
};

const orTextStyle = {
  margin: "0 10px",
};

const BelowSliderSection = ({ activeSection }) => {
  const [courseSubjectInput, setCourseSubjectInput] = useState("");
  const [filteredCourseSubjects, setFilteredCourseSubjects] = useState([
   "Business and Management",
        "Science and Technology",
        "Engineering",
        "Life Science",
        "Medical and Healthcare",
        "Arts",
        "Law",
  ]);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const [studyLevelInput, setStudyLevelInput] = useState("");
  const [filteredStudyLevels, setFilteredStudyLevels] = useState([
    
    "Diploma",
    "Advanced Diploma",
    "Bachelor",
    "Graduate Certificate",
    "Graduate Diploma",
    "Master",
    "Doctorate",
    "Doctor of Business Administration",
    "Research Degree",
  ]);
  
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);

  const [destinationInput, setDestinationInput] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "New Zeland",
  ]);
  const [isDestinationDropdownOpen, setIsDestinationDropdownOpen] = useState(false);

  const courseDropdownRef = useRef(null);
  const levelDropdownRef = useRef(null);
  const destinationDropdownRef = useRef(null);
  const dropdownRefs = [courseDropdownRef, levelDropdownRef, destinationDropdownRef];

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.every(ref => !ref.current || !ref.current.contains(event.target))) {
        setIsCourseDropdownOpen(false);
        setIsLevelDropdownOpen(false);
        setIsDestinationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (activeSection !== "courses") {
      setCourseSubjectInput("");
      setStudyLevelInput("");
      setIsCourseDropdownOpen(false);
      setIsLevelDropdownOpen(false);
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection !== "scholarships") {
      setStudyLevelInput("");
      setDestinationInput("");
      setIsLevelDropdownOpen(false);
      setIsDestinationDropdownOpen(false);
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection !== "universities") {
      setDestinationInput("");
      setIsDestinationDropdownOpen(false);
    }
  }, [activeSection]);

  const handleCourseSubjectChange = (event) => {
    const value = event.target.value;
    setCourseSubjectInput(value);
    setFilteredCourseSubjects(
      [
        "Business and Management",
        "Science and Technology",
        "Engineering",
        "Life Science",
        "Medical and Healthcare",
        "Arts",
        "Law",
      ].filter((subject) =>
        subject.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsCourseDropdownOpen(true);
  };

  const handleStudyLevelChange = (event) => {
    const value = event.target.value;
    setStudyLevelInput(value);
    setFilteredStudyLevels(
      [
      "Diploma",
    "Advanced Diploma",
    "Bachelor",
    "Graduate Certificate",
    "Graduate Diploma",
    "Master",
    "Doctorate",
    "Doctor of Business Administration",
    "Research Degree",
      ].filter((level) =>
        level.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsLevelDropdownOpen(true);
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestinationInput(value);
    setFilteredDestinations(
      [
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "New Zeland",
      ].filter((destination) =>
        destination.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsDestinationDropdownOpen(true);
  };

  const handleOptionClick = (setter, value, setDropdownOpen) => {
    setter(value);
    setDropdownOpen(false);
  };

  const handleSearchClick = () => {
    if (activeSection === "courses") {
      if (courseSubjectInput && studyLevelInput && destinationInput) {
        let destinationRoute = null;
  
        // Determine the route based on the destination input
        if (destinationInput.toLowerCase() === "australia") {
          destinationRoute = "/courseaustralia";
        } else if (destinationInput.toLowerCase() === "united states") {
          destinationRoute = "/courseusa";
        } else if (destinationInput.toLowerCase() === "new zealand" || destinationInput.toLowerCase() === "new zeland") {
          destinationRoute = "/coursenewzeland";
        } else if (destinationInput.toLowerCase() === "canada") {
          destinationRoute = "/coursecanada";
        }
        
        // Navigate to the route if a valid one is found
        if (destinationRoute) {
          console.log("Navigating to", destinationRoute);
          navigate(destinationRoute, {
            state: { course: courseSubjectInput, level: studyLevelInput, destination: destinationInput },
          });
        } else {
          console.log("No matching course destination found");
        }
      }
    } else if (activeSection === "scholarships") {
      if (destinationInput) {
        let scholarshipRoute = null;
  
        // Determine the route for scholarships based on the destination input
        if (destinationInput.toLowerCase() === "australia") {
          scholarshipRoute = "/scholarshipsinaustralia";
        } else if (destinationInput.toLowerCase() === "united states") {
          scholarshipRoute = "/scholarshipsinusa";
        } else if (destinationInput.toLowerCase() === "new zealand" || destinationInput.toLowerCase() === "new zeland") {
          scholarshipRoute = "/scholarshipsinnewzeland";
        } else if (destinationInput.toLowerCase() === "canada") {
          scholarshipRoute = "/scholarshipsincanada";
        }else if (destinationInput.toLowerCase() === "united kingdom") {
          scholarshipRoute = "/scholarshipsinuk";
        }
  
        // Navigate to the scholarship route if a valid one is found
        if (scholarshipRoute) {
          console.log("Navigating to", scholarshipRoute);
          navigate(scholarshipRoute, {
            state: { destination: destinationInput },
          });
        } else {
          console.log("No matching scholarship destination found");
        }
      } else {
        console.log("No destination selected for scholarships");
      }
    } else if (activeSection === "universities") {
      if (destinationInput) {
        let scholarshipRoute = null;
  
        // Determine the route for scholarships based on the destination input
        if (destinationInput.toLowerCase() === "australia") {
          scholarshipRoute = "/australiauniversities";
        } else if (destinationInput.toLowerCase() === "united states") {
          scholarshipRoute = "/usauniversities";
        } else if (destinationInput.toLowerCase() === "new zealand" || destinationInput.toLowerCase() === "new zeland") {
          scholarshipRoute = "/newzelanduniversities";
        } else if (destinationInput.toLowerCase() === "canada") {
          scholarshipRoute = "/canadauniversities";
        } else if (destinationInput.toLowerCase() === "united kingdom") {
          scholarshipRoute = "/ukuniversities";
        } 
  
        // Navigate to the scholarship route if a valid one is found
        if (scholarshipRoute) {
          console.log("Navigating to", scholarshipRoute);
          navigate(scholarshipRoute, {
            state: { destination: destinationInput },
          });
        } else {
          console.log("No matching scholarship destination found");
        }
      } else {
        console.log("No destination selected for scholarships");
      }
    }
  };
  
  
  
  
  

  return (
    <div style={belowSliderSectionStyle}>
      <div style={flexContainerStyle}>
        {activeSection === "courses" && (
          <>
            <div style={dropdownContainerStyle} ref={courseDropdownRef}>
              <input
                type="text"
                value={courseSubjectInput}
                onChange={handleCourseSubjectChange}
                onFocus={() => setIsCourseDropdownOpen(true)}
                placeholder="Course Subject"
                style={inputStyle}
              />
              {isCourseDropdownOpen && (
                <div style={dropdownListStyle}>
                  {filteredCourseSubjects.map((subject, index) => (
                    <div
                      key={index}
                      style={optionStyle}
                      onClick={() =>
                        handleOptionClick(
                          setCourseSubjectInput,
                          subject,
                          setIsCourseDropdownOpen
                        )
                      }
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={dropdownContainerStyle} ref={levelDropdownRef}>
              <input
                type="text"
                value={studyLevelInput}
                onChange={handleStudyLevelChange}
                onFocus={() => setIsLevelDropdownOpen(true)}
                placeholder="Study Level"
                style={inputStyle}
              />
              {isLevelDropdownOpen && (
                <div style={dropdownListStyle}>
                  {filteredStudyLevels.map((level, index) => (
                    <div
                      key={index}
                      style={optionStyle}
                      onClick={() =>
                        handleOptionClick(
                          setStudyLevelInput,
                          level,
                          setIsLevelDropdownOpen
                        )
                      }
                    >
                      {level}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={dropdownContainerStyle} ref={destinationDropdownRef}>
              <input
                type="text"
                value={destinationInput}
                onChange={handleDestinationChange}
                onFocus={() => setIsDestinationDropdownOpen(true)}
                placeholder="Study Destinations"
                style={inputStyle}
              />
              {isDestinationDropdownOpen && (
                <div style={dropdownListStyle}>
                  {filteredDestinations.map((destination, index) => (
                    <div
                      key={index}
                      style={optionStyle}
                      onClick={() =>
                        handleOptionClick(
                          setDestinationInput,
                          destination,
                          setIsDestinationDropdownOpen
                        )
                      }
                    >
                      {destination}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button style={searchButtonStyle} onClick={handleSearchClick}>Search</button>
          </>
        )}

{activeSection === "scholarships" && (
  <>
    <div style={dropdownContainerStyle} ref={destinationDropdownRef}>
      <input
        type="text"
        value={destinationInput}  // Use destinationInput
        onChange={handleDestinationChange}  // Use destination change handler
        onFocus={() => setIsDestinationDropdownOpen(true)}
        placeholder="Choose Country"  // Label for choosing the country
        style={inputStyle}
      />
      {isDestinationDropdownOpen && (
        <div style={dropdownListStyle}>
          {filteredDestinations.map((destination, index) => (
            <div
              key={index}
              style={optionStyle}
              onClick={() =>
                handleOptionClick(
                  setDestinationInput,
                  destination,
                  setIsDestinationDropdownOpen
                )
              }
            >
              {destination}
            </div>
          ))}
        </div>
      )}
    </div>
    <button style={searchButtonStyle} onClick={handleSearchClick}>
      Search
    </button>
  </>
)}


        {activeSection === "universities" && (
          <>
            <div style={dropdownContainerStyle} ref={destinationDropdownRef}>
              <input
                type="text"
                value={destinationInput}
                onChange={handleDestinationChange}
                onFocus={() => setIsDestinationDropdownOpen(true)}
                placeholder="Study Destinations"
                style={inputStyle}
              />
              {isDestinationDropdownOpen && (
                <div style={dropdownListStyle}>
                  {filteredDestinations.map((destination, index) => (
                    <div
                      key={index}
                      style={optionStyle}
                      onClick={() =>
                        handleOptionClick(
                          setDestinationInput,
                          destination,
                          setIsDestinationDropdownOpen
                        )
                      }
                    >
                      {destination}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button style={searchButtonStyle} onClick={handleSearchClick}>Search</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BelowSliderSection;
