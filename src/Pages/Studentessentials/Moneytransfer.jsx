// Moneytransfer.js
import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #f0f4ff;
  padding: 50px 0;
  position: relative;
  text-align: center;
`;

const HeaderBar = styled.div`
  background-color: #edf3ff;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
`;

const SectionDescription = styled.p`
  text-align: center;
  color: #666;
`;

const CountrySelection = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const CountryButton = styled.button`
  background-color: ${(props) => (props.active ? "#2D9CDB" : "#E0E0E0")};
  color: white;
  border: none;
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #007acc;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const BoxContainer = styled.div`
  width: 60%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
`;

const Card = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #2d9cdb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #007acc;
  }
`;

const Moneytransfer = () => {
  const [selectedCountry, setSelectedCountry] = useState("australia");
  const navigate = useNavigate();

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Container>
      {/* Header with Title and Subtitle */}
      <Header>
        <HeaderBar />
        <Title>Easy Money Transfer for International Students</Title>
        <SubTitle>Seamless money transfer solutions</SubTitle>
      </Header>

      {/* Section Title */}
      <SectionTitle>Seamless money transfer solutions</SectionTitle>
      <SectionDescription>
        Whether it’s paying admission fees to your institution, purchasing health insurance, or covering your accommodation costs, we’ve got your maintenance needs covered. We’ve partnered with leading money transfer companies to provide you with seamless options at competitive rates, so you can focus on your studies with peace of mind.
      </SectionDescription>

      {/* Country Selection */}
      <CountrySelection>
        <CountryButton onClick={() => handleCountrySelect("australia")} active={selectedCountry === "australia"}>
          Australia
        </CountryButton>
        <CountryButton onClick={() => handleCountrySelect("canada")} active={selectedCountry === "canada"}>
          Canada
        </CountryButton>
        <CountryButton onClick={() => handleCountrySelect("ireland")} active={selectedCountry === "ireland"}>
          Ireland
        </CountryButton>
        <CountryButton onClick={() => handleCountrySelect("usa")} active={selectedCountry === "usa"}>
          United States
        </CountryButton>
      </CountrySelection>

      {/* Box containing Flywire and Convera options */}
      <SectionContainer>
        <BoxContainer>
          <Card>
            <h3>Flywire</h3>
            <ul>
              <li>Secure, flexible payment options, including bank transfers, credit cards, e-wallets, and more</li>
              <li>Local payment methods in 140+ currencies across 240+ countries</li>
              <li>Competitive exchange rates with no unexpected fees</li>
              <li>Real-time payment tracking from initiation to delivery</li>
              <li>24/7 multilingual support</li>
            </ul>
            <Button onClick={() => navigate("/flywire")}>About Flywire</Button>
            <Button onClick={() => navigate("/form")}>Enquire Now</Button>
          </Card>

          {/* Only display Convera if not Ireland */}
          {selectedCountry !== "ireland" && (
            <Card>
              <h3>Convera</h3>
              <ul>
                <li>Substantial savings for students, parents, and sponsors</li>
                <li>Adds transparency to transaction charges</li>
                <li>Pay online via popular options like bank transfer, credit, or debit card</li>
                <li>Multilingual platform available in 10 languages</li>
                <li>Track your payment status by SMS and email</li>
              </ul>
              <Button onClick={() => navigate("/convera")}>About Convera</Button>
              <Button onClick={() => navigate("/form")}>Enquire Now</Button>
            </Card>
          )}
        </BoxContainer>
      </SectionContainer>
    </Container>
  );
};

export default Moneytransfer;
