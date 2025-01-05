import React, { useState } from "react";
import { customersData } from "../data/dummy";
import { IoSearch } from "react-icons/io5";

const Customers = () => {
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const CustomerPerPage = 12;

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  // Filter customers by search input
  const filteredCustomers = customersData.filter((customer) =>
    customer.CustomerName.toLowerCase().includes(input)
  );

  // Pagination logic
  const indexOfLastCustomer = currentPage * CustomerPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - CustomerPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  // Correct total pages calculation
  const totalPages = Math.ceil(filteredCustomers.length / CustomerPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="w-full h-24 md:h-32 bg-gray-200 dark:bg-zinc-800 dark:text-gray-200 rounded-md text-black flex justify-center items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Customers</h2>
      </div>
      <div className="relative overflow-x-auto p-10 rounded-md bg-gray-100 dark:bg-zinc-900 m-10">
        <div className="mb-2 flex items-center gap-3">
          <input
            className="py-1 px-1 pr-4 text-sm outline-none bg-transparent border-b-2 transition-all duration-300 focus:border-blue-500"
            type="text"
            placeholder="Search by name..."
            onChange={handleInput}
            value={input}
          />
          <IoSearch className="text-gray-500" />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-zinc-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Customer</th>
              <th scope="col" className="px-6 py-3">Project</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Weeks</th>
              <th scope="col" className="px-6 py-3">Budget</th>
              <th scope="col" className="px-6 py-3">Location</th>
              <th scope="col" className="px-6 py-3">Customer ID</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-100 border-b dark:bg-zinc-900 dark:border-gray-700"
              >
                <td className="px-6 py-4 flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    src={customer.CustomerImage}
                    alt={customer.CustomerName}
                  />
                  <p>{customer.CustomerName}</p>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {customer.ProjectName}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        customer.Status === "Pending"
                          ? "bg-yellow-500"
                          : customer.Status === "Completed"
                          ? "bg-green-500"
                          : customer.Status === "Active"
                          ? "bg-cyan-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <p>{customer.Status}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{customer.Weeks}</td>
                <td className="px-6 py-4">{customer.Budget}</td>
                <td className="px-6 py-4">{customer.Location}</td>
                <td className="px-6 py-4">{customer.CustomerID}</td>
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
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Customers;
