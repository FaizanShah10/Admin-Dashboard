import React from 'react';
import { BsDot } from 'react-icons/bs';

import {earningData} from '../data/dummy'

const ECommerce = () => {
  const cardsData = [
    {
      icon: <span className="bg-black text-white p-2 rounded-full">Icon</span>,
      title: "Bookings",
      value: "281",
      percentage: "+55%",
      description: "than last week",
      color: "text-green-500",
    },
    {
      icon: <span className="bg-blue-500 text-white p-2 rounded-full">Icon</span>,
      title: "Today's Users",
      value: "2,300",
      percentage: "+3%",
      description: "than last month",
      color: "text-green-500",
    },
    {
      icon: <span className="bg-green-500 text-white p-2 rounded-full">Icon</span>,
      title: "Revenue",
      value: "34k",
      percentage: "+1%",
      description: "than yesterday",
      color: "text-green-500",
    },
    {
      icon: <span className="bg-pink-500 text-white p-2 rounded-full">Icon</span>,
      title: "Followers",
      value: "+91",
      percentage: "Just updated",
      description: "",
      color: "text-gray-500",
    },
  ];

  return (
    <div className="p-4">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {earningData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-secondary-dark-bg p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ backgroundColor: card.iconBg }}>
              {card.icon}
            </div>
            <div>
              
            <p className="mt-3">
                <span className="text-lg font-semibold">{card.amount}</span>
                <span className={`text-sm text-${card.pcColor} ml-2`}>
                  {card.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Section */}
      <div className='flex gap-10 flex-wrap justify-between  m-3 pl-20 pr-20 pt-10'>
        {/* Left Side */}
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780'>
          <p className="font-semibold text-xl">Revenue Updates</p>
          <div className='mt-4'>
            <p>
              <span className="text-3xl font-semibold">$93,438</span>
              <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                23%
              </span>
            </p>
            <p className="text-gray-500 mt-1">Budget</p>
            <div className='mt-10'>
              <p>
                <span className="text-3xl font-semibold">$48,487</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-400 ml-3 text-xs">
                  19%
                </span>
              </p>
              <p className="text-gray-500 mt-1">Expense</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-4 '>
          <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
            <span className='font-extrabold text-2xl'>
              <BsDot />
            </span>
            <span>Expense</span>
          </p>
          <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
            <span className='font-extrabold text-2xl'>
              <BsDot />
            </span>
            <span>Budget</span>
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default ECommerce;
