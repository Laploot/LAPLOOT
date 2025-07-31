import React from 'react';
import StudentEssentials from '../components/StudentEssentials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LaptopsStudent = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-dark text-white py-5" style={{ background: 'linear-gradient(to top,rgb(4, 2, 26), rgba(0, 0, 0, 0.5))' }}>
          <section className="mb-5">
            <h3 className="mb-4" style={{ color: '#00f7ff' }}>🎓 Student Essentials</h3>
            <div className="p-3 rounded bg-secondary bg-opacity-10 border-start border-info border-3">
              <StudentEssentials />
            </div>
          </section>
        </div>
      <Footer />
    </>
  );
};

export default LaptopsStudent;