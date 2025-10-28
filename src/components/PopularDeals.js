import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './product_card'; 

const PopularDeals = () => {
  const [popularLaptops, setPopularLaptops] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get('${process.env.REACT_APP_API_URL}/api/laptops');
        const filtered = res.data.filter(laptop => laptop.isPopular === true);
        setPopularLaptops(filtered);
      } catch (err) {
        console.error('❌ Error fetching popular deals:', err);
      }
    };

    fetchPopular();
  }, []);

  return (
    <div className="container-fluid py-4">
      <h4 className="popular-deals-heading ms-3">Popular Deals</h4>
      <div className="row g-3 px-3 px-md-3">
        {popularLaptops.length > 0 ? (
          popularLaptops.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={index}>
              <ProductCard
                id={item._id}
                image={item.images[0]}
                title={`${item.brand} ${item.modelName}`}
                description={`${item.cpuModel}, ${item.ramMemory}, ${item.screenSize}`}
                price={item.price}
                buttonText="View Details"
                variant="warning"
              />
            </div>
          ))
        ) : (
          <p className="text-light ms-3">No popular laptops available.</p>
        )}
      </div>
    </div>
  );
};

export default PopularDeals;
