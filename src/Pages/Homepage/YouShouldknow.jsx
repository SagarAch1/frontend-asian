import React from 'react';

const Youshouldknow = () => {
  const mainImageStyle = {
    width: '100%',
    maxWidth: '400px',
    marginRight: '20px',
    borderRadius: '8px',
  };

  const sideImageStyle = {
    width: '100px',
    height: '100px',
    marginRight: '15px',
    borderRadius: '8px',
  };

  const infoSectionStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };

  const infoContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const infoLeftStyle = {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  };

  const infoRightStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const infoBoxStyle = {
    display: 'flex',
    marginBottom: '20px',
  };

  const infoTextStyle = {
    margin: 0,
  };

  const infoTextHeaderStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#0056b3',
  };

  const infoTextParagraphStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={infoSectionStyle}>
      <h2 style={sectionTitleStyle}>You should also know</h2>
      <div style={infoContainerStyle}>
        <div style={infoLeftStyle}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/you1.png`}
            alt="Global events"
            style={mainImageStyle}
          />
          <div>
            <h3 style={infoTextHeaderStyle}>Global events</h3>
            <p style={infoTextParagraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam cum ita placeat, ne eorum quidem bonorum, quae nos bona vere appellemus, frequentia beatiorem vitam fieri aut magis expetendam aut pluris aestimandam, certe minus ad beatam vitam pertinet multitudo corporis.
            </p>
          </div>
        </div>
        <div style={infoRightStyle}>
          <div style={infoBoxStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/you2.jpeg`}
              alt="Live life in the FastLane"
              style={sideImageStyle}
            />
            <div>
              <h4 style={infoTextHeaderStyle}>Live life in the FastLane</h4>
              <p style={infoTextParagraphStyle}>
                You can get an express response from your dream university in seconds!
              </p>
            </div>
          </div>
          <div style={infoBoxStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/you3.webp`}
              alt="Visa application assistance"
              style={sideImageStyle}
            />
            <div>
              <h4 style={infoTextHeaderStyle}>Visa application assistance</h4>
              <p style={infoTextParagraphStyle}>
                Applying for visas can be challenging, but our team ensures you access accurate information for a smoother process.
              </p>
            </div>
          </div>
          <div style={infoBoxStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/OIP.jpeg`}
              alt="Third Assistance"
              style={sideImageStyle}
            />
            <div>
              <h4 style={infoTextHeaderStyle}>Third Assistance</h4>
              <p style={infoTextParagraphStyle}>
                This is a placeholder for the third informational block.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youshouldknow;
