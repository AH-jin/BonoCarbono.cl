import { useState, useEffect } from 'react';
import CarbonCharts from './CarbonCharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIndustry, 
  faTruck, 
  faSeedling, 
  faCity, 
  faUsers, 
  faBolt, 
  faWater 
} from '@fortawesome/free-solid-svg-icons';
import './CarbonTables.css';
import './CardStyle.css';

const CarbonTables = () => {
  const [cardData, setCardData] = useState([]);

  // Función para generar un número aleatorio entre min y max
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Generar datos al cargar el componente
  useEffect(() => {
    const categories = [
      { id: 'industrias', name: 'industrias', icon: faIndustry },
      { id: 'transportes', name: 'transportes', icon: faTruck },
      { id: 'agricultura', name: 'agricultura', icon: faSeedling },
      { id: 'ciudades', name: 'ciudades', icon: faCity },
      { id: 'personas', name: 'personas', icon: faUsers },
      { id: 'energias', name: 'energías', icon: faBolt },
      { id: 'huellaHidrica', name: 'huella hídrica', icon: faWater }
    ];
    
    const generatedData = categories.map(category => ({
      ...category,
      value: getRandomNumber(100, 500)
    }));
    
    setCardData(generatedData);
  }, []);

  const tablesData = {
    industrias: {
      title: 'Bonos de Carbono en Industrias',
      headers: ['Sector Industrial', 'Valor'],
      rows: [
        ['Manufactura', getRandomNumber(100, 500)],
        ['Minería', getRandomNumber(100, 500)],
        ['Petroquímica', getRandomNumber(100, 500)],
        ['Siderúrgica', getRandomNumber(100, 500)],
        ['Cementera', getRandomNumber(100, 500)],
        ['Papelera', getRandomNumber(100, 500)],
      ]
    },
    transportes: {
      title: 'Bonos de Carbono en Transportes',
      headers: ['Tipo de Transporte', 'Valor'],
      rows: [
        ['Transporte Terrestre', getRandomNumber(100, 500)],
        ['Aviación', getRandomNumber(100, 500)],
        ['Transporte Marítimo', getRandomNumber(100, 500)],
        ['Ferroviario', getRandomNumber(100, 500)],
        ['Logística Urbana', getRandomNumber(100, 500)],
        ['Transporte Público', getRandomNumber(100, 500)],
      ]
    },
    agricultura: {
      title: 'Bonos de Carbono en Agricultura',
      headers: ['Sector Agrícola', 'Valor'],
      rows: [
        ['Cultivos Extensivos', getRandomNumber(100, 500)],
        ['Ganadería', getRandomNumber(100, 500)],
        ['Arroz', getRandomNumber(100, 500)],
        ['Silvicultura', getRandomNumber(100, 500)],
        ['Horticultura', getRandomNumber(100, 500)],
        ['Agricultura Regenerativa', getRandomNumber(100, 500)],
      ]
    },
    ciudades: {
      title: 'Bonos de Carbono en Ciudades',
      headers: ['Ciudad', 'Valor'],
      rows: [
        ['Santiago', getRandomNumber(100, 500)],
        ['Concepción', getRandomNumber(100, 500)],
        ['Valparaíso', getRandomNumber(100, 500)],
        ['Antofagasta', getRandomNumber(100, 500)],
        ['Temuco', getRandomNumber(100, 500)],
        ['Puerto Montt', getRandomNumber(100, 500)],
      ]
    },
    personas: {
      title: 'Bonos de Carbono para Personas',
      headers: ['Actividad', 'Valor'],
      rows: [
        ['Transporte Diario', getRandomNumber(100, 500)],
        ['Consumo Energético', getRandomNumber(100, 500)],
        ['Alimentación', getRandomNumber(100, 500)],
        ['Consumo de Bienes', getRandomNumber(100, 500)],
        ['Viajes', getRandomNumber(100, 500)],
        ['Servicios Digitales', getRandomNumber(100, 500)],
      ]
    },
    energias: {
      title: 'Bonos de Carbono en Energías',
      headers: ['Fuente Energética', 'Valor'],
      rows: [
        ['Solar Fotovoltaica', getRandomNumber(100, 500)],
        ['Eólica', getRandomNumber(100, 500)],
        ['Hidroeléctrica', getRandomNumber(100, 500)],
        ['Biomasa', getRandomNumber(100, 500)],
        ['Geotérmica', getRandomNumber(100, 500)],
        ['Hidrógeno Verde', getRandomNumber(100, 500)],
      ]
    },
    huellaHidrica: {
      title: 'Bonos de Carbono y Huella Hídrica',
      headers: ['Sector', 'Valor'],
      rows: [
        ['Agroindustria', getRandomNumber(100, 500)],
        ['Minería', getRandomNumber(100, 500)],
        ['Industria Alimentaria', getRandomNumber(100, 500)],
        ['Textil', getRandomNumber(100, 500)],
        ['Generación Eléctrica', getRandomNumber(100, 500)],
        ['Consumo Urbano', getRandomNumber(100, 500)],
      ]
    }
  };



  const renderCards = () => {
    return (
      <div className="cards-container">
        {cardData.map((item, index) => {
          // Diferentes animaciones para hacer más dinámico
          const animations = ['fade-up', 'fade-down', 'fade-right', 'fade-left', 'zoom-in', 'flip-left'];
          const randomAnim = animations[index % animations.length];
          
          return (
            <div 
              key={item.id} 
              className="card-item" 
              data-category={item.id}
              data-aos={randomAnim}
              data-aos-duration="800"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-bottom"
              onClick={() => {
                // Añadir efecto al hacer clic
                const element = document.querySelector(`[data-category="${item.id}"]`);
                element.classList.add('card-pulse');
                setTimeout(() => {
                  element.classList.remove('card-pulse');
                }, 500);
              }}
            >
              <div className="card-header">
                <FontAwesomeIcon icon={item.icon} className="card-icon" />
                {item.name}
              </div>
              <div className="card-body">
                <div className="card-value" data-aos="zoom-in" data-aos-delay={(index * 100) + 300}>
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Se eliminó la función renderTables que mostraba las tablas detalladas

  return (
    <section className="carbon-tables-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down" data-aos-duration="800">Indicadores de Bonos de Carbono</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Datos actualizados sobre bonos de carbono en diferentes sectores</p>
        
        {renderCards()}
        
        {cardData.length > 0 && (
          <div className="charts-section">
            <CarbonCharts data={cardData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CarbonTables;
