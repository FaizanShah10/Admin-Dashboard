import React from 'react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiStoreAlt } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';

import { earningData } from '../data/dummy';

const ECommerce = () => {
  

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {earningData.map((data, index) => (
        <div
          key={index}
          className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow-md w-full sm:w-64 p-6 flex items-center gap-4"
        >
          <div
            style={{ color: data.iconColor, backgroundColor: data.iconBg }}
            className={`w-14 h-14 flex items-center justify-center rounded-full ${data.iconBg}`}
          >
            {data.icon}
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {data.title}
            </p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {data.value}
            </p>
            <p className="text-sm text-green-500 font-medium">
              {data.percentage}{' '}
              <span className="text-gray-500 dark:text-gray-400">
                {data.description}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ECommerce;
