import React, { useState } from "react";
import { employeesData } from "../data/dummy";
import { IoSearch } from "react-icons/io5";

const Employees = () => {
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 12;

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase()); 
  };

  // Filter employees by search input
  const filteredEmployees = employeesData.filter((emp) =>
    emp.Name.toLowerCase().includes(input)
  );

  // Pagination logic based on filtered employees
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Calculate total pages based on filtered employees
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="w-full h-32 bg-gray-200 rounded-md text-black flex justify-center items-center mb-10">
        <h2 className="text-3xl font-semibold">Employees</h2>
      </div>
          <div className="relative overflow-x-auto p-10 rounded-md bg-gray-100 m-10">
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
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Employee</th>
                  <th scope="col" className="px-6 py-3">Designation</th>
                  <th scope="col" className="px-6 py-3">Country</th>
                  <th scope="col" className="px-6 py-3">Hire Date</th>
                  <th scope="col" className="px-6 py-3">Reports To</th>
                </tr>
              </thead>
              <tbody>
              {currentEmployees.map((emp, index) => (
                  <tr
                    key={index}
                    className="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img
                        className="w-14 h-14 rounded-full object-cover"
                        src={emp.EmployeeImage}
                        alt={emp.Name}
                      />
                      <p>{emp.Name}</p>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {emp.Title}
                    </td>
                    <td className="px-6 py-4">{emp.Country}</td>
                    <td className="px-6 py-4">{emp.HireDate}</td>
                    <td className="px-6 py-4">{emp.ReportsTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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

export default Employees;
