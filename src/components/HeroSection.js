//import heroImage from '../assets/'
import React from 'react';
import Pricing from '../pages/pricing';
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="text-center text-white py-5" style={{ backgroundColor: '#1a1a2e', }}>
      <h2>Reliable Laptops. Affordable Prices. Guaranteed Performance</h2>
      <div className='my-4 img-fluid' style={{display:"-ms-flexbox"}}>
      <img src="main_logo.png" alt="Laptop" className="my-1 img" style={{ maxHeight: '200px', filter: 'invert(1)'}} />
      <img src="laploot-logo-text-removebg-preview.png" alt="Laptop" className="my-1 img" style={{
         width: '300px',
         height: '100px',       // reduce height to cut off top/bottom
         objectFit: 'cover',     // crop image instead of resizing
         objectPosition: 'center', // center focus
         filter: 'invert(1)',
        }} />  
      </div>
      <div>
        
        <NavLink to='/Pricing'><button className="btn btn-outline-light mx-1" style={{borderRadius:'32px', paddingInline:'48px',backgroundColor:"#493971",borderColor:'rgba(255, 255, 255, 0.5)'}}>Shop Now</button></NavLink>
        <NavLink to='/contact'><button className="btn btn-outline-light mx-1 " style={{borderRadius:'32px', paddingInline:'48px'}}>Learn More</button></NavLink>
      </div>
    </div>
  );
}

export default HeroSection;
