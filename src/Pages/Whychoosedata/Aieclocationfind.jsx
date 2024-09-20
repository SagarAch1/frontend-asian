import React, { useState } from 'react';

const OfficeLocator = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [locationStatus, setLocationStatus] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const offices = ['Kathmandu', 'Pokhara', 'Chitwan', 'Sydney'];

  // Function to handle search input
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input) {
      // Filter the dropdown options based on the input
      const filtered = offices.filter((office) =>
        office.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      // Show all places when input is empty
      setFilteredOptions(offices);
    }
  };

  // Function to handle search button
  const handleSearch = () => {
    if (offices.includes(searchTerm)) {
      alert(`Navigating to /${searchTerm}`);
    } else {
      alert('We are not available here');
    }
  };

  // Function to handle "Find office near me" and request location access
  const handleFindNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          setLocationStatus('Location access granted!');
          // Check if user is near an office
          const nearbyOffice = offices.find((office) => office === 'Kathmandu'); // Example logic
          if (nearbyOffice) {
            alert(`Navigating to /${nearbyOffice}`);
          } else {
            alert('No nearby offices found.');
          }
        },
        () => {
          setLocationStatus('Location access denied.');
        }
      );
    } else {
      setLocationStatus('Geolocation is not supported by this browser.');
    }
  };

  // Function to handle click on input field (show all locations)
  const handleInputClick = () => {
    setFilteredOptions(offices);
    setDropdownVisible(true); // Show dropdown when input is clicked
  };

  // Function to handle click outside of the dropdown
  const handleClickOutside = () => {
    setDropdownVisible(false);
  };

  return (
    <div style={styles.container} onClick={handleClickOutside}>
      {/* Top image section */}
      <div style={styles.topImageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/is.png`}
          alt="Top Image"
          style={styles.topImage}
        />
      </div>

      {/* Top section with search and dropdown */}
      <div style={styles.topSection}>
        <div style={styles.searchContainer} onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            placeholder="Enter a town or city"
            value={searchTerm}
            onChange={handleInputChange}
            onClick={handleInputClick}
            style={styles.input}
          />
          <button onClick={handleSearch} style={styles.searchButton}>
            Search
          </button>

          {/* Dropdown for office locations */}
          {dropdownVisible && filteredOptions.length > 0 && (
            <div style={styles.dropdown}>
              {filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchTerm(option);
                    setFilteredOptions([]); // Hide dropdown after selecting an option
                    setDropdownVisible(false); // Hide dropdown after selection
                  }}
                  style={styles.dropdownItem}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <button onClick={handleFindNearMe} style={styles.findButton}>
          Find offices near me
        </button>

        {locationStatus && <p>{locationStatus}</p>}
      </div>

      {/* Why AIEC Counsellors Section */}
      <div style={styles.whyAIEC}>
        <h2 style={styles.title}>Why AIEC Counsellors?</h2>
        <div style={styles.row}>
          <div style={styles.col}>
            <h4>Connect globally</h4>
            <p>Get one to one access to more than 2,200 expert education counsellors across 190 AIEC offices in 35 countries.</p>
          </div>
          <div style={styles.col}>
            <h4>Experts in their field</h4>
            <p>Our counsellors are highly trained to support you to find and apply to courses matching your interest and aptitude.</p>
          </div>
          <div style={styles.col}>
            <h4>An unbeatable track record</h4>
            <p>To date, we have helped more than half a million students achieve their dream of studying abroad.</p>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.col}>
            <h4>Friendly and approachable</h4>
            <p>Many AIEC counsellors were once international students too. You'll always find them ready to go the extra mile.</p>
          </div>
          <div style={styles.col}>
            <h4>Zero commission</h4>
            <p>AIEC doesn’t charge you for its services. Many universities also waive their application fees when you apply through AIEC.</p>
          </div>
          <div style={styles.col}>
            <h4>Putting you first</h4>
            <p>All our services are designed to enhance your experience and ensure that you achieve your study abroad goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS Styles in JS
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  topImageContainer: {
    width: '2500px',
    height: '200px',
    overflow: 'hidden',
    marginLeft: '-700px',
    marginBottom: '20px',
  },
  topImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
    gap: '15px',
    flexWrap: 'wrap',
  },
  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    borderRadius: '50px',
    padding: '5px 10px',
    width: '300px',
  },
  input: {
    border: 'none',
    padding: '10px',
    borderRadius: '50px',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
  },
  searchButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50px',
    marginLeft: '10px',
  },
  findButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50px',
  },
  dropdown: {
    position: 'absolute',
    top: '58px', // Adjusted for dropdown to appear below search bar
    left: '0', // Align with input field
    width: '100%', // Ensure it matches the input width
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: '1',
    maxHeight: '200px',
    overflowY: 'auto', // For scrollable dropdown
  },
  dropdownItem: {
    padding: '15px', // Increase padding for larger item size
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
  },
  whyAIEC: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    marginBottom: '30px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  col: {
    width: '30%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default OfficeLocator;
