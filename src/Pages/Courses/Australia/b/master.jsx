import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faDollarSign,
  faEarth,
  faFileAlt,
  faMapMarkerAlt,
  faStar,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Homepage/Footer";

const programs = [
  //for diploma//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    title: "Business and Management",
    university: "Southern Cross University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Australian Catholic University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "RMIT University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Queensland University of Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Murdoch University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Monash University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Latrobe University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "James Cook University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Flinders University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Edith Cowan University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Deakin University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Curtin University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "CQ University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Charles Sturt University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Charles Darwin University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Business and Management",
    university: "Australian National University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  //scienceandtechnology////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    title: "Science and Technology",
    university: "Victoria University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Master",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Science and Technology",
    university: "Southern Cross University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Australian Catholic University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "RMIT University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Queensland University of Technology",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Murdoch University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Monash University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Latrobe University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "James Cook University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Flinders University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Edith Cowan University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Deakin University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Curtin University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "CQ University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Charles Sturt University ",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Charles Darwin University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Science and Technology",
    university: "Australian National University",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Diploma",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },


  // Other programs
];
//
const CourseAustralia = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    const searchCriteria = location.state || {};
    const filtered = programs.filter(
      (program) =>
        // (!searchCriteria.level || program.degree.toLowerCase() === searchCriteria.level?.toLowerCase()) &&
        (!searchCriteria.course || program.title.toLowerCase().includes(searchCriteria.course?.toLowerCase()))
    );

    setFilteredPrograms(filtered.length > 0 ? filtered : null);
  }, [location.state]);

  const handleViewDetails = (link) => {
    navigate(link);
  };

  return (
    <>
      <Container>
        {filteredPrograms ? (
          <>
            <DataCount size="1.5em" bold>
              Found {filteredPrograms.length} programs according to your criteria in the Australia.
            </DataCount>
            <GridContainer>
              {filteredPrograms.map((program, index) => (
                <ProgramCard key={index}>
                  <ProgramTitle>{program.title}</ProgramTitle>
                  <ProgramDetails>
                    <p>
                      <FontAwesomeIcon icon={faUniversity} />{" "}
                      <strong>{program.university}</strong>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faFileAlt} /> {program.degree}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> {program.location}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faEarth} /> World Ranking:{" "}
                      {program.worldRanking}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCalendarAlt} /> Next Intake:{" "}
                      {program.intakeDate}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faStar} /> Entry Score:{" "}
                      {program.entryScore}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faDollarSign} /> Fees: {program.fees}
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
  }
`;

export default CourseAustralia;
