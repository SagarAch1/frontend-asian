import React from 'react';

const ScholarshipPage = () => {
    // Inline styles
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
        },
        searchButton: {
            backgroundColor: '#e54b4b',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            marginTop: '20px',
            cursor: 'pointer',
            fontSize: '1rem',
        },
        browseSection: {
            padding: '40px 20px',
            display: 'flex',
            justifyContent: 'center',
        },
        sectionContainer: {
            maxWidth: '1000px',
            width: '100%',
            textAlign: 'center',
        },
        sectionHeading: {
            fontSize: '1.8rem',
            marginBottom: '20px',
        },
        buttonGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',  // Two columns
            gap: '20px',
        },
        section: {
            marginBottom: '40px',
        },
        subHeading: {
            fontSize: '1.4rem',
            marginBottom: '10px',
        },
        button: {
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '10px 15px',
            cursor: 'pointer',
            transition: 'all 0.3s',
        },
        viewAll: {
            marginTop: '20px',
        },
        viewAllLink: {
            textDecoration: 'none',
            color: '#007bff',
            fontSize: '1rem',
        },
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
                    <div style={styles.section}>
                        <h2 style={styles.sectionHeading}>By study levels</h2>
                        <div style={styles.buttonGrid}>
                            <button style={styles.button}>School</button>
                            <button style={styles.button}>Foundation</button>
                            <button style={styles.button}>Postgraduate</button>
                            <button style={styles.button}>VET</button>
                            <button style={styles.button}>Pre-degree & Vocational</button>
                            <button style={styles.button}>Undergraduate</button>
                            <button style={styles.button}>Doctorate</button>
                        </div>
                    </div>
                    <div style={styles.section}>
                        <h2 style={styles.sectionHeading}>By study destinations</h2>
                        <div style={styles.buttonGrid}>
                            <button style={styles.button}>Australia</button>
                            <button style={styles.button}>United Kingdom</button>
                            <button style={styles.button}>United States</button>
                            <button style={styles.button}>New Zealand</button>
                            <button style={styles.button}>Canada</button>
                            <button style={styles.button}>Ireland</button>
                        </div>
                    </div>
                    <div style={styles.viewAll}>
                        <a href="#all-scholarships" style={styles.viewAllLink}>View all scholarships</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScholarshipPage;
