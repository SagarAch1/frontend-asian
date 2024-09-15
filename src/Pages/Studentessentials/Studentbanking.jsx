import React, { useState } from 'react';

const Studentbanking = () => {
  // State to manage selected country
  const [selectedCountry, setSelectedCountry] = useState('Australia');

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  // Updated background gradient style
  const bannerStyle = {
    background: 'linear-gradient(to right, #e6f4ff, #ffffff)',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
  };

  const contentSectionStyle = {
    marginTop: '20px',
  };

  const countrySelectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0',
  };

  // Updated button styles based on the image provided
  const countryButtonsStyle = {
    display: 'flex',
    gap: '10px',
  };

  const buttonBaseStyle = {
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '150px',
    textAlign: 'center',
  };

  const activeButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#0066cc',
    color: '#fff',
    border: 'none',
  };

  const inactiveButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#f0f0f0',
    color: '#333',
  };

  const bankOptionStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '5px',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const liStyle = {
    paddingLeft: '20px',
    position: 'relative',
  };

  const checkmarkStyle = {
    content: '✔',
    color: 'green',
    position: 'absolute',
    left: '0',
  };

  const exploreButtonStyle = {
    backgroundColor: '#0066cc',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
    borderRadius: '5px',
  };

  const footerSectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginTop: '40px',
    textAlign: 'center',
  };

  const footerLinksStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const footerLinkItemStyle = {
    textAlign: 'center',
  };

  const footerIconStyle = {
    width: '40px',
    height: '40px',
    marginBottom: '10px',
  };

  // Function to handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div style={containerStyle}>
      <div style={bannerStyle}>
        <h2>Student Banking</h2>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/bank-icon.png`}
            alt="Bank Icon"
            style={iconStyle}
          />
        </div>
      </div>

      <div style={contentSectionStyle}>
        <h3>Open a bank account even before you arrive!</h3>
        <p>
          We’ve established exclusive collaborations with top financial institutions across key destinations. This means you can open a bank account, manage your
          finances, and enjoy competitive banking services even before you set foot in your chosen country.
        </p>

        <div style={countrySelectionStyle}>
          <p>Please select your destination country:</p>
          <div style={countryButtonsStyle}>
            <button
              style={selectedCountry === 'Australia' ? activeButtonStyle : inactiveButtonStyle}
              onClick={() => handleCountrySelect('Australia')}
            >
              Australia
            </button>
            <button
              style={selectedCountry === 'Canada' ? activeButtonStyle : inactiveButtonStyle}
              onClick={() => handleCountrySelect('Canada')}
            >
              Canada
            </button>
          </div>
        </div>

        {selectedCountry === 'Australia' && (
          <div style={bankOptionStyle}>
            <h4>Simplii Financial</h4>
            <p>
              With Simplii Financial, international students can access a suite of financial services through the SISO Program to make their banking journey in Canada
              easy and applicable:
            </p>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Submit your application online in just 15 minutes.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Tracking status of your fund transfers and pre-arrival applications.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Trade advantage of currency conversions for better rates.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Apply for a Simplii Financial Card.
              </li>
            </ul>
            <h5>Additional Benefits:</h5>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Enjoy global online banking with no minimum balance required.
              </li>
              <li style={liStyle}>
                <span style={checkmarkStyle}>✔</span> Access to international transfers and outbound payments.
              </li>
            </ul>
            <button style={exploreButtonStyle}>Explore more</button>
          </div>
        )}

        {selectedCountry === 'Canada' && (
          <>
            <div style={bankOptionStyle}>
              <h4>Simplii Financial</h4>
              <p>
                With Simplii Financial, international students can access a suite of financial services through the SISO Program to make their banking journey in
                Canada easy and applicable:
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Submit your application online in just 15 minutes.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Tracking status of your fund transfers and pre-arrival applications.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Trade advantage of currency conversions for better rates.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Apply for a Simplii Financial Card.
                </li>
              </ul>
              <h5>Additional Benefits:</h5>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Enjoy global online banking with no minimum balance required.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Access to international transfers and outbound payments.
                </li>
              </ul>
              <button style={exploreButtonStyle}>Explore more</button>
            </div>

            <div style={bankOptionStyle}>
              <h4>CIBC</h4>
              <p>
                CIBC International Student Banking Offer (SBO) gives international students the convenience to manage finances from anywhere, including key highlights
                of the CIBC SBO Program:
              </p>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Submit your application online in 15 minutes.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Connect with support and assistance for pre-arrival banking services.
                </li>
              </ul>
              <h5>Additional Benefits:</h5>
              <ul style={ulStyle}>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> 24/7 customer service with multilingual support.
                </li>
                <li style={liStyle}>
                  <span style={checkmarkStyle}>✔</span> Access to international transfers and outbound payments.
                </li>
              </ul>
              <button style={exploreButtonStyle}>Explore more</button>
            </div>
          </>
        )}

        <div style={footerSectionStyle}>
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
    </div>
  );
};

export default Studentbanking;
