import React from 'react';
import './BlogList.css'; // Link to the updated CSS for styling
import Footer from '../Pages/Homepage/Footer'

const BlogList = () => {

    const handleNavigation = (route) => {
        window.location.href = `/${route}`;
    };

    return (
        <div className="blog-list-container">

            {/* Header Section */}
            <div className="header-section">
                <img src={`${process.env.PUBLIC_URL}/assets/images/aus.jpeg`} alt="Consultancy" className="blog-header-image" />
                <div className="blog-header-text">
                    <h1>Why We Are The Best Consultancy</h1>
                    <p>Asian Education Consultancy - Guiding Students to Their Dream Universities Across the Globe</p>
                </div>
            </div>
            
            {/* Top Section with 4 Items */}
            <div className="blog-row">
                <div className="blog-item small" onClick={() => handleNavigation('exquisite-news')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/1b.webp`} alt="Exquisite News" />
                    <div className="blog-item-content">
                        <h2>Exquisite Admitting Cordially September Newspaper</h2>
                        <p>Templates Yard | Dec 05, 2015</p>
                    </div>
                </div>
                <div className="blog-item small" onClick={() => handleNavigation('business-man')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/2b.jpg`} alt="Business Man" />
                    <div className="blog-item-content">
                        <h3>Business man analyzing graphs on a tablet</h3>
                        <p>Templates Yard | Mar 17, 2016</p>
                    </div>
                </div>
                <div className="blog-item small" onClick={() => handleNavigation('cars-waiting')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/3b.webp`} alt="Cars Waiting" />
                    <div className="blog-item-content">
                        <h3>Cars waiting pedestrians cross the street</h3>
                        <p>Templates Yard | Mar 17, 2016</p>
                    </div>
                </div>
                <div className="blog-item small" onClick={() => handleNavigation('tablet-on-table')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/a.jpeg`} alt="Tablet on Table" />
                    <div className="blog-item-content">
                        <h3>Tablet on a table showing calendar</h3>
                        <p>Templates Yard | Mar 17, 2016</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section with 4 Items */}
            <div className="blog-row">
                <div className="blog-item small" onClick={() => handleNavigation('sandwich')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/a1.webp`} alt="Sandwich" />
                    <div className="blog-item-content">
                        <h3>Sandwich with delicious cheeses and Tasty Toppings</h3>
                        <p>Templates Yard | Mar 17, 2016</p>
                    </div>
                </div>
                <div className="blog-item small" onClick={() => handleNavigation('italian-cheese')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/a2.webp`} alt="Italian Cheese" />
                    <div className="blog-item-content">
                        <h3>Cook preparing delicious Italian cheese pasta</h3>
                        <p>Templates Yard | Mar 17, 2016</p>
                    </div>
                </div>
                <div className="blog-item small" onClick={() => handleNavigation('ripe-pumpkin')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/a3.webp`} alt="Ripe Pumpkin" />
                    <div className="blog-item-content">
                        <h3>Ripe pumpkin in the middle of green grass</h3>
                        <p>Templates Yard | Mar 17, 2016</p>
                    </div>
                </div>
                <div className="blog-item small" onClick={() => handleNavigation('contented-get-distrusts')}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/a4.webp`} alt="Contented Pizza" />
                    <div className="blog-item-content">
                        <h3>Contented get distrusts certainty nay are frankness concealed ham</h3>
                        <p>Templates Yard | Dec 05, 2015</p>
                    </div>
                </div>
            </div>

           <Footer />
        </div>
    );
};

export default BlogList;
