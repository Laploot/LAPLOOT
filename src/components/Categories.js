import React from 'react';
import { NavLink } from 'react-router-dom';

function Categories() {
  const categories = [
    { title: 'Professional Laptops', image: 'macbook1.png', route: '/LaptopProfessional' },
    { title: 'Gaming Laptops', image: 'gaming.png', route: '/LaptopGaming' },
    { title: 'Student Essentials', image: 'student.png', route: '/LaptopStudent' },
  ];

  return (
    <div className="container my-5 text-center">
      <h4 className="text-white mb-4">Our Categories</h4>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <NavLink to={cat.route} style={{ textDecoration: 'none' }}>
              <div className="card bg text-white" style={{ background: 'linear-gradient(to top,rgba(60, 7, 83, .25), rgba(255, 255, 255, 0.01))', backdropFilter: 'blur(10px)' }}>
                <img src={cat.image} className="card-img-top" alt={cat.title} />
                <div className="card-body">
                  <h5 className="card-title">{cat.title}</h5>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
