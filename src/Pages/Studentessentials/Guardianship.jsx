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
      textAlign: 'center',
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
      maxWidth: '800px',
      margin: '0 auto',
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
      width: '250px',
      margin: '0 20px',
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
    <>
      <div style={styles.container}>
        <section style={styles.header}>
          <h1 style={styles.headerTitle}>Guardianship</h1>
        </section>

        <div style={styles.contentSection}>
          <h2 style={styles.mainTitle}>We will locate a guardian for you if you are under the age of 18.</h2>
          <p>
            Prior to their arrival in Australia, all international students under the age of eighteen must have approved welfare plans in place. To help provide welfare services to our students, AIEC Australia has partnered with ISA Student Advocates.
          </p>
          <p>Throughout your academic journey, your safety and wellbeing are our first priority.</p>

          <h3 style={styles.subTitle}>Guardians you can trust</h3>
          <p>
            A nationwide network of knowledgeable and compassionate guardians is available to AIEC. Speak with us about setting up a guardian for you until you become 18 if you don't have a family member in your destination city to take care of you.
          </p>

          <h3 style={styles.subTitle}>Reliable care and support</h3>
          <p>
            Your guardian wants to help you during your study abroad experience. They will also be beneficial to you in other ways, such as helping you get settled and offering study tips. They will even assist you in finding social and extracurricular activities and meeting new people.
          </p>
        </div>

        {/* Features section */}
        <div style={styles.featureSection}>
          <div style={styles.feature}>
            <FontAwesomeIcon icon={faHandsHelping} style={styles.icon} />
            <h4 style={styles.featureTitle}>ISA Student Advocates</h4>
            <p style={styles.featureText}>
              ISA Student Advocates has been selected by AIEC Education to help deliver authorised welfare services to our students.
            </p>
          </div>

          <div style={styles.feature}>
            <FontAwesomeIcon icon={faShieldAlt} style={styles.icon} />
            <h4 style={styles.featureTitle}>Your safety is our priority</h4>
            <p style={styles.featureText}>
              Under Australian law, all of our guardians go through a thorough police check.
            </p>
          </div>

          <div style={styles.feature}>
            <FontAwesomeIcon icon={faCheckCircle} style={styles.icon} />
            <h4 style={styles.featureTitle}>Continued support</h4>
            <p style={styles.featureText}>
              Guardians keep your parents and school provider informed about your development on a regular basis.
            </p>
          </div>
        </div>
      </div>

      {/* Footer outside the main container */}
      <Footer />
    </>
  );
};

export default Guardianship;
