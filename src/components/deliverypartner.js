import React from "react";
export default function DeliveryPartners() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Delivery Partners</h2>
      <div style={styles.partnerRow}>
        <div style={styles.partnerCard}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon" 
            style={styles.logo} 
          />
        </div>
        <div style={styles.partnerCard}>
          <img 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Flipkart" 
            style={styles.logo} 
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#1b1536",
    padding: "40px 20px",
    margin: "40px auto",
    maxWidth: "100%",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
   // border: "1px solid #302b63",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#f54291",
    fontFamily: "Segoe UI, sans-serif",
  },
  partnerRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "200px",
    flexWrap: "wrap",
  },
  partnerCard: {
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: "12px",
    padding: "20px 30px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  logo: {
    height: "80px",
    objectFit: "contain",
    marginBottom: "15px",
    filter:  'invert(1)',
  },

};