import React from 'react';
import './CarbonTables.css';

const CarbonTables = () => {

  return (
    <section className="carbon-comparison-section">
      <div className="comparison-container">
        <div className="comparison-group">
          <h1 className="main-title">Huella de Carbono</h1>
          <p className="comparison-subtitle">Comparativa de tecnologías agrícolas</p>
          
          <div className="comparison-panel">
            <div className="comparison-cards">
              <div className="comparison-card tractor" data-aos="fade-right">
                <h2>Tractor</h2>
                <p className="carbon-value">18.5 kg CO<sub>2</sub>/ha</p>
              </div>
              
              <div className="comparison-card dron" data-aos="fade-left">
                <h2>Dron</h2>
                <p className="carbon-value">1.07 kg CO<sub>2</sub>/ha</p>
              </div>
            </div>
            
            <div className="comparison-text" data-aos="fade-up">
              <p>Comparación de la huella de carbono entre métodos tradicionales (tractor) y tecnología moderna (dron) en la agricultura.</p>
              
              <p>El uso de drones reduce la huella de carbono en aproximadamente un <strong>94%</strong> comparado con el uso de tractores.</p>
            </div>
          </div>
        </div>
        
        <div className="comparison-group">
          <h1 className="main-title">Huella Hídrica</h1>
          <p className="comparison-subtitle">Comparativa de consumo de agua</p>
          
          <div className="comparison-panel">
            <div className="comparison-cards">
              <div className="comparison-card tractor water" data-aos="fade-right">
                <h2>Tractor</h2>
                <p className="carbon-value">900 L/ha</p>
              </div>
              
              <div className="comparison-card dron water" data-aos="fade-left">
                <h2>Dron</h2>
                <p className="carbon-value">40 L/ha</p>
              </div>
            </div>
            
            <div className="comparison-text" data-aos="fade-up">
              <p>Comparación del consumo de agua entre métodos tradicionales (tractor) y tecnología moderna (dron) en la agricultura.</p>
              
              <p>El uso de drones reduce el consumo de agua en aproximadamente un <strong>96%</strong> comparado con el uso de tractores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonTables;
