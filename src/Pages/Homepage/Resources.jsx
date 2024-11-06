import React from 'react';

const SampleDocs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f9' }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '20px 0', position: 'relative', marginBottom: '40px' }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/new.jpeg`}
          alt="Banner"
          style={{ width: '2000px', height: '400px' }}
        />
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', color: '#333' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Sample Docs</h1>
          <p style={{ fontSize: '18px', color: '#777' }}>Asian Education {'>'} Sample Docs</p>
        </div>
      </div>

      {/* Document Boxes with Wow Design */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', paddingBottom: '50px' }}>
        {['Sample One', 'Affidavit of Sponsorship', 'Work Experience'].map((title, index) => (
          <div key={index} style={{
            width: '280px',
            textAlign: 'center',
            padding: '25px',
            backgroundColor: '#fff',
            color: '#333',
            borderRadius: '15px',
            boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
            border: '2px solid #e0e0e0',
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
          }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#666' }}>ASIAN INTERNATIONAL EDUCATION AND MIGRATION SERVICES PTY LTD</h3>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#0056b3', margin: '10px 0' }}>{title.toUpperCase()}</h2>
            <p style={{ color: '#888', fontSize: '14px', marginTop: '10px' }}>{title}</p>
            <button style={{
              backgroundColor: '#ff6600',
              border: 'none',
              color: '#fff',
              padding: '12px 25px',
              borderRadius: '8px',
              marginTop: '20px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}>Download</button>
          </div>
        ))}
      </div>

      {/* Accreditation and Membership with Responsive Grid Design */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', paddingBottom: '50px', flexWrap: 'wrap' }}>
        {[
          { title: 'Accreditation', images: [{ src: 'aff.png', url: 'https://www.icef.com/agency/0010J000026RLxMQAW' }] },
          { title: 'Professional Certification', images: [{ src: 'toefl.jpg', url: 'https://www.example.com/hij' }, { src: 'isana.png', url: 'https://www.example.com/klm' }, { src: 'qeac.png', url: 'https://www.example.com/efg' }, { src: 'think-new.jpg', url: 'https://www.example.com/efg' }] },
          { title: 'Professional Membership', images: [{ src: 'naaer.jpg', url: 'https://www.example.com/nop' }, { src: 'ecan.jpg', url: 'https://www.example.com/qrs' }, { src: 'uni.jpg', url: 'https://www.example.com/tuv' }] }
        ].map((item, index) => (
          <div key={index} style={{
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
            border: '3px solid #0056b3',
            textAlign: 'center',
            position: 'relative',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0056b3', marginBottom: '15px' }}>{item.title.toUpperCase()}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`, // Responsive grid layout
              gap: '10px',
              padding: '10px',
            }}>
              {item.images.map((img, imgIndex) => (
                <a key={imgIndex} href={img.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div style={{ width: '100%', height: '100px', position: 'relative' }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/${img.src}`}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                        objectFit: 'contain', // Ensures full image is visible without cropping
                        boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleDocs;
