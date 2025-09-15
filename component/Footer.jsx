import React from 'react';
 // Assuming you will create a specific CSS file for this component if needed

const Footer = ({ showMessage }) => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-grid">
                <div className="footer-col-1">
                    <div className="footer-logo-section">
                        <img src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png" alt="Techayo Logo" className="logo-image" />
                        <span className="logo-text-white">My Shop</span>
                    </div>
                    <p className="footer-slogan">  Empowering your tech journey with innovative solutions and seamless experiences.</p>
                </div>
                <div className="footer-col">
                    <h3 className="footer-heading">YOUR ACCOUNT</h3>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">About Us</a></li>
                        <li><a href="#" className="footer-link">Account</a></li>
                        <li><a href="#" className="footer-link">Track Order</a></li>
                        <li><a href="#" className="footer-link">Payment</a></li>
                        <li><a href="#" className="footer-link">Sales</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3 className="footer-heading">PRODUCTS</h3>
                    <ul className="footer-links">
                        <li><a href="#" className="footer-link">Delivery</a></li>
                        <li><a href="#" className="footer-link">Returns</a></li>
                        <li><a href="#" className="footer-link">New Products</a></li>
                        <li><a href="#" className="footer-link">Old Products</a></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <h3 className="footer-heading">CONTACT US</h3>
                    <p className="footer-contact-info">4005 Silver Business Point, Tower A, Techno Park, Bangalore, Karnataka, India</p>
                    <p className="footer-contact-info">+919823754230</p>
                    <p className="footer-contact-info">Info@Gmail.Com</p>
                    <h3 className="footer-heading-newsletter">NEWSLETTER</h3>
                    <div className="newsletter-form">
                        <input type="email" placeholder="E-mail" className="newsletter-input" />
                        <button onClick={() => showMessage('Thanks for subscribing!')} className="newsletter-button">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy;
                2025 My Shop. All rights reserved.</p>
        </div>
    </footer>
);
export default Footer;