import React, { useState } from "react";

const Studentbanking = () => {
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
    transform: "translateX(-50%)", // Fix positioning due to full width
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

  const footerSectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    marginTop: "40px",
    textAlign: "center",
  };

  const footerLinksStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const footerLinkItemStyle = {
    textAlign: "center",
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
        <h2 style={titleStyle}>Student Banking</h2> {/* Apply the margin */}
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
          We’ve established exclusive collaborations with top financial
          institutions across key destinations. This means you can open a bank
          account, manage your finances, and enjoy competitive banking services
          even before you set foot in your chosen country.
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
                <span style={checkmarkStyle}>✔</span> Join more than 5 million
                Australians who bank on the go with the CommBank app.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Bilingual staff in some
                branches and language-enabled ATMs.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> An extensive Branch and
                ATM network available across Australia – including on some
                student campuses
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> A range of special offers
                are available for students – ask the staff at any CommBank
                branch for more details (and make sure you take your student ID
                or letter of enrolment when you do).
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Tips and guidance about
                moving to, and studying in, Australia available on their
                website.
              </li>
            </ul>
            <h5>Things you should know:</h5>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> :Commonwealth Bank of
                Australia ABN 48 123 123 124 is a company incorporated in
                Australia with limited liability and subject to Australian
                regulation.
              </li>
            </ul>
            <button style={exploreButtonStyle}>Explore more</button>
          </div>
        )}

        {selectedCountry === "Canada" && (
          <>
            <div style={bankOptionStyle}>
              <h4>CIBC</h4>
              <p>CIBC International Student Banking Offer (ISBO)</p>
              <p>
                As an international student who is preparing to study abroad, we
                know there’s a lot to do before you arrive, and that the banking
                system in Canada may be different from the one in your home
                country. That’s why we developed the CIBC ISBO Program. At CIBC,
                we’re dedicated to supporting you at every step of your journey
                in Canada
              </p>
              <p>Key Program Highlights:</p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Use our secure online
                  platform to submit your application within 5 minutes.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Conveniently make
                  payments in your preferred currency with no additional fee
                  prior to arrival in Canada.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Once funds have been
                  deposited into your GIC Program account, you’ll receive a
                  confirmation of funds letter for study permit application.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> View the status of your
                  application in real-time on our online platform.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Our team of experts is
                  available to assist you 24 hours a day and 7 days a week in
                  multiple languages.
                </li>
              </ul>
              <h5>Additional Benefits:</h5>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Enjoy the perks of
                  unlimited transactions and no monthly account fees up until
                  six months after your graduation date (up to four years).
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Access to free Interac
                  e-Transfers for transferring money from one Canadian account
                  to another.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Credit card options with
                  $0 annual fees and a minimum limit of $1000 are available.
                </li>
              </ul>
              <button style={exploreButtonStyle}>Explore more</button>
            </div>

            <div style={bankOptionStyle}>
              <h4>Simplii Financial</h4>
              <p>
                With Simplii Financial, international students can access a
                suite of financial services through the ISBO Program to make
                their banking journey in Canada as successful as possible!
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Submit your application online in just 5 minutes
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Receive a proof of funding letter for your study permit application within one business day of us receiving funds.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Take advantage of our no fee offer when you select to send funds in your local currency.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Easily apply for a Simplii Credit Card with a credit limit of up to $2,000 without any prior Canadian credit history while you complete your ISBO application.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span>Completely digital process to activate your account upon arrival - no need to visit a physical location.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Our team of experts is available to assist you 24 hours a day and 7 days a week.
                </li>
              </ul>
              <h5>Additional Benefits:</h5>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Enjoy no-fee daily banking with no minimum balance required.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Get access to free Interac e-Transfer® transactions and outbound payment services, like Global Money Transfer.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Multi-language support is available to answer any questions you may have.
                </li>
              </ul>
              <button style={exploreButtonStyle}>Explore more</button>
            </div>
          </>
        )}
      </div>

      <div style={footerSectionStyle}>
        <h4>Open a bank account overseas</h4>
        <div style={footerLinksStyle}>
          <div style={footerLinkItemStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/footer-bank-icon.png`}
              alt="Footer Bank Icon"
              style={footerIconStyle}
            />
            <p>Simplii Financial</p>
          </div>
          <div style={footerLinkItemStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/footer-bank-icon.png`}
              alt="Footer Bank Icon"
              style={footerIconStyle}
            />
            <p>CIBC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentbanking;
