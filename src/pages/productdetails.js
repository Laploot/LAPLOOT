
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Fix added here
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:5000/api/laptops/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("❌ Fetch error:", err));
  }, [id]);

  if (!product) {
    return <div style={styles.loading}>Loading...</div>;
  }

  const imageList = Array.isArray(product.images) ? product.images : [product.images];

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.imageSection}>
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {imageList.map((img, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Slide ${index}`}
                      style={styles.image}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>

          <div style={styles.detailsSection}>
            <h1 style={styles.title}>{product.modelName}</h1>
            <p style={styles.brand}>Brand: {product.brand}</p>
            <ul style={styles.list}>
              <li>Screen Size: {product.screenSize}</li>
              <li>Colour: {product.colour}</li>
              <li>Hard Disk: {product.hardDiskSize}</li>
              <li>CPU: {product.cpuModel}</li>
              <li>RAM: {product.ramMemory}</li>
              <li>Operating System: {product.operatingSystem}</li>
              <li>Graphics: {product.graphicsCard}</li>
              <li>Category: {product.category}</li>
            </ul>
            <p style={styles.price}>Price: ₹{product.price}</p>
            <p style={styles.tax}>Inclusive of all taxes. Free Delivery Available.</p>

            <div style={styles.buttonRow}>
              <button
                style={styles.buyNow}
                onClick={() =>
                  navigate("/buynow", {
                    state: {
                      model: product.modelName,
                      price: product.price,
                      brand: product.brand,
                      image: product.images?.[0] || ""
                    }
                  })
                }
              >
                Buy Now
              </button>
            </div>

            <p style={styles.warranty}>10 days Replacement | 1 Year Warranty</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    background: "linear-gradient(180deg, #0c0b24 0%, #1c1639 100%)",
    minHeight: "100vh",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif"
  },
  card: {
    display: "flex",
    backgroundColor: "#1b1536",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
    maxWidth: "1100px",
    width: "100%",
    border: "1px solid #302b63",
  },
  imageSection: {
    flex: 1,
    backgroundColor: "#0f0e23",
  },
  image: {
    height: "450px",
    objectFit: "contain",
    borderRadius: "8px",
  },
  detailsSection: {
    flex: 1,
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#f4f4f5",
    marginBottom: "12px",
  },
  brand: {
    color: "#a6a4c3",
    marginBottom: "24px",
    fontSize: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "24px",
    lineHeight: "1.8",
    color: "#d1d1e9",
  },
  price: {
    fontSize: "26px",
    color: "#64ffda",
    fontWeight: "600",
    marginBottom: "10px",
  },
  tax: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "24px",
  },
  buttonRow: {
    display: "flex",
    gap: "14px",
    marginBottom: "24px",
  },
  buyNow: {
    flex: 1,
    backgroundColor: "#ec4899",
    color: "#fff",
    padding: "14px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "background 0.3s",
  },
  warranty: {
    fontSize: "14px",
    color: "#aaa",
  },
  loading: {
    backgroundColor: "#0c0b24",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
  },
};
