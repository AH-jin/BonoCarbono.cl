import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler
} from 'chart.js';
import { Bar, Pie, Doughnut, PolarArea } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState, useRef, useEffect } from 'react';
import './CarbonCharts.css';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  ChartDataLabels
);

// Personalizar tooltips globalmente
ChartJS.defaults.set('plugins.tooltip', {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  titleFont: { size: 14, weight: 'bold' },
  bodyFont: { size: 13 },
  bodySpacing: 5,
  padding: 12,
  borderColor: 'rgba(255, 255, 255, 0.2)',
  borderWidth: 1,
  cornerRadius: 8,
  usePointStyle: true,
  callbacks: {
    labelTextColor: () => '#fff'
  }
});

// Desactivar animaciones globales
ChartJS.defaults.set('animation', {
  duration: 0
});

ChartJS.defaults.set('elements.arc', {
  borderWidth: 2,
  borderColor: '#fff',
  hoverBorderWidth: 3,
  hoverBorderColor: '#fff',
});

const CarbonCharts = ({ data }) => {
  // Estado para controlar la visualización activa
  const [activeChart, setActiveChart] = useState('all');
  const chartRefs = {
    bar: useRef(null),
    pie: useRef(null),
    doughnut: useRef(null),
    polar: useRef(null)
  };
  
  // Configuración de colores por categoría
  const categoryColors = {
    'industrias': { bg: 'rgba(46, 125, 50, 0.7)', border: 'rgba(46, 125, 50, 1)' },
    'transportes': { bg: 'rgba(25, 118, 210, 0.7)', border: 'rgba(25, 118, 210, 1)' },
    'agricultura': { bg: 'rgba(104, 159, 56, 0.7)', border: 'rgba(104, 159, 56, 1)' },
    'ciudades': { bg: 'rgba(123, 31, 162, 0.7)', border: 'rgba(123, 31, 162, 1)' },
    'personas': { bg: 'rgba(211, 47, 47, 0.7)', border: 'rgba(211, 47, 47, 1)' },
    'energias': { bg: 'rgba(245, 124, 0, 0.7)', border: 'rgba(245, 124, 0, 1)' },
    'huellaHidrica': { bg: 'rgba(2, 136, 209, 0.7)', border: 'rgba(2, 136, 209, 1)' }
  };
  
  // Obtener colores según el orden de los datos
  const getChartColors = () => {
    return data.map(item => categoryColors[item.id]?.bg || 'rgba(76, 175, 80, 0.7)');
  };
  
  const getBorderColors = () => {
    return data.map(item => categoryColors[item.id]?.border || 'rgba(76, 175, 80, 1)');
  };
  
  // Actualizar gráficos inmediatamente cuando cambian
  useEffect(() => {
    Object.values(chartRefs).forEach(ref => {
      if (ref.current && ref.current.chart) {
        ref.current.chart.update();
      }
    });
  }, [activeChart, data]);

  // Generar datos para gráfico de barras
  const getBarChartData = () => {
    return {
      labels: data.map(item => item.name),
      datasets: [
        {
          label: 'Valores',
          data: data.map(item => item.value),
          backgroundColor: getChartColors(),
          borderColor: getBorderColors(),
          borderWidth: 2,
          borderRadius: 6,
          hoverBackgroundColor: data.map(item => categoryColors[item.id]?.border || 'rgba(76, 175, 80, 1)'),
          hoverBorderWidth: 3,
          barPercentage: 0.8,
        }
      ]
    };
  };

  // Generar datos para gráfico circular
  const getPieChartData = () => {
    return {
      labels: data.map(item => item.name),
      datasets: [
        {
          label: 'Valores',
          data: data.map(item => item.value),
          backgroundColor: getChartColors(),
          borderColor: getBorderColors(),
          borderWidth: 2,
          hoverOffset: 15,
          hoverBackgroundColor: data.map(item => {
            const color = categoryColors[item.id]?.bg || 'rgba(76, 175, 80, 0.7)';
            return color.replace(/[\d\.]+\)$/, '0.9)');
          }),
        }
      ]
    };
  };
  
  // Generar datos para gráfico polar
  const getPolarChartData = () => {
    return {
      labels: data.map(item => item.name),
      datasets: [
        {
          label: 'Distribución',
          data: data.map(item => item.value),
          backgroundColor: getChartColors().map(color => color.replace(/[\d\.]+\)$/, '0.7)')),
          borderColor: getBorderColors(),
          borderWidth: 1,
        }
      ]
    };
  };

  // Opciones para los gráficos
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Valores por Categoría',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20,
        color: '#333'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return ` ${context.dataset.label}: ${context.raw}`;
          },
          labelTextColor: function() {
            return '#fff';
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 13
        },
        formatter: (value) => value,
        anchor: 'center',
        align: 'center',
        offset: 0,
        display: function(context) {
          return context.dataset.data[context.dataIndex] > 50;
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          borderDash: [5, 5],
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    },
    animation: {
      duration: 0
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };
  
  let delayed = false;

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      title: {
        display: true,
        text: 'Distribución de Valores',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20,
        color: '#333'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const total = context.chart.data.datasets[0].data.reduce((sum, val) => sum + val, 0);
            const percentage = Math.round((context.raw / total) * 100);
            return ` ${context.label}: ${context.raw} (${percentage}%)`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 12
        },
        formatter: (value, ctx) => {
          const total = ctx.dataset.data.reduce((sum, val) => sum + val, 0);
          const percentage = Math.round((value / total) * 100);
          return percentage + '%';
        },
        display: function(context) {
          return context.dataset.data[context.dataIndex] > 50;
        }
      }
    },
    animation: {
      duration: 0
    },
    layout: {
      padding: 20
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12
          },
          padding: 15,
          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: 'Proporción por Categoría',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20,
        color: '#333'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const total = context.chart.data.datasets[0].data.reduce((sum, val) => sum + val, 0);
            const percentage = Math.round((context.raw / total) * 100);
            return ` ${context.label}: ${context.raw} (${percentage}%)`;
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 12
        },
        formatter: (value, ctx) => {
          const total = ctx.dataset.data.reduce((sum, val) => sum + val, 0);
          const percentage = Math.round((value / total) * 100);
          return percentage > 5 ? percentage + '%' : '';
        }
      }
    },
    cutout: '60%',
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };
  
  const polarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Comparativa Radial',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return ` ${context.label}: ${context.raw}`;
          }
        }
      },
      datalabels: {
        display: false
      }
    },
    scales: {
      r: {
        ticks: {
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          font: {
            size: 10
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  // Función para cambiar entre gráficos
  const handleChartChange = (chartType) => {
    setActiveChart(chartType === activeChart ? 'all' : chartType);
  };

  return (
    <div className="carbon-charts">
      <h2 className="charts-title">
        Visualización de Datos de Carbono
        <span className="charts-subtitle">Análisis interactivo por categorías</span>
      </h2>
      
      <div className="chart-controls">
        <button 
          className={`chart-control-btn ${activeChart === 'all' || activeChart === 'bar' ? 'active' : ''}`}
          onClick={() => handleChartChange('bar')}
        >
          <i className="fa fa-bar-chart"></i> Barras
        </button>
        <button 
          className={`chart-control-btn ${activeChart === 'all' || activeChart === 'pie' ? 'active' : ''}`}
          onClick={() => handleChartChange('pie')}
        >
          <i className="fa fa-pie-chart"></i> Circular
        </button>
        <button 
          className={`chart-control-btn ${activeChart === 'all' || activeChart === 'doughnut' ? 'active' : ''}`}
          onClick={() => handleChartChange('doughnut')}
        >
          <i className="fa fa-circle-o-notch"></i> Anillo
        </button>
        <button 
          className={`chart-control-btn ${activeChart === 'all' || activeChart === 'polar' ? 'active' : ''}`}
          onClick={() => handleChartChange('polar')}
        >
          <i className="fa fa-sun-o"></i> Radial
        </button>
      </div>
      
      <div className={`charts-container ${activeChart !== 'all' ? 'single-chart' : ''}`}>
        <div 
          className={`chart-item ${activeChart === 'all' || activeChart === 'bar' ? 'visible' : 'hidden'}`}
        >
          <div className="chart-wrapper">
            <Bar ref={chartRefs.bar} data={getBarChartData()} options={barOptions} />
          </div>
        </div>
        
        <div 
          className={`chart-item ${activeChart === 'all' || activeChart === 'pie' ? 'visible' : 'hidden'}`}
        >
          <div className="chart-wrapper">
            <Pie ref={chartRefs.pie} data={getPieChartData()} options={pieOptions} />
          </div>
        </div>
        
        <div 
          className={`chart-item ${activeChart === 'all' || activeChart === 'doughnut' ? 'visible' : 'hidden'}`}
        >
          <div className="chart-wrapper">
            <Doughnut ref={chartRefs.doughnut} data={getPieChartData()} options={doughnutOptions} />
          </div>
        </div>
        
        <div 
          className={`chart-item ${activeChart === 'all' || activeChart === 'polar' ? 'visible' : 'hidden'}`}
        >
          <div className="chart-wrapper">
            <PolarArea ref={chartRefs.polar} data={getPolarChartData()} options={polarOptions} />
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default CarbonCharts;
