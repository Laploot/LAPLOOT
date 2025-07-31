import React from "react";
import { NavLink } from 'react-router-dom';

function AboutUs2() {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(to bottom, #0f0f1a, #1a1a2e)",
      color: "#fff",
      overflow: "hidden",
    },
    hero: {
      textAlign: "center",
      padding: "100px 20px 80px",
      background: "linear-gradient(to right, #1a1a2e, #0f0f1a)",
    },
    heroTitle: {
      fontSize: "3.2rem",
      color: "#f54291",
      fontWeight: "700",
      marginBottom: "20px",
      letterSpacing: "0.5px",
    },
    heroText: {
      fontSize: "1.25rem",
      maxWidth: "850px",
      margin: "0 auto",
      color: "#ddd",
      lineHeight: "1.9",
    },
    section: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      flexWrap: "wrap",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    textBlock: {
      flex: "1 1 500px",
      textAlign: "left",
    },
    imageBlock: {
      flex: "1 1 400px",
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "16px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
    },
    heading: {
      fontSize: "2.4rem",
      color: "#f54291",
      marginBottom: "20px",
      fontWeight: "600",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: "#ccc",
      marginBottom: "20px",
    },
    featuresSection: {
      background: "#1f1f2e",
      padding: "80px 20px",
      textAlign: "center",
    },
    featuresGrid: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "50px",
    },
    featureCard: {
      backgroundColor: "#26263a",
      width: "260px",
      borderRadius: "14px",
      padding: "30px 20px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    featureCardHover: {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
    },
    featureIcon: {
      width: "60px",
      height: "60px",
      objectFit: "contain",
      marginBottom: "20px",
    },
    featureTitle: {
      fontSize: "1.3rem",
      color: "#fff",
      fontWeight: "600",
      marginBottom: "10px",
    },
    featureText: {
      fontSize: "1rem",
      color: "#aaa",
      lineHeight: "1.6",
    },
    ctaSection: {
      textAlign: "center",
      padding: "90px 20px",
      background: "linear-gradient(to right, #1a1a2e, #0f0f1a)",
    },
    ctaText: {
      fontSize: "1.3rem",
      maxWidth: "800px",
      margin: "0 auto 40px auto",
      color: "#eee",
      lineHeight: "1.8",
    },
    ctaButton: {
      backgroundColor: "#f54291",
      color: "#fff",
      border: "none",
      padding: "15px 40px",
      fontSize: "1.1rem",
      borderRadius: "50px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background 0.3s ease",
    },
  };

  // Feature card component with hover
  const FeatureCard = ({ icon, title, text }) => {
    const [hover, setHover] = React.useState(false);
    return (
      <div
        style={{ ...styles.featureCard, ...(hover ? styles.featureCardHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={icon} style={styles.featureIcon} alt={title} />
        <h3 style={styles.featureTitle}>{title}</h3>
        <p style={styles.featureText}>{text}</p>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to LAPLOOT</h1>
        <p style={styles.heroText}>
          High‑quality laptops, unbeatable prices, and a mission to empower every dreamer in India.  
          Together, we’re redefining smart shopping, responsible tech, and digital empowerment.
        </p>
      </section>

      {/* Story */}
      <section style={styles.section}>
        <div style={styles.textBlock}>
          <h2 style={styles.heading}>Our Story</h2>
          <p style={styles.paragraph}>
            Founded in 2016, LAPLOOT started in the offline market, building trust by delivering performance
            through refurbished and renewed laptops. Our focus was simple — to provide top‑tier tech without
            the heavy price tag.
          </p>
          <p style={styles.paragraph}>
            Today, we’ve taken a bold step forward by entering the e‑commerce space, bringing the same values
            and the same commitment directly to your screens, homes, and workspaces.
          </p>
        </div>
        <div style={styles.imageBlock}>
          <img
            style={styles.image}
            src="./abt3.jpg"
            alt="Our Story"
          />
        </div>
      </section>

      {/* Vision */}
      <section style={{ ...styles.section, flexDirection: "row-reverse" }}>
        <div style={styles.textBlock}>
          <h2 style={styles.heading}>Our Vision</h2>
          <p style={styles.paragraph}>
            At LAPLOOT, we believe technology should empower everyone — students, teachers, professionals,
            and creators. That’s why we work tirelessly to ensure every product is tested, reliable, and
            affordable.
          </p>
          <p style={styles.paragraph}>
            We see a future where every learner and innovator has access to the tools they need to thrive —
            and we’re building that future one laptop at a time.
          </p>
        </div>
        <div style={styles.imageBlock}>
          <img
            style={styles.image}
            src="./abt2.jpg"
            alt="Our Vision"
          />
        </div>
      </section>

      {/* Features */}
      <section style={styles.featuresSection}>
        <h2 style={styles.heading}>What Sets Us Apart</h2>
        <div style={styles.featuresGrid}>
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/512/912/912399.png"
            title="Top‑Tier Refurbished Laptops"
            text="Hand‑tested for performance and reliability to match modern demands."
          />
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/512/1063/1063245.png"
            title="Warranty‑Backed Purchases"
            text="Enjoy peace of mind with every purchase, fully warranty‑backed."
          />
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/512/1792/1792939.png"
            title="Unmatched Customer Satisfaction"
            text="We listen, we care, and we deliver beyond expectations."
          />
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/512/906/906175.png"
            title="Massive Discounts"
            text="With discounts over 80%, we make every rupee count for you."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <p style={styles.ctaText}>
          Thank you for being a part of our journey. Together, we’re empowering dreams, enabling innovation,
          and making technology accessible to everyone.
        </p>
        <NavLink to='/Pricing'><button className="btn btn-outline-light mx-1"style={styles.ctaButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d8337e")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f54291")}>Explore Our Products</button></NavLink>
        {/* <button
          style={styles.ctaButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d8337e")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f54291")}
        >
          Explore Our Products
        </button> */}
      </section>
    </div>
  );
}

export default AboutUs2;
