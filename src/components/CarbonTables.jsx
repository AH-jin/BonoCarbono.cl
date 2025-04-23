import React from 'react';
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
                    <div className="reduction-label">REDUCCIÓN</div>
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
                    <div className="reduction-label">REDUCCIÓN</div>
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
      </div>
    </section>
  );
};

export default CarbonTables;
