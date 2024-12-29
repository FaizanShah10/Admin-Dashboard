import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { pieChartData } from '../data/dummy';

const Pie = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <div className="w-full h-32 bg-gray-200 dark:bg-zinc-800 rounded-md text-black dark:text-gray-200 flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">Expense Distribution</h2>
      </div>

      {/* Names of Elements on Top */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {pieChartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-black dark:text-gray-200"
          >
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: getColorForIndex(index) }}
            ></div>
            <span className="text-lg font-medium">{item.x}</span>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <PieChart
        series={[
          {
            data: pieChartData.map((item, index) => ({
              id: item.x, // Use the 'x' value as the identifier
              value: item.y, // The numerical value for the pie chart
              label: item.text,
              color: getColorForIndex(index), // Dynamic color for each slice
            })),
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={400}
        width={400}
        labelStyle={{
          fill: '#ffffff', // Label color (white for percentages)
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      />
    </div>
  );
};

/**
 * Generate a consistent color for each slice
 * @param {number} index - The index of the pie chart data
 * @returns {string} - The color
 */
const getColorForIndex = (index) => {
  const colors = [
    'rgba(34, 197, 94, 0.6)', // Green
    'rgba(59, 130, 246, 0.6)', // Blue
    'rgba(239, 68, 68, 0.6)', // Red
    'rgba(245, 158, 11, 0.6)', // Orange
    'rgba(79, 70, 229, 0.6)', // Purple
    'rgba(236, 72, 153, 0.6)', // Pink
    'rgba(16, 185, 129, 0.6)', // Teal
  ];
  return colors[index % colors.length];
};

export default Pie;
