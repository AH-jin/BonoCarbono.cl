import React from 'react';
import LineChart from '../components/LineChart';
import './LineChartExample.css';

const LineChartExample = () => {
  // Datos de ejemplo basados en la imagen que mostraste
  const monthlyData = [
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

  return (
    <div className="page-container">
      <h1 className="page-title">Gráfico de Línea</h1>
      <p className="page-description">
        Este gráfico muestra la tendencia de valores mensuales a lo largo del año.
        Está implementado con restricciones para evitar desbordamientos y daños a la página.
      </p>
      
      <div className="chart-section">
        <LineChart data={monthlyData} />
      </div>
    </div>
  );
};

export default LineChartExample;
