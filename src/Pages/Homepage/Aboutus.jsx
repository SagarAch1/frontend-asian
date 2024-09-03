import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import FormPage from './FormPage';

// Counter component to handle the counting effect
const Counter = ({ endValue, duration, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = endValue / (duration / 100);
        const interval = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(interval);
            } else {
                setCount(Math.round(start));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [endValue, duration]);

    // Format the count with K suffix if it's in thousands
    const formattedCount = count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count;

    return <h2>{prefix}{formattedCount}{suffix}</h2>;
};

// Main component
const AIECGlobal = () => {
    const containerStyle = {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        marginBottom: '50px',
    };

    const topImageStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        objectFit: 'cover',
    };

    const textContainerStyle = {
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '800px',
        color: '#333',
    };

    const ausImageStyle = {
        width: '800px', // Adjust width for the second image
        height: '600px', // Adjust height for the second image
        objectFit: 'cover', // Ensures the image covers the area without distortion
        margin: '0 auto', // Center the image
        display: 'block',
    };

    const counterContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        gap: '30px',
    };

    const boxStyle = {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        transition: 'transform 0.3s ease',
        width: '200px',
    };

    const lineStyle = {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px',
        height: '3px',
        backgroundColor: 'red',
        transition: 'width 0.3s ease',
        visibility: 'hidden',
    };

    const hoverBoxStyle = {
        transform: 'scale(1.05)',
    };

    const hoverLineStyle = {
        visibility: 'visible',
        width: '100px',
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={containerStyle}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/top.png`}
                    alt="Top Image"
                    style={topImageStyle}
                />
            </div>
            <div style={textContainerStyle}>
                <h1 style={{ color: '#007BFF', fontWeight: 'bold' }}>Committed to Your Visa Success</h1>
                <h1 style={{ color: '#28A745' }}>- AIEC Global -</h1>
            </div>
            <div style={textContainerStyle}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    AIEC-GLOBAL comes up with up-to-date information in the arena of overseas studies with the deepest understanding. We have been assisting students not only for educational matters but also for their settlement in various nations around the world.
                </p>
            </div>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/about1.jpg`}
                alt="Second Image"
                style={ausImageStyle}
            />
            <div style={counterContainerStyle}>
                <div
                    style={{ ...boxStyle }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = hoverBoxStyle.transform;
                        e.currentTarget.querySelector('.line').style.visibility = hoverLineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = hoverLineStyle.width;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.line').style.visibility = lineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = lineStyle.width;
                    }}
                >
                    <Counter endValue={10000} duration={2000} />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Students</p>
                    <div className="line" style={lineStyle}></div>
                </div>
                <div
                    style={{ ...boxStyle }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = hoverBoxStyle.transform;
                        e.currentTarget.querySelector('.line').style.visibility = hoverLineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = hoverLineStyle.width;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.line').style.visibility = lineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = lineStyle.width;
                    }}
                >
                    <Counter endValue={94} duration={2000} suffix="%" />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Successful Visa Process Rate</p>
                    <div className="line" style={lineStyle}></div>
                </div>
                <div
                    style={{ ...boxStyle }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = hoverBoxStyle.transform;
                        e.currentTarget.querySelector('.line').style.visibility = hoverLineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = hoverLineStyle.width;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.querySelector('.line').style.visibility = lineStyle.visibility;
                        e.currentTarget.querySelector('.line').style.width = lineStyle.width;
                    }}
                >
                    <Counter endValue={22} duration={2000} suffix="+" />
                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Pro Consultants</p>
                    <div className="line" style={lineStyle}></div>
                </div>
            </div>
            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '45%' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007BFF' }}>Guiding Your Path with Our Mission</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        At Asian Education, we offer personalized counseling to help students choose suitable vocational and higher education paths right from high school.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Tailored to individual needs, our services guide you towards optimal academic and career opportunities, locally and abroad.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Visit us for expert guidance in realizing your educational potential.
                    </p>
                </div>
                <div style={{ width: '45%' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/about_img3.jpg`}
                        alt="Travel"
                        style={ausImageStyle}
                    />
                </div>
            </div>
            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '45%' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/about_img3.jpg`}
                        alt="Consultation"
                        style={ausImageStyle}
                    />
                </div>
                <div style={{ width: '45%' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28A745' }}>Our Consultancy Vision</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Through unparalleled commitment, we provide world-class education consulting services to help students achieve academic excellence and build fulfilling careers globally.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        We are proud to contribute to the success stories of thousands of students around the world.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Partner with us for a seamless journey towards academic and professional success.
                    </p>
                </div>
            </div>
            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '45%' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007BFF' }}>Message From Our CEO</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Greetings from AIEC-Global! We are thrilled to have you visit our website. AIEC-Global, your beacon for studying abroad, is dedicated to guiding you towards the right educational destination. Our mission is to empower the younger generation for a vibrant future by offering top-notch services through our experienced experts in overseas studies. We pride ourselves on our strong partnerships with renowned educational institutions worldwide.

Established over a decade ago, we started with a vision to support ambitious students in their life-changing journey of studying abroad. Our passion has evolved into deep-rooted beliefs, driving us to become one of Nepal’s leading and fastest-growing educational consultancies. Our success stems from the unity, commitment, and dedication of our team. We provide free-of-cost counseling services and offer expert training for exams like IELTS, PTE, TOEFL, SAT, and GRE through our highly competent trainers.

As leaders in the field, we value your feedback to continually enhance our services and stay current in meeting your needs. Our goal is to provide you with comprehensive insights into studying abroad right at your fingertips. We extend our gratitude for choosing AIEC-Global and encourage you to visit our office to learn more about our offerings. Thank you for placing your trust in us!
                    </p>
                    
                </div>
                <div style={{ width: '45%' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/ceo.jpeg`}
                        alt="Travel"
                        style={ausImageStyle}
                    />
                </div>
            </div>
            <FormPage />
            <Footer />
            
        </div>
    );
};

export default AIECGlobal;
