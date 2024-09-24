import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScholarshipPage = () => {
    const navigate = useNavigate();

    // Styles
    const styles = {
        container: {
            fontFamily: 'Aptos, sans-serif',
        },
        banner: {
            position: 'relative',
            width: '100%',
            height: '300px',
        },
        bannerImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/is.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        bannerText: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
        },
        heading: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        searchButton: {
            backgroundColor: '#e54b4b',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            marginTop: '20px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            borderRadius: '25px',
            transition: 'background-color 0.3s ease',
        },
        browseSection: {
            padding: '50px 20px',
            display: 'flex',
            justifyContent: 'center',
        },
        sectionContainer: {
            maxWidth: '1000px',
            width: '100%',
            textAlign: 'center',
        },
        sectionHeading: {
            fontSize: '2rem',
            marginBottom: '25px',
            fontWeight: '600',
        },
        buttonGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',  // Two columns
            gap: '25px',
        },
        button: {
            backgroundColor: '#fff',
            border: '2px solid #ccc',
            padding: '15px 20px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
        },
        viewAll: {
            marginTop: '30px',
        },
        viewAllLink: {
            textDecoration: 'none',
            color: '#007bff',
            fontSize: '1.2rem',
            fontWeight: '500',
        },
    };

    // Hover effect function
    const handleMouseEnter = (e) => {
        e.target.style.borderColor = '#007bff'; // Change outline to blue on hover
    };

    const handleMouseLeave = (e) => {
        e.target.style.borderColor = '#ccc'; // Reset outline color when not hovering
    };

    // Navigation on button click (country-specific routes)
    const handleButtonClick = (path) => {
        navigate(`/${path}`);
    };

    return (
        <div style={styles.container}>
            {/* Top Banner Section */}
            <div style={styles.banner}>
                <div style={styles.bannerImage} />
                <div style={styles.bannerText}>
                    <h1 style={styles.heading}>Scholarships for international students studying abroad</h1>
                    <button style={styles.searchButton}>Search Scholarship</button>
                </div>
            </div>

            {/* Browse Section */}
            <section style={styles.browseSection}>
                <div style={styles.sectionContainer}>
                    {/* By Study Levels */}
                    <div>
                        <h2 style={styles.sectionHeading}>By study levels</h2>
                        <div style={styles.buttonGrid}>
                            {[
                                { label: 'School', path: 'schoolscholar' },
                                { label: 'Foundation', path: 'foundationscholar' },
                                { label: 'Postgraduate', path: 'postgraduatescholar' },
                                { label: 'VET', path: 'vetscholar' },
                                { label: 'Pre-degree & Vocational', path: 'predegreevocational' },
                                { label: 'Undergraduate', path: 'undergraduatescholar' },
                                { label: 'Doctorate', path: 'doctoratescholrship' },
                            ].map(({ label, path }) => (
                                <button
                                    key={label}
                                    style={styles.button}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleButtonClick(path)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* By Study Destinations */}
                    <div style={{ marginTop: '40px' }}>
                        <h2 style={styles.sectionHeading}>By study destinations</h2>
                        <div style={styles.buttonGrid}>
                            <button
                                style={styles.button}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleButtonClick('scholarshipsinaustralia')}
                            >
                                Australia
                            </button>
                            <button
                                style={styles.button}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleButtonClick('scholarshipsinuk')}
                            >
                                United Kingdom
                            </button>
                            <button
                                style={styles.button}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleButtonClick('scholarshipsinusa')}
                            >
                                United States
                            </button>
                            <button
                                style={styles.button}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleButtonClick('scholarshipsincanada')}
                            >
                                Canada
                            </button>
                            <button
                                style={styles.button}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleButtonClick('scholarshipsinnewzeland')}
                            >
                                New Zealand
                            </button>
                        </div>
                    </div>

                    {/* View all scholarships link */}
                    <div style={styles.viewAll}>
                        <a href="#all-scholarships" style={styles.viewAllLink}>View all scholarships</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScholarshipPage;
