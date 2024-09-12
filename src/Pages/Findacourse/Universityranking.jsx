import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const universitiesData = [
    {
        id: 37,
        name: "The University of Melbourne",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/sat.jpeg`,
      },
      {
        id: 54,
        name: "Monash University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/pre.jpeg`,
      },
      {
        id: 60,
        name: "The University of Sydney",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 67,
        name: "The Australian National University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 70,
        name: "The University of Queensland",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 84,
        name: "UNSW College",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 84,
        name: "The University of New South Wales",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 111,
        name: "The University of Adelaide",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 143,
        name: "The University of Western Australia",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 148,
        name: "University of Technology Sydney",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 180,
        name: "Macquarie University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 199,
        name: "Queensland University of Technology",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "The University of Newcastle",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "Western Sydney University - Sydney City Campus",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "Curtin University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "University of Wollongong",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "Swinburne University of Technology-sydney",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "Swinburne University of Technology",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 251,
        name: "Deakin University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 251,
        name: "University of Tasmania (UTAS)",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 251,
        name: "RMIT University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 251,
        name: "Griffith University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 251,
        name: "La Trobe University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "Western Sydney University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "Flinders University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "USQ - Sydney Education Centre",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "University of South Australia",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 351,
        name: "Murdoch University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 351,
        name: "James Cook University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 351,
        name: "The University of Southern Queensland (UniSQ)",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 351,
        name: "University of Canberra",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 351,
        name: "Edith Cowan University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Bond University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Victoria University - Sydney",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Charles Darwin University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Victoria University - Brisbane",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Australian Catholic University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Victoria University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 501,
        name: "Southern Cross University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 501,
        name: "CQUniversity Australia",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 501,
        name: "University of the Sunshine Coast",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 601,
        name: "Educo Southern Cross University - Sydney",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 601,
        name: "Educo Southern Cross University - Melbourne",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 601,
        name: "University of the Sunshine Coast English Language Centre",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 601,
        name: "Federation University Australia",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 601,
        name: "Educo Southern Cross University - Perth",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 801,
        name: "Charles Sturt University",
        country: "Australia",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      ////////////////////////////////////////////////////////////////////////////Newzeland//////////////////////////////////////////////////////////////////////
      {
        id: 150,
        name: "The University of Auckland",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "The University of Otago",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Victoria University of Wellington",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Auckland University of Technology",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "The University of Waikato",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Lincoln University",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 501,
        name: "University of Canterbury",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 501,
        name: "Massey University",
        country: "New Zealand",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      ////////////////////////////////////////////////////////////////////////Ireland////////////////////////////////////////////////////////////////////
      {
        id: 134,
        name: "Trinity College Dublin, the University of Dublin",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 201,
        name: "University College Dublin",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 251,
        name: "Royal College of Surgeons in Ireland",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "University College Cork",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 301,
        name: "University of Galway",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Dublin City University",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "University of Limerick",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 401,
        name: "Maynooth University",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      {
        id: 1001,
        name: "TU Dublin",
        country: "Ireland",
        logo: `${process.env.PUBLIC_URL}/assets/images/ire.jpeg`,
      },
      
];

const UniversityRankings = () => {
  const [searchName, setSearchName] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("Australia");
  const navigate = useNavigate();

  // Filter universities by both name and country
  const filteredData = universitiesData.filter((university) => {
    return (
      university.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (university.country === selectedDestination || !selectedDestination)
    );
  });

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", paddingTop: "100px" }}>
      {/* Full-width background section */}
      <div
        style={{
          backgroundColor: "#f0f4f8",
          padding: "40px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "left",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            THE University Rankings for 2024
          </h1>
          <p style={{ marginBottom: "40px" }}>
            Discover the world’s top-ranking universities according to Times
            Higher Education University Rankings 2024. Search globally or by
            country and explore the courses and experience they offer.
          </p>

          {/* Search and Dropdown Box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
              width: "60%",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search by university name"
              value={searchName}
              onChange={handleSearchNameChange}
              style={{
                padding: "15px",
                width: "60%",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />

            <select
              value={selectedDestination}
              onChange={handleDestinationChange}
              style={{
                padding: "15px",
                width: "40%",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            >
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Ireland">Ireland</option>
            </select>

            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* University List and Signup Section */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          padding: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* University List */}
        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "20px" }}>
            {filteredData.length} Universities found, showing results below
          </p>
          {filteredData.length > 0 ? (
            filteredData.map((university) => (
              <div
                key={`${university.id}-${university.name}`} // Ensuring unique keys
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <strong
                    style={{
                      fontSize: "1.2rem",
                      marginRight: "15px",
                      backgroundColor: "#ffcc00",
                      padding: "5px 10px",
                      borderRadius: "50%",
                      color: "#fff",
                    }}
                  >
                    {university.id}
                  </strong>
                  <img
                    src={university.logo}
                    alt={`${university.name} logo`}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "15px",
                      borderRadius: "8px",
                    }}
                  />
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {university.name}
                  </span>
                  <span style={{ marginLeft: "10px", color: "#888" }}>
                    ({university.country})
                  </span>
                </div>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "1px solid #007BFF",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    color: "#007BFF",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View details
                </button>
              </div>
            ))
          ) : (
            <p>No universities found matching your criteria.</p>
          )}
        </div>

        {/* Sign Up Box */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f4f8",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            Need help with choosing a university?
          </p>
          <p style={{ marginBottom: "20px", color: "#888" }}>
            Sign in to get personalized content optimized for you or get in
            touch with one of our counselors for free consultation.
          </p>
          <button
            onClick={handleSignUp}
            style={{
              padding: "15px 30px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversityRankings;
