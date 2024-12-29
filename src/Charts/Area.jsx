import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useStateContext } from '../Context/ContextProvider';

const Area = () => {

    const {currentMode} = useStateContext()

  return (
    <div>
      <div className="w-full h-32 bg-gray-200 dark:bg-zinc-800 rounded-md text-black dark:text-gray-200 flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">Inflation Rate</h2>
      </div>

      <div className="flex justify-center items-center">
        <LineChart
          xAxis={[
            {
              data: ['2017', '2018', '2019', '2020', '2021', '2024'],
              scaleType: 'point',
              stroke:currentMode === 'Dark' ? 'gray' : 'black', // Dark mode axis lines
              tickStroke: currentMode === 'Dark' ? '#E5E7EB' : 'black', // Tick color for x-axis
              tickLabelStyle: {
                fill: currentMode === 'Dark' ? '#E5E7EB' : '#000', // Tick text color
              },
            },
          ]}
          yAxis={[
            {
              stroke: currentMode === 'Dark' ? 'gray' : 'black', // Dark mode axis lines
              tickStroke: currentMode === 'Dark' ? '#E5E7EB' : 'black', // Tick color for y-axis
              tickLabelStyle: {
                fill: currentMode === 'Dark' ? '#E5E7EB' : '#000', // Tick text color
              },
            },
          ]}
          series={[
            {
              data: [2, 5, 4, 8, 4, 6], // Data for Pakistan
              label: 'Pakistan',
              area: true,
              color: 'rgba(34, 197, 94, 0.6)', // Green color
              baseline: 0, // Baseline at zero
            },
            {
              data: [3, 6, 3, 7, 5, 7], // Data for USA
              label: 'USA',
              area: true,
              color: 'rgba(59, 130, 246, 0.6)', // Blue color
              baseline: 0,
            },
            {
              data: [1, 4, 2, 5, 3, 6], // Data for China
              label: 'China',
              area: true,
              color: 'rgba(239, 68, 68, 0.6)', // Red color
              baseline: 0,
            },
          ]}
          width={800}
          height={500}
          legend={{
            position: 'bottom', // Legend at the bottom
            labelStyle: {
              fill: currentMode === 'Dark' ? '#E5E7EB' : '#000', // Legend text color
            },
          }}
        />
      </div>
    </div>
  );
};

export default Area;
