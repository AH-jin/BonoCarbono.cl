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

        {/* El icono de menú hamburguesa ha sido eliminado */}

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Menú vacío, se ha eliminado el botón de inicio */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
