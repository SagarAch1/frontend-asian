import React, { useState } from 'react';
import Footer from '../Homepage/Footer';

const PestControl = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/new.jpeg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '50px',
  };

  const statisticsSection = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const statItemStyle = {
    width: '22%',
    textAlign: 'center',
    fontSize: '16px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#333',
  };

  const iconStyle = {
    fontSize: '40px',
    color: '#4CAF50', // Change color to make it attractive
    marginBottom: '10px',
  };

  const faqSectionStyle = {
    padding: '40px',
    backgroundColor: '#f1f1f1',
  };

  const faqItemStyle = {
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  };

  const faqTitleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555',
  };

  const faqContentStyle = {
    padding: '10px 0',
    fontSize: '14px',
    color: '#666',
  };

  const faqItems = [
    {
      title: 'About Pest and Weed Control',
      content: 'Pest and weed control involves using scientific techniques to manage pests and enhance crop yield. Various approaches are used in agriculture to mitigate risks.'
    },
    {
      title: 'Is Pest and Weed Control right for me?',
      content: 'This field is perfect for those with an interest in biology, agriculture, and environmental science. It requires analytical skills and hands-on application in the field.'
    },
    {
      title: 'Pest and Weed Control study options and costs',
      content: 'There are multiple study options ranging from certificates to degrees. Costs vary by institution and location, but typically range from $10,000 to $30,000 annually.'
    },
    {
      title: 'Future outlook',
      content: 'The future of pest and weed control is promising, with an increasing need for sustainable agriculture and environmental protection. Job growth is expected in the coming years.'
    },
    {
      title: 'Career pathways for Pest and Weed Control graduates',
      content: 'Graduates can pursue careers in agricultural management, research, environmental consulting, and pest control services, with potential for international work.'
    }
  ];

  return (
    <div>
      {/* Top section with background image */}
      <div style={sectionStyle}>
        <h1>Study Pest and Weed Control Abroad</h1>
        <p>
          Pest and Weed Control is the science of utilizing tools and tactics to assess and manage pests for greater crop yield. Students of this programme find employment in sectors such as agri-business, natural resource management, and crop production.
        </p>
      </div>

      {/* Statistics section */}
      <div style={statisticsSection}>
        <div style={statItemStyle}>
          <div style={iconStyle}>🌟</div>
          <p><strong>$74,160</strong>: Average annual salary for agricultural scientists</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>📈</div>
          <p><strong>Projected job openings</strong> for agricultural workers every year this decade</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>💼</div>
          <p><strong>9% projected job growth</strong> for agricultural scientists by 2030</p>
        </div>
        <div style={statItemStyle}>
          <div style={iconStyle}>🔧</div>
          <p><strong>Projected job openings</strong> for ground maintenance workers every year</p>
        </div>
      </div>

      {/* FAQ section */}
      <div style={faqSectionStyle}>
        <h2>Subject Overview</h2>
        {faqItems.map((item, index) => (
          <div key={index} style={faqItemStyle}>
            <div style={faqTitleStyle} onClick={() => handleToggle(index)}>
              <span>{item.title}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div style={faqContentStyle}>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default PestControl;
