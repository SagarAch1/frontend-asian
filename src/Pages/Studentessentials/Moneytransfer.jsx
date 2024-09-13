// Moneytransfer.js
import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import Contact from "../Contact/Contact";
import Footer from "../Homepage/Footer";

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  background-color: #f0f4ff;
  padding: 40px 0;
  text-align: center;
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: #555;
  text-align: center;
  margin: 20px 0;
`;
const Head = styled.p`
  font-size: 2rem;
  color: #555;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;

const CountrySelection = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const CountryFlag = styled.div`
  margin: 0 15px;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: center;

  img {
    margin-bottom: 5px;
  }

  ${(props) =>
    props.selected &&
    `
    border-bottom: 3px solid #007acc;
  `}

  &:hover {
    text-decoration: underline;
  }
`;

const SectionContainer = styled.div`
  padding: 1px 0 20px 0;
`;

const BoxContainer = styled.div`
  width: 80%;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px 20px 60px 20px;
  margin: 20px auto;
  position: relative;
  min-height: 200px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const CardSubTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 20px;
`;

const Point = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: #333;

  svg {
    color: green;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #007acc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #005fa3;
  }
`;

const ButtonLeft = styled(Button)`
  position: absolute;
  left: 20px;
  bottom: 2px;
`;

const ButtonRight = styled(Button)`
  position: absolute;
  right: 20px;
  bottom: 10px;
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
        <Title>Easy Money Transfer for International Students</Title>
        <SubTitle>Seamless money transfer solutions</SubTitle>
      </Header>

      <Head>
      Seamless money transfer solutions
      </Head>
      {/* New Description Text */}
      <Description>
        Whether it's paying admission fees to your institution, purchasing health insurance, or covering your accommodation costs, 
        we’ve got all your remittance needs covered. We've partnered with leading money transfer companies to provide you with seamless options 
        at competitive rates so you can focus on your studies with peace of mind.
      </Description>

      {/* Country Selection */}
      <CountrySelection>
        <CountryFlag onClick={() => handleCountrySelect("australia")} selected={selectedCountry === "australia"}>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg" alt="Australia" width="30" />
          Australia
        </CountryFlag>
        <CountryFlag onClick={() => handleCountrySelect("canada")} selected={selectedCountry === "canada"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg" alt="Canada" width="30" />
          Canada
        </CountryFlag>
        <CountryFlag onClick={() => handleCountrySelect("ireland")} selected={selectedCountry === "ireland"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" alt="Ireland" width="30" />
          Ireland
        </CountryFlag>
        <CountryFlag onClick={() => handleCountrySelect("new_zealand")} selected={selectedCountry === "new_zealand"}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" alt="New Zealand" width="30" />
          New Zealand
        </CountryFlag>
        <CountryFlag onClick={() => handleCountrySelect("uk")} selected={selectedCountry === "uk"}>
          <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="United Kingdom" width="30" />
          United Kingdom
        </CountryFlag>
        <CountryFlag onClick={() => handleCountrySelect("usa")} selected={selectedCountry === "usa"}>
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA" width="30" />
          United States
        </CountryFlag>
      </CountrySelection>

      {/* Flywire and Convera Details */}
      <SectionContainer>
        {/* Flywire Box */}
        <BoxContainer>
          <CardTitle>Flywire</CardTitle>
          <CardSubTitle>Education payments made easy.</CardSubTitle>
          <p>
            Trusted by millions of students around the globe, Flywire is the safest, most convenient way to make your
            tuition and other education expense payments to more than 5,000 institutions.
          </p>
          <Point><FaCheck /> Secure, flexible payment options</Point>
          <Point><FaCheck /> Local payment methods in 140+ currencies</Point>
          <Point><FaCheck /> Competitive exchange rates with no unexpected fees</Point>
          <Point><FaCheck /> Real-time payment tracking</Point>
          <Point><FaCheck /> 24/7 multilingual payer support</Point>
          <ButtonLeft onClick={() => navigate("/flywire")}>About Flywire</ButtonLeft>
          <ButtonRight onClick={() => navigate("/formpage")}>Enquire Now</ButtonRight>
        </BoxContainer>

        {/* Convera Box */}
        {selectedCountry !== "ireland" && (
          <BoxContainer>
            <CardTitle>Convera</CardTitle>
            <CardSubTitle>Use Convera to transfer money with IDP</CardSubTitle>
            <p>
              IDP proudly partners with Convera to offer a simple, secure, and smart way to pay your fees online. Convera’s
              platform is trusted by 800+ education institutions worldwide to enable payments in 140+ currencies.
            </p>
            <Point><FaCheck /> Avoid costly transaction charges</Point>
            <Point><FaCheck /> Pay online via bank transfer, credit, or debit card</Point>
            <Point><FaCheck /> Compare payment options instantly</Point>
            <Point><FaCheck /> Track your payment status by SMS and email</Point>
            <ButtonLeft onClick={() => navigate("/convera")}>About Convera</ButtonLeft>
            <ButtonRight onClick={() => navigate("/formpage")}>Enquire Now</ButtonRight>
          </BoxContainer>
        )}
      </SectionContainer>
      <Contact />
      <Footer />
    </Container>
  );
};

export default Moneytransfer;
