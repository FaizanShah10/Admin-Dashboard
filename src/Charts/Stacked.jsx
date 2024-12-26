import React from 'react';
import { BarChart } from '@mui/x-charts';

const Stacked = () => {
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ];
  const expenseData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 7000]; 
  const budgetData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 3000]; 

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <div style={{ minWidth: 320, maxWidth: '100%', height: 'auto' }}>
        <BarChart
          width={500}
          height={300}
          series={[
            {
              data: expenseData,
              label: 'Expense',
              id: 'expenseId',
              stack: 'total',
              color: 'black', 
            },
            {
              data: budgetData,
              label: 'Budget',
              id: 'budgetId',
              stack: 'total',
              color: 'blue', 
            },
          ]}
          xAxis={[
            {
              data: xLabels,
              scaleType: 'band',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Stacked;
