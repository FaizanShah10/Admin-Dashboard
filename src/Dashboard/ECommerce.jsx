import React from 'react';
import { BsDot } from 'react-icons/bs';

import { earningData, SparklineAreaData } from '../data/dummy';
import SparkLine from '../Charts/SparkLine';
import Stacked from '../Charts/Stacked';

const ECommerce = () => {
  return (
    <div className="p-4">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {earningData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-secondary-dark-bg p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: card.iconBg }}
            >
              {card.icon}
            </div>
            <div>
              <p className="mt-3">
                <span className="text-lg font-semibold">{card.amount}</span>
                <span className={`text-sm text-${card.pcColor} ml-2`}>
                  {card.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Section */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between items-center sm:items-start mx-auto max-w-full">
        {/* Left Side */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl w-full sm:w-[48%] p-4">
          <p className="font-semibold text-xl">Revenue Updates</p>
          <div className="mt-4">
            <p>
              <span className="text-3xl font-semibold">$93,438</span>
              <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                23%
              </span>
            </p>
            <p className="text-gray-500 mt-1">Budget</p>
            <div className="mt-10">
              <p>
                <span className="text-3xl font-semibold">$48,487</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-red-400 ml-3 text-xs">
                  19%
                </span>
              </p>
              <p className="text-gray-500 mt-1">Expense</p>
            </div>
          </div>

          {/* SparkLine Chart */}
          <div className="mt-5">
            <SparkLine
              id="line-SparkLine"
              currentColor="blue"
              data={SparklineAreaData}
              width="100%"
              height="150px"
              type="line"
              color="blue"
            />
          </div>

          <div className="mt-5">
            <button className="px-3 py-3 bg-blue-500 rounded-md text-white text-sm">
              Download Report
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl w-full sm:w-[48%] p-4">
          <div className="mt-4 flex justify-start gap-4">
            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
              <span className="font-extrabold text-2xl">
                <BsDot />
              </span>
              <span>Expense</span>
            </p>
            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
              <span className="font-extrabold text-2xl">
                <BsDot />
              </span>
              <span>Budget</span>
            </p>
          </div>

          {/* Stacked Chart */}
          <div className="mt-10">
            <Stacked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
