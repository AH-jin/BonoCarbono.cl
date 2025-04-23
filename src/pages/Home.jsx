
import './Home.css';
import CarbonTables from '../components/CarbonTables';
import LineChart from '../components/LineChart';

const Home = () => {
  return (
    <div className="home-page">
      {/* Carbon Tables Section */}
      <CarbonTables />



      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">¿Por qué los Bonos de Carbono?</h2>
          <p className="section-subtitle">Descubre los beneficios de invertir en bonos de carbono</p>
          
          <div className="features grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="feature-title">Impacto Ambiental</h3>
              <p className="feature-description">
                Contribuye directamente a la reducción de emisiones de gases de efecto invernadero y a la lucha contra el cambio climático.
              </p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="feature-title">Inversión Sostenible</h3>
              <p className="feature-description">
                Diversifica tu portafolio con una inversión que no solo genera retornos financieros, sino también beneficios ambientales.
              </p>
            </div>
            
            <div className="feature-card card">
              <div className="feature-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="feature-title">Certificación Internacional</h3>
              <p className="feature-description">
                Los bonos de carbono están respaldados por estándares internacionales que garantizan su calidad y efectividad.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">¿Cómo Funcionan?</h2>
          <p className="section-subtitle">El proceso de los bonos de carbono explicado de manera simple</p>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Identificación de Proyectos</h3>
                <p className="step-description">
                  Se identifican proyectos que reducen emisiones de gases de efecto invernadero, como energías renovables, reforestación o eficiencia energética.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Certificación y Verificación</h3>
                <p className="step-description">
                  Los proyectos son certificados por organismos independientes que verifican la reducción real de emisiones.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Emisión de Bonos</h3>
                <p className="step-description">
                  Por cada tonelada de CO₂ que se evita emitir, se genera un bono de carbono que puede ser comprado y vendido en el mercado.
                </p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Compensación de Emisiones</h3>
                <p className="step-description">
                  Empresas e individuos compran estos bonos para compensar sus propias emisiones y contribuir a la lucha contra el cambio climático.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
