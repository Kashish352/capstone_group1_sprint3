import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your trust, our dedication</p>
      </header>
      
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          At [Company Name], our mission is to [brief mission statement]. We strive to deliver 
          high-quality products and services, putting our customers' satisfaction at the forefront 
          of everything we do.
        </p>
      </section>
      
      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to [vision statement]. We aim to shape a better future by [brief explanation 
          of how your company contributes to its industry or field].
        </p>
      </section>
      
      <section className="our-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Integrity: We believe in transparency and honesty in all our dealings.</li>
          <li>Innovation: Continuously improving to stay ahead.</li>
          <li>Customer Focus: Our clients are our top priority.</li>
          <li>Teamwork: Collaboration is the key to our success.</li>
        </ul>
      </section>
      
      <section className="our-history">
        <h2>Our Story</h2>
        <p>
          Established in [founding year], [Company Name] started as a small team with a big idea. 
          Over the years, we've grown into a dynamic company driven by innovation and customer satisfaction.
        </p>
      </section>
      
      <section className="our-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      
      <section className="our-impact">
        <h2>Our Impact</h2>
        <p>
          Since our founding, we've [impact statement: e.g., "helped over 10,000 customers," 
          "reduced environmental waste by 20%," etc.]. We are committed to making a positive 
          impact both locally and globally.
        </p>
      </section>
      
      <section className="contact-us">
        <h2>Get In Touch</h2>
        <p>
          We'd love to hear from you! Contact us at <a href="mailto:contact@company.com">contact@company.com</a> 
          or follow us on social media to stay updated.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
