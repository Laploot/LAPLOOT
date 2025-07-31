import Marquee from "react-fast-marquee";
import { FaFire } from "react-icons/fa"; // install react-icons if not already

export default function DealsMarquee() {
  return (
    <div style={styles.container}>
      <Marquee speed={140} gradient={false} pauseOnHover={false}>
        <span style={styles.item}>
          <FaFire style={styles.icon} /> Get Exclusive Deals up to 80% OFF! &nbsp;&nbsp;&nbsp;
        </span>
        <span style={styles.item}>
          <FaFire style={styles.icon} /> Limited Time Offer – Shop Now! &nbsp;&nbsp;&nbsp;
        </span>
      </Marquee>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(90deg, #ffe259, #ffa751)", // highlight gradient
    color: "#222",
    padding: "2px 0",
    fontWeight: "600",
    fontSize: "18px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  item: {
    display: "inline-flex",
    alignItems: "center",
    marginRight: "440px",
    
  },
  icon: {
    color: "#d90429",
    marginRight: "8px",
    fontSize: "20px",
  },
};
