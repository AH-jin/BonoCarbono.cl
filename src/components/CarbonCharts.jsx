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
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';
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

const CarbonCharts = ({ activeTab, tablesData }) => {
  // Configuración de colores
  const chartColors = [
    'rgba(46, 125, 50, 0.7)',    // Verde primario
    'rgba(76, 175, 80, 0.7)',    // Verde secundario
    'rgba(129, 199, 132, 0.7)',  // Verde claro
    'rgba(27, 94, 32, 0.7)',     // Verde oscuro
    'rgba(56, 142, 60, 0.7)',    // Verde medio
    'rgba(102, 187, 106, 0.7)'   // Verde menta
  ];
  
  const borderColors = [
    'rgba(46, 125, 50, 1)',
    'rgba(76, 175, 80, 1)',
    'rgba(129, 199, 132, 1)',
    'rgba(27, 94, 32, 1)',
    'rgba(56, 142, 60, 1)',
    'rgba(102, 187, 106, 1)'
  ];

  // Función para limpiar datos numéricos
  const cleanNumericData = (value) => {
    if (typeof value === 'string') {
      // Eliminar símbolos como %, $, etc. y convertir a número
      return parseFloat(value.replace(/[^0-9.-]/g, ''));
    }
    return value;
  };

  // Función para extraer rangos (ej. "25-45" -> promedio 35)
  const extractAverage = (value) => {
    if (typeof value === 'string' && value.includes('-')) {
      const parts = value.split('-');
      const min = parseFloat(parts[0].replace(/[^0-9.-]/g, ''));
      const max = parseFloat(parts[1].replace(/[^0-9.-]/g, ''));
      return (min + max) / 2;
    }
    return cleanNumericData(value);
  };

  // Generar datos para gráfico de barras
  const getBarChartData = () => {
    const data = tablesData[activeTab];
    const labels = data.rows.map(row => row[0]);
    
    // Usar la segunda columna para los datos (normalmente emisiones)
    const values = data.rows.map(row => extractAverage(row[1]));
    
    return {
      labels,
      datasets: [
        {
          label: data.headers[1],
          data: values,
          backgroundColor: chartColors,
          borderColor: borderColors,
          borderWidth: 1,
        }
      ]
    };
  };

  // Generar datos para gráfico circular
  const getPieChartData = () => {
    const data = tablesData[activeTab];
    const labels = data.rows.map(row => row[0]);
    
    // Usar la tercera columna para los datos (normalmente potencial de reducción)
    const values = data.rows.map(row => extractAverage(row[2]));
    
    return {
      labels,
      datasets: [
        {
          label: data.headers[2],
          data: values,
          backgroundColor: chartColors,
          borderColor: borderColors,
          borderWidth: 1,
        }
      ]
    };
  };

  // Generar datos para gráfico de línea
  const getLineChartData = () => {
    const data = tablesData[activeTab];
    const labels = data.rows.map(row => row[0]);
    
    // Usar la cuarta columna para los datos (normalmente precio)
    const values = data.rows.map(row => extractAverage(row[3]));
    
    return {
      labels,
      datasets: [
        {
          label: data.headers[3],
          data: values,
          backgroundColor: 'rgba(46, 125, 50, 0.2)',
          borderColor: 'rgba(46, 125, 50, 1)',
          borderWidth: 2,
          tension: 0.3,
          pointBackgroundColor: 'rgba(46, 125, 50, 1)',
        }
      ]
    };
  };

  // Generar datos para gráfico de radar
  const getRadarChartData = () => {
    const data = tablesData[activeTab];
    
    // Crear un dataset para cada fila, usando todas las columnas numéricas
    return {
      labels: data.headers.slice(1), // Excluir la primera columna que suele ser el nombre
      datasets: data.rows.map((row, index) => {
        return {
          label: row[0],
          data: row.slice(1).map(extractAverage), // Convertir todos los valores a números
          backgroundColor: chartColors[index % chartColors.length].replace('0.7', '0.2'),
          borderColor: borderColors[index % borderColors.length],
          borderWidth: 2,
        };
      }).slice(0, 3) // Limitar a 3 datasets para no sobrecargar el radar
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
        text: `Emisiones por ${activeTab === 'personas' ? 'Actividad' : 'Sector'}`,
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
        text: 'Potencial de Reducción',
        font: {
          size: 16
        }
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Precio de Bonos',
        font: {
          size: 16
        }
      },
    },
  };

  const radarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparativa de Indicadores',
        font: {
          size: 16
        }
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0
      }
    }
  };

  return (
    <div className="carbon-charts">
      <h2 className="charts-title">Visualización de Datos</h2>
      
      <div className="charts-container">
        <div className="chart-item">
          <Bar data={getBarChartData()} options={barOptions} />
        </div>
        
        <div className="chart-item">
          <Pie data={getPieChartData()} options={pieOptions} />
        </div>
        
        <div className="chart-item">
          <Line data={getLineChartData()} options={lineOptions} />
        </div>
        
        <div className="chart-item">
          <Radar data={getRadarChartData()} options={radarOptions} />
        </div>
      </div>
    </div>
  );
};

export default CarbonCharts;
