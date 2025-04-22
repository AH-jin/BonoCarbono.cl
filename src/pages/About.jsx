import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-title">¿Qué son los Bonos de Carbono?</h1>
          <p className="page-subtitle">Conoce todo sobre esta herramienta clave para combatir el cambio climático</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-content">
              <h2 className="section-title">Entendiendo los Bonos de Carbono</h2>
              <p>
                Los bonos de carbono son instrumentos financieros que representan la reducción, eliminación o 
                evitación de emisiones de gases de efecto invernadero (GEI) en la atmósfera. Cada bono equivale 
                a una tonelada métrica de dióxido de carbono (CO₂) o su equivalente en otros gases.
              </p>
              <p>
                Estos certificados son generados por proyectos que contribuyen a la reducción de emisiones, 
                como iniciativas de energía renovable, reforestación, conservación de bosques o mejoras en 
                eficiencia energética.
              </p>
              <p>
                El objetivo principal de los bonos de carbono es crear un sistema de incentivos económicos 
                para reducir las emisiones globales de gases de efecto invernadero, permitiendo que las 
                empresas e individuos compensen su huella de carbono.
              </p>
            </div>
            <div className="about-intro-image">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" alt="Bosque y naturaleza" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Historia y Evolución</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1997</div>
              <div className="timeline-content">
                <h3>Protocolo de Kyoto</h3>
                <p>
                  El concepto de bonos de carbono se estableció formalmente en el Protocolo de Kyoto, 
                  un acuerdo internacional que comprometió a los países industrializados a reducir sus 
                  emisiones de gases de efecto invernadero.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h3>Mercado de Carbono Europeo</h3>
                <p>
                  La Unión Europea lanza el primer y más grande mercado de carbono del mundo, 
                  el Sistema de Comercio de Emisiones de la UE (EU ETS).
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Acuerdo de París</h3>
                <p>
                  El Acuerdo de París refuerza el compromiso global para limitar el calentamiento global 
                  y establece un marco para que los países desarrollen mercados de carbono.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Artículo 6 del Acuerdo de París</h3>
                <p>
                  Se establecen las reglas para los mercados internacionales de carbono, facilitando 
                  la cooperación entre países para reducir emisiones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tipos de Bonos de Carbono</h2>
          <div className="types-grid grid grid-2">
            <div className="type-card card">
              <h3 className="type-title">Mercado Regulado (Compliance)</h3>
              <p>
                Operan bajo regímenes regulatorios obligatorios como el EU ETS o el California Cap-and-Trade. 
                Las empresas en estos mercados están legalmente obligadas a reducir sus emisiones o comprar 
                bonos para compensarlas.
              </p>
              <ul className="type-features">
                <li>Mayor precio por tonelada de CO₂</li>
                <li>Estricta regulación y verificación</li>
                <li>Limitado a ciertos tipos de proyectos</li>
              </ul>
            </div>
            
            <div className="type-card card">
              <h3 className="type-title">Mercado Voluntario</h3>
              <p>
                Permite a empresas, organizaciones e individuos compensar voluntariamente sus emisiones 
                de carbono sin obligación legal. Ofrece mayor flexibilidad y variedad de proyectos.
              </p>
              <ul className="type-features">
                <li>Mayor diversidad de proyectos</li>
                <li>Precios más accesibles</li>
                <li>Estándares como Verra, Gold Standard, Climate Action Reserve</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-accent">
        <div className="container">
          <h2 className="section-title">Beneficios de los Bonos de Carbono</h2>
          <div className="benefits-grid grid grid-3">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h3>Ambientales</h3>
              <ul>
                <li>Reducción de emisiones de GEI</li>
                <li>Conservación de ecosistemas</li>
                <li>Promoción de energías limpias</li>
                <li>Protección de la biodiversidad</li>
              </ul>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Económicos</h3>
              <ul>
                <li>Generación de ingresos para comunidades locales</li>
                <li>Creación de nuevos mercados</li>
                <li>Incentivos para tecnologías limpias</li>
                <li>Valorización de servicios ecosistémicos</li>
              </ul>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Sociales</h3>
              <ul>
                <li>Mejora de la calidad de vida</li>
                <li>Creación de empleo</li>
                <li>Transferencia de tecnología</li>
                <li>Desarrollo de capacidades locales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">¿Cómo se verifica la reducción real de emisiones?</h3>
              <p className="faq-answer">
                Los proyectos de bonos de carbono son verificados por terceros independientes acreditados, 
                siguiendo metodologías establecidas por estándares internacionales. Estos verificadores 
                evalúan si el proyecto realmente reduce emisiones y en qué cantidad.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Cuánto cuesta un bono de carbono?</h3>
              <p className="faq-answer">
                El precio varía significativamente según el tipo de mercado (regulado o voluntario), 
                el tipo de proyecto, la ubicación y los beneficios adicionales. En el mercado voluntario, 
                los precios pueden oscilar entre $3 y $50 por tonelada de CO₂, mientras que en mercados 
                regulados pueden alcanzar los $100 o más.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Quién puede comprar bonos de carbono?</h3>
              <p className="faq-answer">
                Cualquier persona, empresa u organización puede comprar bonos de carbono en el mercado 
                voluntario. En los mercados regulados, generalmente solo participan las empresas que 
                están obligadas por ley a reducir sus emisiones.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Los bonos de carbono realmente ayudan al medio ambiente?</h3>
              <p className="faq-answer">
                Cuando están bien implementados y verificados, los bonos de carbono pueden ser una 
                herramienta efectiva para reducir emisiones globales y financiar proyectos ambientales 
                que de otra manera no serían viables. Sin embargo, es importante asegurar que los 
                proyectos generen reducciones reales, adicionales y permanentes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
