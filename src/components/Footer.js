
// import React from 'react';
// import { NavLink , Link } from 'react-router-dom';
// import { HashLink as HashLink } from 'react-router-hash-link';

// function Footer() {
//   return (
    
    
    
//     <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-1 border-top">
//     <div class="col mb-3">
//       <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
//       <ul>
//       <img src="main_logo.png" alt="Laptop" className="my-1 img-fluid" style={{ maxWidth: '100px', filter: 'invert(1)'}} />
//       <img src="laploot-logo-text-removebg-preview.png" alt="Laptop" className="my-1 img-fluid" style={{ maxWidth: '164px', filter: 'invert(1)', }} />
//       </ul>

      
       
//       </a>
//       <p className="text-body-primary" style={{textAlign:'center',}}>Copyright© 2025. All rights reserved</p>
//     </div>

//     <div className="col mb-3">

//     </div>

//     <div className="col mb-3">
//   <h5>LAPLOOT</h5>
//   <ul className="nav flex-column">
//     <li className="nav-item mb-2">
//       <HashLink to="/#top" className="nav-link p-0 text-white">Home</HashLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/features" className="nav-link p-0 text-white">Features</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/pricing" className="nav-link p-0 text-white">Pricing</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/Contact_form" className="nav-link p-0 text-white">Contact us</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/about" className="nav-link p-0 text-white">About</NavLink>
//     </li>
//   </ul>
// </div>

// <div className="col mb-3">
//   <h5>Content</h5>
//   <ul className="nav flex-column">
//     <li className="nav-item mb-2">
//       <Link smooth to="/#top" className="nav-link p-0 text-white">Home</Link>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/features" className="nav-link p-0 text-white">Features</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/pricing" className="nav-link p-0 text-white">Pricing</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/Contact_form" className="nav-link p-0 text-white">Contact us</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/about" className="nav-link p-0 text-white">About</NavLink>
//     </li>
//   </ul>
// </div>

// <div className="col mb-3">
//   <h5>Section</h5>
//   <ul className="nav flex-column">
//     <li className="nav-item mb-2">
//       <NavLink to="/" className="nav-link p-0 text-white">Home</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/features" className="nav-link p-0 text-white">Features</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/pricing" className="nav-link p-0 text-white">Pricing</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/Contact_form" className="nav-link p-0 text-white">Contact us</NavLink>
//     </li>
//     <li className="nav-item mb-2">
//       <NavLink to="/about" className="nav-link p-0 text-white">About</NavLink>
//     </li>
//   </ul>
// </div>

//   </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashLink as HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-1 border-top">
      <div className="col mb-3">
        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
          <ul>
            <img
              src="/main_logo.png"
              alt="Laptop"
              className="my-1 img-fluid"
              style={{ maxWidth: '100px', filter: 'invert(1)' }}
            />
            <img
              src="/laploot-logo-text-removebg-preview.png"
              alt="Laptop"
              className="my-1 img-fluid"
              style={{ maxWidth: '164px', filter: 'invert(1)' }}
            />
          </ul>
        </a>
        <p className="text-body-primary" style={{ textAlign: 'center' }}>
          © 2025. All rights reserved
        </p>
      </div>

      <div className="col mb-3"></div>

      <div className="col mb-3">
        <h5>LAPLOOT</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <HashLink to="/#top" className="nav-link p-0 text-white">
              Home
            </HashLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/features" className="nav-link p-0 text-white">
              Features
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/pricing" className="nav-link p-0 text-white">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/contact" className="nav-link p-0 text-white">
              Contact us
            </NavLink>
          </li>
          <li className="nav-item mb-2">
          <li className="nav-item mb-2">
            <HashLink to="/about" className="nav-link p-0 text-white">
              About
            </HashLink>
          </li>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Content</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link smooth to="/#top" className="nav-link p-0 text-white">
              Home
            </Link>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/features" className="nav-link p-0 text-white">
              Features
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/pricing" className="nav-link p-0 text-white">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/contact" className="nav-link p-0 text-white">
              Contact us
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <HashLink to="/about" className="nav-link p-0 text-white">
              About
            </HashLink>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink to="/" className="nav-link p-0 text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/features" className="nav-link p-0 text-white">
              Features
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/pricing" className="nav-link p-0 text-white">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink to="/contact" className="nav-link p-0 text-white">
              Contact us
            </NavLink>
          </li>
          <li className="nav-item mb-2">
          <li className="nav-item mb-2">
            <HashLink to="/about" className="nav-link p-0 text-white">
              About
            </HashLink>
          </li>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
