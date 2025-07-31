import React from 'react';

import ProfessionalLaptops from '../components/ProfessionalLaptops';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LaptopsProfessional = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-dark text-white py-5" style={{ background: 'linear-gradient(to top,rgb(4, 2, 26), rgba(0, 0, 0, 0.5))' }}>
          <section>
            <h3 className="mb-4" style={{ color: '#3cff9d' }}>💼 Professional Laptops</h3>
            <div className="p-3 rounded bg-secondary bg-opacity-10 border-start border-success border-3">
              <ProfessionalLaptops />
            </div>
          </section>
        </div>
      <Footer />
    </>
  );
};

export default LaptopsProfessional;