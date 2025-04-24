import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import LineChart from './LineChart';
import './CarbonTables.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const CarbonTables = () => {
  // Calcular porcentajes de reducción
  const carbonReduction = ((18.5 - 1.07) / 18.5 * 100).toFixed(0);
  const waterReduction = ((900 - 40) / 900 * 100).toFixed(0);
  
  // Estado para manejar las pestañas
  const [activeTab, setActiveTab] = useState('mercado');

  // Datos para las tablas por sectores
  const tablesData = {
    mercado: {
      title: 'Datos del Mercado de Bonos de Carbono',
      headers: ['Categoría', 'Valor 2023-2024', 'Proyección 2025-2028', 'Proyección 2034-2050', 'CAGR'],
      rows: [
        ['Mercado Total', 'USD 669.370 millones', 'USD 933.230 millones (2025)', 'USD 16,38 billones (2034)', '37,68%'],
        ['Mercado Voluntario', 'USD 1.700 millones', 'N/A', 'USD 15.700 millones (2034)', '25%'],
        ['Ingresos por Fijación de Precios', 'USD 104.000 millones', 'N/A', 'N/A', 'N/A'],
        ['Mercado Global', 'N/A', 'USD 2,68 billones (2028)', 'USD 22 billones (2050)', '18,23%'],
        ['Cobertura de Emisiones Globales', '24%', 'N/A', 'N/A', 'N/A'],
      ]
    },
    industrias: {
      title: 'Bonos de Carbono en Industrias',
      headers: ['Sector Industrial', 'Emisiones (tCO₂e/año)', 'Potencial de Reducción (%)', 'Reducción CO₂ (tCO₂e/año)'],
      rows: [
        ['Manufactura', '0', '35%', '0'],
        ['Minería', '0', '28%', '0'],
        ['Petroquímica', '0', '42%', '0'],
        ['Siderúrgica', '0', '31%', '0'],
        ['Cementera', '0', '25%', '0'],
        ['Papelera', '0', '38%', '0'],
      ]
    },
    transportes: {
      title: 'Bonos de Carbono en Transportes',
      headers: ['Tipo de Transporte', 'Emisiones (tCO₂e/año)', 'Potencial de Reducción (%)', 'Reducción CO₂ (tCO₂e/año)', 'Proyectos de Compensación'],
      rows: [
        ['Buses Interurbanos', '0', '35%', '0', '56'],
        ['Buses Urbanos', '0', '42%', '0', '223'],
        ['Buses Rurales', '0', '30%', '0', '24'],
        ['Buses Privados', '0', '38%', '0', '0'],
        ['Camiones', '0', '25%', '0', '0'],
        ['Furgones', '0', '28%', '0', '0'],
        ['Automóviles', '0', '40%', '0', '0'],
        ['Camionetas', '0', '32%', '0', '0'],
        ['Motos', '0', '45%', '0', '0'],
      ]
    },
    agricultura: {
      title: 'Bonos de Carbono en Agricultura',
      headers: ['Sector Agrícola', 'Emisiones (tCO₂e/año)', 'Captura CO₂ Total (tCO₂)', 'Hectáreas en Programas'],
      rows: [
        ['Cultivos Tradicionales', '0', '0', '12.153'],
        ['Frutales', '0', '0', '16.820'],
      ]
    },
    ciudades: {
      title: 'Bonos de Carbono en Ciudades',
      headers: ['Ciudad', 'Emisiones Totales (tCO₂e/año)', 'Reducción CO₂ (tCO₂e/año)'],
      rows: [
        ['Santiago', '0', '0'],
        ['Concepción', '0', '0'],
        ['Valparaíso', '0', '0'],
        ['Antofagasta', '0', '0'],
        ['Temuco', '0', '0'],
        ['Puerto Montt', '0', '0'],
      ]
    },
    personas: {
      title: 'Bonos de Carbono para Personas',
      headers: ['Actividad', 'Huella Carbono Anual (tCO₂e)', 'Potencial de Reducción (%)', 'Reducción CO₂ Personal (tCO₂e/año)'],
      rows: [
        ['Transporte Diario', '0', '35%', '0'],
        ['Consumo Energético', '0', '40%', '0'],
        ['Alimentación', '0', '25%', '0'],
        ['Consumo de Bienes', '0', '30%', '0'],
        ['Viajes', '0', '20%', '0'],
        ['Servicios Digitales', '0', '45%', '0'],
      ]
    },
    energias: {
      title: 'Bonos de Carbono en Energías',
      headers: ['Fuente Energética', 'Reducción Emisiones (tCO₂e/MWh)', 'Capacidad Instalada (MW)', 'Reducción CO₂ Total (tCO₂e/año)'],
      rows: [
        ['Solar Fotovoltaica', '0', '0', '0'],
        ['Eólica', '0', '0', '0'],
        ['Hidroeléctrica', '0', '0', '0'],
        ['Biomasa', '0', '0', '0'],
        ['Geotérmica', '0', '0', '0'],
        ['Hidrógeno Verde', '0', '0', '0'],
      ]
    },
    huellaHidrica: {
      title: 'Bonos de Carbono y Huella Hídrica',
      headers: ['Sector', 'Huella Hídrica (m³/tCO₂e)', 'Potencial Reducción Agua (%)', 'Reducción CO₂ Asociada (tCO₂e/año)'],
      rows: [
        ['Agroindustria', '0', '35%', '0'],
        ['Minería', '0', '28%', '0'],
        ['Industria Alimentaria', '0', '40%', '0'],
        ['Textil', '0', '45%', '0'],
        ['Generación Eléctrica', '0', '30%', '0'],
        ['Consumo Urbano', '0', '25%', '0'],
      ]
    }
  };

  // Función para cambiar entre pestañas
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Función para renderizar la tabla activa
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
  
  // Opciones para el gráfico de huella de carbono
  const carbonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.7, // Hace que el gráfico sea más alto verticalmente
    layout: {
      padding: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#666'
        },
        title: {
          display: true,
          text: 'kg CO₂/ha',
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Huella de Carbono por Hectárea',
        font: {
          size: 20,
          weight: 'bold'
        },
        color: '#333',
        padding: {
          bottom: 30
        }
      },
      subtitle: {
        display: true,
        text: `Reducción del ${carbonReduction}% con el uso de drones`,
        font: {
          size: 16,
          style: 'italic'
        },
        color: '#666',
        padding: {
          bottom: 20
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        offset: 0,
        color: '#fff',
        font: {
          weight: 'bold',
          size: 16
        },
        formatter: (value) => `${value} kg CO₂/ha`,
        padding: 8,
        borderRadius: 4
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw} kg CO₂/ha`;
          },
          footer: function(tooltipItems) {
            if (tooltipItems[0].dataIndex === 1) { // Dron
              return `${carbonReduction}% menos que el tractor`;
            }
            return '';
          }
        }
      }
    }
  };
  
  // Datos para el gráfico de huella de carbono
  const carbonChartData = {
    labels: ['Tractor', 'Dron'],
    datasets: [
      {
        data: [18.5, 1.07],
        backgroundColor: ['#e53935', '#43a047'],
        borderColor: ['#c62828', '#2e7d32'],
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 80,
        maxBarThickness: 100
      }
    ]
  };
  
  // Opciones para el gráfico de huella hídrica
  const waterChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.7, // Hace que el gráfico sea más alto verticalmente
    layout: {
      padding: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#666'
        },
        title: {
          display: true,
          text: 'L/ha',
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Consumo de Agua por Hectárea',
        font: {
          size: 20,
          weight: 'bold'
        },
        color: '#333',
        padding: {
          bottom: 30
        }
      },
      subtitle: {
        display: true,
        text: `Reducción del ${waterReduction}% con el uso de drones`,
        font: {
          size: 16,
          style: 'italic'
        },
        color: '#666',
        padding: {
          bottom: 20
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        offset: 0,
        color: '#fff',
        font: {
          weight: 'bold',
          size: 16
        },
        formatter: (value) => `${value} L/ha`,
        padding: 8,
        borderRadius: 4
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw} L/ha`;
          },
          footer: function(tooltipItems) {
            if (tooltipItems[0].dataIndex === 1) { // Dron
              return `${waterReduction}% menos que el tractor`;
            }
            return '';
          }
        }
      }
    }
  };
  
  // Datos para el gráfico de huella hídrica
  const waterChartData = {
    labels: ['Tractor', 'Dron'],
    datasets: [
      {
        data: [900, 40],
        backgroundColor: ['#1976d2', '#29b6f6'],
        borderColor: ['#0d47a1', '#0288d1'],
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 80,
        maxBarThickness: 100
      }
    ]
  };

  return (
    <section className="carbon-comparison-section responsive-section">
      <div className="comparison-container">
        <div className="comparison-group highlighted-group">
          <h1 className="main-title highlighted-title">Toneladas<br/>Cuantificadas</h1>
          <p className="comparison-subtitle highlighted-subtitle">513.417 kg CO²</p>
        </div>
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
        
        <div className="comparison-group">
          <h1 className="main-title">Comparativa Gráfica</h1>
          <p className="comparison-subtitle">Visualización de datos</p>
          
          <div className="comparison-panel charts-panel">
            <div className="charts-row">
              <div className="chart-column" data-aos="fade-right">
                <h3 className="chart-subtitle">Emisiones de CO<sub>2</sub></h3>
                <div className="compact-chart-container">
                  <Bar options={carbonChartOptions} data={carbonChartData} height={300} />
                </div>
                <div className="reduction-info">
                  <div className="reduction-badge">
                    <div className="reduction-value">-94%</div>
                    <div className="reduction-label">REDUC<br/>CIÓN</div>
                  </div>
                  <div className="reduction-text">
                    <p>El uso de drones reduce <strong>17 veces</strong> las emisiones</p>
                    <div className="comparison-arrow">
                      <div className="arrow-label tractor">18.5 kg CO<sub>2</sub>/ha</div>
                      <div className="arrow"></div>
                      <div className="arrow-label dron">1.07 kg CO<sub>2</sub>/ha</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="chart-column" data-aos="fade-left">
                <h3 className="chart-subtitle">Consumo de Agua</h3>
                <div className="compact-chart-container">
                  <Bar options={waterChartOptions} data={waterChartData} height={300} />
                </div>
                <div className="reduction-info">
                  <div className="reduction-badge">
                    <div className="reduction-value">-96%</div>
                    <div className="reduction-label">REDUC<br/>CIÓN</div>
                  </div>
                  <div className="reduction-text">
                    <p>El uso de drones reduce <strong>22.5 veces</strong> el consumo de agua</p>
                    <div className="comparison-arrow">
                      <div className="arrow-label tractor">900 L/ha</div>
                      <div className="arrow"></div>
                      <div className="arrow-label dron">40 L/ha</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="line-chart-section">
              <h2 className="line-chart-title">Comparativa Mensual de Emisiones</h2>
              <div className="line-chart-content">
                <div className="line-chart-header">
                  <h3 className="line-chart-subtitle">Tractor vs Dron (kg CO₂/ha)</h3>
                  <p className="line-chart-description">Este gráfico muestra la comparación mensual de emisiones de CO₂ por hectárea entre el uso de tractores convencionales y drones. Se observa claramente la significativa reducción de emisiones al utilizar tecnología de drones.</p>
                </div>
                <div className="line-chart-wrapper-container">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="comparison-group">
          <h1 className="main-title">Comparativo Resumido</h1>
          <p className="comparison-subtitle">Para 6000 hectáreas</p>
          
          <div className="comparison-panel summary-panel">
            <div className="summary-content" data-aos="fade-up">
              <h2 className="summary-title">Conclusión:</h2>
              
              <div className="summary-item carbon-summary">
                <p>En términos de huella de carbono, el tractor genera aproximadamente 17 veces más emisiones que el dron (111 t vs. 6.42 t de CO<sub>2</sub>).</p>
              </div>
              
              <div className="summary-item water-summary">
                <p>En cuanto a consumo de agua, el tractor usa 22.5 veces más agua que el dron (900 L/ha frente a 40 L/ha), lo que se traduce en 5,400,000 L frente a 240,000 L en 6000 ha.</p>
              </div>
              
              <div className="summary-metrics">
                <div className="metric-item">
                  <h3>Bonos de Carbono en Agricultura</h3>
                  <p className="metric-value">104</p>
                </div>
                
                <div className="metric-item">
                  <h3>Reducción de Huella Hídrica</h3>
                  <p className="metric-value">5,160,000 Litros de agua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de tablas por sectores */}
        <div className="comparison-group tables-section">
          <h1 className="main-title">Datos sobre Bonos de Carbono</h1>
          <p className="comparison-subtitle">Información detallada por sectores y categorías</p>
          
          <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'mercado' ? 'active' : ''}`}
            onClick={() => handleTabChange('mercado')}
          >
            Mercado
          </button>
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
      </div>
    </section>
  );
};

export default CarbonTables;
