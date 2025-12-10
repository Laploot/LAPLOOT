import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      alert('Please fill all required fields!');
      return;
    }

    const subject = encodeURIComponent(`Message from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=laploot.shop@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: '40px',
      background: 'linear-gradient(to right, #1a1837, #0e0f1c)',
      color: '#ffffff',
      fontFamily: 'Segoe UI, sans-serif',
    },
    formSection: {
      flex: 1,
      minWidth: '300px',
      marginRight: '40px',
    },
    heading: {
      color: '#7b61ff',
      fontWeight: 'bold',
      fontSize: '22px',
      marginBottom: '8px',
    },
    subheading: {
      fontSize: '14px',
      color: '#bbbbbb',
      marginBottom: '20px',
    },
    inputGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '12px',
    },
    input: {
      flex: '1 1 45%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #2a2c4a',
      backgroundColor: '#1f2035',
      color: '#ffffff',
      fontSize: '15px',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #2a2c4a',
      backgroundColor: '#1f2035',
      color: '#ffffff',
      fontSize: '15px',
      minHeight: '100px',
      resize: 'vertical',
      marginBottom: '15px',
    },
    submitBtn: {
      backgroundColor: '#7b61ff',
      color: '#ffffff',
      padding: '10px 24px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    infoSection: {
      flex: 1,
      minWidth: '250px',
    },
    infoHeading: {
      color: '#7b61ff',
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '10px',
    },
    infoText: {
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#cccccc',
      marginBottom: '20px',
    },
    socialText: {
      color: '#7b61ff',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    socialLinks: {
      display: 'flex',
      gap: '20px',
      color: '#dddddd',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.formSection}>
          <div style={styles.heading}>Just say Hello!</div>
          <div style={styles.subheading}>Let us know more about you</div>

          <div style={styles.inputGroup}>
            <input type="text" name="firstName" placeholder="First Name" style={styles.input} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" style={styles.input} onChange={handleChange} />
          </div>

          <div style={styles.inputGroup}>
            <input type="email" name="email" placeholder="Email" style={styles.input} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone" style={styles.input} onChange={handleChange} />
          </div>

          <textarea name="message" placeholder="Your message..." style={styles.textarea} onChange={handleChange}></textarea>

          <button style={styles.submitBtn} onClick={handleSubmit}>SUBMIT</button>
        </div>

        <div style={styles.infoSection}>
          <div style={styles.infoHeading}>Contact Information</div>
          <div style={styles.infoText}>
            haridwar bypass road<br />
            ,Near Bangalikhoti Chowk Dehradun-248001<br />
            India<br /><br />
            Call Us: +91 93686 44652<br /><br />
            We are open from Monday - Friday<br />
            08:00 am - 05:00 pm
          </div>

          <div style={styles.socialText}>Follow Us</div>
          <div style={styles.socialLinks}>
            <span>Facebook</span>
            <a
  href="https://www.instagram.com/laploot.in?igsh=MThqMHZjYTNubGQwdw%3D%3D&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Instagram</span>
</a>
            <span>Vimeo</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
