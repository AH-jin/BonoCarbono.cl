import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">BonoCarbono.cl</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-icon__bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Menú vacío, se ha eliminado el botón de inicio */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
