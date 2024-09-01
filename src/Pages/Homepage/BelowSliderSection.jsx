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
    "Landscape design and architecture",
    "Design and Applied Arts",
    "Biological Sciences",
    "Anatomy",
    "Human resource Management",
    "International Business",
    "Quality Management",
  ]);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const [studyLevelInput, setStudyLevelInput] = useState("");
  const [filteredStudyLevels, setFilteredStudyLevels] = useState([
    "Undergraduate",
    "Postgraduate",
    "Diploma",
    "Certificate",
    "Doctorate",
    "Foundation",
  ]);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);

  const [destinationInput, setDestinationInput] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
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
        "Landscape design and architecture",
        "Design and Applied Arts",
        "Biological Sciences",
        "Anatomy",
        "Human resource Management",
        "International Business",
        "Quality Management",
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
        "Undergraduate",
        "Postgraduate",
        "Diploma",
        "Certificate",
        "Doctorate",
        "Foundation",
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
        "France",
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
    if (
      courseSubjectInput === "Landscape design and architecture" &&
      studyLevelInput === "Undergraduate" &&
      destinationInput === "Canada"
    ) {
      navigate("/landscapeundergraduatecanada"); // Navigate to the desired URL
    }
  
    if (
      courseSubjectInput === "Landscape design and architecture" &&
      studyLevelInput === "Undergraduate" &&
      destinationInput === "United States"
    ) {
      navigate("/landscapeundergraduateusa"); // Navigate to the desired URL
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
            <button style={searchButtonStyle} onClick={handleSearchClick}>Search</button>
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
