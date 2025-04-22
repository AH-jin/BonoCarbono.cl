import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un backend
    console.log('Formulario enviado:', formData);
    setFormSubmitted(true);
    
    // Resetear el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
    
    // Mostrar el mensaje de éxito por 5 segundos
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">Estamos aquí para ayudarte con tus consultas sobre bonos de carbono</p>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2 className="contact-title">Información de Contacto</h2>
              <p className="contact-description">
                Ponte en contacto con nosotros para obtener más información sobre nuestros servicios
                o para programar una consulta inicial gratuita.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Dirección</h3>
                    <p>Av. Providencia 1234, Santiago, Chile</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Teléfono</h3>
                    <p>+56 9 1234 5678</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@bonocarbono.cl</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Horario de Atención</h3>
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="social-media">
                <h3>Síguenos en Redes Sociales</h3>
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
            </div>
            
            <div className="contact-form-container">
              <h2 className="contact-title">Envíanos un Mensaje</h2>
              
              {formSubmitted && (
                <div className="form-success">
                  <i className="fas fa-check-circle"></i>
                  <p>¡Gracias por contactarnos! Te responderemos a la brevedad.</p>
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Tu email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu teléfono"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="asesoria">Asesoría y Consultoría</option>
                    <option value="certificacion">Certificación de Proyectos</option>
                    <option value="compraventa">Compra y Venta de Bonos</option>
                    <option value="huella">Cálculo de Huella de Carbono</option>
                    <option value="desarrollo">Desarrollo de Proyectos</option>
                    <option value="capacitacion">Capacitación y Formación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn submit-btn">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53260.47083162427!2d-70.64960294179686!3d-33.43769599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf2928ff1d3f%3A0x8b5a366d49f1323!2sProvidencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1650308000000!5m2!1ses!2scl" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">¿Cuánto tiempo toma recibir una respuesta?</h3>
              <p className="faq-answer">
                Nos comprometemos a responder todas las consultas en un plazo máximo de 24 horas hábiles.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Ofrecen servicios fuera de Chile?</h3>
              <p className="faq-answer">
                Sí, trabajamos con clientes en toda Latinoamérica. Contamos con experiencia en proyectos
                internacionales y conocimiento de las normativas de diferentes países.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Cuál es el costo de una asesoría inicial?</h3>
              <p className="faq-answer">
                Ofrecemos una primera consulta gratuita para evaluar tus necesidades y explicarte
                cómo podemos ayudarte. Después de esta consulta, te presentaremos una propuesta
                personalizada con los costos detallados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
