import React from 'react';
import Footer from './Footer';
import Contact from '../Contact/Contact';

const guides = [
  { title: 'Newzeland', buttonText: 'Download', link: 'https://docs.google.com/document/d/15FyQBQvEAa2dBYnc7X09yBFDIt3PPSRaC0zJCm4IZCM/edit?tab=t.0#heading=h.uv3s33p9qj21' },
  
];

const Newzelandresource = () => {
  return (
    <>
      <div style={styles.container}>
        <div style={{ backgroundColor: '#ffffff', textAlign: 'center', padding: '20px 0', position: 'relative', marginBottom: '40px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/aab.png`}
            alt="Banner"
            style={{ width: '2000px', height: '400px' }}
          />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', color: '#333' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Sample Docs</h1>
            <p style={{ fontSize: '18px', color: '#777' }}>Asian Education {'>'} Sample Docs</p>
          </div>
        </div>

        {/* Display guides in rows of 2 */}
        <div style={styles.guideContainer}>
          {guides.map((guide, index) => (
            <div key={index} style={styles.card}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/studyaustralia.png`}
                alt="Study in Australia"
                style={styles.image}
              />
              <div style={styles.title}>{guide.title}</div>
              <button style={styles.button} onClick={() => window.open(guide.link, '_blank')}>
                {guide.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Accreditation and Membership with Responsive Grid Design */}
        {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', paddingBottom: '50px', flexWrap: 'wrap', marginTop: '50px' }}>
          {[
            { title: 'Accreditation', images: [{ src: 'aff.png', url: 'https://www.icef.com/agency/0010J000026RLxMQAW' }] },
            { title: 'Professional Certification', images: [{ src: 'itac.png', url: 'https://www.icef.com/academy/icef-trained-agent-counsellors-itacs-list/' }, { src: 'toefl.jpg', url: 'https://www.ets.org/toefl/institutions/ibt.html' }, { src: 'isana.png', url: 'https://isana.org.au/' }, { src: 'qeac.png', url: 'https://www.icef.com/academy/qualified-education-agent-counsellors-qeacs-list/' }, { src: 'think-new.jpg', url: 'https://thinknewnz.com/' }] },
            { title: 'Professional Membership', images: [{ src: 'naaer.jpg', url: 'https://www.naaer.org/' }, { src: 'ecan.jpg', url: 'https://ecan.org.np/' }, { src: 'uni.jpg', url: 'https://www.uniagents.com/' }] }
          ].map((item, index) => (
            <div key={index} style={styles.accreditationCard}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0056b3', marginBottom: '15px' }}>{item.title.toUpperCase()}</h3>
              <div style={styles.grid}>
                {item.images.map((img, imgIndex) => (
                  <a key={imgIndex} href={img.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{ width: '100%', height: '100px', position: 'relative' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/${img.src}`}
                        alt={item.title}
                        style={styles.gridImage}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <Contact />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  guideContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    width: '250px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#ff5722',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  accreditationCard: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
    border: '3px solid #0056b3',
    textAlign: 'center',
    position: 'relative',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
    gap: '10px',
    padding: '10px',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'contain',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.1)',
  },
};

export default Newzelandresource;
