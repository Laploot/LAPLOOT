// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import PopularDeals from './components/PopularDeals';
// import Categories from './components/Categories';
// import Footer from './components/Footer';
// import HeroSlider from './components/slider';
// import Contactus from './pages/contact';
// import Pricing from './pages/pricing';
// import AboutUs from './components/aboutus';
// import Marquee from 'react-fast-marquee';
// import LaptopsGaming from './pages/laptop2';
// import LaptopsStudent from './pages/laptop1';
// import LaptopsProfessional from './pages/laptop3';
// import SearchResults from './pages/SearchResults';
// import ProductDetailPage from './pages/productdetails'; 
// import DeliveryPartners from './components/deliverypartner';
// import carddetails from './components/deliverypartner';
// import DealsMarquee from './components/marquee';
// import './App.css';
// import BuyNow from './pages/BuyNow';
// import AboutUs2 from './components/aboutus2';
// import DevPage from './pages/dev.js';
// import AdminUpload from './pages/AdminUpload.js';

// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const SECRET_PASSWORD = 'admin123';

// function MainLayout() {
//   return (
//     <div>
//       <div id='top'>
//         <Navbar />
//         <DealsMarquee />
//       </div>
//       <div id='hero'>
//         <HeroSlider />
//         <HeroSection />
//       </div>
//       <PopularDeals />
//       <Categories />
//       <div id='about'>
//         <AboutUs2 />
//         <DeliveryPartners />
//       </div>
//       <carddetails />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   const [isVerified, setIsVerified] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [error, setError] = useState('');
//   const [navigateToAdmin, setNavigateToAdmin] = useState(false);

//   const handleKeyCombo = (e) => {
//     if (e.key.toLowerCase() === 'a') {
//       console.log("key detected");
//       setShowModal(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyCombo);
//     return () => window.removeEventListener('keydown', handleKeyCombo);
//   }, []);

//   const handlePasswordSubmit = () => {
//     if (enteredPassword === SECRET_PASSWORD) {
//       setIsVerified(true);
//       setNavigateToAdmin(true);
//       setShowModal(false);
//       setEnteredPassword('');
//       setError('');
//     } else {
//       setError('Incorrect password!');
//     }
//   };
  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />} />
//         <Route path="/contact" element={<Contactus />} />
//         <Route path="/About" element={<DevPage />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/LaptopGaming" element={<LaptopsGaming />} />
//         <Route path="/LaptopProfessional" element={<LaptopsProfessional />} />
//         <Route path="/LaptopStudent" element={<LaptopsStudent />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/laptops/:id" element={<ProductDetailPage />} />
//         <Route
//           path="/admin-hidden-panel"
//           element={
//             isVerified ? <AdminUpload /> : <div className="text-center mt-5 text-danger">Unauthorized Access</div>
//           }
//         />
//         <Route
//           path="/buynow"
//           element={
//             <>
//               <Navbar />
//               <BuyNow />
//               <Footer />
//             </>
//           }
//         />
//       </Routes>

//       {/* Password Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Enter Admin Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={enteredPassword}
//             onChange={(e) => setEnteredPassword(e.target.value)}
//           />
//           {error && <p className="text-danger mt-2">{error}</p>}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//           <Button variant="primary" onClick={handlePasswordSubmit}>Submit</Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Navigate after successful login */}
//       {navigateToAdmin && window.location.pathname !== '/admin-hidden-panel' && window.location.replace('/admin-hidden-panel')}
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularDeals from './components/PopularDeals';
import Categories from './components/Categories';
import Footer from './components/Footer';
import HeroSlider from './components/slider';
import Contactus from './pages/contact';
import Pricing from './pages/pricing';
import AboutUs from './components/aboutus';
import Marquee from 'react-fast-marquee';
import LaptopsGaming from './pages/laptop2';
import LaptopsStudent from './pages/laptop1';
import LaptopsProfessional from './pages/laptop3';
import SearchResults from './pages/SearchResults';
import ProductDetailPage from './pages/productdetails';
import DeliveryPartners from './components/deliverypartner';
import carddetails from './components/deliverypartner';
import DealsMarquee from './components/marquee';
import './App.css';
import BuyNow from './pages/BuyNow';
import AboutUs2 from './components/aboutus2';
import DevPage from './pages/dev.js';
import AdminUpload from './pages/AdminUpload.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MainLayout() {
  return (
    <div>
      <div id='top'>
        <Navbar />
        <DealsMarquee />
      </div>
      <div id='hero'>
        <HeroSlider />
        <HeroSection />
      </div>
      <PopularDeals />
      <Categories />
      <div id='about'>
        <AboutUs2 />
        <DeliveryPartners />
      </div>
      <carddetails />
      <Footer />
    </div>
  );
}

// This component will use hooks like useNavigate
function AppContent() {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleKeyCombo = (e) => {
    if (e.altKey && e.key.toLowerCase() === 'a') {
      setShowModal(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyCombo);
    return () => window.removeEventListener('keydown', handleKeyCombo);
  }, []);

  const handlePasswordSubmit = () => {
    if (enteredPassword === process.env.REACT_APP_ADMIN) {
      setIsVerified(true);
      setShowModal(false);
      setEnteredPassword('');
      setError('');
      navigate('/admin-hidden-panel'); // ✅ React-style navigation
    } else {
      setError('Incorrect password!');
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/About" element={<DevPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/LaptopGaming" element={<LaptopsGaming />} />
        <Route path="/LaptopProfessional" element={<LaptopsProfessional />} />
        <Route path="/LaptopStudent" element={<LaptopsStudent />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/laptops/:id" element={<ProductDetailPage />} />
        <Route
          path="/admin-hidden-panel"
          element={
            isVerified ? <AdminUpload /> : <div className="text-center mt-5 text-danger">Unauthorized Access</div>
          }
        />
        <Route
          path="/buynow"
          element={
            <>
              <Navbar />
              <BuyNow />
              <Footer />
            </>
          }
        />
      </Routes>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Admin Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
          />
          {error && <p className="text-danger mt-2">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handlePasswordSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Wrap everything with BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

