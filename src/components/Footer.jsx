
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">BonoCarbono.cl</h3>
          <p className="footer-description">
            Plataforma líder en información y gestión de bonos de carbono en Chile.
            Contribuyendo a un futuro más sostenible.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Enlaces rápidos</h3>
          <ul className="footer-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">¿Qué son?</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Servicios</h3>
          <ul className="footer-links">
            <li><a href="#">Asesoría en bonos de carbono</a></li>
            <li><a href="#">Certificación de proyectos</a></li>
            <li><a href="#">Compra y venta de bonos</a></li>
            <li><a href="#">Calculadora de huella de carbono</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Santiago, Chile</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+56 9 1234 5678</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@bonocarbono.cl</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} BonoCarbono.cl. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
