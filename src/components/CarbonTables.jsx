import { useState } from 'react';
import './CarbonTables.css';

const CarbonTables = () => {
  const [activeTab, setActiveTab] = useState('industrias');

  const tablesData = {
    industrias: {
      title: 'Bonos de Carbono en Industrias',
      headers: ['Sector Industrial', 'Emisiones (tCO₂e/año)', 'Potencial de Reducción (%)', 'Precio Bono (USD/tCO₂e)', 'Proyectos Activos'],
      rows: [
        ['Manufactura', '12,500,000', '35%', '$25-45', '156'],
        ['Minería', '8,750,000', '28%', '$30-50', '89'],
        ['Petroquímica', '15,200,000', '42%', '$35-60', '112'],
        ['Siderúrgica', '9,800,000', '31%', '$28-48', '74'],
        ['Cementera', '7,400,000', '25%', '$22-40', '63'],
        ['Papelera', '4,200,000', '38%', '$26-42', '58'],
      ]
    },
    transportes: {
      title: 'Bonos de Carbono en Transportes',
      headers: ['Tipo de Transporte', 'Emisiones (tCO₂e/año)', 'Potencial de Reducción (%)', 'Precio Bono (USD/tCO₂e)', 'Proyectos de Compensación'],
      rows: [
        ['Transporte Terrestre', '9,300,000', '40%', '$22-38', '124'],
        ['Aviación', '7,800,000', '25%', '$35-55', '67'],
        ['Transporte Marítimo', '6,500,000', '30%', '$28-45', '52'],
        ['Ferroviario', '2,100,000', '45%', '$20-35', '41'],
        ['Logística Urbana', '3,400,000', '38%', '$24-40', '83'],
        ['Transporte Público', '4,200,000', '50%', '$18-32', '95'],
      ]
    },
    agricultura: {
      title: 'Bonos de Carbono en Agricultura',
      headers: ['Sector Agrícola', 'Emisiones (tCO₂e/año)', 'Secuestro Potencial (tCO₂e/ha)', 'Precio Bono (USD/tCO₂e)', 'Hectáreas en Programas'],
      rows: [
        ['Cultivos Extensivos', '5,200,000', '3.5-7.2', '$18-30', '850,000'],
        ['Ganadería', '8,400,000', '2.1-4.8', '$20-35', '620,000'],
        ['Arroz', '3,100,000', '2.8-5.5', '$15-28', '340,000'],
        ['Silvicultura', '1,800,000', '8.5-15.2', '$25-45', '1,200,000'],
        ['Horticultura', '1,400,000', '3.2-6.8', '$22-38', '280,000'],
        ['Agricultura Regenerativa', '900,000', '10.5-18.2', '$30-50', '420,000'],
      ]
    },
    ciudades: {
      title: 'Bonos de Carbono en Ciudades',
      headers: ['Ciudad', 'Emisiones Totales (tCO₂e/año)', 'Emisiones per Cápita (tCO₂e)', 'Proyectos de Mitigación', 'Inversión (Mill. USD)'],
      rows: [
        ['Santiago', '18,500,000', '5.2', '48', '325'],
        ['Concepción', '4,200,000', '4.8', '23', '120'],
        ['Valparaíso', '3,800,000', '4.5', '19', '95'],
        ['Antofagasta', '2,900,000', '5.8', '15', '85'],
        ['Temuco', '1,800,000', '4.2', '12', '65'],
        ['Puerto Montt', '1,200,000', '3.9', '8', '45'],
      ]
    },
    personas: {
      title: 'Bonos de Carbono para Personas',
      headers: ['Actividad', 'Huella Carbono Anual (tCO₂e)', 'Potencial de Reducción (%)', 'Costo Compensación (USD/año)', 'Participantes'],
      rows: [
        ['Transporte Diario', '2.8', '35%', '$45-120', '85,000'],
        ['Consumo Energético', '1.9', '40%', '$30-90', '120,000'],
        ['Alimentación', '1.5', '25%', '$25-70', '65,000'],
        ['Consumo de Bienes', '2.2', '30%', '$35-95', '48,000'],
        ['Viajes', '3.5', '20%', '$50-150', '32,000'],
        ['Servicios Digitales', '0.8', '45%', '$15-40', '95,000'],
      ]
    },
    energias: {
      title: 'Bonos de Carbono en Energías',
      headers: ['Fuente Energética', 'Reducción Emisiones (tCO₂e/MWh)', 'Inversión (USD/MW)', 'Retorno (años)', 'Proyectos Certificados'],
      rows: [
        ['Solar Fotovoltaica', '0.65', '$800,000-1,200,000', '5-8', '245'],
        ['Eólica', '0.58', '$1,000,000-1,500,000', '6-9', '178'],
        ['Hidroeléctrica', '0.72', '$1,500,000-2,800,000', '8-12', '92'],
        ['Biomasa', '0.48', '$900,000-1,400,000', '7-10', '63'],
        ['Geotérmica', '0.82', '$2,000,000-3,500,000', '10-15', '28'],
        ['Hidrógeno Verde', '0.95', '$2,500,000-4,000,000', '9-14', '15'],
      ]
    },
    huellaHidrica: {
      title: 'Bonos de Carbono y Huella Hídrica',
      headers: ['Sector', 'Huella Hídrica (m³/tCO₂e)', 'Potencial Reducción Agua (%)', 'Precio Bono Agua (USD/1000m³)', 'Proyectos Combinados'],
      rows: [
        ['Agroindustria', '4,500', '35%', '$350-650', '78'],
        ['Minería', '3,200', '28%', '$400-750', '52'],
        ['Industria Alimentaria', '5,800', '40%', '$300-600', '64'],
        ['Textil', '7,200', '45%', '$450-800', '39'],
        ['Generación Eléctrica', '2,800', '30%', '$250-500', '85'],
        ['Consumo Urbano', '1,900', '25%', '$200-450', '112'],
      ]
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTable = (data) => {
    return (
      <div className="carbon-table-container">
        <h2>{data.title}</h2>
        <div className="table-responsive">
          <table className="carbon-table">
            <thead>
              <tr>
                {data.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <section className="carbon-tables-section">
      <div className="container">
        <h1 className="section-title">Datos sobre Bonos de Carbono</h1>
        <p className="section-subtitle">Información detallada por sectores y categorías</p>
        
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'industrias' ? 'active' : ''}`}
            onClick={() => handleTabChange('industrias')}
          >
            Industrias
          </button>
          <button 
            className={`tab-button ${activeTab === 'transportes' ? 'active' : ''}`}
            onClick={() => handleTabChange('transportes')}
          >
            Transportes
          </button>
          <button 
            className={`tab-button ${activeTab === 'agricultura' ? 'active' : ''}`}
            onClick={() => handleTabChange('agricultura')}
          >
            Agricultura
          </button>
          <button 
            className={`tab-button ${activeTab === 'ciudades' ? 'active' : ''}`}
            onClick={() => handleTabChange('ciudades')}
          >
            Ciudades
          </button>
          <button 
            className={`tab-button ${activeTab === 'personas' ? 'active' : ''}`}
            onClick={() => handleTabChange('personas')}
          >
            Personas
          </button>
          <button 
            className={`tab-button ${activeTab === 'energias' ? 'active' : ''}`}
            onClick={() => handleTabChange('energias')}
          >
            Energías
          </button>
          <button 
            className={`tab-button ${activeTab === 'huellaHidrica' ? 'active' : ''}`}
            onClick={() => handleTabChange('huellaHidrica')}
          >
            Huella Hídrica
          </button>
        </div>
        
        {renderTable(tablesData[activeTab])}
      </div>
    </section>
  );
};

export default CarbonTables;
