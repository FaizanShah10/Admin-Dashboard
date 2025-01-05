import React from 'react'
import { BarChart } from '@mui/x-charts';
import { useStateContext } from '../Context/ContextProvider';

const Bar = () => {

  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ];
  const expenseData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 7000]; 
  const budgetData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 3000]; 

  const { currentMode } = useStateContext()
    
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 dark:bg-zinc-800'  
    style={{ width: '100%', overflowX: 'auto' }}>
    <div style={{ minWidth: 320, maxWidth: '100%', height: 'auto' }}>
      <BarChart
        width={700}
        height={400}
        series={[
          { 
            data: expenseData,
            label: 'Expense',
            id: 'expenseId',
            stack: 'total',
            color: 'rgb(30 41 59)', 
          },
          { 
            data: budgetData,
            label: 'Budget',
            id: 'budgetId',
            stack: 'total',
            color: '#03C9D7',  
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: 'band',
            tickLabelStyle: {
              fill:  currentMode === 'Dark' ? '#E5E7EB' : '#000'
            }
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: {
              fill:  currentMode === 'Dark' ? '#E5E7EB' : '#000'
            }
          }
        ]}
      />
      
    </div>
    </div>
  )
}

export default Bar