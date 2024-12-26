import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SparkLine = ({ data, color, width, height }) => {
  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: 'SparkLine Data',
        data: data.map((d) => d.value),
        borderColor: color,
        borderWidth: 2,
        fill: false,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width, height }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SparkLine;
