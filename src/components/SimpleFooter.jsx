import './SimpleFooter.css';

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="simple-footer">
      <div className="container">
        <p>&copy; {currentYear} BonoCarbono.cl. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
