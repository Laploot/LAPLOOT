import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HashLink as HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-3">
      <div className="d-flex align-items-center">
        <img src="/main_logo.png" alt="Laptop" className="my-4 img-fluid" style={{ maxWidth: '42px', filter: 'invert(1)' }} />
        <a className="navbar-brand text-white fw-bold ms-2" href="#">LAPLOOT</a>
      </div>

      <div className="mx-auto w-50 position-relative">
        <input
          className="form-control custom-search-input"
          type="search"
          placeholder="Search....."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <span className="material-icons-round search-icon">search</span>
      </div>

      {/* Menu icon for small screens only */}
      <span
        className="material-icons-round d-lg-none"
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      >
        menu
      </span>

      {/* Toggle-able icons */}
      <div className={`align-items-center ms-auto icon-group flex-column flex-lg-row ${isMenuOpen ? 'd-flex' : 'd-none'} d-lg-flex`}>
        <HashLink smooth to='/#about'><span className="material-icons-round">book</span></HashLink>
        <HashLink smooth to='/#top'><span className="material-icons-round">home</span></HashLink>
        <Link to='/contact'><span className="material-icons-round">call</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;
