import React from 'react';
import { teamMembers } from '../data.js';
// Assuming you will create a specific CSS file for this component if needed

const AboutPage = () => (
    <div className="about-page">
        <h1 className="about-title">About Us</h1>
        <div className="about-intro">
            <p className="about-text">
                Welcome to My Shop, your ultimate destination for high-quality electronics, fashionable clothing, and captivating books. We are a team of passionate enthusiasts
                dedicated to bringing you the best products at unbeatable prices, with a focus on exceptional customer service and a seamless shopping experience.
            </p>
        </div>
        <div className="about-mission-story-grid">
            <div className="about-card">
                <h2
                    className="about-card-title">Our Mission</h2>
                <p className="about-card-text">
                    Our mission is to empower our customers by providing access to a curated selection of products that enhance their lives. We believe in quality, affordability, and the power of discovery.
                    Whether you're upgrading your tech, refreshing your wardrobe, or getting lost in a new story, My Shop is here to help you find exactly what you need.
                </p>
            </div>
            <div className="about-card">
                <h2 className="about-card-title">Our Story</h2>
                <p className="about-card-text">
                    Founded in 2020,My Shop started with a simple idea: to create a single online store where customers could find a diverse range of products without compromising on quality.
                    From our humble beginnings, we've grown into a trusted e-commerce platform, serving customers worldwide and building a community of loyal shoppers.
                </p>
            </div>
        </div>
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-grid">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member-card">
                    <img src={member.image} alt={member.name} className="team-member-image" />
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-title">{member.title}</p>
                </div>
            ))}
        </div>
    </div>
);
export default AboutPage;