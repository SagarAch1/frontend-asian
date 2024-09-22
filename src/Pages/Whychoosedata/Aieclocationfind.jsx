import React, { useState } from "react";
import Footer from "../Homepage/Footer";

const OfficeLocator = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [locationStatus, setLocationStatus] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);

  const offices = ["Kathmandu", "Pokhara", "Chitwan", "Sydney"];

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input) {
      const filtered = offices.filter((office) =>
        office.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(offices);
    }
  };

  const handleSearch = () => {
    if (offices.includes(searchTerm)) {
      setSelectedOffice(searchTerm);
    } else {
      alert("We are not available here");
    }
  };

  const handleInputClick = () => {
    setFilteredOptions(offices);
    setDropdownVisible(true);
  };

  const handleClickOutside = () => {
    setDropdownVisible(false);
  };

  const renderOfficeDetails = (office) => {
    let officeData = null;

    if (office === "Kathmandu") {
      officeData = {
        address:
          "Putalisadak, Kathmandu, ADBL Bank's Building, AL3, Putalisadak-30, Kathmandu, Nepal",
        phone: "977-01-5908881/5908882",
        openingHours: "09:00 AM - 05:30 PM",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3709997553105!2d85.32043637556089!3d27.705829276183444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195c580e7a5d%3A0xf35b7e6ce96c9d55!2sAsian%20International%20Education%20and%20Migration%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1726823511164!5m2!1sen!2snp",
      };
    } else if (office === "Pokhara") {
      officeData = {
        address: "Nivagalli, Chiplodhunga-09, Pokhara, Nepal",
        phone: "+9779801048957",
        openingHours: "09:00 AM - 05:30 PM",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.455097395174!2d83.98375838117846!3d28.22386341372524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595667cb215ff%3A0xfe8b4d02bb7d6674!2sNiva%20Galli!5e0!3m2!1sen!2snp!4v1726979628386!5m2!1sen!2snp", // Update with actual URL
      };
    } else if (office === "Chitwan") {
      officeData = {
        address: "Tejman Plaza AL5, Pulchok-03, Narayangurh,Chitwan Nepal",
        phone: "+97756527974",
        openingHours: "09:00 AM - 05:30 PM",
        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6353702698307!2d84.41815947530027!3d27.697662476188142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb224c79fd03%3A0x737835fc6d7dca86!2sPulchowk!5e0!3m2!1sen!2snp!4v1726980530330!5m2!1sen!2snp", // Update with actual URL
      };
    } else if (office === "Sydney") {
      officeData = {
        address:
          "Sydney Office 70 Raymond Avenue, Campbelltown, Sydney-Australia",
        phone: "0425883105 /+61 425883105",

        mapUrl:
          "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3305.1133377415745!2d150.82584917556113!3d-34.066608773151515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d-34.0665821!2d150.82847769999998!5e0!3m2!1sen!2snp!4v1726980802528!5m2!1sen!2s", // Update with actual URL
      };
    }

    if (!officeData) return null;

    return (
      <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
        <div style={{ flex: 1 }}>
          <h2>{office} Office</h2>
          <p>
            <strong>Office location</strong>
          </p>
          <p>{officeData.address}</p>
          <p>
            <strong>Phone</strong>
          </p>
          <p>
            <a href={`tel:${officeData.phone}`}>{officeData.phone}</a>
          </p>

          <p>
            <strong>Opening hours</strong>
          </p>
          <p>{officeData.openingHours}</p>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            More details
          </button>
        </div>

        <div
          style={{
            flex: 1,
            position: "relative",
            height: "300px",
            width: "500px",
          }}
        >
          <iframe
            src={officeData.mapUrl}
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container} onClick={handleClickOutside}>
      <div style={styles.topImageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/is.png`}
          alt="Top Image"
          style={styles.topImage}
        />
      </div>

      <div style={styles.topSection}>
        <div
          style={styles.searchContainer}
          onClick={(e) => e.stopPropagation()}
        >
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

          {dropdownVisible && filteredOptions.length > 0 && (
            <div style={styles.dropdown}>
              {filteredOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchTerm(option);
                    setFilteredOptions([]);
                    setDropdownVisible(false);
                  }}
                  style={styles.dropdownItem}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {locationStatus && <p>{locationStatus}</p>}
      </div>

      {selectedOffice && renderOfficeDetails(selectedOffice)}

      <div style={styles.whyAIEC}>
        <h2 style={styles.title}>Why AIEC Counsellors?</h2>
        <div style={styles.row}>
          <div style={styles.col}>
            <h4>Connect globally</h4>
            <p>
              Get one to one access to more than 2,200 expert education
              counsellors across 190 AIEC offices in 35 countries.
            </p>
          </div>
          <div style={styles.col}>
            <h4>Experts in their field</h4>
            <p>
              Our counsellors are highly trained to support you to find and
              apply to courses matching your interest and aptitude.
            </p>
          </div>
          <div style={styles.col}>
            <h4>An unbeatable track record</h4>
            <p>
              To date, we have helped more than half a million students achieve
              their dream of studying abroad.
            </p>
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.col}>
            <h4>Friendly and approachable</h4>
            <p>
              Many AIEC counsellors were once international students too. You'll
              always find them ready to go the extra mile.
            </p>
          </div>
          <div style={styles.col}>
            <h4>Zero commission</h4>
            <p>
              AIEC doesn’t charge you for its services. Many universities also
              waive their application fees when you apply through AIEC.
            </p>
          </div>
          <div style={styles.col}>
            <h4>Putting you first</h4>
            <p>
              All our services are designed to enhance your experience and
              ensure that you achieve your study abroad goals.
            </p>
          </div>
        </div>
      </div>
      <div style={styles.container} onClick={handleClickOutside}>
        <div style={styles.footerStyle}>
          <Footer style={styles.footerStyle} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerStyle: {
    width: "2500px",
    height: "400px",
    overflow: "hidden",
    marginLeft: "-700px",
    marginBottom: "20px",
  },
  topImageContainer: {
    width: "2500px",
    height: "400px",
    overflow: "hidden",
    marginLeft: "-700px",
    marginBottom: "20px",
  },
  topImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    marginTop: "62px",
  },

  topSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30px",
    gap: "15px",
    flexWrap: "wrap",
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
  },
  searchButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  findButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
  dropdown: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "#fff",
    maxHeight: "200px",
    overflowY: "auto",
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  whyAIEC: {
    marginTop: "40px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  col: {
    flex: 1,
    margin: "0 10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};

export default OfficeLocator;
