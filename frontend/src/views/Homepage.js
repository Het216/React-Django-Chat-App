







// src/components/Homepage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const styles = {
    homepage: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      minHeight: '97.2vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontSize: '1.2rem',
    },
    heroSection: {
      textAlign: 'center',
      margin: '150px 0',
    },
    heroTitle: {
      fontSize: '3rem',
    },
    heroDescription: {
      fontSize: '1.5rem',
      marginBottom: '20px',
    },
    ctaButton: {
      padding: '10px 20px',
      backgroundColor: '#FF5733',
      color: '#FFFFFF',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2rem',
    },
    footer: {
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px 0',
      borderTop: '1px solid #FFFFFF',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    footerLink: {
      color: '#FFFFFF',
      textDecoration: 'none',
    }
  };

  return (
    <div style={styles.homepage}>
      
      <section style={styles.heroSection}>
        <h2 style={styles.heroTitle}>Welcome to ChatBuzz</h2>
        <p style={styles.heroDescription}>
          Your real-time chat solution for seamless communication. Connect with friends, colleagues, and communities instantly!
        </p>
        {/* <Link to="/login" style={styles.ctaButton}>Login</Link> */}
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© ChatBuzz 2024 - All rights reserved</p>
        <div style={styles.footerLinks}>
          <Link to="/about" style={styles.footerLink}>About</Link>
          <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link to="/contact" style={styles.footerLink}>Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;

