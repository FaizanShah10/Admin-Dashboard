import React, { useState } from 'react';
import { ordersData } from '../data/dummy';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 12;

  // Calculate the indices for the orders to display on the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = ordersData.slice(indexOfFirstOrder, indexOfLastOrder);

  // Calculate total pages
  const totalPages = Math.ceil(ordersData.length / ordersPerPage);

  // Handle Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="w-full h-32 bg-gray-200 dark:bg-zinc-800 dark:text-gray-200 rounded-md text-black flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">Orders</h2>
      </div>
      <div className="relative overflow-x-auto p-10 rounded-md bg-gray-100 dark:bg-zinc-900 m-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200  dark:bg-zinc-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Item</th>
              <th scope="col" className="px-6 py-3">Customer Name</th>
              <th scope="col" className="px-6 py-3">Total Price</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Order Id</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-100 border-b dark:bg-zinc-900 dark:border-gray-700"
              >
                <td className="px-6 py-4">
                  <img
                    className="w-16 h-16 rounded-md object-cover"
                    src={order.ProductImage}
                    alt={order.OrderItems}
                  />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.OrderItems}
                </th>
                <td className="px-6 py-4">{order.CustomerName}</td>
                <td className="px-6 py-4">{order.TotalAmount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-white ${
                      order.Status === 'pending'
                        ? 'bg-yellow-500'
                        : order.Status === 'complete'
                        ? 'bg-green-500'
                        : order.Status === 'active'
                        ? 'bg-cyan-500'
                        : 'bg-red-500'
                    }`}>  
                    {order.Status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.OrderID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4 mb-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 border rounded-md ${
              currentPage === index + 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Orders;
