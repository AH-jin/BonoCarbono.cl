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
  Filler
);

const LineChart = ({ data = [] }) => {
  // Datos exactos del gráfico mostrado en la imagen
  const defaultData = [
    { month: 'Enero', value: 35000 },
    { month: 'Febrero', value: 50000 },
    { month: 'Marzo', value: 20000 },
    { month: 'Abril', value: 10000 },
    { month: 'Mayo', value: 15000 },
    { month: 'Junio', value: 25000 },
    { month: 'Julio', value: 15000 },
    { month: 'Agosto', value: 10000 },
    { month: 'Septiembre', value: 35000 },
    { month: 'Octubre', value: 45000 },
    { month: 'Noviembre', value: 40000 },
    { month: 'Diciembre', value: 50000 }
  ];

  // Usar los datos proporcionados o los datos por defecto
  const chartData = data.length > 0 ? data : defaultData;

  // Configuración de los datos del gráfico
  const lineData = {
    labels: chartData.map(item => item.month),
    datasets: [
      {
        label: 'Valores mensuales',
        data: chartData.map(item => item.value),
        backgroundColor: 'rgba(46, 125, 50, 0.1)',
        borderColor: 'rgba(46, 125, 50, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(46, 125, 50, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
        fill: true,
        // Restricciones para evitar desbordamiento
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
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50000,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          borderDash: [5, 5],
        },
        border: {
          display: false
        },
        ticks: {
          font: {
            size: 11
          },
          color: '#666',
          padding: 5,
          stepSize: 15000,
          callback: function(value) {
            if (value === 0) return '0 €';
            return value.toLocaleString() + ' €';
          }
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
            size: 11
          },
          color: '#666',
          padding: 5
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Gráfico de línea',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 5,
        color: '#333'
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 13 },
        bodySpacing: 5,
        padding: 8,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        cornerRadius: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return `${context.raw.toLocaleString()} €`;
          }
        }
      },
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: '#333',
        font: {
          weight: 'bold',
          size: 11
        },
        padding: 0,
        formatter: (value) => value.toLocaleString()
      }
    }
  };

  // Renderizar el gráfico con etiquetas de valores
  const renderLabels = () => {
    return (
      <div className="line-chart-labels">
        {chartData.map((item, index) => (
          <div 
            key={index} 
            className="line-chart-label"
            style={{
              left: `${(index / (chartData.length - 1)) * 100}%`,
              top: `${100 - ((item.value - 5000) / 45000) * 100}%`
            }}
          >
            {item.value.toLocaleString()}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="chart-wrapper">
      <Line data={lineData} options={options} />
    </div>
  );
};

export default LineChart;
