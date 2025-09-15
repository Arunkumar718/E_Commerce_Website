import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
 // Assuming you will create a specific CSS file for this component if needed

const ContactPage = ({ showMessage }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        showMessage('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-info-form-grid">
                <div>
                    <h2 className="contact-section-title">Get in Touch</h2>
                    <p className="contact-text">
                        We'd love to hear from you! Whether you have a question about a product, need assistance with an order, or just want to say hello, our team is ready to help.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail-item">
                            <MapPin size={24} className="contact-icon" />
                            <span>4005 Silver Business Point, Tower A, Techno Park, Bangalore, Karnataka, India</span>
                        </div>
                        <div className="contact-detail-item">
                            <Phone size={24} className="contact-icon" />
                            <span>+919823754230</span>
                        </div>
                        <div className="contact-detail-item">
                            <Mail size={24} className="contact-icon" />
                            <span>info@techayo.com</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="contact-section-title">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="form-textarea"
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-submit-button">
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ContactPage;