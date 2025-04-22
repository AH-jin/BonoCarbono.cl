import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">Soluciones integrales para la gestión de bonos de carbono</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">¿Cómo Podemos Ayudarte?</h2>
          <p className="section-subtitle">
            Ofrecemos servicios especializados para empresas, organizaciones y particulares
            interesados en los bonos de carbono
          </p>

          <div className="services-grid grid grid-3">
            <div className="service-card card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="service-title">Asesoría y Consultoría</h3>
              <p className="service-description">
                Orientación especializada sobre mercados de carbono, normativas aplicables y
                oportunidades de inversión en bonos de carbono.
              </p>
              <Link to="/contact" className="btn service-btn">Solicitar asesoría</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">
                <i className="fas fa-file-signature"></i>
              </div>
              <h3 className="service-title">Certificación de Proyectos</h3>
              <p className="service-description">
                Acompañamiento en el proceso de certificación de proyectos para la generación
                de bonos de carbono bajo estándares internacionales.
              </p>
              <Link to="/contact" className="btn service-btn">Certificar proyecto</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3 className="service-title">Compra y Venta de Bonos</h3>
              <p className="service-description">
                Intermediación en la compra y venta de bonos de carbono, conectando a compradores
                con proyectos verificados que generan reducciones de emisiones.
              </p>
              <Link to="/contact" className="btn service-btn">Comprar/Vender bonos</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="service-title">Cálculo de Huella de Carbono</h3>
              <p className="service-description">
                Medición y análisis de la huella de carbono de empresas, productos o eventos,
                identificando oportunidades de reducción y compensación.
              </p>
              <Link to="/contact" className="btn service-btn">Calcular huella</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3 className="service-title">Desarrollo de Proyectos</h3>
              <p className="service-description">
                Diseño e implementación de proyectos de reducción de emisiones que generen
                bonos de carbono, desde la idea inicial hasta la comercialización.
              </p>
              <Link to="/contact" className="btn service-btn">Desarrollar proyecto</Link>
            </div>

            <div className="service-card card">
              <div className="service-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="service-title">Capacitación y Formación</h3>
              <p className="service-description">
                Programas de formación y talleres especializados sobre mercados de carbono,
                cambio climático y desarrollo sostenible.
              </p>
              <Link to="/contact" className="btn service-btn">Solicitar capacitación</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso</h2>
          <p className="section-subtitle">
            Trabajamos de manera estructurada para garantizar resultados óptimos
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Diagnóstico Inicial</h3>
                <p>
                  Evaluamos tu situación actual, necesidades y objetivos para entender cómo
                  podemos ayudarte de manera más efectiva.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Propuesta Personalizada</h3>
                <p>
                  Desarrollamos una estrategia a medida con soluciones adaptadas a tus
                  necesidades específicas y presupuesto.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Implementación</h3>
                <p>
                  Ejecutamos las acciones definidas en la estrategia, con un seguimiento
                  constante para asegurar el cumplimiento de los objetivos.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Seguimiento y Mejora Continua</h3>
                <p>
                  Monitoreamos los resultados y realizamos ajustes para optimizar el
                  desempeño y maximizar los beneficios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">¿Para Quién Trabajamos?</h2>
          <div className="clients-grid grid grid-2">
            <div className="client-group">
              <div className="client-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Empresas</h3>
              <ul className="client-list">
                <li>Empresas con obligaciones de reducción de emisiones</li>
                <li>Compañías comprometidas con la sostenibilidad</li>
                <li>Desarrolladores de proyectos de energía renovable</li>
                <li>Industrias con alta huella de carbono</li>
                <li>Empresas que buscan neutralidad de carbono</li>
              </ul>
            </div>

            <div className="client-group">
              <div className="client-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Organizaciones</h3>
              <ul className="client-list">
                <li>Gobiernos y entidades públicas</li>
                <li>ONGs ambientales</li>
                <li>Comunidades rurales y pueblos indígenas</li>
                <li>Instituciones académicas y de investigación</li>
                <li>Fondos de inversión sostenible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-accent">
        <div className="container">
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <div className="testimonials-grid grid grid-3">
            <div className="testimonial-card card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "Gracias a la asesoría de BonoCarbono.cl, logramos certificar nuestro proyecto
                forestal y generar bonos de carbono que han significado un ingreso adicional
                importante para nuestra comunidad."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-name">Juan Pérez</div>
                <div className="testimonial-position">Cooperativa Forestal El Arrayán</div>
              </div>
            </div>

            <div className="testimonial-card card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">
                "El servicio de cálculo de huella de carbono nos permitió identificar áreas
                de mejora en nuestros procesos y reducir significativamente nuestras emisiones.
                Altamente recomendable."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-name">María González</div>
                <div className="testimonial-position">Gerente de Sostenibilidad, Empresa ABC</div>
              </div>
            </div>

            <div className="testimonial-card card">
              <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="testimonial-text">
                "La capacitación que recibimos fue excelente, con contenido actualizado y
                muy práctico. Ahora entendemos mucho mejor cómo funcionan los mercados de
                carbono y cómo podemos participar en ellos."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-name">Roberto Silva</div>
                <div className="testimonial-position">Director, ONG Ambiente Futuro</div>
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
              Contáctanos hoy mismo para una consulta inicial gratuita y descubre cómo
              podemos ayudarte con los bonos de carbono.
            </p>
            <Link to="/contact" className="btn cta-button">Contactar ahora</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
