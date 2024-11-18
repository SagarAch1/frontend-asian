import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import FormPage from './FormPage';

const destinations = [
  {
    name: "Australia",
    imgPath: `${process.env.PUBLIC_URL}/assets/images/r1a.png`,
    route: "/resourceaustralia",
  },
  {
    name: "Canada",
    imgPath: `${process.env.PUBLIC_URL}/assets/images/r1c.png`,
    route: "/resourcecanada",
  },
  {
    name: "United Kingdom (UK)",
    imgPath: `${process.env.PUBLIC_URL}/assets/images/r1uk.png`,
    route: "/resourceuk",
  },
  {
    name: "New Zealand",
    imgPath: `${process.env.PUBLIC_URL}/assets/images/r1n.png`,
    route: "/newzelandresource",
  },
  {
    name: "USA",
    imgPath: `${process.env.PUBLIC_URL}/assets/images/r1usa.png`,
    route: "/resourceusa",
  },
];

const SampleDocs = () => {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route);
  };

  const documentLinks = [
    "https://docs.google.com/document/d/1zbkuE0ejQAoqKJ7HcAm0buB87PbEqRso1i1lutApWGA/edit?tab=t.0",
    "https://docs.google.com/document/d/2zbkuE0ejQAoqKJ7HcAm0buB87PbEqRso1i1lutApWGA/edit?tab=t.0",
    "https://docs.google.com/document/d/3zbkuE0ejQAoqKJ7HcAm0buB87PbEqRso1i1lutApWGA/edit?tab=t.0",
  ];

  return (
    <>
      {/* Top Banner Image */}
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          width: '100%', // Make the image full width
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '50px',
          position: 'relative',
          marginTop: '62px', // Ensure it aligns after the navbar
        }}
      >
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>Sample Docs</h1>
        <p style={{ fontSize: '18px', color: '#ddd', margin: 0 }}>Asian Education {'>'} Sample Docs</p>
      </div>

      {/* Main Content */}
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f9' }}>
        {/* Destination Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            padding: '20px',
          }}
        >
          {destinations.map((destination, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                padding: '10px',
              }}
              onClick={() => handleImageClick(destination.route)}
            >
              <img
                src={destination.imgPath}
                alt={destination.name}
                style={{
                  width: '100%',
                  height: '150px',
                  maxWidth: '250px',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <p style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>{destination.name}</p>
            </div>
          ))}
        </div>

        {/* Document Boxes */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', paddingBottom: '50px' }}>
          {['Sample One', 'Affidavit of Sponsorship', 'Work Experience'].map((title, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '200px',
                maxWidth: '250px',
                textAlign: 'center',
                padding: '15px 25px',
                backgroundColor: '#0056b3',
                color: '#fff',
                borderRadius: '15px',
                boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
                border: '2px solid #e0e0e0',
                transition: 'transform 0.3s ease',
                overflow: 'hidden',
              }}
            >
              <h3 style={{ fontSize: '12px', marginBottom: '5px', color: '#ffffff' }}>ASIAN INTERNATIONAL EDUCATION AND MIGRATION SERVICES PTY LTD</h3>
              <h2 style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff', margin: '10px 0' }}>{title.toUpperCase()}</h2>
              <button
                onClick={() => window.open(documentLinks[index], '_blank')}
                style={{
                  backgroundColor: '#ff6600',
                  border: 'none',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  marginTop: '15px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
              >
                Download
              </button>
            </div>
          ))}
        </div>

        <FormPage />
      </div>

      <Footer />
    </>
  );
};

export default SampleDocs;
