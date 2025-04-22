import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">BonoCarbono.cl</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              ¿Qué son?
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
