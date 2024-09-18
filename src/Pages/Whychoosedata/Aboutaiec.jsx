import React from "react";
import FormPage from "../Homepage/FormPage";
import Footer from "../Homepage/Footer";

const Aboutaiec = () => {
  const containerStyle = {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  };

  const bannerStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: 'url("/assets/images/aus.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contentContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "left",
    padding: "40px 20px",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  };

  const buttonGroupStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 buttons per row
    gap: '10px', // space between buttons
    maxWidth: '900px', // limit the width for the button group
    margin: '20px auto', // center the button group horizontally
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: '2px solid #007bff',
    backgroundColor: 'white',
    color: '#007bff',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    flexGrow: 1, // make buttons have equal width
  };
  const buttonHoverStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      {/* Banner Section */}
      <div style={bannerStyle}>
        <img
          src="/path/to/your/banner-image.jpg"
          alt="Banner"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Content Section */}
      <div style={contentContainerStyle}>
        <h2 style={titleStyle}>About AIEC</h2>
        <p style={subtitleStyle}>
          AIEC is a leader in global education services. As an Australian listed
          company, we have operations in 57 countries and our websites attract
          100 million visits a year. We specialise in combining human expertise
          with our leading digital platform to help people get accepted into
          their ideal course, take an English language test or learn English in
          our schools.
        </p>
        <p style={paragraphStyle}>
          Our teams are side by side with our customers every day, at every step
          from course search through to starting their dream course or career.
          Our data insights are relied upon by organisations around the world to
          help ensure decisions are informed by the diverse needs, challenges
          and motivations of students.
        </p>
        <p style={paragraphStyle}>
          Most of all, we are proud of our people. It is our trusted people and
          processes which help our customers turn their study or English goals
          into a launchpad for their career.
        </p>
        <h3 style={titleStyle}>About AIEC Student Placement</h3>
        <p style={paragraphStyle}>
          Our premise is simple: International education thrives when students
          are matched with the right country, with the right course, with the
          right support system. AIEC is the only organisation by students’ sides,
          from their first course search, until they have found their feet in
          their new country.
        </p>
        <p style={paragraphStyle}>
          Our team of trusted education experts across the world, combined with
          our global digital platform, ensures that students can connect to
          life-changing study opportunities. We are proudly student-first. When
          the pandemic took hold, our counsellors stepped up to provide guidance
          to students and their families and help them navigate uncertainty.
        </p>
        <p style={paragraphStyle}>
          Our trusted human connections on a global scale, facilitated by our
          investment in technology and customer research, ensures the best
          matches for students and institutions. And now, our teams can use the
          insights from our leading digital platform to help students gain
          acceptance into the right course, faster.
        </p>
        <h3 style={titleStyle}>Learn More</h3>

        {/* Button Section */}
        <div style={buttonGroupStyle}>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Why choose AIEC?
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Study abroad counseling
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Pre-departure support
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            What we do?
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Events
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            How to find a course
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Visa application assistance
          </button>
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style = { ...buttonStyle, ...buttonHoverStyle })
            }
            onMouseOut={(e) => (e.target.style = buttonStyle)}
          >
            Living abroad support
          </button>
        </div>
      </div>
      <FormPage />
      <Footer />
    </div>
  );
};

export default Aboutaiec;
