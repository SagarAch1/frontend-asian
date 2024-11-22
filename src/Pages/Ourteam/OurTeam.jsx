import React from "react";

const OurTeam = () => {
  const styles = {
    teamSection: {
      display: "flex",
      height: "calc(100vh - 80px)", // Ensures the section takes up the full height minus navbar height
      marginTop: "80px", // Starts the section below the navbar
    },
    teamLeft: {
      flex: 1,
      backgroundColor: "rgba(0, 81, 77, 0.9)",
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/tem.png)`, // Set the image as the background
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "50px",
    },
    iconContainer: {
      textAlign: "center",
    },
    teamTitle: {
      color: "white",
      fontSize: "48px",
      fontWeight: "bold",
      marginTop: "20px",
      backgroundColor: "rgba(0, 81, 77, 0.7)",
      padding: "10px 20px",
      borderRadius: "10px",
    },
    teamRight: {
      flex: 2,
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://th.bing.com/th/id/R.5d3526b220c13130367c10ff87abb556?rik=%2fo4mFtsDOHvWiQ&pid=ImgRaw&r=0")',
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Aligns the content at the start (top) of the section
      padding: "50px",
      maxHeight: "100vh",
      overflowY: "auto", // Add scroll for overflow
      paddingTop: "100px", // Add extra padding to ensure content starts lower
    },
    teamMember: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "15px",
      padding: "20px",
      marginBottom: "43px",
      position: "relative",
    },
    memberPhoto: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      overflow: "hidden",
      border: "5px solid white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      marginRight: "20px",
    },
    memberPhotoImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    memberInfo: {
      color: "black",
    },
    memberInfoName: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "black",
    },
    memberInfoTitle: {
      fontSize: "18px",
      fontWeight: "normal",
      color: "black",
    },
    memberInfoDescription: {
      color: "black",
      fontSize: "14px",
      marginTop: "10px",
    },
  };

  return (
    <section style={styles.teamSection}>
      {/* Left Section */}
      <div style={styles.teamLeft}>
        <div style={styles.iconContainer}>
          <h1 style={styles.teamTitle}>Our Team</h1>
        </div>
      </div>

      {/* Right Section */}
      <div style={styles.teamRight}>
        {/* Member 1 */}
        <div style={styles.teamMember}>
          <div style={styles.memberPhoto}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/bhisma.jpg`}
              alt="Bhisma  Rayamaji"
              style={styles.memberPhotoImg}
            />
          </div>
          <div style={styles.memberInfo}>
            <h3 style={styles.memberInfoName}>Bhisma Rayamaji</h3>
            <h4 style={styles.memberInfoTitle}>Chief Executive Officer</h4>
            <p style={styles.memberInfoDescription}>
              As CEO of AIEC-Global Global, I'm dedicated to guiding students
              toward their international education goals with expertise and
              support.
              {/* As the CEO of Aice Global, I am committed to ensuring that every
              student we guide receives the highest level of expertise and
              personalized support to achieve their international education
              goals. */}
            </p>
          </div>
        </div>

        {/* Member 2 */}
        <div style={styles.teamMember}>
          <div style={styles.memberPhoto}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aakash.jpg`}
              alt="Aakash Shrestha"
              style={styles.memberPhotoImg}
            />
          </div>
          <div style={styles.memberInfo}>
            <h3 style={styles.memberInfoName}>Aakash Shrestha</h3>
            <h4 style={styles.memberInfoTitle}>Branch Manager</h4>
            <p style={styles.memberInfoDescription}>
              As Branch Manager, I'm committed to helping students reach their
              study abroad goals with dedicated support and guidance.
            </p>
          </div>
        </div>
        <div style={styles.teamMember}>
          <div style={styles.memberPhoto}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/me.jpg`}
              alt="Sagar Acharya"
              style={styles.memberPhotoImg}
            />
          </div>
          <div style={styles.memberInfo}>
            <h3 style={styles.memberInfoName}>Sagar Acharya</h3>
            <h4 style={styles.memberInfoTitle}>IT Head</h4>
            <p style={styles.memberInfoDescription}>
              As IT Head, I ensure our technology supports seamless, secure
              services, empowering students on their journey to global
              education.
            </p>
          </div>
        </div>

        {/* Member 3 */}
        <div style={styles.teamMember}>
          <div style={styles.memberPhoto}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Garima .jpg`}
              alt="Garima Bista"
              style={styles.memberPhotoImg}
            />
          </div>
          <div style={styles.memberInfo}>
            <h3 style={styles.memberInfoName}>Garima Bista</h3>
            <h4 style={styles.memberInfoTitle}>Head Counselor</h4>
            <p style={styles.memberInfoDescription}>
              As Head Counselor, I'm dedicated to guiding students with expert
              advice and personalized support for their study abroad journey.
            </p>
          </div>
        </div>
        <div style={styles.teamMember}>
          <div style={styles.memberPhoto}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/puja.png`}
              alt="Puja Dahal"
              style={styles.memberPhotoImg}
            />
          </div>
          <div style={styles.memberInfo}>
            <h3 style={styles.memberInfoName}>Puja Dahal</h3>
            <h4 style={styles.memberInfoTitle}>Academic Head</h4>
            <p style={styles.memberInfoDescription}>
              As Academic Head, I'm focused on ensuring students have access to
              quality guidance and resources to excel in their international
              studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
