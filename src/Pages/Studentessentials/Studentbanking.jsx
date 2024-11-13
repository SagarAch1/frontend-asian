import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";

const Studentbanking = () => {
  const navigate = useNavigate();
  const handleEnquireNowClick = () => {
    navigate("/formpage");
  };

  // State to manage selected country
  const [selectedCountry, setSelectedCountry] = useState("Australia");

  // Container style to ensure content does not go under the navbar
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "100px", // This pushes the content down below the navbar
  };

  // Style to ensure the footer section covers the full width
  const footerSectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    marginTop: "40px",
    textAlign: "center",
    width: "100vw", // Cover the entire width of the viewport
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)", // Center it relative to the page
  };

  // Updated background gradient style for full width and increased height
  const bannerStyle = {
    background: "linear-gradient(to right, #e6f4ff, #ffffff)",
    padding: "40px 20px", // Increased padding for height
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw", // Makes sure it spans 100% of the viewport width
    position: "relative", // Ensure it's relative to the viewport
    left: "50%", // Center the banner
    transform: "translateX(-50%)",
    marginTop: "-37px", // Fix positioning due to full width
  };

  const titleStyle = {
    marginLeft: "1100px",
    fontSize: "3rem",
    color: "#333",
    fontFamily: "Aptos Sans",
  };

  const iconStyle = {
    width: "100px",
    height: "100px",
  };

  const contentSectionStyle = {
    marginTop: "20px",
  };

  const countrySelectionStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "20px 0",
  };

  const countryButtonsStyle = {
    display: "flex",
    gap: "10px",
  };

  const buttonBaseStyle = {
    padding: "10px 20px",
    borderRadius: "25px",
    cursor: "pointer",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "150px",
    textAlign: "center",
  };

  const activeButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
  };

  const inactiveButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: "#f0f0f0",
    color: "#333",
  };

  const bankOptionStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "20px",
    margin: "20px 0",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
  };

  const liStyle = {
    paddingLeft: "20px",
    position: "relative",
  };

  const checkmarkStyle = {
    content: "✔",
    color: "green",
    position: "absolute",
    left: "0",
  };

  const exploreButtonStyle = {
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "10px",
    borderRadius: "5px",
  };

  const footerLinksStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const footerLinkItemStyle = {
    textAlign: "center",
    flexBasis: "300px", // Ensures even spacing between items
  };

  const footerIconStyle = {
    width: "40px",
    height: "40px",
    marginBottom: "10px",
  };

  // Function to handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div style={containerStyle}>
      <div style={bannerStyle}>
        <h2 style={titleStyle}>Student Banking</h2>
        {/* Apply the margin */}
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bankicon.jpg`}
            alt="Bank Icon"
            style={iconStyle}
          />
        </div>
      </div>

      <div style={contentSectionStyle}>
        <h3>Open a bank account even before you arrive!</h3>
        <p>
          We have formed exclusive partnerships with leading financial
          institutions in strategic locations. This implies that you can manage
          your money, create a bank account, and take advantage of affordable
          financial services. even before you arrive in the nation of your
          choice.
        </p>

        <div style={countrySelectionStyle}>
          <p>Please select your destination country:</p>
          <div style={countryButtonsStyle}>
            <button
              style={
                selectedCountry === "Australia"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
              onClick={() => handleCountrySelect("Australia")}
            >
              Australia
            </button>
            <button
              style={
                selectedCountry === "Canada"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
              onClick={() => handleCountrySelect("Canada")}
            >
              Canada
            </button>
          </div>
        </div>

        {selectedCountry === "Australia" && (
          <div style={bankOptionStyle}>
            <h4>Commonwealth bank of Australia</h4>
            <p>Why Commonwealth Bank?</p>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Australia’s largest bank.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Join the 5 million
                Australians who use the CommBank app to bank while on the go.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> certain branches have
                bilingual employees, and certain ATMs have language
                capabilities.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> There is a vast branch and
                ATM network available all over Australia, especially on certain
                college campuses.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Students can take
                advantage of a number of unique deals; ask the employees at any
                CommBank branch for more information (and don't forget to bring
                your student ID). or enrolment letter when you do).
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> They give advice and tips
                on their website regarding studying and relocating to Australia.
              </li>
            </ul>
            <h5>Things you should know:</h5>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> :The Commonwealth Bank of
                Australia, a limited liability business with an ABN of 48 123
                123 124, was established in Australia and is governed by
                Australian control.
              </li>
            </ul>
            <button style={exploreButtonStyle} onClick={handleEnquireNowClick}>
              Enquire Now
            </button>
          </div>
        )}

        {selectedCountry === "Canada" && (
          <>
            <div style={bankOptionStyle}>
              <h4>CIBC</h4>
              <p>CIBC International Student Banking Offer (ISBO)</p>
              <p>
                As a foreign student getting ready to study overseas, we are
                aware that there are many things to complete before you get
                there and that the banking system in Canada could differ from
                your native country. nation. We created the CIBC ISBO Program
                for this reason. At CIBC, We're committed to helping you along
                the way at every turn. in Canada
              </p>
              <p>Key Program Highlights:</p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Within five minutes,
                  submit your application using our safe online platform.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Make payments in your
                  favourite currency conveniently and without incurring any
                  additional fees before travelling to Canada.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>You will receive a
                  confirmation of funds letter for your study permit application
                  as soon as the money has been put into your GIC Program
                  account.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> On our online platform,
                  you may view the status of your application in real time.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Our staff of
                  professionals is accessible to help you in several languages,
                  twenty-four hours a day, seven days a week.
                </li>
              </ul>
              <h5>Additional Benefits:</h5>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Up to four years, or six
                  months after your graduation date, take advantage of the
                  benefits of limitless transactions and no monthly account
                  fees.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Free Interac e-Transfers
                  are available for moving funds between Canadian accounts.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> There are credit card
                  options that have a minimum limit of $1000 and no annual fees.
                </li>
              </ul>
              <button
                style={exploreButtonStyle}
                onClick={handleEnquireNowClick}
              >
                Enquire Now
              </button>
            </div>

            <div style={bankOptionStyle}>
              <h4>Simplii Financial</h4>
              <p>
                International students can obtain a range of financial services
                from Simplii Financial through the ISBO Program to ensure the
                success of their banking experience in Canada!
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Submit your application
                  online in just 5 minutes
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Within one business day
                  of us receiving payments, you will receive a proof of funding
                  letter for your study permit application.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Don't forget to take
                  advantage of our free offer when you decide to send money in
                  your local currency.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Without having any prior
                  Canadian credit history, you may quickly apply for a Simplii
                  Credit Card with a credit limit of up to $2,000 while you
                  finish your application to ISBO.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>There is no need to
                  physically visit a site because the account activation process
                  is entirely digital upon arrival.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> We have a team of
                  professionals on hand to help you every single day of the
                  week.
                </li>
              </ul>
              <h5>Additional Benefits:</h5>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Take advantage of free
                  daily banking with no minimum balance needed.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Gain access to free
                  Interac e-Transfer® transactions and services for outgoing
                  payments, such as Global Money Transfer.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Support for multiple
                  languages is available to address any queries you might have.
                </li>
              </ul>
              <button
                style={exploreButtonStyle}
                onClick={handleEnquireNowClick}
              >
                Enquire Now
              </button>
            </div>
          </>
        )}
      </div>
      <div style={footerSectionStyle}>
        <h4>Open a bank account overseas</h4>
        <div style={footerLinksStyle}>
          <div style={footerLinkItemStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/form.png`}
              alt="Footer Bank Icon"
              style={footerIconStyle}
            />
            <p>
              Do you want to open a bank account from your home country in the
              study location of your choice? We are able to assist
            </p>
          </div>
          <div style={footerLinkItemStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/star.png`}
              alt="Footer Bank Icon"
              style={footerIconStyle}
            />
            <p>
              There are numerous financial packages that can be customised to
              meet the demands of overseas students.
            </p>
          </div>
          <div style={footerLinkItemStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/mb.jpeg`}
              alt="Footer Bank Icon"
              style={footerIconStyle}
            />
            <p>
              Simple access to your account to finish purchases or even use your
              mobile device to pay with your card at stores.
            </p>
          </div>
        </div>
      </div>

      <div style={footerSectionStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Studentbanking;
