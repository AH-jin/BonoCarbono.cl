import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './LineChart.css';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const LineChart = ({ data = [] }) => {
  // Hook para detectar el ancho de la ventana
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  
  // Efecto para actualizar el ancho de la ventana cuando cambia
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determinar si estamos en un dispositivo móvil
  const isMobile = windowWidth < 768;
  const isSmallMobile = windowWidth < 576;
  // Datos comparativos de emisiones de CO2 por hectárea (kg CO2/ha) para cada mes
  // Basado en los valores de la página: tractor (18.5 kg CO2/ha) vs dron (1.07 kg CO2/ha)
  const defaultData = [
    // Valores mensuales que reflejan variaciones estacionales pero mantienen la proporción
    { month: 'Enero', tractor: 16.5, dron: 0.95 },
    { month: 'Febrero', tractor: 17.2, dron: 0.99 },
    { month: 'Marzo', tractor: 18.0, dron: 1.04 },
    { month: 'Abril', tractor: 19.5, dron: 1.12 },
    { month: 'Mayo', tractor: 20.8, dron: 1.20 },
    { month: 'Junio', tractor: 21.5, dron: 1.25 },
    { month: 'Julio', tractor: 20.0, dron: 1.15 },
    { month: 'Agosto', tractor: 18.7, dron: 1.08 },
    { month: 'Septiembre', tractor: 17.5, dron: 1.01 },
    { month: 'Octubre', tractor: 16.8, dron: 0.97 },
    { month: 'Noviembre', tractor: 17.0, dron: 0.98 },
    { month: 'Diciembre', tractor: 16.2, dron: 0.94 }
  ];

  // Usar los datos proporcionados o los datos por defecto
  const chartData = data.length > 0 ? data : defaultData;

  // Configuración de los datos del gráfico
  const lineData = {
    labels: chartData.map(item => item.month),
    datasets: [
      {
        label: 'Emisiones con Tractor (kg CO₂/ha)',
        data: chartData.map(item => item.tractor),
        backgroundColor: 'rgba(229, 57, 53, 0.15)',
        borderColor: 'rgba(229, 57, 53, 1)',
        borderWidth: isMobile ? 2 : 3,
        pointBackgroundColor: 'rgba(229, 57, 53, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.4,
        fill: true,
        // Restricciones para evitar desbordamiento
        spanGaps: true,
        clip: {left: 5, top: 0, right: 5, bottom: 0},
      },
      {
        label: 'Emisiones con Dron (kg CO₂/ha)',
        data: chartData.map(item => item.dron),
        backgroundColor: 'rgba(46, 125, 50, 0.15)',
        borderColor: 'rgba(46, 125, 50, 1)',
        borderWidth: isMobile ? 2 : 3,
        pointBackgroundColor: 'rgba(46, 125, 50, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: isMobile ? 4 : 6,
        pointHoverRadius: isMobile ? 6 : 8,
        tension: 0.4,
        fill: true,
        spanGaps: true,
        clip: {left: 5, top: 0, right: 5, bottom: 0},
      }
    ]
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: isMobile ? 20 : 30,
        right: 20,
        bottom: 10,
        left: isMobile ? 5 : 10
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 25,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          borderDash: [5, 5],
        },
        border: {
          display: false
        },
        ticks: {
          font: {
            size: isMobile ? 11 : 13,
            weight: '500'
          },
          color: '#666',
          padding: 5,
          stepSize: 5,
          callback: function(value) {
            if (value === 0) return '0 kg CO₂/ha';
            return value.toLocaleString('es-CL') + ' kg CO₂/ha';
          }
        },
        title: {
          display: !isSmallMobile,
          text: 'kg CO₂/ha',
          font: {
            size: isMobile ? 12 : 14,
            weight: 'bold'
          },
          color: '#333',
          padding: {top: 0, bottom: 10}
        }
      },
      x: {
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          font: {
            size: isMobile ? 11 : 13,
            weight: '500'
          },
          color: '#666',
          padding: 5
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: {
          boxWidth: isMobile ? 12 : 15,
          boxHeight: isMobile ? 12 : 15,
          font: {
            size: isMobile ? 12 : 14,
            weight: '600'
          },
          padding: isMobile ? 15 : 20,
          usePointStyle: true,
          pointStyleWidth: isMobile ? 10 : 12
        },
      },
      title: {
        display: true,
        text: 'Comparativa de Emisiones',
        font: {
          size: isMobile ? 16 : 18,
          weight: 'bold'
        },
        padding: 10,
        color: '#333'
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        titleFont: { size: isMobile ? 13 : 15, weight: 'bold' },
        bodyFont: { size: isMobile ? 12 : 14 },
        bodySpacing: 6,
        padding: 10,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return `${context.raw.toLocaleString('es-CL')} kg CO₂/ha`;
          }
        }
      },
      datalabels: {
        display: function(context) {
          // Mostrar solo algunos puntos para evitar superposición
          // En móviles pequeños, mostrar menos etiquetas
          if (isSmallMobile) {
            return context.dataIndex % 3 === 0;
          }
          // En otros dispositivos, mostrar etiquetas alternadas
          return context.dataIndex % 2 === 0;
        },
        align: function(context) {
          // Alternar posición para evitar superposición
          return context.datasetIndex === 0 ? 'top' : 'bottom';
        },
        anchor: 'end',
        offset: function(context) {
          // Más espacio para las etiquetas del tractor (arriba)
          return context.datasetIndex === 0 ? 10 : -10;
        },
        backgroundColor: function(context) {
          return context.dataset.borderColor;
        },
        borderRadius: 4,
        color: 'white',
        font: {
          weight: 'bold',
          size: isSmallMobile ? 9 : (isMobile ? 10 : 11)
        },
        formatter: function(value) {
          return value.toLocaleString('es-CL');
        },
        padding: isSmallMobile ? 3 : 4
      }
    }
  };

  return (
    <div className="chart-wrapper">
      <Line 
        data={lineData} 
        options={options} 
        height={isSmallMobile ? 250 : (isMobile ? 280 : 300)}
      />
    </div>
  );
};

export default LineChart;
