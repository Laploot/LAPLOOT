import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DevPage() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(to bottom, #0f0f1a, #1a1a2e)',
      color: '#fff',
      padding: '60px 20px',
      textAlign: 'center',
    },
    section: {
      marginBottom: '60px',
    },
    heading: {
      fontSize: '2.8rem',
      color: '#f54291',
      marginBottom: '15px',
    },
    subText: {
      color: '#ccc',
      fontSize: '1.1rem',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.7',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '25px',
      marginTop: '30px',
    },
    card: {
      backgroundColor: '#1f1f2e',
      width: '280px',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      textAlign: 'center',
    },
    cardImage: {
      width: '60px',
      height: '60px',
      objectFit: 'contain',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '1.3rem',
      margin: '10px 0',
      color: '#fff',
    },
    cardText: {
      color: '#aaa',
      fontSize: '0.95rem',
    },
    teamImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    contactLink: {
      display: 'block',
      marginTop: '8px',
      color: '#f54291',
      fontSize: '0.9rem',
      textDecoration: 'none',
    },
  };

  return (
    <div>
      <Navbar/>
    <div style={styles.container}>
      {/* Our Story */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Story</h2>
        <p style={styles.subText}>
          Laploot started with a dream: to make high-performance laptops accessible, affordable, and stylish for every tech enthusiast in India.
        </p>
      </div>

      {/* Vision */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Vision</h2>
        <p style={styles.subText}>
          We aim to lead the tech market with innovation and customer trust, creating a digital-first shopping experience that empowers users.
        </p>
      </div>

      {/* Features & Services */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Features & Services</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img src="https://cdn-icons-png.flaticon.com/512/912/912399.png" style={ styles.cardImage} alt="brands" />
            <h3 style={styles.cardTitle}>Top Brands</h3>
            <p style={styles.cardText}>We offer the latest from Dell, HP, Apple, and MSI with full manufacturer warranty.</p>
          </div>
          <div style={styles.card}>
            <img src="https://cdn-icons-png.flaticon.com/512/1063/1063245.png" style={styles.cardImage} alt="pricing" />
            <h3 style={styles.cardTitle}>Affordable Pricing</h3>
            <p style={styles.cardText}>Exclusive deals, EMI options, and student-friendly pricing you won’t find elsewhere.</p>
          </div>
          <div style={styles.card}>
            <img src="https://cdn-icons-png.flaticon.com/512/1792/1792939.png" style={styles.cardImage} alt="support" />
            <h3 style={styles.cardTitle}>24x7 Support</h3>
            <p style={styles.cardText}>Our dedicated support team is here to help, anytime you need assistance.</p>
          </div>
          <div style={styles.card}>
            <img src="https://cdn-icons-png.flaticon.com/512/906/906175.png" style={styles.cardImage} alt="delivery" />
            <h3 style={styles.cardTitle}>Nationwide Delivery</h3>
            <p style={styles.cardText}>We deliver across Dehradun with speed, reliability, and care for your tech.</p>
          </div>
        </div>
      </div>

      {/* Development Team */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Meet the Development Team</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img src="shubham.jpg" style={styles.teamImage} alt="Shubham" />
            <h3 style={styles.cardTitle}>Shubham Agarwal</h3>
            <p style={styles.cardText}>Frontend Developer</p>
            <a href="mailto:shubham260804@gmail.com" style={styles.contactLink}>shubham260804@gmail.com</a>
          </div>
          <div style={styles.card}>
            <img src="umang_pro.jpg" style={styles.teamImage} alt="Dev2" />
            <h3 style={styles.cardTitle}>Umang Singh Bisht</h3>
            <p style={styles.cardText}>Backend Developer</p>
            <a href="mailto:umangs231@gmail.com" style={styles.contactLink}>umangs231@gmail.com</a>
          </div>
           <div style={styles.card}>
            <img src="varsha_pro.jpg" style={styles.teamImage} alt="Dev3" />
            <h3 style={styles.cardTitle}>Varsha Pandey</h3>
            <p style={styles.cardText}>Backend Developer</p>
            <a href="mailto:varsha280902@gmail.com" style={styles.contactLink}>varsha280902@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default DevPage;
