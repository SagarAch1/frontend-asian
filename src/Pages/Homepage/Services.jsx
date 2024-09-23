import React from 'react';

const services = [
  { 
    icon: '🔍', 
    title: 'Course Subjects', 
    description: 'Explore different course subjects that align to your study objectives.', 
    link: '/browsesubject',
  },
  { 
    icon: '🎓', 
    title: 'Scholarships', 
    description: 'Search more than 5,000 scholarships offered by over 370 institutions across the world.', 
    link: '#',
  },
  { 
    icon: '⚡', 
    title: 'Check your eligibility before applying', 
    description: 'FastLane allows you to see if you can get into a course before you apply.', 
    link: '#',
  },
  { 
    icon: '💼', 
    title: 'Support with applications', 
    description: 'Expert counselors can help you apply to multiple courses.', 
    link: '/howdoiapply',
  },
  { 
    icon: '📱', 
    title: 'AIEC Live app', 
    description: 'Download the AIEC Live app to browse and shortlist courses, track your applications, and much more.', 
    link: '#',
  },
  { 
    icon: '📅', 
    title: 'Events', 
    description: 'Explore events where you can meet with partner universities and discuss your dream to study abroad.', 
    link: '#',
  },
];

const ServicesSection = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f0f4f8',
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const cardStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
  };

  const iconStyle = {
    fontSize: '32px',
    color: '#007bff',
    marginBottom: '15px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '15px',
  };

  const linkStyle = {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitleStyle}>Services</h2>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={cardStyle} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div>
              <div style={iconStyle}>{service.icon}</div>
              <h3 style={titleStyle}>{service.title}</h3>
              <p style={descriptionStyle}>{service.description}</p>
            </div>
            <a href={service.link} style={linkStyle}>Learn More &gt;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
