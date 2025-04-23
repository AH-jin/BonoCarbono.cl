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
  RadialLinearScale
} from 'chart.js';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
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
  RadialLinearScale
);

const CarbonCharts = ({ data }) => {
  // Configuración de colores
  const chartColors = [
    'rgba(46, 125, 50, 0.7)',    // Verde primario
    'rgba(76, 175, 80, 0.7)',    // Verde secundario
    'rgba(129, 199, 132, 0.7)',  // Verde claro
    'rgba(27, 94, 32, 0.7)',     // Verde oscuro
    'rgba(56, 142, 60, 0.7)',    // Verde medio
    'rgba(102, 187, 106, 0.7)',   // Verde menta
    'rgba(174, 213, 129, 0.7)'   // Verde lima
  ];
  
  const borderColors = [
    'rgba(46, 125, 50, 1)',
    'rgba(76, 175, 80, 1)',
    'rgba(129, 199, 132, 1)',
    'rgba(27, 94, 32, 1)',
    'rgba(56, 142, 60, 1)',
    'rgba(102, 187, 106, 1)',
    'rgba(174, 213, 129, 1)'
  ];

  // Generar datos para gráfico de barras
  const getBarChartData = () => {
    return {
      labels: data.map(item => item.name),
      datasets: [
        {
          label: 'Valores',
          data: data.map(item => item.value),
          backgroundColor: chartColors,
          borderColor: borderColors,
          borderWidth: 1,
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
          backgroundColor: chartColors,
          borderColor: borderColors,
          borderWidth: 1,
        }
      ]
    };
  };

  // Opciones para los gráficos
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Valores por Categoría',
        font: {
          size: 16
        }
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Distribución de Valores',
        font: {
          size: 16
        }
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Proporción por Categoría',
        font: {
          size: 16
        }
      },
    },
    cutout: '50%'
  };

  return (
    <div className="carbon-charts">
      <div className="charts-container">
        <div className="chart-item">
          <Bar data={getBarChartData()} options={barOptions} />
        </div>
        
        <div className="chart-item">
          <Pie data={getPieChartData()} options={pieOptions} />
        </div>
        
        <div className="chart-item">
          <Doughnut data={getPieChartData()} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default CarbonCharts;
