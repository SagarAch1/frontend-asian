import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faShieldAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Footer from '../Homepage/Footer';

const Guardianship = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#f5f9ff',
      padding: '40px',
      textAlign: 'center', // Center align the text
    },
    header: {
      backgroundColor: '#e8f0ff',
      padding: '70px',
    },
    headerTitle: {
      color: '#333',
      fontSize: '36px',
    },
    contentSection: {
      marginTop: '20px',
      maxWidth: '800px', // Limit the width of the content for better centering
      margin: '0 auto', // Center the content
      lineHeight: '1.6',
    },
    mainTitle: {
      fontSize: '28px',
      color: '#e53935',
    },
    subTitle: {
      color: '#333',
      marginTop: '20px',
    },
    featureSection: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px',
    },
    feature: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '250px', // Fix the width for uniform sizing
      margin: '0 20px', // Adds spacing between the feature blocks
    },
    icon: {
      fontSize: '36px',
      color: '#2196f3',
    },
    featureTitle: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#333',
    },
    featureText: {
      fontSize: '14px',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <section style={styles.header}>
        <h1 style={styles.headerTitle}>Guardianship</h1>
      </section>

      <div style={styles.contentSection}>
        <h2 style={styles.mainTitle}>If you're under 18, we'll find you a guardian</h2>
        <p>
          In Australia, all international students who are under 18 years of age need to have approved welfare arrangements in place before they arrive in the country. AIEC Australia has teamed up with ISA Student Advocates to assist in providing welfare services to our students.
        </p>
        <p>Your safety and well-being are our top priorities throughout your study journey.</p>

        <h3 style={styles.subTitle}>Guardians you can trust</h3>
        <p>
          AIEC has access to a nationwide network of caring and experienced guardians. If you don’t have a family member to look after you in your destination city, talk to us about arranging a guardian for you until you turn 18.
        </p>

        <h3 style={styles.subTitle}>Reliable care and support</h3>
        <p>
          Your guardian’s goal is to support you in your study abroad journey. You’ll also find them helpful in other ways, like settling you in and giving study advice. They’ll even help you meet new people and discover social and extracurricular activities.
        </p>
      </div>

      {/* Features section moved to the bottom */}
      <div style={styles.featureSection}>
        <div style={styles.feature}>
          <FontAwesomeIcon icon={faHandsHelping} style={styles.icon} />
          <h4 style={styles.featureTitle}>ISA Student Advocates</h4>
          <p style={styles.featureText}>
            AIEC Education have chosen ISA Student Advocates to assist in providing approved welfare services to our students.
          </p>
        </div>

        <div style={styles.feature}>
          <FontAwesomeIcon icon={faShieldAlt} style={styles.icon} />
          <h4 style={styles.featureTitle}>Your safety is our priority</h4>
          <p style={styles.featureText}>
            All our guardians undergo rigorous police checks in accordance with Australian law.
          </p>
        </div>

        <div style={styles.feature}>
          <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} />
          <h4 style={styles.featureTitle}>Continued support</h4>
          <p style={styles.featureText}>
            Guardians stay in regular contact with your parents and educational provider to update on your progress.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guardianship;
