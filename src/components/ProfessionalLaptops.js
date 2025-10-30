import React, { useEffect, useState } from 'react';
import ProductCard from './product_card';
import axios from 'axios';

const StudentEssentials = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/laptops`);
        const studentLaptops = res.data.filter(
          (laptop) => laptop.category.toLowerCase() === 'pro'
        );
        setProducts(studentLaptops);
      } catch (err) {
        console.error('Failed to fetch laptops:', err);
      }
    };

    fetchLaptops();
  }, []);

  return (
    <div className="container-fluid py-4">
      <h4 className="text-info fw-bold mb-4 ms-3">💼 Professional Laptops</h4>
      <div className="row g-4 px-3 px-md-4">
        {products.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <ProductCard
              id={item._id}
              image={item.images[0]}
              title={`${item.brand} ${item.modelName}`}
              description={`${item.cpuModel}, ${item.ramMemory}, ${item.screenSize}`}
              price={item.price}
              buttonText="View Details"
              variant="success"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentEssentials;
