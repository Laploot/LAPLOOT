import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import "./Heroslider.css";

const HeroSlider = () => {
  return (
    <div id="customCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex align-items-center" style={{ height: '40vh' }}>
            <div className="container">
              <div className="row">
                
                {/* Left Column */}
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h1 className="display-5 fw-bold">Professional Laptops</h1>
                  <p className="lead">Work smarter with sleek, powerful machines.</p>
                  <NavLink to="/LaptopProfessional" className="btn btn-primary mt-3">Unleash Productivity</NavLink>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <img
                    src="PROFSSIONAL.png"
                    alt="Professional Laptop"
                    className="img-fluid"
                    style={{ maxHeight: '40vh', objectFit: 'fill', width: '100%' }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex align-items-center" style={{ height: '40vh' }}>
            <div className="container">
              <div className="row">

                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h1 className="display-5 fw-bold">Gaming Laptops</h1>
                  <p className="lead">Built to power every frame of your game.</p>
                  
                  <NavLink to="/LaptopGaming" className="btn btn-danger mt-3"> Explore Gaming</NavLink>

                </div>

                <div className="col-md-6">
                  <img
                    src="gaming2.png"
                    alt="Gaming Setup"
                    className="img-fluid"
                    style={{ maxHeight: '40vh', objectFit: 'fill', width: '100%' }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="d-flex align-items-center" style={{ height: '40vh' }}>
            <div className="container">
              <div className="row">

                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h1 className="display-5 fw-bold">Student Essentials</h1>
                  <p className="lead">Affordable, efficient, and reliable for everyday use.</p>
                  <NavLink to ='/LaptopStudent' className="btn btn-success mt-3">Discover Deals</NavLink>
                </div>

                <div className="col-md-6">
                  <img
                    src="student_slider.png"
                    alt="Student with Laptop"
                    className="img-fluid"
                    style={{ maxHeight: '40vh', objectFit: 'fill', width: '100%' }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSlider;

