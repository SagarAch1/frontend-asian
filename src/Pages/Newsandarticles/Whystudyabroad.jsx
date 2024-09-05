import React, { useRef } from 'react';

const WhyStudyAbroad = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const styles = {
    page: { fontFamily: 'Arial, sans-serif', padding: '20px' },
    headerSection: {
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/a2.webp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '100px 20px',
      textAlign: 'center',
      color: 'white',
    },
    headerTitle: { fontSize: '36px', fontWeight: 'bold' },
    subheader: { fontSize: '18px', marginTop: '10px' },
    contentSection: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: '20px',
      alignItems: 'center',
    },
    leftColumn: {
      gridColumn: '1 / 2',
    },
    rightColumn: {
      gridColumn: '2 / 4',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
    },
    videoContainer: {
      width: '100%', // Maintain box width
      height: '100%', // Set box height
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative', // For positioning play/pause button
    },
    video: {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    },
    playPauseButton: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: '#0056b3',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    signupSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      marginLeft: '20px',
    },
    signupButton: {
      backgroundColor: '#0056b3',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
    additionalSection: {
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    additionalTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '20px',
      borderBottom: '1px solid #ccc',
      paddingBottom: '10px',
      textAlign: 'left',
      maxWidth: '800px',
      width: '100%',
    },
    listItemTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '5px',
    },
    listItemLink: {
      color: '#0056b3',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <h1 style={styles.headerTitle}>Why study abroad?</h1>
        <p style={styles.subheader}>
          Learn how studying abroad opens a world of opportunities
        </p>
      </div>

      {/* Main Content Section */}
      <div style={styles.contentSection}>
        <div style={styles.leftColumn}>
          <h2>Expand your horizons, skills, and opportunities</h2>
          <p>
            Want to make an investment in yourself to secure a successful future? Studying abroad is a journey of a lifetime that opens up new possibilities and pathways. It is an opportunity to gain a world-class foreign education, develop a global mindset, learn new skills, and acquire vital expertise to boost your employability. So prepare yourself to take the leap and get ready to explore the world from an international student’s perspective!
          </p>
        </div>
        <div style={styles.videoContainer}>
          <video ref={videoRef} controls style={styles.video}>
            <source
              src={`${process.env.PUBLIC_URL}/assets/images/vid.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <button style={styles.playPauseButton} onClick={handlePlayPause}>
            Play/Pause
          </button> */}
        </div>
        <div style={styles.signupSection}>
          <p>One account for all your study abroad needs</p>
          <p>
            Create your profile and unlock a wide array of features, including personalized recommendations, fast-tracked applications, and much more.
          </p>
          <button style={styles.signupButton}>Sign up</button>
        </div>
      </div>

      {/* Additional Section */}
      <div style={styles.additionalSection}>
        <h2 style={styles.additionalTitle}>Discover how studying abroad can help you</h2>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>1. Benefits of studying abroad</h3>
          <p>From quality education, personal growth to career progression, discover how studying abroad can help you succeed through these helpful articles and videos.</p>
          <a href="#" style={styles.listItemLink}>What is studying abroad | Why study abroad | Study abroad vs study locally | Benefits</a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>2. The study abroad experience</h3>
          <p>Learn all about what it's like to experience life in a different country.</p>
          <a href="#" style={styles.listItemLink}>What's the experience like | How much does it typically cost?</a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>3. Breaking down the steps</h3>
          <p>Not sure where to start? Follow these simple steps.</p>
          <a href="#" style={styles.listItemLink}>Simple steps to study abroad</a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>4. Study abroad guide for parents</h3>
          <p>Learn more about how you can support your child’s overseas education journey with helpful resources such as articles and videos on what to expect and what it’s like living in a new country.</p>
          <a href="#" style={styles.listItemLink}>Study abroad parent's guide | Is it safe?</a>
        </div>
        <div style={styles.listItem}>
          <h3 style={styles.listItemTitle}>5. Hear from our students</h3>
          <p>If you’re interested in studying overseas, you can read and watch videos to hear first-hand experiences from our students to inform your study abroad decisions.</p>
          <a href="#" style={styles.listItemLink}>Hear from our students</a>
        </div>
      </div>
    </div>
  );
};

export default WhyStudyAbroad;
