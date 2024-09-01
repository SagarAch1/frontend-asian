import { faCalendarAlt, faDollarSign, faEarth, faFileAlt, faMapMarkerAlt, faStar, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from "../Homepage/Footer";

const programs = [
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/bachelorofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  {
    title: "Master of Design in Accessibility",
    university: "CARLETON UNIVERSITY",
    location: "Ottawa, Canada",
    worldRanking: "50",
    degree: "Masters Degree",
    intakeDate: "04.09.2024",
    entryScore: "IELTS 6.5",
    fees: "CAD20777 (2024)",
    link: "/masterofdesign",
  },
  // Add other programs here
];

const Landscapeundergraduateuk = () => {
  const navigate = useNavigate();

  const handleViewDetails = (link) => {
    navigate(link);
  };

  return (
    <>
      <Container>
        <DataCount size="1.5em" bold>
          Found {programs.length} programs according to your criteria in Canada.
        </DataCount>
        <GridContainer>
          {programs.map((program, index) => (
            <ProgramCard key={index}>
              <ProgramTitle>{program.title}</ProgramTitle>
              <ProgramDetails>
                <p><FontAwesomeIcon icon={faUniversity} /> <strong>{program.university}</strong></p>
                <p><FontAwesomeIcon icon={faFileAlt} /> {program.degree}</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {program.location}</p>
                <p><FontAwesomeIcon icon={faEarth} /> World Ranking: {program.worldRanking}</p>
                <p><FontAwesomeIcon icon={faCalendarAlt} /> Next Intake: {program.intakeDate}</p>
                <p><FontAwesomeIcon icon={faStar} /> Entry Score: {program.entryScore}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> Fees: {program.fees}</p>
              </ProgramDetails>
              <ViewDetailsButton onClick={() => handleViewDetails(program.link)}>
                View details
              </ViewDetailsButton>
            </ProgramCard>
          ))}
        </GridContainer>
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
  font-size: ${(props) => props.size || '1.1em'};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  margin-bottom: 20px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  font-family: 'Aptos', sans-serif; /* Apply Aptos font */
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
      color: #007BFF;
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

export default Landscapeundergraduateuk;
