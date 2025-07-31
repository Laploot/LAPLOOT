// import React from 'react';
// import StudentEssentials from '../components/StudentEssentials';
// import GamingLaptops from '../components/GamingLaptops';
// import ProfessionalLaptops from '../components/ProfessionalLaptops';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// const styles = {
  
// }
// const Pricing = () => {
//   return (
//     <>
//     <Navbar></Navbar>
//     <div className="container-fluid bg-black text-white py-5">
//       <div className="container">
//         <h1 className="mb-5 text-center display-4 fw-bold text-light">Shop by Category</h1>

//         <section className="mb-5">
//           <h3 className="text-info mb-4">🎓 Student Essentials</h3>
//           <StudentEssentials />
//         </section>

//         <section className="mb-5">
//           <h3 className="text-danger mb-4">🎮 Gaming Laptops</h3>
//           <GamingLaptops />
//         </section>

//         <section>
//           <h3 className="text-success mb-4">💼 Professional Laptops</h3>
//           <ProfessionalLaptops />
//         </section>
//       </div>
//     </div>
//     <Footer/>
//       </>
//   );
// };

// export default Pricing;

import React from 'react';
import StudentEssentials from '../components/StudentEssentials';
import GamingLaptops from '../components/GamingLaptops';
import ProfessionalLaptops from '../components/ProfessionalLaptops';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-dark text-white py-5" style={{ background: 'linear-gradient(to top,rgb(4, 2, 26), rgba(0, 0, 0, 0.5))' }}>
        <div className="container">
          <h1 className="mb-5 text-center display-4 fw-bold text-light border-bottom pb-3" style={{ color: '#c0aaff' }}>
            Shop by Category
          </h1>

          <section className="mb-5">
            <h3 className="mb-4" style={{ color: '#00f7ff' }}>🎓 Student Essentials</h3>
            <div className="p-3 rounded bg-secondary bg-opacity-10 border-start border-info border-3">
              <StudentEssentials />
            </div>
          </section>

          <section className="mb-5">
            <h3 className="mb-4" style={{ color: '#ff4c72' }}>🎮 Gaming Laptops</h3>
            <div className="p-3 rounded bg-secondary bg-opacity-10 border-start border-danger border-3">
              <GamingLaptops />
            </div>
          </section>

          <section>
            <h3 className="mb-4" style={{ color: '#3cff9d' }}>💼 Professional Laptops</h3>
            <div className="p-3 rounded bg-secondary bg-opacity-10 border-start border-success border-3">
              <ProfessionalLaptops />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;

