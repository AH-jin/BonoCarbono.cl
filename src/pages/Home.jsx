
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Bonos de Carbono</h1>
            <h2 className="hero-subtitle">Contribuye a un futuro sostenible</h2>
            <p className="hero-description">
              Descubre cómo los bonos de carbono están transformando la lucha contra el cambio climático
              y cómo puedes ser parte de esta revolución verde.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn">Conocer más</a>
              <a href="#" className="btn btn-outline">Contactar</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Bonos de Carbono" />
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para comenzar?</h2>
            <p className="cta-description">
              Contáctanos hoy mismo para obtener más información sobre cómo puedes invertir en bonos de carbono o certificar tu proyecto.
            </p>
            <a href="#" className="btn cta-button">Contactar ahora</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
