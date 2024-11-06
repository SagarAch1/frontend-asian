import React from 'react';

const SampleDocs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '20px 0', position: 'relative' }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/new.jpeg`}
          alt="Banner"
          style={{ width: '100%', height: 'auto' }}
        />
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', color: '#333' }}>
          <h1>Sample Docs</h1>
          <p>Asian Education {'>'} Sample Docs</p>
        </div>
      </div>

      {/* Document Boxes */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '40px 0' }}>
        {['Sample One', 'Affidavit of Sponsorship', 'Work Experience'].map((title, index) => (
          <div key={index} style={{ width: '250px', textAlign: 'center', padding: '20px', backgroundColor: '#0056b3', color: '#fff', borderRadius: '5px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>ASIAN INTERNATIONAL EDUCATION AND MIGRATION SERVICES PTY LTD</h3>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{title.toUpperCase()}</h2>
            <p style={{ color: '#ccc', fontSize: '14px', marginTop: '10px' }}>{title}</p>
            <button style={{ backgroundColor: '#ff6600', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '5px', marginTop: '10px' }}>Download</button>
          </div>
        ))}
      </div>

      {/* Accreditation and Membership Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '40px 0' }}>
        {['Accreditation', 'Professional Certification', 'Professional Membership'].map((category, index) => (
          <div key={index} style={{ width: '150px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{category.toUpperCase()}</h3>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aff.png`}
              alt={category}
              style={{ width: '100%', height: 'auto', borderRadius: '5px', padding: '10px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleDocs;
