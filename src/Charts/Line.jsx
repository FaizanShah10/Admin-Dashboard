import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { lineChartData } from '../data/dummy';

const Line = () => {
  
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <LineChart
      width={800}
      height={500}
      series={[
        { data: pData, label: 'pv', curve: 'linear' },
        { data: uData, label: 'uv', curve: 'linear' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </div>
  );
};

export default Line;
