import {
    faBook,
    faCalendarAlt,
    faDollarSign,
    faEarth,
    //   faFileAlt,
    faMapMarkerAlt,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import styled from "styled-components";
  import Footer from "../Homepage/Footer";
  import FormPage from "../Homepage/FormPage";
  
  const programs = [
  
  
    {
      title: "Life Sciences",
      university: " Towson University",
      location: " Towson, Maryland ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Medical and Healthcare ",
      university: " Towson University",
      location: " Towson, Maryland ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Arts",
      university: " Towson University",
      location: " Towson, Maryland ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Law",
      university: " Towson University",
      location: " Towson, Maryland ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Science and Technology",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Business and Management",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Engineering",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Life Sciences",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Medical and Healthcare",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Arts",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: "Law",
      university: " Troy University - Troy",
      location: " Troy, Alabama ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
   
  
    {
      title: " Arts ",
      university: " Youngstown State University ",
      location: " Youngstown, Ohio ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    {
      title: " Law",
      university: " Youngstown State University",
      location: " Youngstown, Ohio ",
      worldRanking: "50",
      degree: "Certification",
      intakeDate: "Jan (Spring), May (Summer), August (Fall)",
      entryScore: "IELTS 6.0",
      fees: "Contact AIEC",
      link: "/bachelorofdesign",
    },
  
    // Other programs
  ];
  
  const Ukscholarships = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [filteredPrograms, setFilteredPrograms] = useState([]);
  
    useEffect(() => {
      const searchCriteria = location.state || {};
      const filtered = programs.filter(
        (program) =>
          !searchCriteria.course ||
          program.title
            .toLowerCase()
            .includes(searchCriteria.course?.toLowerCase())
      );
  
      setFilteredPrograms(filtered.length > 0 ? filtered : null);
    }, [location.state]);
  
    const handleViewDetails = (link) => {
      navigate(link);
    };
  
    const handleContactClick = () => {
      navigate("/contact");
    };
  
    return (
      <>
        <Container>
          {filteredPrograms ? (
            <>
              <DataCount size="1.5em" bold>
                Found {filteredPrograms.length}  Scholarships in UK.
              </DataCount>
              <GridContainer>
                {filteredPrograms.map((program, index) => (
                  <ProgramCard key={index}>
                    <ProgramTitle>{program.university}</ProgramTitle>
                    <ProgramDetails>
                      <p>
                        <FontAwesomeIcon icon={faBook} />{" "}
                        <strong>{program.title}</strong>
                      </p>
                      {/* <p>
                        <FontAwesomeIcon icon={faFileAlt} /> {program.Certified}
                      </p> */}
                      <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                        {program.location}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faEarth} /> World Ranking:{" "}
                        {program.worldRanking}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCalendarAlt} /> Intake:{" "}
                        {program.intakeDate}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faStar} /> Entry Score:{" "}
                        {program.entryScore}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faDollarSign} /> Fees:
                        <ContactLink onClick={handleContactClick}>
                          {program.fees}
                        </ContactLink>
                      </p>
                    </ProgramDetails>
                    <ViewDetailsButton
                      onClick={() => handleViewDetails(program.link)}
                    >
                      View details
                    </ViewDetailsButton>
                  </ProgramCard>
                ))}
              </GridContainer>
            </>
          ) : (
            <DataCount size="1.5em" bold>
              No available programs for the selected criteria.
            </DataCount>
          )}
        </Container>
  
        <FormPage />
  
        {/* Footer */}
        <Footer />
      </>
    );
  };
  
  // Styled-components for styling
  const Container = styled.div`
    margin-top: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const DataCount = styled.p`
    font-size: ${(props) => props.size || "1.1em"};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    margin-bottom: 20px;
    text-align: center;
  `;
  
  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
  `;
  
  const ProgramCard = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 350px;
  `;
  
  const ProgramTitle = styled.h3`
    font-size: 1em;
    color: #333;
    margin-bottom: 10px;
  `;
  
  const ProgramDetails = styled.div`
    text-align: left;
    margin-top: 10px;
  
    p {
      margin: 4px 0;
      font-size: 0.8em;
      color: #555;
  
      svg {
        margin-right: 8px;
        color: #007bff;
      }
    }
  `;
  
  const ContactLink = styled.span`
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
  
    &:hover {
      color: #0056b3;
    }
  `;
  
  const ViewDetailsButton = styled.button`
    margin-top: 15px;
    padding: 10px 25px;
    font-size: 0.9em;
    color: black;
    background-color: #ffffff;
    border: black 1px solid;
    border-radius: 20px;
    cursor: pointer;
    display: block;
    width: 100%;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  
    &:hover {
      background-color: #0056b3;
      color: #fff;
    }
  `;
  
  export default Ukscholarships;
  