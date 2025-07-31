// const ProductCard = ({ image, title, description, price, buttonText, variant }) => {
//   return (
//     <div
//       className="product-card-wrapper"
//       style={{
//         // aspectRatio: '4 / 3',     // ✅ Lock ratio (you can choose 4:3, 3:4, etc.)
//         width: '100%',
//         backgroundColor: '#1e1e1e', // Optional background for dark cards
//         borderRadius: '12px',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <img
//         src={image}
//         alt={title}
//         style={{
//           width: 'auto',
//           height: '220px',           // You can tune this ratio
//           objectFit: 'Contain',
//         }}
//       />
//       <div
//         className="p-3 text-light d-flex flex-column justify-content-between"
//         style={{ height: '50%' }}
//       >
//         <h6 className="fw-bold mb-1">{title}</h6>
//         <p className="text-secondary small mb-1">{description}</p>
//         <p className="fw-bold mb-2">₹{price}</p>
//         <button className={`btn btn-${variant} mt-auto w-100`}>{buttonText}</button>
//       </div>
//     </div>
//   );
// }; 
// export default ProductCard;

// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ id, image, title, description, price, buttonText, variant }) => {
//   const navigate = useNavigate();

//   const handleBuyNow = () => {
//     // Navigate to product detail page with product id
//     navigate(`/laptops/${id}`);
//   };

//   return (
//     <div className="product-card-wrapper" style={{
//         // aspectRatio: '4 / 3',     // ✅ Lock ratio (you can choose 4:3, 3:4, etc.)
//         width: '100%',
//         backgroundColor: '#1e1e1e', // Optional background for dark cards
//         borderRadius: '12px',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//        }}>
//       <img src={image} alt={title} style={{ width: 'auto', height: '220px', objectFit: 'contain' }} />
//       <div className="p-3 text-light d-flex flex-column justify-content-between" style={{ height: '50%' }}>
//         <h6 className="fw-bold mb-1">{title}</h6>
//         <p className="text-secondary small mb-1">{description}</p>
//         <p className="fw-bold mb-2">₹{price}</p>
//         <button
//           className={`btn btn-${variant} mt-auto w-100`}
//           onClick={handleBuyNow}
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const ProductCard = ({ id, image, title, description, price, buttonText, variant }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // Hover state

  const handleBuyNow = () => {
    navigate(`/laptops/${id}`);
  };

  return (
    <div
      className="product-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        backgroundColor: '#1e1e1e',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: isHovered
          ? '0 8px 20px rgba(0, 0, 0, 0.4)'
          : '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: 'auto',
          height: '220px',
          objectFit: 'contain',
        }}
      />
      <div
        className="p-3 text-light d-flex flex-column justify-content-between"
        style={{ height: '50%' }}
      >
        <h6 className="fw-bold mb-1">{title}</h6>
        <p className="text-secondary small mb-1">{description}</p>
        <p className="fw-bold mb-2">₹{price}</p>
        <button
          className={`btn btn-${variant} mt-auto w-100`}
          onClick={handleBuyNow}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;





